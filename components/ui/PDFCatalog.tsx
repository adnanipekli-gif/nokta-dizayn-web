'use client';

import { useState, useEffect, useRef, useCallback, forwardRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import HTMLFlipBook from 'react-pageflip';
import { ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut, X } from 'lucide-react';
import { useTranslations } from 'next-intl';

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

const RENDER_RADIUS = 4;
const MIN_ZOOM = 1;
const MAX_ZOOM = 4;

// Renders the PDF page at `renderWidth` (high-res when zoomed) then scales it
// down via CSS so the flipbook sees a stable width×height container.
// When the outer CSS zoom scales up, content is at native render resolution → crisp.
const FlipPage = forwardRef<
  HTMLDivElement,
  { pageNum: number; width: number; height: number; shouldRender: boolean; renderWidth: number }
>(({ pageNum, width, height, shouldRender, renderWidth }, ref) => {
  const downScale = renderWidth / width; // e.g. 2 when rendering at 2× quality
  return (
    <div
      ref={ref}
      className="bg-white shadow-inner"
      style={{ width, height, position: 'relative', overflow: 'hidden' }}
    >
      {shouldRender ? (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            transformOrigin: 'top left',
            transform: downScale !== 1 ? `scale(${1 / downScale})` : 'none',
          }}
        >
          <Page
            pageNumber={pageNum}
            width={renderWidth}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            loading={
              <div
                className="bg-[#f0ede8] animate-pulse"
                style={{ width: renderWidth, height: Math.round(height * downScale) }}
              />
            }
          />
        </div>
      ) : (
        <div className="bg-[#f0ede8]" style={{ width, height }} />
      )}
    </div>
  );
});
FlipPage.displayName = 'FlipPage';

export function PDFCatalog({ url = '/katalog-pdf/nokta-dizayn-katalog.pdf' }: { url?: string }) {
  const t = useTranslations('pdf_catalog');
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState({ width: 380, height: 537 });
  const bookRef = useRef<{
    pageFlip: () => { flipNext: () => void; flipPrev: () => void };
  }>(null);

  // Zoom & pan state
  const [cssZoom, setCssZoom] = useState(MIN_ZOOM);
  // renderZoom follows cssZoom with debounce so PDF re-renders at full quality
  // only after zooming settles — avoids thrashing during continuous scroll
  const [renderZoom, setRenderZoom] = useState(MIN_ZOOM);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ mouseX: 0, mouseY: 0, panX: 0, panY: 0 });
  const bookAreaRef = useRef<HTMLDivElement>(null);

  const isZoomed = cssZoom > MIN_ZOOM;

  // Sync renderZoom: immediately reset to 1 when unzooming,
  // otherwise debounce 350ms so PDF re-renders once zoom settles
  useEffect(() => {
    if (cssZoom <= MIN_ZOOM) { setRenderZoom(MIN_ZOOM); return; }
    const t = setTimeout(() => setRenderZoom(cssZoom), 350);
    return () => clearTimeout(t);
  }, [cssZoom]);

  const resetZoom = useCallback(() => {
    setCssZoom(MIN_ZOOM);
    setPan({ x: 0, y: 0 });
  }, []);

  const zoomBy = useCallback((delta: number) => {
    setCssZoom(prev => {
      const next = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, +(prev + delta).toFixed(2)));
      if (next <= MIN_ZOOM) setPan({ x: 0, y: 0 });
      return next;
    });
  }, []);

  // Page size from viewport (CSS transform handles zoom — no render scale)
  useEffect(() => {
    function calc() {
      const vh = window.innerHeight - 160;
      const vw = (window.innerWidth - 180) / 2;
      const byH = Math.floor(vh / 1.414);
      const w = Math.min(byH, Math.floor(vw), 520);
      setPageSize({ width: Math.round(w), height: Math.round(w * 1.414) });
    }
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      // Arrow keys flip pages only when not zoomed
      if (!isZoomed) {
        if (e.key === 'ArrowRight') bookRef.current?.pageFlip().flipNext();
        if (e.key === 'ArrowLeft') bookRef.current?.pageFlip().flipPrev();
      }
      if (e.key === 'Escape' && isZoomed) { resetZoom(); return; }
      if (e.ctrlKey && (e.key === '=' || e.key === '+')) { e.preventDefault(); zoomBy(0.25); }
      if (e.ctrlKey && e.key === '-') { e.preventDefault(); zoomBy(-0.25); }
      if (e.ctrlKey && e.key === '0') { e.preventDefault(); resetZoom(); }
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [isZoomed, resetZoom, zoomBy]);

  // Ctrl + scroll wheel → zoom (passive:false required to call preventDefault)
  useEffect(() => {
    const el = bookAreaRef.current;
    if (!el) return;
    const handler = (e: WheelEvent) => {
      if (!e.ctrlKey) return;
      e.preventDefault();
      zoomBy(e.deltaY < 0 ? 0.2 : -0.2);
    };
    el.addEventListener('wheel', handler, { passive: false });
    return () => el.removeEventListener('wheel', handler);
  }, [zoomBy]);

  // Double-click → zoom in (2×) when normal, reset when already zoomed.
  // disableFlipByClick={true} prevents the two preceding single-clicks from flipping pages.
  const handleDoubleClick = useCallback(() => {
    if (isZoomed) {
      resetZoom();
    } else {
      setCssZoom(2);
    }
  }, [isZoomed, resetZoom]);

  // Mouse drag for panning when zoomed
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!isZoomed) return;
    e.preventDefault();
    isDraggingRef.current = true;
    setIsDragging(true);
    dragStartRef.current = { mouseX: e.clientX, mouseY: e.clientY, panX: pan.x, panY: pan.y };
  }, [isZoomed, pan]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    setPan({
      x: dragStartRef.current.panX + (e.clientX - dragStartRef.current.mouseX),
      y: dragStartRef.current.panY + (e.clientY - dragStartRef.current.mouseY),
    });
  }, []);

  const stopDrag = useCallback(() => {
    isDraggingRef.current = false;
    setIsDragging(false);
  }, []);

  return (
    <div className="flex flex-col bg-[#0d0d14] min-h-[calc(100vh-4rem)] select-none">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-6 py-3 bg-[#16161f] border-b border-white/8 shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-xs text-white/40 font-mono">
            {numPages > 0
              ? t('page_indicator', { current: currentPage + 1, total: numPages })
              : t('loading')}
          </span>
          {isZoomed && (
            <span className="hidden sm:block text-[0.65rem] text-white/20 font-mono">
              sürükle: gezin · Esc: çık
            </span>
          )}
        </div>
        <div className="flex items-center gap-1">
          <Tbtn
            onClick={() => zoomBy(-0.25)}
            title={t('zoom_out')}
            disabled={cssZoom <= MIN_ZOOM}
          >
            <ZoomOut size={15} />
          </Tbtn>
          <span className="text-[0.7rem] text-white/35 w-10 text-center font-mono">
            {Math.round(cssZoom * 100)}%
          </span>
          <Tbtn
            onClick={() => zoomBy(0.25)}
            title={t('zoom_in')}
            disabled={cssZoom >= MAX_ZOOM}
          >
            <ZoomIn size={15} />
          </Tbtn>
          {isZoomed && (
            <Tbtn onClick={resetZoom} title="Zoom sıfırla (Esc)">
              <X size={15} />
            </Tbtn>
          )}
          <div className="w-px h-4 bg-white/10 mx-1" />
          <a
            href={url}
            download="nokta-dizayn-katalog.pdf"
            className="p-2 rounded-md text-white/40 hover:text-white hover:bg-white/8 transition-colors"
            title={t('download')}
          >
            <Download size={15} />
          </a>
        </div>
      </div>

      {/* Book area — handles zoom scroll + drag pan */}
      <div
        ref={bookAreaRef}
        className="flex-1 flex items-center justify-center gap-4 px-4 py-6 overflow-hidden"
        onDoubleClick={handleDoubleClick}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        style={{ cursor: isZoomed ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
      >
        <Nbtn
          onClick={() => bookRef.current?.pageFlip().flipPrev()}
          disabled={currentPage === 0 || isZoomed}
        >
          <ChevronLeft size={24} />
        </Nbtn>

        {/* Zoomable + pannable wrapper — pointer-events:none blocks flipbook when zoomed */}
        <div
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${cssZoom})`,
            transformOrigin: 'center center',
            transition: isDragging ? 'none' : 'transform 0.25s ease',
            pointerEvents: isZoomed ? 'none' : 'auto',
            willChange: 'transform',
          }}
        >
          <Document
            file={url}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            loading={
              <div className="flex gap-0" style={{ filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.8))' }}>
                <div className="bg-[#f0ede8] animate-pulse rounded-l-sm" style={{ width: pageSize.width, height: pageSize.height }} />
                <div className="bg-[#e8e5e0] animate-pulse rounded-r-sm" style={{ width: pageSize.width, height: pageSize.height }} />
              </div>
            }
          >
            {numPages > 0 && (
              <div style={{ filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.8))' }}>
                <HTMLFlipBook
                  ref={bookRef}
                  width={pageSize.width}
                  height={pageSize.height}
                  size="fixed"
                  minWidth={100}
                  maxWidth={800}
                  minHeight={100}
                  maxHeight={1200}
                  showCover={true}
                  mobileScrollSupport={!isZoomed}
                  onFlip={(e: { data: number }) => setCurrentPage(e.data)}
                  flippingTime={700}
                  style={{}}
                  startPage={0}
                  drawShadow={true}
                  usePortrait={false}
                  startZIndex={0}
                  autoSize={false}
                  maxShadowOpacity={0.7}
                  showPageCorners={!isZoomed}
                  disableFlipByClick={true}
                  className=""
                  swipeDistance={isZoomed ? 99999 : 30}
                  clickEventForward={!isZoomed}
                  useMouseEvents={!isZoomed}
                >
                  {Array.from({ length: numPages }, (_, i) => (
                    <FlipPage
                      key={i}
                      pageNum={i + 1}
                      width={pageSize.width}
                      height={pageSize.height}
                      renderWidth={Math.round(pageSize.width * renderZoom)}
                      shouldRender={Math.abs(i - currentPage) <= RENDER_RADIUS}
                    />
                  ))}
                </HTMLFlipBook>
              </div>
            )}
          </Document>
        </div>

        <Nbtn
          onClick={() => bookRef.current?.pageFlip().flipNext()}
          disabled={currentPage >= numPages - 1 || isZoomed}
        >
          <ChevronRight size={24} />
        </Nbtn>
      </div>

      {/* Page dots */}
      {numPages > 0 && (
        <div className="flex items-center justify-center gap-1 py-3 shrink-0 flex-wrap px-8">
          {Array.from({ length: Math.ceil(numPages / 2) }).map((_, i) => {
            const isActive = Math.floor(currentPage / 2) === i;
            return (
              <button
                key={i}
                onClick={() => {
                  if (isZoomed) return;
                  const spread = i * 2;
                  const diff = spread - currentPage;
                  for (let d = 0; d < Math.abs(diff); d++) {
                    diff > 0
                      ? bookRef.current?.pageFlip().flipNext()
                      : bookRef.current?.pageFlip().flipPrev();
                  }
                }}
                className={`rounded-full transition-all duration-200 ${
                  isActive ? 'w-5 h-1.5 bg-[#11B5FF]' : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
                } ${isZoomed ? 'opacity-30 cursor-default' : ''}`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

function Tbtn({
  children,
  onClick,
  title,
  disabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  title?: string;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      title={title}
      disabled={disabled}
      className="p-2 rounded-md text-white/40 hover:text-white hover:bg-white/8 transition-colors disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-white/40"
    >
      {children}
    </button>
  );
}

function Nbtn({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      onDoubleClick={(e) => e.stopPropagation()}
      disabled={disabled}
      className="w-11 h-11 rounded-full bg-white/8 hover:bg-white/15 disabled:opacity-20 disabled:cursor-not-allowed text-white flex items-center justify-center transition-all shrink-0"
    >
      {children}
    </button>
  );
}

'use client';

import { useState, useEffect, useRef, forwardRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import HTMLFlipBook from 'react-pageflip';
import { ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

// react-pageflip needs forwardRef pages
const FlipPage = forwardRef<HTMLDivElement, { pageNum: number; url: string; width: number; height: number }>(
  ({ pageNum, url, width, height }, ref) => (
    <div ref={ref} className="overflow-hidden bg-white" style={{ width, height }}>
      <Document file={url} loading={null} error={null}>
        <Page
          pageNumber={pageNum}
          width={width}
          height={height}
          renderAnnotationLayer={false}
          renderTextLayer={false}
          loading={<div className="bg-[#f0ede8] animate-pulse" style={{ width, height }} />}
        />
      </Document>
    </div>
  )
);
FlipPage.displayName = 'FlipPage';

interface PDFCatalogProps {
  url: string;
}

export function PDFCatalog({ url }: PDFCatalogProps) {
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState({ width: 380, height: 537 });
  const [scale, setScale] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const bookRef = useRef<{ pageFlip: () => { flipNext: () => void; flipPrev: () => void; getCurrentPageIndex: () => number } }>(null);

  // Auto-calculate page size
  useEffect(() => {
    function calc() {
      const vh = window.innerHeight - (isFullscreen ? 110 : 160);
      const vw = (window.innerWidth - 280) / 2; // half for double-page
      const byH = Math.floor(vh / 1.414);
      const w = Math.min(byH, Math.floor(vw), 520);
      setPageSize({ width: Math.round(w * scale), height: Math.round(w * 1.414 * scale) });
    }
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, [scale, isFullscreen]);

  const handleFlip = (e: { data: number }) => setCurrentPage(e.data);

  const goNext = () => bookRef.current?.pageFlip().flipNext();
  const goPrev = () => bookRef.current?.pageFlip().flipPrev();

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, []);

  const pages = numPages > 0
    ? Array.from({ length: numPages }, (_, i) => i + 1)
    : [];

  return (
    <div className={`flex flex-col bg-[#0d0d14] ${isFullscreen ? 'fixed inset-0 z-[9999]' : 'min-h-[calc(100vh-4rem)]'}`}>

      {/* Toolbar */}
      <div className="flex items-center justify-between px-6 py-3 bg-[#16161f] border-b border-white/8 shrink-0">
        <span className="text-xs text-white/40 font-mono">
          {numPages > 0 ? `Sayfa ${currentPage + 1} / ${numPages}` : 'Yükleniyor…'}
        </span>
        <div className="flex items-center gap-1">
          <Tbtn onClick={() => setScale(s => Math.max(0.4, +(s - 0.1).toFixed(1)))} title="Küçült"><ZoomOut size={15} /></Tbtn>
          <span className="text-[0.7rem] text-white/35 w-10 text-center font-mono">{Math.round(scale * 100)}%</span>
          <Tbtn onClick={() => setScale(s => Math.min(2, +(s + 0.1).toFixed(1)))} title="Büyüt"><ZoomIn size={15} /></Tbtn>
          <div className="w-px h-4 bg-white/10 mx-1" />
          <Tbtn onClick={() => setIsFullscreen(f => !f)} title="Tam ekran"><Maximize2 size={15} /></Tbtn>
          <a href={url} download className="p-2 rounded-md text-white/40 hover:text-white hover:bg-white/8 transition-colors" title="İndir">
            <Download size={15} />
          </a>
        </div>
      </div>

      {/* Book */}
      <div className="flex-1 flex items-center justify-center gap-5 px-4 py-6 overflow-hidden">
        <Nbtn onClick={goPrev} disabled={currentPage === 0}><ChevronLeft size={24} /></Nbtn>

        {/* Only render when we know page count */}
        {pages.length > 0 && (
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
              mobileScrollSupport={true}
              onFlip={handleFlip}
              flippingTime={700}
              style={{}}
              startPage={0}
              drawShadow={true}
              usePortrait={false}
              startZIndex={0}
              autoSize={false}
              maxShadowOpacity={0.7}
              showPageCorners={true}
              disableFlipByClick={false}
              className=""
              swipeDistance={30}
              clickEventForward={true}
              useMouseEvents={true}
            >
              {pages.map(pageNum => (
                <FlipPage
                  key={pageNum}
                  pageNum={pageNum}
                  url={url}
                  width={pageSize.width}
                  height={pageSize.height}
                />
              ))}
            </HTMLFlipBook>
          </div>
        )}

        {/* Loading state */}
        {pages.length === 0 && (
          <div className="flex items-center justify-center gap-0">
            <div className="bg-[#f0ede8] animate-pulse rounded-l-sm" style={{ width: pageSize.width, height: pageSize.height }} />
            <div className="bg-[#e8e5e0] animate-pulse rounded-r-sm" style={{ width: pageSize.width, height: pageSize.height }} />
            {/* Trigger numPages load */}
            <div className="hidden">
              <Document file={url} onLoadSuccess={({ numPages }) => setNumPages(numPages)} />
            </div>
          </div>
        )}

        <Nbtn onClick={goNext} disabled={currentPage >= numPages - 1}><ChevronRight size={24} /></Nbtn>
      </div>

      {/* Page dots */}
      {numPages > 0 && (
        <div className="flex items-center justify-center gap-1 py-3 shrink-0 flex-wrap px-8">
          {Array.from({ length: Math.ceil(numPages / 2) }).map((_, i) => {
            const isActive = Math.floor(currentPage / 2) === i;
            return (
              <button
                key={i}
                onClick={() => bookRef.current?.pageFlip().flipNext()}
                className={`rounded-full transition-all duration-200 ${isActive ? 'w-5 h-1.5 bg-[#11B5FF]' : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'}`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

function Tbtn({ children, onClick, title }: { children: React.ReactNode; onClick: () => void; title?: string }) {
  return (
    <button onClick={onClick} title={title} className="p-2 rounded-md text-white/40 hover:text-white hover:bg-white/8 transition-colors">
      {children}
    </button>
  );
}

function Nbtn({ children, onClick, disabled }: { children: React.ReactNode; onClick: () => void; disabled?: boolean }) {
  return (
    <button onClick={onClick} disabled={disabled} className="w-11 h-11 rounded-full bg-white/8 hover:bg-white/15 disabled:opacity-20 disabled:cursor-not-allowed text-white flex items-center justify-center transition-all shrink-0">
      {children}
    </button>
  );
}

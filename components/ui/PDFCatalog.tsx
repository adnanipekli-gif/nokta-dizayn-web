'use client';

import { useState, useEffect, useRef, forwardRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import HTMLFlipBook from 'react-pageflip';
import { ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut } from 'lucide-react';
import { useTranslations } from 'next-intl';

// CDN worker — Turbopack uyumlu
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const FlipPage = forwardRef<HTMLDivElement, { pageNum: number; width: number; height: number }>(
  ({ pageNum, width, height }, ref) => (
    <div ref={ref} className="overflow-hidden bg-white shadow-inner" style={{ width, height }}>
      <Page
        pageNumber={pageNum}
        width={width}
        renderAnnotationLayer={false}
        renderTextLayer={false}
        loading={<div className="bg-[#f0ede8] animate-pulse" style={{ width, height }} />}
      />
    </div>
  )
);
FlipPage.displayName = 'FlipPage';

export function PDFCatalog({ url = '/api/pdf-proxy' }: { url?: string }) {
  const t = useTranslations('pdf_catalog');
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [scale, setScale] = useState(1);
  const [pageSize, setPageSize] = useState({ width: 380, height: 537 });
  const bookRef = useRef<{
    pageFlip: () => { flipNext: () => void; flipPrev: () => void };
  }>(null);

  useEffect(() => {
    function calc() {
      const vh = window.innerHeight - 160;
      const vw = (window.innerWidth - 180) / 2;
      const byH = Math.floor(vh / 1.414);
      const w = Math.min(byH, Math.floor(vw), 520);
      setPageSize({ width: Math.round(w * scale), height: Math.round(w * 1.414 * scale) });
    }
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, [scale]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') bookRef.current?.pageFlip().flipNext();
      if (e.key === 'ArrowLeft') bookRef.current?.pageFlip().flipPrev();
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, []);

  return (
    <div className="flex flex-col bg-[#0d0d14] min-h-[calc(100vh-4rem)]">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-6 py-3 bg-[#16161f] border-b border-white/8 shrink-0">
        <span className="text-xs text-white/40 font-mono">
          {numPages > 0
            ? t('page_indicator', { current: currentPage + 1, total: numPages })
            : t('loading')}
        </span>
        <div className="flex items-center gap-1">
          <Tbtn onClick={() => setScale(s => Math.max(0.5, +(s - 0.1).toFixed(1)))} title={t('zoom_out')}>
            <ZoomOut size={15} />
          </Tbtn>
          <span className="text-[0.7rem] text-white/35 w-10 text-center font-mono">
            {Math.round(scale * 100)}%
          </span>
          <Tbtn onClick={() => setScale(s => Math.min(1.8, +(s + 0.1).toFixed(1)))} title={t('zoom_in')}>
            <ZoomIn size={15} />
          </Tbtn>
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

      {/* Book area */}
      <div className="flex-1 flex items-center justify-center gap-4 px-4 py-6 overflow-hidden">
        <Nbtn onClick={() => bookRef.current?.pageFlip().flipPrev()} disabled={currentPage === 0}>
          <ChevronLeft size={24} />
        </Nbtn>

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
                mobileScrollSupport={true}
                onFlip={(e: { data: number }) => setCurrentPage(e.data)}
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
                {Array.from({ length: numPages }, (_, i) => (
                  <FlipPage
                    key={i}
                    pageNum={i + 1}
                    width={pageSize.width}
                    height={pageSize.height}
                  />
                ))}
              </HTMLFlipBook>
            </div>
          )}
        </Document>

        <Nbtn
          onClick={() => bookRef.current?.pageFlip().flipNext()}
          disabled={currentPage >= numPages - 1}
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
                }`}
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
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-11 h-11 rounded-full bg-white/8 hover:bg-white/15 disabled:opacity-20 disabled:cursor-not-allowed text-white flex items-center justify-center transition-all shrink-0"
    >
      {children}
    </button>
  );
}

'use client';

import { useState } from 'react';
import { Download, ExternalLink } from 'lucide-react';

interface PDFCatalogProps {
  embedUrl: string;
  downloadUrl: string;
}

export function PDFCatalog({ embedUrl, downloadUrl }: PDFCatalogProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="flex flex-col bg-[#0d0d14] min-h-[calc(100vh-4rem)]">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-6 py-3 bg-[#16161f] border-b border-white/8 shrink-0">
        <span className="text-xs text-white/40 font-mono">Ürün Kataloğu</span>
        <div className="flex items-center gap-2">
          <a
            href={embedUrl.replace('/preview', '/view')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs text-white/60 hover:text-white hover:bg-white/8 transition-colors"
          >
            <ExternalLink size={13} />
            Yeni sekmede aç
          </a>
          <a
            href={downloadUrl}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs text-white/60 hover:text-white hover:bg-white/8 transition-colors"
          >
            <Download size={13} />
            İndir
          </a>
        </div>
      </div>

      {/* PDF Embed */}
      <div className="flex-1 relative">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center text-white/30 text-sm">
            Yükleniyor…
          </div>
        )}
        <iframe
          src={embedUrl}
          className="w-full h-full border-0"
          style={{ minHeight: 'calc(100vh - 7rem)' }}
          onLoad={() => setLoaded(true)}
          title="Ürün Kataloğu"
          allow="autoplay"
        />
      </div>
    </div>
  );
}

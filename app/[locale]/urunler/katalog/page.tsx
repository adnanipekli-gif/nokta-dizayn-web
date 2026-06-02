import type { Metadata } from 'next';
import { PDFCatalog } from '@/components/ui/PDFCatalog';

export const metadata: Metadata = {
  title: 'Ürün Kataloğu — Nokta Dizayn',
  description: 'Nokta Dizayn soğutma ekipmanları ve mağaza sistemleri ürün kataloğu.',
  alternates: { canonical: 'https://www.noktadizayn.com.tr/urunler/katalog' },
};

export default function KatalogPage() {
  return (
    <div className="pt-16">
      <PDFCatalog
        embedUrl="https://drive.google.com/file/d/1SCss5_-ADJSqFeYHd4M8y0uSGYmhObVl/preview"
        downloadUrl="https://drive.google.com/uc?export=download&id=1SCss5_-ADJSqFeYHd4M8y0uSGYmhObVl"
      />
    </div>
  );
}

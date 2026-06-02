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
      <PDFCatalog url="/katalog-pdf/www.noktadizayn.com.tr.pdf" />
    </div>
  );
}

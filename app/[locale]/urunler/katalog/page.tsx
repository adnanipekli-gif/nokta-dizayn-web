import type { Metadata } from 'next';
import { PDFCatalog } from '@/components/ui/PDFCatalog';
import { localizedAlternates } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Ürün Kataloğu — Nokta Dizayn',
    description: 'Nokta Dizayn soğutma ekipmanları ve mağaza sistemleri ürün kataloğu.',
    alternates: localizedAlternates(locale, '/urunler/katalog'),
  };
}

export default function KatalogPage() {
  return (
    <div className="pt-16">
      <PDFCatalog />
    </div>
  );
}

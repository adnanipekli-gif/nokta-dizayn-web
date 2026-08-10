import type { Metadata } from 'next';
import { StandHero } from '@/components/sections/stand/StandHero';
import { StandYetenekler } from '@/components/sections/stand/StandYetenekler';
import { FuarGaleri } from '@/components/sections/stand/FuarGaleri';
import { CTASection } from '@/components/sections/CTASection';
import { localizedAlternates } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Fuar ve Tanıtım Standları | Nokta Dizayn',
    description: 'Fuar standı tasarımı ve üretimi, kiosk uygulamaları, shop-in-shop ve showroom çözümleri. Konsept tasarımdan üretime, kurulumdan söküme tek ekip.',
    openGraph: {
      title: 'Fuar ve Tanıtım Standları | Nokta Dizayn',
      description: 'Konseptten söküme fuar standı, kiosk ve marka tanıtım alanı çözümleri.',
      images: ['/stand-sistemleri/20.png'],
      type: 'website',
    },
    alternates: localizedAlternates(locale, '/fuar-standlari'),
  };
}

export default function FuarStandlariPage() {
  return (
    <>
      <StandHero />
      <StandYetenekler />
      <FuarGaleri />
      <CTASection />
    </>
  );
}

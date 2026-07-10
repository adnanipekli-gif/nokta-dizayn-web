import type { Metadata } from 'next';
import { StandHero } from '@/components/sections/stand/StandHero';
import { StandYetenekler } from '@/components/sections/stand/StandYetenekler';
import { StandUygulamaAlanlari } from '@/components/sections/stand/StandUygulamaAlanlari';
import { StandSurec } from '@/components/sections/stand/StandSurec';
import { ReferansStandlar } from '@/components/sections/stand/ReferansStandlar';
import { StandGaleri } from '@/components/sections/stand/StandGaleri';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Fuar ve Tanıtım Standları | Nokta Dizayn',
  description: 'Fuar standı tasarımı ve üretimi, kiosk uygulamaları, shop-in-shop ve showroom çözümleri. Konsept tasarımdan üretime, kurulumdan söküme tek ekip.',
  openGraph: {
    title: 'Fuar ve Tanıtım Standları | Nokta Dizayn',
    description: 'Konseptten söküme fuar standı, kiosk ve marka tanıtım alanı çözümleri.',
    images: ['/stand-sistemleri/20.png'],
    type: 'website',
  },
  alternates: { canonical: 'https://noktadizayn.com.tr/fuar-standlari' },
};

export default function FuarStandlariPage() {
  return (
    <>
      <StandHero />
      <StandYetenekler />
      <StandUygulamaAlanlari />
      <StandSurec />
      <ReferansStandlar />
      <StandGaleri />
      <CTASection />
    </>
  );
}

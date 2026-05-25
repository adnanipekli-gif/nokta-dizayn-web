import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatsBar } from '@/components/sections/StatsBar';
import { StoreSystemsBlock } from '@/components/sections/StoreSystemsBlock';
import { ProductCategoryGrid } from '@/components/sections/ProductCategoryGrid';
import { ProjectProcessTimeline } from '@/components/sections/ProjectProcessTimeline';
import { SustainabilityBlock } from '@/components/sections/SustainabilityBlock';
import { ProductionPowerBlock } from '@/components/sections/ProductionPowerBlock';
import { ServiceSupportBlock } from '@/components/sections/ServiceSupportBlock';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Nokta Dizayn — Entegre Mağaza Sistemleri',
  description:
    "2003'ten bu yana soğutma ekipmanları, raf sistemleri, kasa üniteleri ve mağaza mobilyaları. 60+ ülkede 30.000+ noktaya entegre mağaza çözümleri.",
  openGraph: {
    title: 'Nokta Dizayn — Entegre Mağaza Sistemleri',
    description:
      "2003'ten bu yana soğutma ekipmanları, raf sistemleri, kasa ve mağaza mobilyaları.",
    url: 'https://www.noktadizayn.com.tr/',
  },
  alternates: {
    canonical: 'https://www.noktadizayn.com.tr/',
  },
};

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.noktadizayn.com.tr/#organization',
        name: 'Nokta Dizayn',
        url: 'https://www.noktadizayn.com.tr',
        foundingDate: '2003',
        description:
          'Entegre mağaza sistemleri — soğutma ekipmanları, raf ve reyon sistemleri, kasa üniteleri ve mağaza mobilyaları.',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+90-212-123-4567',
          contactType: 'customer service',
          availableLanguage: ['Turkish', 'English', 'Arabic'],
        },
        areaServed: {
          '@type': 'GeoCircle',
          description: '60+ ülke',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.noktadizayn.com.tr/#website',
        url: 'https://www.noktadizayn.com.tr',
        name: 'Nokta Dizayn',
        publisher: {
          '@id': 'https://www.noktadizayn.com.tr/#organization',
        },
        inLanguage: 'tr-TR',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <StatsBar />
      <StoreSystemsBlock />
      <ProductCategoryGrid />
      <ProjectProcessTimeline />
      <SustainabilityBlock />
      <ProductionPowerBlock />
      <ServiceSupportBlock />
      <CTASection />
    </>
  );
}

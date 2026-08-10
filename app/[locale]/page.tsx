import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatsBar } from '@/components/sections/StatsBar';
import { StoreSystemsBlock } from '@/components/sections/StoreSystemsBlock';
import { ProductCategoryGrid } from '@/components/sections/ProductCategoryGrid';
import { ProjectProcessTimeline } from '@/components/sections/ProjectProcessTimeline';
import { SustainabilityBlock } from '@/components/sections/SustainabilityBlock';
import { ProductionPowerBlock } from '@/components/sections/ProductionPowerBlock';
import { ServiceSupportBlock } from '@/components/sections/ServiceSupportBlock';
import { CTASection } from '@/components/sections/CTASection';
import { SITE_URL, localizedAlternates } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'hero' });
  const alternates = localizedAlternates(locale, '/');

  return {
    title: t('title'),
    description: t('subtitle'),
    openGraph: {
      title: t('title'),
      description: t('subtitle'),
      url: alternates.canonical,
    },
    alternates,
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'Nokta Dizayn',
        url: SITE_URL,
        logo: `${SITE_URL}/nokta-dizayn-logo.png`,
        foundingDate: '2003',
        description:
          'Entegre mağaza sistemleri — soğutma ekipmanları, raf ve reyon sistemleri, kasa üniteleri ve mağaza mobilyaları.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Emek Mahallesi, Şems Caddesi No:7',
          addressLocality: 'Sancaktepe',
          addressRegion: 'İstanbul',
          addressCountry: 'TR',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+90-216-313-6767',
          email: 'bilgi@noktadizayn.com.tr',
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
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Nokta Dizayn',
        publisher: {
          '@id': `${SITE_URL}/#organization`,
        },
        inLanguage: locale,
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

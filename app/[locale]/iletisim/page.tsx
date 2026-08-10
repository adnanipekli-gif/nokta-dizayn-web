import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { localizedAlternates } from '@/lib/seo';
import { IletisimClient } from './IletisimClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'iletisim_page' });
  return {
    title: t('hero_title'),
    description: t('hero_subtitle'),
    alternates: localizedAlternates(locale, '/iletisim'),
  };
}

export default function IletisimPage() {
  return <IletisimClient />;
}

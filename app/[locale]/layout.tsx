import type { Metadata } from 'next';
import { Sora, Inter_Tight, JetBrains_Mono } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n.routing';
import { notFound } from 'next/navigation';
import '../globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-sora',
  display: 'swap',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.noktadizayn.com.tr'),
  title: {
    default: 'Nokta Dizayn — Entegre Mağaza Sistemleri',
    template: '%s | Nokta Dizayn',
  },
  description:
    "2003'ten bu yana soğutma ekipmanları, raf sistemleri, kasa üniteleri ve mağaza mobilyaları. 60+ ülkede 30.000+ noktaya entegre mağaza çözümleri.",
  keywords: [
    'entegre mağaza sistemleri',
    'market ekipmanları',
    'soğutma reyonları',
    'raf sistemleri',
    'kasa üniteleri',
    'mağaza mobilyaları',
    'market tasarımı',
    'shopfitting',
  ],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Nokta Dizayn',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as never)) {
    notFound();
  }

  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${sora.variable} ${interTight.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-inter antialiased">
        <NextIntlClientProvider messages={messages}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-[#071B34] focus:rounded"
          >
            {locale === 'ar' ? 'انتقل إلى المحتوى الرئيسي' : locale === 'en' ? 'Skip to main content' : 'Ana içeriğe geç'}
          </a>
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

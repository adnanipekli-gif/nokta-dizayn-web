import type { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/lib/i18n-navigation';
import { getTranslations } from 'next-intl/server';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { PRODUCT_CATALOG } from '@/lib/data/product-catalog';
import { groupTaglineKey } from '@/lib/product-i18n';

export const metadata: Metadata = {
  title: 'Sütlük Reyonları — Remote & Plug-In',
  description: 'Merkezi sistemli MERGA ve bağımsız kompresörlü GATRIA serisi sütlük reyonları.',
  alternates: { canonical: 'https://www.noktadizayn.com.tr/urunler/sutluk' },
};

const remoteSutluk = PRODUCT_CATALOG.find((g) => g.slug === 'remote')!
  .subCategories.find((s) => s.slug === 'remote-sutluk')!;

const plugInSutluk = PRODUCT_CATALOG.find((g) => g.slug === 'plug-in')!
  .subCategories.find((s) => s.slug === 'plug-in-sutluk')!;

export default async function SutlukPage() {
  const t = await getTranslations('urunler_page');
  const tn = await getTranslations('nav');
  const tc = await getTranslations('product_catalog');

  function getTagline(slug: string): string {
    try { return tc(groupTaglineKey(slug)); } catch { return ''; }
  }

  const groups = [
    {
      label: `Remote ${t('sutluk_label')}`,
      tagline: getTagline('remote'),
      groupSlug: 'remote',
      sub: remoteSutluk,
    },
    {
      label: `Plug-In ${t('sutluk_label')}`,
      tagline: getTagline('plug-in'),
      groupSlug: 'plug-in',
      sub: plugInSutluk,
    },
  ];

  return (
    <>
      <div className="pt-24 pb-4 bg-white border-b border-[#E9EEF3]">
        <div className="section-container">
          <Breadcrumb
            items={[
              { label: tn('urunler'), href: '/urunler' },
              { label: t('breadcrumb_sutluk') },
            ]}
          />
        </div>
      </div>

      <section className="py-12">
        <div className="section-container space-y-16">
          {groups.map(({ label, tagline, groupSlug, sub }) => (
            <div key={groupSlug}>
              <div className="mb-8">
                <p className="text-xs font-mono text-[#11B5FF] tracking-widest uppercase mb-1">{tagline}</p>
                <h2 className="font-sora font-bold text-2xl text-[#071B34]">{label}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {sub.products.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/urunler/${groupSlug}/${sub.slug}/${product.slug}`}
                    className="group bg-white border border-[#D9E1EA] rounded-xl overflow-hidden hover:shadow-[0_4px_20px_rgba(7,27,52,0.08)] hover:border-[#0A6DB8]/30 transition-all duration-300"
                  >
                    <div className="relative aspect-[4/3] bg-[#F0F4F8]">
                      {product.images[0] && (
                        <Image
                          src={product.images[0]}
                          alt={product.variants[0].code}
                          fill
                          className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.03]"
                          sizes="(max-width: 640px) 100vw, 25vw"
                        />
                      )}
                    </div>
                    <div className="p-4">
                      {product.variants.map((v) => (
                        <div key={v.code}>
                          <p className="font-sora font-bold text-sm text-[#071B34] group-hover:text-[#0A6DB8] transition-colors">{v.code}</p>
                          {v.label && <p className="text-xs text-[#8D99A8] mt-0.5">{v.label}</p>}
                        </div>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

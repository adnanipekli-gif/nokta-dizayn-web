'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Lightbox } from '@/components/ui/Lightbox';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { SectionHeading } from '@/components/ui/SectionHeading';

type Gorsel = { src: string; alt: string; label: string };
type Aspect = '4/3' | '3/4' | '16/9' | '1/1';
type LayoutGorsel = { src: string; alt: string; label: string; span: 1 | 2 | 3 | 4; aspect: Aspect };

const EUROSHOP_2023: Gorsel[] = [
  { src: '/stand-sistemleri/fuar2023-1.png', alt: 'EuroShop 2023 fuar alanı', label: 'EuroShop 2023' },
  { src: '/stand-sistemleri/fuar2023-2.png', alt: 'EuroShop 2023 stand detayı', label: 'EuroShop 2023' },
  { src: '/stand-sistemleri/fuar2023-3.png', alt: 'EuroShop 2023 ürün sergileme', label: 'EuroShop 2023' },
  { src: '/stand-sistemleri/fuar2023-4.png', alt: 'EuroShop 2023 bakery bölümü', label: 'EuroShop 2023' },
  { src: '/stand-sistemleri/fuar2023-5.png', alt: 'EuroShop 2023 manav bölümü', label: 'EuroShop 2023' },
  { src: '/stand-sistemleri/fuar2023-6.png', alt: 'EuroShop 2023 stand genel görünüm', label: 'EuroShop 2023' },
  { src: '/stand-sistemleri/fuar2023-7.png', alt: 'EuroShop 2023 modüler sistem', label: 'EuroShop 2023' },
];

const EUROSHOP_2026: Gorsel[] = [
  { src: '/stand-sistemleri/fuar2026-1.png', alt: 'EuroShop 2026 stand tasarımı', label: 'EuroShop 2026' },
  { src: '/stand-sistemleri/fuar2026-2.png', alt: 'EuroShop 2026 ürün tanıtımı', label: 'EuroShop 2026' },
  { src: '/stand-sistemleri/fuar2026-3.png', alt: 'EuroShop 2026 sergileme alanı', label: 'EuroShop 2026' },
];

type GrupWithLayout = { baslik: string; cols: 3 | 4; id?: string; gorseller: LayoutGorsel[] };

const DIGER_GRUPLAR: GrupWithLayout[] = [
  {
    // Wide images (1, 3) at span:2 in 4-col grid — keeps quality, avoids full-width stretch
    // Row 1: [wide span:2] [portrait] [portrait]
    // Row 2: [landscape] [wide span:2] — reordered so wide images alternate sides
    baslik: 'Philips Stand',
    id: 'philips-stand',
    cols: 4,
    gorseller: [
      { src: '/stand-sistemleri/phillips-stant-1.png', alt: 'Philips stand dış cephe', label: 'Philips', span: 2, aspect: '4/3' },
      { src: '/stand-sistemleri/phillips-stant-4.png', alt: 'Philips sütun stand', label: 'Philips', span: 1, aspect: '3/4' },
      { src: '/stand-sistemleri/phillips-stant-5.png', alt: 'Philips mini stand', label: 'Philips', span: 1, aspect: '3/4' },
      { src: '/stand-sistemleri/phillips-stant-2.png', alt: 'Philips stand yan görünüm', label: 'Philips', span: 2, aspect: '4/3' },
      { src: '/stand-sistemleri/phillips-stant-3.png', alt: 'Philips stand ön cephe', label: 'Philips', span: 2, aspect: '4/3' },
    ],
  },
  {
    baslik: 'Aytemiz Petrol',
    cols: 3,
    gorseller: [
      { src: '/stand-sistemleri/aytemiz-petrol-1.png', alt: 'Aytemiz Petrol ofis görünümü', label: 'Aytemiz Petrol', span: 2, aspect: '4/3' },
      { src: '/stand-sistemleri/aytemiz-petrol-2.png', alt: 'Aytemiz Petrol stand detayı', label: 'Aytemiz Petrol', span: 1, aspect: '4/3' },
      { src: '/stand-sistemleri/aytemiz-petrol-3.png', alt: 'Aytemiz Petrol iç mekân', label: 'Aytemiz Petrol', span: 1, aspect: '4/3' },
      { src: '/stand-sistemleri/aytemiz-petrol-4.png', alt: 'Aytemiz Petrol uygulama', label: 'Aytemiz Petrol', span: 2, aspect: '4/3' },
    ],
  },
  {
    baslik: 'Makbul Uygulama',
    cols: 3,
    gorseller: [
      { src: '/stand-sistemleri/makbul-uygulama-1.png', alt: 'Makbul mağaza genel bakış', label: 'Makbul', span: 1, aspect: '4/3' },
      { src: '/stand-sistemleri/makbul-uygulama-2.png', alt: 'Makbul mağaza koridoru', label: 'Makbul', span: 2, aspect: '4/3' },
      { src: '/stand-sistemleri/makbul-uygulama-3.png', alt: 'Makbul raf sistemi', label: 'Makbul', span: 1, aspect: '3/4' },
      { src: '/stand-sistemleri/makbul-uygulama-4.png', alt: 'Makbul raf detayı', label: 'Makbul', span: 1, aspect: '3/4' },
      { src: '/stand-sistemleri/makbul-uygulama-5.png', alt: 'Makbul sergileme adası', label: 'Makbul', span: 1, aspect: '3/4' },
    ],
  },
  {
    baslik: 'Kiosk Tasarımı',
    cols: 4,
    gorseller: [
      { src: '/stand-sistemleri/kiosk-tasarimi-1.png', alt: 'Kiosk tasarım render 1', label: 'Kiosk Tasarımı', span: 1, aspect: '4/3' },
      { src: '/stand-sistemleri/kiosk-tasarimi-2.png', alt: 'Kiosk tasarım render 2', label: 'Kiosk Tasarımı', span: 1, aspect: '4/3' },
      { src: '/stand-sistemleri/kiosk-tasarimi-3.png', alt: 'Kiosk tasarım render 3', label: 'Kiosk Tasarımı', span: 1, aspect: '4/3' },
      { src: '/stand-sistemleri/kiosk-tasarimi-4.png', alt: 'Kiosk tasarım render 4', label: 'Kiosk Tasarımı', span: 1, aspect: '4/3' },
    ],
  },
  {
    // Row 1: portrait pair + landscape (items 1,2,3)
    // Row 2: landscape + portrait pair (items 4,5,6)
    // Row 3: portrait pair + landscape (items 7,8,9) — zigzag pattern
    baslik: 'Stand Örnekleri',
    cols: 4,
    gorseller: [
      { src: '/stand-sistemleri/stand-ornek-1.png', alt: 'Sorvella Perfume kiosk', label: 'Stand Örneği', span: 1, aspect: '3/4' },
      { src: '/stand-sistemleri/stand-ornek-2.png', alt: 'Sorvella kiosk detay', label: 'Stand Örneği', span: 1, aspect: '3/4' },
      { src: '/stand-sistemleri/stand-ornek-3.png', alt: 'TEKA mağaza iç mekânı', label: 'Stand Örneği', span: 2, aspect: '4/3' },
      { src: '/stand-sistemleri/stand-ornek-4.png', alt: 'TEKA ürün standı', label: 'Stand Örneği', span: 2, aspect: '4/3' },
      { src: '/stand-sistemleri/stand-ornek-5.png', alt: 'Permolit LED raf sistemi', label: 'Stand Örneği', span: 1, aspect: '3/4' },
      { src: '/stand-sistemleri/stand-ornek-6.png', alt: 'deli2go kahve kiosk', label: 'Stand Örneği', span: 1, aspect: '3/4' },
      { src: '/stand-sistemleri/stand-ornek-7.png', alt: 'Ahşap merdiven raf', label: 'Stand Örneği', span: 1, aspect: '3/4' },
      { src: '/stand-sistemleri/stand-ornek-8.png', alt: 'Castrol ürün standı', label: 'Stand Örneği', span: 1, aspect: '3/4' },
      { src: '/stand-sistemleri/stand-ornek-9.png', alt: 'Live Happily kahve arabası', label: 'Stand Örneği', span: 2, aspect: '4/3' },
    ],
  },
];

type LightboxState = { images: Gorsel[]; startIndex: number } | null;

// Natural card: h-auto, renders at image's own aspect ratio (EuroShop 2023 original style)
function GorselKartiNatural({ gorsel, onClick }: { gorsel: Gorsel; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative group overflow-hidden rounded-xl block w-full"
      aria-label={`${gorsel.label} görselini büyüt`}
    >
      <Image
        src={gorsel.src}
        alt={gorsel.alt}
        width={600}
        height={450}
        className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.04]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="absolute bottom-0 left-0 right-0 px-3 py-2 font-mono text-[0.6rem] tracking-widest text-white translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        {gorsel.label.toUpperCase()}
      </span>
    </button>
  );
}

function GorselKarti({
  gorsel,
  aspect = '4/3',
  onClick,
}: {
  gorsel: Gorsel;
  aspect?: Aspect;
  onClick: () => void;
}) {
  const aspectClass =
    aspect === '16/9' ? 'aspect-[16/9]' :
    aspect === '3/4'  ? 'aspect-[3/4]'  :
    aspect === '1/1'  ? 'aspect-[1/1]'  :
    'aspect-[4/3]';

  return (
    <button
      type="button"
      onClick={onClick}
      className="relative group overflow-hidden rounded-xl block w-full"
      aria-label={`${gorsel.label} görselini büyüt`}
    >
      <div className={`${aspectClass} relative overflow-hidden rounded-xl`}>
        <Image
          src={gorsel.src}
          alt={gorsel.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute bottom-0 left-0 right-0 px-3 py-2 font-mono text-[0.6rem] tracking-widest text-white translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {gorsel.label.toUpperCase()}
        </span>
      </div>
    </button>
  );
}

function FuarBlok({
  yil,
  lokasyon,
  gorseller,
  onAc,
  dark,
  cols,
  natural,
}: {
  yil: string;
  lokasyon: string;
  gorseller: Gorsel[];
  onAc: (index: number) => void;
  dark?: boolean;
  cols?: number;
  natural?: boolean;
}) {
  const gridClass =
    cols === 2 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2' :
    cols === 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' :
    'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4';

  return (
    <div className={`rounded-2xl overflow-hidden ${dark ? 'bg-[#071B34]' : 'bg-[#F7F9FC]'} p-6 md:p-8`}>
      <div className="flex items-baseline gap-4 mb-6">
        <h3 className={`font-sora font-bold text-xl ${dark ? 'text-white' : 'text-[#071B34]'}`}>
          EuroShop Fuarı {yil}
        </h3>
        <span className={`font-mono text-[0.65rem] tracking-[0.15em] ${dark ? 'text-[#11B5FF]/70' : 'text-[#8D99A8]'}`}>
          {lokasyon.toUpperCase()}
        </span>
      </div>
      <div className={`grid ${gridClass} gap-3`}>
        {gorseller.map((g, i) =>
          natural ? (
            <GorselKartiNatural key={g.src} gorsel={g} onClick={() => onAc(i)} />
          ) : (
            <GorselKarti key={g.src} gorsel={g} onClick={() => onAc(i)} />
          )
        )}
      </div>
    </div>
  );
}

function DigerGrupSatiri({
  grup,
  onAc,
}: {
  grup: GrupWithLayout;
  onAc: (index: number) => void;
}) {
  const gridClass = grup.cols === 4 ? 'grid-cols-2 lg:grid-cols-4' : 'grid-cols-2 lg:grid-cols-3';

  return (
    <div id={grup.id}>
      <div className="flex items-center gap-4 mb-5">
        <h3 className="font-sora font-semibold text-[#071B34] text-lg">{grup.baslik}</h3>
        <div className="flex-1 h-px bg-[#E9EEF3]" />
      </div>
      <div className={`grid ${gridClass} gap-3 items-start`}>
        {grup.gorseller.map((g, i) => {
          const spanClass =
            g.span === 4 ? 'col-span-1 lg:col-span-4' :
            g.span === 3 ? 'col-span-1 lg:col-span-3' :
            g.span === 2 ? 'col-span-1 lg:col-span-2' :
            'col-span-1';
          return (
            <div key={g.src} className={spanClass}>
              <GorselKarti gorsel={g} aspect={g.aspect} onClick={() => onAc(i)} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function FuarGaleri() {
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="section-container space-y-16">

        <FadeInOnScroll>
          <SectionHeading
            eyebrow="KATILDIĞIMIZ FUARLAR"
            title="Fuarlarda Nokta Dizayn"
            subtitle="Uluslararası perakende ekipmanları fuarlarında ürünlerimizi ve çözümlerimizi sektör profesyonelleriyle buluşturuyoruz."
          />
        </FadeInOnScroll>

        <FadeInOnScroll>
          <FuarBlok
            yil="2023"
            lokasyon="Almanya, Düsseldorf"
            gorseller={EUROSHOP_2023}
            onAc={(i) => setLightbox({ images: EUROSHOP_2023, startIndex: i })}
            dark
            natural
          />
        </FadeInOnScroll>

        <FadeInOnScroll>
          <FuarBlok
            yil="2026"
            lokasyon="Almanya, Düsseldorf"
            gorseller={EUROSHOP_2026}
            onAc={(i) => setLightbox({ images: EUROSHOP_2026, startIndex: i })}
            cols={2}
          />
        </FadeInOnScroll>

        {DIGER_GRUPLAR.map((grup, gi) => (
          <FadeInOnScroll key={grup.baslik} delay={gi * 40}>
            <DigerGrupSatiri
              grup={grup}
              onAc={(i) => setLightbox({ images: grup.gorseller, startIndex: i })}
            />
          </FadeInOnScroll>
        ))}

      </div>

      {lightbox && (
        <Lightbox
          images={lightbox.images.map((g) => ({ src: g.src, alt: g.alt }))}
          startIndex={lightbox.startIndex}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}

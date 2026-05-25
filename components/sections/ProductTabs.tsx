'use client';

import { useState, useRef } from 'react';
import { Download, Check, Image as ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DynIcon } from '@/lib/icons';
import type { ProductCategoryFull, ProductModel } from '@/lib/types';

interface ProductTabsProps {
  categories: ProductCategoryFull[];
}

export function ProductTabs({ categories }: ProductTabsProps) {
  const [activeSlug, setActiveSlug] = useState(categories[0].slug);
  const [animating, setAnimating] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const activeCategory = categories.find((c) => c.slug === activeSlug) ?? categories[0];

  function handleTabChange(slug: string) {
    if (slug === activeSlug) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveSlug(slug);
      setAnimating(false);
      contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 180);
  }

  return (
    <div>
      {/* ── Tab bar ── */}
      <div className="sticky top-16 z-40 bg-white border-b border-[#D9E1EA] shadow-sm">
        <div className="section-container">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none]">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => handleTabChange(cat.slug)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 shrink-0',
                  activeSlug === cat.slug
                    ? 'bg-[#071B34] text-white shadow-sm'
                    : 'text-[#475569] hover:bg-[#F7F9FC] hover:text-[#071B34]'
                )}
              >
                <DynIcon
                  name={cat.icon}
                  size={15}
                  className={activeSlug === cat.slug ? 'text-[#11B5FF]' : 'opacity-50'}
                />
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div
        ref={contentRef}
        className={cn(
          'py-14 transition-opacity duration-180',
          animating ? 'opacity-0' : 'opacity-100'
        )}
      >
        <div className="section-container">
          {/* Category description */}
          <div className="max-w-3xl mb-10">
            <p className="eyebrow text-[#0A6DB8] mb-3">
              // {activeCategory.name.toUpperCase()}
            </p>
            <p className="text-[#475569] leading-relaxed">{activeCategory.categoryDescription}</p>
          </div>

          {/* Model count badge */}
          <p className="text-xs font-mono text-[#8D99A8] mb-6">
            {activeCategory.models.length} model listeleniyor
          </p>

          {/* Models grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {activeCategory.models.map((model, i) => (
              <ModelCard key={model.slug} model={model} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ModelCard({ model, index }: { model: ProductModel; index: number }) {
  return (
    <article
      className="bg-white border border-[#D9E1EA] rounded-2xl overflow-hidden flex flex-col group hover:shadow-[0_4px_24px_rgba(7,27,52,0.10)] hover:border-[#B0C4D8] transition-all duration-300"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Image area — large primary + secondary strip */}
      <div className="bg-[#F0F4F8] border-b border-[#D9E1EA]">
        {/* Primary large image */}
        <div className="aspect-[4/3] flex flex-col items-center justify-center gap-3 group-hover:bg-[#E4ECF5] transition-colors">
          <div className="w-16 h-16 rounded-2xl bg-[#DDE5EF] flex items-center justify-center group-hover:bg-[#C8D6E8] transition-colors">
            <ImageIcon size={26} className="text-[#7A8EA0]" />
          </div>
          <span className="text-[0.65rem] text-[#8D99A8] font-mono uppercase tracking-wider">
            Ürün Görseli
          </span>
        </div>
        {/* Secondary technical drawing strip */}
        <div className="border-t border-[#D9E1EA] px-4 py-3 flex items-center gap-3 bg-[#F7F9FC] group-hover:bg-[#EEF3F8] transition-colors">
          <div className="w-20 aspect-video rounded-md bg-[#DDE5EF] flex items-center justify-center shrink-0 group-hover:bg-[#C8D6E8] transition-colors">
            <ImageIcon size={12} className="text-[#8D99A8]" />
          </div>
          <span className="text-[0.6rem] text-[#8D99A8] font-mono uppercase tracking-wider leading-relaxed">
            Teknik<br />Görsel
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1 gap-4">
        {/* Model name + description */}
        <div>
          <h3 className="font-sora font-bold text-lg text-[#071B34] mb-1.5">{model.name}</h3>
          <p className="text-sm text-[#475569] leading-relaxed">{model.description}</p>
        </div>

        {/* Specs */}
        <div className="bg-[#F7F9FC] rounded-xl p-3.5 border border-[#E9EEF3]">
          <p className="text-[0.65rem] font-semibold text-[#8D99A8] uppercase tracking-widest mb-2">
            Teknik Özellikler
          </p>
          <div className="space-y-1.5">
            {model.specs.map((s) => (
              <div key={s.label} className="flex justify-between items-start gap-3">
                <span className="text-xs text-[#071B34] font-medium shrink-0">{s.label}</span>
                <span className="text-xs text-[#475569] text-right">{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Use cases */}
        <div>
          <p className="text-[0.65rem] font-semibold text-[#8D99A8] uppercase tracking-widest mb-2">
            Kullanım Alanları
          </p>
          <ul className="space-y-1">
            {model.useCases.map((uc) => (
              <li key={uc} className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-[#0A6DB8] shrink-0" />
                <span className="text-xs text-[#475569]">{uc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Features */}
        <div className="flex-1">
          <p className="text-[0.65rem] font-semibold text-[#8D99A8] uppercase tracking-widest mb-2">
            Öne Çıkan Özellikler
          </p>
          <ul className="space-y-1.5">
            {model.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="mt-0.5 w-4 h-4 rounded-full bg-[#11B5FF]/15 flex items-center justify-center shrink-0">
                  <Check size={10} className="text-[#0A6DB8]" />
                </span>
                <span className="text-xs text-[#071B34]">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Catalog button */}
        <button
          disabled
          className="mt-auto w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-[#D9E1EA] text-xs font-medium text-[#475569] cursor-not-allowed opacity-60 hover:opacity-80 transition-opacity"
          title="Yakında kullanılabilir"
        >
          <Download size={13} />
          Katalog İndir
        </button>
      </div>
    </article>
  );
}

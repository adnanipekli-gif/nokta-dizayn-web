'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import type { ProductMainGroup, CatalogProduct } from '@/lib/data/product-catalog';
import { ProductImageViewer } from '@/components/ui/ProductImageViewer';

interface ProductCatalogProps {
  groups: ProductMainGroup[];
}

export function ProductCatalog({ groups }: ProductCatalogProps) {
  const [activeSlug, setActiveSlug] = useState(groups[0].slug);
  const [animating, setAnimating] = useState(false);

  const activeGroup = groups.find((g) => g.slug === activeSlug) ?? groups[0];

  function switchGroup(slug: string) {
    if (slug === activeSlug) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveSlug(slug);
      setAnimating(false);
    }, 180);
  }

  return (
    <div>
      {/* ── Main group tab bar ── */}
      <div className="sticky top-16 z-40 bg-white border-b border-[#D9E1EA] shadow-sm">
        <div className="section-container">
          <div className="flex items-center gap-2 py-3">
            {groups.map((group) => (
              <button
                key={group.slug}
                onClick={() => switchGroup(group.slug)}
                className={cn(
                  'px-6 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all duration-200',
                  activeSlug === group.slug
                    ? 'bg-[#071B34] text-white shadow-sm'
                    : 'text-[#475569] hover:bg-[#F7F9FC] hover:text-[#071B34]'
                )}
              >
                {group.name}
              </button>
            ))}
            <span className="ml-4 text-xs text-[#8D99A8] hidden sm:block">
              {activeGroup.tagline}
            </span>
          </div>
        </div>
      </div>

      {/* ── Sub-category sections ── */}
      <div
        className={cn(
          'transition-opacity duration-180',
          animating ? 'opacity-0' : 'opacity-100'
        )}
      >
        {activeGroup.subCategories.map((subCat, sIdx) => (
          <section
            key={subCat.slug}
            id={subCat.slug}
            className={cn(
              'py-14',
              sIdx < activeGroup.subCategories.length - 1 && 'border-b border-[#E9EEF3]'
            )}
          >
            <div className="section-container">
              {/* Sub-category heading */}
              <div className="mb-8">
                <p className="eyebrow text-[#0A6DB8] mb-2">
                  // {activeGroup.name.toUpperCase()}
                </p>
                <h2 className="text-2xl font-sora font-bold text-[#071B34]">{subCat.name}</h2>
                <p className="text-xs font-mono text-[#8D99A8] mt-1.5">
                  {subCat.products.length} ürün
                </p>
              </div>

              {/* Product grid — 2 columns on desktop */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {subCat.products.map((product, pIdx) => (
                  <ProductCard key={product.slug} product={product} index={pIdx} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product, index }: { product: CatalogProduct; index: number }) {
  return (
    <article
      className="bg-white border border-[#D9E1EA] rounded-2xl overflow-hidden flex flex-col hover:shadow-[0_6px_32px_rgba(7,27,52,0.10)] hover:border-[#B0C4D8] transition-all duration-300"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Image — full card width, large */}
      <div className="p-5 bg-[#F7F9FC] border-b border-[#D9E1EA]">
        <ProductImageViewer
          images={product.images}
          alt={product.variants[0].code}
        />
      </div>

      {/* Info */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* Variant names */}
        <div className="space-y-2">
          {product.variants.map((v) => (
            <div key={v.code} className="flex items-baseline gap-2 flex-wrap">
              <span className="font-sora font-bold text-xl text-[#071B34] leading-tight">
                {v.code}
              </span>
              {v.label && (
                <span className="text-sm text-[#475569] font-medium">
                  {v.label}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-[#E9EEF3]" />

        {/* Description */}
        <p className="text-sm text-[#475569] leading-relaxed flex-1">
          {product.description}
        </p>
      </div>
    </article>
  );
}

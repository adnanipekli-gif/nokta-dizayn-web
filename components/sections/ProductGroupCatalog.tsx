'use client';

import { cn } from '@/lib/utils';
import type { ProductMainGroup, CatalogProduct } from '@/lib/data/product-catalog';
import { ProductImageViewer } from '@/components/ui/ProductImageViewer';

interface ProductGroupCatalogProps {
  group: ProductMainGroup;
}

export function ProductGroupCatalog({ group }: ProductGroupCatalogProps) {
  return (
    <div>
      {group.subCategories.map((subCat, sIdx) => (
        <section
          key={subCat.slug}
          id={subCat.slug}
          className={cn(
            'py-14',
            sIdx < group.subCategories.length - 1 && 'border-b border-[#E9EEF3]'
          )}
        >
          <div className="section-container">
            {/* Sub-category heading */}
            <div className="mb-8">
              <h2 className="text-2xl font-sora font-bold text-[#071B34]">{subCat.name}</h2>
              <p className="text-xs font-mono text-[#8D99A8] mt-1.5">
                {subCat.products.length} ürün
              </p>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {subCat.products.map((product, pIdx) => (
                <ProductCard key={product.slug} product={product} index={pIdx} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

function ProductCard({ product, index }: { product: CatalogProduct; index: number }) {
  return (
    <article
      className="bg-white border border-[#D9E1EA] rounded-2xl overflow-hidden flex flex-col hover:shadow-[0_6px_32px_rgba(7,27,52,0.10)] hover:border-[#B0C4D8] transition-all duration-300"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Image */}
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
                <span className="text-sm text-[#475569] font-medium">{v.label}</span>
              )}
            </div>
          ))}
        </div>

        <div className="h-px bg-[#E9EEF3]" />

        {/* Description */}
        <p className="text-sm text-[#475569] leading-relaxed flex-1">
          {product.description}
        </p>
      </div>
    </article>
  );
}

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ label: 'Ana Sayfa', href: '/' }, ...items];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: item.href ? `https://noktadizayn.com.tr${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Sayfa konumu" className="flex items-center gap-1.5 flex-wrap">
        {allItems.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && (
              <ChevronRight size={12} className="text-[#8D99A8]" aria-hidden="true" />
            )}
            {item.href && i < allItems.length - 1 ? (
              <Link
                href={item.href}
                className="text-sm text-[#8D99A8] hover:text-[#0A6DB8] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className="text-sm text-[#071B34] font-medium"
                aria-current={i === allItems.length - 1 ? 'page' : undefined}
              >
                {item.label}
              </span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}

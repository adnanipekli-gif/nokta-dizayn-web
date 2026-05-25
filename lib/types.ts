export type LocalizedString = {
  tr: string;
  en?: string;
  ar?: string;
};

export type ProductGroup = 'refrigerated_display' | 'store_systems';

export type ProductCategory = {
  slug: string;
  name: string;
  group: ProductGroup;
  shortDescription: string;
  longDescription: string;
  useCases: string[];
  technicalAdvantages: string[];
  options: string[];
  applicableSectors: string[];
  specs: { label: string; value: string }[];
  icon: string;
};

export type StoreSystem = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  benefits: { title: string; description: string }[];
  relatedProducts: string[];
};

/** Legacy alias kept for backward-compat with existing pages */
export type Solution = StoreSystem;

export type ReferenceProject = {
  slug: string;
  title: string;
  sector: string;
  location: string;
  year: number;
  isExport: boolean;
  usedProducts: string[];
  clientNeed: string;
  solution: string;
  results: { label: string; value: string }[];
  shortDescription: string;
};

export type ServiceItem = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  features: string[];
};

export type Stat = {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  eyebrow: string;
};

export type NavChild = {
  label: string;
  href: string;
  description: string;
  icon: string;
};

export type NavGroup = {
  slug: string;
  label: string;
  href: string;
  tagline: string;
  icon: string;
  children: NavChild[];
};

export type NavItem = {
  label: string;
  href?: string;
  children?: NavChild[];
  groups?: NavGroup[];
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type FormType = 'teklif' | 'servis' | 'danismanlik' | 'genel';

export type ProductModel = {
  slug: string;
  name: string;
  description: string;
  specs: { label: string; value: string }[];
  useCases: string[];
  features: string[];
};

export type ProductCategoryFull = {
  slug: string;
  name: string;
  categoryDescription: string;
  icon: string;
  models: ProductModel[];
};

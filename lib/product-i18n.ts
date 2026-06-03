/**
 * Maps product variant labels (English source values) to translation keys
 * in the product_catalog namespace.
 */
export const VARIANT_LABEL_KEYS: Record<string, string> = {
  'Flat Glass — Double Glass Door': 'label_flat_glass_double_door',
  'Flat Glass — Partially Double Glass Door': 'label_flat_glass_partial_double',
  'T-Profile — Double Glass Door': 'label_t_profile_double',
  'Double Glass Door': 'label_double_door',
  'No Cabinet': 'label_no_cabinet',
  'Full View': 'label_full_view',
  'Flat Glass': 'label_flat_glass',
  'Curved Glass': 'label_curved_glass',
  'Self Service Flat Glass': 'label_ss_flat_glass',
  'Self Service Curved Glass': 'label_ss_curved_glass',
  'Bain Marie': 'label_bain_marie',
  'Triple Glass Door': 'label_triple_door',
  'Open Display': 'label_open_display',
  'Single Glass Door': 'label_single_door',
};

/**
 * Maps product slug to description key in product_catalog namespace.
 */
export function productDescKey(slug: string): string {
  return `desc_${slug.replace(/-/g, '_')}`;
}

/**
 * Maps subcategory slug to name key in product_catalog namespace.
 */
export function subcatNameKey(slug: string): string {
  return `subcat_${slug.replace(/-/g, '_')}`;
}

/**
 * Maps group slug to tagline key in product_catalog namespace.
 * "plug-in" → "tagline_plug_in"
 */
export function groupTaglineKey(slug: string): string {
  return `tagline_${slug.replace(/-/g, '_')}`;
}

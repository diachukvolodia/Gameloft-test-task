export const ProductCategory = {
  MensClothing: "men's clothing",
  WomensClothing: "women's clothing",
  Jewelery: 'jewelery',
  Electronics: 'electronics',
} as const;

export type ProductCategoryKey = keyof typeof ProductCategory;

export type ProductCategoryValue = (typeof ProductCategory)[ProductCategoryKey];

export type ProductCategoryValueObject = Readonly<{
  value: ProductCategoryValue;
}>;

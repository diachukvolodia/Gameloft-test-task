import type { ProductCategoryValue } from './product-category.value-object';
import type { ProductRatingValueObject } from './product-rating.value-object';

export type ProductEntity = Readonly<{
  id: number;
  title: string;
  description: string;
  category: ProductCategoryValue;
  image: string;
  price: number;
  rating: ProductRatingValueObject;
}>;

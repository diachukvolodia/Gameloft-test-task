import { memo, type FC } from 'react';

import { Card, TextH4, TextH5, TextH6, TextP, Image, Button } from '@shared/components';
import type { ProductEntity } from '../core/product.entity';

type ProductCardProps = {
  product: ProductEntity;
  onAddToCartItem: (product: ProductEntity) => void;
  onCheckDisabledItems: (product: ProductEntity) => boolean;
};

export const ProductCard: FC<ProductCardProps> = memo(({ product, onAddToCartItem, onCheckDisabledItems }) => {
  const isButtonDisabled = onCheckDisabledItems(product);

  return (
    <Card className="h-full">
      <TextH4 className="text-center line-clamp-1">{product.title}</TextH4>
      <div className="border-2 rounded-4xl border-blue-600 p-2">
        <Image src={product.image} alt={product.title} className="w-[100px] h-[100px]" />
      </div>
      <TextH5 className="text-center line-clamp-2">{product.description}</TextH5>
      <TextH6 className="text-center mt-auto font-bold">${product.price}</TextH6>
      <Button className="bg-blue-500" onClick={() => onAddToCartItem(product)} disabled={isButtonDisabled}>
        <TextP className="text-white">Add to shopping card</TextP>
      </Button>
    </Card>
  );
});

import { memo, type FC } from 'react';
import { TextH5, TextH6, TextP, Image, Button } from '@shared/components';

import type { ProductEntity } from '../../products/core/product.entity';

type ShoppingCartItemProps = {
  product: ProductEntity;
  onRemoveFromCartItem: (productId: ProductEntity['id']) => void;
};

export const ShoppingCartItem: FC<ShoppingCartItemProps> = memo(({ product, onRemoveFromCartItem }) => {
  return (
    <li className="flex border-b-2 pb-4 border-blue-600">
      <div className="flex justify-center items-center">
        <div>
          <div className="rounded-full border-2 border-blue-600 p-2">
            <Image src={product.image} className="min-w-[50px] w-[50px] h-[50px] " />
          </div>
          <TextP className="mt-4">{product.price}</TextP>
        </div>
        <div className="ml-4">
          <TextH5 className="text-left line-clamp-2">{product.title}</TextH5>
          <TextH6 className="text-left mt-4 line-clamp-4">{product.description}</TextH6>
        </div>
        <Button className="text-red-500 font-bold ml-2" onClick={() => onRemoveFromCartItem(product.id)}>
          X
        </Button>
      </div>
    </li>
  );
});

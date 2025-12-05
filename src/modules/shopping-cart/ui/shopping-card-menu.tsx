import { memo, type FC } from 'react';

import { Card, TextP, TextH4 } from '@shared/components';
import type { ProductEntity } from '../../products/core/product.entity';
import { ShoppingCartItem } from './shopping-cart-item';

type ShoppingCartMenuProps = {
  shoppingCartItemsCount: number;
  shoppingCartItems: ProductEntity[];
  productsPriceInfo?: { totalPrice: number; isDiscountApplied: boolean; discountValue: number };
  onRemoveFromCartItem: (productId: ProductEntity['id']) => void;
  onCloseShoppingCartMenu: VoidFunction;
};

export const ShoppingCartMenu: FC<ShoppingCartMenuProps> = memo(
  ({ shoppingCartItems, productsPriceInfo, onRemoveFromCartItem }) => {
    const isCartEmpty = shoppingCartItems.length === 0;

    return (
      <Card className="absolute right-0 w-[400px] z-10">
        {isCartEmpty && <TextP className="font-bold text-blue-600 uppercase">No items in the cart yet</TextP>}

        {!isCartEmpty && (
          <>
            <TextH4 className="font-bold">
              Total price: ${productsPriceInfo?.totalPrice && productsPriceInfo.totalPrice.toFixed(2)}
              <br />
              {productsPriceInfo?.isDiscountApplied && (
                <TextP className="text-green-700">Discount applied: {productsPriceInfo.discountValue * 100}%</TextP>
              )}
            </TextH4>

            <ul className="flex flex-col gap-10 max-h-[300px] overflow-y-auto scrollbar-hide mt-4">
              {shoppingCartItems.map((product) => (
                <ShoppingCartItem key={product.id} product={product} onRemoveFromCartItem={onRemoveFromCartItem} />
              ))}
            </ul>
          </>
        )}
      </Card>
    );
  },
);

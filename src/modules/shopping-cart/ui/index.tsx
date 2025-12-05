import { useRef, type FC } from 'react';
import { ShoppingCartButton } from './shopping-cart-button';
import { ShoppingCartMenu } from './shopping-card-menu';
import type { ProductEntity } from '../../products/core/product.entity';
import { useOutsideClick } from '@shared/hooks';

type ShoppingCartProps = {
  shoppingCartItemsCount: number;
  isShoppingCartMenuOpen?: boolean;
  shoppingCartItems: ProductEntity[];
  productsPriceInfo?: { totalPrice: number; isDiscountApplied: boolean; discountValue: number };
  onRemoveFromCartItem: (productId: ProductEntity['id']) => void;
  onButtonClick: VoidFunction;
  onCloseShoppingCartMenu: VoidFunction;
};

export const ShoppingCart: FC<ShoppingCartProps> = ({
  shoppingCartItemsCount,
  isShoppingCartMenuOpen,
  shoppingCartItems,
  productsPriceInfo,
  onButtonClick,
  onRemoveFromCartItem,
  onCloseShoppingCartMenu,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, onCloseShoppingCartMenu);

  return (
    <div className="relative" ref={ref}>
      <ShoppingCartButton shoppingCartItemsCount={shoppingCartItemsCount} onClick={onButtonClick} />
      {isShoppingCartMenuOpen && (
        <ShoppingCartMenu
          shoppingCartItemsCount={shoppingCartItemsCount}
          shoppingCartItems={shoppingCartItems}
          productsPriceInfo={productsPriceInfo}
          onRemoveFromCartItem={onRemoveFromCartItem}
          onCloseShoppingCartMenu={onCloseShoppingCartMenu}
        />
      )}
    </div>
  );
};

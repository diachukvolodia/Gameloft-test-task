import { type FC } from 'react';

import { PageWrapper } from '@shared/layouts';
import { Carousel } from '@/shared/components';
import { useProductPage } from './use-product-page';
import { ShoppingCart } from '../../shopping-cart/ui';
import type { ProductEntity } from '../core/product.entity';

const CAROUSEL_CONFIGS = {
  itemsGapPx: 20,
  desktopVisibleItems: 3,
  tabletVisibleItems: 2,
  mobileVisibleItems: 1,
} as const satisfies Record<string, number>;

export const ProductsPage: FC = () => {
  const {
    isPending,
    isError,
    products,
    shoppingCartItemsCount,
    isShoppingCartMenuOpen,
    shoppingCartItems,
    productsPriceInfo,
    renderItem,
    toggleShoppingCartMenu,
    handleRemoveFromCartItem,
    handleCloseShoppingCartMenu,
  } = useProductPage();

  return (
    <PageWrapper
      title="Products"
      isDataLoading={isPending}
      isDataError={isError}
      headerRightContent={
        <ShoppingCart
          shoppingCartItemsCount={shoppingCartItemsCount}
          isShoppingCartMenuOpen={isShoppingCartMenuOpen}
          shoppingCartItems={shoppingCartItems}
          productsPriceInfo={productsPriceInfo}
          onButtonClick={toggleShoppingCartMenu}
          onRemoveFromCartItem={handleRemoveFromCartItem}
          onCloseShoppingCartMenu={handleCloseShoppingCartMenu}
        />
      }
    >
      <Carousel<ProductEntity>
        data={products}
        renderItem={renderItem}
        itemClassName="h-[400px]"
        configs={CAROUSEL_CONFIGS}
      />
    </PageWrapper>
  );
};

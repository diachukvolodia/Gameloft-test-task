import { useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';

import type { ProductEntity } from '@core/product.entity';
import { getProducts } from '../api/get-products.query';
import { ProductCard } from './product-card';
import { useShoppingCartStore } from '../../shopping-cart/store/use-shopping-cart.store';

export const useProductPage = () => {
  const {
    data: products,
    isPending,
    isError,
  } = useQuery<ProductEntity[]>({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  const {
    shoppingCartItems,
    isShoppingCartMenuOpen,
    shoppingCartItemsCount,
    productsPriceInfo,
    handleAddToCartItem,
    handleRemoveFromCartItem,
    handleCheckDisabledItems,
    handleOpenShoppingCartMenu,
    handleCloseShoppingCartMenu,
    toggleShoppingCartMenu,
  } = useShoppingCartStore();

  const renderItem = useCallback(
    (product: ProductEntity) => (
      <ProductCard
        product={product}
        onAddToCartItem={handleAddToCartItem}
        onCheckDisabledItems={handleCheckDisabledItems}
      />
    ),
    [handleAddToCartItem, handleCheckDisabledItems],
  );

  return {
    isError,
    isPending,
    products,
    shoppingCartItems,
    shoppingCartItemsCount,
    isShoppingCartMenuOpen,
    productsPriceInfo,
    handleAddToCartItem,
    handleRemoveFromCartItem,
    handleOpenShoppingCartMenu,
    handleCloseShoppingCartMenu,
    renderItem,
    toggleShoppingCartMenu,
  };
};

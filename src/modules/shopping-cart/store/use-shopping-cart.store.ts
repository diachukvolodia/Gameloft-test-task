import { useCallback, useMemo, useState } from 'react';
import type { ProductEntity } from '../../products/core/product.entity';

const NUMBER_OF_PRODUCTS_FOR_DISCOUNT = 5;
const DISCOUNT_VALUE = 0.1;

const getShoppingCartItemsWithDiscount = (items: ProductEntity[]) => {
  return items.map((item) => ({
    ...item,
    price:
      items.length >= NUMBER_OF_PRODUCTS_FOR_DISCOUNT
        ? Number((item.price * (1 - DISCOUNT_VALUE)).toFixed(2))
        : item.price,
  }));
};

export const useShoppingCartStore = () => {
  const [shoppingCartItems, setShoppingCartItems] = useState<ProductEntity[]>([]);
  const [isShoppingCartMenuOpen, setIsShoppingCartMenuOpen] = useState(false);

  const handleOpenShoppingCartMenu = useCallback(() => setIsShoppingCartMenuOpen(true), []);
  const handleCloseShoppingCartMenu = useCallback(() => setIsShoppingCartMenuOpen(false), []);

  const shoppingCartItemsCount = shoppingCartItems.length;

  const productsPriceInfo = useMemo(() => {
    const totalPrice = shoppingCartItems.reduce((acc, item) => acc + item.price, 0);
    const isDiscountApplied = shoppingCartItemsCount >= NUMBER_OF_PRODUCTS_FOR_DISCOUNT;

    return {
      totalPrice: shoppingCartItemsCount >= NUMBER_OF_PRODUCTS_FOR_DISCOUNT ? totalPrice * 0.9 : totalPrice,
      isDiscountApplied,
      discountValue: DISCOUNT_VALUE,
    };
  }, [shoppingCartItems, shoppingCartItemsCount]);

  const toggleShoppingCartMenu = useCallback(
    () => (isShoppingCartMenuOpen ? handleCloseShoppingCartMenu() : handleOpenShoppingCartMenu()),
    [isShoppingCartMenuOpen, handleCloseShoppingCartMenu, handleOpenShoppingCartMenu],
  );

  const handleAddToCartItem = useCallback((product: ProductEntity) => {
    setShoppingCartItems((prevItems) => getShoppingCartItemsWithDiscount([...prevItems, product]));
  }, []);

  const handleRemoveFromCartItem = (productId: ProductEntity['id']) => {
    setShoppingCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const handleCheckDisabledItems = useCallback(
    (product: ProductEntity) => {
      return Boolean(shoppingCartItems.find((item) => item.id === product.id));
    },
    [shoppingCartItems],
  );

  return {
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
  };
};

import { memo, type ButtonHTMLAttributes, type FC } from 'react';

import { ShoppingCartIcon } from '@shared/assets/icons';
import { Button, TextP } from '@shared/components';

type ShoppingCartButtonProps = {
  shoppingCartItemsCount: number;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const ShoppingCartButton: FC<ShoppingCartButtonProps> = memo(({ shoppingCartItemsCount, onClick }) => {
  return (
    <Button className="relative pl-0 pr-0 pt-0 pb-0" onClick={onClick}>
      <ShoppingCartIcon width={50} height={50} />

      {shoppingCartItemsCount > 0 && (
        <TextP className="absolute right-0 top-0 text-white">{shoppingCartItemsCount}</TextP>
      )}
    </Button>
  );
});

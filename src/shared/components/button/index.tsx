import { memo, type ButtonHTMLAttributes, type FC } from 'react';
import classNames from 'clsx';

import { TextH6 } from '../text';

type ButtonProps = { text?: string; className?: string } & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = memo(({ text, children, className, ...rest }) => {
  return (
    <button {...rest} className={classNames('cursor-pointer py-2 px-4 rounded-4xl disabled:bg-gray-300 ', className)}>
      {text && <TextH6>{text}</TextH6>}

      {children}
    </button>
  );
});

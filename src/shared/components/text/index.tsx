import type { FC, PropsWithChildren } from 'react';
import classNames from 'clsx';

type TextProps = PropsWithChildren<{ className?: string }>;

export const TextH1: FC<TextProps> = ({ children, className }) => (
  <h1 className={classNames('text-3xl text-center font-bold text-blue-950', className)}>{children}</h1>
);

export const TextH4: FC<TextProps> = ({ children, className }) => (
  <h4 className={classNames('text-center font-bold text-2xl', className)}>{children}</h4>
);

export const TextH5: FC<TextProps> = ({ children, className }) => (
  <h5 className={classNames('text-center text-lg', className)}>{children}</h5>
);

export const TextH6: FC<TextProps> = ({ children, className }) => (
  <h6 className={classNames('text-center text-xl', className)}>{children}</h6>
);

export const TextP: FC<TextProps> = ({ children, className }) => (
  <p className={classNames('text-base', className)}>{children}</p>
);

import type { FC } from 'react';
import classNames from 'clsx';

type SpinnerProps = {
  width?: number;
  height?: number;
  border?: number;
  itemClassName?: string;
};

export const Spinner: FC<SpinnerProps> = ({ width = 10, height = 10, border = 10, itemClassName }) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={classNames(
          `
          w-[${width}px]
          h-[${height}px]
          animate-spin 
          rounded-full 
          border-slate-300 
          border-t-transparent
        `,
          itemClassName,
        )}
        style={{ borderWidth: border }}
      />
    </div>
  );
};

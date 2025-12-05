import { memo, forwardRef, type ReactNode, type HTMLAttributes } from 'react';
import classNames from 'clsx';

type CardProps = {
  children?: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export const Card = memo(
  forwardRef<HTMLDivElement, CardProps>(function Card({ children, className = '', ...rest }, ref) {
    return (
      <div
        {...rest}
        ref={ref}
        className={classNames(
          `
          flex
          flex-col
          gap-4
          items-center
          rounded-xl 
          border-2
          border-blue-600 
          bg-slate-100 
          p-4 
          shadow-sm 
          transition
          hover:shadow-md 
          hover:border-slate-700 
        `,
          className,
        )}
      >
        {children}
      </div>
    );
  }),
);

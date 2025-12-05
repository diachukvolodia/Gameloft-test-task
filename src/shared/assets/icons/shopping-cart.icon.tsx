import type { FC, SVGProps } from 'react';

export const ShoppingCartIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M32 34C32 31.8 33.8 30 36 30H40" stroke="#1E293B" strokeWidth="8" strokeLinecap="round" />

    <path d="M32 34H40L45 64H88" stroke="#1E293B" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />

    <path d="M44 44H89L84 60H48L44 44Z" stroke="#1E293B" strokeWidth="8" strokeLinejoin="round" />

    <circle cx="52" cy="78" r="7" stroke="#1E293B" strokeWidth="6" fill="none" />
    <circle cx="78" cy="78" r="7" stroke="#1E293B" strokeWidth="6" fill="none" />
  </svg>
);

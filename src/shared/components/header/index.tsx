import { memo, type FC, type ReactNode } from 'react';

type HeaderProps = {
  rightContent: ReactNode;
};
export const Header: FC<HeaderProps> = memo(({ rightContent }) => {
  return (
    <header className="flex w-full h-16 bg-blue-600 rounded-b-4xl">
      <div className="flex justify-end items-center w-full px-10">{rightContent}</div>
    </header>
  );
});

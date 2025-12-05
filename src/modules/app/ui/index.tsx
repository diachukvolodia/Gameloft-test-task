import type { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const App: FC = () => {
  return (
    <div className="flex flex-col min-w-screen min-h-screen">
      <Outlet />
    </div>
  );
};

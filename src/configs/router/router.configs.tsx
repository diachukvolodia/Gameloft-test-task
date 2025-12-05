import { createBrowserRouter, Navigate } from 'react-router-dom';

import { App } from '@/modules/app/ui';
import { ProductsPage } from '@/modules/products/ui';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/products" replace />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
    ],
  },
]);

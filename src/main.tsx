import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';

import { reactQueryClient } from '@configs/services';
import { router } from '@configs/router';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={reactQueryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import { routeTree } from './routeTree.gen';
import { theme } from './styles/theme';

const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
};

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <CssBaseline />
        <RouterProvider router={router} />
    </StrictMode>
  </ThemeProvider>
)

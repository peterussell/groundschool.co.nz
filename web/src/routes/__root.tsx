import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { MainLayout } from '../layouts/MainLayout';

export const Route = createRootRoute({
    component: MainLayout
  // component: () => (
  //   <>
  //     <div>
  //       <Link to="/">Home</Link>
  //       {' '}
  //       <Link to="/about">About</Link>
  //     </div>
  //     <hr />
  //     <Outlet />
  //     <TanStackRouterDevtools />
  //   </>
  // )
});

import { createRouter } from '@tanstack/react-router';
import { Route as RootRoute } from './routes/__root';
import { Route as IndexRoute } from './routes/index';
import { Route as AboutRoute } from './routes/about';

export const routeTree = RootRoute.addChildren([IndexRoute, AboutRoute]);

export function createStartRouter() {
  return createRouter({
    routeTree,
  });
}

export type AppRouter = ReturnType<typeof createStartRouter>;

declare module '@tanstack/react-router' {
  interface Register {
    router: AppRouter;
  }
}

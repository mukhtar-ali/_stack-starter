import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { Suspense } from 'react';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
];

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content: 'TanStack Start port of the Stack Starter frontend.',
      },
    ],
    links: [{ rel: 'icon', href: '/favicon.svg' }],
    title: 'Stack Starter · TanStack Start',
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <nav>
          <span style={{ fontWeight: 700 }}>Stack&nbsp;Starter</span>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{ className: 'active' }}
              preload="intent"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
      <main>
        <Suspense fallback={<p>Loading…</p>}>
          <Outlet />
        </Suspense>
      </main>
      <footer>
        <small>TanStack Start frontend for the Stack Starter backend.</small>
      </footer>
      {import.meta.env.DEV ? <TanStackRouterDevtools position="bottom-right" /> : null}
    </div>
  );
}

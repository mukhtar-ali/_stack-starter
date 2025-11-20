import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: AboutRouteComponent,
});

function AboutRouteComponent() {
  return (
    <section className="card">
      <h1>About this branch</h1>
      <p>
        The <strong>tanstack-start</strong> branch demonstrates how the Stack Starter project can
        be delivered with TanStack Start instead of Next.js.
      </p>
      <ul>
        <li>File-based routing is powered by <code>@tanstack/react-router</code>.</li>
        <li>Loaders and pending states leverage the Start data APIs.</li>
        <li>
          API communication is centralized in <code>app/lib/api-client.ts</code> so it can be reused
          across routes.
        </li>
      </ul>
      <p>
        Consult the README for environment variables, backend expectations, and development
        workflows unique to this branch.
      </p>
    </section>
  );
}

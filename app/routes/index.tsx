import { createFileRoute } from '@tanstack/react-router';
import { checkBackendHealth } from '~/lib/api-client';

export const Route = createFileRoute('/')({
  loader: checkBackendHealth,
  pendingComponent: () => <p>Checking backend status…</p>,
  errorComponent: ({ error }) => (
    <div className="card" role="alert">
      <h1>Backend connection failed</h1>
      <p>{error instanceof Error ? error.message : String(error)}</p>
      <p>
        Verify that the backend is running and that <code>VITE_API_BASE_URL</code> is configured
        correctly.
      </p>
    </div>
  ),
  component: IndexRouteComponent,
});

function IndexRouteComponent() {
  const health = Route.useLoaderData();

  return (
    <section className="card">
      <h1>Welcome to the TanStack Start frontend</h1>
      <p>
        This branch replaces the original Next.js UI with a TanStack Start application while
        preserving compatibility with the existing backend.
      </p>
      <p>
        The health check below verifies communication with the backend API configured via
        <code>VITE_API_BASE_URL</code>.
      </p>
      <dl>
        <div>
          <dt>Status</dt>
          <dd>
            <strong>{health.status}</strong>
          </dd>
        </div>
        <div>
          <dt>Endpoint</dt>
          <dd>
            <code>{health.endpoint}</code>
          </dd>
        </div>
        <div>
          <dt>Checked at</dt>
          <dd>{new Date(health.checkedAt).toLocaleString()}</dd>
        </div>
        {health.message ? (
          <div>
            <dt>Message</dt>
            <dd>{health.message}</dd>
          </div>
        ) : null}
      </dl>
    </section>
  );
}

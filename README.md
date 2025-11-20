# Stack Starter — TanStack Start edition

This branch (`tanstack-start`) replaces the former Next.js frontend with a [TanStack Start](https://tanstack.com/start/latest) application while keeping the backend contract intact. It is intended for teams that prefer TanStack's file-based routing and data APIs but still want to work with the existing Stack Starter services.

> **Heads up**
> The `main` branch continues to host the original implementation. All frontend work on this branch should use the TanStack Start tooling described below.

## Project structure

```
.
├── app/
│   ├── entry-client.tsx     # Browser entry point
│   ├── entry-server.tsx     # SSR entry point for TanStack Start
│   ├── env.d.ts             # Type definitions for Start
│   ├── lib/
│   │   └── api-client.ts    # Shared API utilities for backend calls
│   ├── router.ts            # Router factory that wires file-based routes together
│   └── routes/
│       ├── __root.tsx       # Root layout, navigation, document metadata
│       ├── about.tsx        # Static “about” route
│       └── index.tsx        # Landing page + backend health check loader
├── public/                  # Static assets served verbatim
│   └── favicon.svg
├── docs/                    # Space for additional TanStack Start documentation
├── package.json             # Scripts + dependencies for TanStack Start
├── tanstack.config.ts       # Framework-level configuration
├── tsconfig.json            # Typescript config extending TanStack Start defaults
└── vite.config.ts           # Vite configuration with the TanStack plugin
```

## Prerequisites

- **Node.js 18.17+** (the TanStack Start CLI requires modern Node features).
- **npm 9+** (or compatible package manager such as `pnpm`).
- Access to the Stack Starter backend (local or remote). The frontend expects a `/api/health` endpoint that returns JSON `{ status: string, message?: string }`.

## Installation

```bash
# From the repository root
npm install
```

> If your network restricts access to npm, configure the appropriate proxy or private registry before running the install command.

## Running the app

### Development server

```bash
npm run dev
```

- Exposes the TanStack Start dev server on http://localhost:5173 by default.
- Automatically reloads routes, loaders, and styles.
- Proxies API requests directly to the backend URL configured by `VITE_API_BASE_URL` (see below).

### Production build

```bash
npm run build
npm run start
```

- `npm run build` creates the SSR and client bundles in `.tanstack/` (managed by the Start CLI).
- `npm run start` launches the production server, honoring the `PORT` environment variable if provided.

## Environment variables

| Variable | Purpose | Default |
| --- | --- | --- |
| `VITE_API_BASE_URL` | Base URL for backend requests. The frontend appends `/api/health` for status checks. | `http://localhost:3000` |
| `PORT` | Overrides the port for `npm run start`. | `4173` via `tanstack.config.ts` |

> Set `VITE_API_BASE_URL` in a `.env` file at the project root (not committed) or export it in your shell before running the dev server.

## Backend integration

- The shared API client lives in [`app/lib/api-client.ts`](app/lib/api-client.ts).
- The home route (`app/routes/index.tsx`) uses a TanStack Start loader to call `checkBackendHealth()` before rendering, so the backend response is available during SSR and hydration.
- Errors thrown from the loader surface through the route's custom `errorComponent`, ensuring that backend outages are visible during development and production builds.

If the backend requires authentication headers or custom logic, extend the helpers in `app/lib/api-client.ts` and reuse them across routes.

## Differences from the Next.js implementation

- Routing is now file-based via `@tanstack/react-router` with manual composition in [`app/router.ts`](app/router.ts).
- Server-side rendering flows through TanStack Start's `StartServer`/`StartClient` entries rather than Next.js pages.
- Styles are authored in `app/styles.css`; feel free to replace with Tailwind or your preferred solution.

## Useful scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the TanStack Start development server. |
| `npm run build` | Generate the production bundles. |
| `npm run start` | Launch the production server using the prebuilt output. |
| `npm run lint` | Run ESLint across the project. |
| `npm run typecheck` | Perform a TypeScript project-wide type check. |

## Troubleshooting

- **Unable to reach backend**: Ensure the API server is running and `VITE_API_BASE_URL` points to the correct host (include protocol, e.g., `http://localhost:3000`).
- **Port already in use**: Set `PORT=3005 npm run dev` (or similar) to override the dev server port.
- **Missing npm packages**: Clear any custom npm proxies or mirrors that might block scoped packages such as `@tanstack/start`.

For additional TanStack Start recipes, document them in the [`docs/`](docs/) directory so they remain specific to this branch.

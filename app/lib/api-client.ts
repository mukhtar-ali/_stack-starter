import 'cross-fetch/polyfill';

export interface HealthResponse {
  status: string;
  message?: string;
  ok: boolean;
  checkedAt: string;
  endpoint: string;
}

const DEFAULT_API_BASE_URL = 'http://localhost:3000';

function resolveBaseUrl(): string {
  const fromEnv = import.meta.env.VITE_API_BASE_URL;
  if (fromEnv && typeof fromEnv === 'string') {
    return fromEnv.replace(/\/$/, '');
  }
  return DEFAULT_API_BASE_URL;
}

export async function checkBackendHealth(): Promise<HealthResponse> {
  const baseUrl = resolveBaseUrl();
  const url = new URL('/api/health', baseUrl);
  const response = await fetch(url.toString(), {
    headers: {
      Accept: 'application/json',
    },
  }).catch((error) => {
    throw new Error(`Unable to reach backend at ${url.toString()}: ${String(error)}`);
  });

  const checkedAt = new Date().toISOString();

  if (!response.ok) {
    return {
      status: 'error',
      message: `Backend responded with status ${response.status}`,
      ok: false,
      checkedAt,
      endpoint: url.toString(),
    };
  }

  try {
    const payload = (await response.json()) as { status?: string; message?: string };
    return {
      status: payload.status ?? 'ok',
      message: payload.message,
      ok: true,
      checkedAt,
      endpoint: url.toString(),
    };
  } catch (error) {
    return {
      status: 'ok',
      message: 'Backend responded successfully (non-JSON payload).',
      ok: true,
      checkedAt,
      endpoint: url.toString(),
    };
  }
}

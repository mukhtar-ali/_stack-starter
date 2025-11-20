import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { tanstackStart } from '@tanstack/start/vite';

export default defineConfig({
  plugins: [tanstackStart(), tsconfigPaths()],
  server: {
    port: Number(process.env.PORT ?? 5173),
  },
});

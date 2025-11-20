import { defineConfig } from '@tanstack/start/config';

export default defineConfig({
  server: {
    port: Number(process.env.PORT ?? 4173),
  },
});

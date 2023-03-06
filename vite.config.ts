/// <reference types="vitest" />
import path from 'path';

import dns from 'dns';
import { env } from 'process';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

// Resolve localhost for Node v16 and older.
// @see https://vitejs.dev/config/server-options.html#server-host.
dns.setDefaultResultOrder('verbatim');

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    api: 7001,
  },
  // Backwards-compat with Gatsby.
  publicDir: 'static',
  build: {
    outDir: 'public',
  },
  resolve: {
    alias: {
      gatsby: path.resolve(__dirname, 'src/compat/gatsby-compat.tsx'),
      '@reach/router': path.resolve(__dirname, 'src/compat/reach-router-compat.tsx'),
    },
  },
  define: {
    __MEDUSA_BACKEND_URL__: JSON.stringify(
      env.MEDUSA_BACKEND_URL ||
        // Backwards-compat with Gatsby.
        env.GATSBY_MEDUSA_BACKEND_URL ||
        env.GATSBY_STORE_URL ||
        ''
    ),
  },
  optimizeDeps: {
    exclude: ['typeorm', 'medusa-interfaces'],
  },
});

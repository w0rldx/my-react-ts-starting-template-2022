import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  root: './src',
  assetsInclude: ['./src/assets/**/*'],

  plugins: [
    {
      ...eslintPlugin({ cache: false }),
      enforce: 'pre',
    },
    react(),
    tsconfigPaths(),
  ],
  build: {
    emptyOutDir: true,
    outDir: '../dist',
  },
});

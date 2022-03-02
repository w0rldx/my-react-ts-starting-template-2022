import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';

const config = {
  root: 'src',
  assetsInclude: ['./src/assets/**/*'],
  plugins: [react(), tsconfigPaths(), eslintPlugin()],
  build: {
    emptyOutDir: true,
    outDir: '../dist',
  },
};

export default config;

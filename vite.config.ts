import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isUserPage = repositoryName?.toLowerCase().endsWith('.github.io');
const base =
  process.env.GITHUB_ACTIONS && repositoryName && !isUserPage ? `/${repositoryName}/` : '/';

export default defineConfig({
  base,
  plugins: [react()],
  test: {
    environment: 'node',
    globals: true
  }
});

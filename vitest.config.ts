import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['packages/common/test/**/*.{test,spec}.{js,ts}', 'packages/node/test/**/*.{test,spec}.{js,ts}'],
    setupFiles: ['./packages/common/test/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html']
    }
  }
})

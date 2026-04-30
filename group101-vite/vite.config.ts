import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    tags : [
      { name: "frontend", description: "Tests related to frontend components and UI" },
      { name: "backend", description: "Tests related to backend logic and APIs" },
      { name: "db", description: "Tests related to database interactions" },
    ]
  },
  coverage: {
    include: ["src/**/*"],
    exclude: [
      "src/assets",
      "src/*.css",
      "vitest.*.ts",
      "**/*.config.*",
      "**/*.test.{ts, tsx, js, jsx}",
      "**/coverage/**"
    ]
  }
})

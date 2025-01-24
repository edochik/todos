/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Включает глобальные функции describe/test/it
    environment: 'jsdom', // Устанавливает jsdom как окружение для тестов
    setupFiles: './src/setupTests.ts', // Указывает файл для начальной настройки (опционально)
  },
});
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/rsschool-REACT2025/class-components/',
  plugins: [react()],
});

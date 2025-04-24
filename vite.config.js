import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '5173-lipu0052-pythonchat-6dlndljt87g.ws-us118.gitpod.io', // Add the specific host
      'localhost', // Optional: keep localhost for local dev
    ],
  },
});

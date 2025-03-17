import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for the event organization team project
export default defineConfig({
  // base: '/event-organization-team/',
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    }
  },
  resolve: {
    alias: {
      '@': '/src', // Alias for easier imports
    }
  },
  server: {
    port: 3000, // Development server port
    open: true, // Automatically open the browser
    host: true  // Allow external access
  }
});
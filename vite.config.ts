import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true,      // Allow access from local network (e.g., 192.168.x.x)
    port: 5173,      // You can change this if needed
    strictPort: true // If true, fail if port is in use instead of switching
  }
});

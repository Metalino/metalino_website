import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    plugins: [react()],
    
    // FIX: Uses standard root for local dev, but maps to your theme folder for Hostinger
    base: isProduction ? '/wp-content/themes/metalino_web/dist/' : '/', 
    
    server: {
      host: '0.0.0.0',   // Bind to all interfaces (LAN)
      port: 5173,  
    },
    
    build: {
      manifest: true, 
      outDir: 'dist',
      rollupOptions: {
        input: 'src/main.jsx',
      },
    }
  };
});
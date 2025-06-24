import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allows access from external IP/domain
    allowedHosts: ['oceyon.ch'] // allows oceyon.ch as a valid host
  }
})

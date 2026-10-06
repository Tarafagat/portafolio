import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./": el mismo build funciona standalone y embebido en el
// dashboard de Asterion (iframe vía /api/plugins/<nombre>/proxy/).
// 8049 es el mismo puerto que declara plugin.yaml.
export default defineConfig({
  base: "./",
  plugins: [react()],
  server: { port: 8049, strictPort: true },
  preview: { port: 8049, strictPort: true },
  // El chunk de Three.js (~250 KB gzip) se carga en diferido, solo para
  // las escenas 3D; el resto del portafolio no lo espera.
  build: { chunkSizeWarningLimit: 1000 },
});

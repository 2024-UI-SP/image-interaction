import { defineConfig } from 'vite';

export default defineConfig({
  assetsInclude: ['**/*.geojson'],  // So can import geojson files
});
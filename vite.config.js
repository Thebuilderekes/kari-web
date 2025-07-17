// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'public', // This tells Vite to look inside the 'public' folder
  build: {
    outDir: 'public', // Standard output directory for the build
    // this was dist as t time of vercel deployment
  },
});

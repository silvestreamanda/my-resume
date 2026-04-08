import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Altere o `base` para o nome do seu repositório no GitHub Pages
// Ex: se o repo for github.com/usuario/my-resume → base: '/my-resume/'
// Para domínio customizado ou raiz: base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/my-resume/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});

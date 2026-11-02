import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        pizza: resolve(import.meta.dirname, 'projetos/pizza/index.html'),
        refriz: resolve(import.meta.dirname, 'projetos/refriz/index.html'),
        burguer: resolve(import.meta.dirname, 'projetos/burguer/index.html'),
        hoody: resolve(import.meta.dirname, 'projetos/hoody/index.html'),
        privacidade: resolve(import.meta.dirname, 'privacidade/index.html'),
        servicos: resolve(import.meta.dirname, 'servicos/index.html'),
        notFound: resolve(import.meta.dirname, '404.html'),
      },
    },
  },
})

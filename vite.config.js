import { defineConfig } from 'vite'
import vituum from 'vituum'
import posthtml from '@vituum/vite-plugin-posthtml'
import postcss from '@vituum/vite-plugin-postcss'

export default defineConfig({
  root: './src',

  plugins: [
    vituum({
      pages: ['html/pages/**/*.html']
    }),
    postcss(),
    posthtml({
      root: './src/html/pages'
    })
  ],

  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
})
//24.41
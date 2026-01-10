import { defineConfig } from 'vite';
import posthtml from '@vituum/vite-plugin-posthtml';
import SassGlob from 'vite-plugin-sass-glob-import';
import { imageOptimizerPlugin } from './vite-plugins/image-optimizer';
import { assetFileNames } from './vite-plugins/assetFileNames';
import { sync } from 'glob';

export default defineConfig({
  plugins: [posthtml(), SassGlob(), imageOptimizerPlugin()],
  build: {
    rollupOptions: {
      input: sync('src/**/!(_)*.html'.replace(/\\/g, '/')),
      output: {
        assetFileNames,
        chunkFileNames: 'assets/js/[name].js',
        entryFileNames: 'assets/js/[name].js',
      },
    },
    assetsInlineLimit: 0,
    emptyOutDir: true,
    outDir: '../dist',
  },
  root: 'src',
  base: '',
});

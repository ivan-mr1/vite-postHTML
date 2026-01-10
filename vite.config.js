import vituum from 'vituum';
import posthtml from '@vituum/vite-plugin-posthtml';
import { defineConfig } from 'vite';
import SassGlob from 'vite-plugin-sass-glob-import';
import { imageOptimizerPlugin } from './vite-plugins/image-optimizer';
import { buildConfig } from './vite-plugins/build-config';

export default defineConfig({
  base: './',
  plugins: [
    vituum(),
    posthtml({
      root: './src',
    }),
    SassGlob(),
    imageOptimizerPlugin(),
  ],
  build: buildConfig,
});

//27.41

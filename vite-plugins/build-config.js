import { sync } from 'glob';
import path from 'path';

export const buildConfig = {
  rollupOptions: {
    // Автоматический поиск всех HTML файлов в src
    input: sync('src/**/!(_)*.html').map((file) =>
      path.resolve(file).replace(/\\/g, '/'),
    ),
    output: {
      // Распределение файлов по папкам: css, js, assets
      assetFileNames: (assetInfo) => {
        let extType = assetInfo.name;
        if (/css/.test(extType)) {
          extType = 'assets/css';
        }
        return assetInfo.originalFileName ?? `${extType}/[name][extname]`;
      },
      chunkFileNames: 'assets/js/[name].js',
      entryFileNames: 'assets/js/[name].js',
    },
  },
  assetsInlineLimit: 0,
  emptyOutDir: true,
  outDir: 'dist',
};

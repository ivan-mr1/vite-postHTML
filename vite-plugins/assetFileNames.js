export function assetFileNames(assetInfo) {
  let extType = assetInfo.name;
  if (/css/.test(extType)) {
    extType = 'assets/css';
  }
  return assetInfo.originalFileName ?? `${extType}/[name][extname]`;
}

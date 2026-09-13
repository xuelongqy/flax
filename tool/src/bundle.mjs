import { fileURLToPath } from 'node:url';

export const root = fileURLToPath(new URL('../../', import.meta.url));
export const bundleOptions = {
  absWorkingDir: root,
  bundle: true,
  format: 'iife',
  platform: 'neutral',
  target: 'es2019',
  supported: { 'async-generator': false, 'for-await': false },
  logLevel: 'info',
  legalComments: 'inline',
};

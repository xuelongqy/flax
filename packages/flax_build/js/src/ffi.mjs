import { createRequire } from 'node:module';
import { dirname, isAbsolute, resolve } from 'node:path';
import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

// Hermes does not preserve Buffer's prototype through TypedArray.subarray.
// This also applies when only upstream buffer is installed, without FFI.
export const bufferViewCompatibility = `
Buffer.prototype.subarray = function (start, end) {
  const view = Uint8Array.prototype.subarray.call(this, start, end);
  Object.setPrototypeOf(view, Buffer.prototype);
  return view;
};`;

/** Portable FFI and Buffer aliases; no general Node environment is installed. */
export function flaxFfiPlugin() {
  return {
    name: 'flax-ffi',
    setup(builder) {
      const require = createRequire(
        resolve(builder.initialOptions.absWorkingDir ?? process.cwd(), 'package.json'),
      );
      let ffi;
      const ffiEntry = (importer) => {
        if (ffi) return ffi;
        try {
          ffi = require.resolve('@flax/ffi');
        } catch (error) {
          if (error.code !== 'MODULE_NOT_FOUND' || !importer || !isAbsolute(importer))
            throw error;
          ffi = createRequire(importer).resolve('@flax/ffi');
        }
        return ffi;
      };
      builder.onResolve({ filter: /^node:ffi$/ }, (args) => ({
        path: ffiEntry(args.importer),
        sideEffects: false,
      }));
      builder.onResolve({ filter: /^(?:buffer\/?|node:buffer)$/ }, (args) => {
        let owner = require;
        try {
          owner = createRequire(ffiEntry(args.importer));
        } catch (error) {
          if (error.code !== 'MODULE_NOT_FOUND') throw error;
        }
        return {
          path: owner.resolve('buffer/'),
          namespace: 'flax-buffer',
          sideEffects: false,
        };
      });
      builder.onLoad({ filter: /./, namespace: 'flax-buffer' }, async ({ path }) => {
        let adaptation = bufferViewCompatibility;
        try {
          const compatibility = await import(
            pathToFileURL(resolve(dirname(ffiEntry()), 'buffer-compat.js'))
          );
          adaptation = `\n(${compatibility.installBufferCompatibility.toString()})(Buffer);`;
        } catch (error) {
          if (error.code !== 'MODULE_NOT_FOUND') throw error;
        }
        return {
          contents: (await readFile(path, 'utf8')) + adaptation,
          loader: 'js',
          resolveDir: dirname(path),
        };
      });
    },
  };
}

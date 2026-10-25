import { readFile } from 'node:fs/promises';
import { FlaxCompiler } from './compiler.mjs';
import { flaxHostModulesPlugin } from './modules.mjs';
import { flaxFfiPlugin } from './ffi.mjs';
import { prepareNativeAssetsForBuild } from './native-assets.mjs';
import { prepareFfiCodegen } from './ffi-codegen.mjs';

/** Compile before esbuild erases TS types, then resolve prepared host modules. */
export function flaxEsbuildPlugin(manifest = null, options = {}) {
  return {
    name: 'flax-build',
    setup(builder) {
      let generations = [];
      const compiler = new FlaxCompiler({
        root: builder.initialOptions.absWorkingDir,
        ...options,
      });
      flaxFfiPlugin().setup(builder);
      flaxHostModulesPlugin(manifest).setup(builder);
      if (options.nativeAssets !== false) {
        builder.initialOptions.metafile = true;
        builder.onEnd(async (result) => {
          if (result.errors.length) return;
          await prepareNativeAssetsForBuild(
            builder.initialOptions.absWorkingDir ?? process.cwd(),
            options.nativeAssets,
            result.metafile,
          );
        });
      }
      builder.onStart(async () => {
        generations = await prepareFfiCodegen(
          builder.initialOptions.absWorkingDir ?? process.cwd(),
          options.ffiCodegen,
        );
        const files = new Set(compiler.openFiles);
        for (const dependencies of compiler.dependencies.values())
          for (const file of dependencies) files.add(file);
        compiler.invalidate(files);
      });
      builder.onDispose(() => compiler.close());
      builder.onLoad({ filter: /\.[cm]?tsx?$/, namespace: 'file' }, async (args) => {
        const source = await readFile(args.path, 'utf8');
        const result = compiler.transform(source, args.path);
        return {
          contents:
            result.code +
            (result.map ? `\n//# sourceMappingURL=${result.map.toUrl()}` : ''),
          loader: args.path.endsWith('.tsx') ? 'tsx' : 'ts',
          watchFiles: [
            ...result.dependencies,
            ...generations
              .filter((g) => Object.hasOwn(g.outputs, args.path))
              .flatMap((g) => Object.keys(g.dependencies)),
          ],
        };
      });
    },
  };
}

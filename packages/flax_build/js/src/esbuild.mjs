import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
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
      builder.onResolve({ filter: /^\.\.?\/.*\.js$/ }, async (args) => {
        if (
          args.pluginData?.flaxJsxResolving ||
          args.pluginData?.flaxResolving ||
          !compiler.prepareJsx().enabled
        )
          return;
        const candidate = resolve(args.resolveDir, args.path.replace(/\.js$/, '.jsx'));
        if (!existsSync(candidate)) return;
        const settings = {
          kind: args.kind,
          resolveDir: args.resolveDir,
          importer: args.importer,
          pluginData: { ...args.pluginData, flaxJsxResolving: true },
        };
        const ordinary = await builder.resolve(args.path, settings);
        return ordinary.errors.length ? builder.resolve(candidate, settings) : ordinary;
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
        compiler.jsx?.invalidate();
        compiler.prepareJsx();
      });
      builder.onDispose(() => compiler.close());
      builder.onLoad({ filter: /\.[cm]?[jt]sx?$/, namespace: 'file' }, async (args) => {
        const source = await readFile(args.path, 'utf8');
        const result = compiler.transform(source, args.path);
        return {
          contents:
            result.code +
            (result.map ? `\n//# sourceMappingURL=${result.map.toUrl()}` : ''),
          loader: /\.[cm]?tsx?$/.test(args.path) ? 'ts' : 'js',
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

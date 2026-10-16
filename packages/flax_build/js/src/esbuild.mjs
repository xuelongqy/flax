import { readFile } from 'node:fs/promises';
import { FlaxCompiler } from './compiler.mjs';
import { flaxHostModulesPlugin } from './modules.mjs';

/** Compile before esbuild erases TS types, then resolve prepared host modules. */
export function flaxEsbuildPlugin(manifest = null, options = {}) {
  return {
    name: 'flax-build',
    setup(builder) {
      const compiler = new FlaxCompiler({
        root: builder.initialOptions.absWorkingDir,
        ...options,
      });
      flaxHostModulesPlugin(manifest).setup(builder);
      builder.onStart(() => {
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
          watchFiles: result.dependencies,
        };
      });
    },
  };
}

import { FlaxCompiler } from './compiler.mjs';

/** Share semantic lowering and type-dependency invalidation with production builds. */
export function flaxVitePlugin(options = {}) {
  let compiler;
  let server;
  return {
    name: 'flax-typescript',
    enforce: 'pre',
    configResolved(config) {
      compiler = new FlaxCompiler({ root: config.root, ...options });
    },
    configureServer(value) {
      server = value;
    },
    transform(code, id) {
      if (id.startsWith('\0') || !/\.[cm]?tsx?(?:[?#]|$)/.test(id)) return;
      const result = compiler.transform(code, id);
      if (server) server.watcher.add(result.dependencies);
      else for (const dependency of result.dependencies) this.addWatchFile(dependency);
      return result.code === code ? undefined : { code: result.code, map: result.map };
    },
    hotUpdate(context) {
      const affected = compiler.invalidate([context.file]);
      const modules = new Set(context.modules);
      for (const file of affected) {
        for (const node of context.server.moduleGraph.getModulesByFile(file) ?? []) {
          context.server.moduleGraph.invalidateModule(node);
          modules.add(node);
        }
      }
      return [...modules];
    },
    closeBundle() {
      compiler?.close();
    },
  };
}

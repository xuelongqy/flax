import { createRequire } from 'node:module';
import { existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { prepareNativeAssetsForBuild } from './native-assets.mjs';
import { FlaxCompiler } from './compiler.mjs';
import { prepareFfiCodegen } from './ffi-codegen.mjs';

/** Share semantic lowering and type-dependency invalidation with production builds. */
export function flaxVitePlugin(options = {}) {
  let compiler;
  let server;
  let root;
  let adaptBuffer;
  let generations = [];
  return {
    name: 'flax-typescript',
    enforce: 'pre',
    async resolveId(id, importer) {
      if (!importer || !/^\.\.?\/.*\.js$/.test(id) || !compiler?.prepareJsx().enabled)
        return;
      const candidate = resolve(
        dirname(importer.split('?')[0]),
        id.replace(/\.js$/, '.jsx'),
      );
      if (!existsSync(candidate)) return;
      return (
        (await this.resolve(id, importer, { skipSelf: true })) ??
        this.resolve(candidate, importer, { skipSelf: true })
      );
    },
    async buildStart() {
      generations = await prepareFfiCodegen(root, options.ffiCodegen);
      compiler.prepareJsx();
      for (const generation of generations) {
        compiler.invalidate(Object.keys(generation.outputs));
        for (const file of Object.keys(generation.dependencies))
          this.addWatchFile(file);
      }
    },
    config(config) {
      const require = createRequire(
        resolve(config.root ?? process.cwd(), 'package.json'),
      );
      let ffi;
      try {
        ffi = require.resolve('@flax/ffi');
      } catch (error) {
        if (error.code !== 'MODULE_NOT_FOUND') throw error;
      }
      try {
        const buffer = (ffi ? createRequire(ffi) : require).resolve('buffer/');
        let adaptation = '';
        if (ffi) {
          const { installBufferCompatibility } = require(
            resolve(dirname(ffi), 'buffer-compat.js'),
          );
          adaptation = `\n(${installBufferCompatibility.toString()})(Buffer);`;
        }
        adaptBuffer = (code, id) =>
          id.split('?')[0] === buffer
            ? { code: code + adaptation, map: null }
            : undefined;
        return {
          resolve: {
            alias: [
              ...(ffi ? [{ find: /^node:ffi$/, replacement: ffi }] : []),
              { find: /^(?:buffer\/?|node:buffer)$/, replacement: buffer },
            ],
          },
          optimizeDeps: {
            rolldownOptions: {
              plugins: [{ name: 'flax-buffer', transform: adaptBuffer }],
            },
          },
        };
      } catch (error) {
        if (error.code !== 'MODULE_NOT_FOUND') throw error;
      }
    },
    async generateBundle(_, bundle) {
      const outputs = {};
      for (const [name, chunk] of Object.entries(bundle))
        if (chunk.type === 'chunk') {
          outputs[name] = {
            inputs: Object.fromEntries(
              Object.entries(chunk.modules).map(([path, value]) => [
                path,
                { bytesInOutput: value.renderedLength ?? 0 },
              ]),
            ),
          };
        }
      await prepareNativeAssetsForBuild(root, options.nativeAssets, { outputs });
    },
    configResolved(config) {
      root = config.root;
      compiler = new FlaxCompiler({ root, ...options });
    },
    configureServer(value) {
      server = value;
      let timer;
      const update = (file) => {
        if (
          file === compiler.jsx?.generated ||
          /(?:^|\/)(?:node_modules|\.git)\//.test(file)
        )
          return;
        if (
          !compiler.jsx?.dependencies?.includes(file) &&
          !/\.[cm]?[jt]sx?$|\.d\.ts$|(?:^|\/)(?:tsconfig[^/]*|package)\.json$/.test(
            file,
          )
        )
          return;
        compiler.invalidate([file]);
        clearTimeout(timer);
        timer = setTimeout(() => {
          try {
            compiler.prepareJsx();
          } catch (error) {
            server.config.logger.error(`[flax] ${error.message}`);
          } finally {
            server.watcher.add(compiler.jsx?.dependencies ?? []);
          }
        }, 40);
      };
      server.watcher.on('add', update).on('change', update).on('unlink', update);
      server.httpServer?.once('close', () => clearTimeout(timer));
    },
    transform(code, id) {
      const buffer = adaptBuffer?.(code, id);
      if (buffer) return buffer;
      if (id.startsWith('\0') || !/\.[cm]?[jt]sx?(?:[?#]|$)/.test(id)) return;
      const result = compiler.transform(code, id);
      if (server) server.watcher.add(result.dependencies);
      else for (const dependency of result.dependencies) this.addWatchFile(dependency);
      return result.code === code ? undefined : { code: result.code, map: result.map };
    },
    hotUpdate(context) {
      if (
        generations.some(
          (g) =>
            Object.hasOwn(g.dependencies, context.file) ||
            Object.hasOwn(g.outputs, context.file),
        )
      )
        throw new Error(
          'FFI header, recipe or generated output changed; rebuild JavaScript and the native application before reloading',
        );
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

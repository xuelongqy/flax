import { readFile, readdir, realpath, lstat, mkdir, writeFile } from 'node:fs/promises';
import { basename, dirname, resolve, relative, isAbsolute, sep } from 'node:path';
import { transform } from 'esbuild';
import { FlaxCompiler } from './compiler.mjs';
import { prepareApplication } from './application.mjs';
import { createServer } from 'vite';

async function canonicalOutput(path) {
  try {
    if ((await lstat(path)).isSymbolicLink())
      throw new Error('Module output must not use symbolic links');
    return await realpath(path);
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
    return resolve(await canonicalOutput(dirname(path)), basename(path));
  }
}

/** Stage a native module tree. JavaScript and binary inputs retain their bytes. */
export async function prepareModuleApplication({
  projectDirectory = process.cwd(),
  modulesDirectory = 'src',
  entry = 'main.js',
  ...options
} = {}) {
  const project = await realpath(projectDirectory);
  const root = await realpath(resolve(project, modulesDirectory));
  const output = await canonicalOutput(
    resolve(project, options.outputDirectory ?? '../assets/flax'),
  );
  const inside = (parent, child) => {
    const path = relative(parent, child);
    return (
      path === '' ||
      (!isAbsolute(path) && path !== '..' && !path.startsWith(`..${sep}`))
    );
  };
  if (inside(root, output) || inside(output, root))
    throw new Error('Module source and output directories must not overlap');
  const files = new Map();
  const modules = Object.create(null);
  const watchFiles = new Set([
    resolve(project, 'tsconfig.json'),
    resolve(project, 'package.json'),
  ]);
  const compiler = new FlaxCompiler({ root: project });
  compiler.prepareJsx();
  async function visit(directory, prefix = '') {
    const entries = await readdir(directory, { withFileTypes: true });
    for (const item of entries.sort((a, b) => a.name.localeCompare(b.name, 'en'))) {
      const path = resolve(directory, item.name);
      const key = `${prefix}${item.name}`;
      if (item.isDirectory()) {
        await visit(path, `${key}/`);
        continue;
      }
      if (!item.isFile())
        throw new Error(`Module input must be a regular file: ${key}`);
      if (/\.d\.[cm]?ts$/.test(key) || /\.(?:map|md)$/.test(key)) continue;
      const typescript = /\.[cm]?[jt]sx$|\.[cm]?tsx?$/.test(key);
      const target = typescript ? key.replace(/\.[cm]?[jt]sx?$/, '.js') : key;
      const kind = /\.[cm]?js$/.test(target)
        ? 'javascript'
        : target.endsWith('.json')
          ? 'json'
          : target.endsWith('.wasm')
            ? 'wasm'
            : null;
      if (!kind) throw new Error(`Unsupported module input: ${key}`);
      if (files.has(target)) throw new Error(`Conflicting module output: ${target}`);
      let bytes = await readFile(path);
      if (typescript || (kind === 'javascript' && compiler.jsx.enabled)) {
        const compiled = compiler.transform(bytes.toString('utf8'), path);
        for (const dependency of compiled.dependencies) watchFiles.add(dependency);
        if (typescript || compiled.code !== bytes.toString('utf8')) {
          const result = await transform(
            compiled.code +
              (compiled.map ? `\n//# sourceMappingURL=${compiled.map.toUrl()}` : ''),
            {
              loader: /\.[cm]?tsx?$/.test(key) ? 'ts' : 'js',
              sourcemap: 'inline',
              format: 'esm',
              target: 'esnext',
              sourcefile: key,
              keepNames: true,
            },
          );
          bytes = Buffer.from(result.code);
        }
      }
      const limit = kind === 'wasm' ? 16 : kind === 'json' ? 1 : 4;
      if (bytes.length > limit * 1024 * 1024)
        throw new Error(`Module exceeds byte limit: ${key}`);
      files.set(target, bytes);
      modules[target] = kind;
    }
  }
  try {
    await visit(root);
  } finally {
    compiler.close();
  }
  if (
    files.size > 256 ||
    [...files.values()].reduce((sum, bytes) => sum + bytes.length, 0) > 64 * 1024 * 1024
  )
    throw new Error('Module graph exceeds its limit');
  if (modules[entry] !== 'javascript')
    throw new Error('Module entry must name an emitted JavaScript file');
  for (const key of files.keys()) {
    if (!inside(output, await canonicalOutput(resolve(output, key))))
      throw new Error(`Module output escapes its directory: ${key}`);
  }
  // Validate inputs and output paths before replacing descriptor/resources.
  const application = await prepareApplication({
    projectDirectory: project,
    entry,
    modules,
    ...options,
  });
  for (const [key, bytes] of files) {
    const path = resolve(application.directory, key);
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, bytes);
  }
  return { ...application, watchFiles: [...watchFiles] };
}

/** Vite watches sources; the module endpoint serves ESM without browser rewriting. */
export async function startFlaxModuleDev({ entry, out, port, root }) {
  root = await realpath(root);
  const input = resolve(root, entry);
  const modulesDirectory = dirname(input);
  const options = {
    projectDirectory: root,
    modulesDirectory,
    entry: basename(input).replace(/\.[cm]?[jt]sx?$/, '.js'),
    outputDirectory: resolve(root, out),
  };
  let application = await prepareModuleApplication(options);
  let rebuilding = Promise.resolve();
  const server = await createServer({
    configFile: false,
    root,
    publicDir: false,
    server: { host: '127.0.0.1', port, strictPort: true },
    plugins: [
      {
        name: 'flax-native-modules',
        configureServer(server) {
          server.middlewares.use((request, response, next) => {
            if (!['GET', 'HEAD'].includes(request.method)) return next();
            void (async () => {
              const path = new URL(request.url, 'http://localhost').pathname;
              const key = decodeURIComponent(path.slice(1));
              const kind = application.manifest.modules[key];
              if (!Object.hasOwn(application.manifest.modules, key)) return next();
              const bytes = await readFile(resolve(application.directory, key));
              response.setHeader(
                'Content-Type',
                kind === 'wasm'
                  ? 'application/wasm'
                  : kind === 'json'
                    ? 'application/json'
                    : 'text/javascript',
              );
              response.setHeader('Cache-Control', 'no-store');
              response.end(request.method === 'HEAD' ? undefined : bytes);
            })().catch((error) => {
              response.statusCode = 500;
              response.end(error.message);
            });
          });
          server.watcher.add([modulesDirectory, ...application.watchFiles]);
          server.watcher.on('all', (_, path) => {
            const local = relative(modulesDirectory, path);
            if (
              path === resolve(root, 'flax-jsx.generated.d.ts') ||
              (!application.watchFiles.includes(path) &&
                (isAbsolute(local) || local === '..' || local.startsWith(`..${sep}`)))
            )
              return;
            rebuilding = rebuilding
              .then(async () => {
                application = await prepareModuleApplication(options);
                server.watcher.add(application.watchFiles);
                server.ws.send({
                  type: 'custom',
                  event: 'flax:restart',
                  data: { entry: application.manifest.entry },
                });
              })
              .catch((error) => server.config.logger.error(`[flax] ${error.message}`));
          });
        },
      },
    ],
  });
  try {
    await server.listen();
  } catch (error) {
    await server.close();
    throw error;
  }
  const actualPort = server.httpServer.address().port;
  return {
    server,
    entry: input,
    out: application.directory,
    port: actualPort,
    url: `http://127.0.0.1:${actualPort}/${application.manifest.entry}`,
  };
}

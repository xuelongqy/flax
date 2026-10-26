import { createHash } from 'node:crypto';
import { mkdir, realpath, rename, rm, writeFile } from 'node:fs/promises';
import { dirname, isAbsolute, relative, resolve, sep } from 'node:path';
import { build } from 'esbuild';
import { createServer, parseSync } from 'vite';
import { flaxVitePlugin } from './vite.mjs';
import { startFlaxModuleDev } from './esm.mjs';

function clean(value) {
  return value.replace(/[?#].*$/, '');
}

function hostSpecifier(value) {
  value = clean(value);
  if (value.startsWith('/@id/')) value = decodeURIComponent(value.slice(5));
  return value.startsWith('@flax/') ? value : null;
}

function moduleId(root, id) {
  id = clean(id);
  const host = hostSpecifier(id);
  if (host) return host;
  if (id.startsWith('\0')) return `/@virtual/${encodeURIComponent(id.slice(1))}`;
  if (!isAbsolute(id)) return id;
  const local = relative(root, id);
  if (local && !local.startsWith(`..${sep}`) && local !== '..') {
    return `/${local.split(sep).join('/')}`;
  }
  return `/@fs/${id.split(sep).join('/')}`;
}

function propertyName(node, code) {
  if (node.key.type === 'Identifier') return node.key.name;
  if (node.key.type === 'PrivateIdentifier') return `#${node.key.name}`;
  if ('value' in node.key && node.key.value !== undefined)
    return String(node.key.value);
  return code.slice(node.key.start, node.key.end);
}

function classDeclaration(statement) {
  if (statement.type === 'ClassDeclaration') return statement;
  if (
    (statement.type === 'ExportNamedDeclaration' ||
      statement.type === 'ExportDefaultDeclaration') &&
    statement.declaration?.type === 'ClassDeclaration'
  ) {
    return statement.declaration;
  }
  return null;
}

export function instrumentReloadableClasses(code, id) {
  if (id.split(sep).includes('node_modules')) return code;
  const ast = parseSync(id, code).program;
  const edits = [];
  const context = ast.body
    .filter((statement) => !classDeclaration(statement))
    .map((statement) => code.slice(statement.start, statement.end))
    .join('\n');
  for (const statement of ast.body) {
    const declaration = classDeclaration(statement);
    if (!declaration?.id?.name) continue;
    const fields = [];
    const privateFields = [];
    const init = [];
    for (const member of declaration.body.body) {
      if (member.type === 'MethodDefinition' && member.kind === 'constructor') {
        init.push(code.slice(member.start, member.end));
      }
      if (member.type === 'PropertyDefinition' && !member.static) {
        init.push(code.slice(member.start, member.end));
      }
      if (member.key?.type === 'PrivateIdentifier') {
        privateFields.push(propertyName(member, code));
      } else if (member.type === 'PropertyDefinition' && !member.static) {
        fields.push(propertyName(member, code));
      }
    }
    const name = declaration.id.name;
    // Methods must close over the binding that is replaced by the canonical class.
    edits.push({
      start: statement.start,
      end: declaration.body.start + 1,
      source:
        `${statement.type === 'ExportNamedDeclaration' ? 'export ' : ''}let ${name};\n` +
        `${name} = class${code.slice(declaration.id.end, declaration.body.start + 1)}\n` +
        `static { ${name} = this; }\n`,
    });
    edits.push({
      start: statement.end,
      end: statement.end,
      source:
        `;\n${name} = globalThis.__flaxModules.dev.class(` +
        `${JSON.stringify(name)}, ${name}, ${JSON.stringify({ fields, private: privateFields, init: init.join('\n'), context })});` +
        (statement.type === 'ExportDefaultDeclaration'
          ? `\nexport { ${name} as default };`
          : ''),
    });
  }
  for (const edit of edits.sort((a, b) => b.start - a.start)) {
    code = code.slice(0, edit.start) + edit.source + code.slice(edit.end);
  }
  return code;
}

async function dependencyTarget(server, root, specifier) {
  const host = hostSpecifier(specifier);
  if (host) return host;
  const node = await server.moduleGraph.getModuleByUrl(specifier);
  if (node?.id) return moduleId(root, node.id);
  throw new Error(`Unable to resolve transformed Flax import: ${specifier}`);
}

async function compileModule(state, node) {
  const id = node.id ?? node.url;
  const transformed = await state.server.transformRequest(node.url);
  if (!transformed) throw new Error(`Unable to transform Flax module: ${node.url}`);
  const code = instrumentReloadableClasses(transformed.code, id);
  const dependencies = {};
  const result = await build({
    absWorkingDir: state.root,
    bundle: true,
    write: false,
    platform: 'neutral',
    format: 'cjs',
    target: 'es2019',
    keepNames: true,
    supported: { 'async-generator': false, 'for-await': false },
    logLevel: 'silent',
    legalComments: 'inline',
    stdin: {
      contents: code,
      sourcefile: id,
      resolveDir: isAbsolute(id) ? dirname(id) : state.root,
      loader: 'js',
    },
    plugins: [
      {
        name: 'flax-dev-dependencies',
        setup(builder) {
          builder.onResolve({ filter: /.*/ }, async (args) => {
            if (args.kind === 'entry-point') return;
            dependencies[args.path] = await dependencyTarget(
              state.server,
              state.root,
              args.path,
            );
            return { path: args.path, external: true };
          });
        },
      },
    ],
  });
  const factory = `function(module, exports, require) {\n${result.outputFiles[0].text}\n}`;
  const revision = createHash('sha256')
    .update(factory)
    .update(
      JSON.stringify(
        Object.entries(dependencies).sort(([a], [b]) => a.localeCompare(b)),
      ),
    )
    .digest('hex');
  return {
    id: moduleId(state.root, id),
    dependencies,
    factory,
    revision,
  };
}

function isHostNode(node) {
  return hostSpecifier(node.id ?? node.url) !== null;
}

async function compileGraph(state, node, modules, allDependencies, updated) {
  if (!node || isHostNode(node)) return;
  const id = moduleId(state.root, node.id ?? node.url);
  if (modules.has(id)) return;
  const cached = !allDependencies && !updated.has(id) ? state.modules.get(id) : null;
  modules.set(id, cached ?? (await compileModule(state, node)));
  const refreshed =
    (node.id && state.server.moduleGraph.getModuleById(node.id)) ??
    (await state.server.moduleGraph.getModuleByUrl(node.url));
  for (const dependency of refreshed?.importedModules ?? []) {
    const dependencyId = moduleId(state.root, dependency.id ?? dependency.url);
    if (
      allDependencies ||
      updated.has(dependencyId) ||
      !state.modules.has(dependencyId)
    ) {
      await compileGraph(state, dependency, modules, allDependencies, updated);
    }
  }
}

function affectedImporters(state, changed) {
  const affected = new Set();
  const pending = [...changed];
  let reachesEntry = false;
  while (pending.length) {
    const node = pending.pop();
    if (!node || isHostNode(node) || affected.has(node)) continue;
    affected.add(node);
    if (moduleId(state.root, node.id ?? node.url) === state.entryId)
      reachesEntry = true;
    for (const importer of node.importers ?? []) pending.push(importer);
  }
  return reachesEntry ? affected : new Set();
}

function inventory(state) {
  const entry = state.entryNode;
  const found = new Set();
  const pending = entry ? [entry] : [];
  while (pending.length) {
    const node = pending.pop();
    if (!node || isHostNode(node)) continue;
    const id = moduleId(state.root, node.id ?? node.url);
    if (found.has(id)) continue;
    found.add(id);
    for (const dependency of node.importedModules ?? []) pending.push(dependency);
  }
  return [...found].sort();
}

function updatePayload(state, revisions) {
  const changed = new Set();
  const importers = new Map();
  for (const module of state.modules.values()) {
    if (revisions.get(module.id) !== module.revision) changed.add(module.id);
    for (const target of Object.values(module.dependencies)) {
      if (!importers.has(target)) importers.set(target, new Set());
      importers.get(target).add(module.id);
    }
  }
  for (const id of changed) {
    for (const importer of importers.get(id) ?? []) changed.add(importer);
  }
  const removed = [...revisions.keys()].some((id) => !state.modules.has(id));
  if (changed.size === 0 && !removed) return null;
  return {
    inventory: [...state.modules.keys()].sort(),
    modules: [...changed].sort().map((id) => state.modules.get(id)),
  };
}

function sendUpdate(state, client) {
  const session = state.clients.get(client);
  if (session?.pending) return;
  const payload = updatePayload(state, session?.revisions ?? new Map());
  if (!payload) return;
  payload.id = ++state.nextBatch;
  if (session) session.pending = { ...payload, snapshot: state.modules };
  client.send('flax:update', payload);
}

function acceptedRevisions(data) {
  if (
    !data?.revisions ||
    typeof data.revisions !== 'object' ||
    Array.isArray(data.revisions)
  )
    return null;
  const entries = Object.entries(data.revisions);
  if (entries.some(([id, revision]) => !id || typeof revision !== 'string'))
    return null;
  return new Map(entries);
}

async function writeStartupAsset(state, modules) {
  const temporary = `${state.out}.tmp`;
  try {
    await writeFile(temporary, initialSource(state.entryId, modules, state.socketUrl));
    await rename(temporary, state.out);
  } finally {
    await rm(temporary, { force: true });
  }
}

function message(error) {
  return error instanceof Error ? error.message : String(error);
}

function hotPlugin(state) {
  return {
    name: 'flax-dev-hot',
    enforce: 'pre',
    configureServer(server) {
      server.ws.on('flax:ready', (data, client) => {
        const revisions = acceptedRevisions(data);
        if (!revisions) return;
        state.clients.set(client, { revisions, pending: null });
        sendUpdate(state, client);
      });
      server.ws.on('flax:applied', (data, client) => {
        const session = state.clients.get(client);
        if (!session?.pending || session.pending.id !== data?.id) return;
        for (const module of session.pending.modules)
          session.revisions.set(module.id, module.revision);
        session.pending = null;
        sendUpdate(state, client);
      });
      server.ws.on('flax:runtime-error', (data, client) => {
        const session = state.clients.get(client);
        if (session?.pending && session.pending.id === data?.id) {
          const snapshot = session.pending.snapshot;
          session.pending = null;
          // A save may have finished while the rejected batch was in flight.
          if (snapshot !== state.modules) sendUpdate(state, client);
        }
        if (typeof data?.message === 'string')
          server.config.logger.error(`[flax] ${data.message}`);
      });
    },
    resolveId(source) {
      if (hostSpecifier(source)) return { id: source, external: true };
    },
    async hotUpdate(options) {
      // Serialize snapshots so a later save cannot be overwritten by an older batch.
      const pending = state.pendingUpdate.then(async () => {
        const fileId = moduleId(state.root, options.file);
        if (state.modules.has(fileId)) state.dirtyModules.add(fileId);
        const affected = affectedImporters(state, options.modules);
        if (affected.size === 0) return [];
        for (const node of affected)
          state.dirtyModules.add(moduleId(state.root, node.id ?? node.url));
        if (options.type === 'delete') {
          options.server.ws.send('flax:error', {
            message: `Flax hot reload requires restart: module deleted: ${options.file}`,
            restartRequired: true,
          });
          return [];
        }
        try {
          const modules = new Map();
          const updated = state.dirtyModules;
          for (const node of affected)
            await compileGraph(state, node, modules, false, updated);
          const next = new Map(state.modules);
          for (const [id, module] of modules) next.set(id, module);
          const snapshot = new Map();
          for (const id of inventory(state)) {
            const module = next.get(id);
            if (!module) throw new Error(`Missing Flax startup module: ${id}`);
            snapshot.set(id, module);
          }
          await writeStartupAsset(state, snapshot);
          state.modules = snapshot;
          state.dirtyModules.clear();
          for (const client of options.server.ws.clients) sendUpdate(state, client);
        } catch (error) {
          options.server.config.logger.error(`[flax] ${message(error)}`);
          options.server.ws.send('flax:error', { message: message(error) });
        }
        return [];
      });
      state.pendingUpdate = pending.catch(() => {});
      return pending;
    },
  };
}

function moduleSource(module) {
  return `{id:${JSON.stringify(module.id)},revision:${JSON.stringify(module.revision)},dependencies:${JSON.stringify(module.dependencies)},factory:${module.factory}}`;
}

function clientSource(url) {
  return `
(() => {
  const dev = globalThis.__flaxModules?.dev;
  if (!dev) throw new Error('Missing Flax dev module registry');
  if (typeof globalThis.WebSocket !== 'function') {
    globalThis.console?.error?.('[Flax HMR] WebSocket unavailable; install FlaxWebSocketPlugin.');
    return;
  }
  const socket = new globalThis.WebSocket(${JSON.stringify(url)}, 'vite-hmr');
  const acknowledge = (event, data) => socket.send(JSON.stringify({
    type: 'custom', event, data,
  }));
  socket.addEventListener('open', () => acknowledge('flax:ready', {revisions: dev.revisions}));
  socket.addEventListener('message', (event) => {
    if (typeof event.data !== 'string') return;
    let payload;
    try { payload = JSON.parse(event.data); } catch { return; }
    if (payload.type !== 'custom') return;
    if (payload.event === 'flax:error') {
      globalThis.console?.error?.('[Flax HMR] ' + payload.data.message);
      return;
    }
    if (payload.event !== 'flax:update') return;
    try {
      dev.apply(payload.data);
      acknowledge('flax:applied', {id: payload.data.id});
    } catch (error) {
      const message = String(error?.message ?? error);
      globalThis.console?.error?.('[Flax HMR] ' + message);
      if (socket.readyState === 1) {
        socket.send(JSON.stringify({
          type: 'custom',
          event: 'flax:runtime-error',
          data: {id: payload.data.id, message, restartRequired: error?.restartRequired === true},
        }));
      }
    }
  });
})();`;
}

function initialSource(entry, modules, url) {
  return `globalThis.__flaxModules.dev.load({entry:${JSON.stringify(entry)},modules:[${[
    ...modules.values(),
  ]
    .sort((a, b) => a.id.localeCompare(b.id))
    .map(moduleSource)
    .join(',')} ]});\n${clientSource(url)}\n`;
}

function entryUrl(root, file) {
  const local = relative(root, file);
  return local && !local.startsWith(`..${sep}`) && local !== '..'
    ? `/${local.split(sep).join('/')}`
    : `/@fs/${file.split(sep).join('/')}`;
}

/** Start Vite as Flax's watcher/transform server and emit one synchronous app asset. */
export async function startFlaxDev({
  entry,
  out,
  port = 5173,
  root = process.cwd(),
  entryFormat = 'script',
}) {
  if (entryFormat === 'module') return startFlaxModuleDev({ entry, out, port, root });
  if (entryFormat !== 'script') throw new Error('Unsupported entry format');
  root = await realpath(resolve(root));
  const entryFile = resolve(root, entry);
  const state = {
    root,
    entryId: moduleId(root, entryFile),
    entryNode: null,
    modules: new Map(),
    dirtyModules: new Set(),
    clients: new WeakMap(),
    nextBatch: 0,
    pendingUpdate: Promise.resolve(),
    out: resolve(root, out),
    socketUrl: null,
    server: null,
  };
  const server = await createServer({
    root,
    appType: 'custom',
    clearScreen: false,
    logLevel: 'warn',
    esbuild: { target: 'esnext' },
    optimizeDeps: { noDiscovery: true },
    plugins: [flaxVitePlugin(), hotPlugin(state)],
    server: {
      host: '127.0.0.1',
      port,
      strictPort: port !== 0,
      preTransformRequests: false,
      watch: {
        // Coalesce writes instead of losing rapid saves to change-event throttling.
        awaitWriteFinish: { stabilityThreshold: 50, pollInterval: 10 },
      },
    },
  });
  state.server = server;
  try {
    await server.listen();
    const url = entryUrl(root, entryFile);
    await server.transformRequest(url);
    state.entryNode = await server.moduleGraph.getModuleByUrl(url);
    if (!state.entryNode) throw new Error(`Unable to load Flax entry: ${entry}`);
    state.entryId = moduleId(root, state.entryNode.id ?? state.entryNode.url);
    const modules = new Map();
    await compileGraph(state, state.entryNode, modules, true);
    state.modules = modules;
    const address = server.httpServer?.address();
    const actualPort = typeof address === 'object' && address ? address.port : port;
    state.socketUrl = `ws://127.0.0.1:${actualPort}`;
    await mkdir(dirname(state.out), { recursive: true });
    await writeStartupAsset(state, modules);
    return { server, entry: entryFile, out: state.out, port: actualPort };
  } catch (error) {
    await server.close();
    throw error;
  }
}

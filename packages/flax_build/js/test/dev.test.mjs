import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { createContext, runInContext } from 'node:vm';
import { instrumentReloadableClasses, startFlaxDev } from '../src/dev.mjs';
import { createFlaxModuleRegistry } from '../src/registry.mjs';

function waitOpen(socket) {
  return new Promise((resolve, reject) => {
    socket.addEventListener('open', resolve, { once: true });
    socket.addEventListener('error', reject, { once: true });
  });
}

function waitCustom(socket, name, accepts = () => true) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      socket.removeEventListener('message', receive);
      reject(new Error(`Timed out waiting for ${name}`));
    }, 5000);
    function receive(event) {
      const payload = JSON.parse(event.data);
      if (payload.type !== 'custom' || payload.event !== name || !accepts(payload.data))
        return;
      clearTimeout(timer);
      socket.removeEventListener('message', receive);
      resolve(payload.data);
    }
    socket.addEventListener('message', receive);
  });
}

function waitServerEvent(server, name) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      server.ws.off(name, receive);
      reject(new Error(`Timed out waiting for ${name}`));
    }, 5000);
    function receive(data) {
      clearTimeout(timer);
      server.ws.off(name, receive);
      resolve(data);
    }
    server.ws.on(name, receive);
  });
}

async function connectClient(dev, t, prepare) {
  const batches = [];
  const errors = [];
  const sockets = [];
  class ClientSocket extends WebSocket {
    constructor(...args) {
      super(...args);
      sockets.push(this);
      this.addEventListener('message', (event) => {
        const payload = JSON.parse(event.data);
        if (payload.event === 'flax:update') batches.push(payload.data);
      });
    }
  }
  t.after(() => sockets.forEach((socket) => socket.close()));
  const context = createContext({
    WebSocket: ClientSocket,
    console: { error: (...args) => errors.push(args.join(' ')) },
  });
  runInContext(
    `globalThis.__flaxModules = (${createFlaxModuleRegistry.toString()})();`,
    context,
  );
  prepare?.(context.__flaxModules);
  const ready = waitServerEvent(dev.server, 'flax:ready');
  runInContext(await readFile(dev.out, 'utf8'), context);
  await ready;
  return { registry: context.__flaxModules, batches, errors, socket: sockets[0] };
}

test('generic method edits preserve instances and type-only superclass changes require restart', async (t) => {
  const root = await mkdtemp(join(tmpdir(), 'flax-dev-generics-'));
  const entry = join(root, 'main.ts');
  const types = join(root, 'types.ts');
  await writeFile(
    join(root, 'tsconfig.json'),
    JSON.stringify({
      compilerOptions: {
        strict: true,
        target: 'ES2022',
        module: 'ESNext',
        moduleResolution: 'Bundler',
      },
      include: ['*.ts'],
    }),
  );
  await writeFile(
    join(root, 'bindings.d.ts'),
    `
    declare const flaxDartTypeCases: unique symbol;
    declare const flaxDartTypeKey: unique symbol;
    export declare abstract class Processor<T> {
      static readonly [flaxDartTypeCases]: unknown;
      static readonly [flaxDartTypeKey]: unknown;
      constructor(value: T);
      transform(value: T): T;
    }
  `,
  );
  await writeFile(
    join(root, 'bindings.js'),
    `
    const selected = new Map();
    export const Processor = { $type(type) {
      if (!selected.has(type)) selected.set(type, class NativeProcessor {
        constructor(value) { this.value = value; }
        transform(value) { return value; }
      });
      return selected.get(type);
    }};
  `,
  );
  const source = (version) => `
    import {Processor} from './bindings.js';
    import type {Choice} from './types.js';
    export class Counter extends Processor<Choice> {
      count = 1;
      label(value: Choice) { return super.transform(value) + ':v${version}:' + this.count; }
    }
  `;
  await writeFile(types, 'export type Choice = string;');
  await writeFile(entry, source(1));
  const dev = await startFlaxDev({ root, entry: 'main.ts', out: 'app.js', port: 0 });
  t.after(async () => {
    await dev.server.close();
    await rm(root, { recursive: true, force: true });
  });
  const client = await connectClient(dev, t, (registry) => {
    const metadata = {
      specifier: '@flax/core/bindings',
      owner: 'test/core',
      version: '1',
      artifact: 'test',
      dependencies: {},
    };
    registry.define(metadata, (_module, exports) => {
      exports.dartTypes = { string: 'String', num: 'num' };
    });
    registry.seal([metadata]);
  });
  const original = client.registry.dev.require('/main.ts').Counter;
  const instance = new original('seed');
  instance.count = 7;
  const applied = waitServerEvent(dev.server, 'flax:applied');
  await writeFile(entry, source(2));
  await applied;
  assert.equal(client.registry.dev.require('/main.ts').Counter, original);
  assert.equal(instance.label('x'), 'x:v2:7');
  const rejected = waitServerEvent(dev.server, 'flax:runtime-error');
  await writeFile(types, 'export type Choice = number;');
  const error = await rejected;
  assert.equal(error.restartRequired, true);
  assert.match(error.message, /superclass changed/);
  assert.equal(instance.label('x'), 'x:v2:7');
  assert.match(await readFile(dev.out, 'utf8'), /dartTypes.num/);
  const recovered = waitServerEvent(dev.server, 'flax:applied');
  await writeFile(types, 'export type Choice = string;');
  await writeFile(entry, source(3));
  await recovered;
  assert.equal(instance.label('x'), 'x:v3:7');
  assert.equal(client.registry.dev.require('/main.ts').Counter, original);
});

test('class instrumentation records stable structural metadata', () => {
  const source = instrumentReloadableClasses(
    'export class Counter { count = 1; #secret = 2; constructor() { this.ready = true; } label() { return this.count; } }',
    '/src/counter.js',
  );
  assert.match(source, /dev\.class\("Counter", Counter/);
  assert.match(source, /"fields":\["count"\]/);
  assert.match(source, /"private":\["#secret"\]/);
  assert.match(source, /"init":"count = 1;\\n#secret = 2;\\nconstructor\(\)/);
  assert.match(source, /"context":""/);

  const changed = instrumentReloadableClasses(
    'export class Counter { count = 2; #secret = 2; constructor() { this.ready = false; } label() { return this.count; } }',
    '/src/counter.js',
  );
  assert.notEqual(
    source.match(/"init":"([^"]*)"/)?.[1],
    changed.match(/"init":"([^"]*)"/)?.[1],
  );
});

test('named class bodies retain canonical self references across Vite reloads', async (t) => {
  const root = await mkdtemp(join(tmpdir(), 'flax-dev-self-'));
  const entry = join(root, 'main.ts');
  const source = (version) => `
export class Counter {
  static version() { return ${version}; }
  static initialVersion = Counter.version();
  static initialName = Counter.name;
  static create() { return new Counter(); }
  static accepts(value) { return value instanceof Counter; }
  identity() { return Counter; }
  shadow(Counter) { return Counter; }
}
export default class DefaultCounter extends Counter {
  identity() { return DefaultCounter; }
}
`;
  await writeFile(entry, source(1));
  const dev = await startFlaxDev({
    root,
    entry: 'main.ts',
    out: 'app.js',
    port: 0,
  });
  t.after(async () => {
    await dev.server.close();
    await rm(root, { recursive: true, force: true });
  });
  const client = await connectClient(dev, t);
  const exports = client.registry.dev.require('/main.ts');
  const { Counter, default: DefaultCounter } = exports;
  const instance = new Counter();
  const child = new DefaultCounter();
  assert.equal(Counter.name, 'Counter');
  assert.equal(DefaultCounter.name, 'DefaultCounter');
  assert.equal(Counter.initialVersion, 1);
  assert.equal(Counter.initialName, 'Counter');
  assert.equal(instance.identity(), Counter);
  assert.equal(child.identity(), DefaultCounter);

  const applied = waitServerEvent(dev.server, 'flax:applied');
  await writeFile(entry, source(2));
  await applied;
  const next = client.registry.dev.require('/main.ts');
  assert.equal(next.Counter, Counter);
  assert.equal(next.default, DefaultCounter);
  assert.equal(instance.identity(), Counter);
  assert.equal(child.identity(), DefaultCounter);
  assert.equal(Counter.create().constructor, Counter);
  assert.equal(Counter.accepts(instance), true);
  assert.equal(Counter.initialVersion, 2);
  assert.equal(Counter.initialName, 'Counter');
  assert.equal(instance.shadow('local'), 'local');
  assert.deepEqual(client.errors, []);
});

test('vite emits importer batches, refreshes the startup asset, and recovers after errors', async (t) => {
  const root = await mkdtemp(join(tmpdir(), 'flax-dev-'));
  // Cover the fast native watcher on macOS as well as Linux.
  await writeFile(
    join(root, 'vite.config.mjs'),
    'export default { server: { watch: { useFsEvents: false, usePolling: false } } };',
  );
  const sourceDir = join(root, 'src');
  const dependency = join(sourceDir, 'dep.ts');
  await mkdir(sourceDir);
  await writeFile(dependency, 'export const value: number = 1;\n');
  await writeFile(
    join(sourceDir, 'main.ts'),
    `import { Text } from '@flax/flutter/widgets';
import { value } from './dep.ts';
export class Counter {
  count = value;
  static Text = Text;
  label() { return this.count; }
}
`,
  );

  const dev = await startFlaxDev({
    root,
    entry: 'src/main.ts',
    out: 'assets/app.js',
    port: 0,
  });
  const socket = new WebSocket(`ws://127.0.0.1:${dev.port}`, 'vite-hmr');
  t.after(async () => {
    socket.close();
    await dev.server.close();
    await rm(root, { recursive: true, force: true });
  });
  await waitOpen(socket);

  const asset = join(root, 'assets/app.js');
  const initial = await readFile(asset, 'utf8');
  assert.match(initial, /__flaxModules\.dev\.load/);
  assert.match(initial, /flax:runtime-error/);
  assert.match(initial, /"\/src\/main\.ts"/);
  assert.match(initial, /"\/src\/dep\.ts"/);
  assert.match(initial, /@flax\/flutter\/widgets/);

  const dependencyValue = (batch) => {
    const module = { exports: {} };
    const factory = batch.modules.find(
      (module) => module.id === '/src/dep.ts',
    )?.factory;
    if (!factory) return undefined;
    runInContext(`(${factory})(module, module.exports)`, createContext({ module }));
    return module.exports.value;
  };
  // A watcher may deliver an unchanged snapshot before the edited source batch.
  const update = waitCustom(
    socket,
    'flax:update',
    (batch) => dependencyValue(batch) === 2,
  );
  await writeFile(dependency, 'export const value: number = 2;\n');
  const batch = await update;
  assert.deepEqual(batch.inventory, ['/src/dep.ts', '/src/main.ts']);
  assert.deepEqual(
    batch.modules.map((module) => module.id),
    ['/src/dep.ts', '/src/main.ts'],
  );
  const main = batch.modules.find((module) => module.id === '/src/main.ts');
  assert.equal(
    main.dependencies['/@id/@flax/flutter/widgets'],
    '@flax/flutter/widgets',
  );
  assert.equal(main.dependencies['/src/dep.ts'], '/src/dep.ts');
  assert.match(main.factory, /dev\.class\("Counter", Counter/);
  const latest = await readFile(asset, 'utf8');
  assert.notEqual(latest, initial);

  const runtimeError = new Promise((resolve) => {
    const original = dev.server.config.logger.error;
    dev.server.config.logger.error = (message, ...args) => {
      original.call(dev.server.config.logger, message, ...args);
      if (String(message).includes('runtime rejected')) resolve(String(message));
    };
  });
  socket.send(
    JSON.stringify({
      type: 'custom',
      event: 'flax:runtime-error',
      data: { message: 'runtime rejected', restartRequired: true },
    }),
  );
  assert.match(await runtimeError, /\[flax\] runtime rejected/);

  const failed = waitCustom(socket, 'flax:error');
  await writeFile(dependency, 'export const value: number = ;\n');
  assert.match((await failed).message, /Unexpected|Expected|error/i);
  assert.equal(await readFile(asset, 'utf8'), latest);

  const recovered = waitCustom(
    socket,
    'flax:update',
    (batch) => dependencyValue(batch) === 3,
  );
  await writeFile(dependency, 'export const value: number = 3;\n');
  const recovery = await recovered;
  assert.deepEqual(recovery.inventory, ['/src/dep.ts', '/src/main.ts']);
  assert.notEqual(await readFile(asset, 'utf8'), latest);
});

test('new dependencies survive rejected batches, stay cached, and restart from current source', async (t) => {
  const root = await mkdtemp(join(tmpdir(), 'flax-dev-dependency-'));
  await mkdir(join(root, 'src'));
  const main = join(root, 'src/main.ts');
  const secret = join(root, 'src/secret.ts');
  await writeFile(main, "export const text = 'V1';\n");
  const dev = await startFlaxDev({
    root,
    entry: 'src/main.ts',
    out: 'assets/app.js',
    port: 0,
  });
  const socket = new WebSocket(`ws://127.0.0.1:${dev.port}`, 'vite-hmr');
  t.after(async () => {
    socket.close();
    await dev.server.close();
    await rm(root, { recursive: true, force: true });
  });
  await waitOpen(socket);
  const fresh = async () => {
    const context = createContext({});
    runInContext(
      `globalThis.__flaxModules = (${createFlaxModuleRegistry.toString()})();`,
      context,
    );
    runInContext(await readFile(dev.out, 'utf8'), context);
    return context;
  };
  const context = await fresh();
  const registry = context.__flaxModules;
  const text = () => registry.dev.require('/src/main.ts').text;
  await writeFile(
    secret,
    'export class Secret { #value = 1; value() { return this.#value; } }\n',
  );
  const source = (version) =>
    `import { Secret } from './secret.ts';\nexport { Secret };\nexport const text = '${version}:' + new Secret().value();\nif (globalThis.rejectAddition) throw new Error('reject new module');\n`;
  context.rejectAddition = true;
  let waiting = waitCustom(socket, 'flax:update');
  await writeFile(main, source('V2'));
  const waitingBatch = await waiting;
  assert.throws(() => registry.dev.apply(waitingBatch), /reject new module/);
  assert.equal(text(), 'V1');
  context.rejectAddition = false;
  waiting = waitCustom(socket, 'flax:update');
  await writeFile(main, source('V3'));
  registry.dev.apply(await waiting);
  assert.equal(text(), 'V3:1');
  const Secret = registry.dev.require('/src/main.ts').Secret;
  waiting = waitCustom(socket, 'flax:update');
  await writeFile(main, source('V4'));
  registry.dev.apply(await waiting);
  assert.equal(text(), 'V4:1');
  assert.equal(registry.dev.require('/src/main.ts').Secret, Secret);
  assert.equal((await fresh()).__flaxModules.dev.require('/src/main.ts').text, 'V4:1');
  waiting = waitCustom(socket, 'flax:update');
  await writeFile(
    secret,
    'export class Secret { #value = 2; value() { return this.#value; } }\n',
  );
  const privateBatch = await waiting;
  assert.throws(
    () => registry.dev.apply(privateBatch),
    (error) =>
      error.restartRequired === true &&
      /class initialization changed/.test(error.message),
  );
  assert.equal(text(), 'V4:1');
  assert.equal((await fresh()).__flaxModules.dev.require('/src/main.ts').text, 'V4:2');
});

test('generated client retries rejected dependency changes and sends acknowledged deltas', async (t) => {
  const root = await mkdtemp(join(tmpdir(), 'flax-dev-retry-'));
  await mkdir(join(root, 'src'));
  const main = join(root, 'src/main.ts');
  const dependency = join(root, 'src/dep.ts');
  await writeFile(dependency, 'export const value = 1;\n');
  await writeFile(
    main,
    "import { value } from './dep.ts';\nif (value === 2) throw new Error('temporary application error');\nexport const result = value;\n",
  );
  const dev = await startFlaxDev({
    root,
    entry: 'src/main.ts',
    out: 'assets/app.js',
    port: 0,
  });
  t.after(async () => {
    await dev.server.close();
    await rm(root, { recursive: true, force: true });
  });
  const { registry, batches, errors, socket } = await connectClient(dev, t);
  const result = () => registry.dev.require('/src/main.ts').result;
  const before = registry.dev.revisions;
  const sendFailure = socket.send.bind(socket);
  let rejected;
  socket.send = (data) => {
    if (JSON.parse(data).event === 'flax:runtime-error') rejected = data;
    else sendFailure(data);
  };
  let waiting = waitCustom(socket, 'flax:update');
  await writeFile(dependency, 'export const value = 2;\n');
  await waiting;
  assert.match(JSON.parse(rejected).data.message, /temporary application error/);
  assert.equal(result(), 1);
  assert.deepEqual(registry.dev.revisions, before);
  const observer = new WebSocket(`ws://127.0.0.1:${dev.port}`, 'vite-hmr');
  t.after(() => observer.close());
  await waitOpen(observer);
  waiting = waitCustom(observer, 'flax:update');
  await writeFile(
    main,
    "import { value } from './dep.ts';\nexport const result = value;\n",
  );
  await waiting;
  socket.send = sendFailure;
  waiting = waitServerEvent(dev.server, 'flax:applied');
  sendFailure(rejected);
  await waiting;
  assert.equal(result(), 2);
  assert.deepEqual(
    batches.at(-1).modules.map((module) => module.id),
    ['/src/dep.ts', '/src/main.ts'],
  );
  waiting = waitServerEvent(dev.server, 'flax:applied');
  await writeFile(
    main,
    "import { value } from './dep.ts';\nexport const result = value + 1;\n",
  );
  await waiting;
  assert.equal(result(), 3);
  assert.deepEqual(
    batches.at(-1).modules.map((module) => module.id),
    ['/src/main.ts'],
  );
  const restarted = await connectClient(dev, t);
  assert.equal(restarted.registry.dev.require('/src/main.ts').result, 3);
  assert.equal(restarted.batches.length, 0);
  const send = socket.send.bind(socket);
  let held;
  socket.send = (data) => {
    if (JSON.parse(data).event === 'flax:applied') held = data;
    else send(data);
  };
  let batch = waitCustom(socket, 'flax:update');
  const joinedBatch = waitCustom(restarted.socket, 'flax:update');
  await writeFile(
    main,
    "import { value } from './dep.ts';\nexport const result = value + 2;\n",
  );
  await batch;
  await joinedBatch;
  assert.equal(result(), 4);
  const pendingCount = batches.length;
  batch = waitCustom(restarted.socket, 'flax:update');
  await writeFile(
    main,
    "import { value } from './dep.ts';\nexport const result = value + 3;\n",
  );
  await batch;
  assert.equal(restarted.registry.dev.require('/src/main.ts').result, 5);
  assert.equal(batches.length, pendingCount);
  socket.send = send;
  batch = waitCustom(socket, 'flax:update');
  send(held);
  await batch;
  assert.equal(result(), 5);
  assert.deepEqual(
    batches.at(-1).modules.map((module) => module.id),
    ['/src/main.ts'],
  );
  assert.equal(errors.length, 1);
});

test('removed dependencies can be reintroduced with current assets and unchanged private classes', async (t) => {
  const root = await mkdtemp(join(tmpdir(), 'flax-dev-readd-'));
  await mkdir(join(root, 'src'));
  const main = join(root, 'src/main.ts');
  await writeFile(
    join(root, 'src/dep.ts'),
    'export class Secret { #value = 1; value() { return this.#value; } }\n',
  );
  await writeFile(
    main,
    "import { Secret } from './dep.ts';\nexport { Secret };\nexport const result = new Secret().value();\n",
  );
  const dev = await startFlaxDev({
    root,
    entry: 'src/main.ts',
    out: 'assets/app.js',
    port: 0,
  });
  t.after(async () => {
    await dev.server.close();
    await rm(root, { recursive: true, force: true });
  });
  const { registry, batches } = await connectClient(dev, t);
  const Secret = registry.dev.require('/src/main.ts').Secret;
  let waiting = waitServerEvent(dev.server, 'flax:runtime-error');
  await writeFile(main, 'export const result = 0;\n');
  const failure = await waiting;
  assert.equal(failure.restartRequired, true);
  assert.match(failure.message, /module removed/);
  waiting = waitServerEvent(dev.server, 'flax:applied');
  await writeFile(
    main,
    "import { Secret } from './dep.ts';\nexport { Secret };\nexport const result = new Secret().value() + 1;\n",
  );
  await waiting;
  assert.equal(registry.dev.require('/src/main.ts').result, 2);
  assert.equal(registry.dev.require('/src/main.ts').Secret, Secret);
  assert.deepEqual(
    batches.at(-1).modules.map((module) => module.id),
    ['/src/main.ts'],
  );
  const restarted = await connectClient(dev, t);
  assert.equal(restarted.registry.dev.require('/src/main.ts').result, 2);
});

test('dependency edits made during an importer syntax error are compiled on recovery', async (t) => {
  const root = await mkdtemp(join(tmpdir(), 'flax-dev-compile-retry-'));
  await mkdir(join(root, 'src'));
  const main = join(root, 'src/main.ts');
  const dependency = join(root, 'src/dep.ts');
  const valid = "import { value } from './dep.ts';\nexport const result = value;\n";
  await writeFile(dependency, 'export const value = 1;\n');
  await writeFile(main, valid);
  const dev = await startFlaxDev({
    root,
    entry: 'src/main.ts',
    out: 'assets/app.js',
    port: 0,
  });
  t.after(async () => {
    await dev.server.close();
    await rm(root, { recursive: true, force: true });
  });
  const { registry, socket } = await connectClient(dev, t);
  const initial = await readFile(dev.out, 'utf8');
  let waiting = waitCustom(socket, 'flax:error');
  await writeFile(main, "import { value } from './dep.ts';\nexport const result = ;\n");
  await waiting;
  waiting = waitCustom(socket, 'flax:error');
  await writeFile(dependency, 'export const value = 2;\n');
  await waiting;
  assert.equal(await readFile(dev.out, 'utf8'), initial);
  waiting = waitServerEvent(dev.server, 'flax:applied');
  await writeFile(main, valid);
  await waiting;
  assert.equal(registry.dev.require('/src/main.ts').result, 2);
  const restarted = await connectClient(dev, t);
  assert.equal(restarted.registry.dev.require('/src/main.ts').result, 2);
});

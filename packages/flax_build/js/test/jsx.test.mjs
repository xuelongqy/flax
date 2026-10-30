import assert from 'node:assert/strict';
import {
  mkdtemp,
  writeFile,
  readFile,
  rm,
  stat,
  mkdir,
  symlink,
  lstat,
} from 'node:fs/promises';
import { join, resolve, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { test } from 'node:test';
import { build } from 'esbuild';
import { createContext, runInContext } from 'node:vm';
import { FlaxCompiler } from '../src/compiler.mjs';
import { flaxEsbuildPlugin } from '../src/esbuild.mjs';
import { flaxVitePlugin } from '../src/vite.mjs';
import { prepareModuleApplication } from '../src/esm.mjs';
import { build as viteBuild } from 'vite';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { setTimeout as delay } from 'node:timers/promises';
import { TraceMap, originalPositionFor } from '@jridgewell/trace-mapping';
import { API } from 'typescript/unstable/sync';

const sdk = `
export interface Widget { readonly kind: 'component' | 'widget' }
export declare abstract class StatefulWidget implements Widget {readonly kind:'component';}
export declare abstract class StatelessWidget implements Widget { readonly kind:'component'; constructor(options?:{key?:string}); }
export declare function Text(data:string, options?:{key?:string}):Widget;
export declare namespace Text { const __flaxJsx: {props:{data:string;key?:string};slot:null;many:false}; }
export declare function Column(options?:{children?:readonly Widget[];spacing?:number}):Widget;
export declare namespace Column { const __flaxJsx: {props:{children?:readonly Widget[]|Widget;spacing?:number};slot:'children';many:true}; }
export declare function Scaffold(options?:{body?:Widget;title?:string}):Widget;
export declare namespace Scaffold { const __flaxJsx: {props:{body?:Widget;children?:Widget;title?:string};slot:'body';many:false}; }
`;
const panel = `import {StatelessWidget,type Widget} from '@flax/flutter/widgets';
export class Panel extends StatelessWidget {
 constructor(readonly title:string,readonly child:Widget,readonly count=0,readonly onChanged?:(value:number)=>void) {super();}
}
`;
async function fixture(t, source, extension = 'tsx', enabled = true) {
  const root = await mkdtemp(join(tmpdir(), 'flax-jsx-'));
  await writeFile(
    join(root, 'package.json'),
    JSON.stringify({
      name: 'jsx-fixture',
      version: '1.0.0',
      type: 'module',
      flax: { jsx: enabled },
    }),
  );
  await writeFile(
    join(root, 'tsconfig.json'),
    JSON.stringify({
      compilerOptions: {
        strict: true,
        target: 'ES2022',
        module: 'ESNext',
        moduleResolution: 'Bundler',
        jsx: 'preserve',
        allowJs: true,
        checkJs: true,
        noEmit: true,
        skipLibCheck: true,
        paths: { '@flax/flutter/widgets': ['./sdk.d.ts'] },
      },
      include: ['*.ts', '*.tsx', '*.jsx', '*.js'],
    }),
  );
  await writeFile(join(root, 'sdk.d.ts'), sdk);
  await writeFile(join(root, 'panel.ts'), panel);
  const file = join(root, 'main.' + extension);
  await writeFile(file, source);
  const compiler = new FlaxCompiler({ root });
  t.after(async () => {
    compiler.close();
    await rm(root, { recursive: true, force: true });
  });
  return { root, file, compiler, transform: () => compiler.transform(source, file) };
}
const source = `import {Text,Column,Scaffold} from '@flax/flutter/widgets';
import {Panel as Card} from './panel.js';
export const trace:string[]=[];
function mark<T>(label:string,value:T):T{trace.push(label);return value;}
export const result=<Scaffold title="screen"><Column spacing={8}>
<Card count={mark('count',3)} title={mark('title','panel')} onChanged={value=>trace.push(value.toFixed(1))}>
<Text data={mark('child','content')}/></Card><Text data="other"/>
</Column></Scaffold>;
export const defaults=<Card title="default"><Text data="child"/></Card>;
export const explicitChildren=<Card title="explicit" children={<Text data="alias"/>}/>;
export const arrow=()=> <Text data="arrow"/>;`;

test('TSX lowers to direct original calls with defaults, callbacks, aliases, lists and body', async (t) => {
  const f = await fixture(t, source);
  const result = f.transform();
  assert.match(result.code, /new Card\(/);
  assert.doesNotMatch(result.code, /jsx-runtime|createElement|function jsx|<Card/);
  assert.ok(result.map.sourcesContent.includes(source));
  const output = await build({
    stdin: { contents: result.code, resolveDir: f.root, loader: 'ts' },
    bundle: true,
    write: false,
    format: 'iife',
    globalName: 'app',
    plugins: [
      {
        name: 'sdk',
        setup(b) {
          b.onResolve({ filter: /^@flax\/flutter\/widgets$/ }, () => ({
            path: 'sdk',
            namespace: 'stub',
          }));
          b.onLoad({ filter: /.*/, namespace: 'stub' }, () => ({
            contents: `export class StatelessWidget {kind='component'}; export const Text=(data)=>({kind:'widget',data});export const Column=(options)=>options;export const Scaffold=(options)=>options;`,
          }));
        },
      },
    ],
  });
  const context = createContext({});
  runInContext(output.outputFiles[0].text, context);
  assert.deepEqual(Array.from(context.app.trace), ['count', 'title', 'child']);
  const card = context.app.result.body.children[0];
  assert.equal(card.title, 'panel');
  assert.equal(card.count, 3);
  card.onChanged(4);
  assert.equal(context.app.trace.at(-1), '4.0');
  assert.equal(context.app.arrow().data, 'arrow');
  assert.equal(context.app.defaults.count, 0);
  assert.equal(context.app.explicitChildren.child.data, 'alias');
});

test('JSX preserves JSDoc and contextual callback checking', async (t) => {
  const f = await fixture(
    t,
    `import {Text} from '@flax/flutter/widgets';import {Panel} from './panel.js';
/** @type {number[]} */ const values=[];
export const result=<Panel title="js" onChanged={value=>values.push(value.toFixed(0).length)}><Text data="child"/></Panel>;`,
    'jsx',
  );
  const result = f.transform();
  assert.match(result.code, /@type/);
  assert.match(result.code, /new Panel/);
});

test('lowered contextual types survive component names matching TypeScript utilities', async (t) => {
  const f = await fixture(
    t,
    `import {Text,Column,StatelessWidget} from '@flax/flutter/widgets';
    export class Parameters extends StatelessWidget {constructor(readonly 标题:string){super();}}
    export class ConstructorParameters extends StatelessWidget {}
    export class NonNullable extends StatelessWidget {}
    export const view=<Column spacing={1}><Parameters 标题="x"/><Text data="y"/></Column>;`,
  );
  await writeFile(f.file, f.transform().code);
  const api = new API({ cwd: f.root });
  try {
    const config = join(f.root, 'tsconfig.json');
    const project = api.updateSnapshot({ openProjects: [config] }).getProject(config);
    assert.deepEqual(project.program.getSemanticDiagnostics(f.file), []);
  } finally {
    api.close();
  }
});

test('disabled JSX rejects actual syntax and leaves ordinary TSX and JS untouched', async (t) => {
  const f = await fixture(t, 'export const value:number=1;', 'tsx', false);
  assert.match(f.transform().code, /value:number/);
  assert.throws(
    () => f.compiler.transform('export const value=<Text data="x"/>;', f.file),
    /JSX is disabled/,
  );
  const plain = '/** @type {number} */ const value=1;';
  assert.deepEqual(f.compiler.transform(plain, join(f.root, 'plain.js')), {
    code: plain,
    dependencies: [],
  });
});

test('type errors and invalid content fail at the original JSX source', async (t) => {
  const f = await fixture(t, source.replace("mark('count',3)", "'bad'"));
  assert.throws(f.transform, /main.tsx:\d+:\d+: TS2322/);
  const bad = source.replace('<Text data="other"/>', 'false');
  await writeFile(f.file, bad);
  f.compiler.invalidate([f.file]);
  assert.throws(() => f.compiler.transform(bad, f.file), /Text Widget|implicit|TS/);
});

test('list slots reject expressions mixing individual Widgets and collections', async (t) => {
  for (const content of ['<Column children={value}/>', '<Column>{value}</Column>']) {
    const source = `import {Column,Text,type Widget} from '@flax/flutter/widgets';
    declare const value: Widget | Widget[];
    export const view = ${content};`;
    const f = await fixture(t, source);
    assert.throws(f.transform, /Widget or a collection|TS/);
  }
});

test('declarations follow saved constructors and retain the last valid output after syntax failure', async (t) => {
  const f = await fixture(t, source);
  f.compiler.prepareJsx();
  const generated = join(f.root, 'flax-jsx.generated.d.ts');
  const initial = await readFile(generated, 'utf8');
  const time = (await stat(generated)).mtimeMs;
  f.compiler.jsx.invalidate();
  f.compiler.prepareJsx();
  assert.equal((await stat(generated)).mtimeMs, time);
  await writeFile(join(f.root, 'panel.ts'), panel.replaceAll('title', 'heading'));
  f.compiler.invalidate([join(f.root, 'panel.ts')]);
  f.compiler.prepareJsx();
  assert.match(await readFile(generated, 'utf8'), /"heading"/);
  assert.throws(f.transform, /title|heading/);
  const valid = await readFile(generated, 'utf8');
  assert.notEqual(valid, initial);
  await writeFile(join(f.root, 'panel.ts'), 'export class Panel {');
  f.compiler.invalidate([join(f.root, 'panel.ts')]);
  assert.throws(() => f.compiler.prepareJsx());
  assert.equal(await readFile(generated, 'utf8'), valid);
});

test('JSX invalidation follows type inputs, including imports discovered in a failed snapshot', async (t) => {
  const f = await fixture(
    t,
    `import {Panel} from './panel.js'; import {Text} from '@flax/flutter/widgets';
    export const view = <Panel title="title"><Text data="child"/></Panel>;`,
    'jsx',
  );
  f.transform();
  const input = join(f.root, 'sdk.d.ts');
  assert.ok(f.compiler.invalidate([input]).includes(f.file));
  const added = join(f.root, 'added.d.ts');
  await writeFile(added, 'export type Title = ;');
  await writeFile(
    join(f.root, 'panel.ts'),
    panel.replace('title:string', 'title:import("./added.js").Title'),
  );
  f.compiler.jsx.invalidate();
  assert.throws(() => f.compiler.prepareJsx(), /expected/);
  assert.ok(f.compiler.invalidate([added]).includes(f.file));
  await writeFile(added, 'export type Title = string;');
  assert.match(f.transform().code, /new Panel/);
});

test('generation never replaces or deletes a user declaration', async (t) => {
  const f = await fixture(t, source);
  const path = join(f.root, 'flax-jsx.generated.d.ts');
  await writeFile(path, '// user-owned\n');
  assert.throws(() => f.compiler.prepareJsx(), /unowned/);
  await rm(path);
  await symlink('missing.d.ts', path);
  assert.throws(() => f.compiler.prepareJsx(), /unowned/);
  assert.equal((await lstat(path)).isSymbolicLink(), true);
  await rm(path);
  await writeFile(path, '// user-owned\n');
  f.compiler.close();
  await writeFile(join(f.root, 'package.json'), '{}');
  const disabled = new FlaxCompiler({ root: f.root });
  disabled.prepareJsx();
  disabled.close();
  assert.equal(await readFile(path, 'utf8'), '// user-owned\n');
});

const runtime = `export class StatelessWidget {kind='component'};
export const Text=data=>({kind:'widget',data});export const Column=options=>options;export const Scaffold=options=>options;`;

test('esbuild and Vite resolve JSX through emitted JS imports without a JSX runtime', async (t) => {
  const f = await fixture(
    t,
    `import {Text} from '@flax/flutter/widgets';import {child} from './child.js';export const result=<Text data="A &amp; B&#10;C"/>;export {child};`,
  );
  await writeFile(
    join(f.root, 'child.jsx'),
    `import {Text} from '@flax/flutter/widgets'; export const child=<Text data="JSX"/>;`,
  );
  const stub = {
    name: 'sdk',
    setup(builder) {
      builder.onResolve({ filter: /^@flax\/flutter\/widgets$/ }, () => ({
        path: 'sdk',
        namespace: 'stub',
      }));
      builder.onLoad({ filter: /.*/, namespace: 'stub' }, () => ({
        contents: runtime,
      }));
    },
  };
  const output = await build({
    absWorkingDir: f.root,
    entryPoints: [f.file],
    bundle: true,
    write: false,
    format: 'iife',
    globalName: 'app',
    plugins: [stub, flaxEsbuildPlugin(null, { nativeAssets: false })],
  });
  const context = createContext({});
  runInContext(output.outputFiles[0].text, context);
  assert.equal(context.app.result.data, 'A & B\nC');
  assert.equal(context.app.child.data, 'JSX');
  await writeFile(join(f.root, 'sdk-runtime.mjs'), runtime);
  const [bundle] = await viteBuild({
    root: f.root,
    configFile: false,
    logLevel: 'silent',
    resolve: { alias: { '@flax/flutter/widgets': join(f.root, 'sdk-runtime.mjs') } },
    plugins: [flaxVitePlugin({ nativeAssets: false })],
    build: {
      write: false,
      minify: false,
      lib: { entry: f.file, formats: ['iife'], name: 'app' },
    },
  });
  const browser = createContext({});
  runInContext(bundle.output[0].code, browser);
  assert.equal(browser.app.result.data, 'A & B\nC');
  assert.equal(browser.app.child.data, 'JSX');
  assert.doesNotMatch(bundle.output[0].code, /jsx-runtime|createElement/);
});

test('native ESM rewrites explicit JSX specifiers and rejects colliding emitted modules', async (t) => {
  const f = await fixture(t, 'export const unused=1;');
  await mkdir(join(f.root, 'src'));
  await writeFile(
    join(f.root, 'src/main.jsx'),
    `import {view} from './view.tsx';export {view};`,
  );
  await writeFile(
    join(f.root, 'src/view.tsx'),
    `import {Text} from '@flax/flutter/widgets';export const view=<Text data="native"/>;`,
  );
  const config = JSON.parse(await readFile(join(f.root, 'tsconfig.json'), 'utf8'));
  config.include.push('src/**/*');
  await writeFile(join(f.root, 'tsconfig.json'), JSON.stringify(config));
  const application = await prepareModuleApplication({
    projectDirectory: f.root,
    modulesDirectory: 'src',
    outputDirectory: 'out',
  });
  assert.match(
    await readFile(join(application.directory, 'main.js'), 'utf8'),
    /\.\/view\.js/,
  );
  const view = await readFile(join(application.directory, 'view.js'), 'utf8');
  assert.match(view, /Text\(/);
  assert.doesNotMatch(view, /createElement|jsx-runtime/);
  await writeFile(join(f.root, 'src/view.js'), 'export const view=1;');
  await assert.rejects(
    prepareModuleApplication({
      projectDirectory: f.root,
      modulesDirectory: 'src',
      outputDirectory: 'out',
    }),
    /Conflicting module output/,
  );
});

test('source maps retain nested attribute locations after direct-call lowering', async (t) => {
  const f = await fixture(t, source);
  const result = f.transform();
  const token = "mark('child'";
  const before = result.code.slice(0, result.code.indexOf(token));
  const line = before.split('\n').length;
  const column = before.length - before.lastIndexOf('\n') - 1;
  const original = originalPositionFor(new TraceMap(result.map), { line, column });
  assert.equal(
    original.line,
    source.slice(0, source.indexOf(token)).split('\n').length,
  );
  assert.equal(resolve(dirname(f.file), original.source), f.file);
});

test('types-only watcher follows constructor rename, addition, deletion and syntax recovery', async (t) => {
  const f = await fixture(t, source);
  const child = spawn(
    process.execPath,
    [fileURLToPath(new URL('../bin/flax-jsx.mjs', import.meta.url)), '--watch'],
    { cwd: f.root, env: process.env, stdio: ['ignore', 'pipe', 'pipe'] },
  );
  let stdout = '',
    stderr = '';
  child.stdout.on('data', (data) => (stdout += data));
  child.stderr.on('data', (data) => (stderr += data));
  t.after(() => child.kill('SIGTERM'));
  const generated = join(f.root, 'flax-jsx.generated.d.ts');
  async function until(accepts) {
    for (let i = 0; i < 100; i++) {
      if (await accepts()) return;
      await delay(40);
    }
    throw new Error(`watch timeout: ${stdout}\n${stderr}`);
  }
  await until(() => stdout.includes('Generated'));
  await writeFile(join(f.root, 'panel.ts'), panel.replaceAll('title', 'heading'));
  await until(async () => (await readFile(generated, 'utf8')).includes('"heading"'));
  const valid = await readFile(generated, 'utf8');
  await writeFile(join(f.root, 'panel.ts'), 'export class Panel {');
  await until(() => stderr.includes('expected'));
  assert.equal(await readFile(generated, 'utf8'), valid);
  await writeFile(join(f.root, 'panel.ts'), panel);
  await until(async () => (await readFile(generated, 'utf8')).includes('"title"'));
  await writeFile(join(f.root, 'added.ts'), panel.replaceAll('Panel', 'Added'));
  await until(async () =>
    (await readFile(generated, 'utf8')).includes('interface Added'),
  );
  await rm(join(f.root, 'added.ts'));
  await until(
    async () => !(await readFile(generated, 'utf8')).includes('interface Added'),
  );
});

test('types-only watcher recovers from external type errors and follows inherited configs', async (t) => {
  const f = await fixture(t, source);
  const shared = await mkdtemp(join(tmpdir(), 'flax-jsx-shared-'));
  t.after(() => rm(shared, { recursive: true, force: true }));
  const types = join(shared, 'label.d.ts');
  const config = join(shared, 'base.json');
  await writeFile(types, 'export type Label = ;');
  await writeFile(config, '{}');
  const tsconfig = JSON.parse(await readFile(join(f.root, 'tsconfig.json'), 'utf8'));
  tsconfig.extends = config;
  await writeFile(join(f.root, 'tsconfig.json'), JSON.stringify(tsconfig));
  await writeFile(
    join(f.root, 'panel.ts'),
    `import type {Label} from ${JSON.stringify(types)};\n` +
      panel.replace('title:string', 'title:Label'),
  );
  const child = spawn(
    process.execPath,
    [fileURLToPath(new URL('../bin/flax-jsx.mjs', import.meta.url)), '--watch'],
    { cwd: f.root, env: process.env, stdio: ['ignore', 'pipe', 'pipe'] },
  );
  let stdout = '',
    stderr = '';
  child.stdout.on('data', (data) => (stdout += data));
  child.stderr.on('data', (data) => (stderr += data));
  t.after(() => child.kill('SIGTERM'));
  async function until(accepts) {
    for (let i = 0; i < 100; i++) {
      if (accepts()) return;
      await delay(40);
    }
    throw new Error(`watch timeout: ${stdout}\n${stderr}`);
  }
  await until(() => stderr.includes('expected'));
  await writeFile(types, 'export type Label = string;');
  await until(() => stdout.includes('Generated'));
  stdout = '';
  await writeFile(config, '{"compilerOptions":{"strict":true}}');
  await until(() => stdout.includes('Generated'));
});

test('disabled cleanup removes owned types and unsupported syntax fails explicitly', async (t) => {
  const f = await fixture(t, source);
  const variants = [
    source.replace('<Text data="other"/>', '<Text {...{data:"x"}}/>'),
    source.replace('<Text data="other"/>', '<> <Text data="x"/> </>'),
    source.replace('<Text data="other"/>', '<Text<string> data="x"/>'),
    source.replace('<Text data="other"/>', '<Text>literal</Text>'),
    source.replace('<Text data="other"/>', '<Text unknown="x"/>'),
    source.replace(
      '<Text data="other"/>',
      '<Card title="multiple"><Text data="a"/><Text data="b"/></Card>',
    ),
  ];
  for (const code of variants) {
    await writeFile(f.file, code);
    f.compiler.invalidate([f.file]);
    assert.throws(
      () => f.compiler.transform(code, f.file),
      /TS\d+|unsupported|Fragments|multiple Widgets|Unknown attribute/,
    );
  }
  await writeFile(f.file, source);
  f.compiler.invalidate([f.file]);
  f.compiler.prepareJsx();
  f.compiler.close();
  await writeFile(join(f.root, 'package.json'), '{}');
  const disabled = new FlaxCompiler({ root: f.root });
  disabled.prepareJsx();
  disabled.close();
  await assert.rejects(readFile(join(f.root, 'flax-jsx.generated.d.ts')), {
    code: 'ENOENT',
  });
});

test('JSDoc optional parameters and dictionary-valued options retain their constructor contract', async (t) => {
  const f = await fixture(
    t,
    `import {Optional} from './optional.js';import {Dictionary} from './dictionary.js';export const optional=<Optional/>;export const dictionary=<Dictionary options={{value:1}}/>;`,
  );
  await writeFile(
    join(f.root, 'optional.js'),
    `import {StatelessWidget} from '@flax/flutter/widgets';
export class Optional extends StatelessWidget {
/** @param {string} [title] */
constructor(title){super();this.title=title;}
}`,
  );
  await writeFile(
    join(f.root, 'dictionary.ts'),
    `import {StatelessWidget} from '@flax/flutter/widgets';export class Dictionary extends StatelessWidget{constructor(readonly options:Record<string,number>){super();}}`,
  );
  const result = f.transform();
  assert.match(result.code, /new Optional\(\)/);
  assert.match(result.code, /new Dictionary\(/);
  assert.match(
    await readFile(join(f.root, 'flax-jsx.generated.d.ts'), 'utf8'),
    /"options": globalThis\.ConstructorParameters/,
  );
});

test('standard TypeScript completion exposes app and SDK attributes before a successful JSX build', async (t) => {
  const source = `import {Panel} from './panel.js';import {Text} from '@flax/flutter/widgets';export const app=<Panel />;export const sdk=<Text />;`;
  const f = await fixture(t, source);
  f.compiler.prepareJsx();
  const api = new API({ cwd: f.root });
  try {
    const config = join(f.root, 'tsconfig.json');
    const project = api.updateSnapshot({ openProjects: [config] }).getProject(config);
    for (const [tag, expected] of [
      ['Panel', ['title', 'count', 'onChanged']],
      ['Text', ['data', 'key']],
    ]) {
      const names =
        project.checker
          .getCompletionsAtPosition(f.file, source.indexOf(`<${tag} `) + tag.length + 2)
          ?.entries.map((entry) => entry.name.replace(/\?$/, '')) ?? [];
      for (const name of expected)
        assert.ok(names.includes(name), JSON.stringify(names));
    }
  } finally {
    api.close();
  }
});

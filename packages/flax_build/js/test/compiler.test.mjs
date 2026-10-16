import assert from 'node:assert/strict';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import { context } from 'esbuild';
import { FlaxCompiler } from '../src/compiler.mjs';
import { flaxEsbuildPlugin } from '../src/esbuild.mjs';

const declarations = `
export declare const flaxDartTypeCases: unique symbol;
export declare const flaxDartMethodCases: unique symbol;
export declare const flaxDartTypeKey: unique symbol;
export interface Bag<T> { readonly value: T; }
export declare const Bag: {
  <T = unknown>(items: T[]): Bag<T>;
  named<T = unknown>(options: { items: T[] }): Bag<T>;
  readonly [flaxDartTypeCases]: unknown;
  readonly [flaxDartTypeKey]: unknown;
  $type(...types: unknown[]): any;
};
export declare abstract class Processor<T = unknown> {
  static readonly [flaxDartTypeCases]: unknown;
  static readonly [flaxDartTypeKey]: unknown;
  constructor(value: T);
  transform(value: T): T;
  readonly [flaxDartMethodCases]?: { wrap: unknown; later: unknown };
  wrap<R>(value: R): R[];
  later<R>(value: R): Promise<R>;
}
export declare const echo: (<T>(value: T) => T) & {
  readonly [flaxDartTypeCases]?: unknown;
};
`;

async function fixture(t, source, extra = {}) {
  const root = await mkdtemp(join(tmpdir(), 'flax-compiler-'));
  const file = join(root, 'main.ts');
  await writeFile(
    join(root, 'tsconfig.json'),
    JSON.stringify({
      compilerOptions: {
        strict: true,
        target: 'ES2022',
        module: 'ESNext',
        moduleResolution: 'Bundler',
        noEmit: true,
      },
      include: ['*.ts'],
    }),
  );
  await writeFile(join(root, 'bindings.d.ts'), declarations);
  for (const [name, value] of Object.entries(extra))
    await writeFile(join(root, name), value);
  await writeFile(file, source);
  const compiler = new FlaxCompiler({ root });
  t.after(async () => {
    compiler.close();
    await rm(root, { recursive: true, force: true });
  });
  return { root, file, compiler, transform: () => compiler.transform(source, file) };
}

test('closed class, named constructor, instantiation expression and nested tokens share selectors', async (t) => {
  const f = await fixture(
    t,
    `
    import { Bag as ImportedBag, Processor } from './bindings.js';
    import type { Labels } from './types.js';
    const bag = ImportedBag<string>([]);
    const named = ImportedBag.named<string>({ items: [] });
    const nested = ImportedBag<Labels>([]);
    const Strings = ImportedBag<string>;
    class Child extends Processor<string> { override transform(v: string) { return super.transform(v); } }
  `,
    { 'types.ts': 'export type Labels = Map<string, string[]>;' },
  );
  const result = f.transform();
  assert.match(result.code, /ImportedBag\.\$type\(__flaxTypes.dartTypes.string\)/);
  assert.match(result.code, /\["named"\]/);
  assert.match(
    result.code,
    /dartTypes.map\(__flaxTypes.dartTypes.string, __flaxTypes.dartTypes.list\(__flaxTypes.dartTypes.string\)\)/,
  );
  assert.match(result.code, /const Strings = \(ImportedBag.\$type/);
  assert.match(result.code, /extends \(Processor.\$type/);
  assert.match(result.code, /super.transform\(v\)/);
  assert.ok(result.dependencies.includes(join(f.root, 'types.ts')));
});

test('generated functions and methods lower without changing ordinary or shadowed generics', async (t) => {
  const f = await fixture(
    t,
    `
    import { echo, Processor } from './bindings.js';
    declare function receiver(): Processor;
    const a = echo<string>('a');
    const b = receiver().wrap<string>('b');
    function ordinary<T>(value: T) { return value; }
    ordinary<string>('c');
    function scope() { function echo<T>(v: T) { return v; } return echo<string>('d'); }
  `,
  );
  const { code } = f.transform();
  assert.match(code, /dartType\(echo, __flaxTypes.dartTypes.string\)/);
  assert.match(code, /dartType\(receiver\(\), "wrap", __flaxTypes.dartTypes.string\)/);
  assert.equal(code.match(/receiver\(\), "wrap"/g)?.length, 1);
  assert.match(code, /ordinary<string>\('c'\)/);
  assert.match(code, /return echo<string>\('d'\)/);
});

test('inference reuses resolved signatures and leaves empty input defaults alone', async (t) => {
  const f = await fixture(
    t,
    `
    import { Bag, echo, Processor } from './bindings.js';
    declare const p: Processor;
    const a = Bag(['a']);
    const b = Bag([]);
    const c = echo('c');
    const d = p.wrap('d');
    const e: Bag<string> = Bag([]);
  `,
  );
  const { code } = f.transform();
  assert.match(code, /Bag.\$type\(__flaxTypes.dartTypes.string\)\)\(\['a'\]\)/);
  assert.match(code, /const b = Bag\(\[\]\)/);
  assert.match(code, /dartType\(echo, __flaxTypes.dartTypes.string\)/);
  assert.match(code, /dartType\(p, "wrap", __flaxTypes.dartTypes.string\)/);
  assert.match(
    code,
    /const e: Bag<string> = \(Bag.\$type\(__flaxTypes.dartTypes.string\)\)\(\[\]\)/,
  );
});

test('native type-only imports become public runtime imports and keep nested class types', async (t) => {
  const f = await fixture(
    t,
    `
    import { Bag } from './bindings.js';
    import type { Bag as NativeBag } from './bindings.js';
    const a = Bag<NativeBag<string>>([]);
    type Nested<T> = NativeBag<Map<string, T>>;
    const b = Bag<Nested<number>>([]);
  `,
  );
  const { code } = f.transform();
  assert.match(code, /import \* as __flaxBinding from "\.\/bindings.js"/);
  assert.match(code, /__flaxBinding\["Bag"\].\$type\(__flaxTypes.dartTypes.string\)/);
  assert.match(
    code,
    /__flaxBinding\["Bag"\].\$type\(__flaxTypes.dartTypes.map\(__flaxTypes.dartTypes.string, __flaxTypes.dartTypes.num\)\)/,
  );
});

test('generic override super captures the native invocation independently across await', async (t) => {
  const f = await fixture(
    t,
    `
    import { Processor } from './bindings.js';
    class Child extends Processor<string> {
      override wrap<R>(value: R): R[] { return super['wrap'](value); }
      override async later<R>(value: R): Promise<R> {
        await Promise.resolve();
        return super.later<R>(value);
      }
    }
  `,
  );
  const { code } = f.transform();
  assert.match(code, /wrap<R>\(value: R, __flaxCall\)/);
  assert.match(
    code,
    /invokeDartSuper\(this, super\['wrap'\], "wrap", \[value\], null, __flaxCall\)/,
  );
  assert.match(code, /later<R>\(value: R, __flaxCall_\)/);
  assert.doesNotMatch(code, /dartType\(this/);
});

test('unresolved runtime types fail with a location instead of silently erasing them', async (t) => {
  const f = await fixture(
    t,
    `
    import { Bag } from './bindings.js';
    function make<T>() { return Bag<T>([]); }
  `,
  );
  assert.throws(f.transform, /main.ts:3:.*no runtime Dart type/);
});

test('nullable aliases compose and arbitrary structural types fail explicitly', async (t) => {
  const f = await fixture(
    t,
    `
    import { Bag } from './bindings.js';
    type Maybe = string | null;
    const a = Bag<Maybe>([]);
  `,
  );
  assert.match(
    f.transform().code,
    /dartTypes.nullable\(__flaxTypes.dartTypes.string\)/,
  );
  const bad = `import {Bag} from './bindings.js'; Bag<{label:string}>([]);`;
  await writeFile(f.file, bad);
  f.compiler.invalidate([f.file]);
  assert.throws(() => f.compiler.transform(bad, f.file), /No Dart type token/);
});

test('type-only edits refresh the compiler and esbuild rebuilds with unchanged caller source', async (t) => {
  const source = `import {Bag} from './bindings.js'; import {Value} from './types.js'; Bag<Value>([]);`;
  const f = await fixture(t, source, { 'types.ts': 'export type Value = string;' });
  const builder = await context({
    absWorkingDir: f.root,
    entryPoints: [f.file],
    outdir: 'dist',
    write: false,
    plugins: [flaxEsbuildPlugin()],
  });
  t.after(() => builder.dispose());
  assert.match(f.transform().code, /dartTypes.string/);
  assert.match((await builder.rebuild()).outputFiles[0].text, /dartTypes.string/);
  const dependency = join(f.root, 'types.ts');
  await writeFile(dependency, 'export type Value = number;');
  assert.deepEqual(f.compiler.invalidate([dependency]), [f.file]);
  assert.match(f.transform().code, /dartTypes.num/);
  assert.match((await builder.rebuild()).outputFiles[0].text, /dartTypes.num/);
});

test('JavaScript and plain TypeScript use the ordinary build path', async (t) => {
  const f = await fixture(t, 'function echo<T>(v:T) { return v; } echo<string>("x");');
  assert.equal(
    f.transform().code,
    await (await import('node:fs/promises')).readFile(f.file, 'utf8'),
  );
  assert.deepEqual(f.compiler.transform('const value = 1;', join(f.root, 'plain.js')), {
    code: 'const value = 1;',
    dependencies: [],
  });
});

test('shared collection input aliases, FutureOr and Widget reuse runtime type builders', async (t) => {
  const bindings = fileURLToPath(
    new URL('../../../flax/js/src/runtime/bindings.js', import.meta.url),
  );
  const f = await fixture(
    t,
    `
    import { Bag } from './bindings.js';
    import type {DartListInput, DartMapInput, Widget} from ${JSON.stringify(bindings)};
    Bag<Promise<DartListInput<number>>>([]);
    Bag<DartMapInput<string, number>>([]);
    Bag<string | Promise<string> | null>([]);
    Bag<Widget>([]);
  `,
  );
  const { code, map } = f.transform();
  assert.match(
    code,
    /dartTypes.future\(__flaxTypes.dartTypes.list\(__flaxTypes.dartTypes.num\)\)/,
  );
  assert.match(
    code,
    /dartTypes.map\(__flaxTypes.dartTypes.string, __flaxTypes.dartTypes.num\)/,
  );
  assert.match(
    code,
    /dartTypes.nullable\(__flaxTypes.dartTypes.futureOr\(__flaxTypes.dartTypes.string\)\)/,
  );
  assert.match(code, /dartTypes.widget/);
  assert.deepEqual(map.sources, [f.file]);
  assert.match(map.sourcesContent[0], /Bag<Widget>/);
  assert.ok(map.mappings.length > 0);
});

test('JS-only generic subclasses are not mistaken for registered Dart templates', async (t) => {
  const f = await fixture(
    t,
    `
    import {Processor} from './bindings.js';
    class Child<T> extends Processor<string> { extra?: T; }
    const value = new Child<number>('value');
  `,
  );
  const { code } = f.transform();
  assert.match(code, /new Child<number>/);
  assert.doesNotMatch(code, /Child.\$type/);
});

test('extension members prepend owner arguments through the shared method selector', async (t) => {
  const f = await fixture(
    t,
    `
    import {ListView} from './view.js';
    const view = ListView<string>(['text']);
    const value = view.first;
    const result = view.convert<number>(v => v.length);
    const called = view.callback("callback");
    const generic = view.genericCallback<number>(3);
  `,
    {
      'view.d.ts': `
    declare const flaxDartExtensionTypes: unique symbol;
    declare const flaxDartMethodCases: unique symbol;
    declare const flaxDartTypeCases: unique symbol;
    export interface ListView<T> {
      readonly [flaxDartExtensionTypes]?: readonly [T];
      readonly [flaxDartMethodCases]?: {first:unknown;convert:unknown;callback:unknown;genericCallback:unknown};
      readonly first: T;
      readonly callback:(value:T)=>T;
      readonly genericCallback: (<R>(value:R)=>T) & {readonly [flaxDartTypeCases]?:unknown};
      convert<R>(f:(v:T)=>R): R;
    }
    export declare function ListView<T>(values:T[]):ListView<T>;
  `,
    },
  );
  const { code } = f.transform();
  assert.match(code, /dartType\(view, "first", __flaxTypes.dartTypes.string\)\(\)/);
  assert.match(
    code,
    /dartType\(view, "callback", __flaxTypes.dartTypes.string\)\(\)\("callback"\)/,
  );
  assert.match(
    code,
    /dartType\(view, "convert", __flaxTypes.dartTypes.string, __flaxTypes.dartTypes.num\)/,
  );
  assert.match(
    code,
    /dartType\(__flaxTypes.dartType\(view, "genericCallback", __flaxTypes.dartTypes.string\)\(\), __flaxTypes.dartTypes.num\)/,
  );
});

test('optional generic calls fail before type erasure can lose their selected type', async (t) => {
  const f = await fixture(
    t,
    `import {Processor} from './bindings.js'; declare const p:Processor|null; p?.wrap<string>('a');`,
  );
  assert.throws(f.transform, /optional generic call/);
});

test('inference retains whole nullable types and skips invalid call-site evidence', async (t) => {
  const f = await fixture(
    t,
    `import {Bag} from './bindings.js';
    const nullable = Bag(['a',null]);
    const invalid = Bag(['a',3]);
  `,
  );
  const { code } = f.transform();
  assert.match(code, /dartTypes.nullable\(__flaxTypes.dartTypes.string\)/);
  assert.match(code, /const invalid = Bag\(\['a',3\]\)/);
});

test('a runtime dependency edit refreshes inferred types even when the caller source is unchanged', async (t) => {
  const f = await fixture(
    t,
    `import {echo} from './bindings.js'; import {value} from './value.js'; echo(value());`,
    { 'value.ts': `export function value(){return 'a';}` },
  );
  assert.match(f.transform().code, /dartTypes.string/);
  const dependency = join(f.root, 'value.ts');
  await writeFile(dependency, 'export function value(){return 3;}');
  f.compiler.invalidate([dependency]);
  assert.match(f.transform().code, /dartTypes.num/);
});

test('invalid typed calls and nested unknown inputs retain their legal default path', async (t) => {
  const f = await fixture(
    t,
    `import {echo,Bag} from './bindings.js';
    const invalid = echo('a',3);
    declare const value: Promise<unknown>;
    const nested = Bag([value]);
  `,
  );
  const { code } = f.transform();
  assert.match(code, /const invalid = echo\('a',3\)/);
  assert.match(code, /const nested = Bag\(\[value\]\)/);
});

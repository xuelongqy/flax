import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readFile, writeFile, rm, access } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createContext, runInContext } from 'node:vm';
import { build } from 'esbuild';
import { format, resolveConfig } from 'prettier';
import { prepareJsx, openProject } from './prototype.mjs';
import { FlaxCompiler } from '../../packages/flax_build/js/src/compiler.mjs';

const directory = dirname(fileURLToPath(import.meta.url));
const repository = resolve(directory, '../..');
const { version: typescript } = JSON.parse(
  await readFile(resolve(repository, 'node_modules/typescript/package.json'), 'utf8'),
);
const scratch = await mkdtemp(join(repository, '.local/tmp/jsx-probe-'));
const jsxEntry = 'views/app.jsx';
const checks = [];
let experiment;
async function writeReceipt(receipt) {
  const file = join(directory, 'results.json');
  await writeFile(
    file,
    await format(JSON.stringify(receipt), {
      ...(await resolveConfig(file)),
      parser: 'json',
    }),
  );
}
const publicTypes = (path) => resolve(repository, path);
const paths = {
  '@flax/flutter/widgets': [publicTypes('packages/flax_flutter/js/types/widgets.d.ts')],
  '@flax/flutter/*': [
    publicTypes('packages/flax_flutter/js/types/generated/libraries/*'),
  ],
  '@flax/core': [publicTypes('packages/flax/js-types/types/runtime/index.d.ts')],
  '@flax/core/bindings': [
    publicTypes('packages/flax/js-types/types/runtime/bindings.d.ts'),
  ],
  '@flax/core/navigation': [
    publicTypes(
      'packages/flax/js-types/types/flutter/generated/libraries/navigation/index.d.ts',
    ),
  ],
  '@flax/core/navigation/*': [
    publicTypes(
      'packages/flax/js-types/types/flutter/generated/libraries/navigation/*',
    ),
  ],
  '@flax/dart/*': [publicTypes('packages/flax_dart/js/types/generated/libraries/*')],
  '@flax/material-ui': [
    publicTypes(
      'packages/flax_material_ui/js-types/types/generated/libraries/material/index.d.ts',
    ),
  ],
  '@flax/material-ui/*': [
    publicTypes(
      'packages/flax_material_ui/js-types/types/generated/libraries/material/*',
    ),
  ],
};
const sources = {
  'panel.ts': `import { StatelessWidget, Text, Column, type Widget, type BuildContext } from '@flax/flutter/widgets';
export class Panel extends StatelessWidget {
  constructor(readonly title: string, readonly child: Widget, readonly count = 0, readonly onChanged?: (value: number) => void) { super(); }
  build(_context: BuildContext): Widget { return Column({ children: [Text(this.title), this.child] }); }
}
export class ListPanel extends StatelessWidget {
  constructor(readonly children: readonly Widget[]) { super(); }
  build(_context: BuildContext): Widget { return Column({ children: this.children }); }
}`,
  'js-panel.js': `import { StatelessWidget, Text } from '@flax/flutter/widgets';
export class JsPanel extends StatelessWidget {
  /**
   * @param {string} title
   * @param {number} [count]
   */
  constructor(title, count = 0) { super(); this.title = title; this.count = count; }
  build() { return Text(this.title); }
}`,
  'app.tsx': `import { Column, Padding, Text, EdgeInsets } from '@flax/flutter/widgets';
import { Scaffold, AppBar } from '@flax/material-ui';
import { Panel, ListPanel } from './panel.js';
import { JsPanel } from './js-panel.js';
export const trace: string[] = [];
function mark<T>(label: string, value: T): T { trace.push(label); return value; }
export const result = <Scaffold appBar={AppBar({ title: Text('Probe') })}>
  <Padding padding={EdgeInsets.all(12)}>
    <Column spacing={8}>
      <Panel count={mark('count', 3)} title={mark('title', 'Orders')} onChanged={(value) => { trace.push(value.toFixed(1)); }}>
        <Text data={mark('child', 'Details')} />
      </Panel>
      <ListPanel><Text data="A" /><Text data="B" /></ListPanel>
      <JsPanel title="JavaScript" count={1} />
    </Column>
  </Padding>
</Scaffold>;
export const builder = () => <Text data="Arrow build" />;`,
  [jsxEntry]: `import { Panel } from '../panel.js';
import { Text } from '@flax/flutter/widgets';
export const result = <Panel title="From JSX" count={2}><Text data="JSX child" /></Panel>;
export const defaults = <Panel title="Defaults"><Text data="Default child" /></Panel>;`,
  'plain.ts': `import { Text } from '@flax/flutter/widgets'; export const result = Text('Existing API');`,
};

async function compile(entry, contents) {
  const compiler = new FlaxCompiler({ root: scratch });
  try {
    const result = await build({
      absWorkingDir: scratch,
      entryPoints: [entry],
      bundle: true,
      write: false,
      format: 'iife',
      globalName: 'probe',
      platform: 'neutral',
      target: 'es2022',
      logLevel: 'silent',
      plugins: [
        {
          name: 'isolated-jsx-probe',
          setup(builder) {
            builder.onResolve({ filter: /^@flax\// }, (args) => ({
              path: args.path,
              namespace: 'probe-host',
            }));
            // Test doubles compare emitted API calls, not native Flutter behavior.
            builder.onLoad({ filter: /.*/, namespace: 'probe-host' }, () => ({
              contents: `
            export class StatelessWidget {}
            export function Text(data, options = {}) { return { type: 'Text', data, options }; }
            export function Column(options = {}) { return { type: 'Column', options }; }
            export function Padding(options = {}) { return { type: 'Padding', options }; }
            export function Scaffold(options = {}) { return { type: 'Scaffold', options }; }
            export function AppBar(options = {}) { return { type: 'AppBar', options }; }
            export const EdgeInsets = { all(value) { return { all: value }; } };`,
              loader: 'js',
            }));
            builder.onResolve({ filter: /^\.\/.*\.js$/ }, (args) => {
              const candidate = resolve(
                args.resolveDir,
                args.path.replace(/\.js$/, '.ts'),
              );
              if (contents.has(candidate)) return { path: candidate };
            });
            builder.onLoad(
              { filter: /\.[jt]sx?$/, namespace: 'file' },
              async (args) => ({
                contents: compiler.transform(
                  contents.get(args.path) ?? (await readFile(args.path, 'utf8')),
                  args.path,
                ).code,
                loader: 'ts',
              }),
            );
          },
        },
      ],
    });
    assert.doesNotMatch(
      result.outputFiles[0].text,
      /React\.createElement|jsx-runtime|jsxDEV|function jsx\(/,
    );
    const context = createContext({});
    runInContext(result.outputFiles[0].text, context);
    return context.probe;
  } finally {
    compiler.close();
  }
}

function diagnostics(overrides = new Map()) {
  const project = openProject(scratch, overrides);
  try {
    const errors = [
      ...project.program.getSyntacticDiagnostics(),
      ...project.program.getSemanticDiagnostics(),
    ];
    return errors.map((d) => ({
      code: d.code,
      file: d.fileName,
      position: d.pos,
      text: d.text,
    }));
  } finally {
    project.close();
  }
}

try {
  await mkdir(join(scratch, 'views'));
  for (const [name, source] of Object.entries(sources))
    await writeFile(join(scratch, name), source);
  await writeFile(
    join(scratch, 'tsconfig.json'),
    JSON.stringify({
      compilerOptions: {
        target: 'ES2022',
        module: 'ESNext',
        moduleResolution: 'Bundler',
        jsx: 'preserve',
        strict: true,
        noEmit: true,
        skipLibCheck: true,
        allowJs: true,
        checkJs: true,
        types: [],
        lib: ['ES2022'],
        paths,
      },
      files: Object.keys(sources),
      include: ['flax-jsx.generated.d.ts'],
    }),
  );
  const disabled = await prepareJsx({ root: scratch });
  assert.equal(disabled.enabled, false);
  assert.equal(
    disabled.transform(sources['plain.ts'], join(scratch, 'plain.ts')),
    sources['plain.ts'],
  );
  assert.throws(
    () => disabled.transform(sources['app.tsx'], join(scratch, 'app.tsx')),
    /disabled/,
  );
  await assert.rejects(access(disabled.generated));
  checks.push(
    'default-off leaves ordinary source unchanged and rejects JSX without generating declarations',
  );

  experiment = await prepareJsx({
    root: scratch,
    jsx: true,
    contentSlots: { '@flax/material-ui#Scaffold': 'body' },
  });
  const valid = diagnostics();
  if (valid.length) process.stderr.write(await readFile(experiment.generated, 'utf8'));
  assert.deepEqual(valid, []);
  checks.push(
    'generated declarations accept real Flax SDK types in TSX and JSX, including JSDoc components',
  );

  const lowered = new Map(
    Object.entries(sources).map(([name, code]) => [
      join(scratch, name),
      experiment.transform(code, join(scratch, name)),
    ]),
  );
  assert.deepEqual(diagnostics(lowered), []);
  assert.match(lowered.get(join(scratch, 'app.tsx')), /new Panel\(/);
  assert.doesNotMatch(
    [...lowered.values()].join('\n'),
    /jsx-runtime|jsxProps\s*=|React\./,
  );
  const app = await compile('app.tsx', lowered);
  assert.deepEqual(Array.from(app.trace), ['count', 'title', 'child']);
  const panels = app.result.options.body.options.child.options.children;
  assert.equal(panels[0].title, 'Orders');
  assert.equal(panels[0].count, 3);
  assert.equal(panels[0].child.data, 'Details');
  panels[0].onChanged(4);
  assert.equal(app.trace.at(-1), '4.0');
  assert.equal(panels[1].children.length, 2);
  assert.equal(app.builder().data, 'Arrow build');
  const jsxApp = await compile(jsxEntry, lowered);
  assert.equal(jsxApp.result.child.data, 'JSX child');
  assert.equal(jsxApp.defaults.count, 0);
  checks.push(
    'direct factory/new calls preserve reordered attribute evaluation, callback behavior, constructor defaults, child lists and body mapping',
  );

  const negatives = [
    [
      'wrong attribute type',
      sources[jsxEntry].replace('title="From JSX"', 'title={123}'),
      2322,
    ],
    [
      'missing required argument',
      sources[jsxEntry].replace('title="From JSX" ', ''),
      2322,
    ],
    [
      'callback contextual type',
      sources['app.tsx'].replace('value.toFixed(1)', 'value.nonexistent()'),
      2339,
    ],
  ];
  for (const [label, source, code] of negatives) {
    const file = label.startsWith('callback') ? 'app.tsx' : jsxEntry;
    const errors = diagnostics(new Map([[join(scratch, file), source]]));
    assert.ok(
      errors.some((d) => d.code === code),
      `${label}: ${JSON.stringify(errors)}`,
    );
  }
  checks.push(
    'wrong types, missing required arguments and callback parameter errors are rejected',
  );

  const project = openProject(scratch);
  let completions;
  try {
    const file = join(scratch, jsxEntry);
    const position = sources[jsxEntry].indexOf('title="From JSX"');
    completions = (
      project.checker
        .getCompletionsAtPosition(file, position)
        ?.entries.map((e) => e.name) ?? []
    ).sort();
    assert.ok(
      completions.some((name) => name.replace(/\?$/, '') === 'onChanged'),
      JSON.stringify(completions),
    );
  } finally {
    project.close();
  }
  checks.push(
    'TypeScript language-service attribute completion exposes generated constructor properties',
  );

  experiment.close();
  experiment = null;
  for (const [source, expected] of [
    [
      sources[jsxEntry].replace(
        '<Text data="JSX child" />',
        '<Text data="A" /><Text data="B" />',
      ),
      /Single content slot/,
    ],
    [sources[jsxEntry].replace('count={2}', 'unknown="x"'), /Unknown attribute/],
    [
      sources[jsxEntry].replace('count={2}', '{...{ count: 2 }}'),
      /spreads are outside/,
    ],
  ]) {
    await writeFile(join(scratch, jsxEntry), source);
    const rejected = await prepareJsx({
      root: scratch,
      jsx: true,
      contentSlots: { '@flax/material-ui#Scaffold': 'body' },
    });
    try {
      assert.throws(
        () => rejected.transform(source, join(scratch, jsxEntry)),
        expected,
      );
    } finally {
      rejected.close();
    }
  }
  await writeFile(join(scratch, jsxEntry), sources[jsxEntry]);
  checks.push(
    'multiple single-slot children, unknown attributes and unsupported spreads fail explicitly',
  );

  const original = sources['panel.ts'];
  await writeFile(join(scratch, 'panel.ts'), original.replaceAll('title', 'heading'));
  experiment = await prepareJsx({
    root: scratch,
    jsx: true,
    contentSlots: { '@flax/material-ui#Scaffold': 'body' },
  });
  const renamed = await readFile(experiment.generated, 'utf8');
  assert.match(renamed, /"heading"/);
  assert.ok(diagnostics().some((d) => d.code === 2322));
  checks.push('regeneration follows constructor renames and reports stale JSX usages');
  experiment.close();
  experiment = null;
  await prepareJsx({ root: scratch, jsx: false });
  await assert.rejects(access(join(scratch, 'flax-jsx.generated.d.ts')));
  const plain = openProject(scratch);
  try {
    assert.deepEqual(plain.program.getConfigFileParsingDiagnostics(), []);
    assert.deepEqual(
      plain.program.getSemanticDiagnostics(join(scratch, 'plain.ts')),
      [],
    );
  } finally {
    plain.close();
  }
  checks.push(
    'switching off removes only the generated declaration owned by the experiment',
  );
  const unowned = join(scratch, 'flax-jsx.generated.d.ts');
  await writeFile(unowned, '// User-owned declaration\n');
  await prepareJsx({ root: scratch, jsx: false });
  assert.equal(await readFile(unowned, 'utf8'), '// User-owned declaration\n');
  await assert.rejects(prepareJsx({ root: scratch, jsx: true }), /Refusing to replace/);
  checks.push('unowned declaration files are never overwritten or removed');

  const receipt = {
    status: 'passed',
    typescript,
    checks,
    completionSample: completions,
    limits: [
      'isolated experiment; production adapters unchanged',
      'named exports and simple signatures only',
      'no attribute spreads, fragments, field initializers or generic tags',
      'TypeScript service checked; VS Code and WebStorm UI untested',
      'API test doubles used; no Flutter/native runtime validation',
    ],
  };
  await writeReceipt(receipt);
  process.stdout.write(JSON.stringify(receipt, null, 2) + '\n');
} catch (error) {
  await writeReceipt({ status: 'failed', typescript, checks, error: error.message });
  throw error;
} finally {
  experiment?.close();
  await rm(scratch, { recursive: true, force: true });
}

import 'dart:convert';
import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

void main() {
  var root = Directory.current;
  while (!Directory(p.join(root.path, 'packages/flax_codegen')).existsSync()) {
    if (root.parent.path == root.path) throw StateError('Missing repository');
    root = root.parent;
  }
  String fixture(String name) => Uri.file(
    p.join(
      root.path,
      'packages/flax_codegen/test/fixtures/capability/library_modules/$name.dart',
    ),
  ).toString();
  FlaxCodegenBindingConfig config({
    bool reverse = false,
    bool collision = false,
  }) {
    final routes = {
      for (final name in ['alpha', 'second', 'unused'])
        fixture(name): FlaxCodegenLibrarySelection(
          jsPackage: '@example/libraries/$name',
          tsOutput: 'src/$name/index.ts',
        ),
    };
    return FlaxCodegenBindingConfig(
      'libraries',
      fixture('alpha'),
      '@example/libraries',
      'lib/generated.dart',
      'src/unused-aggregate.ts',
      {
        for (final name in [
          'Alpha',
          'Beta',
          'Child',
          'ConcreteResult',
          'Unused',
        ])
          name: FlaxCodegenClassSelection(
            name == 'ConcreteResult'
                ? const {}
                : {
                    '': name == 'Unused' ? [] : ['value'],
                  },
            kind: 'object',
            getters: name == 'Unused'
                ? []
                : name == 'Child'
                ? ['value']
                : ['value', 'peer'],
            instanceMethods: name == 'Alpha'
                ? const {'concreteResult': []}
                : const {},
          ),
      },
      typedefs: ['Identity'],
      topLevel: const FlaxCodegenTopLevelSelection(null, [
        'answer',
        'negative',
        'ratio',
        'message',
        'enabled',
        'absent',
        'buildFlag',
        'constantAlias',
        'largeInteger',
        'initialized',
        'assigned',
        'changing',
        'failing',
      ]),
      functions: collision
          ? {'getChanging': const FlaxCodegenFunctionSelection([])}
          : const {},
      publicLibraries: reverse
          ? Map.fromEntries(routes.entries.toList().reversed)
          : routes,
    );
  }

  Future<FlaxCodegenModuleModel> parse(
    FlaxCodegenBindingConfig selection,
  ) async {
    final parser = FlaxCodegenBindingParser(root.path);
    try {
      return await parser.parse(selection);
    } finally {
      parser.dispose();
    }
  }

  test('public libraries preserve reexports, show/hide and deterministic ownership', () async {
    final module = await parse(config());
    final reversed = await parse(config(reverse: true));
    final outputs = FlaxCodegenBindingEmitter([module])
        .typescriptOutputs(module);
    expect(
      FlaxCodegenBindingEmitter([reversed]).typescriptOutputs(reversed),
      outputs,
    );
    expect(outputs, isNot(contains('src/unused-aggregate.ts')));
    final second = module.publicLibraries.singleWhere(
      (r) => r.jsPackage.endsWith('/second'),
    );
    expect(second.exports, ['Alpha', 'Beta', 'Identity', 'answer', 'changing']);
    expect(outputs['src/second/index.ts'], isNot(contains('Child')));
    final alphaExport = outputs['src/alpha/index.ts']!
        .split('\n')
        .singleWhere((l) => l.contains('{ Alpha }'));
    expect(outputs['src/second/index.ts'], contains(alphaExport));
    expect(
      outputs.values.where((s) => s.contains('export function Alpha(')),
      hasLength(1),
    );
    expect(outputs.keys, contains('src/unused/_bindings/libraries_Unused.ts'));
    expect(
      outputs['src/alpha/index.ts'],
      contains(
        'import "@example/libraries/alpha/_bindings/libraries_ConcreteResult";',
      ),
    );
    expect(
      outputs['src/alpha/index.ts'],
      contains(
        'export type { ConcreteResult } from "@example/libraries/alpha/_bindings/libraries_ConcreteResult";',
      ),
    );
  });

  test(
    'only environment-independent primitive literals are embedded',
    () async {
      final module = await parse(config());
      final values = {for (final g in module.topLevel!.getters) g.name: g};
      expect(values['answer']!.literal, '42');
      expect(values['negative']!.literal, '-1');
      expect(values['ratio']!.literal, '0.5');
      expect(values['message']!.literal, '"hello"');
      expect(values['enabled']!.literal, 'true');
      expect(values['absent']!.literal, 'null');
      for (final name in [
        'buildFlag',
        'constantAlias',
        'largeInteger',
        'initialized',
        'assigned',
        'changing',
        'failing',
      ]) {
        expect(values[name]!.literal, isNull, reason: name);
        expect(values[name]!.exportName, startsWith('get'));
      }
    },
  );

  test('named read functions reject existing declaration collisions', () async {
    await expectLater(parse(config(collision: true)), throwsStateError);
  });

  test(
    'split entries compile and execute cycles with one identity and lazy reads',
    () async {
      final module = await parse(config());
      final directory = Directory(p.join(root.path, '.dart_tool/flax'))
        ..createSync(recursive: true);
      final temporary = directory.createTempSync('library-modules-');
      try {
        final files = FlaxCodegenBindingEmitter([module])
            .typescriptOutputs(module);
        for (final entry in files.entries) {
          final file = File(p.join(temporary.path, entry.key));
          file.parent.createSync(recursive: true);
          file.writeAsStringSync(entry.value);
        }
        final consumer = File(p.join(temporary.path, 'consumer.ts'))
          ..writeAsStringSync('''
import { Alpha, Child, answer, getChanging, getBuildFlag, getFailing } from '@example/libraries/alpha';
import { Alpha as Again, Beta, type Identity } from '@example/libraries/second';
const acceptsAlpha = (value: Alpha): Alpha => value;
const identity: Identity<number> = value => value;
export { Alpha, Again, Beta, Child, answer, getChanging, getBuildFlag, getFailing, acceptsAlpha, identity };
''');
        final paths = {
          for (final route in module.publicLibraries)
            route.jsPackage: [p.join(temporary.path, route.tsOutput)],
          for (final route in module.publicLibraries)
            '${route.jsPackage}/_bindings/*': [
              p.join(
                temporary.path,
                p.dirname(route.tsOutput),
                '_bindings/*.ts',
              ),
            ],
          '@flax/core/bindings': [
            p.join(root.path, 'packages/flax/js/src/runtime/bindings.ts'),
          ],
        };
        final tsconfig = File(p.join(temporary.path, 'tsconfig.json'))
          ..writeAsStringSync(
            jsonEncode({
              'compilerOptions': {
                'strict': true,
                'exactOptionalPropertyTypes': true,
                'noEmit': true,
                'target': 'ES2019',
                'lib': ['ES2022'],
                'module': 'NodeNext',
                'moduleResolution': 'NodeNext',
                'paths': paths,
              },
              'files': [
                consumer.path,
                ...files.keys.map((f) => p.join(temporary.path, f)),
              ],
            }),
          );
        final compiled = await Process.run('pnpm', [
          'exec',
          'tsc',
          '-p',
          tsconfig.path,
        ], workingDirectory: root.path);
        expect(
          compiled.exitCode,
          0,
          reason: '${compiled.stdout}\n${compiled.stderr}',
        );
        final runner = File(p.join(temporary.path, 'run.mjs'))
          ..writeAsStringSync('''
import assert from 'node:assert/strict';
import { build } from ${jsonEncode(Uri.file(p.join(root.path, 'node_modules/esbuild/lib/main.js')).toString())};
const output = ${jsonEncode(p.join(temporary.path, 'bundle.mjs'))};
const built = await build({entryPoints: [${jsonEncode(consumer.path)}], outfile: output,
  tsconfig: ${jsonEncode(tsconfig.path)}, bundle: true, format: 'esm', platform: 'neutral', metafile: true});
assert.ok(!Object.keys(built.metafile.inputs).some(path => path.includes('libraries_Unused')));
assert.ok(Object.keys(built.metafile.inputs).some(path => path.includes('libraries_ConcreteResult')));
let reads = 0;
globalThis.__flaxTopLevel = (_version, id) => {
  reads++;
  if (id.endsWith('::failing')) throw new Error('readonly failure');
  return id.endsWith('::buildFlag') ? true : reads;
};
const api = await import(output);
assert.equal(reads, 0);
assert.equal(api.Alpha, api.Again);
assert.equal(api.answer, 42);
assert.equal(api.getChanging(), 1);
assert.equal(api.getChanging(), 2);
assert.equal(api.getBuildFlag(), true);
assert.throws(() => api.getFailing(), /readonly failure/);
assert.throws(() => api.getFailing(), /readonly failure/);
assert.equal(reads, 5);
delete globalThis.__flaxTopLevel;
assert.throws(() => api.getChanging(), /FlaxView host/);
''');
        final executed = await Process.run('node', [
          runner.path,
        ], workingDirectory: root.path);
        expect(
          executed.exitCode,
          0,
          reason: '${executed.stdout}\n${executed.stderr}',
        );
      } finally {
        temporary.deleteSync(recursive: true);
      }
    },
    timeout: const Timeout(Duration(minutes: 3)),
  );
}

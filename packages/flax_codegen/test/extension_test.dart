import 'dart:convert';
import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:flax_codegen/src/manifest_codec.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'generator_test.dart' show compileFixture;

void main() {
  var root = Directory.current;
  while (!Directory(p.join(root.path, 'packages/flax_codegen')).existsSync()) {
    root = root.parent;
  }
  final uri = Uri.file(
    p.join(
      root.path,
      'packages/flax_codegen/test/fixtures/capability/extension_shapes.dart',
    ),
  ).toString();
  String yaml(String selection) =>
      '''
format: 2
name: extensions
library: $uri
jsPackage: '@example/extensions'
dartOutput: unused.dart
tsOutput: unused.ts
types: [ExtensionMode]
extensions:
$selection
''';
  Future<FlaxCodegenModuleModel> parse(String selection) async {
    final parser = FlaxCodegenBindingParser(root.path);
    try {
      return await parser.parse(
        FlaxCodegenBindingConfig.parseStrict(yaml(selection)),
      );
    } finally {
      parser.dispose();
    }
  }

  test(
    'explicit overrides, getters, setters, generics and operators compile',
    () async {
      final module = await parse('''
  StringA:
    getters: [isBlank]
    methods: {size: [], repeat: [count]}
    staticGetters: [version]
    staticMethods: {parse: [value]}
    operators: {'[]': [index], '+': [other]}
  StringB:
    methods: {size: []}
  ListX:
    getters: [firstValue]
    setters: [firstValue]
    methods: {mapFirst: [transform], delayed: [], immediate: [], describe: []}
    operators: {'[]': [index], '[]=': [index, value]}
  NullableX:
    getters: [missing]
  NumberX:
    operators: {'unary-': [], '-': [other]}
  RecordX:
    methods: {apply: [transform], wait: [value], maybe: [value]}
  ModeX:
    getters: [ordinal]
  BoundX:
    getters: [firstNumber]
    methods: {convert: [transform]}
  ShadowX:
    methods: {choose: [receiver, label], shadow: [value]}
''');
      expect(module.extensions, hasLength(9));
      expect(module.classes, isEmpty);
      for (final name in [
        'Object',
        'invokeTopLevel',
        'upstream0',
        'extensionsBindingModule',
      ]) {
        final original = module.extensions.first;
        final collision = FlaxCodegenModuleModel(
          name: module.name,
          library: uri,
          jsPackage: module.jsPackage,
          dartOutput: '',
          tsOutput: '',
          classes: const [],
          types: const [],
          extensions: [
            FlaxCodegenExtensionModel(
              name: name,
              originatingUri: original.originatingUri,
              onType: original.onType,
              typeParameters: original.typeParameters,
              members: original.members,
            ),
          ],
        );
        expect(
          collision.validate,
          throwsA(
            isA<StateError>().having(
              (error) => error.message,
              'message',
              contains('Conflicting extension export'),
            ),
          ),
        );
      }

      final diagnostics = FlaxCodegenManifestDiagnostics('extension-fixture');
      final encoded = FlaxCodegenManifestCodec.encodeModule(module);
      encoded['typeLibraries'] = {
        'FutureOr': 'dart:async',
        'ExtensionMode': 'package:example/extensions.dart',
        for (final e in module.extensions)
          e.name: 'package:example/extensions.dart',
      };
      encoded['typeLibraries'] = Map.fromEntries(
        (encoded['typeLibraries'] as Map<String, String>).entries.toList()
          ..sort((a, b) => a.key.compareTo(b.key)),
      );
      final decoded = FlaxCodegenManifestCodec.decodeModule(
        encoded,
        diagnostics,
        '',
        module.name,
      );
      diagnostics.throwIfAny();
      expect(FlaxCodegenManifestCodec.encodeModule(decoded!), encoded);
      for (final mutate in <void Function(Map<String, dynamic>)>[
        (extension) => extension['owner'] = true,
        (extension) => (extension['members'] as List).clear(),
        (extension) => ((extension['members'] as List).first as Map)['kind'] =
            'constructor',
        (extension) =>
            (((extension['members'] as List).first as Map)['call']
                    as Map)['name'] =
                'wrong',
        (extension) => extension['isReference'] = 'yes',
      ]) {
        final malformed =
            jsonDecode(jsonEncode(encoded)) as Map<String, dynamic>;
        mutate((malformed['extensions'] as List).first as Map<String, dynamic>);
        final errors = FlaxCodegenManifestDiagnostics('malformed');
        expect(
          FlaxCodegenManifestCodec.decodeModule(
            malformed,
            errors,
            '',
            module.name,
          ),
          isNull,
        );
        expect(errors.items, isNotEmpty);
      }
      final emitter = FlaxCodegenBindingEmitter([module]);
      final dart = emitter.dart(module);
      expect(dart, contains('StringA('));
      expect(dart, contains('StringB('));
      final ts = emitter.typescript(module);
      final javascript = await Process.run('node', [
        '--input-type=module',
        '-e',
        '''
import assert from 'node:assert/strict';
import { transformSync } from 'esbuild';
const source = ${jsonEncode(ts)};
const imports = source.split('\\n').find(line => line.startsWith('import '));
const helpers = [...imports.matchAll(/as (_flaxHost\\w+)/g)].map(match => match[1]);
const calls = [];
const values = [];
const hosts = Object.fromEntries(helpers.map(name => [name, (...args) => {
  if (name === '_flaxHostEnumValue') return {enum: args[1]};
  assert.equal(name, '_flaxHostInvokeTopLevel');
  calls.push(args);
  const result = values.shift();
  if (result instanceof Error) throw result;
  return result;
}]));
const output = transformSync(source.replace(imports, ''), {loader: 'ts', format: 'cjs'}).code;
const exported = {exports: {}};
new Function('module', 'exports', 'bindingVersion', ...helpers, output)(exported, exported.exports, 21, ...helpers.map(name => hosts[name]));
const {StringA, StringB, ListX, ShadowX} = exported.exports;
assert.equal(calls.length, 0);
values.push(3, 13, true, false);
assert.equal(StringA.size('abc'), 3);
assert.equal(StringB.size('abc'), 13);
assert.equal(StringA.getIsBlank(' '), true);
assert.equal(StringA.getIsBlank(' '), false);
assert.notEqual(calls[0][0], calls[1][0]);
assert.deepEqual(calls[0][1], ['abc']);
assert.equal(calls[2][0], calls[3][0]);
ListX.setFirstValue(['a'], 'b');
assert.deepEqual(calls.at(-1)[1], [['a'], 'b']);
ShadowX.choose([1], 'x', {label: 'custom'});
assert.deepEqual(calls.at(-1)[1], [[1], 'x', 'custom']);
assert.throws(() => ShadowX.choose([1], 'x', {unexpected: true}), TypeError);
assert.throws(() => StringA.size('a', 'extra'), TypeError);
values.push(new Error('dart failed'));
assert.throws(() => StringA.size('a'), /dart failed/);
''',
      ], workingDirectory: root.path);
      expect(
        javascript.exitCode,
        0,
        reason: '${javascript.stdout}\n${javascript.stderr}',
      );

      await compileFixture(
        root.path,
        emitter,
        module,
        dartTestSource: r'''
void main() {
  test('generated adapters execute explicit extension members', () async {
    expect(_extension_StringA_size({'receiver': 'abc'}), 3);
    expect(_extension_StringB_size({'receiver': 'abc'}), 13);
    expect(_extension_StringA_getIsBlank({'receiver': ' '}), true);
    expect(_extension_StringA_add({'receiver': 'a', 'other': 'b'}), 'a:b');
    expect(_extension_StringA_getIndex({'receiver': 'abc', 'index': 1}), 'b');
    expect(_extension_NumberX_negate({'receiver': 3}), -3);
    expect(_extension_StringA_getVersion({}), '1');
    final values = <Object?>['a'];
    _extension_ListX_setFirstValue({'receiver': values, 'value': 'b'});
    expect(values, ['b']);
    _extension_ListX_setIndex({'receiver': values, 'index': 0, 'value': 'c'});
    expect(_extension_ListX_describe({'receiver': values}), ('c', length: 1));
    expect(await (_extension_ListX_delayed({'receiver': values}) as Future), 'c');
    expect(_extension_NullableX_getMissing({'receiver': null}), true);
    expect(() => _extension_StringA_size({'receiver': 1}), throwsA(isA<TypeError>()));
    expect(() => _extension_StringA_getIndex({'receiver': 'a', 'index': 10}), throwsRangeError);
    expect(() => _extension_ListX_getFirstValue({'receiver': <Object?>[]}), throwsStateError);
  });
}
''',
        consumerSource: '''
import { StringA, StringB, ListX, NullableX, NumberX, RecordX, ModeX, ExtensionMode, BoundX, ShadowX } from './plugin.js';
const a: boolean = StringA.getIsBlank(' ');
const b: number = StringB.size('text');
const text: string = StringA.repeat('a', 2);
const version: string = StringA.getVersion();
const parsed: number = StringA.parse('2');
const item: string = ListX.getFirstValue(['x']);
ListX.setFirstValue(['x'], 'y');
const mapped: number = ListX.mapFirst(['x'], value => value.length);
const deferred: Promise<string> = ListX.delayed(['x']);
const record: {readonly \$1: string; readonly length: number} = ListX.describe(['x']);
NullableX.getMissing(null);
NumberX.negate(1);
const mode: number = ModeX.getOrdinal(ExtensionMode.first);
const numeric: number = BoundX.convert([1], value => value + 1);
const chosen: string = ShadowX.choose([1], 'x', {label: 'test'});
const shadowed: string = ShadowX.shadow([1], 'x');
const result: string = RecordX.apply({\$1: 2, label: 'test'}, value => value);
const pending: Promise<number> = RecordX.wait({\$1: 2, label: 'test'}, Promise.resolve(3));
// @ts-expect-error bounds are preserved
BoundX.getFirstNumber(['bad']);
// @ts-expect-error the receiver retains its type
StringA.size(1);
''',
      );
    },
    timeout: const Timeout(Duration(minutes: 4)),
  );

  test('invalid signatures and generated name collisions fail early', () async {
    for (final selection in [
      "  CollisionX: {getters: [size], methods: {getSize: []}}",
      "  StringA: {}",
      "  RecursiveX: {getters: [value]}",
      "  RawFunctionX: {getters: [value]}",
      "  StringA: {operators: {'==': [other]}}",
      "  StringA: {methods: {repeat: []}}",
      "  StringA: {getters: [version]}",
    ]) {
      await expectLater(
        parse(selection),
        throwsA(isA<StateError>()),
        reason: selection,
      );
    }
  });

  test('extensions do not widen Context lifecycle semantics', () async {
    final parser = FlaxCodegenBindingParser(root.path);
    try {
      final config = FlaxCodegenBindingConfig.parseStrict(
        yaml('  ContextX: {getters: [isMounted]}')
            .replaceFirst('extension_shapes.dart', 'extension_semantics.dart')
            .replaceFirst(
              'types: [ExtensionMode]',
              'classes: {BuildContext: {kind: context}}',
            ),
      );
      await expectLater(
        parser.parse(config),
        throwsA(
          isA<StateError>().having(
            (error) => error.message,
            'message',
            contains('Unsupported extension semantic position'),
          ),
        ),
      );
    } finally {
      parser.dispose();
    }
  });

  test('private, anonymous and unknown extensions fail', () async {
    for (final name in ['_PrivateX', 'Missing', '']) {
      await expectLater(
        parse("  '$name': {methods: {size: []}}"),
        throwsA(anything),
      );
    }
  });

  test('strict extension selection rejects unknown fields and duplicate selections', () {
    for (final selection in [
      '  StringA: {constructors: {}}',
      '  StringA: {getters: [isBlank, isBlank]}',
      '  StringA: {methods: {repeat: [count, count]}}',
    ]) {
      expect(
        () => FlaxCodegenBindingConfig.parseStrict(yaml(selection)),
        throwsA(isA<FlaxCodegenException>()),
      );
    }
  });
}

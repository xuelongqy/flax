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
      await parser.dispose();
    }
  }

  test(
    'extension providers reuse one complete surface or emit local members',
    () async {
      final full = await parse(
        '  StringA:\n    methods: {size: [], repeat: [count]}',
      );
      final partial = await parse('  StringA:\n    methods: {size: []}');
      FlaxCodegenModuleModel provider(
        FlaxCodegenModuleModel source,
        String id,
      ) => FlaxCodegenModuleModel(
        name: id.replaceAll('.', '_'),
        library: source.library,
        jsPackage: '@example/$id',
        dartOutput: '',
        tsOutput: '',
        classes: const [],
        types: source.types,
        extensions: source.extensions,
        typeLibraries: source.typeLibraries,
        moduleId: '$id/extensions',
      );
      for (final (providers, reused) in [
        ([provider(full, 'example.a')], true),
        ([provider(partial, 'example.a')], false),
        ([provider(full, 'example.a'), provider(full, 'example.b')], false),
        ([provider(full, 'example.b'), provider(full, 'example.a')], false),
      ]) {
        final parser = FlaxCodegenBindingParser(root.path);
        try {
          parser.prepareModules(providers);
          final actual = await parser.parse(
            FlaxCodegenBindingConfig.parseStrict(
              yaml('  StringA:\n    methods: {size: [], repeat: [count]}'),
            ),
          );
          expect(actual.extensions.single.isReference, reused);
          expect(actual.extensions.single.members, hasLength(2));
        } finally {
          await parser.dispose();
        }
      }
      final generic = provider(
        await parse('''
  ListX:
    getters: [firstValue]
    setters: [firstValue]
    methods: {delayed: []}
  StringA:
    staticGetters: [version]
    staticMethods: {parse: [value]}
'''),
        'example.generic',
      );
      final parser = FlaxCodegenBindingParser(root.path);
      try {
        parser.prepareModules([generic]);
        final consumer = await parser.parse(
          FlaxCodegenBindingConfig.parseStrict(
            yaml('''
  ListX:
    getters: [firstValue]
    setters: [firstValue]
  StringA:
    staticGetters: [version]
    staticMethods: {parse: [value]}
'''),
          ),
        );
        expect(consumer.extensions.every((e) => e.isReference), isTrue);
        final emitter = FlaxCodegenBindingEmitter([generic, consumer]);
        expect(emitter.typescript(consumer), contains('= upstream0.ListX;'));
        expect(emitter.dart(consumer), isNot(contains('_extension_ListX_')));
        await compileFixture(
          root.path,
          emitter,
          consumer,
          consumerSource: '''
import { ListX, StringA } from './plugin.js';
const list = ListX(['a']);
const first: string = list.firstValue;
list.setFirstValue('b');
const version: string = StringA.version;
const parsed: number = StringA.parse('2');
// @ts-expect-error the reused receiver still fixes T
list.setFirstValue(1);
// @ts-expect-error an unselected provider method stays outside this surface
list.delayed();
''',
        );
      } finally {
        await parser.dispose();
      }
    },
  );

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
  CollisionX:
    getters: [size]
    methods: {getSize: []}
  WeakMap:
    staticGetters: [prototype, caller]
''');
      expect(module.extensions, hasLength(11));
      expect(module.classes, isEmpty);
      for (final name in [
        'Object',
        'globalThis',
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
      // Published models decode each callable's generic scope independently.
      final executable = FlaxCodegenModuleModel(
        name: module.name,
        library: module.library,
        jsPackage: module.jsPackage,
        dartOutput: module.dartOutput,
        tsOutput: module.tsOutput,
        classes: module.classes,
        types: module.types,
        typeLibraries: module.typeLibraries,
        extensions: decoded.extensions,
      );
      final emitter = FlaxCodegenBindingEmitter([executable]);
      final dart = emitter.dart(executable);
      expect(dart, contains('StringA('));
      expect(dart, contains('StringB('));
      final ts = emitter.typescript(executable);
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
  if (name === '_flaxHostDefineEnum') return;
  assert.equal(name, '_flaxHostInvokeTopLevel');
  calls.push(args);
  const result = values.shift();
  if (result instanceof Error) throw result;
  return result;
}]));
const output = transformSync(source.replace(imports, ''), {loader: 'ts', format: 'cjs'}).code;
const exported = {exports: {}};
new Function('module', 'exports', 'bindingVersion', ...helpers, output)(exported, exported.exports, 24, ...helpers.map(name => hosts[name]));
const {StringA, StringB, ListX, ShadowX, CollisionX, WeakMap} = exported.exports;
assert.equal(calls.length, 0);
const text = StringA('abc');
assert.equal(calls.length, 0);
assert.equal(text.size, StringA('other').size);
assert.throws(() => StringA(), TypeError);
assert.throws(() => StringA(undefined), TypeError);
assert.throws(() => StringA('a', 'b'), TypeError);
assert.throws(() => new StringA('a'), TypeError);
assert.throws(() => text.size.call({}), TypeError);
assert.throws(() => text.size.call(Object.create(text)), TypeError);
const size = text.size;
assert.throws(() => size(), TypeError);
values.push(3, 13, true, false);
assert.equal(text.size(), 3);
assert.equal(StringB('abc').size(), 13);
const blank = StringA(' ');
assert.equal(blank.isBlank, true);
assert.equal(blank.isBlank, false);
assert.notEqual(calls[0][0], calls[1][0]);
assert.deepEqual(calls[0][1], ['abc']);
assert.equal(calls[2][0], calls[3][0]);
ListX(['a']).setFirstValue('b');
assert.deepEqual(calls.at(-1)[1], [['a'], 'b']);
ShadowX([1]).choose('x', {label: 'custom'});
assert.deepEqual(calls.at(-1)[1], [[1], 'x', 'custom']);
assert.throws(() => ShadowX([1]).choose('x', {unexpected: true}), TypeError);
assert.throws(() => text.size('extra'), TypeError);
values.push('1', 2);
assert.equal(StringA.version, '1');
const parse = StringA.parse;
assert.equal(parse('2'), 2);
values.push(new Error('dart failed'));
assert.throws(() => text.size(), /dart failed/);
values.push(4, 5);
const collision = CollisionX('value');
assert.equal(collision.size, 4);
assert.equal(collision.getSize(), 5);
values.push(1, 2);
assert.equal(WeakMap.prototype, 1);
assert.equal(WeakMap.caller, 2);
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
        executable,
        dartTestSource: r'''
void main() {
  test('generated adapters execute explicit extension members', () async {
    expect(_extension_StringA_method_size({'receiver': 'abc'}), 3);
    expect(_extension_StringB_method_size({'receiver': 'abc'}), 13);
    expect(_extension_StringA_getter_isBlank({'receiver': ' '}), true);
    expect(_extension_StringA_operator_add({'receiver': 'a', 'other': 'b'}), 'a:b');
    expect(_extension_StringA_operator_getIndex({'receiver': 'abc', 'index': 1}), 'b');
    expect(_extension_NumberX_operator_negate({'receiver': 3}), -3);
    expect(_extension_StringA_staticGetter_version({}), '1');
    final values = <Object?>['a'];
    _extension_ListX_setter_firstValue({'receiver': values, 'value': 'b'});
    expect(values, ['b']);
    _extension_ListX_operator_setIndex({'receiver': values, 'index': 0, 'value': 'c'});
    expect(_extension_ListX_method_describe({'receiver': values}), ('c', length: 1));
    expect(await (_extension_ListX_method_delayed({'receiver': values}) as Future), 'c');
    expect(_extension_NullableX_getter_missing({'receiver': null}), true);
    expect(() => _extension_StringA_method_size({'receiver': 1}), throwsA(isA<TypeError>()));
    expect(() => _extension_StringA_operator_getIndex({'receiver': 'a', 'index': 10}), throwsRangeError);
    expect(() => _extension_ListX_getter_firstValue({'receiver': <Object?>[]}), throwsStateError);
    expect(_extension_CollisionX_getter_size({'receiver': 'four'}), 4);
    expect(_extension_CollisionX_method_getSize({'receiver': 'three'}), 5);
  });
}
''',
        consumerSource: '''
import { StringA, StringB, ListX, NullableX, NumberX, RecordX, ModeX, ExtensionMode, BoundX, ShadowX, WeakMap } from './plugin.js';
const a: boolean = StringA(' ').isBlank;
const b: number = StringB('text').size();
const text: string = StringA('a').repeat(2);
const version: string = StringA.version;
const prototype: number = WeakMap.prototype;
const parsed: number = StringA.parse('2');
const item: string = ListX(['x']).firstValue;
ListX(['x']).setFirstValue('y');
const mapped: number = ListX(['x']).mapFirst(value => value.length);
const deferred: Promise<string> = ListX(['x']).delayed();
const record: {readonly \$1: string; readonly length: number} = ListX(['x']).describe();
NullableX(null).missing;
NumberX(1).negate();
const mode: number = ModeX(ExtensionMode.first).ordinal;
const numeric: number = BoundX([1]).convert(value => value + 1);
const chosen: string = ShadowX([1]).choose('x', {label: 'test'});
const shadowed: string = ShadowX([1]).shadow('x');
const result: string = RecordX({\$1: 2, label: 'test'}).apply(value => value);
const pending: Promise<number> = RecordX({\$1: 2, label: 'test'}).wait(Promise.resolve(3));
// @ts-expect-error bounds are preserved
BoundX(['bad']).firstNumber;
// @ts-expect-error the receiver retains its type
StringA(1).size();
// @ts-expect-error views are callable adapters, not constructors
new StringA('a');
// @ts-expect-error generic setters retain the captured receiver type
ListX(['x']).setFirstValue(1);
// @ts-expect-error getters remain readonly
StringA(' ').isBlank = false;
// @ts-expect-error static getters remain readonly
StringA.version = '2';
''',
      );
    },
    timeout: const Timeout(Duration(minutes: 4)),
  );

  test('invalid signatures and generated name collisions fail early', () async {
    for (final selection in [
      "  SetterCollisionX: {setters: [firstValue], methods: {setFirstValue: [value]}}",
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

  test('explicit and automatic extensions reuse ordinary Context conversion', () async {
    final parser = FlaxCodegenBindingParser(root.path);
    try {
      final config = FlaxCodegenBindingConfig.parseStrict(
        yaml('''
  ContextX:
    getters: [isMounted, same, events]
    methods: {through: [callback], later: [callback]}
''')
            .replaceFirst('extension_shapes.dart', 'extension_semantics.dart')
            .replaceFirst(
              'types: [ExtensionMode]',
              'classes: {BuildContext: {kind: context}, Route: {kind: route, typeArguments: [Object?]}}',
            ),
      );
      final module = await parser.parse(config);
      expect(
        module.extensions.single.members.every(
          (member) => member.call.parameters.first.type.kind == 'context',
        ),
        isTrue,
      );
      final emitter = FlaxCodegenBindingEmitter([module]);
      expect(emitter.typescript(module), contains('contextHandle(receiver,'));
      expect(emitter.dart(module), contains('ContextX('));
      final proposal = await parser.proposeLibrary(
        FlaxCodegenBindingConfig(
          config.name,
          config.library,
          config.jsPackage,
          config.dartOutput,
          config.tsOutput,
          config.classes,
        ),
        inferPublicTypeCarriers: false,
      );
      final automatic = await parser.parse(proposal.config);
      expect(automatic.extensions.single.members, hasLength(5));
      expect(
        proposal.skips.where((skip) => skip.target.startsWith('ContextX')),
        isEmpty,
      );
      expect(
        proposal.skips.where((skip) => skip.code == 'route_callback_owner'),
        hasLength(2),
      );
      expect(
        () => const FlaxCodegenTypeRef(
          'page',
          id: 'Page',
        ).validateResult('extension result'),
        throwsA(isA<StateError>()),
      );
      for (final method in ['call', 'nested']) {
        await expectLater(
          parser.parse(
            FlaxCodegenBindingConfig.parseStrict(
              yaml('  RouteX: {methods: {$method: [callback]}}')
                  .replaceFirst(
                    'extension_shapes.dart',
                    'extension_semantics.dart',
                  )
                  .replaceFirst(
                    'types: [ExtensionMode]',
                    'classes: {Route: {kind: route, typeArguments: [Object?]}}',
                  ),
            ),
          ),
          throwsA(
            isA<StateError>().having(
              (error) => error.message,
              'message',
              contains('Callbacks returning Routes require explicit ownership'),
            ),
          ),
        );
      }
    } finally {
      await parser.dispose();
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

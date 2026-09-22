import 'dart:convert';
import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'generator_test.dart' show compileFixture;

const _yaml = '''
format: 1
name: mutable
library: package:example/mutable.dart
jsPackage: '@example/mutable'
dartOutput: lib/mutable.g.dart
tsOutput: js/mutable.ts
''';

void main() {
  var root = Directory.current;
  while (!Directory(p.join(root.path, 'packages/flax_codegen')).existsSync()) {
    if (root.parent.path == root.path) throw StateError('Missing repository');
    root = root.parent;
  }
  final uri = Uri.file(
    p.join(
      root.path,
      'packages/flax_codegen/test/fixtures/capability/mutable_values.dart',
    ),
  ).toString();

  FlaxCodegenBindingConfig config({
    List<String> getters = const [],
    List<String> setters = const [],
    String? library,
    String name = 'mutable',
    String? jsName,
    bool rich = false,
    bool collision = false,
    List<String> additionalLibraries = const [],
    Map<String, FlaxCodegenLibrarySelection> publicLibraries = const {},
  }) => FlaxCodegenBindingConfig(
    name,
    library ?? uri,
    '@example/$name',
    'unused.dart',
    'unused.ts',
    {
      if (rich)
        'MutableToken': const FlaxCodegenClassSelection(
          {
            '': ['value'],
          },
          kind: 'object',
          getters: ['value'],
          setters: ['value'],
        ),
    },
    topLevel: FlaxCodegenTopLevelSelection(jsName, getters, setters: setters),
    types: rich ? ['MutableMode'] : [],
    typedefs: rich ? ['IntTransform', 'GenericIdentity'] : [],
    additionalLibraries: additionalLibraries,
    publicLibraries: publicLibraries,
    functions: collision
        ? {
            'setCounter': const FlaxCodegenFunctionSelection(['value']),
          }
        : const {},
  );

  Future<FlaxCodegenModuleModel> parse(
    FlaxCodegenBindingConfig selection, {
    List<FlaxCodegenModuleModel> providers = const [],
  }) async {
    final parser = FlaxCodegenBindingParser(root.path);
    try {
      parser.prepareModules(providers);
      return await parser.parse(selection);
    } finally {
      parser.dispose();
    }
  }

  group('mutable top-level configuration', () {
    test('accepts public Dart names reserved by TypeScript', () {
      final selection = FlaxCodegenBindingConfig.parseStrict(
        '${_yaml}topLevel: {getters: [delete], setters: [delete]}\n',
      ).topLevel!;
      expect(selection.getters, ['delete']);
      expect(selection.setters, ['delete']);
    });

    test('accepts paired and setter-only selections', () {
      for (final getters in ['', 'getters: [], ', 'getters: [counter], ']) {
        final selection = FlaxCodegenBindingConfig.parseStrict(
          '${_yaml}topLevel: {${getters}setters: [counter]}\n',
        ).topLevel!;
        expect(selection.jsName, isEmpty);
        expect(
          selection.getters,
          getters.contains('[counter]') ? ['counter'] : <String>[],
        );
        expect(selection.setters, ['counter']);
      }
      final readonly = FlaxCodegenBindingConfig.parseStrict(
        '${_yaml}topLevel: {getters: [constant], setters: []}\n',
      );
      expect(readonly.topLevel!.setters, isEmpty);
    });

    test('map configuration preserves setter-only selections', () {
      final selection = FlaxCodegenBindingConfig.fromMap({
        'name': 'mutable',
        'library': uri,
        'jsPackage': '@example/mutable',
        'dartOutput': 'unused.dart',
        'tsOutput': 'unused.ts',
        'topLevel': {
          'setters': ['counter'],
        },
      }).topLevel!;
      expect(selection.getters, isEmpty);
      expect(selection.setters, ['counter']);
    });

    test('rejects malformed, duplicate and empty selections', () {
      for (final body in [
        '{}',
        '{getters: [], setters: []}',
        '{setters: counter}',
        '{setters: [42]}',
        '{setters: [counter, counter]}',
        '{setters: [_hidden]}',
        '{setters: [missing-name]}',
        '{setters: [counter], unknown: true}',
      ]) {
        expect(
          () =>
              FlaxCodegenBindingConfig.parseStrict('${_yaml}topLevel: $body\n'),
          throwsA(isA<FlaxCodegenException>()),
          reason: body,
        );
      }
    });
  });

  group('mutable top-level parsing', () {
    test(
      'keeps read identity and gives writes distinct function identities',
      () async {
        final module = await parse(
          config(
            getters: ['tracked', 'delayed', 'counter'],
            setters: ['writeOnly', 'tracked', 'delayed', 'counter'],
          ),
        );
        expect(module.topLevel!.getters.map((g) => g.name), [
          'counter',
          'delayed',
          'tracked',
        ]);
        expect(module.topLevel!.setters.map((s) => s.name), [
          'counter',
          'delayed',
          'tracked',
          'writeOnly',
        ]);
        for (final getter in module.topLevel!.getters) {
          expect(getter.id, '$uri::${getter.name}');
          expect(getter.literal, isNull);
          expect(
            getter.kind,
            getter.name == 'tracked'
                ? FlaxCodegenReadonlyKind.getter
                : FlaxCodegenReadonlyKind.mutableValue,
          );
        }
        for (final setter in module.topLevel!.setters) {
          expect(setter.id, '$uri::${setter.name}=');
          expect(setter.type.kind, 'int');
          expect(setter.isReference, isFalse);
          expect(
            setter.exportName,
            'set${setter.name[0].toUpperCase()}${setter.name.substring(1)}',
          );
        }
        expect(module.functions, isEmpty);
      },
    );

    for (final name in [
      'constant',
      'frozen',
      'assigned',
      'initialized',
      'readOnly',
      '_hidden',
      'missing',
    ]) {
      test('rejects a setter for $name', () async {
        await expectLater(parse(config(setters: [name])), throwsStateError);
      });
    }

    test('write-only declarations never gain an implicit getter', () async {
      final module = await parse(config(setters: ['writeOnly']));
      expect(module.topLevel!.getters, isEmpty);
      expect(module.topLevel!.setters.single.id, '$uri::writeOnly=');
      await expectLater(
        parse(config(getters: ['writeOnly'])),
        throwsStateError,
      );
    });

    test('detects duplicates and generated export collisions', () async {
      for (final selection in [
        config(setters: ['counter', 'counter']),
        config(setters: ['counter', 'Counter']),
        config(setters: ['counter'], collision: true),
      ]) {
        await expectLater(parse(selection), throwsStateError);
      }
    });

    test(
      'reexports keep origin identity and conflicting declarations fail',
      () async {
        final parent = Directory(p.join(root.path, '.dart_tool/flax'))
          ..createSync(recursive: true);
        final directory = parent.createTempSync('mutable-exports-');
        addTearDown(() => directory.deleteSync(recursive: true));
        final exported = File(p.join(directory.path, 'exported.dart'))
          ..writeAsStringSync("export '$uri' show counter, writeOnly;\n");
        final hidden = File(p.join(directory.path, 'hidden.dart'))
          ..writeAsStringSync("export '$uri' hide counter;\n");
        final conflict = File(p.join(directory.path, 'conflict.dart'))
          ..writeAsStringSync('int counter = 0;\n');
        final module = await parse(
          config(
            library: exported.uri.toString(),
            getters: ['counter'],
            setters: ['writeOnly', 'counter'],
          ),
        );
        expect(module.topLevel!.getters.single.id, '$uri::counter');
        expect(module.topLevel!.setters.map((s) => s.id), [
          '$uri::counter=',
          '$uri::writeOnly=',
        ]);
        await expectLater(
          parse(config(library: hidden.uri.toString(), setters: ['counter'])),
          throwsStateError,
        );
        await expectLater(
          parse(
            config(
              setters: ['counter'],
              additionalLibraries: [conflict.uri.toString()],
            ),
          ),
          throwsStateError,
        );
      },
    );
  });

  test(
    'consumers cannot expand a known provider read or write surface',
    () async {
      final readonly = await parse(config(getters: ['counter']));
      await expectLater(
        parse(
          config(name: 'consumer', setters: ['counter']),
          providers: [readonly],
        ),
        throwsStateError,
      );
      final writeonly = await parse(config(setters: ['counter']));
      await expectLater(
        parse(
          config(name: 'consumer', getters: ['counter']),
          providers: [writeonly],
        ),
        throwsStateError,
      );
      await expectLater(
        parse(
          config(name: 'consumer', setters: ['counter']),
          providers: [writeonly, writeonly],
        ),
        throwsStateError,
      );
    },
  );

  test('setter inputs reject special ownership recursively', () {
    for (final kind in ['widget', 'context', 'state', 'route', 'page']) {
      final special = FlaxCodegenTypeRef(
        kind,
        id: 'package:example/types.dart::Special',
        name: 'Special',
      );
      for (final type in [
        special,
        FlaxCodegenTypeRef('list', item: special),
        FlaxCodegenTypeRef('future', item: special),
        FlaxCodegenTypeRef(
          'object',
          id: 'package:example/types.dart::Box',
          name: 'Box',
          dartArguments: [special],
        ),
        FlaxCodegenTypeRef(
          'object',
          id: 'package:example/types.dart::Box',
          name: 'Box',
          tsArguments: [special],
        ),
        FlaxCodegenTypeRef('any', declaration: special),
        FlaxCodegenTypeRef(
          'record',
          recordFields: [
            FlaxCodegenRecordFieldModel(
              name: r'$1',
              type: special,
              positional: true,
            ),
          ],
        ),
      ]) {
        final model = FlaxCodegenTopLevelModel(
          '',
          [],
          setters: [
            FlaxCodegenTopLevelSetterModel('$uri::value=', 'value', type),
          ],
        );
        expect(
          model.validate,
          throwsStateError,
          reason: '$kind in ${type.kind}',
        );
      }
    }
  });

  test('namespace read names cannot collide with generated setter methods', () {
    final model = FlaxCodegenTopLevelModel(
      'Values',
      [
        FlaxCodegenTopLevelGetterModel(
          '$uri::setCounter',
          'setCounter',
          const FlaxCodegenTypeRef('int'),
          FlaxCodegenReadonlyKind.getter,
        ),
      ],
      setters: [
        FlaxCodegenTopLevelSetterModel(
          '$uri::counter=',
          'counter',
          const FlaxCodegenTypeRef('int'),
        ),
      ],
    );
    expect(model.validate, throwsStateError);
  });

  test(
    'namespace setters compile as explicit methods with readonly reads',
    () async {
      final provider = await parse(
        config(
          jsName: 'Values',
          getters: ['counter'],
          setters: ['counter', 'writeOnly'],
        ),
      );
      final consumer = await parse(
        config(
          name: 'consumer',
          jsName: 'ConsumerValues',
          getters: ['counter'],
          setters: ['counter', 'writeOnly'],
        ),
        providers: [provider],
      );
      final emitter = FlaxCodegenBindingEmitter([provider, consumer]);
      for (final module in [provider, consumer]) {
        final namespace = module.topLevel!.jsName;
        final ts = emitter.typescript(module);
        for (final method in ['setCounter', 'setWriteOnly']) {
          expect(
            ts,
            contains('$namespace.$method = (value: number): void => {'),
          );
          expect(
            ts,
            isNot(contains('Object.defineProperty($namespace, "$method"')),
          );
        }
        expect(ts, contains('Object.defineProperty($namespace, "counter"'));
      }
      await compileFixture(
        root.path,
        emitter,
        consumer,
        consumerSource: '''
import { ConsumerValues } from './plugin.js';
import { Values } from '@example/mutable';
const count: number = Values.counter;
const result: void = Values.setCounter(count + 1);
Values.setWriteOnly(3);
ConsumerValues.setCounter(ConsumerValues.counter + 1);
ConsumerValues.setWriteOnly(4);
// @ts-expect-error Mutable Dart values still expose readonly namespace reads.
Values.counter = 1;
// @ts-expect-error Setter inputs remain typed through provider forwarding.
ConsumerValues.setCounter('bad');
// @ts-expect-error A setter-only declaration has no property getter.
const missing = ConsumerValues.writeOnly;
''',
      );
    },
    timeout: const Timeout(Duration(minutes: 3)),
  );

  test('public-library modules export named reads and setters', () async {
    final module = await parse(
      config(
        getters: ['counter'],
        setters: ['counter'],
        publicLibraries: {
          uri: const FlaxCodegenLibrarySelection(
            jsPackage: '@example/mutable/values',
            tsOutput: 'values/index.ts',
          ),
        },
      ),
    );
    final emitter = FlaxCodegenBindingEmitter([module]);
    final output = emitter.typescriptOutputs(module)['values/index.ts']!;
    expect(output, contains('getCounter'));
    expect(output, contains('setCounter'));
    await compileFixture(
      root.path,
      emitter,
      module,
      consumerSource: '''
import { getCounter, setCounter } from '@example/mutable/values';
const value: number = getCounter();
const result: void = setCounter(value + 1);
// @ts-expect-error Public-library setter inputs remain typed.
setCounter('bad');
''',
    );
  }, timeout: const Timeout(Duration(minutes: 3)));

  test(
    'provider reads and writes forward without duplicate registrations',
    () async {
      final provider = await parse(
        config(getters: ['counter'], setters: ['counter', 'writeOnly']),
      );
      final consumer = await parse(
        config(
          name: 'consumer',
          getters: ['counter'],
          setters: ['counter', 'writeOnly'],
        ),
        providers: [provider],
      );
      expect(consumer.topLevel!.getters.single.isReference, isTrue);
      expect(consumer.topLevel!.setters.every((s) => s.isReference), isTrue);
      final emitter = FlaxCodegenBindingEmitter([provider, consumer]);
      expect(emitter.dart(consumer), isNot(contains('FlaxFunctionBinding(')));
      await compileFixture(
        root.path,
        emitter,
        consumer,
        consumerSource: '''
import { getCounter, setCounter, setWriteOnly } from './plugin.js';
const count: number = getCounter();
const result: void = setCounter(count + 1);
setWriteOnly(3);
// @ts-expect-error Setter arguments keep the provider's type.
setCounter('bad');
''',
      );
    },
    timeout: const Timeout(Duration(minutes: 3)),
  );

  test(
    'setter-only provider forwarding compiles without type imports',
    () async {
      final provider = await parse(config(setters: ['writeOnly']));
      final original = provider.topLevel!.setters.single;
      final consumer = FlaxCodegenModuleModel(
        name: 'consumer',
        library: uri,
        jsPackage: '@example/consumer',
        dartOutput: 'unused.dart',
        tsOutput: 'unused.ts',
        classes: [],
        types: [],
        topLevel: FlaxCodegenTopLevelModel(
          '',
          [],
          setters: [
            FlaxCodegenTopLevelSetterModel(
              original.id,
              original.name,
              original.type,
              isReference: true,
            ),
          ],
        ),
      );
      final emitter = FlaxCodegenBindingEmitter([provider, consumer]);
      expect(emitter.dart(consumer), isNot(contains('FlaxFunctionBinding(')));
      await compileFixture(
        root.path,
        emitter,
        consumer,
        consumerSource: '''
import { setWriteOnly } from './plugin.js';
setWriteOnly(4);
// @ts-expect-error Setter-only selection does not expose a read.
import { getWriteOnly } from './plugin.js';
''',
      );
    },
    timeout: const Timeout(Duration(minutes: 3)),
  );

  test(
    'generated setters execute Dart assignments, conversions and failures',
    () async {
      final names = [
        'counter',
        'delete',
        'delayed',
        'tracked',
        'optional',
        'mode',
        'token',
        'numbers',
        'groups',
        'record',
        'transform',
        'identityCallback',
        'flexible',
        'later',
        'immediate',
      ];
      final module = await parse(
        config(
          getters: names,
          setters: [...names, 'writeOnly', 'failing'],
          rich: true,
        ),
      );
      expect(
        module.topLevel!.getters
            .singleWhere((g) => g.name == 'flexible')
            .type
            .kind,
        'int',
      );
      expect(
        module.topLevel!.setters
            .singleWhere((s) => s.name == 'flexible')
            .type
            .kind,
        'num',
      );
      final emitter = FlaxCodegenBindingEmitter([module]);
      await compileFixture(
        root.path,
        emitter,
        module,
        consumerSource: r'''
import { getCounter, setCounter, getOptional, setOptional, MutableMode, setMode,
  getDelete, setDelete, getFlexible, setFlexible,
  MutableToken, setToken, setNumbers, setGroups, setRecord, setTransform,
  getIdentityCallback, setIdentityCallback,
  setLater, setImmediate, setWriteOnly } from './plugin.js';
import type { GenericIdentityInput } from './plugin.js';
const result: void = setCounter(getCounter() + 1);
const deleteResult: void = setDelete(getDelete() + 1);
setFlexible(2.5);
const rounded: number = getFlexible();
setOptional(null);
setOptional(getOptional());
setMode(MutableMode.second);
const token = MutableToken(9);
setToken(token);
setNumbers([1, 2]);
setGroups(new Map([['tokens', [token]]]));
setRecord({$1: 3, label: 'typed'});
setTransform(value => value + 1);
const identity: GenericIdentityInput = <T>(value: T): T => value;
setIdentityCallback(identity);
const identityNumber: number = getIdentityCallback()<number>(3);
const identityString: string = getIdentityCallback()<string>('typed');
// @ts-expect-error A monomorphic function cannot satisfy every generic use site.
setIdentityCallback((value: number): number => value);
// @ts-expect-error The generic callback must return its input type.
setIdentityCallback(<T>(value: T): string => 'wrong');
// @ts-expect-error Explicit generic return relationships remain visible.
const wrongIdentity: string = getIdentityCallback()<number>(3);
setLater(Promise.resolve(7));
setImmediate(8);
setImmediate(Promise.resolve(9));
setWriteOnly(10);
// @ts-expect-error A setter has one required input.
setCounter();
// @ts-expect-error Wrong primitive input.
setCounter('bad');
// @ts-expect-error Non-nullable input.
setCounter(null);
// @ts-expect-error The setter does not return its input.
const wrongResult: number = setCounter(1);
// @ts-expect-error Collection elements retain their input type.
setNumbers(['bad']);
// @ts-expect-error Record fields retain their input type.
setRecord({$1: 'bad', label: 'typed'});
// @ts-expect-error Callback result must be numeric.
setTransform(value => 'bad');
// @ts-expect-error Future input must be awaitable.
setLater(1);
''',
        dartTestSource: r'''
Object? read(String name) => mutableBindings.functions
    .singleWhere((binding) => binding.id.endsWith('::$name')).invoke({});
Object? write(String name, Object? value) => mutableBindings.functions
    .singleWhere((binding) => binding.id.endsWith('::$name='))
    .invoke({'value': value});
FlaxTypeRef input(String name) => mutableBindings.functions
    .singleWhere((binding) => binding.id.endsWith('::$name='))
    .parameters.single.type;

class DoubleCallback implements FlaxCallback {
  @override
  Object? call(List<Object?> positional, Map<String, Object?> named) =>
      (positional.single as int) * 2;
}

class IdentityCallback implements FlaxCallback {
  bool returnWrongType = false;
  @override
  Object? call(List<Object?> positional, Map<String, Object?> named) =>
      returnWrongType ? 'wrong' : positional.single;
}

void main() {
  test('generated functions preserve real Dart semantics', () async {
    expect(api.reads, 0);
    expect(api.writes, 0);
    expect(write('counter', 4), isNull);
    expect(api.counter, 4);
    expect(read('counter'), 4);
    expect(write('delete', 2), isNull);
    expect(api.delete, 2);
    expect(read('delete'), 2);
    api.counter = 5;
    expect(read('counter'), 5);
    expect(() => read('delayed'), throwsA(predicate((Object e) => e.toString().contains('LateInitializationError'))));
    write('delayed', 6);
    expect(read('delayed'), 6);
    write('tracked', 7);
    expect(api.writes, 1);
    expect(api.reads, 0);
    expect(read('tracked'), 7);
    expect(api.reads, 1);
    write('writeOnly', 8);
    expect(api.counter, 8);
    expect(api.writes, 2);
    expect(() => write('failing', 9), throwsStateError);
    expect(api.failures, 1);
    expect(api.counter, 8);
    expect(() => write('counter', 'bad'), throwsA(isA<TypeError>()));
    expect(api.counter, 8);
    expect(() => write('counter', null), throwsA(isA<TypeError>()));
    expect(api.counter, 8);
    expect(() => write('tracked', null), throwsA(isA<TypeError>()));
    expect(api.counter, 8);
    expect(api.writes, 2);
    write('optional', null);
    expect(read('optional'), isNull);
    write('optional', 10);
    expect(read('optional'), 10);
    write('mode', api.MutableMode.second);
    expect(api.mode, api.MutableMode.second);
    final token = api.MutableToken(11);
    write('token', token);
    expect(identical(api.token, token), isTrue);
    expect(identical(read('token'), token), isTrue);
    final numbers = input('numbers').collection!.create() as List;
    numbers.addAll(<int>[12, 13]);
    write('numbers', numbers);
    expect(api.numbers, [12, 13]);
    expect(identical(api.numbers, numbers), isTrue);
    final groupType = input('groups');
    final groups = groupType.collection!.create() as Map;
    final tokens = groupType.item!.collection!.create() as List;
    tokens.add(token);
    groups['tokens'] = tokens;
    write('groups', groups);
    expect(identical(api.groups['tokens']!.single, token), isTrue);
    write('record', input('record').record!.create([14, 'converted']));
    expect(api.record, (14, label: 'converted'));
    write('transform', input('transform').callback!.wrap(DoubleCallback()));
    expect(api.transform(7), 14);
    final identityBinding = input('identityCallback').callback!;
    // An unconstrained T uses the Object? bound on the wire.
    expect(identityBinding.parameters.single.type.kind, 'any');
    expect(identityBinding.parameters.single.type.nullable, isTrue);
    expect(identityBinding.result.kind, 'any');
    expect(identityBinding.result.nullable, isTrue);
    final identityHost = IdentityCallback();
    final identity = identityBinding.wrap(identityHost);
    expect(write('identityCallback', identity), isNull);
    expect(identical(api.identityCallback, identity), isTrue);
    expect(api.identityCallback<int>(18), 18);
    expect(api.identityCallback<String>('typed'), 'typed');
    expect(api.identityCallback<int?>(null), isNull);
    expect(identical(api.identityCallback<api.MutableToken>(token), token), isTrue);
    expect((read('identityCallback') as api.GenericIdentity)<int>(19), 19);
    identityHost.returnWrongType = true;
    expect(() => api.identityCallback<int>(20), throwsA(isA<TypeError>()));
    expect(api.identityCallback<String>('typed'), 'wrong');
    expect(write('flexible', 2.5), isNull);
    expect(api.counter, 3);
    expect(read('flexible'), 3);
    final pending = input('later').future!.adapt(Future<Object?>.value(15));
    write('later', pending);
    expect(await api.later, 15);
    write('immediate', 16);
    expect(api.immediate, 16);
    write('immediate', input('immediate').future!.adapt(Future<Object?>.value(17)));
    expect(await api.immediate, 17);
    final binding = mutableBindings.functions.singleWhere((b) => b.id.endsWith('::counter='));
    expect(binding.parameters.single.name, 'value');
    expect(binding.parameters.single.required, isTrue);
    expect(binding.result.kind, 'void');
  });
}
''',
      );
    },
    timeout: const Timeout(Duration(minutes: 3)),
  );

  test('JS dispatch preserves identities, arity, laziness and host rejection forwarding', () async {
    final module = await parse(
      config(
        getters: ['counter', 'tracked'],
        setters: ['counter', 'tracked', 'writeOnly', 'failing'],
      ),
    );
    final ts = FlaxCodegenBindingEmitter([module]).typescript(module);
    final result = await Process.run('node', [
      '--input-type=module',
      '-e',
      '''
import assert from 'node:assert/strict';
import {transformSync} from 'esbuild';
const source = ${jsonEncode(ts)};
const imports = source.split('\\n').find(line => line.startsWith('import '));
const helpers = [...imports.matchAll(/as (_flaxHost\\w+)/g)].map(match => match[1]);
const calls = [];
let current = 1;
let active = true;
const closedError = new Error('Closed Flax session');
const hosts = helpers.map(name => (...args) => {
  assert.equal(name, '_flaxHostInvokeTopLevel');
  calls.push(args);
  if (!active) throw closedError;
  if (args[0].endsWith('::failing=')) throw new Error('setter failed');
  if (args[0].endsWith('=')) { current = args[1][0]; return undefined; }
  return current;
});
const output = transformSync(source.replace(imports, ''), {loader: 'ts', format: 'cjs'}).code;
const exported = {exports: {}};
new Function('module', 'exports', 'bindingVersion', ...helpers, output)(exported, exported.exports, 20, ...hosts);
const api = exported.exports;
assert.equal(calls.length, 0);
assert.equal(api.setCounter(3), undefined);
assert.equal(api.getCounter(), 3);
assert.equal(calls[0][0], ${jsonEncode('$uri::counter=')});
assert.equal(calls[1][0], ${jsonEncode('$uri::counter')});
assert.deepEqual(calls[0][1], [3]);
assert.equal(api.setTracked(4), undefined);
assert.equal(api.getTracked(), 4);
api.setWriteOnly(5);
assert.equal('getWriteOnly' in api, false);
const before = calls.length;
assert.throws(() => api.setCounter(1, 2), TypeError);
assert.equal(calls.length, before);
assert.throws(() => api.setFailing(6), /setter failed/);
assert.equal(api.getCounter(), 5);
// Host rejection forwarding only; this stub does not exercise session lifetime.
active = false;
const beforeClosed = calls.length;
for (const invoke of [
  () => api.getCounter(),
  () => api.getTracked(),
  () => api.setCounter(100),
  () => api.setTracked(101),
  () => api.setWriteOnly(102),
]) {
  assert.throws(invoke, error => error === closedError);
  assert.equal(current, 5);
}
assert.equal(calls.length, beforeClosed + 5);
''',
    ], workingDirectory: root.path);
    expect(result.exitCode, 0, reason: '${result.stdout}\n${result.stderr}');
  });
}

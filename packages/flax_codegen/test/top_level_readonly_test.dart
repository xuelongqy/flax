import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'generator_test.dart' show compileFixture;

const _yaml = '''
format: 1
name: values
library: package:example/values.dart
jsPackage: '@example/values'
dartOutput: lib/values.g.dart
tsOutput: js/values.ts
topLevel:
  jsName: TestValues
  getters: [answer, changing]
''';

void main() {
  var root = Directory.current;
  while (!Directory(p.join(root.path, 'packages/flax_codegen')).existsSync()) {
    if (root.parent.path == root.path) {
      throw StateError('Missing repository root');
    }
    root = root.parent;
  }
  String fixture(String name) => Uri.file(
    p.join(root.path, 'packages/flax_codegen/test/fixtures/capability', name),
  ).toString();
  FlaxCodegenBindingConfig config(
    List<String> getters, {
    String filename = 'readonly_values.dart',
    String jsName = 'TestValues',
    List<String> additionalLibraries = const [],
    bool objects = false,
  }) => FlaxCodegenBindingConfig(
    'values',
    fixture(filename),
    '@example/values',
    'unused.dart',
    'unused.ts',
    {
      if (objects)
        'ReadonlyToken': const FlaxCodegenClassSelection(
          {
            '': ['value'],
          },
          kind: 'object',
          getters: ['value', 'disposed'],
          setters: ['value'],
          instanceMethods: {'dispose': []},
        ),
    },
    additionalLibraries: additionalLibraries,
    topLevel: FlaxCodegenTopLevelSelection(jsName, getters),
    types: objects ? ['ReadonlyMode'] : [],
    typedefs: objects ? ['IntTransform', 'GenericIdentity'] : [],
  );
  Future<FlaxCodegenModuleModel> parse(FlaxCodegenBindingConfig config) async {
    final parser = FlaxCodegenBindingParser(root.path);
    try {
      return await parser.parse(config);
    } finally {
      parser.dispose();
    }
  }

  test('format 1 accepts an explicit readonly namespace', () {
    expect(() => FlaxCodegenBindingConfig.parseStrict(_yaml), returnsNormally);
    final config = FlaxCodegenBindingConfig.parseStrict(_yaml);
    expect(config.topLevel!.jsName, 'TestValues');
    expect(config.topLevel!.getters, ['answer', 'changing']);
  });

  test('format 1 defaults to named readonly exports', () {
    final config = FlaxCodegenBindingConfig.parseStrict(
      _yaml.replaceFirst('  jsName: TestValues\n', ''),
    );
    expect(config.topLevel!.jsName, isEmpty);
    expect(config.topLevel!.getters, ['answer', 'changing']);
  });

  test('strict readonly selection rejects malformed configuration', () {
    final prefix = _yaml.substring(0, _yaml.indexOf('topLevel:'));
    for (final selection in [
      'topLevel: []',
      'topLevel: {jsName: TestValues}',
      'topLevel: {jsName: class, getters: [answer]}',
      'topLevel: {jsName: eval, getters: [answer]}',
      'topLevel: {jsName: arguments, getters: [answer]}',
      'topLevel: {jsName: bad-name, getters: [answer]}',
      'topLevel: {jsName: TestValues, getters: []}',
      'topLevel: {jsName: TestValues, getters: [answer, answer]}',
      'topLevel: {jsName: TestValues, getters: [42]}',
    ]) {
      expect(
        () => FlaxCodegenBindingConfig.parseStrict('$prefix$selection\n'),
        throwsA(isA<FlaxCodegenException>()),
        reason: selection,
      );
    }
  });

  test(
    'readonly variables and explicit getters have canonical source identities',
    () async {
      final selected = [
        'answer',
        'initialized',
        'lazy',
        'assigned',
        'changing',
      ];
      final direct = await parse(config(selected));
      final exported = await parse(
        config(
          selected.reversed.toList(),
          filename: 'readonly_values_export.dart',
        ),
      );
      expect(
        direct.topLevel!.getters.map((g) => g.id),
        exported.topLevel!.getters.map((g) => g.id),
      );
      expect(direct.topLevel!.getters.map((g) => g.kind), [
        FlaxCodegenReadonlyKind.constant,
        FlaxCodegenReadonlyKind.lateFinal,
        FlaxCodegenReadonlyKind.getter,
        FlaxCodegenReadonlyKind.finalValue,
        FlaxCodegenReadonlyKind.lateFinal,
      ]);
      expect(direct.classes, isEmpty);
      expect(direct.functions, isEmpty);
      await compileFixture(
        root.path,
        FlaxCodegenBindingEmitter([direct]),
        direct,
        consumerSource: "import { TestValues } from './plugin.js'; const value: number = TestValues.answer;",
      );
    },
    timeout: const Timeout(Duration(minutes: 3)),
  );

  for (final name in ['writeOnly', '_hidden', 'missing']) {
    test('rejects unsupported readonly selection $name', () async {
      await expectLater(parse(config([name])), throwsStateError);
    });
  }

  test('mutable declarations can be selected with read access only', () async {
    final module = await parse(config(['mutable', 'writable']));
    expect(module.topLevel!.getters.map((getter) => getter.name), [
      'mutable',
      'writable',
    ]);
    expect(module.topLevel!.setters, isEmpty);
  });

  test('readonly Record getter preserves structural fields', () async {
    final module = await parse(config(['record']));
    final type = module.topLevel!.getters.single.type;
    expect(type.kind, 'record');
    expect(
      type.recordFields.map(
        (field) => (field.name, field.type.kind, field.positional),
      ),
      [('\$1', 'int', true), ('\$2', 'int', true)],
    );
  });
  test('rejects duplicate sources and conflicting namespace exports', () async {
    await expectLater(
      parse(
        config(
          ['answer'],
          additionalLibraries: [fixture('readonly_values_conflict.dart')],
        ),
      ),
      throwsStateError,
    );
    await expectLater(
      parse(config(['answer'], jsName: 'ReadonlyToken', objects: true)),
      throwsStateError,
    );
    for (final name in [
      'Array',
      'Object',
      'invokeTopLevel',
      'valuesBindingModule',
      'upstream0',
      '_flaxCallbacks',
    ]) {
      await expectLater(
        parse(config(['answer'], jsName: name)),
        throwsStateError,
      );
    }
    await expectLater(parse(config(['answer', 'answer'])), throwsStateError);
  });

  test(
    'primitive-only readonly forwarding compiles without type imports',
    () async {
      final provider = await parse(config(['answer']));
      final getter = provider.topLevel!.getters.single;
      final consumer = FlaxCodegenModuleModel(
        name: 'consumer',
        library: provider.library,
        jsPackage: '@example/consumer',
        dartOutput: 'unused.dart',
        tsOutput: 'unused.ts',
        classes: [],
        types: [],
        topLevel: FlaxCodegenTopLevelModel('ConsumerValues', [
          FlaxCodegenTopLevelGetterModel(
            getter.id,
            getter.name,
            getter.type,
            getter.kind,
            isReference: true,
          ),
        ]),
      );
      final emitter = FlaxCodegenBindingEmitter([provider, consumer]);
      expect(emitter.dart(consumer), isNot(contains('_read_answer')));
      await compileFixture(
        root.path,
        emitter,
        consumer,
        consumerSource: '''
import { ConsumerValues } from './plugin.js';
const answer: number = ConsumerValues.answer;
// @ts-expect-error Forwarded properties remain readonly.
ConsumerValues.answer = 0;
''',
      );
    },
    timeout: const Timeout(Duration(minutes: 3)),
  );

  test(
    'compound reads compile and preserve Dart initialization and errors',
    () async {
      final module = await parse(
        config([
          'answer',
          'enabled',
          'changing',
          'initialized',
          'lazy',
          'assigned',
          'optional',
          'mode',
          'token',
          'numbers',
          'groups',
          'transform',
          'genericIdentity',
          'later',
          'laterFailure',
          'pending',
          'failing',
          'sideEffect',
        ], objects: true),
      );
      final emitter = FlaxCodegenBindingEmitter([module]);
      final ts = emitter.typescript(module);
      expect(ts, contains('configurable: false'));
      expect(ts, contains('get: () => invokeTopLevel('));
      expect(ts, isNot(contains('TestValues.answer =')));
      await compileFixture(
        root.path,
        emitter,
        module,
        consumerSource: '''
import { TestValues, ReadonlyToken, ReadonlyMode } from './plugin.js';
const answer: number = TestValues.answer;
const optional: number | null = TestValues.optional;
const token: ReadonlyToken = TestValues.token;
token.value = 12;
const mode: ReadonlyMode = TestValues.mode;
const future: Promise<number> = TestValues.later;
const callback: number = TestValues.transform(2);
const genericNumber: number = TestValues.genericIdentity(3);
const genericString: string = TestValues.genericIdentity('value');
// @ts-expect-error The property is readonly, not the returned object.
TestValues.answer = 0;
// @ts-expect-error Returned objects retain their nominal type.
const wrong: ReadonlyToken = TestValues.answer;
// @ts-expect-error Generic return relationships remain visible.
const wrongGeneric: number = TestValues.genericIdentity('value');
''',
        dartTestSource: '''
void main() {
  test('reads are lazy, uncached and preserve application values', () async {
    expect(api.reads, 0);
    expect(api.finalInitializations, 0);
    expect(api.lateInitializations, 0);
    expect(_read_answer({}), 42);
    expect(_read_changing({}), 10);
    expect(api.reads, 1);
    api.seed = 20;
    expect(_read_changing({}), 20);
    expect(api.reads, 2);
    expect(_read_initialized({}), 20);
    api.seed = 30;
    expect(_read_initialized({}), 20);
    expect(api.finalInitializations, 1);
    expect(_read_lazy({}), 30);
    api.seed = 40;
    expect(_read_lazy({}), 30);
    expect(api.lateInitializations, 1);
    expect(() => _read_assigned({}), throwsA(predicate((Object e) => e.toString().contains('LateInitializationError'))));
    api.assigned = 'ready';
    expect(_read_assigned({}), 'ready');
    expect(identical(_read_token({}), api.token), isTrue);
    expect(identical(_read_token({}), _read_token({})), isTrue);
    expect(identical(_read_numbers({}), api.numbers), isTrue);
    expect(_read_optional({}), isNull);
    expect(_read_mode({}), api.ReadonlyMode.second);
    expect((_read_transform({}) as api.IntTransform)(2), 42);
    expect((_read_genericIdentity({}) as api.GenericIdentity)('value'), 'value');
    expect(await (_read_later({}) as Future<int>), 40);
    await expectLater(_read_laterFailure({}) as Future<int>, throwsStateError);
    expect(() => _read_failing({}), throwsStateError);
    expect(() => _read_failing({}), throwsStateError);
    expect(api.failures, 2);
    expect(_read_sideEffect({}), isNull);
    expect(api.reads, 3);
    expect(api.token.disposed, isFalse);
  });
}
''',
      );
    },
    timeout: const Timeout(Duration(minutes: 3)),
  );

  test(
    'readonly ownership restrictions include declared and generic types',
    () {
      const widget = FlaxCodegenTypeRef(
        'widget',
        id: 'package:example/values.dart::Widget',
        name: 'Widget',
      );
      for (final type in [
        const FlaxCodegenTypeRef(
          'object',
          id: 'package:example/values.dart::Box',
          name: 'Box',
          dartArguments: [widget],
        ),
        const FlaxCodegenTypeRef(
          'object',
          id: 'package:example/values.dart::Box',
          name: 'Box',
          tsArguments: [widget],
        ),
        const FlaxCodegenTypeRef('any', declaration: widget),
      ]) {
        final values = FlaxCodegenTopLevelModel('Values', [
          FlaxCodegenTopLevelGetterModel(
            'package:example/values.dart::value',
            'value',
            type,
            FlaxCodegenReadonlyKind.getter,
          ),
        ]);
        expect(
          values.validate,
          throwsA(
            isA<StateError>().having(
              (error) => error.message,
              'message',
              contains('Unsupported top-level ownership'),
            ),
          ),
        );
      }
    },
  );
}

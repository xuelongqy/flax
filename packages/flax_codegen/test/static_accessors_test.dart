import 'dart:io';

import 'package:analyzer/dart/analysis/analysis_context_collection.dart';
import 'package:analyzer/dart/analysis/results.dart';
import 'package:analyzer/dart/element/element.dart';

import '../../flax/test/fixtures/static_accessors_selection.dart';
import 'generator_test.dart' show compileFixture;

import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

void main() {
  var root = Directory.current;
  while (!Directory(p.join(root.path, 'packages/flax_codegen')).existsSync()) {
    root = root.parent;
  }
  final uri = Uri.file(
    p.join(
      root.path,
      'packages/flax_codegen/test/fixtures/capability/static_values.dart',
    ),
  ).toString();
  FlaxCodegenBindingConfig config(
    String members, {
    String name = 'StaticValues',
  }) => FlaxCodegenBindingConfig.parseStrict('''
format: 2
name: statics
library: '$uri'
jsPackage: '@example/statics'
dartOutput: unused.dart
tsOutput: unused.ts
classes:
  $name:
    kind: object
    $members
''');

  Future<FlaxCodegenModuleModel> parse(
    String members, {
    String name = 'StaticValues',
  }) async {
    final parser = FlaxCodegenBindingParser(root.path);
    try {
      return await parser.parse(config(members, name: name));
    } finally {
      await parser.dispose();
    }
  }

  test(
    'paired static access preserves independent read and write types',
    () async {
      final module = await parse(
        '''staticGetters: [count, tracked, delayed, optional]
    staticSetters: [count, tracked, delayed, optional, writeOnly]''',
      );
      final type = module.classes.single;
      expect(
        type.staticGetters.firstWhere((g) => g.name == 'tracked').type.kind,
        'int',
      );
      expect(
        type.staticSetters.firstWhere((g) => g.name == 'tracked').type.kind,
        'num',
      );
      expect(type.staticGetters.any((g) => g.name == 'writeOnly'), isFalse);
      final emitter = FlaxCodegenBindingEmitter([module]);
      final dart = emitter.dart(module);
      final ts = emitter.typescript(module);
      expect(dart, contains('StaticValues.count ='));
      expect(dart, contains('FlaxFunctionBinding('));
      expect(ts, contains('export function setTracked(value: number): void'));
      expect(ts, contains('export declare const count: number'));
      expect(ts, contains('invokeTopLevel('));
      expect(ts, isNot(contains('invokeObjectStatic("$uri::StaticValues"')));
    },
  );

  test(
    'setter-only classes have a real namespace without a constructor',
    () async {
      final module = await parse(
        'staticSetters: [sink]',
        name: 'StaticSetterOnly',
      );
      final ts = FlaxCodegenBindingEmitter([module]).typescript(module);
      expect(ts, contains('namespace _StaticSetterOnlyFactory'));
      expect(ts, contains('export function setSink(value: number): void'));
      expect(ts, isNot(contains('function StaticSetterOnly(')));
    },
  );

  for (final name in [
    'constant',
    'frozen',
    'once',
    'readOnly',
    '_hidden',
    'instance',
    'missing',
  ]) {
    test('rejects invalid static write $name', () async {
      await expectLater(parse('staticSetters: [$name]'), throwsStateError);
    });
  }
  test('statics are not inherited', () async {
    await expectLater(
      parse('staticGetters: [count]', name: 'StaticChild'),
      throwsStateError,
    );
    await expectLater(
      parse('staticSetters: [count]', name: 'StaticChild'),
      throwsStateError,
    );
  });
  test('generated setter cannot replace a selected static method', () async {
    await expectLater(
      parse('''staticSetters: [count]
    methods: {setCount: [value]}''', name: 'StaticCollision'),
      throwsStateError,
    );
  });
  test(
    'generated Dart calls and strict TypeScript preserve static semantics',
    () async {
      final module = await parse(
        """staticGetters: [count, tracked, delayed, optional]
    staticSetters: [count, tracked, delayed, optional, writeOnly]""",
      );
      await compileFixture(
        root.path,
        FlaxCodegenBindingEmitter([module]),
        module,
        consumerSource: """
import { StaticValues } from './plugin.js';
const current: number = StaticValues.count;
StaticValues.setTracked(2.5);
StaticValues.setOptional(null);
// @ts-expect-error Static reads are readonly.
StaticValues.count = 3;
// @ts-expect-error Undefined is not a static value.
StaticValues.setOptional(undefined);
// @ts-expect-error Setter inputs use their actual type.
StaticValues.setCount('bad');
// @ts-expect-error Setters require exactly one argument.
StaticValues.setCount();
// @ts-expect-error Setters require exactly one argument.
StaticValues.setCount(1, 2);
""",
        dartTestSource: """
void main() {
  test('generated static operations are live and synchronous', () {
    dynamic invoke(String name, [Map<String, Object?> values = const {}]) =>
      staticsBindings.functions.singleWhere((function) => function.id.endsWith('::StaticValues.\$name')).invoke(values);
    expect(() => invoke('delayed'), throwsA(isA<Error>()));
    invoke('count=', {'value': 4});
    expect(invoke('count'), 4);
    expect(invoke('tracked'), 4);
    expect(invoke('tracked'), 4);
    expect(api.StaticValues.reads, 2);
    invoke('tracked=', {'value': 2.5});
    expect(api.StaticValues.writes, 1);
    expect(invoke('count'), 3);
    expect(() => invoke('tracked=', {'value': -1}), throwsStateError);
    expect(api.StaticValues.writes, 2);
    invoke('optional=', {'value': null});
    expect(invoke('optional'), isNull);
    invoke('delayed=', {'value': 11});
    expect(invoke('delayed'), 11);
    invoke('writeOnly=', {'value': 17});
    expect(invoke('count'), 17);
  });
}
""",
      );
    },
  );

  test('all supported static owners compile, including automatic Widget interfaces', () async {
    final parser = FlaxCodegenBindingParser(root.path);
    addTearDown(parser.dispose);
    final coreConfig = FlaxCodegenBindingConfig.read(
      p.join(root.path, 'packages/flax/bindings/config.yaml'),
    );
    final seed = FlaxCodegenBindingConfig(
      'static_accessors',
      Uri.file(
        p.join(root.path, 'packages/flax/test/fixtures/static_accessors.dart'),
      ).toString(),
      '@test/static_accessors',
      'unused.dart',
      'unused.ts',
      {
        ...staticAccessorsSelection,
        'StaticProxy': const FlaxCodegenClassSelection(
          {'': []},
          kind: 'object',
          proxy: 'extends',
          jsName: 'CreateStaticProxy',
          staticGetters: ['count'],
          staticSetters: ['count'],
        ),
      }..remove('StaticInterface'),
    );
    await parser.prepare([seed, coreConfig]);
    final core = await parser.parse(coreConfig);
    parser.prepareModules([core]);
    final proposal = await parser.proposeLibrary(seed);
    final interface = proposal.config.classes['StaticInterface']!;
    expect(interface.kind, 'widgetInterface');
    expect(interface.staticGetters, ['count']);
    expect(interface.staticSetters, ['count']);
    final module = await parser.parse(proposal.config);
    final emitter = FlaxCodegenBindingEmitter([module, core]);
    await compileFixture(
      root.path,
      emitter,
      module,
      consumerSource: """
import * as statics from './plugin.js';
for (const owner of [statics.StaticWidget, statics.StaticState, statics.StaticRoute,
  statics.StaticPage, statics.StaticStream, statics.StaticMembers,
  statics.StaticInterface, statics.StaticProxy]) {
  owner.setCount(23);
  const current: number = owner.count;
}
const unknown: unknown = {};
if (unknown instanceof statics.StaticMembers) {
  const member: statics.StaticMembers<string> = unknown;
}
class StaticPeer extends statics.CreateStaticProxy {}
const peer = new StaticPeer();
statics.StaticCounter.setTokens([statics.StaticToken(12)]);
const token: statics.StaticToken = statics.StaticCounter.tokens.get(0);
statics.StaticCounter.setRecord({\$1: 5, label: 'static record'});
statics.StaticCounter.setTransform(value => value * 2);
statics.StaticCounter.setLater(Promise.resolve(13));
const later: Promise<number> = statics.StaticCounter.later;
const renamed: number = statics.StaticRenamedWidget.count;
statics.MakeStaticWidget();
// @ts-expect-error A renamed constructor does not make the static property writable.
statics.StaticRenamedWidget.count = 1;
// @ts-expect-error Static properties stay readonly on native Widget interfaces.
statics.StaticInterface.count = 1;
// @ts-expect-error Static setters are independent of owner construction and type parameters.
statics.StaticStream.setCount('bad');
""",
    );
  });

  for (final selected in [
    (
      'StaticConstructorCollision',
      "constructors: {setCount: []}\n    staticSetters: [count]",
    ),
    ('StaticCaseCollision', 'staticSetters: [count, Count]'),
  ]) {
    test('rejects static export collision on ${selected.$1}', () async {
      await expectLater(
        parse(selected.$2, name: selected.$1),
        throwsStateError,
      );
    });
  }

  test('automatic static discovery and providers require independent write capability', () async {
    final collection = AnalysisContextCollection(includedPaths: [root.path]);
    addTearDown(collection.dispose);
    final library =
        await collection.contexts.first.currentSession.getLibraryByUri(uri)
            as LibraryElementResult;
    final element = library.element.exportNamespace.get2(
      'StaticValues',
    ) as InterfaceElement;
    final seed = config('staticGetters: [count]');
    final initialParser = FlaxCodegenBindingParser(root.path);
    addTearDown(initialParser.dispose);
    final proposal = await initialParser.proposeSelection(
      element,
      library: seed,
    );
    expect(
      proposal.selection!.staticGetters,
      containsAll(['count', 'tracked', 'constant']),
    );
    expect(
      proposal.selection!.staticSetters,
      containsAll(['count', 'tracked', 'writeOnly']),
    );
    expect(proposal.selection!.staticSetters, isNot(contains('frozen')));
    final complete = await initialParser.parse(
      FlaxCodegenBindingConfig(
        'statics',
        uri,
        '@example/statics',
        'unused.dart',
        'unused.ts',
        {'StaticValues': proposal.selection!},
      ),
    );
    final readonly = await parse('staticGetters: [count]');
    for (final available in [readonly, complete]) {
      final parser = FlaxCodegenBindingParser(root.path);
      addTearDown(parser.dispose);
      parser.prepareModules([
        FlaxCodegenModuleModel(
          name: available.name,
          library: available.library,
          jsPackage: available.jsPackage,
          dartOutput: available.dartOutput,
          tsOutput: available.tsOutput,
          classes: available.classes,
          types: available.types,
          moduleId: 'example.provider/statics',
        ),
      ]);
      final requested = await parser.proposeSelection(element, library: seed);
      if (identical(available, complete)) {
        expect(requested.reusesProvider, isTrue);
        expect(requested.selection, isNull);
      } else {
        expect(requested.reusesProvider, isFalse);
        expect(requested.selection!.staticSetters, contains('count'));
        final model = await parser.parse(
          FlaxCodegenBindingConfig(
            'statics',
            uri,
            '@example/consumer',
            'unused.dart',
            'unused.ts',
            {'StaticValues': requested.selection!},
          ),
        );
        expect(
          model.classes.single.staticSetters.map((setter) => setter.name),
          contains('count'),
        );
      }
    }
    final collision = library.element.exportNamespace.get2(
      'StaticCollision',
    ) as InterfaceElement;
    final rejected = await initialParser.proposeSelection(
      collision,
      library: seed,
    );
    expect(rejected.selection!.staticSetters, isEmpty);
    expect(
      rejected.skips.map((skip) => skip.code),
      contains('static_setter_export_collision'),
    );
  });
}

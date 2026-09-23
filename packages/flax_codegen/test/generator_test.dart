import 'fixtures/widget_interfaces_selection.dart';
import 'fixtures/interop_selection.dart';
import 'fixtures/functions_selection.dart';
import 'fixtures/repeated_selection.dart';

import 'dart:convert';
import 'dart:io';

import 'package:analyzer/dart/analysis/utilities.dart';
import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

void main() {
  final root = p.normalize(p.join(Directory.current.path, '../..'));
  test(
    'top-level functions share typed calls and preserve public exports',
    () async {
      final parser = FlaxCodegenBindingParser(root);
      addTearDown(parser.dispose);
      final coreConfig = FlaxCodegenBindingConfig.read(
        p.join(root, 'packages/flax/bindings/config.yaml'),
      );
      final config = FlaxCodegenBindingConfig(
        'plugin',
        Uri.file(
          p.join(
            Directory.current.path,
            'test/fixtures/plugin/functions_export.dart',
          ),
        ).toString(),
        '@example/functions',
        'unused.dart',
        'unused.ts',
        functionClasses,
        functions: functionSelections,
        additionalLibraries: [
          Uri.file(
            p.join(
              Directory.current.path,
              'test/fixtures/plugin/functions.dart',
            ),
          ).toString(),
        ],
      );
      await parser.prepare([config, coreConfig]);
      final core = await parser.parse(coreConfig);
      final module = await parser.parse(config);
      final emitter = FlaxCodegenBindingEmitter([module, core]);
      expect(module.functions.length, functionSelections.length);
      expect(
        module.functions.singleWhere((f) => f.id.endsWith('::addValues')).id,
        endsWith('functions.dart::addValues'),
      );
      expect(emitter.dart(module), contains('api.openFixturePanel('));
      await compileFixture(
        root,
        emitter,
        module,
        consumerSource: """
import {FunctionToken, addValues, invokeTopLevel, echoToken, mapNumbers, multiplyBy, finishLater, copyData, openFixturePanel, callAsync, callNamedCallback, callDebugPrinter} from './plugin.js';
const helperName: number = invokeTopLevel(3);
const token: FunctionToken = echoToken(FunctionToken(3));
const sum: number = addValues(1, undefined);
const value: number = multiplyBy(2)(3);
const pending: Promise<number | null> = finishLater({empty: true});
const callbackResult: Promise<number> = callAsync(1, async value => value + 1);
const namedCallbackResult: number = callNamedCallback(({value}) => value + 1);
callDebugPrinter((message, options) => {
  const width: number | null | undefined = options?.wrapWidth;
});
const data = copyData({items: [1, null]});
mapNumbers([1, 2], n => n + 1);
// @ts-expect-error Callback arguments use Dart output collection semantics.
mapNumbers([1], (n: string) => 0);
// @ts-expect-error Top-level data calls do not accept object references.
copyData(token);
""",
      );
      final only = FlaxCodegenBindingConfig.fromMap({
        'name': 'only',
        'library': config.library,
        'jsPackage': '@example/only',
        'dartOutput': 'unused',
        'tsOutput': 'unused',
        'functions': {
          'addValues': {
            'parameters': ['left', 'right'],
          },
        },
      });
      final single = await parser.parse(only);
      expect(single.classes, isEmpty);
      await compileFixture(root, FlaxCodegenBindingEmitter([single]), single);
      expect(
        () => FlaxCodegenBindingEmitter([module, module, core]),
        throwsStateError,
      );
      await expectLater(
        parser.parse(
          FlaxCodegenBindingConfig(
            'conflict',
            config.library,
            '@example/conflict',
            '',
            '',
            {},
            functions: const {
              'addValues': FlaxCodegenFunctionSelection(['left', 'right']),
            },
            additionalLibraries: [
              Uri.file(
                p.join(
                  Directory.current.path,
                  'test/fixtures/plugin/functions_conflict.dart',
                ),
              ).toString(),
            ],
          ),
        ),
        throwsStateError,
      );
      for (final functions in [
        {'absent': const FlaxCodegenFunctionSelection([])},
        {'FunctionToken': const FlaxCodegenFunctionSelection([])},
        {
          'echoToken': const FlaxCodegenFunctionSelection(
            ['value'],
            typeArguments: ['Object?'],
          ),
        },
        {
          'exchange': const FlaxCodegenFunctionSelection(
            ['value'],
            dataParameters: ['absent'],
          ),
        },
        {
          'nullableRoute': const FlaxCodegenFunctionSelection([
            'origin',
            'content',
            'root',
          ], route: FlaxCodegenRouteCallModel('origin', 'root', ['content'])),
        },
        {
          'openFixturePanel': const FlaxCodegenFunctionSelection([
            'origin',
            'content',
            'root',
            'failAfterPush',
          ], route: FlaxCodegenRouteCallModel('origin', 'root', ['absent'])),
        },
        {
          'addValues': const FlaxCodegenFunctionSelection(['left', 'left']),
        },
        {
          'addValues': const FlaxCodegenFunctionSelection([
            'left',
            'right',
          ], dataResult: true),
        },
        {
          'openFixturePanel': const FlaxCodegenFunctionSelection([
            'origin',
            'content',
            'root',
            'failAfterPush',
          ]),
        },
        {
          'invalidRoute': const FlaxCodegenFunctionSelection([
            'origin',
            'content',
            'root',
          ], route: FlaxCodegenRouteCallModel('origin', 'root', ['content'])),
        },
      ]) {
        final invalid = FlaxCodegenBindingConfig(
          'bad',
          config.library,
          '@bad',
          '',
          '',
          functionClasses,
          functions: functions,
        );
        await expectLater(parser.parse(invalid), throwsStateError);
      }
    },
    timeout: const Timeout(Duration(minutes: 2)),
  );

  late FlaxCodegenBindingParser parser;
  setUp(() => parser = FlaxCodegenBindingParser(root));
  tearDown(() => parser.dispose());
  FlaxCodegenBindingConfig fixture(
    String filename,
    Map<String, FlaxCodegenClassSelection> classes,
  ) => FlaxCodegenBindingConfig(
    'plugin',
    Uri.file(p.join(Directory.current.path, 'test/fixtures/plugin', filename))
        .toString(),
    '@example/plugin',
    'unused.dart',
    'unused.ts',
    classes,
  );

  test(
    'Widget interfaces generate fixed native configuration and typed inputs',
    () async {
      final module = await parser.parse(
        fixture('widget_interfaces.dart', widgetInterfacesSelection),
      );
      final emitter = FlaxCodegenBindingEmitter([module]);
      final dart = emitter.dart(module);
      expect(dart, contains('implements api.LabelledContract'));
      expect(dart, contains('LabelledContract).extent'));
      expect(dart, contains('fixedArguments: true'));
      await compileFixture(
        root,
        emitter,
        module,
        consumerSource: """
import {ExtentTile, ExtentFrame, ExtentProbe, type ExtentContract} from './plugin.js';
import type {Bindable} from '@flax/core/bindings';
declare const bound: Exclude<Bindable<number>, number>;
const tile = ExtentTile({child: ExtentProbe.plain});
const contract: ExtentContract = tile;
ExtentFrame({item: tile, items: [tile, ExtentProbe.native]});
// @ts-expect-error An arbitrary native Widget does not claim a narrower interface.
ExtentFrame({item: ExtentProbe.plain});
// @ts-expect-error Fixed Widget configuration cannot subscribe directly.
ExtentTile({extent: bound, child: tile});
// @ts-expect-error Interface getters are native configuration, not descriptor fields.
const size = tile.extent;
""",
      );
      for (final selection in [
        {
          'ExtentContract': const FlaxCodegenClassSelection(
            {},
            kind: 'widgetInterface',
          ),
        },
        {
          'InvalidContract': const FlaxCodegenClassSelection(
            {},
            kind: 'widgetInterface',
          ),
        },
        {
          ...widgetInterfacesSelection,
          'ExtentFrame': const FlaxCodegenClassSelection(
            {
              '': ['item'],
            },
            widgetInterfaces: ['ExtentContract'],
          ),
        },
        {
          ...widgetInterfacesSelection,
          'CallbackTile': const FlaxCodegenClassSelection(
            {
              '': ['callback'],
            },
            widgetInterfaces: ['ExtentContract'],
          ),
        },
        {
          ...widgetInterfacesSelection,
          'ExtentTile': const FlaxCodegenClassSelection(
            {
              '': ['child'],
            },
            widgetInterfaces: ['ExtentContract', 'ExtentContract'],
          ),
        },
      ]) {
        await expectLater(
          parser.parse(fixture('widget_interfaces.dart', selection)),
          throwsStateError,
        );
      }
    },
  );

  test('Widget interface declarations resolve across modules and configuration order', () async {
    final library = fixture('widget_interfaces.dart', {}).library;
    final contracts = FlaxCodegenBindingConfig(
      'contracts',
      library,
      '@example/contracts',
      'unused.dart',
      'unused.ts',
      {
        for (final name in ['ExtentContract', 'LabelledContract'])
          name: widgetInterfacesSelection[name]!,
      },
    );
    final implementation = FlaxCodegenBindingConfig(
      'plugin',
      library,
      '@example/plugin',
      'unused.dart',
      'unused.ts',
      {
        for (final e in widgetInterfacesSelection.entries)
          if (!contracts.classes.containsKey(e.key)) e.key: e.value,
      },
    );
    await parser.prepare([implementation, contracts]);
    final plugin = await parser.parse(implementation);
    final contract = await parser.parse(contracts);
    final emitter = FlaxCodegenBindingEmitter([plugin, contract]);
    await compileFixture(
      root,
      emitter,
      plugin,
      consumerSource: """
import {ExtentTile, ExtentFrame, ExtentProbe} from './plugin.js';
import type {ExtentContract} from '@example/contracts';
const item: ExtentContract = ExtentTile({child: ExtentProbe.plain});
ExtentFrame({item});
""",
    );
  });

  test('returned functions compile both conversion directions', () async {
    final widgetCallbacks = await parser.parse(
      fixture('repeated.dart', {
        'BuildContext': repeatedSelection['BuildContext']!,
        'UnsupportedWidgetCollection': const FlaxCodegenClassSelection(
          {},
          kind: 'object',
          getters: ['render'],
        ),
      }),
    );
    final widgetEmitter = FlaxCodegenBindingEmitter([widgetCallbacks]);
    expect(widgetEmitter.dart(widgetCallbacks), contains('FlaxTypeRef("list"'));

    final module = await parser.parse(
      fixture('interop.dart', interopSelection),
    );
    final emitter = FlaxCodegenBindingEmitter([module]);
    final dart = emitter.dart(module);
    expect(
      dart,
      contains(
        'Invoke(Object function, List<Object?> positional, '
        'Map<String, Object?> named)',
      ),
    );
    expect(dart, isNot(contains('Function.apply')));
    await compileFixture(
      root,
      emitter,
      module,
      consumerSource: """
import {AsyncCallbacks, AsyncContract, DeferredValues, GenericContract, GenericFunctionCollections, Mode, Token, UnsupportedFunctionResults} from './plugin.js';
const value = DeferredValues();
const callback = value.transforms.get(0);
const result: number = callback([1, 2]).get(0);
value.transforms.add(items => [items.get(0)]);
value.passTransforms([items => [items.get(0)]]);
const missing: Promise<number> | null = value.absent;
const later: Promise<() => number> = value.laterFunction;
const returnedAsync: () => Promise<number> = UnsupportedFunctionResults().asynchronous;
const returned = UnsupportedFunctionResults();
const optionalResult: number = returned.optional();
const optionalPairResult: number = returned.optionalPair(undefined);
const namedResult: string = returned.named(1, {label: 'value'});
const genericToken: Token = returned.generic(Token(1));
const genericPending: Promise<Token> = returned.genericAsync(Token(1));
const callbacks = AsyncCallbacks(async value => value + 1, {
  optional: () => Promise.resolve(2),
});
const applied: Promise<number> = callbacks.apply(1);
const optional: Promise<number> | null = callbacks.applyOptional();
const nullable: Promise<number | null> = callbacks.runNullable(async () => null);
const mode: Promise<Mode> = callbacks.runMode(async value => value, Mode.first);
const laterCallback: Promise<() => number> = callbacks.runCallback(async () => () => 3);
const echoed: (value: number) => Promise<number> = callbacks.echo(async value => value);
const contract = AsyncContract.implement([], {
  read(): Promise<number> { return Promise.resolve(3); },
});
const genericContract = GenericContract.implement([], {
  read: <T extends Token>(value: T): T => value,
  choose: <T extends Token, U extends T>(_first: T, second: U): U => second,
  numeric: <T extends number>(value: T): T => value,
  later: async <T extends Token>(value: T): Promise<T> => value,
  optional: (value = 5): number => value,
  named: (value, {label, count}): string =>
    String(value) + ':' + label + ':' + String(count ?? -1),
});
const genericFunctions = GenericFunctionCollections();
const genericFromList: <T extends Token>(value: T) => T = genericFunctions.callbacks.get(0);
genericFunctions.callbacks.add(<T extends Token>(value: T): T => value);
const genericFromMap: <T extends Token>(value: T) => T = genericFunctions.mapping.get('identity')!;
const echoedGenerics = genericFunctions.echo(genericFunctions.callbacks);
// @ts-expect-error Returned functions accept the real element type.
callback(['wrong']);
// @ts-expect-error JS callbacks receive DartList, not a JS Array.
value.transforms.add((items: number[]) => items);
// @ts-expect-error Returning an Array does not make the result an Array.
const wrong: number[] = callback([1]);
""",
    );
  }, timeout: const Timeout(Duration(minutes: 3)));

  test(
    'Future callback results emit typed Promise to Future adapters',
    () async {
      final module = await parser.parse(
        fixture('interop.dart', interopSelection),
      );
      expect(
        module.classes
            .singleWhere((type) => type.name == 'DeferredProperty')
            .methods
            .singleWhere((method) => method.name == 'resolveWith')
            .deferredFactory,
        isTrue,
      );
      expect(
        module.classes
            .singleWhere((type) => type.name == 'SharedDeferredProperty')
            .methods
            .singleWhere((method) => method.name == 'resolveWith')
            .deferredFactory,
        isTrue,
      );
      final emitter = FlaxCodegenBindingEmitter([module]);
      final dart = emitter.dart(module);
      expect(dart, contains('as Future<Object?>).then<int>'));
      expect(dart, contains('as Future<Object?>).then<void>'));
      expect(dart, contains('if (result == null) return null;'));
      final callbacks = module.classes.singleWhere(
        (type) => type.name == 'AsyncCallbacks',
      );
      expect(
        callbacks.constructors.single.parameters.first.type.result!.kind,
        'future',
      );
      expect(
        callbacks.methods
            .singleWhere((method) => method.name == 'echo')
            .result
            .kind,
        'callback',
      );
      await compileFixture(
        root,
        emitter,
        module,
        consumerSource: '''
import { AsyncCallbacks, AsyncContract, Mode, Token } from './plugin.js';
const callbacks = AsyncCallbacks(async value => value + 1, {
  optional: () => null,
});
callbacks.callbacks.add(async value => value * 2);
callbacks.mapping.set('double', async value => value * 2);
const result: Promise<number> = callbacks.apply(1);
const optional: Promise<number> | null = callbacks.applyOptional();
const nullable: Promise<number | null> = callbacks.runNullable(async () => null);
const mode: Promise<Mode> = callbacks.runMode(async value => value, Mode.first);
const laterCallback: Promise<() => number> = callbacks.runCallback(async () => () => 3);
const laterAsyncCallback: Promise<() => Promise<number>> =
  callbacks.runAsyncCallback(async () => async () => 4);
const token: Promise<Token | null> = callbacks.runToken(
  async value => value,
  Token(1),
);
const values: Promise<import('@flax/core/bindings').DartList<number>> =
  callbacks.runList(async values => values, [1, 2]);
const data = callbacks.runData(async value => value, {value: 1});
const contract = AsyncContract.implement([], {
  read(): Promise<number> { return Promise.resolve(4); },
});
''',
      );
    },
    timeout: const Timeout(Duration(minutes: 3)),
  );

  test('Future inputs and FutureOr callback results generate', () async {
    final module = await parser.parse(
      fixture('interop.dart', {
        'UnsupportedAsyncCallbacks': const FlaxCodegenClassSelection(
          {'': []},
          kind: 'object',
          instanceMethods: {
            'futureParameter': ['callback'],
            'futureCollection': ['callback'],
            'futureOr': ['callback'],
          },
        ),
      }),
    );
    final selected = module.classes.single;
    expect(
      selected.methods
          .singleWhere((method) => method.name == 'futureParameter')
          .parameters
          .single
          .type
          .parameters
          .single
          .type
          .kind,
      'future',
    );
    expect(
      selected.methods
          .singleWhere((method) => method.name == 'futureOr')
          .parameters
          .single
          .type
          .result!
          .kind,
      'futureOr',
    );
    await compileFixture(root, FlaxCodegenBindingEmitter([module]), module);
  });

  test(
    'nested Future and FutureOr callback shapes generate recursively',
    () async {
      final module = await parser.parse(
        fixture('interop.dart', {
          'UnsupportedAsyncCallbacks': const FlaxCodegenClassSelection(
            {'': []},
            kind: 'object',
            instanceMethods: {
              'nested': ['callback'],
              'nestedFutureOr': ['callback'],
              'futureOrNested': ['callback'],
              'nestedList': ['callback'],
              'nestedMap': ['callback'],
              'nestedRecord': ['callback'],
              'deeplyNested': ['callback'],
              'genericNested': ['value', 'callback'],
              'nullableNested': ['callback'],
            },
            methodTypeArguments: {
              'genericNested': ['int'],
            },
          ),
        }),
      );
      final selected = module.classes.single;
      final methods = {
        for (final method in selected.methods) method.name: method,
      };

      expect(methods['nested']!.result.kind, 'future');
      expect(methods['nested']!.result.item!.kind, 'future');
      expect(methods['nestedFutureOr']!.result.item!.kind, 'futureOr');
      expect(methods['futureOrNested']!.result.kind, 'futureOr');
      expect(methods['futureOrNested']!.result.item!.kind, 'future');
      expect(methods['nestedList']!.result.item!.item!.kind, 'future');
      expect(methods['nestedMap']!.result.item!.item!.kind, 'futureOr');
      final record = methods['nestedRecord']!.result.item!;
      expect(record.kind, 'record');
      expect(record.recordFields.map((field) => field.type.kind), [
        'future',
        'futureOr',
      ]);
      expect(methods['genericNested']!.result.item!.kind, 'futureOr');
      final nullable = methods['nullableNested']!.result;
      expect(nullable.nullable, isTrue);
      expect(nullable.item!.nullable, isTrue);
      expect(nullable.item!.item!.nullable, isTrue);

      final emitter = FlaxCodegenBindingEmitter([module]);
      final output = emitter.typescript(module);
      expect(output, contains('Promise<Promise<number>>'));
      expect(output, contains('Promise<number | Promise<number>>'));
      expect(
        output,
        contains(
          r'{ readonly $1: Promise<number>; readonly value: string | Promise<string> }',
        ),
      );
      await compileFixture(root, emitter, module);
    },
  );

  test('non-constructible mixins and Future/Stream getters compile', () async {
    final config = fixture('frames.dart', {
      'PulseBase': const FlaxCodegenClassSelection(
        {},
        kind: 'object',
        getters: ['count'],
      ),
      'Pulse': const FlaxCodegenClassSelection(
        {},
        kind: 'object',
        staticGetters: ['instance'],
        getters: ['completed', 'reading', 'ticks', 'labels'],
      ),
    });
    final module = await parser.parse(config);
    final pulse = module.classes.singleWhere((c) => c.name == 'Pulse');
    expect(pulse.constructors, isEmpty);
    final completed = pulse.getters.singleWhere((g) => g.name == 'completed');
    expect(completed.type.kind, 'future');
    expect(completed.type.item!.kind, 'void');
    final ticks = pulse.getters.singleWhere((g) => g.name == 'ticks');
    expect(ticks.type.kind, 'stream');
    expect(ticks.type.item!.kind, 'int');
    final labels = pulse.getters.singleWhere((g) => g.name == 'labels');
    expect(labels.type.kind, 'stream');
    expect(labels.type.item!.kind, 'String');
    final emitter = FlaxCodegenBindingEmitter([module]);
    expect(emitter.dart(module), contains('api.Pulse.instance'));
    expect(emitter.typescript(module), contains('export const Pulse = {}'));
    expect(emitter.typescript(module), contains('FlaxStreamReference<number>'));
    expect(emitter.typescript(module), contains('FlaxStreamReference<string>'));
    expect(emitter.dart(module), contains('FlaxTypeRef("stream"'));
    await compileFixture(
      root,
      emitter,
      module,
      consumerSource: """
import { Pulse } from './plugin.js';
import type { FlaxStreamReference } from '@flax/core/bindings';
const value: Promise<void> = Pulse.instance.completed;
const reading: Promise<number> = Pulse.instance.reading;
const ticks: FlaxStreamReference<number> = Pulse.instance.ticks;
const labels: FlaxStreamReference<string> = Pulse.instance.labels;
""",
    );
    for (final selected in [
      const FlaxCodegenClassSelection({'': []}, kind: 'object'),
      const FlaxCodegenClassSelection({}, kind: 'object', proxy: 'implements'),
    ]) {
      await expectLater(
        parser.parse(fixture('frames.dart', {'Pulse': selected})),
        throwsStateError,
      );
    }
  });

  test('Stream parameters generate typed references', () async {
    final coreConfig = FlaxCodegenBindingConfig.read(
      p.join(root, 'packages/flax/bindings/config.yaml'),
    );
    await parser.prepare([coreConfig]);
    final core = await parser.parse(coreConfig);
    final module = await parser.parse(
      fixture('types.dart', {
        'Tools': const FlaxCodegenClassSelection(
          {},
          methods: {
            'streamParameter': ['events'],
          },
        ),
      }),
    );
    final method = module.classes.single.methods.single;
    expect(method.parameters.single.type.kind, 'stream');
    expect(method.parameters.single.type.item!.kind, 'int');
    await compileFixture(
      root,
      FlaxCodegenBindingEmitter([module, core]),
      module,
    );
  });

  test('callback-scoped object parameters generate and validate', () async {
    final module = await parser.parse(
      fixture('interop.dart', {
        'ScopedSink': const FlaxCodegenClassSelection(
          {},
          kind: 'object',
          typeArguments: ['Object?'],
          instanceMethods: {
            'add': ['value'],
          },
        ),
        'ScopedTransformer': const FlaxCodegenClassSelection(
          {
            'fromHandler': ['handler'],
          },
          kind: 'object',
          typeArguments: ['Object?'],
          callbackScopedParameters: {
            'fromHandler.handler': [1],
          },
        ),
      }),
    );
    final handler = module.classes
        .singleWhere((type) => type.name == 'ScopedTransformer')
        .constructors
        .single
        .parameters
        .single
        .type;
    expect(handler.parameters[1].scoped, isTrue);
    final dart = FlaxCodegenBindingEmitter([module]).dart(module);
    expect(dart, contains('scoped: true'));
    await compileFixture(root, FlaxCodegenBindingEmitter([module]), module);

    for (final invalid in [
      const <int>[2],
      const <int>[0],
      const <int>[1, 1],
    ]) {
      await expectLater(
        parser.parse(
          fixture('interop.dart', {
            'ScopedSink': const FlaxCodegenClassSelection(
              {},
              kind: 'object',
              typeArguments: ['Object?'],
            ),
            'ScopedTransformer': FlaxCodegenClassSelection(
              const {
                'fromHandler': ['handler'],
              },
              kind: 'object',
              typeArguments: const ['Object?'],
              callbackScopedParameters: {'fromHandler.handler': invalid},
            ),
          }),
        ),
        throwsStateError,
      );
    }
  });

  test(
    'host proxies select concrete overrides and direct super calls',
    () async {
      for (final entry in {
        'DirectProcessor': true,
        'InterfaceProcessor': false,
        'MixedProcessor': true,
      }.entries) {
        final selected = await parser.parse(
          fixture('lifecycle.dart', {
            entry.key: const FlaxCodegenClassSelection(
              {},
              kind: 'object',
              proxy: 'host',
              proxyOverrides: ['attach'],
              proxySuper: ['attach'],
            ),
          }),
        );
        expect(
          selected.classes.single.proxy!.methods.single.mustCallSuper,
          entry.value,
          reason: entry.key,
        );
      }
      final config = fixture('lifecycle.dart', {
        'Processor': const FlaxCodegenClassSelection(
          {},
          kind: 'object',
          proxy: 'host',
          proxyOverrides: ['attach', 'normalize'],
          proxySuper: ['attach', 'normalize'],
        ),
      });
      final module = await parser.parse(config);
      final proxy = module.classes.single.proxy!;
      expect(
        proxy.methods.map((m) => m.name),
        containsAll(['attach', 'normalize', 'calculate']),
      );
      expect(
        proxy.methods.singleWhere((m) => m.name == 'attach').mustCallSuper,
        isTrue,
      );
      expect(
        proxy.methods.singleWhere((m) => m.name == 'normalize').mustCallSuper,
        isFalse,
      );
      await compileFixture(
        root,
        FlaxCodegenBindingEmitter([module]),
        module,
        consumerSource: """
import {ProcessorLifecycle} from './plugin.js';
class Processor extends ProcessorLifecycle {
  protected invokeSuper(name: string, args: readonly unknown[]): unknown { return 0; }
  calculate(value: number): number { return value; }
  attach(value: number): void { super.attach(value); }
}
new Processor().normalize(2);
// @ts-expect-error The real signature remains typed.
new Processor().attach('wrong');
""",
      );
      final directory = Directory(p.join(root, '.dart_tool/flax'))
          .createTempSync('host-proxy-');
      try {
        File(
          p.join(directory.path, 'proxy.dart'),
        ).writeAsStringSync(FlaxCodegenBindingEmitter([module]).dart(module));
        final test = File(p.join(directory.path, 'proxy_test.dart'))
          ..writeAsStringSync("""
import 'package:flutter_test/flutter_test.dart';
import '${module.library}';
import 'proxy.dart';
class Adapter extends Processor with FlaxProcessorProxy {
  @override Object? flaxInvoke(String method, List<Object?> args, {bool requiresSuper = false}) {
    if (method == 'calculate') return (args.single as int) * 2;
    if (requiresSuper != (method == 'attach')) throw StateError('Incorrect super constraint');
    calls.add('before');
    final result = flaxSuper(method, args);
    calls.add('after');
    return result;
  }
}
void main() {
  test('typed overrides preserve parent effects and return values', () {
    final value = Adapter();
    value.attach(3);
    expect(value.calls, ['before', 'middle:before', 'super:3', 'middle:after', 'after']);
    expect(value.normalize(2), 12);
    expect(value.calculate(5), 10);
    expect(() => value.flaxSuper('calculate', [1]), throwsArgumentError);
  });
}
""");
        final result = await Process.run('flutter', [
          'test',
          '--no-pub',
          test.path,
        ], workingDirectory: root);
        expect(
          result.exitCode,
          0,
          reason: '${result.stdout}\n${result.stderr}',
        );
      } finally {
        directory.deleteSync(recursive: true);
      }
      for (final bad in [
        const FlaxCodegenClassSelection(
          {},
          kind: 'object',
          proxy: 'host',
          proxyOverrides: ['attach'],
        ),
        const FlaxCodegenClassSelection(
          {},
          kind: 'object',
          proxy: 'host',
          proxyOverrides: ['missing'],
        ),
        const FlaxCodegenClassSelection(
          {},
          kind: 'object',
          proxy: 'host',
          proxySuper: ['calculate'],
        ),
        const FlaxCodegenClassSelection(
          {},
          kind: 'object',
          proxy: 'host',
          proxyOverrides: ['normalize', 'normalize'],
        ),
        const FlaxCodegenClassSelection(
          {},
          kind: 'object',
          proxy: 'host',
          proxySuper: ['normalize'],
        ),
      ]) {
        final invalid = FlaxCodegenBindingParser(root);
        try {
          await expectLater(
            invalid.parse(fixture('lifecycle.dart', {'Processor': bad})),
            throwsStateError,
          );
        } finally {
          invalid.dispose();
        }
      }
    },
  );

  test('non-finite numeric defaults compile and execute without class adapters', () async {
    final module = await parser.parse(
      fixture('numbers.dart', {
        'NumericDefaults': const FlaxCodegenClassSelection(
          {
            '': ['upper', 'lower', 'invalid', 'finite'],
          },
          kind: 'object',
          getters: ['upper', 'lower', 'invalid', 'finite'],
        ),
      }),
    );
    expect(
      module.classes.single.constructors.single.parameters.map(
        (p) => p.defaultCode,
      ),
      ['double.infinity', 'double.negativeInfinity', 'double.nan', '1.25'],
    );
    final emitter = FlaxCodegenBindingEmitter([module]);
    await compileFixture(root, emitter, module);
    final directory = Directory(p.join(root, '.dart_tool', 'flax'))
        .createTempSync('numeric-defaults-');
    try {
      final file = File(p.join(directory.path, 'numbers_test.dart'));
      file.writeAsStringSync(
        "import 'package:flutter_test/flutter_test.dart';\n${emitter.dart(module)}\n"
        r'''
void main() => test('numeric defaults', () {
  final binding = pluginBindings.types.single as FlaxObjectBinding;
  final defaults = {for (final p in binding.constructors['']!) p.name: p.defaultValue};
  final value = binding.create('', defaults) as api.NumericDefaults;
  if (value.upper != double.infinity || value.lower != double.negativeInfinity ||
      !value.invalid.isNaN || value.finite != 1.25) {
    throw StateError('Incorrect generated defaults');
  }
  final supplied = binding.create('', {...defaults, 'upper': 12.0}) as api.NumericDefaults;
  if (supplied.upper != 12) throw StateError('Explicit value lost');
});
''',
      );
      final result = await Process.run('flutter', [
        'test',
        '--no-pub',
        file.path,
      ], workingDirectory: Directory.current.path);
      expect(result.exitCode, 0, reason: '${result.stdout}\n${result.stderr}');
    } finally {
      directory.deleteSync(recursive: true);
    }
  });

  test('nested callback collections have distinct complete type ids and reject callback keys', () async {
    final module = await parser.parse(
      fixture('repeated.dart', repeatedSelection),
    );
    final emitter = FlaxCodegenBindingEmitter([module]);
    final output = emitter.dart(module);
    expect(output, contains('list:[callback:<>('));
    expect(output, contains(')->void:]'));
    await compileFixture(
      root,
      emitter,
      module,
      consumerSource: """
import { NestedBatch, CallbackStore } from './plugin.js';
const stored = CallbackStore([(context, index) => null]);
NestedBatch({builders: stored.builders, groups: new Map([['a', [(context, index) => null]]])});
NestedBatch({builders: CallbackStore.nativeBuilders, events: [async () => {}]});
// @ts-expect-error Nested builders are synchronous.
NestedBatch({builders: [async () => null]});
""",
    );
    await expectLater(
      parser.parse(
        fixture('repeated.dart', {
          'InvalidCallbackKeys': const FlaxCodegenClassSelection({
            '': ['values'],
          }, kind: 'object'),
        }),
      ),
      throwsStateError,
    );
  });

  test(
    'Widget results generate without independent callback configuration',
    () async {
      final module = await parser.parse(
        fixture('repeated.dart', repeatedSelection),
      );
      final batch = module.classes.singleWhere((c) => c.name == 'TileBatch');
      final render = batch.constructors.single.parameters.singleWhere(
        (p) => p.name == 'render',
      );
      expect(render.independentWidgetResult, isFalse);
      expect(render.type.result!.nullable, isTrue);
      expect(render.type.parameters.map((p) => p.type.kind), [
        'context',
        'int',
      ]);
      final emitter = FlaxCodegenBindingEmitter([module]);
      expect(
        emitter.dart(module),
        isNot(contains('independentWidgetResult: true')),
      );
      await compileFixture(
        root,
        emitter,
        module,
        consumerSource: """
import { TileBatch, WidgetCache, ChildConsumer, CallbackStore } from './plugin.js';
const cache = WidgetCache();
const child = TileBatch({render: () => null});
const widgets = CallbackStore.widgets;
widgets.get(0);
widgets.toArray();
// @ts-expect-error Widget collection views do not accept insertions.
widgets.add(child);
// @ts-expect-error Widget collection views do not accept replacements.
widgets.set(0, child);
cache.save(cache.wrap(child));
cache.transform(value => value)(child);
ChildConsumer({child, render: (context, child) => child ?? TileBatch({render: () => null})});
// @ts-expect-error A callback argument is a Widget, not a scalar.
cache.wrap(3);
// @ts-expect-error Widget conversions must return synchronously.
cache.transform(async value => value);
TileBatch({render: (context, index) => null, count: undefined});
// @ts-expect-error A Promise cannot be returned by a synchronous builder.
TileBatch({render: async () => null});
""",
      );
      final legacy = await parser.parse(
        fixture('repeated.dart', {
          'BuildContext': repeatedSelection['BuildContext']!,
          'TileBatch': const FlaxCodegenClassSelection(
            {
              '': ['render'],
            },
            independentWidgetCallbacks: {
              '': ['render'],
            },
          ),
        }),
      );
      expect(
        legacy.classes
            .singleWhere((type) => type.name == 'TileBatch')
            .constructors
            .single
            .parameters
            .single
            .independentWidgetResult,
        isTrue,
      );
      for (final invalid in [
        {
          'missing': ['render'],
        },
        {
          '': ['missing'],
        },
        {
          '': ['count'],
        },
        {
          '': ['render', 'render'],
        },
      ]) {
        await expectLater(
          parser.parse(
            fixture('repeated.dart', {
              'BuildContext': repeatedSelection['BuildContext']!,
              'TileBatch': FlaxCodegenClassSelection({
                '': ['render', 'count'],
              }, independentWidgetCallbacks: invalid),
            }),
          ),
          throwsStateError,
        );
      }
      await expectLater(
        parser.parse(
          fixture('interop.dart', {
            'Collections': const FlaxCodegenClassSelection(
              {'': []},
              kind: 'object',
              independentWidgetCallbacks: {'': []},
            ),
          }),
        ),
        throwsStateError,
      );
    },
  );

  test('decoration selections preserve public geometry and constructor defaults', () async {
    final module = await parser.parse(
      FlaxCodegenBindingConfig.read(
        p.join(root, 'packages/flax/bindings/config.yaml'),
      ),
    );
    FlaxCodegenClassModel selected(String name) =>
        module.classes.singleWhere((c) => c.name == name);
    for (final pair in [
      ('BoxDecoration', 'Decoration'),
      ('Border', 'BoxBorder'),
      ('BorderDirectional', 'BoxBorder'),
      ('BorderRadius', 'BorderRadiusGeometry'),
      ('BorderRadiusDirectional', 'BorderRadiusGeometry'),
      ('EdgeInsets', 'EdgeInsetsGeometry'),
      ('EdgeInsetsDirectional', 'EdgeInsetsGeometry'),
    ]) {
      expect(selected(pair.$1).supertypes, contains(selected(pair.$2).id));
      expect(selected(pair.$2).constructors, isEmpty);
    }
    final constraints = selected('BoxConstraints').constructors.first;
    expect(constraints.parameters.map((p) => p.defaultCode), [
      '0.0',
      'double.infinity',
      '0.0',
      'double.infinity',
    ]);
    for (final name in ['Border', 'BorderDirectional']) {
      expect(
        selected(name).constructors.first.parameters
            .every((p) => p.omitWhenAbsent),
        isTrue,
      );
    }
    expect(selected('BorderRadiusDirectional').methods, isEmpty);
    expect(
      module.types.where((t) => t.isEnum).map((t) => t.name),
      containsAll(['DecorationPosition', 'BoxShape', 'BorderStyle', 'Clip']),
    );
    final emitter = FlaxCodegenBindingEmitter([module]);
    await compileFixture(
      root,
      emitter,
      module,
      consumerSource: """
import { Container, DecoratedBox, DecorationPosition, BoxDecoration, BoxShape,
  Border, BorderDirectional, BorderSide, BorderStyle, Radius, BorderRadius,
  BorderRadiusDirectional, EdgeInsets, EdgeInsetsDirectional, BoxConstraints, Clip,
  type Decoration, type BoxBorder, type BorderRadiusGeometry, type EdgeInsetsGeometry } from './plugin.js';
const border: BoxBorder = BorderDirectional({start: BorderSide({width: 2, style: BorderStyle.solid})});
const radius: BorderRadiusGeometry = BorderRadiusDirectional.only({topStart: Radius.elliptical(8, 4)});
const padding: EdgeInsetsGeometry = EdgeInsetsDirectional.fromSTEB(1, 2, 3, 4);
const decoration: Decoration = BoxDecoration({border, borderRadius: radius});
Container({decoration, padding, margin: EdgeInsets.only({left: 3}), constraints: BoxConstraints(), clipBehavior: Clip.hardEdge});
DecoratedBox({decoration: BoxDecoration({shape: BoxShape.circle}), position: DecorationPosition.foreground});
Border({top: undefined, left: BorderSide.none});
Border.all({color: undefined});
BorderRadius.only({topLeft: Radius.zero}).copyWith({bottomLeft: Radius.circular(2)});
BoxConstraints.tightFor({width: undefined});
BoxConstraints.expand({height: 20});
// @ts-expect-error An abstract geometry is not constructible.
Decoration();
// @ts-expect-error Decoration is required.
DecoratedBox({});
// @ts-expect-error No synthetic directional copyWith API.
BorderRadiusDirectional.zero.copyWith({});
// @ts-expect-error Unselected transform is not accepted.
Container({transform: null});
""",
    );
    stdout.writeln(
      'Decoration constructor combinations: ${{
        for (final name in ['Container', 'DecoratedBox', 'BorderSide', 'Border', 'BorderDirectional', 'BorderRadius', 'BorderRadiusDirectional', 'BoxConstraints']) name: {for (final ctor in selected(name).constructors) ctor.name: 1 << ctor.parameters.where((p) => p.omitWhenAbsent).length},
      }}; Dart bytes=${utf8.encode(emitter.dart(module)).length}, TS bytes=${utf8.encode(emitter.typescript(module)).length}',
    );
  });

  test('layout selections preserve ParentData parameters and alignment defaults', () async {
    final module = await parser.parse(
      FlaxCodegenBindingConfig.read(
        p.join(root, 'packages/flax/bindings/config.yaml'),
      ),
    );
    FlaxCodegenClassModel selected(String name) =>
        module.classes.singleWhere((c) => c.name == name);
    final expanded = selected('Expanded').constructors.single.parameters;
    expect(expanded.map((p) => p.name), ['key', 'flex', 'child']);
    expect(expanded.singleWhere((p) => p.name == 'flex').defaultCode, '1');
    expect(expanded.last.required, isTrue);
    expect(expanded.last.type.nullable, isFalse);
    expect(
      selected('Flexible').constructors.single.parameters
          .singleWhere((p) => p.name == 'fit')
          .defaultCode,
      'FlexFit.loose',
    );
    for (final name in ['Stack', 'Align']) {
      final alignment = selected(name).constructors.single.parameters
          .singleWhere((p) => p.name == 'alignment');
      expect(alignment.type.id, selected('AlignmentGeometry').id);
      expect(alignment.type.nullable, isFalse);
      expect(alignment.omitWhenAbsent, isTrue);
    }
    expect(selected('AlignmentGeometry').constructors, isEmpty);
    for (final name in ['Alignment', 'AlignmentDirectional']) {
      final type = selected(name);
      expect(type.staticGetters, hasLength(9));
      expect(type.setters, isEmpty);
      expect(type.supertypes, contains(selected('AlignmentGeometry').id));
      expect(
        type.constructors.single.parameters.every((p) => p.positional),
        isTrue,
      );
    }
    final positioned = selected('Positioned').constructors.single;
    expect(positioned.name, '');
    expect(
      positioned.parameters
          .where((p) => p.type.kind == 'double')
          .every((p) => p.type.nullable),
      isTrue,
    );
    expect(
      module.types.where((t) => t.isEnum).map((t) => t.name),
      containsAll(['FlexFit', 'StackFit', 'Clip']),
    );
    await compileFixture(
      root,
      FlaxCodegenBindingEmitter([module]),
      module,
      consumerSource: """
import { Expanded, Flexible, Stack, Positioned, Align, Alignment, AlignmentDirectional,
  FlexFit, StackFit, Clip, Text, type AlignmentGeometry } from './plugin.js';
const child = Text('Child');
const alignment: AlignmentGeometry = AlignmentDirectional.topStart;
Stack({alignment, fit: StackFit.expand, clipBehavior: Clip.none, children: [
  Positioned({left: null, right: 2, width: 30, child}),
]});
Align({alignment: Alignment(0.5, -1), widthFactor: undefined, child});
Expanded({flex: undefined, child});
Flexible({fit: FlexFit.tight, child});
// @ts-expect-error Expanded owns its tight fit.
Expanded({fit: FlexFit.loose, child});
// @ts-expect-error Expanded requires a child.
Expanded({});
// @ts-expect-error Alignment is non-null.
Align({alignment: null});
// @ts-expect-error The abstract geometry has no JS constructor.
AlignmentGeometry();
""",
    );
    stdout.writeln(
      'Layout constructor call combinations: ${{
        for (final name in ['Expanded', 'Flexible', 'Stack', 'Positioned', 'Align']) name: 1 << selected(name).constructors.single.parameters.where((p) => p.omitWhenAbsent).length,
      }}',
    );
  });

  test('real public Flutter exports resolve inherited defaults and selected nullable arguments', () async {
    final module = await parser.parse(
      FlaxCodegenBindingConfig.read(
        p.join(root, 'packages/flax/bindings/config.yaml'),
      ),
    );
    final column = module.classes.singleWhere((type) => type.name == 'Column');
    final params = {
      for (final param in column.constructors.single.parameters)
        param.name: param,
    };
    expect(params['spacing']!.defaultCode, '0.0');
    expect(params['mainAxisAlignment']!.defaultCode, 'MainAxisAlignment.start');
    expect(
      params['children']!.defaultCode,
      'null',
    ); // The real constructor owns the default.
    expect(params['children']!.omitWhenAbsent, isTrue);
    final navigator = module.classes.singleWhere((c) => c.name == 'Navigator');
    expect(
      navigator.constructors.single.parameters
          .singleWhere((p) => p.name == 'pages')
          .omitWhenAbsent,
      isTrue,
    );
    expect(params['textDirection']!.type.nullable, isTrue);
    final text = module.classes.singleWhere((type) => type.name == 'Text');
    expect(text.constructors.single.parameters.first.positional, isTrue);
    expect(
      text.constructors.single.parameters.any((p) => p.name == 'style'),
      isTrue,
    );
    final material = await parser.parse(
      FlaxCodegenBindingConfig.read(
        p.join(root, 'packages/flax_material_ui/bindings/config.yaml'),
      ),
    );
    final key = module.types.singleWhere((t) => t.name == 'Key');
    final application = material.classes.singleWhere(
      (c) => c.name == 'MaterialApp',
    );
    final appParams = {
      for (final param in application.constructors.single.parameters)
        param.name: param,
    };
    expect(appParams.keys, [
      'key',
      'home',
      'navigatorObservers',
      'title',
      'theme',
      'darkTheme',
      'themeMode',
      'debugShowCheckedModeBanner',
    ]);
    expect(appParams['home']!.type.kind, 'widget');
    expect(appParams['home']!.type.nullable, isTrue);
    expect(appParams['themeMode']!.defaultCode, 'ThemeMode.system');
    expect(appParams['themeMode']!.type.nullable, isTrue);
    expect(appParams['debugShowCheckedModeBanner']!.defaultCode, 'true');
    expect(application.widgetInterfaces, isEmpty);
    expect(material.types.singleWhere((t) => t.name == 'Key').id, key.id);
    final emitter = FlaxCodegenBindingEmitter([module, material]);
    final materialTypescript = emitter
        .typescriptOutputs(material)
        .values
        .join('\n');
    expect(
      materialTypescript,
      contains("from '@flax/flutter/foundation/_bindings/flutter_Key'"),
    );
    expect(materialTypescript, isNot(contains('@flax/core/flutter')));
    expect(materialTypescript, isNot(contains('export interface Key')));
    final refresh = material.classes.singleWhere(
      (type) => type.name == 'RefreshIndicator',
    );
    final refreshParams = {
      for (final parameter in refresh.constructors.single.parameters)
        parameter.name: parameter,
    };
    expect(refreshParams.keys, ['key', 'onRefresh', 'child']);
    expect(refreshParams['onRefresh']!.type.result!.kind, 'future');
    expect(refreshParams['onRefresh']!.type.result!.item!.kind, 'void');
    expect(refreshParams['child']!.type.kind, 'widget');
    expect(
      materialTypescript,
      contains('onRefresh: Bindable<(() => Promise<void>)>'),
    );
    expect(() => FlaxCodegenBindingEmitter([module, module]), throwsStateError);
    final builder = module.classes.singleWhere((c) => c.name == 'Builder');
    final layout = module.classes.singleWhere((c) => c.name == 'LayoutBuilder');
    final callback = layout.constructors.single.parameters.last.type;
    expect(callback.parameters.map((p) => p.type.kind), ['context', 'object']);
    expect(callback.result!.kind, 'widget');
    expect(
      builder
          .constructors
          .single
          .parameters
          .last
          .type
          .parameters
          .single
          .type
          .name,
      'BuildContext',
    );
    final list = module.classes.singleWhere((c) => c.name == 'ListView');
    expect(list.constructors.single.name, 'builder');
    final listParams = {
      for (final p in list.constructors.single.parameters) p.name: p,
    };
    expect(listParams.length, 15);
    expect(listParams['itemBuilder']!.independentWidgetResult, isFalse);
    expect(listParams['itemBuilder']!.type.result!.nullable, isTrue);
    expect(listParams['itemBuilder']!.type.parameters.map((p) => p.type.kind), [
      'context',
      'int',
    ]);
    expect(
      listParams['findChildIndexCallback']!.type.parameters.single.type.name,
      'Key',
    );
    expect(listParams['findChildIndexCallback']!.type.result!.nullable, isTrue);
    expect(listParams['shrinkWrap']!.defaultCode, 'false');
    expect(listParams['addAutomaticKeepAlives']!.defaultCode, 'true');
    expect(
      listParams['controller']!.type.id,
      module.classes.singleWhere((c) => c.name == 'ScrollController').id,
    );
    expect(listParams['physics']!.type.kind, 'object');
    expect(listParams['physics']!.type.nullable, isTrue);
    expect(
      listParams['physics']!.type.id,
      module.classes.singleWhere((c) => c.name == 'ScrollPhysics').id,
    );
    final editing = module.classes.singleWhere(
      (c) => c.name == 'TextEditingValue',
    );
    expect(editing.kind, 'object');
    expect(
      editing.constructors.single.parameters
          .where((p) => p.omitWhenAbsent)
          .map((p) => p.name),
      ['selection', 'composing'],
    );
    final controller = module.classes.singleWhere(
      (c) => c.name == 'TextEditingController',
    );
    expect(
      controller.getters.singleWhere((g) => g.name == 'value').type.id,
      editing.id,
    );
    expect(
      controller.setters.singleWhere((g) => g.name == 'value').type.id,
      editing.id,
    );
    expect(module.typeLibraries['TextRange'], 'package:flutter/widgets.dart');
    final field = material.classes.singleWhere((c) => c.name == 'TextField');
    final decoration = field.constructors.single.parameters.singleWhere(
      (p) => p.name == 'decoration',
    );
    expect(decoration.omitWhenAbsent, isTrue);
    expect(decoration.type.nullable, isTrue);
    final style = module.classes.singleWhere((c) => c.name == 'TextStyle');
    expect(
      material.types.singleWhere((t) => t.name == 'TextStyle').id,
      style.id,
    );
    expect(style.setters, isEmpty);
    expect(style.methods.single.name, 'copyWith');
    expect(
      style.constructors.single.parameters
          .singleWhere((p) => p.name == 'inherit')
          .defaultCode,
      'true',
    );
    final weight = module.classes.singleWhere((c) => c.name == 'FontWeight');
    expect(weight.kind, 'object');
    expect(
      weight.staticGetters.map((g) => g.name),
      containsAll(['normal', 'bold', 'w700']),
    );
    expect(
      module.classes.singleWhere((c) => c.name == 'Color').id,
      'dart:ui::Color',
    );
    final imageFilter = module.classes.singleWhere(
      (c) => c.name == 'ImageFilter',
    );
    expect(imageFilter.id, 'dart:ui::ImageFilter');
    expect(
      imageFilter.constructors.map((constructor) => constructor.name),
      ['blur', 'dilate', 'erode', 'compose'],
    );
    expect(module.typeLibraries['ImageFilter'], 'package:flax/dart_ui.dart');
    final inputDecoration = material.classes.singleWhere(
      (c) => c.name == 'InputDecoration',
    );
    expect(inputDecoration.constructors.single.parameters, hasLength(12));
    expect(inputDecoration.methods.single.result.id, inputDecoration.id);
    final theme = material.classes.singleWhere((c) => c.name == 'Theme');
    expect(theme.kind, 'widget');
    expect(theme.methods.single.name, 'of');
    expect(theme.methods.single.parameters.single.type.kind, 'context');
    final themeData = material.classes.singleWhere(
      (c) => c.name == 'ThemeData',
    );
    expect(theme.methods.single.result.id, themeData.id);
    expect(themeData.constructors.single.parameters, hasLength(4));
    final colorScheme = material.classes.singleWhere(
      (c) => c.name == 'ColorScheme',
    );
    expect(colorScheme.constructors.single.name, 'fromSeed');
    expect(colorScheme.constructors.single.parameters.first.required, isTrue);
    expect(
      colorScheme.constructors.single.parameters.last.defaultCode,
      'Brightness.light',
    );
    final textTheme = material.classes.singleWhere(
      (c) => c.name == 'TextTheme',
    );
    expect(
      textTheme.getters.every((g) => g.type.id == style.id && g.type.nullable),
      isTrue,
    );
    expect(emitter.typescript(material), contains('data: Bindable<ThemeData>'));
    expect(
      emitter.typescript(material),
      isNot(contains('export interface Color ')),
    );
    final omitted = field.constructors.single.parameters.where(
      (p) => p.omitWhenAbsent,
    );
    expect(omitted.map((p) => p.name), ['decoration']);
    final calls = <String, int>{
      for (final type in [
        style,
        inputDecoration,
        theme,
        themeData,
        textTheme,
        colorScheme,
        field,
        list,
      ])
        for (final ctor in type.constructors)
          '${type.name}.${ctor.name}':
              1 << ctor.parameters.where((p) => p.omitWhenAbsent).length,
    };
    // Measure selected direct-call growth without adding a runtime dispatch path.
    stdout.writeln('Selected constructor call combinations: $calls');
    for (final (owner, current) in [
      (p.join(root, 'packages/flax'), module),
      (p.join(root, 'packages/flax_material_ui'), material),
    ]) {
      stdout.writeln(
        'Generated size: ${current.dartOutput} = '
        '${File(p.join(owner, current.dartOutput)).lengthSync()} bytes',
      );
      final outputs = emitter.typescriptOutputs(current);
      final totalBytes = outputs.values.fold<int>(
        0,
        (total, source) => total + utf8.encode(source).length,
      );
      stdout.writeln(
        'Generated TypeScript size: ${current.name} = $totalBytes bytes '
        'across ${outputs.length} files',
      );
    }
    expect(
      field.constructors.single.parameters
          .singleWhere((p) => p.name == 'onChanged')
          .type
          .parameters
          .single
          .type
          .kind,
      'String',
    );
    final context = module.classes.singleWhere((c) => c.name == 'BuildContext');
    expect(context.constructors, isEmpty);
    expect(context.getters.map((g) => g.name), ['mounted', 'size']);
    expect(context.getters.last.type.nullable, isTrue);
    expect(emitter.dart(module), contains('api.LayoutBuilder('));
    expect(
      emitter.dart(module),
      contains('api.BuildContext p0, api.BoxConstraints p1'),
    );
  }, timeout: const Timeout(Duration(minutes: 3)));

  test(
    'optional named inputs accept undefined with exact TypeScript properties',
    () async {
      final module = await parser.parse(
        fixture('optional.dart', {
          'Options': const FlaxCodegenClassSelection(
            {
              '': ['label', 'count'],
            },
            kind: 'object',
            methods: {
              'read': ['count'],
            },
            instanceMethods: {
              'copyWith': ['count'],
            },
          ),
          'Operation': const FlaxCodegenClassSelection(
            {
              '': ['count'],
            },
            kind: 'object',
            proxy: 'extends',
            instanceMethods: {
              'apply': ['value'],
            },
          ),
        }),
      );
      await compileFixture(
        root,
        FlaxCodegenBindingEmitter([module]),
        module,
        consumerSource: '''
      import {Options, Operation} from './plugin.js';
      const value = Options('label', {count: undefined});
      value.copyWith({count: undefined});
      Options.read({count: undefined});
      Operation.implement([{count: undefined}], {apply: value => value});
      // @ts-expect-error Required inputs still reject undefined.
      Options(undefined);
      // @ts-expect-error Optional does not mean untyped.
      value.copyWith({count: 'wrong'});
    ''',
      );
    },
  );

  test('independent plugin fixture emits constructors and shares re-export identities', () async {
    const selection = {
      'Badge': FlaxCodegenClassSelection({
        '': ['label', 'count', 'tone', 'note'],
      }),
    };
    final module = await parser.parse(fixture('public.dart', selection));
    final reexport = await parser.parse(fixture('reexport.dart', selection));
    final badge = module.classes.single;
    expect(badge.id, reexport.classes.single.id);
    expect(badge.id, contains('types.dart::Badge'));
    final params = {
      for (final param in badge.constructors.single.parameters)
        param.name: param,
    };
    expect(params['count']!.defaultCode, '7');
    expect(params['tone']!.defaultCode, 'Tone.quiet');
    expect(params['note']!.type.nullable, isTrue);
    expect(module.types.singleWhere((type) => type.isEnum).enumNames, [
      'quiet',
      'loud',
    ]);
    final emitter = FlaxCodegenBindingEmitter([module]);
    final dart = emitter.dart(module);
    expect(parseString(content: dart).errors, isEmpty);
    expect(dart, contains('api.Badge('));
    expect(dart, contains('defaultValue: 7'));
    expect(
      emitter.typescript(module),
      contains('export function Badge(label: string, options:'),
    );
    expect(emitter.typescript(module), contains('note?: string | null'));
  });

  test('unsupported required types, omitted required parameters and unknown selections fail', () async {
    await expectLater(
      parser.parse(
        fixture('public.dart', {
          'Unsupported': const FlaxCodegenClassSelection({
            '': ['data'],
          }),
        }),
      ),
      throwsStateError,
    );
    await expectLater(
      parser.parse(
        fixture('public.dart', {
          'Badge': const FlaxCodegenClassSelection({
            '': ['count'],
          }),
        }),
      ),
      throwsStateError,
    );
    await expectLater(
      parser.parse(
        fixture('public.dart', {
          'Badge': const FlaxCodegenClassSelection({
            '': ['label', 'missing'],
          }),
        }),
      ),
      throwsStateError,
    );
  });

  test('plugin members resolve callback typedefs, nullable results and inherited field types', () async {
    final module = await parser.parse(
      fixture('public.dart', {
        'Tools': const FlaxCodegenClassSelection(
          {},
          methods: {
            'apply': ['value', 'callback', 'tone'],
            'choose': ['loud'],
            'visit': ['callback'],
          },
        ),
        'Reading': const FlaxCodegenClassSelection(
          {},
          kind: 'object',
          getters: ['amount'],
        ),
      }),
    );
    final tools = module.classes.first;
    expect(tools.kind, 'members');
    expect(tools.constructors, isEmpty);
    final apply = tools.methods.first;
    expect(apply.result.nullable, isTrue);
    expect(apply.parameters.last.defaultCode, 'Tone.quiet');
    expect(apply.parameters[1].type.parameters.map((p) => p.type.kind), [
      'int',
      'enum',
    ]);
    expect(apply.parameters[1].type.result!.nullable, isTrue);
    expect(module.classes.last.getters.single.type.kind, 'double');
    final emitter = FlaxCodegenBindingEmitter([module]);
    expect(parseString(content: emitter.dart(module)).errors, isEmpty);
    expect(emitter.dart(module), contains('api.Tools.apply('));
    expect(emitter.typescript(module), contains('export namespace Tools'));
    expect(emitter.typescript(module), contains('readonly amount: number'));
    expect(
      emitter.typescript(module),
      isNot(contains('export function Reading')),
    );
    final directory = Directory(p.join(root, '.dart_tool', 'flax'))
      ..createSync(recursive: true);
    final temporary = directory.createTempSync('plugin-check-');
    try {
      final dart = File(p.join(temporary.path, 'plugin.dart'))
        ..writeAsStringSync(emitter.dart(module));
      final ts = File(p.join(temporary.path, 'plugin.ts'))
        ..writeAsStringSync(emitter.typescript(module));
      final config = File(p.join(temporary.path, 'tsconfig.json'))
        ..writeAsStringSync(
          jsonEncode({
            'compilerOptions': {
              'strict': true,
              'noEmit': true,
              'target': 'ES2019',
              'lib': ['ES2022'],
              'module': 'NodeNext',
              'moduleResolution': 'NodeNext',
              'paths': {
                '@flax/core/bindings': [
                  p.join(root, 'packages/flax/js/src/runtime/bindings.ts'),
                ],
              },
            },
            'files': [ts.path],
          }),
        );
      final analyzed = await Process.run(Platform.resolvedExecutable, [
        'analyze',
        dart.path,
      ], workingDirectory: root);
      expect(
        analyzed.exitCode,
        0,
        reason: '${analyzed.stdout}\n${analyzed.stderr}',
      );
      final compiled = await Process.run('pnpm', [
        'exec',
        'tsc',
        '--project',
        config.path,
      ], workingDirectory: root);
      expect(
        compiled.exitCode,
        0,
        reason: '${compiled.stdout}\n${compiled.stderr}',
      );
    } finally {
      temporary.deleteSync(recursive: true);
    }
    await expectLater(
      parser.parse(
        fixture('public.dart', {
          'Tools': const FlaxCodegenClassSelection(
            {},
            methods: {
              'unsupported': ['callback'],
            },
          ),
        }),
      ),
      completion(isA<FlaxCodegenModuleModel>()),
    );
    await expectLater(
      parser.parse(
        fixture('public.dart', {
          'Reading': const FlaxCodegenClassSelection(
            {},
            kind: 'object',
            getters: ['amount'],
          ),
          'ReadingHolder': const FlaxCodegenClassSelection({
            '': ['reading'],
          }),
        }),
      ),
      completion(isA<FlaxCodegenModuleModel>()),
    );
    await expectLater(
      parser.parse(
        fixture('public.dart', {
          'Reading': const FlaxCodegenClassSelection(
            {},
            kind: 'object',
            getters: ['missing'],
          ),
        }),
      ),
      throwsStateError,
    );
  });

  test('plugin navigation lifetimes, borrowed State and Future signatures generate executable adapters', () async {
    final module = await parser.parse(
      fixture('navigation.dart', {
        'BuildContext': const FlaxCodegenClassSelection(
          {},
          kind: 'context',
          getters: ['mounted'],
        ),
        'Route': const FlaxCodegenClassSelection(
          {},
          kind: 'route',
          typeArguments: ['Object?'],
        ),
        'RouteSettings': const FlaxCodegenClassSelection(
          {
            '': ['name', 'arguments'],
          },
          kind: 'object',
          getters: ['name', 'arguments'],
          data: FlaxCodegenDataSelection(
            constructors: {
              '': ['arguments'],
            },
            getters: ['arguments'],
          ),
        ),
        'FixtureRoute': const FlaxCodegenClassSelection(
          {
            '': ['content', 'settings'],
          },
          kind: 'route',
          typeArguments: ['Object?'],
        ),
        'Probe': const FlaxCodegenClassSelection(
          {},
          kind: 'state',
          getters: ['mounted', 'count'],
          instanceMethods: {
            'echo': ['value', 'fail'],
            'choose': ['value'],
          },
          methodTypeArguments: {
            'choose': ['Object?'],
          },
          data: FlaxCodegenDataSelection(
            methods: {
              'echo': ['value'],
              'choose': ['value'],
            },
            results: ['echo', 'choose'],
          ),
        ),
      }),
    );
    final probe = module.classes.last;
    expect(probe.methods.first.result.kind, 'future');
    expect(probe.methods.first.result.item!.kind, 'data');
    expect(probe.methods.first.parameters.last.defaultCode, 'false');
    expect(probe.methods.last.typeArguments, ['Object?']);
    final emitter = FlaxCodegenBindingEmitter([module]);
    expect(emitter.dart(module), contains('lease.builder("content")'));
    expect(emitter.dart(module), contains('_lease.routeDisposed()'));
    expect(emitter.typescript(module), contains('Promise<NavigationData'));
    await compileFixture(root, emitter, module);
    await expectLater(
      parser.parse(
        fixture('navigation.dart', {
          'Probe': const FlaxCodegenClassSelection(
            {},
            kind: 'state',
            instanceMethods: {'unsupported': []},
          ),
        }),
      ),
      throwsStateError,
    );
    await expectLater(
      parser.parse(
        fixture('navigation.dart', {
          'Probe': const FlaxCodegenClassSelection(
            {},
            kind: 'state',
            instanceMethods: {
              'choose': ['value'],
            },
          ),
        }),
      ),
      throwsStateError,
    );
  });

  test('plugin Pages preserve generic fields and omit inherited private callback defaults', () async {
    final library = Uri.file(
      p.join(Directory.current.path, 'test/fixtures/plugin/pages.dart'),
    ).toString();
    final selection = {
      'Page': const FlaxCodegenClassSelection(
        {},
        kind: 'page',
        typeArguments: ['Object?'],
        getters: ['key', 'name', 'arguments'],
        data: FlaxCodegenDataSelection(getters: ['arguments']),
      ),
      'ScreenSpec': FlaxCodegenClassSelection(
        {
          '': ['content', 'key', 'name', 'arguments', 'onPopInvoked'],
        },
        kind: 'page',
        typeArguments: ['Object?'],
        getters: ['key', 'name', 'arguments'],
        pageAdapter: FlaxCodegenPageAdapterModel(library, 'adaptScreen'),
        data: const FlaxCodegenDataSelection(
          constructors: {
            '': ['arguments', 'onPopInvoked'],
          },
          getters: ['arguments'],
        ),
      ),
      'ValueKey': const FlaxCodegenClassSelection(
        {
          '': ['value'],
        },
        genericScalar: true,
        getters: ['value'],
      ),
    };
    final module = await parser.parse(fixture('pages.dart', selection));
    final page = module.classes[1];
    final params = {
      for (final param in page.constructors.single.parameters)
        param.name: param,
    };
    expect(params['key']!.type.name, 'LocalKey');
    expect(params['arguments']!.type.kind, 'data');
    expect(params['onPopInvoked']!.omitWhenAbsent, isTrue);
    expect(params['onPopInvoked']!.type.parameters.last.type.kind, 'data');
    final emitter = FlaxCodegenBindingEmitter([module]);
    final dart = emitter.dart(module);
    expect(dart, contains('adapterScreenSpec.adaptScreen(this)'));
    expect(dart, contains('values.containsKey("onPopInvoked")'));
    expect(dart, isNot(contains('_defaultPop')));
    expect(emitter.typescript(module), contains('readonly value: T'));
    await compileFixture(root, emitter, module);
    await expectLater(
      parser.parse(
        fixture('pages.dart', {
          'ScreenSpec': const FlaxCodegenClassSelection(
            {
              '': ['content', 'key', 'name', 'arguments', 'onPopInvoked'],
            },
            kind: 'page',
            typeArguments: ['Object?'],
          ),
        }),
      ),
      throwsStateError,
    );
  });

  test('multiple omitted defaults execute the real generated Dart constructors', () async {
    final module = await parser.parse(
      fixture('defaults.dart', {
        'DefaultsPanel': const FlaxCodegenClassSelection({
          '': ['children', 'onFirst', 'onSecond'],
        }),
      }),
    );
    expect(
      module.classes.single.constructors.single.parameters.every(
        (parameter) => parameter.omitWhenAbsent,
      ),
      isTrue,
    );
    final emitter = FlaxCodegenBindingEmitter([module]);
    final dart = emitter.dart(module);
    expect(dart, isNot(contains('api._first')));
    expect(dart, isNot(contains('api._second')));
    await compileFixture(root, emitter, module);
    final directory = Directory(p.join(root, '.dart_tool', 'flax'))
        .createTempSync('defaults-execution-');
    try {
      final file = File(p.join(directory.path, 'defaults_test.dart'));
      file.writeAsStringSync(
        "import 'package:flutter_test/flutter_test.dart';\n"
        "import '${module.library}' as fixture;\n"
        '$dart\n'
        r'''
void main() {
  for (var mask = 0; mask < 8; mask++) {
    test('omitted parameter combination $mask', () {
      fixture.calls.clear();
      final children = <api.Widget>[];
      final values = <String, Object?>{
        if (mask & 1 != 0) 'children': children,
        if (mask & 2 != 0) 'onFirst': () => fixture.calls.add('provided first'),
        if (mask & 4 != 0) 'onSecond': () => fixture.calls.add('provided second'),
      };
      final panel = _createDefaultsPanel('', values) as fixture.DefaultsPanel;
      expect(panel.children, same(mask & 1 != 0
          ? children : const fixture.DefaultsPanel().children));
      panel.onFirst!();
      panel.onSecond!();
      expect(fixture.calls, [
        mask & 2 != 0 ? 'provided first' : 'default first',
        mask & 4 != 0 ? 'provided second' : 'default second',
      ]);
    });
  }
  test('explicit null does not select private callback defaults', () {
    final panel = _createDefaultsPanel('', {
      'onFirst': null, 'onSecond': null,
    }) as fixture.DefaultsPanel;
    expect(panel.onFirst, isNull);
    expect(panel.onSecond, isNull);
  });
}
''',
      );
      final executed = await Process.run('flutter', [
        'test',
        '--no-pub',
        '--reporter',
        'expanded',
        file.path,
      ], workingDirectory: Directory.current.path);
      expect(
        executed.exitCode,
        0,
        reason: '${executed.stdout}\n${executed.stderr}',
      );
      final calls = RegExp(r'return api\.DefaultsPanel\(')
          .allMatches(dart)
          .length;
      // ignore: avoid_print
      print(
        'Default fixture: ${utf8.encode(dart).length} Dart bytes, '
        '$calls constructor calls; all 8 presence combinations and null executed.',
      );
    } finally {
      directory.deleteSync(recursive: true);
    }
  }, timeout: const Timeout(Duration(minutes: 3)));

  test('malformed models fail with a field location before emitting code', () {
    for (final type in [
      const FlaxCodegenTypeRef('unknown'),
      const FlaxCodegenTypeRef('list'),
      const FlaxCodegenTypeRef('callback'),
      const FlaxCodegenTypeRef('enum', name: 'Tone'),
      const FlaxCodegenTypeRef('String', item: FlaxCodegenTypeRef('int')),
      const FlaxCodegenTypeRef('void', nullable: true),
      const FlaxCodegenTypeRef('future', item: FlaxCodegenTypeRef('context')),
    ]) {
      final module = FlaxCodegenModuleModel(
        name: 'invalid',
        library: 'unused',
        jsPackage: '@test/invalid',
        dartOutput: 'unused.dart',
        tsOutput: 'unused.ts',
        types: const [],
        classes: [
          FlaxCodegenClassModel(
            name: 'Invalid',
            id: 'test:Invalid',
            kind: 'members',
            constructors: const [],
            supertypes: const [],
            methods: [FlaxCodegenMethodModel('read', const [], type)],
          ),
        ],
      );
      expect(() => FlaxCodegenBindingEmitter([module]), throwsStateError);
    }
  });

  test('adapted types are shared by declaration across modules regardless of input order', () async {
    final selected = FlaxCodegenBindingConfig.read(
      p.join(root, 'packages/flax/bindings/config.yaml'),
    );
    final core = FlaxCodegenBindingConfig(
      selected.name,
      selected.library,
      selected.jsPackage,
      selected.dartOutput,
      selected.tsOutput,
      {...selected.classes}..remove('Builder'),
      additionalLibraries: selected.additionalLibraries,
      callbackSnapshots: selected.callbackSnapshots,
    );
    final plugin = FlaxCodegenBindingConfig(
      'plugin',
      selected.library,
      '@example/plugin',
      'unused.dart',
      'unused.ts',
      {'Builder': selected.classes['Builder']!},
    );
    await parser.prepare([plugin, core]);
    final consumer = await parser.parse(plugin);
    final dependency = await parser.parse(core);
    final callback =
        consumer.classes.single.constructors.single.parameters.last.type;
    expect(callback.parameters.single.type.kind, 'context');
    final emitted = FlaxCodegenBindingEmitter([consumer, dependency])
        .typescript(consumer);
    expect(emitted, contains("import '${selected.jsPackage}';"));
    expect(emitted, isNot(contains('@flax/core/flutter')));
    expect(emitted, isNot(contains('defineContext(')));
  });
  test(
    'plugin objects resolve inherited setters and paired listeners',
    () async {
      FlaxCodegenClassSelection selection({
        String disposer = 'finish',
        Map<String, String> pairs = const {'watch': 'unwatch'},
        List<String> setters = const ['reading', 'mode'],
      }) => FlaxCodegenClassSelection(
        {
          '': ['initial'],
        },
        kind: 'object',
        getters: ['reading', 'mode', 'self'],
        setters: setters,
        instanceMethods: {
          'move': ['amount'],
          'echo': ['input'],
          'watch': ['observer'],
          'unwatch': ['observer'],
          'finish': [],
          'badWatch': ['input'],
          'badFinish': [],
          if (disposer == 'badAsync') 'badAsync': [],
        },
        disposeMethod: disposer,
        listenerPairs: pairs,
      );
      final module = await parser.parse(
        fixture('objects.dart', {'Gauge': selection()}),
      );
      final gauge = module.classes.single;
      expect(gauge.kind, 'object');
      expect(gauge.setters.first.type.kind, 'int');
      expect(gauge.getters.last.type.kind, 'object');
      expect(
        gauge.methods.singleWhere((m) => m.name == 'echo').result.nullable,
        isTrue,
      );
      expect(gauge.constructors.single.parameters.single.defaultCode, '7');
      final emitter = FlaxCodegenBindingEmitter([module]);
      expect(emitter.dart(module), contains('.move('));
      expect(emitter.typescript(module), contains('constructObject('));
      expect(emitter.typescript(module), contains('get reading(): number'));
      await compileFixture(root, emitter, module);
      for (final bad in [
        selection(disposer: 'missing'),
        selection(disposer: 'badFinish'),
        selection(disposer: 'badAsync'),
        selection(disposer: 'move'),
        selection(pairs: {'watch': 'badWatch'}),
        selection(pairs: {'watch': 'watch'}),
        selection(setters: ['self']),
      ]) {
        await expectLater(
          parser.parse(fixture('objects.dart', {'Gauge': bad})),
          throwsStateError,
        );
      }
    },
  );
  test('nested Dart references use public sources and real defaults', () async {
    final primary = fixture('editing_document.dart', {}).library;
    final extra = fixture('editing_span.dart', {}).library;
    final config = <String, dynamic>{
      'name': 'editing',
      'library': primary,
      'additionalLibraries': [extra],
      'jsPackage': '@example/editing',
      'dartOutput': 'unused.dart',
      'tsOutput': 'unused.ts',
      'classes': {
        'Span': {
          'kind': 'object',
          'constructors': {
            '': ['low', 'high'],
            'point': ['offset'],
          },
          'getters': ['low', 'high', 'collapsed'],
          'staticGetters': ['empty'],
          'instanceMethods': {
            'copyWith': ['low', 'high'],
          },
        },
        'Marker': {
          'kind': 'object',
          'constructors': {
            '': ['low', 'high'],
          },
          'getters': ['low', 'high', 'collapsed'],
        },
        'Note': {
          'kind': 'object',
          'constructors': {
            '': ['text', 'selection', 'optional'],
            'named': ['text'],
          },
          'getters': ['text', 'selection', 'optional', 'emptyText'],
          'staticGetters': ['empty'],
          'instanceMethods': {
            'copyWith': ['text', 'selection'],
          },
        },
        'NoteStore': {
          'kind': 'object',
          'constructors': {
            '': ['value'],
          },
          'getters': ['value'],
          'setters': ['value'],
          'disposeMethod': 'finish',
          'listenerPairs': {'watch': 'unwatch'},
          'instanceMethods': {
            'echo': ['input'],
            'watch': ['callback'],
            'unwatch': ['callback'],
            'finish': <String>[],
          },
        },
      },
    };
    final module = await parser.parse(FlaxCodegenBindingConfig.fromMap(config));
    final note = module.classes.singleWhere((c) => c.name == 'Note');
    expect(
      note.constructors.first.parameters
          .singleWhere((p) => p.name == 'selection')
          .omitWhenAbsent,
      isTrue,
    );
    expect(
      note.getters.singleWhere((g) => g.name == 'optional').type.nullable,
      isTrue,
    );
    final store = module.classes.singleWhere((c) => c.name == 'NoteStore');
    expect(store.getters.single.type.id, note.id);
    expect(store.setters.single.type.id, note.id);
    expect(module.typeLibraries['Span'], extra);
    expect(module.typeLibraries['Note'], primary);
    final emitter = FlaxCodegenBindingEmitter([module]);
    await compileFixture(root, emitter, module);
    final directory = Directory(p.join(root, '.dart_tool', 'flax'))
        .createTempSync('snapshot-execution-');
    try {
      final file = File(p.join(directory.path, 'snapshot_test.dart'));
      file.writeAsStringSync(
        "import 'package:flutter_test/flutter_test.dart';\n"
        "import '$extra' as spans;\n"
        '${emitter.dart(module)}\n'
        r'''
void main() {
  test('generated snapshot calls preserve defaults, fields, null and adapters', () {
    final note = _createNote('', {'text': 'hello', 'optional': null}) as api.Note;
    expect(identical(note.selection, spans.Span.empty), isTrue);
    expect(note.optional, isNull);
    final binding = editingBindings.types.whereType<FlaxObjectBinding>().firstWhere((b) => b.id.endsWith('::Note'));
    expect(binding.getters.last.read(note), isFalse);
    final copied = binding.instanceMethods['copyWith']!.invoke(note, {'text': null, 'selection': const spans.Marker(low: 1, high: 2)}) as api.Note;
    expect(copied.text, 'hello');
    expect(copied.selection, isA<spans.Marker>());
    expect(binding.staticGetters['empty']!.read(), same(api.Note.empty));
    expect(() => _createNote('', {'text': '', 'selection': null, 'optional': null}), throwsA(isA<TypeError>()));
    final store = _createNoteStore('', {}) as api.NoteStore;
    expect(store.value, same(api.Note.empty));
    try {
      _NoteStore_set_value(store, note);
      expect(store.value, same(note));
      _NoteStore_set_value(store, const api.Note(text: 'invalid'));
      expect(store.value.text, 'invalid');
    } finally { store.finish(); }
  });
}
''',
      );
      final executed = await Process.run('flutter', [
        'test',
        '--no-pub',
        '--reporter',
        'expanded',
        file.path,
      ], workingDirectory: Directory.current.path);
      expect(
        executed.exitCode,
        0,
        reason: '${executed.stdout}\n${executed.stderr}',
      );
    } finally {
      directory.deleteSync(recursive: true);
    }
    for (final invalid in [
      ('Note', 'staticGetters', ['text']),
    ]) {
      final changed = jsonDecode(jsonEncode(config)) as Map<String, dynamic>;
      (changed['classes'] as Map<String, dynamic>)[invalid.$1][invalid.$2] =
          invalid.$3;
      await expectLater(
        parser.parse(FlaxCodegenBindingConfig.fromMap(changed)),
        throwsStateError,
      );
    }
    await expectLater(
      parser.parse(
        FlaxCodegenBindingConfig.fromMap({
          ...config,
          'additionalLibraries': [
            extra,
            Uri.parse(extra).resolve('editing_conflict.dart').toString(),
          ],
        }),
      ),
      throwsA(
        isA<StateError>().having(
          (e) => e.message,
          'conflicting export',
          contains('Conflicting public declaration: Span'),
        ),
      ),
    );
    final repeated = {
      ...config,
      'additionalLibraries': [extra, extra],
    };
    final merged = await parser.parse(
      FlaxCodegenBindingConfig.fromMap(repeated),
    );
    expect(merged.classes.where((c) => c.name == 'Span'), hasLength(1));
  });
  test(
    'inherited selected surfaces resolve on each subtype across module order',
    () async {
      final base = fixture('interop.dart', {
        'Base': interopSelection['Base']!,
        'Token': interopSelection['Token']!,
        'Store': interopSelection['Store']!,
      });
      final child = FlaxCodegenBindingConfig(
        'child',
        base.library,
        '@example/child',
        'child.dart',
        'child.ts',
        {
          'Derived': interopSelection['Derived']!,
          'Child': interopSelection['Child']!,
        },
      );
      for (final configs in [
        [child, base],
        [base, child],
      ]) {
        await parser.prepare(configs);
        final descendants = await parser.parse(child);
        final ancestors = await parser.parse(base);
        final derived = descendants.classes.first;
        expect(
          derived.getters.map((g) => g.name),
          containsAll(['value', 'items', 'groups']),
        );
        expect(
          derived.setters.map((g) => g.name),
          containsAll(['value', 'items', 'groups']),
        );
        expect(
          derived.methods
              .singleWhere((m) => m.name == 'select')
              .parameters
              .single
              .type
              .name,
          'Token',
        );
        final selected = descendants.classes.last;
        expect(selected.disposeMethod, 'finish');
        expect(selected.listenerPairs, {'watch': 'unwatch'});
        final ping = selected.methods.singleWhere((m) => m.name == 'ping');
        expect(ping.parameters.map((p) => p.name), ['first', 'second']);
        expect(ping.parameters.map((p) => p.defaultCode), ['10', '20']);
        expect(
          selected.getters.where((g) => g.name == 'inherited'),
          hasLength(1),
        );
        expect(selected.constructors.single.parameters, isEmpty);
        expect(selected.staticGetters, isEmpty);
        expect(selected.methods.any((m) => m.name == 'identify'), isFalse);
        final emitter = FlaxCodegenBindingEmitter([descendants, ancestors]);
        expect(
          emitter.typescript(descendants),
          contains('invokeObject(this, "${selected.id}", "ping"'),
        );
        expect(
          emitter.typescript(descendants),
          contains('extends upstream0.Store<T>'),
        );
        expect(emitter.dart(descendants), contains('api.Child).ping'));
      }
    },
  );

  test('explicit data marks only Object positions and preserves nullable generic associations', () async {
    final module = await parser.parse(
      fixture('interop.dart', interopSelection),
    );
    final probe = module.classes.singleWhere((c) => c.name == 'Probe');
    FlaxCodegenMethodModel method(String name) =>
        probe.methods.singleWhere((m) => m.name == name);
    expect(method('echo').parameters.single.type.kind, 'any');
    expect(method('echo').result.kind, 'any');
    expect(method('echo').result.nullable, isTrue);
    expect(method('nonNull').result.nullable, isFalse);
    expect(method('echoDynamic').result.nullable, isTrue);
    expect(method('copy').result.kind, 'data');
    expect(method('copyStatic').parameters.single.type.kind, 'data');
    expect(method('copyLater').result.item!.kind, 'data');
    final callback = method('copyCallback').parameters.first.type;
    expect(callback.parameters.single.type.kind, 'data');
    expect(callback.result!.kind, 'data');
    expect(probe.constructors.single.parameters.single.type.kind, 'data');
    expect(
      probe.getters.singleWhere((g) => g.name == 'data').type.kind,
      'data',
    );
    final ts = FlaxCodegenBindingEmitter([module]).typescript(module);
    expect(ts, contains('echo(value: unknown | null): unknown | null'));
    expect(ts, contains('nonNull(value: {}): {}'));
    expect(
      ts,
      contains('copy(value: NavigationData | null): NavigationData | null'),
    );
    final navigation = await parser.parse(
      FlaxCodegenBindingConfig.read(
        p.join(root, 'packages/flax/bindings/config.yaml'),
      ),
    );
    final navigationTs = FlaxCodegenBindingEmitter([navigation])
        .typescript(navigation);
    expect(navigationTs, contains('T extends NavigationData | null'));
  });

  test(
    'invalid data and incompatible inherited selections fail generation',
    () async {
      for (final data in [
        const FlaxCodegenDataSelection(
          constructors: {
            'missing': ['value'],
          },
        ),
        const FlaxCodegenDataSelection(
          constructors: {
            '': ['missing'],
          },
        ),
        const FlaxCodegenDataSelection(getters: ['missing']),
        const FlaxCodegenDataSelection(getters: ['mode']),
        const FlaxCodegenDataSelection(getters: ['data', 'data']),
        const FlaxCodegenDataSelection(
          methods: {
            'missing': ['value'],
          },
        ),
        const FlaxCodegenDataSelection(
          methods: {
            'echo': ['missing'],
          },
        ),
        const FlaxCodegenDataSelection(
          methods: {
            'echo': ['value', 'value'],
          },
        ),
        const FlaxCodegenDataSelection(
          methods: {
            'echoMode': ['value'],
          },
        ),
        const FlaxCodegenDataSelection(results: ['missing']),
        const FlaxCodegenDataSelection(results: ['echoMode']),
        const FlaxCodegenDataSelection(results: ['echo', 'echo']),
      ]) {
        final original = interopSelection['Probe']!;
        await expectLater(
          parser.parse(
            fixture('interop.dart', {
              ...interopSelection,
              'Probe': FlaxCodegenClassSelection(
                original.constructors,
                kind: 'object',
                getters: original.getters,
                methods: original.methods,
                instanceMethods: original.instanceMethods,
                data: data,
              ),
            }),
          ),
          throwsStateError,
        );
      }
      for (final child in [
        const FlaxCodegenClassSelection(
          {'': []},
          kind: 'object',
          disposeMethod: 'notify',
        ),
        const FlaxCodegenClassSelection(
          {'': []},
          kind: 'object',
          listenerPairs: {'watch': 'finish'},
        ),
        const FlaxCodegenClassSelection(
          {'': []},
          kind: 'object',
          instanceMethods: {
            'ping': ['absent'],
          },
        ),
        const FlaxCodegenClassSelection(
          {'': []},
          kind: 'object',
          getters: ['inherited', 'inherited'],
        ),
      ]) {
        await expectLater(
          parser.parse(
            fixture('interop.dart', {
              'Base': interopSelection['Base']!,
              'Child': child,
            }),
          ),
          throwsStateError,
        );
      }
    },
  );

  test('proxy properties generate typed accessors', () async {
    final module = await parser.parse(
      fixture('interop.dart', {
        'AccessorContract': const FlaxCodegenClassSelection(
          {},
          kind: 'object',
          proxy: 'implements',
          getters: ['value'],
        ),
      }),
    );
    await compileFixture(root, FlaxCodegenBindingEmitter([module]), module);
    final properties = await parser.parse(
      fixture('interop.dart', interopSelection),
    );
    final child = properties.classes.singleWhere(
      (c) => c.name == 'PropertyChild',
    );
    expect(child.proxy!.getters.map((g) => g.name), [
      'inherited',
      'observed',
      'value',
    ]);
    expect(child.proxy!.setters.map((g) => g.name), ['value']);
    expect(
      child.proxy!.getters.singleWhere((g) => g.name == 'value').type.name,
      'Token',
    );
    final emitter = FlaxCodegenBindingEmitter([properties]);
    await compileFixture(
      root,
      emitter,
      properties,
      consumerSource: '''
import { PropertyPort, PropertyParent, PropertyChild, Token, Mode, AccessorContract, FieldContract } from './plugin.js';
import type { DartList, DartMap } from '@flax/core/bindings';
let token: Token | null = Token(1);
const port = PropertyPort.implement([], {
  get readOnly(): number { return 2; },
  set writeOnly(value: number) {},
  get token(): Token | null { return token; },
  set token(value: Token | null) { token = value; },
  get mode(): Mode { return Mode.first; },
  set mode(value: Mode) {},
  get items(): ReadonlyArray<Token> { return [Token(2)]; },
  set items(value: DartList<Token>) { value.get(0); },
  get groups(): ReadonlyMap<string, ReadonlyArray<Token>> { return new Map([['x', [Token(3)]]]); },
  set groups(value: DartMap<string, DartList<Token>>) { value.get('x'); },
  get transform(): (v: Token) => Token { return v => v; },
  set transform(value: (v: Token) => Token) { value(Token(4)); },
});
port.items = [Token(2)];
const values: DartList<Token> = port.items;
const readonly = AccessorContract.implement([], {get value(): number { return 4; }});
// @ts-expect-error No setter exists in the Dart contract.
readonly.value = 7;
// @ts-expect-error Getter implementation must return the declared type.
AccessorContract.implement([], {get value(): string { return 'bad'; }});
// @ts-expect-error Dart delivers a collection reference to a setter implementation.
PropertyPort.implement([], {set items(value: Token[]) {}});
let current = Token(8);
const child = PropertyChild.implement([current], {
  get value(): Token { return current; },
  set value(value: Token) { current = value; },
});
const inherited: Token = child.observed;
const generic = PropertyParent.implement<Token>([current], {
  get value(): Token { return current; },
  set value(value: Token) { current = value; },
  get inherited(): number { return 9; },
});
const related: Token = generic.value;
// @ts-expect-error The generic getter must preserve the selected association.
PropertyParent.implement<Token>([current], { get value(): number { return 1; } });
''',
    );
    for (final name in ['FutureProperty', 'PrivateProperty']) {
      await expectLater(
        parser.parse(
          fixture('interop.dart', {
            name: const FlaxCodegenClassSelection(
              {},
              kind: 'object',
              proxy: 'implements',
            ),
          }),
        ),
        throwsStateError,
      );
      final localBound = await parser.parse(
        fixture('interop.dart', {
          'UnboundGenericContract': const FlaxCodegenClassSelection(
            {},
            kind: 'object',
            proxy: 'implements',
          ),
        }),
      );
      final localBoundMethod = localBound.classes.single.proxy!.methods.single;
      expect(
        localBoundMethod.typeParameters.single.bound.name,
        'HiddenGenericBound',
      );

      await expectLater(
        parser.parse(
          fixture('interop.dart', {
            'RecursiveGenericContract': const FlaxCodegenClassSelection(
              {},
              kind: 'object',
              proxy: 'implements',
            ),
          }),
        ),
        throwsStateError,
      );
    }
  });

  test('implements proxies follow Dart class modifier rules', () async {
    final module = await parser.parse(
      fixture('../capability/class_modifier_shapes.dart', {
        'InterfaceBox': const FlaxCodegenClassSelection(
          {},
          kind: 'object',
          proxy: 'implements',
          getters: ['value'],
        ),
      }),
    );
    final interfaceBox = module.classes.single;
    expect(interfaceBox.name, 'InterfaceBox');
    expect(interfaceBox.proxy!.kind, 'implements');
    expect(interfaceBox.proxy!.getters.single.name, 'value');
    await compileFixture(
      root,
      FlaxCodegenBindingEmitter([module]),
      module,
      consumerSource: '''
import { InterfaceBox } from './plugin.js';
const value = InterfaceBox.implement([], {
  get value(): number { return 2; },
});
const result: number = value.value;
''',
    );

    final concrete = await parser.parse(
      fixture('../capability/class_modifier_shapes.dart', {
        'InterfaceBoxImpl': const FlaxCodegenClassSelection(
          {},
          kind: 'object',
          proxy: 'implements',
          getters: ['value'],
        ),
      }),
    );
    expect(concrete.classes.single.proxy!.kind, 'implements');
    await compileFixture(
      root,
      FlaxCodegenBindingEmitter([concrete]),
      concrete,
      consumerSource: '''
import { InterfaceBoxImpl } from './plugin.js';
const value = InterfaceBoxImpl.implement([], {
  get value(): number { return 3; },
});
const result: number = value.value;
''',
    );

    for (final name in ['BaseBox', 'FinalBox', 'SealedBox']) {
      await expectLater(
        parser.parse(
          fixture('../capability/class_modifier_shapes.dart', {
            name: const FlaxCodegenClassSelection(
              {},
              kind: 'object',
              proxy: 'implements',
              getters: ['value'],
            ),
          }),
        ),
        throwsStateError,
      );
    }
  });

  test(
    'references, collections, fixed generics, factories and proxies compile',
    () async {
      final module = await parser.parse(
        fixture('interop.dart', interopSelection),
      );
      final emitter = FlaxCodegenBindingEmitter([module]);
      final ts = emitter.typescript(module);
      expect(ts, contains('Store<T extends Token'));
      expect(ts, contains('echo(input: T): T'));
      expect(ts, contains('select<U extends Token'));
      expect(ts, contains('implement'));
      expect(ts, contains('export abstract class Evaluator'));
      expect(ts, contains('constructExtendedProxy(this, Evaluator.prototype'));
      expect(ts, contains('abstract evaluate(value: number): number;'));
      expect(ts, contains('twice(value: number): number {'));
      expect(ts, contains('invokeProxySuper(this,'));
      expect(
        ts,
        contains(
          'resolveWith<T extends unknown | null = unknown | null>('
          'callback: ((p0: DartSet<Mode>) => T)): DeferredProperty<T>',
        ),
      );
      expect(ts, contains('readonly unique: DartSet<number>'));
      expect(ts, contains('readonly iterable: DartIterable<number>'));
      final dart = emitter.dart(module);
      expect(dart, contains('extends api.Evaluator'));
      expect(dart, contains('implements api.Selector'));
      expect(dart, contains('if (_call_twice == null)'));
      expect(dart, contains('return super.twice(value);'));
      expect(dart, contains('_flaxSuper_twice'));
      expect(dart, contains('"@super:twice": FlaxInstanceMethod'));
      expect(
        dart,
        contains(
          "return result.then<int>((_) => throw StateError('load must call super.load()'));",
        ),
      );
      expect(dart, contains('api.DeferredProperty.resolveWith<api.Token?>'));
      expect(dart, contains('api.DeferredProperty.resolveWith<num?>'));
      await compileFixture(
        root,
        emitter,
        module,
        consumerSource: '''
import {DeferredConsumer, DeferredProperty, Evaluator, Mode, Token} from './plugin.js';
class CustomEvaluator extends Evaluator {
  constructor(initial: number) { super(initial); }
  evaluate(value: number): number { return value + 1; }
  twice(value: number): number { return super.twice(value) + 1; }
}
const evaluator = new CustomEvaluator(3);
const initialResult: number = evaluator.initialResult;
const legacy = Evaluator.implement([3], {
  evaluate(value: number): number { return value + 1; },
});
const legacyResult: number = legacy.twice(4);
const token = DeferredProperty.resolveWith<Token | null>(
  states => states.contains(Mode.first) ? Token(1) : null,
);
const number = DeferredProperty.resolveWith<number | null>(
  states => states.contains(Mode.second) ? 2 : null,
);
DeferredConsumer({token, number});
''',
      );
      for (final concrete in ['Object?', 'String']) {
        await expectLater(
          parser.parse(
            fixture('interop.dart', {
              'Token': interopSelection['Token']!,
              'Store': FlaxCodegenClassSelection(
                {
                  '': ['value'],
                },
                typeArguments: [concrete],
              ),
            }),
          ),
          throwsStateError,
        );
      }
      await expectLater(
        parser.parse(
          fixture('interop.dart', {
            'Unimplementable': const FlaxCodegenClassSelection(
              {},
              kind: 'object',
              proxy: 'implements',
            ),
          }),
        ),
        throwsStateError,
      );
      final deferredOnly = await parser.parse(
        fixture('interop.dart', {
          'DeferredProperty': interopSelection['DeferredProperty']!,
        }),
      );
      expect(
        () => FlaxCodegenBindingEmitter([
          deferredOnly,
        ], requireDeferredTargets: true),
        throwsStateError,
      );
      await expectLater(
        parser.parse(
          fixture('interop.dart', {
            'DeferredProperty': const FlaxCodegenClassSelection(
              {},
              kind: 'object',
              methods: {
                'resolveWith': ['callback'],
              },
              deferredFactories: ['missing'],
            ),
          }),
        ),
        throwsStateError,
      );
    },
  );

  test(
    'deferred factories reject ambiguous and unsupported materialization',
    () async {
      FlaxCodegenClassSelection factory(String method) =>
          FlaxCodegenClassSelection(
            const {},
            kind: 'object',
            methods: {
              method: const ['callback'],
            },
            deferredFactories: [method],
          );
      FlaxCodegenClassSelection consumer() => const FlaxCodegenClassSelection(
        {
          '': ['value'],
        },
        kind: 'object',
        getters: ['value'],
      );
      for (final selection in [
        {'PairProperty': factory('resolveWith'), 'PairConsumer': consumer()},
        {'ExtraProperty': factory('resolveWith'), 'ExtraConsumer': consumer()},
        {
          'CollectionProperty': FlaxCodegenClassSelection(
            const {},
            kind: 'object',
            methods: const {
              'fromValues': ['values'],
            },
            deferredFactories: const ['fromValues'],
          ),
          'CollectionConsumer': consumer(),
        },
        {
          'WrongFactory': factory('create'),
          'WrongConsumer': consumer(),
          'CollectionProperty': const FlaxCodegenClassSelection(
            {},
            kind: 'object',
            typeArguments: ['String'],
          ),
        },
      ]) {
        await expectLater(
          () async {
            final module = await parser.parse(
              fixture('deferred_invalid.dart', selection),
            );
            FlaxCodegenBindingEmitter([module], requireDeferredTargets: true);
          },
          throwsStateError,
          reason: selection.keys.join(', '),
        );
      }
      await expectLater(
        parser.parse(
          fixture('deferred_invalid.dart', {
            'AsyncProperty': factory('resolveWith'),
          }),
        ),
        throwsStateError,
      );

      Map<String, FlaxCodegenClassSelection> bounded(
        String value,
        String consumer,
      ) => {
        'BoundContract': FlaxCodegenClassSelection(
          const {},
          kind: 'object',
          typeArguments: [value],
        ),
        value: const FlaxCodegenClassSelection({'': []}, kind: 'object'),
        'BoundedProperty': factory('resolveWith'),
        consumer: const FlaxCodegenClassSelection(
          {
            '': ['value'],
          },
          kind: 'object',
          getters: ['value'],
        ),
      };
      final valid = await parser.parse(
        fixture(
          'deferred_invalid.dart',
          bounded('ValidBound', 'ValidBoundConsumer'),
        ),
      );
      final validEmitter = FlaxCodegenBindingEmitter([
        valid,
      ], requireDeferredTargets: true);
      await compileFixture(
        root,
        validEmitter,
        valid,
        consumerSource: '''
import {BoundedProperty, ValidBound, ValidBoundConsumer} from './plugin.js';
ValidBoundConsumer(BoundedProperty.resolveWith(() => ValidBound()));
''',
      );
      final invalid = await parser.parse(
        fixture(
          'deferred_invalid.dart',
          bounded('InvalidBound', 'InvalidBoundConsumer'),
        ),
      );
      expect(
        () =>
            FlaxCodegenBindingEmitter([invalid], requireDeferredTargets: true),
        throwsStateError,
      );

      Map<String, FlaxCodegenClassSelection> primitiveBounded(
        String property,
        String consumerName,
      ) => {property: factory('resolveWith'), consumerName: consumer()};
      for (final selection in [
        primitiveBounded('NumericProperty', 'NumericConsumer'),
        primitiveBounded('NullableNumericProperty', 'NullableBoundConsumer'),
      ]) {
        final module = await parser.parse(
          fixture('deferred_invalid.dart', selection),
        );
        expect(
          () =>
              FlaxCodegenBindingEmitter([module], requireDeferredTargets: true),
          returnsNormally,
        );
      }
      for (final selection in [
        primitiveBounded('NumericProperty', 'NullableNumericConsumer'),
        primitiveBounded('NumericProperty', 'StringNumericConsumer'),
      ]) {
        final module = await parser.parse(
          fixture('deferred_invalid.dart', selection),
        );
        expect(
          () =>
              FlaxCodegenBindingEmitter([module], requireDeferredTargets: true),
          throwsStateError,
        );
      }
    },
  );

  test(
    'jsName CanvasView and callback snapshot inheritance fail loudly',
    () async {
      final canvasConfig = FlaxCodegenBindingConfig.read(
        p.join(root, 'packages/flax_canvas/bindings/config.yaml'),
      );
      final coreConfig = FlaxCodegenBindingConfig.read(
        p.join(root, 'packages/flax/bindings/config.yaml'),
      );
      await parser.prepare([coreConfig, canvasConfig]);
      final core = await parser.parse(coreConfig);
      final canvas = await parser.parse(canvasConfig);
      expect(
        canvas.classes
            .singleWhere((type) => type.name == 'FlaxCanvasView')
            .jsName,
        'CanvasView',
      );
      expect(
        FlaxCodegenBindingEmitter([canvas, core]).typescript(canvas),
        contains('export function CanvasView('),
      );
      final ts = FlaxCodegenBindingEmitter([core]).typescript(core);
      expect(ts, contains('export interface KeyEvent {'));
      expect(ts, contains('readonly type: string;'));
      expect(ts, contains('export interface PointerScrollEvent {'));
      expect(ts, contains('readonly scrollDelta:'));
      expect(ts, contains('readonly pointer:'));

      expect(
        () => FlaxCodegenCallbackSnapshotSelection.fromMap({
          'fields': ['a', 'a'],
        }),
        throwsA(
          isA<StateError>().having(
            (error) => error.toString(),
            'message',
            contains('Duplicate callback snapshot field'),
          ),
        ),
      );

      Future<void> reject(
        Map<String, FlaxCodegenCallbackSnapshotSelection> snapshots,
        String message,
      ) async {
        final config = FlaxCodegenBindingConfig(
          coreConfig.name,
          coreConfig.library,
          coreConfig.jsPackage,
          coreConfig.dartOutput,
          coreConfig.tsOutput,
          const {},
          additionalLibraries: coreConfig.additionalLibraries,
          callbackSnapshots: snapshots,
        );
        await expectLater(
          parser.parse(config),
          throwsA(
            isA<StateError>().having(
              (error) => error.toString(),
              'message',
              contains(message),
            ),
          ),
        );
      }

      await reject({
        'Missing': const FlaxCodegenCallbackSnapshotSelection(fields: ['x']),
      }, 'Unknown callback snapshot type');
      await reject({
        'PointerEvent': const FlaxCodegenCallbackSnapshotSelection(
          fields: ['notAField'],
        ),
      }, 'Unknown snapshot field');
      await reject({
        'PointerEvent': const FlaxCodegenCallbackSnapshotSelection(
          fields: ['pointer'],
        ),
        'PointerScrollEvent': const FlaxCodegenCallbackSnapshotSelection(
          fields: ['pointer'],
          extendsName: 'PointerEvent',
        ),
      }, 'Duplicate inherited snapshot field');
    },
  );
}

Future<void> compileFixture(
  String root,
  FlaxCodegenBindingEmitter emitter,
  FlaxCodegenModuleModel module, {
  String? consumerSource,
  String? dartTestSource,
}) async {
  final parent = Directory(p.join(root, '.dart_tool', 'flax'))
    ..createSync(recursive: true);
  final directory = parent.createTempSync('navigation-plugin-');
  try {
    File(p.join(directory.path, 'plugin.dart'))
        .writeAsStringSync(emitter.dart(module));
    final execution = dartTestSource == null
        ? null
        : (File(p.join(directory.path, 'execution_test.dart'))
            ..writeAsStringSync(
              "import 'package:flutter_test/flutter_test.dart';\n"
              '${emitter.dart(module)}\n$dartTestSource',
            ));
    final dependencyPaths = <String, List<String>>{};
    final tsFiles = <String>[];
    var tsIndex = 0;
    var dependencyIndex = 0;
    for (final current in emitter.modules) {
      final outputs = emitter.typescriptOutputs(current);
      final specifiers = flaxCodegenTypescriptOutputSpecifiers(current);
      for (final entry in outputs.entries) {
        final specifier = specifiers[entry.key];
        if (specifier == null) {
          fail(
            'Missing TypeScript specifier for ${current.name}: ${entry.key}',
          );
        }
        final isPrimaryTarget =
            current == module &&
            outputs.length == 1 &&
            entry.key == module.tsOutput;
        final source = File(
          p.join(
            directory.path,
            isPrimaryTarget ? 'plugin.ts' : 'typescript${tsIndex++}.ts',
          ),
        )..writeAsStringSync(entry.value);
        if (dependencyPaths.containsKey(specifier)) {
          fail('Duplicate TypeScript specifier: $specifier');
        }
        dependencyPaths[specifier] = [source.path];
        tsFiles.add(source.path);
      }
      if (current != module) {
        File(p.join(directory.path, 'dependency${dependencyIndex++}.dart'))
            .writeAsStringSync(emitter.dart(current));
      }
    }
    if (consumerSource != null && module.publicLibraries.isNotEmpty) {
      final routes = [...module.publicLibraries]
        ..sort((a, b) => a.jsPackage.compareTo(b.jsPackage));
      final exported = <String>{};
      final topLevelExports = {
        for (final getter
            in module.topLevel?.getters ?? <FlaxCodegenTopLevelGetterModel>[])
          getter.name: getter.exportName,
      };
      final facade = StringBuffer();
      for (final route in routes) {
        final names =
            route.exports
                .map((name) => topLevelExports[name] ?? name)
                .where(exported.add)
                .toList()
              ..sort();
        if (names.isEmpty) continue;
        facade.writeln(
          'export { ${names.join(', ')} } from ${jsonEncode(route.jsPackage)};',
        );
      }
      final source = File(p.join(directory.path, 'plugin.ts'))
        ..writeAsStringSync(facade.toString());
      tsFiles.add(source.path);
    }
    final consumer = consumerSource == null
        ? null
        : (File(p.join(directory.path, 'consumer.ts'))
            ..writeAsStringSync(consumerSource));
    final config = File(p.join(directory.path, 'tsconfig.json'))
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
            'paths': {
              ...dependencyPaths,
              '@flax/core/bindings': [
                p.join(root, 'packages/flax/js/src/runtime/bindings.ts'),
              ],
            },
          },
          'files': [...tsFiles, if (consumer != null) consumer.path],
        }),
      );
    final analyzed = await Process.run(Platform.resolvedExecutable, [
      'analyze',
      directory.path,
    ], workingDirectory: root);
    expect(
      analyzed.exitCode,
      0,
      reason: '${analyzed.stdout}\n${analyzed.stderr}',
    );
    final compiled = await Process.run('pnpm', [
      'exec',
      'tsc',
      '--project',
      config.path,
    ], workingDirectory: root);
    expect(
      compiled.exitCode,
      0,
      reason: '${compiled.stdout}\n${compiled.stderr}',
    );
    if (execution != null) {
      final executed = await Process.run('flutter', [
        'test',
        '--no-pub',
        '--reporter',
        'expanded',
        execution.path,
      ], workingDirectory: root);
      expect(
        executed.exitCode,
        0,
        reason: '${executed.stdout}\n${executed.stderr}',
      );
    }
  } finally {
    directory.deleteSync(recursive: true);
  }
}

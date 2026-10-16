import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import '../../flax/test/fixtures/dart_types_selection.dart';
import 'generator_test.dart' show compileFixture;

void main() {
  test('generic selectors reserve static exports in explicit and automatic binding', () async {
    final root = p.normalize(p.join(Directory.current.path, '../..'));
    final parser = FlaxCodegenBindingParser(root);
    addTearDown(parser.dispose);
    final uri = Uri.file(
      p.join(
        root,
        'packages/flax_codegen/test/fixtures/capability/generic_selector.dart',
      ),
    ).toString();
    FlaxCodegenBindingConfig config(
      Map<String, FlaxCodegenClassSelection> classes,
    ) => FlaxCodegenBindingConfig(
      'generic_selector',
      uri,
      '@example/generic-selector',
      'unused.dart',
      'unused.ts',
      classes,
    );
    for (final entry in {
      'SelectorMethod': const FlaxCodegenClassSelection(
        {'': []},
        kind: 'object',
        methods: {r'$type': []},
      ),
      'SelectorGetter': const FlaxCodegenClassSelection(
        {'': []},
        kind: 'object',
        staticGetters: [r'$type'],
      ),
      'SelectorConstructor': const FlaxCodegenClassSelection({
        '': [],
        r'$type': [],
      }, kind: 'object'),
    }.entries) {
      await expectLater(
        parser.parse(config({entry.key: entry.value})),
        throwsA(
          isA<StateError>().having(
            (e) => e.message,
            'message',
            contains('Conflicting generic selector export'),
          ),
        ),
      );
    }
    final automaticParser = FlaxCodegenBindingParser(root);
    addTearDown(automaticParser.dispose);
    final proposal = await automaticParser.proposeLibrary(config({}));
    expect(
      proposal.skips.where(
        (skip) => skip.code == 'generic_selector_export_collision',
      ),
      hasLength(3),
    );
    final automatic = proposal.config;
    expect(
      automatic.classes['SelectorMethod']!.methods,
      isNot(contains(r'$type')),
    );
    expect(
      automatic.classes['SelectorGetter']!.staticGetters,
      isNot(contains(r'$type')),
    );
    expect(
      automatic.classes['SelectorConstructor']!.constructors,
      isNot(contains(r'$type')),
    );
    expect(automatic.classes['OrdinarySelector']!.methods, contains(r'$type'));
    await automaticParser.parse(automatic);
  });

  test('opaque defaults retain independently selectable nominal targets', () async {
    final root = p.normalize(p.join(Directory.current.path, '../..'));
    final parser = FlaxCodegenBindingParser(root);
    addTearDown(parser.dispose);
    final config = FlaxCodegenBindingConfig(
      'opaque_bounds',
      Uri.file(
        p.join(
          root,
          'packages/flax_codegen/test/fixtures/capability/dart_type_bound.dart',
        ),
      ).toString(),
      '@example/opaque-bounds',
      'unused.dart',
      'unused.ts',
      {
        'BigValues': const FlaxCodegenClassSelection({'': []}, kind: 'object'),
        'Bound': const FlaxCodegenClassSelection(
          {'': []},
          kind: 'object',
          getters: ['typeName'],
        ),
      },
    );
    await parser.prepare([config]);
    final module = await parser.parse(config);
    await compileFixture(
      root,
      FlaxCodegenBindingEmitter([module]),
      module,
      consumerSource: '''
import { Bound, BigValues } from './plugin.js';
import { dartType, asDart } from '@flax/core/bindings';
const Default = dartType(Bound);
const defaultName: string = asDart(Default(), Default).typeName;
const Selected = dartType(Bound, BigValues);
const selectedName: string = asDart(Selected(), Selected).typeName;
''',
      dartTestSource: '''
void main() {
  test('default and nominal closed owners stay independent', () {
    final entries = opaque_boundsBindings.types.whereType<FlaxObjectBinding>();
    final base = entries.singleWhere((entry) => entry.aliasOf == null && entry.id.endsWith('::Bound'));
    expect(base.create('', {}), isA<api.Bound<Iterable<BigInt>>>());
    expect(_flaxType_Bound<api.BigValues>(), api.Bound<api.BigValues>);
    expect(opaque_boundsBindings.dartTypes.singleWhere((t) => t.id == base.id).factory, isNotNull);
  });
}
''',
    );
  });

  test(
    'closed type entries compile constructors, nested types and JS subclasses',
    () async {
      final root = p.normalize(p.join(Directory.current.path, '../..'));
      final parser = FlaxCodegenBindingParser(root);
      addTearDown(parser.dispose);
      final config = FlaxCodegenBindingConfig(
        'dart_types',
        Uri.file(p.join(root, 'packages/flax/test/fixtures/dart_types.dart'))
            .toString(),
        '@example/dart-types',
        'unused.dart',
        'unused.ts',
        dartTypesSelection,
      );
      final coreConfig = FlaxCodegenBindingConfig.read(
        p.join(root, 'packages/flax/bindings/config.yaml'),
      );
      final componentsSource = FlaxCodegenBindingConfig.read(
        p.join(root, 'packages/flax/bindings/components.yaml'),
      );
      final componentsConfig = FlaxCodegenBindingConfig(
        componentsSource.name,
        componentsSource.library,
        '@example/type-components',
        'unused-components.dart',
        'unused-components.ts',
        {
          'StatefulWidget': componentsSource.classes['StatefulWidget']!,
          'State': const FlaxCodegenClassSelection({}, kind: 'state'),
        },
      );
      await parser.prepare([componentsConfig, coreConfig, config]);
      final core = await parser.parse(coreConfig);
      final components = await parser.parse(componentsConfig);
      parser.prepareModules([components, core]);
      final module = await parser.parse(config);
      final emitter = FlaxCodegenBindingEmitter([components, core, module]);
      await compileFixture(
        root,
        emitter,
        module,
        consumerSource: '''
import { CodegenTypeBag, CodegenTypeProcessor, CodegenTypeWidget, CodegenTypeBound } from './plugin.js';
import { dartType, dartTypes, asDart, type FlaxDartInstance } from '@flax/core/bindings';
import {BuildContext, Text} from '@flax/flutter/widgets';
import {State} from '@example/type-components';
const Bound = dartType(CodegenTypeBound);
const boundName: string = Bound().typeName;
const compiledString: string = CodegenTypeBag<string>(['typed']).items.get(0);
const compiledNamed: string = CodegenTypeBag.named<string>({items: ['named']}).items.get(0);
// @ts-expect-error explicit constructor type rejects a numeric item
CodegenTypeBag<string>([1]);
const checkedBoundName: string = asDart(Bound(), Bound).typeName;
const Contexts = dartType(CodegenTypeBag, BuildContext);
const States = dartType(CodegenTypeBag, State);
const Widgets = dartType(CodegenTypeBag, Text);
Contexts([]);
States([]);
Widgets([]);
Widgets([Text('generic child')]);
declare const context: import('@flax/flutter/widgets').BuildContext;
declare const state: import('@example/type-components').State;
Contexts([context]);
States([state]);
// @ts-expect-error Context and State tokens keep different Dart identities
Contexts([state]);
// @ts-expect-error a State result is not a Context
const wrongContext: import('@flax/flutter/widgets').BuildContext = States([]).items.get(0);
const WidgetType = dartType(CodegenTypeWidget, dartTypes.string);
WidgetType('factory');
class TypedWidget extends WidgetType { override label(value: string) { return super.label(value) + '!'; } }
const widget = new TypedWidget('native');
const widgetLabel: string = widget.nativeLabel('typed');
const Strings = CodegenTypeBag.\$type(dartTypes.string);
const same: typeof Strings = dartType(CodegenTypeBag, dartTypes.string);
const a = Strings([]);
const text: string = a.items.get(0);
// @ts-expect-error selected constructor inputs retain String
Strings([1]);
// @ts-expect-error selected named constructor inputs retain String
Strings.named({items: [1]});
// @ts-expect-error selected results retain String
const wrongString: number = Strings(['a']).items.get(0);
// @ts-expect-error runtime types must be authenticated
CodegenTypeBag.\$type({});
Strings([], 20);
Strings.named({items: [], capacity: 5});
Strings.labeled([], {capacity: undefined});
Strings.empty();
Strings.setCount(1);
const count: number = Strings.count;
const label: string = Strings.source();
const Nested = dartType(CodegenTypeBag, dartTypes.list(dartTypes.string));
const nested: string = Nested([['a'], []]).items.get(0).get(0);
const MapBag = dartType(CodegenTypeBag, dartTypes.map(dartTypes.string, dartTypes.list(dartTypes.int)));
MapBag([new Map([['a', [1]]])]);
const Nullable = dartType(CodegenTypeBag, dartTypes.list(dartTypes.nullable(dartTypes.string)));
Nullable([[null]]);
const Objects = dartType(CodegenTypeBag, Strings);
Objects([a]);
const restored = asDart(a, Strings);
const checked: string = restored.items.get(0);
const broad = CodegenTypeBag(['a', 1, null]);
// @ts-expect-error no type argument means the default Dart owner
const guessed: string = broad.items.get(0);
// @ts-expect-error the selected type rejects numeric elements
Strings([1]);
dartType(CodegenTypeBag, dartTypes.double)([1.5]);
const Processor = CodegenTypeProcessor.\$type(dartTypes.string);
const processorLabel: string = Processor.source();
const implementation = Processor.implement(['seed'], {});
const concrete: string = implementation.seed;
class Derived extends Processor {
  ownMethod() { return 'derived'; }
  #suffix = '!';
  override transform(value: string) { return super.transform(value) + this.#suffix; }
  override describe() { return super.describe() + this.#suffix; }
}
const derived = new Derived('start', {label: 'named'});
const RealProxies = dartType(CodegenTypeBag, dartTypes.of(derived));
const nativeView = RealProxies([derived]).items.get(0);
const originalSeed: string = nativeView.seed;
// @ts-expect-error A VM type handle does not select a JS-only subclass member.
nativeView.ownMethod();
const represented: FlaxDartInstance<typeof Derived> = derived;
const own: string = represented.ownMethod();
const seed: string = derived.seed;
const result: string = derived.nativeCall('a');
asDart(derived, Processor);
''',
        dartTestSource: '''
void main() {
  test('native closed constructors retain real types and defaults', () {
    final entries = dart_typesBindings.types.whereType<FlaxObjectBinding>();
    final bound = entries.singleWhere((value) => value.aliasOf == null && value.id.contains('CodegenTypeBound'));
    expect(bound.create('', {}), isA<api.CodegenTypeBound<List<BigInt>>>());
    final base = entries.singleWhere((value) => value.aliasOf == null && value.id.contains('CodegenTypeBag'));
    expect(base.create('', {'items': <Object?>['a', 1, null], 'capacity': 10}), isA<api.CodegenTypeBag<Object?>>());
    expect(_flaxType_CodegenTypeBag<String>(), api.CodegenTypeBag<String>);
    expect(_flaxType_CodegenTypeBag<List<String>>(), api.CodegenTypeBag<List<String>>);
    expect(dart_typesBindings.dartTypes.singleWhere((t) => t.id == base.id).factory, isNotNull);
  });
}
''',
      );
    },
  );
}

import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import '../../flax/test/fixtures/dart_types_selection.dart';
import 'generator_test.dart' show compileFixture;

void main() {
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
    final selected = entries.singleWhere((entry) => entry.aliasOf == base.id);
    expect(selected.create('', {}), isA<api.Bound<api.BigValues>>());
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
const checkedBoundName: string = asDart(Bound(), Bound).typeName;
const Contexts = dartType(CodegenTypeBag, BuildContext);
const States = dartType(CodegenTypeBag, State);
const Widgets = dartType(CodegenTypeBag, Text);
Contexts([]);
States([]);
Widgets([]);
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
const Strings = dartType(CodegenTypeBag, dartTypes.string);
const a = Strings([]);
const text: string = a.items.get(0);
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
// @ts-expect-error numeric type keys must stay distinct
dartType(CodegenTypeBag, dartTypes.double);
const Processor = dartType(CodegenTypeProcessor, dartTypes.string);
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
    final strings = entries.singleWhere((value) => value.aliasOf == base.id && value.matches!(api.CodegenTypeBag<String>([])));
    expect(strings.create('', {'items': <String>[], 'capacity': 10}), isA<api.CodegenTypeBag<String>>());
    expect((strings.create('named', {'items': <String>[], 'capacity': 10}) as api.CodegenTypeBag<String>).capacity, 10);
    expect((strings.create('labeled', {'items': <String>[], 'capacity': 20}) as api.CodegenTypeBag<String>).capacity, 20);
    expect(strings.create('empty', {}), isA<api.CodegenTypeBag<String>>());
    expect(() => strings.create('', {'items': <int>[1]}), throwsA(isA<TypeError>()));
    final lists = entries.singleWhere((value) => value.aliasOf == base.id && value.getters.firstWhere((getter) => getter.name == 'items').type.item?.kind == 'list' && !value.getters.firstWhere((getter) => getter.name == 'items').type.item!.nullable && !value.getters.firstWhere((getter) => getter.name == 'items').type.item!.item!.nullable);
    expect(lists.create('', {'items': <List<String>>[[]], 'capacity': 10}), isA<api.CodegenTypeBag<List<String>>>());
  });
}
''',
      );
    },
  );
}

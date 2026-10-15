import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'generator_test.dart' show compileFixture;

void main() {
  final root = p.normalize(p.join(Directory.current.path, '../..'));
  test('shared defaults and directional void inputs compile in both selection modes', () async {
    final parser = FlaxCodegenBindingParser(root);
    addTearDown(parser.dispose);
    final config = FlaxCodegenBindingConfig(
      'completion',
      Uri.file(
        p.join(root, 'packages/flax/test/fixtures/binding_completion.dart'),
      ).toString(),
      '@example/completion',
      'unused.dart',
      'unused.ts',
      const {},
      functions: const {
        'defaultWidget': FlaxCodegenFunctionSelection(['value']),
        'defaultSet': FlaxCodegenFunctionSelection(['value']),
        'voidInput': FlaxCodegenFunctionSelection(['value']),
        'completionOptions': FlaxCodegenFunctionSelection([
          'options',
          'amount',
        ]),
        'voidCallback': FlaxCodegenFunctionSelection(['callback']),
        'returnedVoidCallback': FlaxCodegenFunctionSelection([]),
      },
    );
    final proposal = await parser.proposeLibrary(config);
    expect(proposal.config.functions.keys, containsAll(config.functions.keys));
    final module = await parser.parse(config);
    expect(
      module.functions
          .where((f) => f.call.name.startsWith('default'))
          .every((f) => f.call.parameters.single.omitWhenAbsent),
      isTrue,
    );
    final emitter = FlaxCodegenBindingEmitter([module]);
    expect(emitter.dart(module), isNot(contains(' as void')));
    await compileFixture(
      root,
      emitter,
      module,
      consumerSource: '''
import {defaultWidget, defaultSet, voidInput, voidCallback, returnedVoidCallback, completionOptions} from './plugin.js';
defaultWidget(); defaultSet(); voidInput(null); voidInput(7);
voidCallback(value => { const ignored: void = value; return 1; });
returnedVoidCallback()(null);
completionOptions(2, {amount: 3});
''',
      dartTestSource: '''
void main() {
  test('omission preserves private native defaults and void accepts values', () {
    expect(_function_defaultSet({}), true);
    expect(_function_voidInput({'value': 7}), 7);
    expect(_function_voidInput({'value': null}), 7);
    expect(_function_voidCallback({'callback': (Object? _) => 9}), 9);
    final callback = _function_returnedVoidCallback({}) as Function;
    expect(Function.apply(callback, [null]), 1);
  });
}
''',
    );
  });
  test('generic Widget views, native Function refs and shared proxy constructors compile', () async {
    final parser = FlaxCodegenBindingParser(root);
    addTearDown(parser.dispose);
    final config = FlaxCodegenBindingConfig(
      'proxy_completion',
      Uri.file(
        p.join(root, 'packages/flax/test/fixtures/binding_completion.dart'),
      ).toString(),
      '@example/completion',
      'unused.dart',
      'unused.ts',
      const {
        'CompletionDecorated': FlaxCodegenClassSelection(
          {'': []},
          kind: 'object',
          proxy: 'extends',
          instanceMethods: {
            'decorate': ['value'],
            'nativeDecorate': ['value'],
            'box': ['callback'],
          },
        ),
        'CompletionBox': FlaxCodegenClassSelection(
          {
            '': ['value'],
          },
          kind: 'object',
          getters: ['value', 'typeName'],
          instanceMethods: {
            'visit': ['callback'],
            'visitScoped': ['callback'],
          },
          callbackScopedParameters: {
            'visitScoped.callback': [0],
          },
        ),
        'GenericCell': FlaxCodegenClassSelection(
          {},
          kind: 'widgetInterface',
          getters: ['value'],
        ),
        'MultiProxy': FlaxCodegenClassSelection(
          {
            'left': ['arguments'],
            'right': ['value'],
            'hidden': ['_flaxPeer'],
          },
          kind: 'object',
          proxy: 'extends',
          getters: ['value'],
          instanceMethods: {
            'transform': ['input'],
            'call': ['input'],
          },
        ),
        'GetterProxy': FlaxCodegenClassSelection(
          {'': []},
          kind: 'object',
          proxy: 'extends',
          getters: ['value', 'written'],
          setters: ['value'],
          instanceMethods: {'read': []},
        ),
        'SetterProxy': FlaxCodegenClassSelection(
          {'': []},
          kind: 'object',
          proxy: 'extends',
          getters: ['value'],
          setters: ['value'],
          instanceMethods: {
            'write': ['next'],
          },
        ),
      },
      functions: const {
        'nativeFunction': FlaxCodegenFunctionSelection([]),
        'echoFunction': FlaxCodegenFunctionSelection(['value']),
        'callbackMap': FlaxCodegenFunctionSelection([]),
      },
      extensions: const {
        'CompletionMeters': FlaxCodegenExtensionSelection(
          getters: ['value'],
          methods: {
            'plus': ['amount'],
          },
          staticGetters: ['unit'],
        ),
      },
    );
    await parser.prepare([config]);
    final module = await parser.parse(config);
    expect(
      module.classes.singleWhere((c) => c.name == 'GenericCell').kind,
      'object',
    );
    final emitter = FlaxCodegenBindingEmitter([module]);
    await compileFixture(
      root,
      emitter,
      module,
      consumerSource: r'''
import {CompletionMeters, CompletionDecorated, CompletionBox, MultiProxy, GetterProxy, SetterProxy, nativeFunction, echoFunction, callbackMap, type GenericCell} from './plugin.js';
import {dartSuper, dartTypes, type Widget} from '@flax/core/bindings';
declare const cell: GenericCell<string>;
const nativeWidget: Widget = cell;
const ignored: void = CompletionBox.$type(dartTypes.void)(3).value;
const pending: Promise<void> = CompletionBox.$type(dartTypes.future(dartTypes.void))(Promise.resolve()).value;
const Selected = MultiProxy.$type(dartTypes.string);
class Child extends Selected {
  #prefix = '!';
  constructor() { super(dartSuper(Selected, 'right', {value: 'seed'})); }
  transform(value: string): string { return super.transform(value) + this.#prefix; }
}
class LeftChild extends Selected { constructor() { super('left'); } }
new LeftChild().call('value');
const value: string = new Child().call('test');
class Getter extends GetterProxy { get value(): number { return 7; } }
class Setter extends SetterProxy { set value(value: number) { } }
const getter: GetterProxy = new Getter(); getter.value = 3;
const setter: SetterProxy = new Setter(); const read: number = setter.value;
const fn = nativeFunction(); echoFunction(fn); fn(1, {loud: true});
// @ts-expect-error Raw Function requires a native callable reference.
echoFunction(() => 1);
callbackMap().set(value => value + 1, 'value');
CompletionMeters.view(3).plus(4); CompletionMeters.unit;
class Decorated extends CompletionDecorated { decorate(value: string) {return super.decorate(value) + '!';} }
new Decorated().decorate('a');
''',
    );
  });
}

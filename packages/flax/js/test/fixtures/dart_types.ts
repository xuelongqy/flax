import { DartState } from '@flax/flutter/widgets';
import { dartType, dartTypes, asDart, getDartType } from '@flax/core/bindings';
import { registerPage, Text, BuildContext } from '@flax/flutter/widgets';
import {
  CodegenTypeBag,
  CodegenTypeProcessor,
  CodegenTypeWidget,
  CodegenTypeBound,
  CodegenGrowing,
} from '../../../.dart_tool/flax/ui/dart_types_bindings.js';

const Strings = CodegenTypeBag.$type(dartTypes.string);
const Processor = CodegenTypeProcessor.$type(dartTypes.string);
class Derived extends Processor {
  #suffix = '!';
  override transform(value: string) {
    return super.transform(value) + this.#suffix;
  }
  override describe() {
    return super.describe() + this.#suffix;
  }
}
class FurtherDerived extends Derived {
  override transform(value: string) {
    return super.transform(value) + '?';
  }
}
const WidgetType = CodegenTypeWidget.$type(dartTypes.string);
class DerivedWidget extends WidgetType {
  #suffix = '!';
  override label(value: string) {
    return super.label(value) + this.#suffix;
  }
}
const hooks = {
  exercise() {
    if (
      Strings !== dartType(CodegenTypeBag, dartTypes.string) ||
      CodegenTypeBag.$type !== CodegenTypeProcessor.$type ||
      CodegenTypeBag.$type !== CodegenTypeWidget.$type ||
      CodegenTypeBag.$type() !== CodegenTypeBag ||
      Strings.empty().typeName !== 'String' ||
      Strings.named({ items: ['named'] }).items.get(0) !== 'named' ||
      Strings.labeled(['mixed'], { capacity: 20 }).capacity !== 20 ||
      CodegenTypeBag.$type(dartTypes.list(dartTypes.string))([['nested']])
        .items.get(0)
        .get(0) !== 'nested'
    )
      throw Error('shared class type selector');
    const Bound = dartType(CodegenTypeBound);
    const bound = Bound();
    if (
      Bound !== CodegenTypeBound ||
      bound.typeName !== 'List<BigInt>' ||
      asDart(bound, Bound) !== bound
    )
      throw Error('closed bound defaults without a composed type descriptor');
    if (
      dartType(CodegenTypeBag, BuildContext)([]).typeName !== 'BuildContext' ||
      dartType(CodegenTypeBag, DartState)([]).typeName !== 'State<StatefulWidget>' ||
      dartType(CodegenTypeBag, Text)([]).typeName !== 'Text'
    )
      throw Error('native Widget/Context/State type keys');
    const widgets = dartType(CodegenTypeBag, Text)([Text('generic child')]);
    if (asDart(widgets.items.get(0), Text).data !== 'generic child')
      throw Error('selected native Widget input preserves its Dart value');
    const nativeWidget = new DerivedWidget('widget');
    const actualWidgets = dartType(
      CodegenTypeBag,
      dartTypes.of(nativeWidget),
    )([nativeWidget]);
    if (actualWidgets.items.get(0).nativeLabel('actual') !== 'actual!')
      throw Error('native Widget type handle preserves the JS override');
    if (
      nativeWidget.nativeLabel('typed') !== 'typed!' ||
      asDart(nativeWidget, WidgetType) !== nativeWidget ||
      WidgetType('factory').typeName !== 'String'
    )
      throw Error('generic Widget proxy');
    const previousCount = CodegenTypeBag.count;
    try {
      Strings.setCount(3);
      if (
        CodegenTypeBag.count !== 3 ||
        Strings.count !== 3 ||
        Strings.source() !== 'bag' ||
        Processor.source() !== 'processor'
      )
        throw Error('shared statics');
    } finally {
      CodegenTypeBag.setCount(previousCount);
    }
    const implementation = Processor.implement(['seed'], {});
    if (
      implementation.typeName !== 'String' ||
      implementation.nativeCall('typed') !== 'typed'
    )
      throw Error('selected implementation');
    const a = Strings([]);
    let growing: unknown = dartType(CodegenGrowing, dartTypes.string)('leaf');
    for (let i = 0; i < 24; i++) growing = (growing as { next: unknown }).next;
    let leaf: unknown = (growing as { value: unknown }).value;
    for (let i = 0; i < 24; i++)
      leaf = (leaf as { get(index: number): unknown }).get(0);
    if (leaf !== 'leaf') throw Error('lazy growing generic members');
    const actualList = dartTypes.of(a.items);
    const nullableNativeList = dartType(
      CodegenTypeBag,
      dartTypes.nullable(actualList),
    )([null, a.items]);
    if (
      nullableNativeList.items.get(0) !== null ||
      nullableNativeList.items.get(1)?.length !== 0
    )
      throw Error('nullable native private List type preserves its conversion');
    const actualLists = dartType(CodegenTypeBag, actualList)([a.items]);
    if (
      actualLists.items.get(0).length !== 0 ||
      !getDartType(actualLists).includes('String')
    )
      throw Error('actual type handles compose without emitted entries');
    if (a.typeName !== 'String' || a.capacity !== 10) throw Error('string target');
    if (
      Strings([], 20).capacity !== 20 ||
      Strings.named({ items: [] }).capacity !== 10 ||
      Strings.labeled([], { capacity: undefined }).capacity !== 10 ||
      Strings.empty().typeName !== 'String'
    )
      throw Error('constructor shape/defaults');
    const broad = CodegenTypeBag(['a', 1, null]);
    if (broad.typeName !== 'Object?' || dartType(CodegenTypeBag) !== CodegenTypeBag)
      throw Error('default owner');
    const Lists = dartType(CodegenTypeBag, dartTypes.list(dartTypes.string));
    const nested = Lists([['a'], []]);
    if (nested.typeName !== 'List<String>' || nested.items.get(0).get(0) !== 'a')
      throw Error('nested list');
    const Maps = dartType(
      CodegenTypeBag,
      dartTypes.map(dartTypes.string, dartTypes.list(dartTypes.int)),
    );
    if (
      Maps([new Map([['a', [2]]])])
        .items.get(0)
        .get('a')
        ?.get(0) !== 2
    )
      throw Error('nested map');
    const NullableItems = dartType(
      CodegenTypeBag,
      dartTypes.list(dartTypes.nullable(dartTypes.string)),
    );
    const NullableLists = dartType(
      CodegenTypeBag,
      dartTypes.nullable(dartTypes.list(dartTypes.string)),
    );
    if (
      NullableItems([[null]])
        .items.get(0)
        .get(0) !== null ||
      NullableLists([null]).items.get(0) !== null
    )
      throw Error('nullable layer');
    if (dartType(CodegenTypeBag, dartTypes.double)([1.5]).typeName !== 'double')
      throw Error('runtime type outside the former catalog');
    const Objects = dartType(CodegenTypeBag, Strings);
    if (Objects([a]).items.get(0).typeName !== 'String') throw Error('nested nominal');
    if (
      asDart(a, Strings) !== a ||
      dartType(CodegenTypeBag, dartTypes.string) !== Strings
    )
      throw Error('cast/cache identity');
    let rejected = 0;
    for (const bad of [
      () => Strings([1] as never),
      () => asDart(broad, Strings),
      () => asDart([], Strings),
      () => dartTypes.list({} as never),
      () => Reflect.apply(Strings, undefined, [[], 1, 2]),
    ]) {
      try {
        bad();
      } catch {
        rejected++;
      }
    }
    if (rejected !== 5) throw Error(`rejected ${rejected}`);
    const proxy = new FurtherDerived('seed', { label: 'native' });
    if (
      proxy.typeName !== 'String' ||
      proxy.seed !== 'seed' ||
      proxy.nativeCall('value') !== 'value!?' ||
      proxy.describe() !== 'native!'
    )
      throw Error('proxy type/override/super/private fields');
    if (
      !(proxy instanceof FurtherDerived) ||
      !(proxy instanceof Derived) ||
      !(proxy instanceof Processor) ||
      !(proxy instanceof CodegenTypeProcessor) ||
      asDart(proxy, Processor) !== proxy
    )
      throw Error('proxy identity');
    if (!getDartType(proxy).includes('Proxy')) throw Error('native proxy type');
    return 'dart types verified';
  },
};
(globalThis as typeof globalThis & { dartTypeHooks: typeof hooks }).dartTypeHooks =
  hooks;
registerPage('dart-types', () => new DerivedWidget('mounted'));

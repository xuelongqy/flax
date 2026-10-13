import { DartState } from '@flax/flutter/widgets';
import { dartType, dartTypes, asDart, getDartType } from '@flax/core/bindings';
import { registerPage, Text, BuildContext } from '@flax/flutter/widgets';
import {
  CodegenTypeBag,
  CodegenTypeProcessor,
  CodegenTypeWidget,
  CodegenTypeBound,
} from '../../../.dart_tool/flax/ui/dart_types_bindings.js';

const Strings = dartType(CodegenTypeBag, dartTypes.string);
const Processor = dartType(CodegenTypeProcessor, dartTypes.string);
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
const WidgetType = dartType(CodegenTypeWidget, dartTypes.string);
class DerivedWidget extends WidgetType {
  #suffix = '!';
  override label(value: string) {
    return super.label(value) + this.#suffix;
  }
}
const hooks = {
  exercise() {
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
    const nativeWidget = new DerivedWidget('widget');
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
      () => dartType(CodegenTypeBag, dartTypes.double as never),
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
    if (rejected !== 6) throw Error(`rejected ${rejected}`);
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

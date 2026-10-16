import { registerPage, Text, WidgetStateProperty } from '@flax/flutter/widgets';
import {
  getDartType,
  asDart,
  type DartList,
  type DartOutput,
  type Widget,
} from '@flax/core/bindings';
import {
  CodegenTypeBag as Bag,
  CodegenTypeProcessor as Processor,
} from '../../../.dart_tool/flax/ui/dart_types_bindings.js';
import { ListX } from '../../../.dart_tool/flax/ui/extensions_bindings.js';
import {
  CodegenGenericMethods,
  CodegenBoundedNestedBox,
} from '../../../.dart_tool/flax/ui/interop_bindings.js';

type NestedBag<T> = Bag<Map<string, T>>;

class Child extends Processor<string> {
  #suffix = '!';
  override transform(value: string) {
    return super.transform(value) + this.#suffix;
  }
}
class Grandchild extends Child {
  override transform(value: string) {
    return super.transform(value) + '?';
  }
}
let methodLayers = 0;
class Methods extends CodegenGenericMethods {
  override wrap<T>(value: T | DartOutput<T>): DartList<DartOutput<T>> {
    methodLayers++;
    return super.wrap(value);
  }
  override async later<T>(value: T | DartOutput<T>): Promise<DartOutput<T>> {
    await Promise.resolve();
    return super.later<T>(value);
  }
}

class FurtherMethods extends Methods {
  override wrap<T>(value: T | DartOutput<T>): DartList<DartOutput<T>> {
    methodLayers++;
    return super.wrap<T>(value);
  }
  stringSuper(value: string): DartList<string> {
    return super.wrap<string>(value);
  }
}
const hooks = {
  exercise() {
    const property = WidgetStateProperty.resolveWith<string>(() => 'selected');
    if (
      property.resolve(new Set()) !== 'selected' ||
      !getDartType(property).includes('<String>')
    )
      throw Error('deferred static factory type lost');
    const listView = ListX<string>(['extension']);
    const captured = listView.captured<number>(3);
    if (
      listView.firstValue !== 'extension' ||
      captured.get(0) !== 'extension' ||
      !getDartType(captured).includes('List<String>') ||
      listView.mapFirst<number>((value) => value.length) !== 9
    )
      throw Error('extension owner/method types lost');
    if (listView.nested<string>('outer')<string>('inner') !== 'inner')
      throw Error('nested callback scopes lost');
    const box = CodegenBoundedNestedBox<DartList<string>>(['class']);
    const fromClass = box.identity<DartList<string>>(['callback']);
    if (
      fromClass.get(0) !== 'callback' ||
      !getDartType(fromClass).includes('List<String>')
    )
      throw Error('class callback scope lost');
    const bag = Bag<string>([]);
    const named = Bag.named<string>({ items: ['named'] });
    const inferred = Bag(['inferred']);
    const contextual: Bag<string> = Bag([]);
    const nested = Bag<DartList<string>>([['nested']]);
    const alias = Bag<NestedBag<string>>([]);
    const widgets = Bag<Widget>([Text('compiler widget')]);
    if (widgets.typeName !== 'Widget') throw Error('shared Widget type lost');
    if (asDart(bag, Bag<string>) !== bag) throw Error('typed cast changed identity');
    const child = new Grandchild('seed');
    const methods = new FurtherMethods();
    const wrapped = methods.wrap<string>('wrapped');
    if (bag.typeName !== 'String' || named.items.get(0) !== 'named')
      throw Error('constructor type lost');
    if (
      inferred.typeName !== 'String' ||
      contextual.typeName !== 'String' ||
      !alias.typeName.includes('Map<String, String>') ||
      nested.typeName !== 'List<String>'
    )
      throw Error('inference or nested type lost');
    if (child.typeName !== 'String' || child.nativeCall('native') !== 'native!?')
      throw Error('proxy dispatch lost');
    if (
      !(child instanceof Child) ||
      !(child instanceof Grandchild) ||
      !(child instanceof Processor)
    )
      throw Error('prototype chain lost');
    if (!getDartType(wrapped).includes('<String>') || wrapped.get(0) !== 'wrapped')
      throw Error('method types lost');
    if (methodLayers !== 2) throw Error('lexical JS super skipped a method layer');
    const literal = methods.stringSuper('literal');
    if (!getDartType(literal).includes('<String>') || literal.get(0) !== 'literal')
      throw Error('closed generic super lost');
    return methods.later<string>('async').then((value) => {
      if (value !== 'async') throw Error('async super lost');
      return 'verified';
    });
  },
  cycle() {
    const child = new Grandchild('gc');
    Object.assign(child, { callback: () => child.nativeCall('cycle') });
    const methods = new FurtherMethods();
    Object.assign(methods, { callback: () => methods.wrap<string>('cycle') });
    methods.wrap<string>('cycle');
    Object.assign(globalThis, {
      compilerWeak: new WeakRef(child),
      compilerMethodsWeak: new WeakRef(methods),
    });
  },
  retain() {
    const state = globalThis as typeof globalThis & {
      compilerWeak: WeakRef<Grandchild>;
      compilerMethodsWeak: WeakRef<FurtherMethods>;
      compilerRoot?: Grandchild;
      compilerMethodsRoot?: FurtherMethods;
    };
    state.compilerRoot = state.compilerWeak.deref();
    state.compilerMethodsRoot = state.compilerMethodsWeak.deref();
  },
  release() {
    Object.assign(globalThis, {
      compilerRoot: undefined,
      compilerMethodsRoot: undefined,
    });
  },
};
Object.assign(globalThis, { compilerHooks: hooks });
registerPage('compiler', () => Text('compiler'));

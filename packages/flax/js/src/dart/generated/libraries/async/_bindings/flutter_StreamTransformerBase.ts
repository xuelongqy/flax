// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"stream","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
import { FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_StreamTransformer';
import '@flax/dart/async/_bindings/flutter_StreamTransformer';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_Stream';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface StreamTransformerBase<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null> extends upstream0.StreamTransformer<S, T>, Readonly<{ "__flaxBound:dart:async::StreamTransformerBase": readonly [S, T] }> { readonly __StreamTransformerBase: unique symbol;
}
defineObject("flax.core/flutter#type:StreamTransformerBase", [], [], _flaxBindingMethods("flax.core/flutter#type:StreamTransformerBase", "object", {"bind":_flaxMemberParameters0,"cast":_flaxMemberParameters1}), []);
const _StreamTransformerBaseProxy = {type: "flax.core/flutter#type:StreamTransformerBase", parameters: [], methods: {"bind":_flaxMemberParameters0,"cast":_flaxMemberParameters1}, getters: [], setters: [], superMembers: ["cast"]} as const;
export interface StreamTransformerBase<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null> {
cast<RS extends unknown | null = unknown | null, RT extends unknown | null = unknown | null>(): upstream0.StreamTransformer<RS, RT>;
}
export abstract class StreamTransformerBase<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null> extends _FlaxProxyBase {
constructor() { super(_StreamTransformerBaseProxy, Array.from(arguments)); }
abstract bind(stream: upstream1.Stream<S>): upstream1.Stream<T>;
}
_flaxDefineProxyBase(StreamTransformerBase.prototype, _StreamTransformerBaseProxy);
export namespace StreamTransformerBase { export function implement<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null>(args: [], implementation: {bind: ((stream: upstream1.Stream<S>) => upstream1.Stream<T>)}): StreamTransformerBase<S, T> {
return constructProxy(_StreamTransformerBaseProxy, args, implementation) as StreamTransformerBase<S, T>; } }

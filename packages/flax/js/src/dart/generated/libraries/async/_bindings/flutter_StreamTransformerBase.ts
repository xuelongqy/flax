// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { constructExtendedProxy, invokeProxySuper } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_StreamTransformer';
import '@flax/dart/async/_bindings/flutter_StreamTransformer';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_Stream';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface StreamTransformerBase<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null> extends upstream0.StreamTransformer<S, T>, Readonly<{ "__flaxBound:dart:async::StreamTransformerBase": readonly [S, T] }> { readonly __StreamTransformerBase: unique symbol;
}
defineObject("flax.core/flutter#type:StreamTransformerBase", [], [], {bind(this: object, stream: upstream1.Stream<unknown | null>): upstream1.Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamTransformerBase", "bind", [stream]);
return _flaxResult as upstream1.Stream<unknown | null>;
},
cast(this: object): upstream0.StreamTransformer<unknown | null, unknown | null> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamTransformerBase", "cast", []);
return _flaxResult as upstream0.StreamTransformer<unknown | null, unknown | null>;
},
}, []);
export abstract class StreamTransformerBase<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null> {
constructor() {
constructExtendedProxy(this, StreamTransformerBase.prototype, "flax.core/flutter#type:StreamTransformerBase", [], Array.from(arguments), ["cast","bind"], [], [], ["cast"]);
}
cast<RS extends unknown | null = unknown | null, RT extends unknown | null = unknown | null>(): upstream0.StreamTransformer<RS, RT> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeProxySuper(this, "flax.core/flutter#type:StreamTransformerBase", "cast", []);
return _flaxResult as upstream0.StreamTransformer<RS, RT>;
}
abstract bind(stream: upstream1.Stream<S>): upstream1.Stream<T>;
}
export namespace StreamTransformerBase { export function implement<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null>(args: [], implementation: {bind: ((stream: upstream1.Stream<S>) => upstream1.Stream<T>)}): StreamTransformerBase<S, T> {
return constructProxy("flax.core/flutter#type:StreamTransformerBase", [], args, implementation, ["bind"], [], []) as StreamTransformerBase<S, T>; } }

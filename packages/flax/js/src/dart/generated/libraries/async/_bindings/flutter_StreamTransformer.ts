// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_StreamSubscription';
import '@flax/dart/async/_bindings/flutter_StreamSubscription';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_Stream';
import type * as upstream2 from '@flax/dart/async/_bindings/flutter_EventSink';
import '@flax/dart/async/_bindings/flutter_EventSink';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface StreamTransformer<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:dart:async::StreamTransformer": readonly [S, T] }> { readonly __StreamTransformer: unique symbol;
bind(stream: upstream1.Stream<S>): upstream1.Stream<T>;
cast<RS extends unknown | null = unknown | null, RT extends unknown | null = unknown | null>(): StreamTransformer<RS, RT>;
}
defineObject("flax.core/flutter#type:StreamTransformer", [], [], {bind(this: object, stream: upstream1.Stream<unknown | null>): upstream1.Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamTransformer", "bind", [stream]);
return _flaxResult as upstream1.Stream<unknown | null>;
},
cast(this: object): StreamTransformer<unknown | null, unknown | null> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamTransformer", "cast", []);
return _flaxResult as StreamTransformer<unknown | null, unknown | null>;
},
}, []);
export function StreamTransformer<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null>(onListen: ((stream: upstream1.Stream<S>, cancelOnError: boolean) => upstream0.StreamSubscription<T>)): StreamTransformer<S, T> {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:StreamTransformer", "", [{"name":"onListen","required":true,"positional":true}], [onListen], {}) as StreamTransformer<S, T>;
}
export namespace StreamTransformer {
export function fromHandlers<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null>(options: { handleData?: ((data: S, sink: upstream2.EventSink<T>) => void) | null | undefined; handleError?: ((error: {}, stackTrace: upstream3.StackTrace, sink: upstream2.EventSink<T>) => void) | null | undefined; handleDone?: ((sink: upstream2.EventSink<T>) => void) | null | undefined } = {}): StreamTransformer<S, T> {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:StreamTransformer", "fromHandlers", [{"name":"handleData","required":false,"positional":false},{"name":"handleError","required":false,"positional":false},{"name":"handleDone","required":false,"positional":false}], [], options) as StreamTransformer<S, T>;
}
}
export namespace StreamTransformer {
export function fromBind<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null>(bind: ((p0: upstream1.Stream<S>) => upstream1.Stream<T>)): StreamTransformer<S, T> {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:StreamTransformer", "fromBind", [{"name":"bind","required":true,"positional":true}], [bind], {}) as StreamTransformer<S, T>;
}
}
export namespace StreamTransformer { export function implement<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null>(args: [], implementation: {bind: ((stream: upstream1.Stream<S>) => upstream1.Stream<T>); cast: (<RS extends unknown | null, RT extends unknown | null>() => StreamTransformer<RS, RT>)}): StreamTransformer<S, T> {
return constructProxy("flax.core/flutter#type:StreamTransformer", [], args, implementation, ["bind","cast"], [], []) as StreamTransformer<S, T>; } }
export namespace StreamTransformer { export function castFrom<SS extends unknown | null = unknown | null, ST extends unknown | null = unknown | null, TS extends unknown | null = unknown | null, TT extends unknown | null = unknown | null>(source: StreamTransformer<SS, ST>): StreamTransformer<TS, TT> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStatic("flax.core/flutter#type:StreamTransformer", "castFrom", [source]);
return _flaxResult as StreamTransformer<TS, TT>;
} }

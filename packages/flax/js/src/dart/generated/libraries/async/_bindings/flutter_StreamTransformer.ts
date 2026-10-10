// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindInstanceType as _flaxHostBindInstanceType, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineEnum as _flaxHostDefineEnum, invokeEnum as _flaxHostInvokeEnum, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"stream","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_StreamSubscription';
import '@flax/dart/async/_bindings/flutter_StreamSubscription';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_Stream';
import type * as upstream2 from '@flax/dart/async/_bindings/flutter_EventSink';
import '@flax/dart/async/_bindings/flutter_EventSink';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface StreamTransformer<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:dart:async::StreamTransformer": readonly [S, T] }> { readonly __StreamTransformer: unique symbol;
bind(stream: upstream1.Stream<S>): upstream1.Stream<T>;
cast<RS extends unknown | null = unknown | null, RT extends unknown | null = unknown | null>(): StreamTransformer<RS, RT>;
}
defineObject("flax.core/flutter#type:StreamTransformer", [], [], _flaxBindingMethods("flax.core/flutter#type:StreamTransformer", "object", {"bind":_flaxMemberParameters0,"cast":_flaxMemberParameters1}), []);
function _StreamTransformerFactory<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null>(onListen: ((stream: upstream1.Stream<S>, cancelOnError: boolean) => Readonly<{ "__flaxBound:dart:async::StreamSubscription": readonly [T] }>)): StreamTransformer<S, T> {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:StreamTransformer", "", [{"name":"onListen","required":true,"positional":true}], [onListen], {}) as StreamTransformer<S, T>;
}
namespace _StreamTransformerFactory {
export function fromHandlers<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null>(options: { handleData?: ((data: S, sink: upstream2.EventSink<T>) => void) | null | undefined; handleError?: ((error: {}, stackTrace: upstream3.StackTrace, sink: upstream2.EventSink<T>) => void) | null | undefined; handleDone?: ((sink: upstream2.EventSink<T>) => void) | null | undefined } = {}): StreamTransformer<S, T> {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:StreamTransformer", "fromHandlers", [{"name":"handleData","required":false,"positional":false},{"name":"handleError","required":false,"positional":false},{"name":"handleDone","required":false,"positional":false}], [], options) as StreamTransformer<S, T>;
}
}
namespace _StreamTransformerFactory {
export function fromBind<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null>(bind: ((p0: upstream1.Stream<S>) => upstream1.Stream<T>)): StreamTransformer<S, T> {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:StreamTransformer", "fromBind", [{"name":"bind","required":true,"positional":true}], [bind], {}) as StreamTransformer<S, T>;
}
}
const _StreamTransformerProxy = {type: "flax.core/flutter#type:StreamTransformer", parameters: [], methods: {"bind":_flaxMemberParameters0,"cast":_flaxMemberParameters1}, getters: [], setters: [], superMembers: []} as const;
namespace _StreamTransformerFactory { export function implement<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null>(args: [], implementation: {bind: ((stream: upstream1.Stream<S>) => upstream1.Stream<T>); cast: (<RS extends unknown | null, RT extends unknown | null>() => Readonly<{ "__flaxBound:dart:async::StreamTransformer": readonly [RS, RT] }>)}): StreamTransformer<S, T> {
return constructProxy(_StreamTransformerProxy, args, implementation) as StreamTransformer<S, T>; } }
namespace _StreamTransformerFactory { export function castFrom<SS extends unknown | null = unknown | null, ST extends unknown | null = unknown | null, TS extends unknown | null = unknown | null, TT extends unknown | null = unknown | null>(source: Readonly<{ "__flaxBound:dart:async::StreamTransformer": readonly [SS, ST] }>): StreamTransformer<TS, TT> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStatic("flax.core/flutter#type:StreamTransformer", "castFrom", [source]);
return _flaxResult as StreamTransformer<TS, TT>;
} }
export const StreamTransformer: typeof _StreamTransformerFactory & _FlaxInstanceType<StreamTransformer<any, any>> = _flaxBindInstanceType<StreamTransformer<any, any>, typeof _StreamTransformerFactory>(_StreamTransformerFactory, "flax.core/flutter#type:StreamTransformer", ["dart:core::Object"]);

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_Stream';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface StreamConsumer<S extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:dart:async::StreamConsumer": readonly [S] }> { readonly __StreamConsumer: unique symbol;
addStream(stream: upstream0.Stream<S>): Promise<unknown | null>;
close(): Promise<unknown | null>;
}
defineObject("flax.core/flutter#type:StreamConsumer", [], [], {addStream(this: object, stream: upstream0.Stream<unknown | null>): Promise<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamConsumer", "addStream", [stream]);
return _flaxResult as Promise<unknown | null>;
},
close(this: object): Promise<unknown | null> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamConsumer", "close", []);
return _flaxResult as Promise<unknown | null>;
},
}, []);
export namespace StreamConsumer { export function implement<S extends unknown | null = unknown | null>(args: [], implementation: {addStream: ((stream: upstream0.Stream<S>) => Promise<unknown | null>); close: (() => Promise<unknown | null>)}): StreamConsumer<S> {
return constructProxy("flax.core/flutter#type:StreamConsumer", [], args, implementation, ["addStream","close"], [], []) as StreamConsumer<S>; } }

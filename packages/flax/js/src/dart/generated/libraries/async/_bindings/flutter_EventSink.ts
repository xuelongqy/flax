// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Sink';
import '@flax/dart/core/_bindings/flutter_Sink';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface EventSink<T extends unknown | null = unknown | null> extends upstream0.Sink<T>, Readonly<{ "__flaxBound:dart:async::EventSink": readonly [T] }> { readonly __EventSink: unique symbol;
add(event: T): void;
addError(error: {}, stackTrace?: upstream1.StackTrace | null): void;
close(): void;
}
defineObject("flax.core/flutter#type:EventSink", [], [], {add(this: object, event: unknown | null): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:EventSink", "add", [event]);
},
addError(this: object, error: {}, stackTrace?: upstream1.StackTrace | null): void {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:EventSink", "addError", [error, stackTrace]);
},
close(this: object): void {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:EventSink", "close", []);
},
}, []);
export namespace EventSink { export function implement<T extends unknown | null = unknown | null>(args: [], implementation: {add: ((event: T) => void); addError: ((error: {}, stackTrace?: upstream1.StackTrace | null) => void); close: (() => void)}): EventSink<T> {
return constructProxy("flax.core/flutter#type:EventSink", [], args, implementation, ["add","addError","close"], [], []) as EventSink<T>; } }

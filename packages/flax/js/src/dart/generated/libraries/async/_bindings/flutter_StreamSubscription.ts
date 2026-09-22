// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface StreamSubscription<T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:dart:async::StreamSubscription": readonly [T] }> { readonly __StreamSubscription: unique symbol;
readonly isPaused: boolean;
cancel(): Promise<void>;
onData(handleData: ((data: T) => void) | null): void;
onError(handleError: ((p0: {}, p1?: upstream0.StackTrace) => void) | null): void;
onDone(handleDone: (() => void) | null): void;
pause(resumeSignal?: Promise<void> | null): void;
resume(): void;
asFuture<E extends unknown | null = unknown | null>(futureValue?: E | null): Promise<E>;
}
defineObject("flax.core/flutter#type:StreamSubscription", ["isPaused"], [], {cancel(this: object): Promise<void> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamSubscription", "cancel", []);
return _flaxResult as Promise<void>;
},
onData(this: object, handleData: ((data: unknown | null) => void) | null): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamSubscription", "onData", [handleData]);
},
onError(this: object, handleError: ((p0: {}, p1?: upstream0.StackTrace) => void) | null): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamSubscription", "onError", [handleError]);
},
onDone(this: object, handleDone: (() => void) | null): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamSubscription", "onDone", [handleDone]);
},
pause(this: object, resumeSignal?: Promise<void> | null): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamSubscription", "pause", [resumeSignal]);
},
resume(this: object): void {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamSubscription", "resume", []);
},
asFuture(this: object, futureValue?: unknown | null): Promise<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamSubscription", "asFuture", [futureValue]);
return _flaxResult as Promise<unknown | null>;
},
}, []);

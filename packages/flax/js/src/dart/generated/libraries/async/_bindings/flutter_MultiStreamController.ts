// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_StreamController';
import '@flax/dart/async/_bindings/flutter_StreamController';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_StreamSink';
import '@flax/dart/async/_bindings/flutter_StreamSink';
import type * as upstream2 from '@flax/dart/async/_bindings/flutter_EventSink';
import '@flax/dart/async/_bindings/flutter_EventSink';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_Sink';
import '@flax/dart/core/_bindings/flutter_Sink';
import type * as upstream4 from '@flax/dart/async/_bindings/flutter_StreamConsumer';
import '@flax/dart/async/_bindings/flutter_StreamConsumer';
import type * as upstream5 from '@flax/dart/async/_bindings/flutter_Stream';
import type * as upstream6 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface MultiStreamController<T extends unknown | null = unknown | null> extends upstream0.StreamController<T>, upstream1.StreamSink<T>, upstream2.EventSink<T>, upstream3.Sink<T>, upstream4.StreamConsumer<T>, Readonly<{ "__flaxBound:dart:async::MultiStreamController": readonly [T] }> { readonly __MultiStreamController: unique symbol;
get onListen(): (() => void) | null;
get onPause(): (() => void) | null;
get onResume(): (() => void) | null;
get onCancel(): (() => void | Promise<void>) | null;
readonly stream: upstream5.Stream<T>;
readonly sink: upstream1.StreamSink<T>;
readonly isClosed: boolean;
readonly isPaused: boolean;
readonly hasListener: boolean;
readonly done: Promise<unknown | null>;
add(event: T): void;
addError(error: {}, stackTrace?: upstream6.StackTrace | null): void;
close(): Promise<unknown | null>;
addStream(source: upstream5.Stream<T>, options?: {cancelOnError?: boolean | null | undefined}): Promise<unknown | null>;
addSync(value: T): void;
addErrorSync(error: {}, stackTrace?: upstream6.StackTrace | null): void;
closeSync(): void;
set onListen(value: (() => void) | null);
set onPause(value: (() => void) | null);
set onResume(value: (() => void) | null);
set onCancel(value: (() => void | Promise<void>) | null);
}
defineObject("flax.core/flutter#type:MultiStreamController", ["onListen","onPause","onResume","onCancel","stream","sink","isClosed","isPaused","hasListener","done"], ["onListen","onPause","onResume","onCancel"], {add(this: object, event: unknown | null): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:MultiStreamController", "add", [event]);
},
addError(this: object, error: {}, stackTrace?: upstream6.StackTrace | null): void {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:MultiStreamController", "addError", [error, stackTrace]);
},
close(this: object): Promise<unknown | null> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:MultiStreamController", "close", []);
return _flaxResult as Promise<unknown | null>;
},
addStream(this: object, source: upstream5.Stream<unknown | null>, options: { cancelOnError?: boolean | null | undefined } = {}): Promise<unknown | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["cancelOnError"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:MultiStreamController", "addStream", [source, options.cancelOnError]);
return _flaxResult as Promise<unknown | null>;
},
addSync(this: object, value: unknown | null): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:MultiStreamController", "addSync", [value]);
},
addErrorSync(this: object, error: {}, stackTrace?: upstream6.StackTrace | null): void {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:MultiStreamController", "addErrorSync", [error, stackTrace]);
},
closeSync(this: object): void {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:MultiStreamController", "closeSync", []);
},
}, []);

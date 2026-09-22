// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface Duration extends Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }>, Readonly<{ "__flaxBound:dart:core::Comparable": readonly [Duration] }> { readonly __Duration: unique symbol;
readonly inDays: number;
readonly inHours: number;
readonly inMinutes: number;
readonly inSeconds: number;
readonly inMilliseconds: number;
readonly inMicroseconds: number;
}
defineObject("flax.core/flutter#type:Duration", ["inDays","inHours","inMinutes","inSeconds","inMilliseconds","inMicroseconds"], [], {}, []);
export function Duration(options: { days?: number | undefined; hours?: number | undefined; minutes?: number | undefined; seconds?: number | undefined; milliseconds?: number | undefined; microseconds?: number | undefined } = {}): Duration {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Duration", "", [{"name":"days","required":false,"positional":false},{"name":"hours","required":false,"positional":false},{"name":"minutes","required":false,"positional":false},{"name":"seconds","required":false,"positional":false},{"name":"milliseconds","required":false,"positional":false},{"name":"microseconds","required":false,"positional":false}], [], options) as Duration;
}
export namespace Duration { export declare const zero: Duration; }
Object.defineProperty(Duration, "zero", { get: () => invokeObjectStatic("flax.core/flutter#type:Duration", "zero") });

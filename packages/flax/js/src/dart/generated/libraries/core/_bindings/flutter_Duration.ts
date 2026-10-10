// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindInstanceType as _flaxHostBindInstanceType, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineEnum as _flaxHostDefineEnum, invokeEnum as _flaxHostInvokeEnum, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface Duration extends Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }>, Readonly<{ "__flaxBound:dart:core::Comparable": readonly [Duration] }> { readonly __Duration: unique symbol;
readonly inDays: number;
readonly inHours: number;
readonly inMinutes: number;
readonly inSeconds: number;
readonly inMilliseconds: number;
readonly inMicroseconds: number;
}
defineObject("flax.core/flutter#type:Duration", ["inDays","inHours","inMinutes","inSeconds","inMilliseconds","inMicroseconds"], [], _flaxBindingMethods("flax.core/flutter#type:Duration", "object", {}), []);
function _DurationFactory(options: { days?: number | undefined; hours?: number | undefined; minutes?: number | undefined; seconds?: number | undefined; milliseconds?: number | undefined; microseconds?: number | undefined } = {}): Duration {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Duration", "", [{"name":"days","required":false,"positional":false},{"name":"hours","required":false,"positional":false},{"name":"minutes","required":false,"positional":false},{"name":"seconds","required":false,"positional":false},{"name":"milliseconds","required":false,"positional":false},{"name":"microseconds","required":false,"positional":false}], [], options) as Duration;
}
namespace _DurationFactory { export declare const zero: Duration; }
Object.defineProperty(_DurationFactory, "zero", { get: () => invokeTopLevel("flax.core/flutter#read:Duration.zero", []) });
export const Duration: typeof _DurationFactory & _FlaxInstanceType<Duration> = _flaxBindInstanceType<Duration, typeof _DurationFactory>(_DurationFactory, "flax.core/flutter#type:Duration", ["dart:core::Object","dart:core::Comparable"]);

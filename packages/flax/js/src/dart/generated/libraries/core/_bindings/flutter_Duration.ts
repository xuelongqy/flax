// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"other","required":true,"positional":true}] as const;
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Comparable';
import '@flax/dart/core/_bindings/flutter_Comparable';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Duration extends upstream0.Comparable<Duration>, Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> { readonly __Duration: unique symbol;

readonly inDays: number;
readonly inHours: number;
readonly inMinutes: number;
readonly inSeconds: number;
readonly inMilliseconds: number;
readonly inMicroseconds: number;
compareTo(other: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }>): number;
}
defineObject("flax.core/flutter#type:Duration", ["inDays","inHours","inMinutes","inSeconds","inMilliseconds","inMicroseconds"], [], _flaxBindingMethods("flax.core/flutter#type:Duration", "object", {"compareTo":_flaxMemberParameters0}, {}), []);
function _DurationFactory(options: { days?: number | undefined; hours?: number | undefined; minutes?: number | undefined; seconds?: number | undefined; milliseconds?: number | undefined; microseconds?: number | undefined } = {}): Duration {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Duration", "", [{"name":"days","required":false,"positional":false},{"name":"hours","required":false,"positional":false},{"name":"minutes","required":false,"positional":false},{"name":"seconds","required":false,"positional":false},{"name":"milliseconds","required":false,"positional":false},{"name":"microseconds","required":false,"positional":false}], [], options) as Duration;
}
namespace _DurationFactory { export declare const zero: Duration; }
Object.defineProperty(_DurationFactory, "zero", { get: () => invokeTopLevel("flax.core/flutter#read:Duration.zero", []) });
export const Duration: typeof _DurationFactory & _FlaxInstanceType<Duration> & _FlaxDartType<Duration, readonly ["class", "flax.core/flutter#type:Duration", readonly [], false]> = _flaxBindInstanceType<Duration, typeof _DurationFactory>(_DurationFactory, "flax.core/flutter#type:Duration", ["dart:core::Object","flax.core/flutter#type:Comparable"]) as typeof _DurationFactory & _FlaxInstanceType<Duration> & _FlaxDartType<Duration, readonly ["class", "flax.core/flutter#type:Duration", readonly [], false]>;

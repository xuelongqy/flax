// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"other","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"factor","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"quotient","required":true,"positional":true}] as const;
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Comparable';
import '@flax/dart/core/_bindings/flutter_Comparable';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Duration extends Omit<upstream0.Comparable<Duration>, typeof _flaxDartTypeValue | "inMicroseconds" | "inDays" | "inHours" | "inMinutes" | "inSeconds" | "inMilliseconds" | "isNegative" | "compareTo" | "toString" | "abs" | "operatorAdd" | "operatorSubtract" | "operatorMultiply" | "operatorTruncateDivide" | "operatorLessThan" | "operatorGreaterThan" | "operatorLessThanOrEqual" | "operatorGreaterThanOrEqual" | "operatorNegate">, Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> { readonly __Duration: unique symbol;

readonly inMicroseconds: number;
readonly inDays: number;
readonly inHours: number;
readonly inMinutes: number;
readonly inSeconds: number;
readonly inMilliseconds: number;
readonly isNegative: boolean;
compareTo(other: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }>): number;
toString(): string;
abs(): Duration;
operatorAdd(other: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }>): Duration;
operatorSubtract(other: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }>): Duration;
operatorMultiply(factor: number): Duration;
operatorTruncateDivide(quotient: number): Duration;
operatorLessThan(other: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }>): boolean;
operatorGreaterThan(other: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }>): boolean;
operatorLessThanOrEqual(other: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }>): boolean;
operatorGreaterThanOrEqual(other: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }>): boolean;
operatorNegate(): Duration;
}
defineObject("flax.core/flutter#type:Duration", ["inMicroseconds","inDays","inHours","inMinutes","inSeconds","inMilliseconds","isNegative"], [], _flaxBindingMethods("flax.core/flutter#type:Duration", "object", {"compareTo":_flaxMemberParameters0,"toString":_flaxMemberParameters1,"abs":_flaxMemberParameters1,"operatorAdd":_flaxMemberParameters0,"operatorSubtract":_flaxMemberParameters0,"operatorMultiply":_flaxMemberParameters2,"operatorTruncateDivide":_flaxMemberParameters3,"operatorLessThan":_flaxMemberParameters0,"operatorGreaterThan":_flaxMemberParameters0,"operatorLessThanOrEqual":_flaxMemberParameters0,"operatorGreaterThanOrEqual":_flaxMemberParameters0,"operatorNegate":_flaxMemberParameters1}, {}), []);
export function _DurationFactory(options: { days?: number | undefined; hours?: number | undefined; minutes?: number | undefined; seconds?: number | undefined; milliseconds?: number | undefined; microseconds?: number | undefined } = {}): Duration {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Duration", "", [{"name":"days","required":false,"positional":false},{"name":"hours","required":false,"positional":false},{"name":"minutes","required":false,"positional":false},{"name":"seconds","required":false,"positional":false},{"name":"milliseconds","required":false,"positional":false},{"name":"microseconds","required":false,"positional":false}], [], options) as Duration;
}
export namespace _DurationFactory { export declare const microsecondsPerMillisecond: number; }
Object.defineProperty(_DurationFactory, "microsecondsPerMillisecond", { get: () => invokeTopLevel("flax.core/flutter#read:Duration.microsecondsPerMillisecond", []) });
export namespace _DurationFactory { export declare const millisecondsPerSecond: number; }
Object.defineProperty(_DurationFactory, "millisecondsPerSecond", { get: () => invokeTopLevel("flax.core/flutter#read:Duration.millisecondsPerSecond", []) });
export namespace _DurationFactory { export declare const secondsPerMinute: number; }
Object.defineProperty(_DurationFactory, "secondsPerMinute", { get: () => invokeTopLevel("flax.core/flutter#read:Duration.secondsPerMinute", []) });
export namespace _DurationFactory { export declare const minutesPerHour: number; }
Object.defineProperty(_DurationFactory, "minutesPerHour", { get: () => invokeTopLevel("flax.core/flutter#read:Duration.minutesPerHour", []) });
export namespace _DurationFactory { export declare const hoursPerDay: number; }
Object.defineProperty(_DurationFactory, "hoursPerDay", { get: () => invokeTopLevel("flax.core/flutter#read:Duration.hoursPerDay", []) });
export namespace _DurationFactory { export declare const microsecondsPerSecond: number; }
Object.defineProperty(_DurationFactory, "microsecondsPerSecond", { get: () => invokeTopLevel("flax.core/flutter#read:Duration.microsecondsPerSecond", []) });
export namespace _DurationFactory { export declare const microsecondsPerMinute: number; }
Object.defineProperty(_DurationFactory, "microsecondsPerMinute", { get: () => invokeTopLevel("flax.core/flutter#read:Duration.microsecondsPerMinute", []) });
export namespace _DurationFactory { export declare const microsecondsPerHour: number; }
Object.defineProperty(_DurationFactory, "microsecondsPerHour", { get: () => invokeTopLevel("flax.core/flutter#read:Duration.microsecondsPerHour", []) });
export namespace _DurationFactory { export declare const microsecondsPerDay: number; }
Object.defineProperty(_DurationFactory, "microsecondsPerDay", { get: () => invokeTopLevel("flax.core/flutter#read:Duration.microsecondsPerDay", []) });
export namespace _DurationFactory { export declare const millisecondsPerMinute: number; }
Object.defineProperty(_DurationFactory, "millisecondsPerMinute", { get: () => invokeTopLevel("flax.core/flutter#read:Duration.millisecondsPerMinute", []) });
export namespace _DurationFactory { export declare const millisecondsPerHour: number; }
Object.defineProperty(_DurationFactory, "millisecondsPerHour", { get: () => invokeTopLevel("flax.core/flutter#read:Duration.millisecondsPerHour", []) });
export namespace _DurationFactory { export declare const millisecondsPerDay: number; }
Object.defineProperty(_DurationFactory, "millisecondsPerDay", { get: () => invokeTopLevel("flax.core/flutter#read:Duration.millisecondsPerDay", []) });
export namespace _DurationFactory { export declare const secondsPerHour: number; }
Object.defineProperty(_DurationFactory, "secondsPerHour", { get: () => invokeTopLevel("flax.core/flutter#read:Duration.secondsPerHour", []) });
export namespace _DurationFactory { export declare const secondsPerDay: number; }
Object.defineProperty(_DurationFactory, "secondsPerDay", { get: () => invokeTopLevel("flax.core/flutter#read:Duration.secondsPerDay", []) });
export namespace _DurationFactory { export declare const minutesPerDay: number; }
Object.defineProperty(_DurationFactory, "minutesPerDay", { get: () => invokeTopLevel("flax.core/flutter#read:Duration.minutesPerDay", []) });
export namespace _DurationFactory { export declare const zero: Duration; }
Object.defineProperty(_DurationFactory, "zero", { get: () => invokeTopLevel("flax.core/flutter#read:Duration.zero", []) });
export const Duration: typeof _DurationFactory & _FlaxInstanceType<Duration> & _FlaxDartType<Duration, readonly ["class", "flax.core/flutter#type:Duration", readonly [], false]> = _flaxBindInstanceType<Duration, typeof _DurationFactory>(_DurationFactory, "flax.core/flutter#type:Duration", ["dart:core::Object","flax.core/flutter#type:Comparable"]) as typeof _DurationFactory & _FlaxInstanceType<Duration> & _FlaxDartType<Duration, readonly ["class", "flax.core/flutter#type:Duration", readonly [], false]>;

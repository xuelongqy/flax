// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Comparable';
import '@flax/dart/core/_bindings/flutter_Comparable';
import { _flaxMemberParameters1, _flaxMemberParameters4, _flaxMemberParameters24, _flaxMemberParameters51 } from "@flax/core/navigation/_bindings/flutter.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Duration extends Omit<upstream0.Comparable<Duration>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }>, Readonly<{ "__flaxBound:dart:core::Comparable": readonly [Duration] }> { readonly __Duration: unique symbol;
readonly [_flaxDartTypeValue]: Duration;

readonly inMicroseconds: number;
readonly inDays: number;
readonly inHours: number;
readonly inMinutes: number;
readonly inSeconds: number;
readonly inMilliseconds: number;
readonly isNegative: boolean;
compareTo(other: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [Duration] }>): number;
toString(): string;
abs(): Duration;
operatorAdd(other: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [Duration] }>): Duration;
operatorSubtract(other: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [Duration] }>): Duration;
operatorMultiply(factor: number): Duration;
operatorTruncateDivide(quotient: number): Duration;
operatorLessThan(other: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [Duration] }>): boolean;
operatorGreaterThan(other: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [Duration] }>): boolean;
operatorLessThanOrEqual(other: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [Duration] }>): boolean;
operatorGreaterThanOrEqual(other: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [Duration] }>): boolean;
operatorNegate(): Duration;
}
defineObject("flax.core/flutter#type:Duration", ["inMicroseconds","inDays","inHours","inMinutes","inSeconds","inMilliseconds","isNegative"], [], _flaxBindingMethods("flax.core/flutter#type:Duration", "object", {"compareTo":_flaxMemberParameters1,"toString":_flaxMemberParameters4,"abs":_flaxMemberParameters4,"operatorAdd":_flaxMemberParameters1,"operatorSubtract":_flaxMemberParameters1,"operatorMultiply":_flaxMemberParameters24,"operatorTruncateDivide":_flaxMemberParameters51,"operatorLessThan":_flaxMemberParameters1,"operatorGreaterThan":_flaxMemberParameters1,"operatorLessThanOrEqual":_flaxMemberParameters1,"operatorGreaterThanOrEqual":_flaxMemberParameters1,"operatorNegate":_flaxMemberParameters4}, {}), []);
export function _DurationFactory(options: { days?: number | undefined; hours?: number | undefined; minutes?: number | undefined; seconds?: number | undefined; milliseconds?: number | undefined; microseconds?: number | undefined } = {}): Duration {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Duration", "", [{"name":"days"},{"name":"hours"},{"name":"minutes"},{"name":"seconds"},{"name":"milliseconds"},{"name":"microseconds"}], [], options) as Duration;
}
export namespace _DurationFactory { export declare const microsecondsPerMillisecond: number; }
export namespace _DurationFactory { export declare const millisecondsPerSecond: number; }
export namespace _DurationFactory { export declare const secondsPerMinute: number; }
export namespace _DurationFactory { export declare const minutesPerHour: number; }
export namespace _DurationFactory { export declare const hoursPerDay: number; }
export namespace _DurationFactory { export declare const microsecondsPerSecond: number; }
export namespace _DurationFactory { export declare const microsecondsPerMinute: number; }
export namespace _DurationFactory { export declare const microsecondsPerHour: number; }
export namespace _DurationFactory { export declare const microsecondsPerDay: number; }
export namespace _DurationFactory { export declare const millisecondsPerMinute: number; }
export namespace _DurationFactory { export declare const millisecondsPerHour: number; }
export namespace _DurationFactory { export declare const millisecondsPerDay: number; }
export namespace _DurationFactory { export declare const secondsPerHour: number; }
export namespace _DurationFactory { export declare const secondsPerDay: number; }
export namespace _DurationFactory { export declare const minutesPerDay: number; }
export namespace _DurationFactory { export declare const zero: Duration; }
_flaxDefineStaticGetters(_DurationFactory, "flax.core/flutter#read:Duration.", ["microsecondsPerMillisecond","millisecondsPerSecond","secondsPerMinute","minutesPerHour","hoursPerDay","microsecondsPerSecond","microsecondsPerMinute","microsecondsPerHour","microsecondsPerDay","millisecondsPerMinute","millisecondsPerHour","millisecondsPerDay","secondsPerHour","secondsPerDay","minutesPerDay","zero"]);
export const Duration: typeof _DurationFactory & _FlaxInstanceType<Duration> & _FlaxDartType<Duration, readonly ["class", "flax.core/flutter#type:Duration", readonly [], false]> = _flaxBindInstanceType<Duration, typeof _DurationFactory>(_DurationFactory, "flax.core/flutter#type:Duration", ["dart:core::Object","flax.core/flutter#type:Comparable"]) as typeof _DurationFactory & _FlaxInstanceType<Duration> & _FlaxDartType<Duration, readonly ["class", "flax.core/flutter#type:Duration", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "inMicroseconds" | "inDays" | "inHours" | "inMinutes" | "inSeconds" | "inMilliseconds" | "isNegative" | "compareTo" | "toString" | "abs" | "operatorAdd" | "operatorSubtract" | "operatorMultiply" | "operatorTruncateDivide" | "operatorLessThan" | "operatorGreaterThan" | "operatorLessThanOrEqual" | "operatorGreaterThanOrEqual" | "operatorNegate" | "__flaxBound:dart:core::Duration" | "__flaxBound:dart:core::Comparable";

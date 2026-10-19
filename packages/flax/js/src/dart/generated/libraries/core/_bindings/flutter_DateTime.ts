// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Comparable';
import '@flax/dart/core/_bindings/flutter_Comparable';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { _flaxMemberParameters0, _flaxMemberParameters3, _flaxMemberParameters41 } from "@flax/core/navigation/_bindings/flutter.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DateTime extends Omit<upstream0.Comparable<DateTime>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>, Readonly<{ "__flaxBound:dart:core::Comparable": readonly [DateTime] }> { readonly __DateTime: unique symbol;
readonly [_flaxDartTypeValue]: DateTime;

readonly isUtc: boolean;
readonly millisecondsSinceEpoch: number;
readonly microsecondsSinceEpoch: number;
readonly timeZoneName: string;
readonly timeZoneOffset: upstream1.Duration;
readonly year: number;
readonly month: number;
readonly day: number;
readonly hour: number;
readonly minute: number;
readonly second: number;
readonly millisecond: number;
readonly microsecond: number;
readonly weekday: number;
compareTo(other: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): number;
isBefore(other: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): boolean;
isAfter(other: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): boolean;
isAtSameMomentAs(other: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): boolean;
toLocal(): DateTime;
toUtc(): DateTime;
toString(): string;
toIso8601String(): string;
add(duration: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }>): DateTime;
subtract(duration: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }>): DateTime;
difference(other: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): upstream1.Duration;
}
defineObject("flax.core/flutter#type:DateTime", ["isUtc","millisecondsSinceEpoch","microsecondsSinceEpoch","timeZoneName","timeZoneOffset","year","month","day","hour","minute","second","millisecond","microsecond","weekday"], [], _flaxBindingMethods("flax.core/flutter#type:DateTime", "object", {"compareTo":_flaxMemberParameters0,"isBefore":_flaxMemberParameters0,"isAfter":_flaxMemberParameters0,"isAtSameMomentAs":_flaxMemberParameters0,"toLocal":_flaxMemberParameters3,"toUtc":_flaxMemberParameters3,"toString":_flaxMemberParameters3,"toIso8601String":_flaxMemberParameters3,"add":_flaxMemberParameters41,"subtract":_flaxMemberParameters41,"difference":_flaxMemberParameters0}, {}), []);
export function _DateTimeFactory(year: number, month?: number, day?: number, hour?: number, minute?: number, second?: number, millisecond?: number, microsecond?: number): DateTime {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 8) throw new TypeError('Too many constructor arguments');
if (month === undefined && (day !== undefined || hour !== undefined || minute !== undefined || second !== undefined || millisecond !== undefined || microsecond !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
if (day === undefined && (hour !== undefined || minute !== undefined || second !== undefined || millisecond !== undefined || microsecond !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
if (hour === undefined && (minute !== undefined || second !== undefined || millisecond !== undefined || microsecond !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
if (minute === undefined && (second !== undefined || millisecond !== undefined || microsecond !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
if (second === undefined && (millisecond !== undefined || microsecond !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
if (millisecond === undefined && (microsecond !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
return constructObject("object", "flax.core/flutter#type:DateTime", "", [{"name":"year","required":true,"positional":true},{"name":"month","positional":true},{"name":"day","positional":true},{"name":"hour","positional":true},{"name":"minute","positional":true},{"name":"second","positional":true},{"name":"millisecond","positional":true},{"name":"microsecond","positional":true}], [year, month, day, hour, minute, second, millisecond, microsecond], {}) as DateTime;
}
export namespace _DateTimeFactory {
export function utc(year: number, month?: number, day?: number, hour?: number, minute?: number, second?: number, millisecond?: number, microsecond?: number): DateTime {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 8) throw new TypeError('Too many constructor arguments');
if (month === undefined && (day !== undefined || hour !== undefined || minute !== undefined || second !== undefined || millisecond !== undefined || microsecond !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
if (day === undefined && (hour !== undefined || minute !== undefined || second !== undefined || millisecond !== undefined || microsecond !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
if (hour === undefined && (minute !== undefined || second !== undefined || millisecond !== undefined || microsecond !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
if (minute === undefined && (second !== undefined || millisecond !== undefined || microsecond !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
if (second === undefined && (millisecond !== undefined || microsecond !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
if (millisecond === undefined && (microsecond !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
return constructObject("object", "flax.core/flutter#type:DateTime", "utc", [{"name":"year","required":true,"positional":true},{"name":"month","positional":true},{"name":"day","positional":true},{"name":"hour","positional":true},{"name":"minute","positional":true},{"name":"second","positional":true},{"name":"millisecond","positional":true},{"name":"microsecond","positional":true}], [year, month, day, hour, minute, second, millisecond, microsecond], {}) as DateTime;
}
}
export namespace _DateTimeFactory {
export function now(): DateTime {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:DateTime", "now", _flaxMemberParameters3, [], {}) as DateTime;
}
}
export namespace _DateTimeFactory {
export function timestamp(): DateTime {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:DateTime", "timestamp", _flaxMemberParameters3, [], {}) as DateTime;
}
}
export namespace _DateTimeFactory {
export function fromMillisecondsSinceEpoch(millisecondsSinceEpoch: number, options: { isUtc?: boolean | undefined } = {}): DateTime {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:DateTime", "fromMillisecondsSinceEpoch", [{"name":"millisecondsSinceEpoch","required":true,"positional":true},{"name":"isUtc"}], [millisecondsSinceEpoch], options) as DateTime;
}
}
export namespace _DateTimeFactory {
export function fromMicrosecondsSinceEpoch(microsecondsSinceEpoch: number, options: { isUtc?: boolean | undefined } = {}): DateTime {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:DateTime", "fromMicrosecondsSinceEpoch", [{"name":"microsecondsSinceEpoch","required":true,"positional":true},{"name":"isUtc"}], [microsecondsSinceEpoch], options) as DateTime;
}
}
export namespace _DateTimeFactory { export declare const monday: number; }
export namespace _DateTimeFactory { export declare const tuesday: number; }
export namespace _DateTimeFactory { export declare const wednesday: number; }
export namespace _DateTimeFactory { export declare const thursday: number; }
export namespace _DateTimeFactory { export declare const friday: number; }
export namespace _DateTimeFactory { export declare const saturday: number; }
export namespace _DateTimeFactory { export declare const sunday: number; }
export namespace _DateTimeFactory { export declare const daysPerWeek: number; }
export namespace _DateTimeFactory { export declare const january: number; }
export namespace _DateTimeFactory { export declare const february: number; }
export namespace _DateTimeFactory { export declare const march: number; }
export namespace _DateTimeFactory { export declare const april: number; }
export namespace _DateTimeFactory { export declare const may: number; }
export namespace _DateTimeFactory { export declare const june: number; }
export namespace _DateTimeFactory { export declare const july: number; }
export namespace _DateTimeFactory { export declare const august: number; }
export namespace _DateTimeFactory { export declare const september: number; }
export namespace _DateTimeFactory { export declare const october: number; }
export namespace _DateTimeFactory { export declare const november: number; }
export namespace _DateTimeFactory { export declare const december: number; }
export namespace _DateTimeFactory { export declare const monthsPerYear: number; }
_flaxDefineStaticGetters(_DateTimeFactory, "flax.core/flutter#read:DateTime.", ["monday","tuesday","wednesday","thursday","friday","saturday","sunday","daysPerWeek","january","february","march","april","may","june","july","august","september","october","november","december","monthsPerYear"]);
export namespace _DateTimeFactory { export function parse(formattedString: string): DateTime {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:DateTime.parse", [formattedString]);
return _flaxResult as DateTime;
} }
export namespace _DateTimeFactory { export function tryParse(formattedString: string): DateTime | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:DateTime.tryParse", [formattedString]);
return _flaxResult as DateTime | null;
} }
export const DateTime: typeof _DateTimeFactory & _FlaxInstanceType<DateTime> & _FlaxDartType<DateTime, readonly ["class", "flax.core/flutter#type:DateTime", readonly [], false]> = _flaxBindInstanceType<DateTime, typeof _DateTimeFactory>(_DateTimeFactory, "flax.core/flutter#type:DateTime", ["dart:core::Object","flax.core/flutter#type:Comparable"]) as typeof _DateTimeFactory & _FlaxInstanceType<DateTime> & _FlaxDartType<DateTime, readonly ["class", "flax.core/flutter#type:DateTime", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isUtc" | "millisecondsSinceEpoch" | "microsecondsSinceEpoch" | "timeZoneName" | "timeZoneOffset" | "year" | "month" | "day" | "hour" | "minute" | "second" | "millisecond" | "microsecond" | "weekday" | "compareTo" | "isBefore" | "isAfter" | "isAtSameMomentAs" | "toLocal" | "toUtc" | "toString" | "toIso8601String" | "add" | "subtract" | "difference" | "__flaxBound:dart:core::DateTime" | "__flaxBound:dart:core::Comparable";

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"other","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"duration","required":true,"positional":true}] as const;
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Comparable';
import '@flax/dart/core/_bindings/flutter_Comparable';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DateTime extends upstream0.Comparable<DateTime>, Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }> { readonly __DateTime: unique symbol;

readonly year: number;
readonly month: number;
readonly day: number;
readonly hour: number;
readonly minute: number;
readonly second: number;
readonly millisecond: number;
readonly microsecond: number;
readonly weekday: number;
readonly isUtc: boolean;
readonly millisecondsSinceEpoch: number;
readonly microsecondsSinceEpoch: number;
readonly timeZoneName: string;
readonly timeZoneOffset: upstream1.Duration;
compareTo(other: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): number;
toIso8601String(): string;
toString(): string;
toUtc(): DateTime;
toLocal(): DateTime;
add(duration: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }>): DateTime;
subtract(duration: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }>): DateTime;
difference(other: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): upstream1.Duration;
isBefore(other: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): boolean;
isAfter(other: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): boolean;
isAtSameMomentAs(other: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): boolean;
}
defineObject("flax.core/flutter#type:DateTime", ["year","month","day","hour","minute","second","millisecond","microsecond","weekday","isUtc","millisecondsSinceEpoch","microsecondsSinceEpoch","timeZoneName","timeZoneOffset"], [], _flaxBindingMethods("flax.core/flutter#type:DateTime", "object", {"compareTo":_flaxMemberParameters0,"toIso8601String":_flaxMemberParameters1,"toString":_flaxMemberParameters1,"toUtc":_flaxMemberParameters1,"toLocal":_flaxMemberParameters1,"add":_flaxMemberParameters2,"subtract":_flaxMemberParameters2,"difference":_flaxMemberParameters0,"isBefore":_flaxMemberParameters0,"isAfter":_flaxMemberParameters0,"isAtSameMomentAs":_flaxMemberParameters0}, {}), []);
function _DateTimeFactory(year: number, month?: number, day?: number, hour?: number, minute?: number, second?: number, millisecond?: number, microsecond?: number): DateTime {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 8) throw new TypeError('Too many constructor arguments');
if (month === undefined && (day !== undefined || hour !== undefined || minute !== undefined || second !== undefined || millisecond !== undefined || microsecond !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
if (day === undefined && (hour !== undefined || minute !== undefined || second !== undefined || millisecond !== undefined || microsecond !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
if (hour === undefined && (minute !== undefined || second !== undefined || millisecond !== undefined || microsecond !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
if (minute === undefined && (second !== undefined || millisecond !== undefined || microsecond !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
if (second === undefined && (millisecond !== undefined || microsecond !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
if (millisecond === undefined && (microsecond !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
return constructObject("object", "flax.core/flutter#type:DateTime", "", [{"name":"year","required":true,"positional":true},{"name":"month","required":false,"positional":true},{"name":"day","required":false,"positional":true},{"name":"hour","required":false,"positional":true},{"name":"minute","required":false,"positional":true},{"name":"second","required":false,"positional":true},{"name":"millisecond","required":false,"positional":true},{"name":"microsecond","required":false,"positional":true}], [year, month, day, hour, minute, second, millisecond, microsecond], {}) as DateTime;
}
namespace _DateTimeFactory {
export function utc(year: number, month?: number, day?: number, hour?: number, minute?: number, second?: number, millisecond?: number, microsecond?: number): DateTime {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 8) throw new TypeError('Too many constructor arguments');
if (month === undefined && (day !== undefined || hour !== undefined || minute !== undefined || second !== undefined || millisecond !== undefined || microsecond !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
if (day === undefined && (hour !== undefined || minute !== undefined || second !== undefined || millisecond !== undefined || microsecond !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
if (hour === undefined && (minute !== undefined || second !== undefined || millisecond !== undefined || microsecond !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
if (minute === undefined && (second !== undefined || millisecond !== undefined || microsecond !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
if (second === undefined && (millisecond !== undefined || microsecond !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
if (millisecond === undefined && (microsecond !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
return constructObject("object", "flax.core/flutter#type:DateTime", "utc", [{"name":"year","required":true,"positional":true},{"name":"month","required":false,"positional":true},{"name":"day","required":false,"positional":true},{"name":"hour","required":false,"positional":true},{"name":"minute","required":false,"positional":true},{"name":"second","required":false,"positional":true},{"name":"millisecond","required":false,"positional":true},{"name":"microsecond","required":false,"positional":true}], [year, month, day, hour, minute, second, millisecond, microsecond], {}) as DateTime;
}
}
namespace _DateTimeFactory {
export function now(): DateTime {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:DateTime", "now", [], [], {}) as DateTime;
}
}
namespace _DateTimeFactory {
export function fromMillisecondsSinceEpoch(millisecondsSinceEpoch: number, options: { isUtc?: boolean | undefined } = {}): DateTime {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:DateTime", "fromMillisecondsSinceEpoch", [{"name":"millisecondsSinceEpoch","required":true,"positional":true},{"name":"isUtc","required":false,"positional":false}], [millisecondsSinceEpoch], options) as DateTime;
}
}
namespace _DateTimeFactory {
export function fromMicrosecondsSinceEpoch(microsecondsSinceEpoch: number, options: { isUtc?: boolean | undefined } = {}): DateTime {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:DateTime", "fromMicrosecondsSinceEpoch", [{"name":"microsecondsSinceEpoch","required":true,"positional":true},{"name":"isUtc","required":false,"positional":false}], [microsecondsSinceEpoch], options) as DateTime;
}
}
namespace _DateTimeFactory { export function parse(formattedString: string): DateTime {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:DateTime.parse", [formattedString]);
return _flaxResult as DateTime;
} }
namespace _DateTimeFactory { export function tryParse(formattedString: string): DateTime | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:DateTime.tryParse", [formattedString]);
return _flaxResult as DateTime | null;
} }
export const DateTime: typeof _DateTimeFactory & _FlaxInstanceType<DateTime> & _FlaxDartType<DateTime, readonly ["class", "flax.core/flutter#type:DateTime", readonly [], false]> = _flaxBindInstanceType<DateTime, typeof _DateTimeFactory>(_DateTimeFactory, "flax.core/flutter#type:DateTime", ["dart:core::Object","flax.core/flutter#type:Comparable"]) as typeof _DateTimeFactory & _FlaxInstanceType<DateTime> & _FlaxDartType<DateTime, readonly ["class", "flax.core/flutter#type:DateTime", readonly [], false]>;

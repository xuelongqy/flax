// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindInstanceType as _flaxHostBindInstanceType, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineEnum as _flaxHostDefineEnum, invokeEnum as _flaxHostInvokeEnum, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"duration","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"other","required":true,"positional":true}] as const;
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface DateTime extends Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>, Readonly<{ "__flaxBound:dart:core::Comparable": readonly [DateTime] }> { readonly __DateTime: unique symbol;
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
readonly timeZoneOffset: upstream0.Duration;
toIso8601String(): string;
toString(): string;
toUtc(): DateTime;
toLocal(): DateTime;
add(duration: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }>): DateTime;
subtract(duration: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }>): DateTime;
difference(other: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): upstream0.Duration;
isBefore(other: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): boolean;
isAfter(other: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): boolean;
isAtSameMomentAs(other: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): boolean;
compareTo(other: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): number;
}
defineObject("flax.core/flutter#type:DateTime", ["year","month","day","hour","minute","second","millisecond","microsecond","weekday","isUtc","millisecondsSinceEpoch","microsecondsSinceEpoch","timeZoneName","timeZoneOffset"], [], _flaxBindingMethods("flax.core/flutter#type:DateTime", "object", {"toIso8601String":_flaxMemberParameters0,"toString":_flaxMemberParameters0,"toUtc":_flaxMemberParameters0,"toLocal":_flaxMemberParameters0,"add":_flaxMemberParameters1,"subtract":_flaxMemberParameters1,"difference":_flaxMemberParameters2,"isBefore":_flaxMemberParameters2,"isAfter":_flaxMemberParameters2,"isAtSameMomentAs":_flaxMemberParameters2,"compareTo":_flaxMemberParameters2}), []);
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
export const DateTime: typeof _DateTimeFactory & _FlaxInstanceType<DateTime> = _flaxBindInstanceType<DateTime, typeof _DateTimeFactory>(_DateTimeFactory, "flax.core/flutter#type:DateTime", ["dart:core::Object","dart:core::Comparable"]);

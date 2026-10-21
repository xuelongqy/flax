// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Comparable';
import '@flax/dart/core/_bindings/flutter_Comparable';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import type * as upstream2 from '@flax/material-ui/_bindings/material_DayPeriod';
import '@flax/material-ui/_bindings/material_DayPeriod';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { _flaxMemberParameters183, _flaxMemberParameters346, _flaxMemberParameters0, _flaxMemberParameters4, _flaxMemberParameters347, _flaxMemberParameters348 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TimeOfDay extends Omit<upstream0.Comparable<TimeOfDay>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:material_ui/src/time.dart::TimeOfDay": readonly [] }>, Readonly<{ "__flaxBound:dart:core::Comparable": readonly [TimeOfDay] }> { readonly __TimeOfDay: unique symbol;
readonly [_flaxDartTypeValue]: TimeOfDay;

readonly hour: number;
readonly minute: number;
readonly period: upstream2.DayPeriod;
readonly hourOfPeriod: number;
readonly periodOffset: number;
compareTo(other: Readonly<{ "__flaxBound:package:material_ui/src/time.dart::TimeOfDay": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [TimeOfDay] }>): number;
replacing(options?: {hour?: number | null | undefined; minute?: number | null | undefined}): TimeOfDay;
format(context: upstream3.BuildContext): string;
isBefore(other: Readonly<{ "__flaxBound:package:material_ui/src/time.dart::TimeOfDay": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [TimeOfDay] }>): boolean;
isAfter(other: Readonly<{ "__flaxBound:package:material_ui/src/time.dart::TimeOfDay": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [TimeOfDay] }>): boolean;
isAtSameTimeAs(other: Readonly<{ "__flaxBound:package:material_ui/src/time.dart::TimeOfDay": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [TimeOfDay] }>): boolean;
toString(): string;
}
defineObject("flax.material/material#type:TimeOfDay", ["hour","minute","period","hourOfPeriod","periodOffset"], [], _flaxBindingMethods("flax.material/material#type:TimeOfDay", "object", {"compareTo":_flaxMemberParameters183,"replacing":_flaxMemberParameters346,"format":_flaxMemberParameters0,"isBefore":_flaxMemberParameters183,"isAfter":_flaxMemberParameters183,"isAtSameTimeAs":_flaxMemberParameters183,"toString":_flaxMemberParameters4}, {}), []);
export function _TimeOfDayFactory(options: { hour: number; minute: number }): TimeOfDay {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:TimeOfDay", "", [{"name":"hour","required":true},{"name":"minute","required":true}], [], options) as TimeOfDay;
}
export namespace _TimeOfDayFactory {
export function fromDateTime(time: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): TimeOfDay {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:TimeOfDay", "fromDateTime", [{"name":"time","required":true,"positional":true}], [time], {}) as TimeOfDay;
}
}
export namespace _TimeOfDayFactory {
export function now(): TimeOfDay {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:TimeOfDay", "now", _flaxMemberParameters4, [], {}) as TimeOfDay;
}
}
const _TimeOfDayProxy = {type: "flax.material/material#type:TimeOfDay", parameters: _flaxMemberParameters347, constructors: {"": _flaxMemberParameters347,"fromDateTime": _flaxMemberParameters348,"now": _flaxMemberParameters4}, methods: {"compareTo":_flaxMemberParameters183,"replacing":_flaxMemberParameters346,"format":_flaxMemberParameters0,"isBefore":_flaxMemberParameters183,"isAfter":_flaxMemberParameters183,"isAtSameTimeAs":_flaxMemberParameters183,"toString":_flaxMemberParameters4}, getters: ["hour","minute","period","hourOfPeriod","periodOffset"], setters: [], contextMembers: [], superMembers: ["get:hour","get:minute","get:period","get:hourOfPeriod","get:periodOffset","compareTo","replacing","format","isBefore","isAfter","isAtSameTimeAs","toString"]} as const;
export interface _TimeOfDayNative extends TimeOfDay {
readonly [_flaxDartTypeValue]: _TimeOfDayNative;
readonly [_flaxDartConstructors]?: {"": (options: {hour: number; minute: number}) => void;"fromDateTime": (time: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>) => void;"now": () => void;};

compareTo(other: Readonly<{ "__flaxBound:package:material_ui/src/time.dart::TimeOfDay": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [TimeOfDay] }>): number;
replacing(options?: {hour?: number | null | undefined; minute?: number | null | undefined}): TimeOfDay;
format(context: upstream3.BuildContext): string;
isBefore(other: Readonly<{ "__flaxBound:package:material_ui/src/time.dart::TimeOfDay": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [TimeOfDay] }>): boolean;
isAfter(other: Readonly<{ "__flaxBound:package:material_ui/src/time.dart::TimeOfDay": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [TimeOfDay] }>): boolean;
isAtSameTimeAs(other: Readonly<{ "__flaxBound:package:material_ui/src/time.dart::TimeOfDay": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [TimeOfDay] }>): boolean;
toString(): string;
get hour(): number;
get minute(): number;
get period(): upstream2.DayPeriod;
get hourOfPeriod(): number;
get periodOffset(): number;
}
export abstract class _TimeOfDayNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TimeOfDay>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TimeOfDay;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:TimeOfDay", readonly [], false];
constructor(options: {hour: number; minute: number}); constructor(call: _FlaxProxySuper<_TimeOfDayNative>); constructor(...args: unknown[]) { super(_TimeOfDayProxy, args); }
}
_flaxDefineProxyBase(_TimeOfDayNative.prototype, _TimeOfDayProxy);
export namespace _TimeOfDayFactory { export function implement(args: [options: {hour: number; minute: number}], implementation: {}): TimeOfDay {
return constructProxy(_TimeOfDayProxy, args, implementation) as TimeOfDay; } }
const _TimeOfDayBinding = _flaxProxyFactory(_TimeOfDayFactory, _TimeOfDayNative) as unknown as typeof _TimeOfDayFactory & (new(options: {hour: number; minute: number}) => _TimeOfDayNative) & (new(call: _FlaxProxySuper<_TimeOfDayNative>) => _TimeOfDayNative);
export namespace _TimeOfDayFactory { export declare const hoursPerDay: number; }
export namespace _TimeOfDayFactory { export declare const hoursPerPeriod: number; }
export namespace _TimeOfDayFactory { export declare const minutesPerHour: number; }
_flaxDefineStaticGetters(_TimeOfDayFactory, "flax.material/material#read:TimeOfDay.", ["hoursPerDay","hoursPerPeriod","minutesPerHour"]);
export const TimeOfDay: typeof _TimeOfDayBinding & _FlaxInstanceType<TimeOfDay> & _FlaxDartType<TimeOfDay, readonly ["class", "flax.material/material#type:TimeOfDay", readonly [], false]> = _flaxBindInstanceType<TimeOfDay, typeof _TimeOfDayBinding>(_TimeOfDayBinding, "flax.material/material#type:TimeOfDay", ["dart:core::Object","flax.core/flutter#type:Comparable"]) as typeof _TimeOfDayBinding & _FlaxInstanceType<TimeOfDay> & _FlaxDartType<TimeOfDay, readonly ["class", "flax.material/material#type:TimeOfDay", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hour" | "minute" | "period" | "hourOfPeriod" | "periodOffset" | "compareTo" | "replacing" | "format" | "isBefore" | "isAfter" | "isAtSameTimeAs" | "toString" | "__flaxBound:package:material_ui/src/time.dart::TimeOfDay" | "__flaxBound:dart:core::Comparable";

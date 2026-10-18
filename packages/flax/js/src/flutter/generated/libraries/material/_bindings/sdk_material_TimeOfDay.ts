// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Comparable';
import '@flax/dart/core/_bindings/flutter_Comparable';
import type * as upstream1 from '@flax/flutter/material/_bindings/sdk_material_DayPeriod';
import '@flax/flutter/material/_bindings/sdk_material_DayPeriod';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
const _flaxMemberParameters0 = [{"name":"other","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"hour","required":false,"positional":false},{"name":"minute","required":false,"positional":false}] as const;
const _flaxMemberParameters2 = [{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}] as const;
const _flaxMemberParameters3 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TimeOfDay extends Omit<upstream0.Comparable<TimeOfDay>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/material/time.dart::TimeOfDay": readonly [] }>, Readonly<{ "__flaxBound:dart:core::Comparable": readonly [TimeOfDay] }> { readonly __TimeOfDay: unique symbol;
readonly [_flaxDartTypeValue]: TimeOfDay;

}
defineObject("flax.core/sdk_material#type:TimeOfDay", ["hour","minute","period","hourOfPeriod","periodOffset"], [], _flaxBindingMethods("flax.core/sdk_material#type:TimeOfDay", "object", {"compareTo":_flaxMemberParameters0,"replacing":_flaxMemberParameters1,"format":_flaxMemberParameters2,"isBefore":_flaxMemberParameters0,"isAfter":_flaxMemberParameters0,"isAtSameTimeAs":_flaxMemberParameters0,"toString":_flaxMemberParameters3}, {}), []);
const _TimeOfDayProxy = {type: "flax.core/sdk_material#type:TimeOfDay", parameters: [{"name":"hour","required":true,"positional":false},{"name":"minute","required":true,"positional":false}], constructors: {"":[{"name":"hour","required":true,"positional":false},{"name":"minute","required":true,"positional":false}]}, methods: {"compareTo":_flaxMemberParameters0,"replacing":_flaxMemberParameters1,"format":_flaxMemberParameters2,"isBefore":_flaxMemberParameters0,"isAfter":_flaxMemberParameters0,"isAtSameTimeAs":_flaxMemberParameters0,"toString":_flaxMemberParameters3}, getters: ["hour","minute","period","hourOfPeriod","periodOffset"], setters: [], contextMembers: [], superMembers: ["get:hour","get:minute","get:period","get:hourOfPeriod","get:periodOffset","compareTo","replacing","format","isBefore","isAfter","isAtSameTimeAs","toString"]} as const;
export interface TimeOfDay {
readonly [_flaxDartTypeValue]: TimeOfDay;

compareTo(other: Readonly<{ "__flaxBound:package:flutter/src/material/time.dart::TimeOfDay": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [TimeOfDay] }>): number;
replacing(options?: {hour?: number | null | undefined; minute?: number | null | undefined}): TimeOfDay;
format(context: upstream2.BuildContext): string;
isBefore(other: Readonly<{ "__flaxBound:package:flutter/src/material/time.dart::TimeOfDay": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [TimeOfDay] }>): boolean;
isAfter(other: Readonly<{ "__flaxBound:package:flutter/src/material/time.dart::TimeOfDay": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [TimeOfDay] }>): boolean;
isAtSameTimeAs(other: Readonly<{ "__flaxBound:package:flutter/src/material/time.dart::TimeOfDay": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [TimeOfDay] }>): boolean;
toString(): string;
get hour(): number;
get minute(): number;
get period(): upstream1.DayPeriod;
get hourOfPeriod(): number;
get periodOffset(): number;
}
export abstract class TimeOfDay extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TimeOfDay>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TimeOfDay;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:TimeOfDay", readonly [], false];
constructor(options: {hour: number; minute: number}) { super(_TimeOfDayProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TimeOfDay.prototype, _TimeOfDayProxy);
export namespace TimeOfDay { export function implement(args: [options: {hour: number; minute: number}], implementation: {}): TimeOfDay {
return constructProxy(_TimeOfDayProxy, args, implementation) as TimeOfDay; } }
export namespace TimeOfDay { export declare const hoursPerDay: number; }
export namespace TimeOfDay { export declare const hoursPerPeriod: number; }
export namespace TimeOfDay { export declare const minutesPerHour: number; }
_flaxDefineStaticGetters(TimeOfDay, "flax.core/sdk_material#read:TimeOfDay.", ["hoursPerDay","hoursPerPeriod","minutesPerHour"]);
_flaxBindInstanceType<TimeOfDay, typeof TimeOfDay>(TimeOfDay, "flax.core/sdk_material#type:TimeOfDay", ["dart:core::Object","flax.core/flutter#type:Comparable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hour" | "minute" | "period" | "hourOfPeriod" | "periodOffset" | "compareTo" | "replacing" | "format" | "isBefore" | "isAfter" | "isAtSameTimeAs" | "toString" | "__flaxBound:package:flutter/src/material/time.dart::TimeOfDay" | "__flaxBound:dart:core::Comparable";

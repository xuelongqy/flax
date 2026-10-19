// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import type * as upstream1 from '@flax/flutter/material/_bindings/sdk_material_DateTimeRange';
import '@flax/flutter/material/_bindings/sdk_material_DateTimeRange';
import type * as upstream2 from '@flax/flutter/material/_bindings/sdk_material_MaterialLocalizations';
import '@flax/flutter/material/_bindings/sdk_material_MaterialLocalizations';
import { _flaxMemberParameters2, _flaxMemberParameters30, _flaxMemberParameters31, _flaxMemberParameters32, _flaxMemberParameters33, _flaxMemberParameters34, _flaxMemberParameters35, _flaxMemberParameters36, _flaxMemberParameters37, _flaxMemberParameters38, _flaxMemberParameters39, _flaxMemberParameters40, _flaxMemberParameters41, _flaxMemberParameters42 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CalendarDelegate<T extends upstream0.DateTime = upstream0.DateTime> extends Readonly<{ "__flaxBound:package:flutter/src/material/date.dart::CalendarDelegate": readonly [T] }> { readonly __CalendarDelegate: unique symbol;
readonly [_flaxDartTypeValue]: CalendarDelegate<T>;

}
defineObject("flax.core/sdk_material#type:CalendarDelegate", [], [], _flaxBindingMethods("flax.core/sdk_material#type:CalendarDelegate", "object", {"now":_flaxMemberParameters2,"dateOnly":_flaxMemberParameters30,"datesOnly":_flaxMemberParameters31,"isSameDay":_flaxMemberParameters32,"isSameMonth":_flaxMemberParameters32,"monthDelta":_flaxMemberParameters33,"addMonthsToMonthDate":_flaxMemberParameters34,"addDaysToDate":_flaxMemberParameters35,"firstDayOffset":_flaxMemberParameters36,"getDaysInMonth":_flaxMemberParameters37,"getMonth":_flaxMemberParameters37,"getDay":_flaxMemberParameters38,"formatMonthYear":_flaxMemberParameters39,"formatYear":_flaxMemberParameters40,"formatMediumDate":_flaxMemberParameters39,"formatShortMonthDay":_flaxMemberParameters39,"formatShortDate":_flaxMemberParameters39,"formatFullDate":_flaxMemberParameters39,"formatCompactDate":_flaxMemberParameters39,"parseCompactDate":_flaxMemberParameters41,"dateHelpText":_flaxMemberParameters42}, {}), []);
const _CalendarDelegateProxy = {type: "flax.core/sdk_material#type:CalendarDelegate", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"now":_flaxMemberParameters2,"dateOnly":_flaxMemberParameters30,"datesOnly":_flaxMemberParameters31,"isSameDay":_flaxMemberParameters32,"isSameMonth":_flaxMemberParameters32,"monthDelta":_flaxMemberParameters33,"addMonthsToMonthDate":_flaxMemberParameters34,"addDaysToDate":_flaxMemberParameters35,"firstDayOffset":_flaxMemberParameters36,"getDaysInMonth":_flaxMemberParameters37,"getMonth":_flaxMemberParameters37,"getDay":_flaxMemberParameters38,"formatMonthYear":_flaxMemberParameters39,"formatYear":_flaxMemberParameters40,"formatMediumDate":_flaxMemberParameters39,"formatShortMonthDay":_flaxMemberParameters39,"formatShortDate":_flaxMemberParameters39,"formatFullDate":_flaxMemberParameters39,"formatCompactDate":_flaxMemberParameters39,"parseCompactDate":_flaxMemberParameters41,"dateHelpText":_flaxMemberParameters42}, getters: [], setters: [], contextMembers: [], superMembers: ["datesOnly","isSameDay","isSameMonth","formatYear"]} as const;
export interface CalendarDelegate<T extends upstream0.DateTime = upstream0.DateTime> {
readonly [_flaxDartTypeValue]: CalendarDelegate<T>;

datesOnly(range: Readonly<{ "__flaxBound:package:flutter/src/material/date.dart::DateTimeRange": readonly [T] }>): upstream1.DateTimeRange<T>;
isSameDay(dateA: (T | DartInput<T>) | null, dateB: (T | DartInput<T>) | null): boolean;
isSameMonth(dateA: (T | DartInput<T>) | null, dateB: (T | DartInput<T>) | null): boolean;
formatYear(year: number, localizations: Readonly<{ "__flaxBound:package:flutter/src/material/material_localizations.dart::MaterialLocalizations": readonly [] }>): string;
}
export abstract class CalendarDelegate<T extends upstream0.DateTime = upstream0.DateTime> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CalendarDelegate<upstream0.DateTime>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CalendarDelegate<upstream0.DateTime>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:CalendarDelegate", readonly [readonly ["class", "flax.core/flutter#type:DateTime", readonly [], false]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor() { super(_CalendarDelegateProxy, Array.from(arguments)); }
abstract now(): T;
abstract dateOnly(date: (T | DartInput<T>)): T;
abstract monthDelta(startDate: (T | DartInput<T>), endDate: (T | DartInput<T>)): number;
abstract addMonthsToMonthDate(monthDate: (T | DartInput<T>), monthsToAdd: number): T;
abstract addDaysToDate(date: (T | DartInput<T>), days: number): T;
abstract firstDayOffset(year: number, month: number, localizations: Readonly<{ "__flaxBound:package:flutter/src/material/material_localizations.dart::MaterialLocalizations": readonly [] }>): number;
abstract getDaysInMonth(year: number, month: number): number;
abstract getMonth(year: number, month: number): T;
abstract getDay(year: number, month: number, day: number): T;
abstract formatMonthYear(date: (T | DartInput<T>), localizations: Readonly<{ "__flaxBound:package:flutter/src/material/material_localizations.dart::MaterialLocalizations": readonly [] }>): string;
abstract formatMediumDate(date: (T | DartInput<T>), localizations: Readonly<{ "__flaxBound:package:flutter/src/material/material_localizations.dart::MaterialLocalizations": readonly [] }>): string;
abstract formatShortMonthDay(date: (T | DartInput<T>), localizations: Readonly<{ "__flaxBound:package:flutter/src/material/material_localizations.dart::MaterialLocalizations": readonly [] }>): string;
abstract formatShortDate(date: (T | DartInput<T>), localizations: Readonly<{ "__flaxBound:package:flutter/src/material/material_localizations.dart::MaterialLocalizations": readonly [] }>): string;
abstract formatFullDate(date: (T | DartInput<T>), localizations: Readonly<{ "__flaxBound:package:flutter/src/material/material_localizations.dart::MaterialLocalizations": readonly [] }>): string;
abstract formatCompactDate(date: (T | DartInput<T>), localizations: Readonly<{ "__flaxBound:package:flutter/src/material/material_localizations.dart::MaterialLocalizations": readonly [] }>): string;
abstract parseCompactDate(inputString: string | null, localizations: Readonly<{ "__flaxBound:package:flutter/src/material/material_localizations.dart::MaterialLocalizations": readonly [] }>): T | null;
abstract dateHelpText(localizations: Readonly<{ "__flaxBound:package:flutter/src/material/material_localizations.dart::MaterialLocalizations": readonly [] }>): string;
}
_flaxDefineProxyBase(CalendarDelegate.prototype, _CalendarDelegateProxy);
export namespace CalendarDelegate { export function implement<T extends upstream0.DateTime = upstream0.DateTime>(args: [], implementation: {now: (() => (T | DartInput<T>)); dateOnly: ((date: T) => (T | DartInput<T>)); monthDelta: ((startDate: T, endDate: T) => number); addMonthsToMonthDate: ((monthDate: T, monthsToAdd: number) => (T | DartInput<T>)); addDaysToDate: ((date: T, days: number) => (T | DartInput<T>)); firstDayOffset: ((year: number, month: number, localizations: upstream2.MaterialLocalizations) => number); getDaysInMonth: ((year: number, month: number) => number); getMonth: ((year: number, month: number) => (T | DartInput<T>)); getDay: ((year: number, month: number, day: number) => (T | DartInput<T>)); formatMonthYear: ((date: T, localizations: upstream2.MaterialLocalizations) => string); formatMediumDate: ((date: T, localizations: upstream2.MaterialLocalizations) => string); formatShortMonthDay: ((date: T, localizations: upstream2.MaterialLocalizations) => string); formatShortDate: ((date: T, localizations: upstream2.MaterialLocalizations) => string); formatFullDate: ((date: T, localizations: upstream2.MaterialLocalizations) => string); formatCompactDate: ((date: T, localizations: upstream2.MaterialLocalizations) => string); parseCompactDate: ((inputString: string | null, localizations: upstream2.MaterialLocalizations) => (T | DartInput<T>) | null); dateHelpText: ((localizations: upstream2.MaterialLocalizations) => string)}): CalendarDelegate<T> {
return constructProxy(_CalendarDelegateProxy, args, implementation) as CalendarDelegate<T>; } }
_flaxBindInstanceType<CalendarDelegate<upstream0.DateTime>, typeof CalendarDelegate>(CalendarDelegate, "flax.core/sdk_material#type:CalendarDelegate", ["dart:core::Object"]);
_flaxDefineDartTypes(CalendarDelegate, "flax.core/sdk_material#type:CalendarDelegate", {...{"category":"object","constructors":{}}, proxy: _CalendarDelegateProxy});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.DateTime] ? (abstract new () => CalendarDelegate<_Selected0>) & {readonly prototype: CalendarDelegate<_Selected0>;implement(args: readonly [], implementation: Partial<CalendarDelegate<_Selected0>>): CalendarDelegate<_Selected0>;} & _FlaxInstanceType<CalendarDelegate<_Selected0>> & _FlaxDartType<CalendarDelegate<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.DateTime] ? (abstract new () => CalendarDelegate<_Selected0>) & {readonly prototype: CalendarDelegate<_Selected0>;implement(args: readonly [], implementation: Partial<CalendarDelegate<_Selected0>>): CalendarDelegate<_Selected0>;} & _FlaxInstanceType<CalendarDelegate<_Selected0>> & _FlaxDartType<CalendarDelegate<_Selected0>> : never : never; }

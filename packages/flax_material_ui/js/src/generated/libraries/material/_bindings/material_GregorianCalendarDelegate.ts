// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_CalendarDelegate';
import '@flax/material-ui/_bindings/material_CalendarDelegate';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import type * as upstream2 from '@flax/material-ui/_bindings/material_DateTimeRange';
import '@flax/material-ui/_bindings/material_DateTimeRange';
import type * as upstream3 from '@flax/material-ui/_bindings/material_MaterialLocalizations';
import '@flax/material-ui/_bindings/material_MaterialLocalizations';
import { _flaxMemberParameters2, _flaxMemberParameters30, _flaxMemberParameters31, _flaxMemberParameters32, _flaxMemberParameters33, _flaxMemberParameters34, _flaxMemberParameters35, _flaxMemberParameters36, _flaxMemberParameters37, _flaxMemberParameters38, _flaxMemberParameters39, _flaxMemberParameters40, _flaxMemberParameters41, _flaxMemberParameters42 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface GregorianCalendarDelegate extends Omit<upstream0.CalendarDelegate<upstream1.DateTime>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:material_ui/src/date.dart::GregorianCalendarDelegate": readonly [] }>, Readonly<{ "__flaxBound:package:material_ui/src/date.dart::CalendarDelegate": readonly [upstream1.DateTime] }> { readonly __GregorianCalendarDelegate: unique symbol;
readonly [_flaxDartTypeValue]: GregorianCalendarDelegate;

now(): upstream1.DateTime;
dateOnly(date: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): upstream1.DateTime;
datesOnly(range: Readonly<{ "__flaxBound:package:material_ui/src/date.dart::DateTimeRange": readonly [upstream1.DateTime] }>): upstream2.DateTimeRange<upstream1.DateTime>;
isSameDay(dateA: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>> | null, dateB: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>> | null): boolean;
isSameMonth(dateA: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>> | null, dateB: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>> | null): boolean;
monthDelta(startDate: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>, endDate: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): number;
addMonthsToMonthDate(monthDate: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>, monthsToAdd: number): upstream1.DateTime;
addDaysToDate(date: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>, days: number): upstream1.DateTime;
firstDayOffset(year: number, month: number, localizations: Readonly<{ "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [] }>): number;
getDaysInMonth(year: number, month: number): number;
getMonth(year: number, month: number): upstream1.DateTime;
getDay(year: number, month: number, day: number): upstream1.DateTime;
formatMonthYear(date: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>, localizations: Readonly<{ "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [] }>): string;
formatYear(year: number, localizations: Readonly<{ "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [] }>): string;
formatMediumDate(date: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>, localizations: Readonly<{ "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [] }>): string;
formatShortMonthDay(date: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>, localizations: Readonly<{ "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [] }>): string;
formatShortDate(date: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>, localizations: Readonly<{ "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [] }>): string;
formatFullDate(date: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>, localizations: Readonly<{ "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [] }>): string;
formatCompactDate(date: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>, localizations: Readonly<{ "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [] }>): string;
parseCompactDate(inputString: string | null, localizations: Readonly<{ "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [] }>): upstream1.DateTime | null;
dateHelpText(localizations: Readonly<{ "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [] }>): string;
}
defineObject("flax.material/material#type:GregorianCalendarDelegate", [], [], _flaxBindingMethods("flax.material/material#type:GregorianCalendarDelegate", "object", {"now":_flaxMemberParameters2,"dateOnly":_flaxMemberParameters30,"datesOnly":_flaxMemberParameters31,"isSameDay":_flaxMemberParameters32,"isSameMonth":_flaxMemberParameters32,"monthDelta":_flaxMemberParameters33,"addMonthsToMonthDate":_flaxMemberParameters34,"addDaysToDate":_flaxMemberParameters35,"firstDayOffset":_flaxMemberParameters36,"getDaysInMonth":_flaxMemberParameters37,"getMonth":_flaxMemberParameters37,"getDay":_flaxMemberParameters38,"formatMonthYear":_flaxMemberParameters39,"formatYear":_flaxMemberParameters40,"formatMediumDate":_flaxMemberParameters39,"formatShortMonthDay":_flaxMemberParameters39,"formatShortDate":_flaxMemberParameters39,"formatFullDate":_flaxMemberParameters39,"formatCompactDate":_flaxMemberParameters39,"parseCompactDate":_flaxMemberParameters41,"dateHelpText":_flaxMemberParameters42}, {}), []);
export function _GregorianCalendarDelegateFactory(): GregorianCalendarDelegate {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:GregorianCalendarDelegate", "", _flaxMemberParameters2, [], {}) as GregorianCalendarDelegate;
}
const _GregorianCalendarDelegateProxy = {type: "flax.material/material#type:GregorianCalendarDelegate", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"now":_flaxMemberParameters2,"dateOnly":_flaxMemberParameters30,"datesOnly":_flaxMemberParameters31,"isSameDay":_flaxMemberParameters32,"isSameMonth":_flaxMemberParameters32,"monthDelta":_flaxMemberParameters33,"addMonthsToMonthDate":_flaxMemberParameters34,"addDaysToDate":_flaxMemberParameters35,"firstDayOffset":_flaxMemberParameters36,"getDaysInMonth":_flaxMemberParameters37,"getMonth":_flaxMemberParameters37,"getDay":_flaxMemberParameters38,"formatMonthYear":_flaxMemberParameters39,"formatYear":_flaxMemberParameters40,"formatMediumDate":_flaxMemberParameters39,"formatShortMonthDay":_flaxMemberParameters39,"formatShortDate":_flaxMemberParameters39,"formatFullDate":_flaxMemberParameters39,"formatCompactDate":_flaxMemberParameters39,"parseCompactDate":_flaxMemberParameters41,"dateHelpText":_flaxMemberParameters42}, getters: [], setters: [], contextMembers: [], superMembers: ["now","dateOnly","datesOnly","isSameDay","isSameMonth","monthDelta","addMonthsToMonthDate","addDaysToDate","firstDayOffset","getDaysInMonth","getMonth","getDay","formatMonthYear","formatYear","formatMediumDate","formatShortMonthDay","formatShortDate","formatFullDate","formatCompactDate","parseCompactDate","dateHelpText"]} as const;
export interface _GregorianCalendarDelegateNative extends GregorianCalendarDelegate {
readonly [_flaxDartTypeValue]: _GregorianCalendarDelegateNative;

now(): upstream1.DateTime;
dateOnly(date: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): upstream1.DateTime;
datesOnly(range: Readonly<{ "__flaxBound:package:material_ui/src/date.dart::DateTimeRange": readonly [upstream1.DateTime] }>): upstream2.DateTimeRange<upstream1.DateTime>;
isSameDay(dateA: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>> | null, dateB: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>> | null): boolean;
isSameMonth(dateA: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>> | null, dateB: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>> | null): boolean;
monthDelta(startDate: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>, endDate: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): number;
addMonthsToMonthDate(monthDate: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>, monthsToAdd: number): upstream1.DateTime;
addDaysToDate(date: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>, days: number): upstream1.DateTime;
firstDayOffset(year: number, month: number, localizations: Readonly<{ "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [] }>): number;
getDaysInMonth(year: number, month: number): number;
getMonth(year: number, month: number): upstream1.DateTime;
getDay(year: number, month: number, day: number): upstream1.DateTime;
formatMonthYear(date: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>, localizations: Readonly<{ "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [] }>): string;
formatYear(year: number, localizations: Readonly<{ "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [] }>): string;
formatMediumDate(date: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>, localizations: Readonly<{ "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [] }>): string;
formatShortMonthDay(date: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>, localizations: Readonly<{ "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [] }>): string;
formatShortDate(date: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>, localizations: Readonly<{ "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [] }>): string;
formatFullDate(date: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>, localizations: Readonly<{ "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [] }>): string;
formatCompactDate(date: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>, localizations: Readonly<{ "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [] }>): string;
parseCompactDate(inputString: string | null, localizations: Readonly<{ "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [] }>): upstream1.DateTime | null;
dateHelpText(localizations: Readonly<{ "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [] }>): string;
}
export abstract class _GregorianCalendarDelegateNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GregorianCalendarDelegate>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: GregorianCalendarDelegate;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:GregorianCalendarDelegate", readonly [], false];
constructor() { super(_GregorianCalendarDelegateProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_GregorianCalendarDelegateNative.prototype, _GregorianCalendarDelegateProxy);
export namespace _GregorianCalendarDelegateFactory { export function implement(args: [], implementation: {}): GregorianCalendarDelegate {
return constructProxy(_GregorianCalendarDelegateProxy, args, implementation) as GregorianCalendarDelegate; } }
const _GregorianCalendarDelegateBinding = _flaxProxyFactory(_GregorianCalendarDelegateFactory, _GregorianCalendarDelegateNative) as unknown as typeof _GregorianCalendarDelegateFactory & (new() => _GregorianCalendarDelegateNative);
export const GregorianCalendarDelegate: typeof _GregorianCalendarDelegateBinding & _FlaxInstanceType<GregorianCalendarDelegate> & _FlaxDartType<GregorianCalendarDelegate, readonly ["class", "flax.material/material#type:GregorianCalendarDelegate", readonly [], false]> = _flaxBindInstanceType<GregorianCalendarDelegate, typeof _GregorianCalendarDelegateBinding>(_GregorianCalendarDelegateBinding, "flax.material/material#type:GregorianCalendarDelegate", ["flax.material/material#type:CalendarDelegate","dart:core::Object"]) as typeof _GregorianCalendarDelegateBinding & _FlaxInstanceType<GregorianCalendarDelegate> & _FlaxDartType<GregorianCalendarDelegate, readonly ["class", "flax.material/material#type:GregorianCalendarDelegate", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "now" | "dateOnly" | "datesOnly" | "isSameDay" | "isSameMonth" | "monthDelta" | "addMonthsToMonthDate" | "addDaysToDate" | "firstDayOffset" | "getDaysInMonth" | "getMonth" | "getDay" | "formatMonthYear" | "formatYear" | "formatMediumDate" | "formatShortMonthDay" | "formatShortDate" | "formatFullDate" | "formatCompactDate" | "parseCompactDate" | "dateHelpText" | "__flaxBound:package:material_ui/src/date.dart::GregorianCalendarDelegate" | "__flaxBound:package:material_ui/src/date.dart::CalendarDelegate";

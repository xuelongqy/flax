// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_CalendarDelegate';
import '@flax/flutter/material/_bindings/sdk_material_CalendarDelegate';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import type * as upstream2 from '@flax/flutter/material/_bindings/sdk_material_DateTimeRange';
import '@flax/flutter/material/_bindings/sdk_material_DateTimeRange';
import type * as upstream3 from '@flax/flutter/material/_bindings/sdk_material_MaterialLocalizations';
import '@flax/flutter/material/_bindings/sdk_material_MaterialLocalizations';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"date","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"range","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"dateA","required":true,"positional":true},{"name":"dateB","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"startDate","required":true,"positional":true},{"name":"endDate","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"monthDate","required":true,"positional":true},{"name":"monthsToAdd","required":true,"positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"date","required":true,"positional":true},{"name":"days","required":true,"positional":true}] as const;
const _flaxMemberParameters7 = [{"name":"year","required":true,"positional":true},{"name":"month","required":true,"positional":true},{"name":"localizations","required":true,"positional":true}] as const;
const _flaxMemberParameters8 = [{"name":"year","required":true,"positional":true},{"name":"month","required":true,"positional":true}] as const;
const _flaxMemberParameters9 = [{"name":"year","required":true,"positional":true},{"name":"month","required":true,"positional":true},{"name":"day","required":true,"positional":true}] as const;
const _flaxMemberParameters10 = [{"name":"date","required":true,"positional":true},{"name":"localizations","required":true,"positional":true}] as const;
const _flaxMemberParameters11 = [{"name":"year","required":true,"positional":true},{"name":"localizations","required":true,"positional":true}] as const;
const _flaxMemberParameters12 = [{"name":"inputString","required":true,"positional":true},{"name":"localizations","required":true,"positional":true}] as const;
const _flaxMemberParameters13 = [{"name":"localizations","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface GregorianCalendarDelegate extends Omit<upstream0.CalendarDelegate<upstream1.DateTime>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/material/date.dart::GregorianCalendarDelegate": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/material/date.dart::CalendarDelegate": readonly [upstream1.DateTime] }> { readonly __GregorianCalendarDelegate: unique symbol;
readonly [_flaxDartTypeValue]: GregorianCalendarDelegate;

}
defineObject("flax.core/sdk_material#type:GregorianCalendarDelegate", [], [], _flaxBindingMethods("flax.core/sdk_material#type:GregorianCalendarDelegate", "object", {"now":_flaxMemberParameters0,"dateOnly":_flaxMemberParameters1,"datesOnly":_flaxMemberParameters2,"isSameDay":_flaxMemberParameters3,"isSameMonth":_flaxMemberParameters3,"monthDelta":_flaxMemberParameters4,"addMonthsToMonthDate":_flaxMemberParameters5,"addDaysToDate":_flaxMemberParameters6,"firstDayOffset":_flaxMemberParameters7,"getDaysInMonth":_flaxMemberParameters8,"getMonth":_flaxMemberParameters8,"getDay":_flaxMemberParameters9,"formatMonthYear":_flaxMemberParameters10,"formatYear":_flaxMemberParameters11,"formatMediumDate":_flaxMemberParameters10,"formatShortMonthDay":_flaxMemberParameters10,"formatShortDate":_flaxMemberParameters10,"formatFullDate":_flaxMemberParameters10,"formatCompactDate":_flaxMemberParameters10,"parseCompactDate":_flaxMemberParameters12,"dateHelpText":_flaxMemberParameters13}, {}), []);
const _GregorianCalendarDelegateProxy = {type: "flax.core/sdk_material#type:GregorianCalendarDelegate", parameters: [], constructors: {"":[]}, methods: {"now":_flaxMemberParameters0,"dateOnly":_flaxMemberParameters1,"datesOnly":_flaxMemberParameters2,"isSameDay":_flaxMemberParameters3,"isSameMonth":_flaxMemberParameters3,"monthDelta":_flaxMemberParameters4,"addMonthsToMonthDate":_flaxMemberParameters5,"addDaysToDate":_flaxMemberParameters6,"firstDayOffset":_flaxMemberParameters7,"getDaysInMonth":_flaxMemberParameters8,"getMonth":_flaxMemberParameters8,"getDay":_flaxMemberParameters9,"formatMonthYear":_flaxMemberParameters10,"formatYear":_flaxMemberParameters11,"formatMediumDate":_flaxMemberParameters10,"formatShortMonthDay":_flaxMemberParameters10,"formatShortDate":_flaxMemberParameters10,"formatFullDate":_flaxMemberParameters10,"formatCompactDate":_flaxMemberParameters10,"parseCompactDate":_flaxMemberParameters12,"dateHelpText":_flaxMemberParameters13}, getters: [], setters: [], contextMembers: [], superMembers: ["now","dateOnly","datesOnly","isSameDay","isSameMonth","monthDelta","addMonthsToMonthDate","addDaysToDate","firstDayOffset","getDaysInMonth","getMonth","getDay","formatMonthYear","formatYear","formatMediumDate","formatShortMonthDay","formatShortDate","formatFullDate","formatCompactDate","parseCompactDate","dateHelpText"]} as const;
export interface GregorianCalendarDelegate {
readonly [_flaxDartTypeValue]: GregorianCalendarDelegate;

now(): upstream1.DateTime;
dateOnly(date: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): upstream1.DateTime;
datesOnly(range: Readonly<{ "__flaxBound:package:flutter/src/material/date.dart::DateTimeRange": readonly [upstream1.DateTime] }>): upstream2.DateTimeRange<upstream1.DateTime>;
isSameDay(dateA: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>> | null, dateB: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>> | null): boolean;
isSameMonth(dateA: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>> | null, dateB: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>> | null): boolean;
monthDelta(startDate: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>, endDate: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): number;
addMonthsToMonthDate(monthDate: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>, monthsToAdd: number): upstream1.DateTime;
addDaysToDate(date: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>, days: number): upstream1.DateTime;
firstDayOffset(year: number, month: number, localizations: Readonly<{ "__flaxBound:package:flutter/src/material/material_localizations.dart::MaterialLocalizations": readonly [] }>): number;
getDaysInMonth(year: number, month: number): number;
getMonth(year: number, month: number): upstream1.DateTime;
getDay(year: number, month: number, day: number): upstream1.DateTime;
formatMonthYear(date: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>, localizations: Readonly<{ "__flaxBound:package:flutter/src/material/material_localizations.dart::MaterialLocalizations": readonly [] }>): string;
formatYear(year: number, localizations: Readonly<{ "__flaxBound:package:flutter/src/material/material_localizations.dart::MaterialLocalizations": readonly [] }>): string;
formatMediumDate(date: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>, localizations: Readonly<{ "__flaxBound:package:flutter/src/material/material_localizations.dart::MaterialLocalizations": readonly [] }>): string;
formatShortMonthDay(date: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>, localizations: Readonly<{ "__flaxBound:package:flutter/src/material/material_localizations.dart::MaterialLocalizations": readonly [] }>): string;
formatShortDate(date: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>, localizations: Readonly<{ "__flaxBound:package:flutter/src/material/material_localizations.dart::MaterialLocalizations": readonly [] }>): string;
formatFullDate(date: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>, localizations: Readonly<{ "__flaxBound:package:flutter/src/material/material_localizations.dart::MaterialLocalizations": readonly [] }>): string;
formatCompactDate(date: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>, localizations: Readonly<{ "__flaxBound:package:flutter/src/material/material_localizations.dart::MaterialLocalizations": readonly [] }>): string;
parseCompactDate(inputString: string | null, localizations: Readonly<{ "__flaxBound:package:flutter/src/material/material_localizations.dart::MaterialLocalizations": readonly [] }>): upstream1.DateTime | null;
dateHelpText(localizations: Readonly<{ "__flaxBound:package:flutter/src/material/material_localizations.dart::MaterialLocalizations": readonly [] }>): string;
}
export abstract class GregorianCalendarDelegate extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GregorianCalendarDelegate>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: GregorianCalendarDelegate;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:GregorianCalendarDelegate", readonly [], false];
constructor() { super(_GregorianCalendarDelegateProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(GregorianCalendarDelegate.prototype, _GregorianCalendarDelegateProxy);
export namespace GregorianCalendarDelegate { export function implement(args: [], implementation: {}): GregorianCalendarDelegate {
return constructProxy(_GregorianCalendarDelegateProxy, args, implementation) as GregorianCalendarDelegate; } }
_flaxBindInstanceType<GregorianCalendarDelegate, typeof GregorianCalendarDelegate>(GregorianCalendarDelegate, "flax.core/sdk_material#type:GregorianCalendarDelegate", ["flax.core/sdk_material#type:CalendarDelegate","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "now" | "dateOnly" | "datesOnly" | "isSameDay" | "isSameMonth" | "monthDelta" | "addMonthsToMonthDate" | "addDaysToDate" | "firstDayOffset" | "getDaysInMonth" | "getMonth" | "getDay" | "formatMonthYear" | "formatYear" | "formatMediumDate" | "formatShortMonthDay" | "formatShortDate" | "formatFullDate" | "formatCompactDate" | "parseCompactDate" | "dateHelpText" | "__flaxBound:package:flutter/src/material/date.dart::GregorianCalendarDelegate" | "__flaxBound:package:flutter/src/material/date.dart::CalendarDelegate";

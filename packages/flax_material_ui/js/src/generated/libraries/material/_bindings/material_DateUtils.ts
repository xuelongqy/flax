// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import type * as upstream1 from '@flax/material-ui/_bindings/material_DateTimeRange';
import '@flax/material-ui/_bindings/material_DateTimeRange';
import type * as upstream2 from '@flax/material-ui/_bindings/material_MaterialLocalizations';
import '@flax/material-ui/_bindings/material_MaterialLocalizations';
import { _flaxMemberParameters38, _flaxMemberParameters39, _flaxMemberParameters40, _flaxMemberParameters41, _flaxMemberParameters42, _flaxMemberParameters43, _flaxMemberParameters44, _flaxMemberParameters45 } from "@flax/material-ui/_bindings/material.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DateUtils extends Readonly<{ "__flaxBound:package:material_ui/src/date.dart::DateUtils": readonly [] }> { readonly __DateUtils: unique symbol;
readonly [_flaxDartTypeValue]: DateUtils;

}
defineObject("flax.material/material#type:DateUtils", [], [], _flaxBindingMethods("flax.material/material#type:DateUtils", "object", {}, {}), []);
export namespace _DateUtilsFactory { export function dateOnly(date: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): upstream0.DateTime {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:DateUtils.dateOnly", [date], _flaxMemberParameters38);
return _flaxResult as upstream0.DateTime;
} }
export namespace _DateUtilsFactory { export function datesOnly(range: Readonly<{ "__flaxBound:package:material_ui/src/date.dart::DateTimeRange": readonly [upstream0.DateTime] }>): upstream1.DateTimeRange<upstream0.DateTime> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:DateUtils.datesOnly", [range], _flaxMemberParameters39);
return _flaxResult as upstream1.DateTimeRange<upstream0.DateTime>;
} }
export namespace _DateUtilsFactory { export function isSameDay(dateA: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>> | null, dateB: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>> | null): boolean {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:DateUtils.isSameDay", [dateA, dateB], _flaxMemberParameters40);
return _flaxResult as boolean;
} }
export namespace _DateUtilsFactory { export function isSameMonth(dateA: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>> | null, dateB: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>> | null): boolean {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:DateUtils.isSameMonth", [dateA, dateB], _flaxMemberParameters40);
return _flaxResult as boolean;
} }
export namespace _DateUtilsFactory { export function monthDelta(startDate: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>, endDate: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): number {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:DateUtils.monthDelta", [startDate, endDate], _flaxMemberParameters41);
return _flaxResult as number;
} }
export namespace _DateUtilsFactory { export function addMonthsToMonthDate(monthDate: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>, monthsToAdd: number): upstream0.DateTime {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:DateUtils.addMonthsToMonthDate", [monthDate, monthsToAdd], _flaxMemberParameters42);
return _flaxResult as upstream0.DateTime;
} }
export namespace _DateUtilsFactory { export function addDaysToDate(date: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>, days: number): upstream0.DateTime {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:DateUtils.addDaysToDate", [date, days], _flaxMemberParameters43);
return _flaxResult as upstream0.DateTime;
} }
export namespace _DateUtilsFactory { export function firstDayOffset(year: number, month: number, localizations: Readonly<{ "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [] }>): number {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:DateUtils.firstDayOffset", [year, month, localizations], _flaxMemberParameters44);
return _flaxResult as number;
} }
export namespace _DateUtilsFactory { export function getDaysInMonth(year: number, month: number): number {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:DateUtils.getDaysInMonth", [year, month], _flaxMemberParameters45);
return _flaxResult as number;
} }
export const DateUtils: typeof _DateUtilsFactory & _FlaxInstanceType<DateUtils> & _FlaxDartType<DateUtils, readonly ["class", "flax.material/material#type:DateUtils", readonly [], false]> = _flaxBindInstanceType<DateUtils, typeof _DateUtilsFactory>(_DateUtilsFactory, "flax.material/material#type:DateUtils", ["dart:core::Object"]) as typeof _DateUtilsFactory & _FlaxInstanceType<DateUtils> & _FlaxDartType<DateUtils, readonly ["class", "flax.material/material#type:DateUtils", readonly [], false]>;

import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_CalendarDelegate';
import '@flax/material-ui/_bindings/material_CalendarDelegate';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import type * as upstream2 from '@flax/material-ui/_bindings/material_DateTimeRange';
import '@flax/material-ui/_bindings/material_DateTimeRange';
import '@flax/material-ui/_bindings/material_MaterialLocalizations';
import type * as upstream4 from '@flax/flutter/services/_bindings/flutter_TextInputFormatter';
import '@flax/flutter/services/_bindings/flutter_TextInputFormatter';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface GregorianCalendarDelegate extends Omit<upstream0.CalendarDelegate<upstream1.DateTime>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:material_ui/src/date.dart::GregorianCalendarDelegate": readonly [];
}>, Readonly<{
    "__flaxBound:package:material_ui/src/date.dart::CalendarDelegate": readonly [upstream1.DateTime];
}> {
    readonly __GregorianCalendarDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: GregorianCalendarDelegate;
    now(): upstream1.DateTime;
    dateOnly(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): upstream1.DateTime;
    datesOnly(range: Readonly<{
        "__flaxBound:package:material_ui/src/date.dart::DateTimeRange": readonly [upstream1.DateTime];
    }>): upstream2.DateTimeRange<upstream1.DateTime>;
    isSameDay(dateA: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>> | null, dateB: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>> | null): boolean;
    isSameMonth(dateA: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>> | null, dateB: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>> | null): boolean;
    monthDelta(startDate: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>, endDate: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): number;
    addMonthsToMonthDate(monthDate: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>, monthsToAdd: number): upstream1.DateTime;
    addDaysToDate(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>, days: number): upstream1.DateTime;
    firstDayOffset(year: number, month: number, localizations: Readonly<{
        "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [];
    }>): number;
    getDaysInMonth(year: number, month: number): number;
    getMonth(year: number, month: number): upstream1.DateTime;
    getDay(year: number, month: number, day: number): upstream1.DateTime;
    formatMonthYear(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>, localizations: Readonly<{
        "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [];
    }>): string;
    formatYear(year: number, localizations: Readonly<{
        "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [];
    }>): string;
    formatMediumDate(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>, localizations: Readonly<{
        "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [];
    }>): string;
    formatShortMonthDay(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>, localizations: Readonly<{
        "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [];
    }>): string;
    formatShortDate(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>, localizations: Readonly<{
        "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [];
    }>): string;
    formatFullDate(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>, localizations: Readonly<{
        "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [];
    }>): string;
    formatCompactDate(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>, localizations: Readonly<{
        "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [];
    }>): string;
    parseCompactDate(inputString: string | null, localizations: Readonly<{
        "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [];
    }>): upstream1.DateTime | null;
    dateHelpText(localizations: Readonly<{
        "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [];
    }>): string;
    keyboardInputFormatters(localizations: Readonly<{
        "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [];
    }>): DartList<upstream4.TextInputFormatter> | null;
}
export declare function _GregorianCalendarDelegateFactory(): GregorianCalendarDelegate;
export interface _GregorianCalendarDelegateNative extends GregorianCalendarDelegate {
    readonly [_flaxDartTypeValue]: _GregorianCalendarDelegateNative;
    now(): upstream1.DateTime;
    dateOnly(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): upstream1.DateTime;
    datesOnly(range: Readonly<{
        "__flaxBound:package:material_ui/src/date.dart::DateTimeRange": readonly [upstream1.DateTime];
    }>): upstream2.DateTimeRange<upstream1.DateTime>;
    isSameDay(dateA: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>> | null, dateB: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>> | null): boolean;
    isSameMonth(dateA: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>> | null, dateB: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>> | null): boolean;
    monthDelta(startDate: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>, endDate: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): number;
    addMonthsToMonthDate(monthDate: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>, monthsToAdd: number): upstream1.DateTime;
    addDaysToDate(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>, days: number): upstream1.DateTime;
    firstDayOffset(year: number, month: number, localizations: Readonly<{
        "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [];
    }>): number;
    getDaysInMonth(year: number, month: number): number;
    getMonth(year: number, month: number): upstream1.DateTime;
    getDay(year: number, month: number, day: number): upstream1.DateTime;
    formatMonthYear(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>, localizations: Readonly<{
        "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [];
    }>): string;
    formatYear(year: number, localizations: Readonly<{
        "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [];
    }>): string;
    formatMediumDate(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>, localizations: Readonly<{
        "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [];
    }>): string;
    formatShortMonthDay(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>, localizations: Readonly<{
        "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [];
    }>): string;
    formatShortDate(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>, localizations: Readonly<{
        "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [];
    }>): string;
    formatFullDate(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>, localizations: Readonly<{
        "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [];
    }>): string;
    formatCompactDate(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>, localizations: Readonly<{
        "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [];
    }>): string;
    parseCompactDate(inputString: string | null, localizations: Readonly<{
        "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [];
    }>): upstream1.DateTime | null;
    dateHelpText(localizations: Readonly<{
        "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [];
    }>): string;
    keyboardInputFormatters(localizations: Readonly<{
        "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [];
    }>): DartList<upstream4.TextInputFormatter> | null;
}
export declare abstract class _GregorianCalendarDelegateNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GregorianCalendarDelegate>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: GregorianCalendarDelegate;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:GregorianCalendarDelegate", readonly [], false];
    constructor();
}
export declare namespace _GregorianCalendarDelegateFactory {
    function implement(args: [], implementation: {}): GregorianCalendarDelegate;
}
declare const _GregorianCalendarDelegateBinding: typeof _GregorianCalendarDelegateFactory & (new () => _GregorianCalendarDelegateNative);
export declare const GregorianCalendarDelegate: typeof _GregorianCalendarDelegateBinding & _FlaxInstanceType<GregorianCalendarDelegate> & _FlaxDartType<GregorianCalendarDelegate, readonly ["class", "flax.material/material#type:GregorianCalendarDelegate", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "now" | "dateOnly" | "datesOnly" | "isSameDay" | "isSameMonth" | "monthDelta" | "addMonthsToMonthDate" | "addDaysToDate" | "firstDayOffset" | "getDaysInMonth" | "getMonth" | "getDay" | "formatMonthYear" | "formatYear" | "formatMediumDate" | "formatShortMonthDay" | "formatShortDate" | "formatFullDate" | "formatCompactDate" | "parseCompactDate" | "dateHelpText" | "keyboardInputFormatters" | "__flaxBound:package:material_ui/src/date.dart::GregorianCalendarDelegate" | "__flaxBound:package:material_ui/src/date.dart::CalendarDelegate";
export {};

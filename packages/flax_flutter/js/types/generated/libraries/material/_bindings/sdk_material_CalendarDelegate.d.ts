import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import type * as upstream1 from '@flax/flutter/material/_bindings/sdk_material_DateTimeRange';
import '@flax/flutter/material/_bindings/sdk_material_DateTimeRange';
import type * as upstream2 from '@flax/flutter/material/_bindings/sdk_material_MaterialLocalizations';
import '@flax/flutter/material/_bindings/sdk_material_MaterialLocalizations';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CalendarDelegate<T extends upstream0.DateTime = upstream0.DateTime> extends Readonly<{
    "__flaxBound:package:flutter/src/material/date.dart::CalendarDelegate": readonly [T];
}> {
    readonly __CalendarDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: CalendarDelegate<T>;
}
export interface CalendarDelegate<T extends upstream0.DateTime = upstream0.DateTime> {
    readonly [_flaxDartTypeValue]: CalendarDelegate<T>;
    datesOnly(range: Readonly<{
        "__flaxBound:package:flutter/src/material/date.dart::DateTimeRange": readonly [T];
    }>): upstream1.DateTimeRange<T>;
    isSameDay(dateA: (T | DartInput<T>) | null, dateB: (T | DartInput<T>) | null): boolean;
    isSameMonth(dateA: (T | DartInput<T>) | null, dateB: (T | DartInput<T>) | null): boolean;
    formatYear(year: number, localizations: Readonly<{
        "__flaxBound:package:flutter/src/material/material_localizations.dart::MaterialLocalizations": readonly [];
    }>): string;
}
export declare abstract class CalendarDelegate<T extends upstream0.DateTime = upstream0.DateTime> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CalendarDelegate<upstream0.DateTime>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: CalendarDelegate<upstream0.DateTime>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:CalendarDelegate", readonly [readonly ["class", "flax.core/flutter#type:DateTime", readonly [], false]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor();
    abstract now(): T;
    abstract dateOnly(date: (T | DartInput<T>)): T;
    abstract monthDelta(startDate: (T | DartInput<T>), endDate: (T | DartInput<T>)): number;
    abstract addMonthsToMonthDate(monthDate: (T | DartInput<T>), monthsToAdd: number): T;
    abstract addDaysToDate(date: (T | DartInput<T>), days: number): T;
    abstract firstDayOffset(year: number, month: number, localizations: Readonly<{
        "__flaxBound:package:flutter/src/material/material_localizations.dart::MaterialLocalizations": readonly [];
    }>): number;
    abstract getDaysInMonth(year: number, month: number): number;
    abstract getMonth(year: number, month: number): T;
    abstract getDay(year: number, month: number, day: number): T;
    abstract formatMonthYear(date: (T | DartInput<T>), localizations: Readonly<{
        "__flaxBound:package:flutter/src/material/material_localizations.dart::MaterialLocalizations": readonly [];
    }>): string;
    abstract formatMediumDate(date: (T | DartInput<T>), localizations: Readonly<{
        "__flaxBound:package:flutter/src/material/material_localizations.dart::MaterialLocalizations": readonly [];
    }>): string;
    abstract formatShortMonthDay(date: (T | DartInput<T>), localizations: Readonly<{
        "__flaxBound:package:flutter/src/material/material_localizations.dart::MaterialLocalizations": readonly [];
    }>): string;
    abstract formatShortDate(date: (T | DartInput<T>), localizations: Readonly<{
        "__flaxBound:package:flutter/src/material/material_localizations.dart::MaterialLocalizations": readonly [];
    }>): string;
    abstract formatFullDate(date: (T | DartInput<T>), localizations: Readonly<{
        "__flaxBound:package:flutter/src/material/material_localizations.dart::MaterialLocalizations": readonly [];
    }>): string;
    abstract formatCompactDate(date: (T | DartInput<T>), localizations: Readonly<{
        "__flaxBound:package:flutter/src/material/material_localizations.dart::MaterialLocalizations": readonly [];
    }>): string;
    abstract parseCompactDate(inputString: string | null, localizations: Readonly<{
        "__flaxBound:package:flutter/src/material/material_localizations.dart::MaterialLocalizations": readonly [];
    }>): T | null;
    abstract dateHelpText(localizations: Readonly<{
        "__flaxBound:package:flutter/src/material/material_localizations.dart::MaterialLocalizations": readonly [];
    }>): string;
}
export declare namespace CalendarDelegate {
    function implement<T extends upstream0.DateTime = upstream0.DateTime>(args: [], implementation: {
        now: (() => (T | DartInput<T>));
        dateOnly: ((date: T) => (T | DartInput<T>));
        monthDelta: ((startDate: T, endDate: T) => number);
        addMonthsToMonthDate: ((monthDate: T, monthsToAdd: number) => (T | DartInput<T>));
        addDaysToDate: ((date: T, days: number) => (T | DartInput<T>));
        firstDayOffset: ((year: number, month: number, localizations: upstream2.MaterialLocalizations) => number);
        getDaysInMonth: ((year: number, month: number) => number);
        getMonth: ((year: number, month: number) => (T | DartInput<T>));
        getDay: ((year: number, month: number, day: number) => (T | DartInput<T>));
        formatMonthYear: ((date: T, localizations: upstream2.MaterialLocalizations) => string);
        formatMediumDate: ((date: T, localizations: upstream2.MaterialLocalizations) => string);
        formatShortMonthDay: ((date: T, localizations: upstream2.MaterialLocalizations) => string);
        formatShortDate: ((date: T, localizations: upstream2.MaterialLocalizations) => string);
        formatFullDate: ((date: T, localizations: upstream2.MaterialLocalizations) => string);
        formatCompactDate: ((date: T, localizations: upstream2.MaterialLocalizations) => string);
        parseCompactDate: ((inputString: string | null, localizations: upstream2.MaterialLocalizations) => (T | DartInput<T>) | null);
        dateHelpText: ((localizations: upstream2.MaterialLocalizations) => string);
    }): CalendarDelegate<T>;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.DateTime] ? (abstract new () => CalendarDelegate<_Selected0>) & {
        readonly prototype: CalendarDelegate<_Selected0>;
        implement(args: readonly [], implementation: Partial<CalendarDelegate<_Selected0>>): CalendarDelegate<_Selected0>;
    } & _FlaxInstanceType<CalendarDelegate<_Selected0>> & _FlaxDartType<CalendarDelegate<_Selected0>> : never : never;
}
export {};

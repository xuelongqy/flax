import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import type * as upstream1 from '@flax/material-ui/_bindings/material_DateTimeRange';
import '@flax/material-ui/_bindings/material_DateTimeRange';
import '@flax/material-ui/_bindings/material_MaterialLocalizations';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DateUtils extends Readonly<{
    "__flaxBound:package:material_ui/src/date.dart::DateUtils": readonly [];
}> {
    readonly __DateUtils: unique symbol;
    readonly [_flaxDartTypeValue]: DateUtils;
}
export declare namespace _DateUtilsFactory {
    function dateOnly(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): upstream0.DateTime;
}
export declare namespace _DateUtilsFactory {
    function datesOnly(range: Readonly<{
        "__flaxBound:package:material_ui/src/date.dart::DateTimeRange": readonly [upstream0.DateTime];
    }>): upstream1.DateTimeRange<upstream0.DateTime>;
}
export declare namespace _DateUtilsFactory {
    function isSameDay(dateA: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>> | null, dateB: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>> | null): boolean;
}
export declare namespace _DateUtilsFactory {
    function isSameMonth(dateA: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>> | null, dateB: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>> | null): boolean;
}
export declare namespace _DateUtilsFactory {
    function monthDelta(startDate: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>, endDate: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): number;
}
export declare namespace _DateUtilsFactory {
    function addMonthsToMonthDate(monthDate: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>, monthsToAdd: number): upstream0.DateTime;
}
export declare namespace _DateUtilsFactory {
    function addDaysToDate(date: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>, days: number): upstream0.DateTime;
}
export declare namespace _DateUtilsFactory {
    function firstDayOffset(year: number, month: number, localizations: Readonly<{
        "__flaxBound:package:material_ui/src/material_localizations.dart::MaterialLocalizations": readonly [];
    }>): number;
}
export declare namespace _DateUtilsFactory {
    function getDaysInMonth(year: number, month: number): number;
}
export declare const DateUtils: typeof _DateUtilsFactory & _FlaxInstanceType<DateUtils> & _FlaxDartType<DateUtils, readonly ["class", "flax.material/material#type:DateUtils", readonly [], false]>;

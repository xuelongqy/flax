import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Comparable';
import '@flax/dart/core/_bindings/flutter_Comparable';
import type * as upstream1 from '@flax/flutter/material/_bindings/sdk_material_DayPeriod';
import '@flax/flutter/material/_bindings/sdk_material_DayPeriod';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface TimeOfDay extends Omit<upstream0.Comparable<TimeOfDay>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/material/time.dart::TimeOfDay": readonly [];
}>, Readonly<{
    "__flaxBound:dart:core::Comparable": readonly [TimeOfDay];
}> {
    readonly __TimeOfDay: unique symbol;
    readonly [_flaxDartTypeValue]: TimeOfDay;
}
export interface TimeOfDay {
    readonly [_flaxDartTypeValue]: TimeOfDay;
    compareTo(other: Readonly<{
        "__flaxBound:package:flutter/src/material/time.dart::TimeOfDay": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [TimeOfDay];
    }>): number;
    replacing(options?: {
        hour?: number | null | undefined;
        minute?: number | null | undefined;
    }): TimeOfDay;
    format(context: upstream2.BuildContext): string;
    isBefore(other: Readonly<{
        "__flaxBound:package:flutter/src/material/time.dart::TimeOfDay": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [TimeOfDay];
    }>): boolean;
    isAfter(other: Readonly<{
        "__flaxBound:package:flutter/src/material/time.dart::TimeOfDay": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [TimeOfDay];
    }>): boolean;
    isAtSameTimeAs(other: Readonly<{
        "__flaxBound:package:flutter/src/material/time.dart::TimeOfDay": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [TimeOfDay];
    }>): boolean;
    toString(): string;
    get hour(): number;
    get minute(): number;
    get period(): upstream1.DayPeriod;
    get hourOfPeriod(): number;
    get periodOffset(): number;
}
export declare abstract class TimeOfDay extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TimeOfDay>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TimeOfDay;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:TimeOfDay", readonly [], false];
    constructor(options: {
        hour: number;
        minute: number;
    });
}
export declare namespace TimeOfDay {
    function implement(args: [options: {
        hour: number;
        minute: number;
    }], implementation: {}): TimeOfDay;
}
export declare namespace TimeOfDay {
    const hoursPerDay: number;
}
export declare namespace TimeOfDay {
    const hoursPerPeriod: number;
}
export declare namespace TimeOfDay {
    const minutesPerHour: number;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hour" | "minute" | "period" | "hourOfPeriod" | "periodOffset" | "compareTo" | "replacing" | "format" | "isBefore" | "isAfter" | "isAtSameTimeAs" | "toString" | "__flaxBound:package:flutter/src/material/time.dart::TimeOfDay" | "__flaxBound:dart:core::Comparable";
export {};

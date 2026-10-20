import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Comparable';
import '@flax/dart/core/_bindings/flutter_Comparable';
import '@flax/dart/core/_bindings/flutter_DateTime';
import type * as upstream2 from '@flax/flutter/material/_bindings/sdk_material_DayPeriod';
import '@flax/flutter/material/_bindings/sdk_material_DayPeriod';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TimeOfDay extends Omit<upstream0.Comparable<TimeOfDay>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/material/time.dart::TimeOfDay": readonly [];
}>, Readonly<{
    "__flaxBound:dart:core::Comparable": readonly [TimeOfDay];
}> {
    readonly __TimeOfDay: unique symbol;
    readonly [_flaxDartTypeValue]: TimeOfDay;
    readonly hour: number;
    readonly minute: number;
    readonly period: upstream2.DayPeriod;
    readonly hourOfPeriod: number;
    readonly periodOffset: number;
    compareTo(other: Readonly<{
        "__flaxBound:package:flutter/src/material/time.dart::TimeOfDay": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [TimeOfDay];
    }>): number;
    replacing(options?: {
        hour?: number | null | undefined;
        minute?: number | null | undefined;
    }): TimeOfDay;
    format(context: upstream3.BuildContext): string;
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
}
export declare function _TimeOfDayFactory(options: {
    hour: number;
    minute: number;
}): TimeOfDay;
export declare namespace _TimeOfDayFactory {
    function fromDateTime(time: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): TimeOfDay;
}
export declare namespace _TimeOfDayFactory {
    function now(): TimeOfDay;
}
export interface _TimeOfDayNative extends TimeOfDay {
    readonly [_flaxDartTypeValue]: _TimeOfDayNative;
    readonly [_flaxDartConstructors]?: {
        "": (options: {
            hour: number;
            minute: number;
        }) => void;
        "fromDateTime": (time: DartInput<Readonly<{
            "__flaxBound:dart:core::DateTime": readonly [];
        }>>) => void;
        "now": () => void;
    };
    compareTo(other: Readonly<{
        "__flaxBound:package:flutter/src/material/time.dart::TimeOfDay": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [TimeOfDay];
    }>): number;
    replacing(options?: {
        hour?: number | null | undefined;
        minute?: number | null | undefined;
    }): TimeOfDay;
    format(context: upstream3.BuildContext): string;
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
    get period(): upstream2.DayPeriod;
    get hourOfPeriod(): number;
    get periodOffset(): number;
}
export declare abstract class _TimeOfDayNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TimeOfDay>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TimeOfDay;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:TimeOfDay", readonly [], false];
    constructor(options: {
        hour: number;
        minute: number;
    });
    constructor(call: _FlaxProxySuper<_TimeOfDayNative>);
}
export declare namespace _TimeOfDayFactory {
    function implement(args: [options: {
        hour: number;
        minute: number;
    }], implementation: {}): TimeOfDay;
}
declare const _TimeOfDayBinding: typeof _TimeOfDayFactory & (new (options: {
    hour: number;
    minute: number;
}) => _TimeOfDayNative) & (new (call: _FlaxProxySuper<_TimeOfDayNative>) => _TimeOfDayNative);
export declare namespace _TimeOfDayFactory {
    const hoursPerDay: number;
}
export declare namespace _TimeOfDayFactory {
    const hoursPerPeriod: number;
}
export declare namespace _TimeOfDayFactory {
    const minutesPerHour: number;
}
export declare const TimeOfDay: typeof _TimeOfDayBinding & _FlaxInstanceType<TimeOfDay> & _FlaxDartType<TimeOfDay, readonly ["class", "flax.core/sdk_material#type:TimeOfDay", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hour" | "minute" | "period" | "hourOfPeriod" | "periodOffset" | "compareTo" | "replacing" | "format" | "isBefore" | "isAfter" | "isAtSameTimeAs" | "toString" | "__flaxBound:package:flutter/src/material/time.dart::TimeOfDay" | "__flaxBound:dart:core::Comparable";
export {};

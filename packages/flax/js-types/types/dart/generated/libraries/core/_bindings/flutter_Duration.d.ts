import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Comparable';
import '@flax/dart/core/_bindings/flutter_Comparable';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Duration extends Omit<upstream0.Comparable<Duration>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:dart:core::Duration": readonly [];
}>, Readonly<{
    "__flaxBound:dart:core::Comparable": readonly [Duration];
}> {
    readonly __Duration: unique symbol;
    readonly [_flaxDartTypeValue]: Duration;
    readonly inMicroseconds: number;
    readonly inDays: number;
    readonly inHours: number;
    readonly inMinutes: number;
    readonly inSeconds: number;
    readonly inMilliseconds: number;
    readonly isNegative: boolean;
    compareTo(other: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [Duration];
    }>): number;
    toString(): string;
    abs(): Duration;
    operatorAdd(other: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [Duration];
    }>): Duration;
    operatorSubtract(other: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [Duration];
    }>): Duration;
    operatorMultiply(factor: number): Duration;
    operatorTruncateDivide(quotient: number): Duration;
    operatorLessThan(other: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [Duration];
    }>): boolean;
    operatorGreaterThan(other: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [Duration];
    }>): boolean;
    operatorLessThanOrEqual(other: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [Duration];
    }>): boolean;
    operatorGreaterThanOrEqual(other: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [Duration];
    }>): boolean;
    operatorNegate(): Duration;
}
export declare function _DurationFactory(options?: {
    days?: number | undefined;
    hours?: number | undefined;
    minutes?: number | undefined;
    seconds?: number | undefined;
    milliseconds?: number | undefined;
    microseconds?: number | undefined;
}): Duration;
export declare namespace _DurationFactory {
    const microsecondsPerMillisecond: number;
}
export declare namespace _DurationFactory {
    const millisecondsPerSecond: number;
}
export declare namespace _DurationFactory {
    const secondsPerMinute: number;
}
export declare namespace _DurationFactory {
    const minutesPerHour: number;
}
export declare namespace _DurationFactory {
    const hoursPerDay: number;
}
export declare namespace _DurationFactory {
    const microsecondsPerSecond: number;
}
export declare namespace _DurationFactory {
    const microsecondsPerMinute: number;
}
export declare namespace _DurationFactory {
    const microsecondsPerHour: number;
}
export declare namespace _DurationFactory {
    const microsecondsPerDay: number;
}
export declare namespace _DurationFactory {
    const millisecondsPerMinute: number;
}
export declare namespace _DurationFactory {
    const millisecondsPerHour: number;
}
export declare namespace _DurationFactory {
    const millisecondsPerDay: number;
}
export declare namespace _DurationFactory {
    const secondsPerHour: number;
}
export declare namespace _DurationFactory {
    const secondsPerDay: number;
}
export declare namespace _DurationFactory {
    const minutesPerDay: number;
}
export declare namespace _DurationFactory {
    const zero: Duration;
}
export declare const Duration: typeof _DurationFactory & _FlaxInstanceType<Duration> & _FlaxDartType<Duration, readonly ["class", "flax.core/flutter#type:Duration", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "inMicroseconds" | "inDays" | "inHours" | "inMinutes" | "inSeconds" | "inMilliseconds" | "isNegative" | "compareTo" | "toString" | "abs" | "operatorAdd" | "operatorSubtract" | "operatorMultiply" | "operatorTruncateDivide" | "operatorLessThan" | "operatorGreaterThan" | "operatorLessThanOrEqual" | "operatorGreaterThanOrEqual" | "operatorNegate" | "__flaxBound:dart:core::Duration" | "__flaxBound:dart:core::Comparable";
export {};

import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Comparable';
import '@flax/dart/core/_bindings/flutter_Comparable';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DateTime extends Omit<upstream0.Comparable<DateTime>, typeof _flaxDartTypeValue | "isUtc" | "millisecondsSinceEpoch" | "microsecondsSinceEpoch" | "timeZoneName" | "timeZoneOffset" | "year" | "month" | "day" | "hour" | "minute" | "second" | "millisecond" | "microsecond" | "weekday" | "compareTo" | "isBefore" | "isAfter" | "isAtSameMomentAs" | "toLocal" | "toUtc" | "toString" | "toIso8601String" | "add" | "subtract" | "difference">, Readonly<{
    "__flaxBound:dart:core::DateTime": readonly [];
}> {
    readonly __DateTime: unique symbol;
    readonly isUtc: boolean;
    readonly millisecondsSinceEpoch: number;
    readonly microsecondsSinceEpoch: number;
    readonly timeZoneName: string;
    readonly timeZoneOffset: upstream1.Duration;
    readonly year: number;
    readonly month: number;
    readonly day: number;
    readonly hour: number;
    readonly minute: number;
    readonly second: number;
    readonly millisecond: number;
    readonly microsecond: number;
    readonly weekday: number;
    compareTo(other: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): number;
    isBefore(other: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): boolean;
    isAfter(other: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): boolean;
    isAtSameMomentAs(other: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): boolean;
    toLocal(): DateTime;
    toUtc(): DateTime;
    toString(): string;
    toIso8601String(): string;
    add(duration: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }>): DateTime;
    subtract(duration: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }>): DateTime;
    difference(other: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): upstream1.Duration;
}
export declare function _DateTimeFactory(year: number, month?: number, day?: number, hour?: number, minute?: number, second?: number, millisecond?: number, microsecond?: number): DateTime;
export declare namespace _DateTimeFactory {
    function utc(year: number, month?: number, day?: number, hour?: number, minute?: number, second?: number, millisecond?: number, microsecond?: number): DateTime;
}
export declare namespace _DateTimeFactory {
    function now(): DateTime;
}
export declare namespace _DateTimeFactory {
    function timestamp(): DateTime;
}
export declare namespace _DateTimeFactory {
    function fromMillisecondsSinceEpoch(millisecondsSinceEpoch: number, options?: {
        isUtc?: boolean | undefined;
    }): DateTime;
}
export declare namespace _DateTimeFactory {
    function fromMicrosecondsSinceEpoch(microsecondsSinceEpoch: number, options?: {
        isUtc?: boolean | undefined;
    }): DateTime;
}
export declare namespace _DateTimeFactory {
    const monday: number;
}
export declare namespace _DateTimeFactory {
    const tuesday: number;
}
export declare namespace _DateTimeFactory {
    const wednesday: number;
}
export declare namespace _DateTimeFactory {
    const thursday: number;
}
export declare namespace _DateTimeFactory {
    const friday: number;
}
export declare namespace _DateTimeFactory {
    const saturday: number;
}
export declare namespace _DateTimeFactory {
    const sunday: number;
}
export declare namespace _DateTimeFactory {
    const daysPerWeek: number;
}
export declare namespace _DateTimeFactory {
    const january: number;
}
export declare namespace _DateTimeFactory {
    const february: number;
}
export declare namespace _DateTimeFactory {
    const march: number;
}
export declare namespace _DateTimeFactory {
    const april: number;
}
export declare namespace _DateTimeFactory {
    const may: number;
}
export declare namespace _DateTimeFactory {
    const june: number;
}
export declare namespace _DateTimeFactory {
    const july: number;
}
export declare namespace _DateTimeFactory {
    const august: number;
}
export declare namespace _DateTimeFactory {
    const september: number;
}
export declare namespace _DateTimeFactory {
    const october: number;
}
export declare namespace _DateTimeFactory {
    const november: number;
}
export declare namespace _DateTimeFactory {
    const december: number;
}
export declare namespace _DateTimeFactory {
    const monthsPerYear: number;
}
export declare namespace _DateTimeFactory {
    function parse(formattedString: string): DateTime;
}
export declare namespace _DateTimeFactory {
    function tryParse(formattedString: string): DateTime | null;
}
export declare const DateTime: typeof _DateTimeFactory & _FlaxInstanceType<DateTime> & _FlaxDartType<DateTime, readonly ["class", "flax.core/flutter#type:DateTime", readonly [], false]>;

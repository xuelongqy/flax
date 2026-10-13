import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DateTime extends Readonly<{
    "__flaxBound:dart:core::DateTime": readonly [];
}>, Readonly<{
    "__flaxBound:dart:core::Comparable": readonly [DateTime];
}> {
    readonly __DateTime: unique symbol;
    readonly year: number;
    readonly month: number;
    readonly day: number;
    readonly hour: number;
    readonly minute: number;
    readonly second: number;
    readonly millisecond: number;
    readonly microsecond: number;
    readonly weekday: number;
    readonly isUtc: boolean;
    readonly millisecondsSinceEpoch: number;
    readonly microsecondsSinceEpoch: number;
    readonly timeZoneName: string;
    readonly timeZoneOffset: upstream0.Duration;
    toIso8601String(): string;
    toString(): string;
    toUtc(): DateTime;
    toLocal(): DateTime;
    add(duration: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }>): DateTime;
    subtract(duration: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }>): DateTime;
    difference(other: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): upstream0.Duration;
    isBefore(other: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): boolean;
    isAfter(other: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): boolean;
    isAtSameMomentAs(other: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): boolean;
    compareTo(other: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): number;
}
declare function _DateTimeFactory(year: number, month?: number, day?: number, hour?: number, minute?: number, second?: number, millisecond?: number, microsecond?: number): DateTime;
declare namespace _DateTimeFactory {
    function utc(year: number, month?: number, day?: number, hour?: number, minute?: number, second?: number, millisecond?: number, microsecond?: number): DateTime;
}
declare namespace _DateTimeFactory {
    function now(): DateTime;
}
declare namespace _DateTimeFactory {
    function fromMillisecondsSinceEpoch(millisecondsSinceEpoch: number, options?: {
        isUtc?: boolean | undefined;
    }): DateTime;
}
declare namespace _DateTimeFactory {
    function fromMicrosecondsSinceEpoch(microsecondsSinceEpoch: number, options?: {
        isUtc?: boolean | undefined;
    }): DateTime;
}
declare namespace _DateTimeFactory {
    function parse(formattedString: string): DateTime;
}
declare namespace _DateTimeFactory {
    function tryParse(formattedString: string): DateTime | null;
}
export declare const DateTime: typeof _DateTimeFactory & _FlaxInstanceType<DateTime> & _FlaxDartType<DateTime, readonly ["class", "flax.core/flutter#type:DateTime", readonly [], false]>;
export {};

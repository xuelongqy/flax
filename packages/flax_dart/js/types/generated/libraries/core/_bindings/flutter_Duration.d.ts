import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Duration extends Readonly<{
    "__flaxBound:dart:core::Duration": readonly [];
}>, Readonly<{
    "__flaxBound:dart:core::Comparable": readonly [Duration];
}> {
    readonly __Duration: unique symbol;
    readonly inDays: number;
    readonly inHours: number;
    readonly inMinutes: number;
    readonly inSeconds: number;
    readonly inMilliseconds: number;
    readonly inMicroseconds: number;
}
declare function _DurationFactory(options?: {
    days?: number | undefined;
    hours?: number | undefined;
    minutes?: number | undefined;
    seconds?: number | undefined;
    milliseconds?: number | undefined;
    microseconds?: number | undefined;
}): Duration;
declare namespace _DurationFactory {
    const zero: Duration;
}
export declare const Duration: typeof _DurationFactory & _FlaxInstanceType<Duration> & _FlaxDartType<Duration, readonly ["class", "flax.core/flutter#type:Duration", readonly [], false]>;
export {};

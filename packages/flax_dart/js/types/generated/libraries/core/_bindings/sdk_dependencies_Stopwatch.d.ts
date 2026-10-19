import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Stopwatch extends Readonly<{
    "__flaxBound:dart:core::Stopwatch": readonly [];
}> {
    readonly __Stopwatch: unique symbol;
    readonly [_flaxDartTypeValue]: Stopwatch;
    readonly frequency: number;
    readonly elapsedTicks: number;
    readonly elapsed: upstream0.Duration;
    readonly elapsedMicroseconds: number;
    readonly elapsedMilliseconds: number;
    readonly isRunning: boolean;
    start(): void;
    stop(): void;
    reset(): void;
}
export declare function _StopwatchFactory(): Stopwatch;
export declare const Stopwatch: typeof _StopwatchFactory & _FlaxInstanceType<Stopwatch> & _FlaxDartType<Stopwatch, readonly ["class", "flax.core/sdk_dependencies#type:Stopwatch", readonly [], false]>;

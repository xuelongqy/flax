import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_FramePhase';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FramePhase';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FrameTiming extends Readonly<{
    "__flaxBound:dart:ui::FrameTiming": readonly [];
}> {
    readonly __FrameTiming: unique symbol;
    readonly [_flaxDartTypeValue]: FrameTiming;
    readonly buildDuration: upstream0.Duration;
    readonly rasterDuration: upstream0.Duration;
    readonly vsyncOverhead: upstream0.Duration;
    readonly totalSpan: upstream0.Duration;
    readonly layerCacheCount: number;
    readonly layerCacheBytes: number;
    readonly layerCacheMegabytes: number;
    readonly pictureCacheCount: number;
    readonly pictureCacheBytes: number;
    readonly pictureCacheMegabytes: number;
    readonly frameNumber: number;
    timestampInMicroseconds(phase: upstream1.FramePhase): number;
    toString(): string;
}
export declare function _FrameTimingFactory(options: {
    vsyncStart: number;
    buildStart: number;
    buildFinish: number;
    rasterStart: number;
    rasterFinish: number;
    rasterFinishWallTime: number;
    layerCacheCount?: number | undefined;
    layerCacheBytes?: number | undefined;
    pictureCacheCount?: number | undefined;
    pictureCacheBytes?: number | undefined;
    frameNumber?: number | undefined;
}): FrameTiming;
export declare const FrameTiming: typeof _FrameTimingFactory & _FlaxInstanceType<FrameTiming> & _FlaxDartType<FrameTiming, readonly ["class", "flax.core/sdk_dart_ui#type:FrameTiming", readonly [], false]>;

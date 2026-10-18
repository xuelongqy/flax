import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PerformanceOverlayOption extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/rendering/performance_overlay.dart::PerformanceOverlayOption">, Readonly<{
    "__flaxBound:package:flutter/src/rendering/performance_overlay.dart::PerformanceOverlayOption": readonly [];
}> {
    readonly __PerformanceOverlayOption: unique symbol;
    readonly [_flaxDartTypeValue]: PerformanceOverlayOption;
    readonly name: string;
    readonly index: number;
}
export declare const PerformanceOverlayOption: Readonly<{
    displayRasterizerStatistics: PerformanceOverlayOption;
    visualizeRasterizerStatistics: PerformanceOverlayOption;
    displayEngineStatistics: PerformanceOverlayOption;
    visualizeEngineStatistics: PerformanceOverlayOption;
    values: readonly PerformanceOverlayOption[];
} & _FlaxInstanceType<PerformanceOverlayOption> & _FlaxDartType<PerformanceOverlayOption, readonly ["class", "flax.core/sdk_rendering#type:PerformanceOverlayOption", readonly [], false]>>;

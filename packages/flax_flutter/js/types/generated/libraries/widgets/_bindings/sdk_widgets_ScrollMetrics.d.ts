import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_Axis';
import '@flax/flutter/painting/_bindings/flutter_Axis';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ScrollMetrics extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
}> {
    readonly __ScrollMetrics: unique symbol;
    readonly [_flaxDartTypeValue]: ScrollMetrics;
    readonly minScrollExtent: number;
    readonly maxScrollExtent: number;
    readonly hasContentDimensions: boolean;
    readonly pixels: number;
    readonly hasPixels: boolean;
    readonly viewportDimension: number;
    readonly hasViewportDimension: boolean;
    readonly axisDirection: upstream0.AxisDirection;
    readonly axis: upstream1.Axis;
    readonly outOfRange: boolean;
    readonly atEdge: boolean;
    readonly extentBefore: number;
    readonly extentInside: number;
    readonly extentAfter: number;
    readonly extentTotal: number;
    readonly devicePixelRatio: number;
    copyWith(options?: {
        axisDirection?: upstream0.AxisDirection | null | undefined;
        devicePixelRatio?: number | null | undefined;
        maxScrollExtent?: number | null | undefined;
        minScrollExtent?: number | null | undefined;
        pixels?: number | null | undefined;
        viewportDimension?: number | null | undefined;
    }): ScrollMetrics;
}
export declare const ScrollMetrics: object & _FlaxInstanceType<ScrollMetrics> & _FlaxDartType<ScrollMetrics, readonly ["class", "flax.core/sdk_widgets#type:ScrollMetrics", readonly [], false]>;

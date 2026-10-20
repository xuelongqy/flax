import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import type * as upstream1 from '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_Axis';
import '@flax/flutter/painting/_bindings/flutter_Axis';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FixedScrollMetrics extends Omit<upstream0.ScrollMetrics, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::FixedScrollMetrics": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
}> {
    readonly __FixedScrollMetrics: unique symbol;
    readonly [_flaxDartTypeValue]: FixedScrollMetrics;
    readonly minScrollExtent: number;
    readonly maxScrollExtent: number;
    readonly hasContentDimensions: boolean;
    readonly pixels: number;
    readonly hasPixels: boolean;
    readonly viewportDimension: number;
    readonly hasViewportDimension: boolean;
    readonly axisDirection: upstream1.AxisDirection;
    readonly axis: upstream2.Axis;
    readonly outOfRange: boolean;
    readonly atEdge: boolean;
    readonly extentBefore: number;
    readonly extentInside: number;
    readonly extentAfter: number;
    readonly extentTotal: number;
    readonly devicePixelRatio: number;
    copyWith(options?: {
        axisDirection?: upstream1.AxisDirection | null | undefined;
        devicePixelRatio?: number | null | undefined;
        maxScrollExtent?: number | null | undefined;
        minScrollExtent?: number | null | undefined;
        pixels?: number | null | undefined;
        viewportDimension?: number | null | undefined;
    }): upstream0.ScrollMetrics;
    toString(): string;
}
export declare function _FixedScrollMetricsFactory(options: {
    minScrollExtent: number | null;
    maxScrollExtent: number | null;
    pixels: number | null;
    viewportDimension: number | null;
    axisDirection: upstream1.AxisDirection;
    devicePixelRatio: number;
}): FixedScrollMetrics;
export interface _FixedScrollMetricsNative extends FixedScrollMetrics {
    readonly [_flaxDartTypeValue]: _FixedScrollMetricsNative;
    copyWith(options?: {
        minScrollExtent?: number | null | undefined;
        maxScrollExtent?: number | null | undefined;
        pixels?: number | null | undefined;
        viewportDimension?: number | null | undefined;
        axisDirection?: upstream1.AxisDirection | null | undefined;
        devicePixelRatio?: number | null | undefined;
    }): upstream0.ScrollMetrics;
    toString(): string;
    get minScrollExtent(): number;
    get maxScrollExtent(): number;
    get hasContentDimensions(): boolean;
    get pixels(): number;
    get hasPixels(): boolean;
    get viewportDimension(): number;
    get hasViewportDimension(): boolean;
    get axisDirection(): upstream1.AxisDirection;
    get devicePixelRatio(): number;
    get axis(): upstream2.Axis;
    get outOfRange(): boolean;
    get atEdge(): boolean;
    get extentBefore(): number;
    get extentInside(): number;
    get extentAfter(): number;
    get extentTotal(): number;
}
export declare abstract class _FixedScrollMetricsNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FixedScrollMetrics>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: FixedScrollMetrics;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:FixedScrollMetrics", readonly [], false];
    constructor(options: {
        minScrollExtent: number | null;
        maxScrollExtent: number | null;
        pixels: number | null;
        viewportDimension: number | null;
        axisDirection: upstream1.AxisDirection;
        devicePixelRatio: number;
    });
}
export declare namespace _FixedScrollMetricsFactory {
    function implement(args: [options: {
        minScrollExtent: number | null;
        maxScrollExtent: number | null;
        pixels: number | null;
        viewportDimension: number | null;
        axisDirection: upstream1.AxisDirection;
        devicePixelRatio: number;
    }], implementation: {}): FixedScrollMetrics;
}
declare const _FixedScrollMetricsBinding: typeof _FixedScrollMetricsFactory & (new (options: {
    minScrollExtent: number | null;
    maxScrollExtent: number | null;
    pixels: number | null;
    viewportDimension: number | null;
    axisDirection: upstream1.AxisDirection;
    devicePixelRatio: number;
}) => _FixedScrollMetricsNative);
export declare const FixedScrollMetrics: typeof _FixedScrollMetricsBinding & _FlaxInstanceType<FixedScrollMetrics> & _FlaxDartType<FixedScrollMetrics, readonly ["class", "flax.core/sdk_widgets#type:FixedScrollMetrics", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "minScrollExtent" | "maxScrollExtent" | "hasContentDimensions" | "pixels" | "hasPixels" | "viewportDimension" | "hasViewportDimension" | "axisDirection" | "axis" | "outOfRange" | "atEdge" | "extentBefore" | "extentInside" | "extentAfter" | "extentTotal" | "devicePixelRatio" | "copyWith" | "toString" | "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::FixedScrollMetrics" | "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics";
export {};

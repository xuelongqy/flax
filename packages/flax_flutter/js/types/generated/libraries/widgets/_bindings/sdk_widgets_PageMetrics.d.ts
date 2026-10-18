import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_FixedScrollMetrics';
import '@flax/flutter/widgets/_bindings/sdk_widgets_FixedScrollMetrics';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import type * as upstream2 from '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_Axis';
import '@flax/flutter/painting/_bindings/flutter_Axis';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface PageMetrics extends Omit<upstream0.FixedScrollMetrics, _flaxOwnMembers0>, Omit<upstream1.ScrollMetrics, _flaxOwnMembers0 | keyof upstream0.FixedScrollMetrics>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/page_view.dart::PageMetrics": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::FixedScrollMetrics": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
}> {
    readonly __PageMetrics: unique symbol;
    readonly [_flaxDartTypeValue]: PageMetrics;
}
export interface PageMetrics {
    readonly [_flaxDartTypeValue]: PageMetrics;
    toString(): string;
    copyWith(options?: {
        minScrollExtent?: number | null | undefined;
        maxScrollExtent?: number | null | undefined;
        pixels?: number | null | undefined;
        viewportDimension?: number | null | undefined;
        axisDirection?: upstream2.AxisDirection | null | undefined;
        viewportFraction?: number | null | undefined;
        devicePixelRatio?: number | null | undefined;
    }): PageMetrics;
    get page(): number | null;
    get viewportFraction(): number;
    get minScrollExtent(): number;
    get maxScrollExtent(): number;
    get hasContentDimensions(): boolean;
    get pixels(): number;
    get hasPixels(): boolean;
    get viewportDimension(): number;
    get hasViewportDimension(): boolean;
    get axisDirection(): upstream2.AxisDirection;
    get devicePixelRatio(): number;
    get axis(): upstream3.Axis;
    get outOfRange(): boolean;
    get atEdge(): boolean;
    get extentBefore(): number;
    get extentInside(): number;
    get extentAfter(): number;
    get extentTotal(): number;
}
export declare abstract class PageMetrics extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PageMetrics>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PageMetrics;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:PageMetrics", readonly [], false];
    constructor(options: {
        minScrollExtent: number | null;
        maxScrollExtent: number | null;
        pixels: number | null;
        viewportDimension: number | null;
        axisDirection: upstream2.AxisDirection;
        viewportFraction: number;
        devicePixelRatio: number;
    });
}
export declare namespace PageMetrics {
    function implement(args: [options: {
        minScrollExtent: number | null;
        maxScrollExtent: number | null;
        pixels: number | null;
        viewportDimension: number | null;
        axisDirection: upstream2.AxisDirection;
        viewportFraction: number;
        devicePixelRatio: number;
    }], implementation: {}): PageMetrics;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "minScrollExtent" | "maxScrollExtent" | "hasContentDimensions" | "pixels" | "hasPixels" | "viewportDimension" | "hasViewportDimension" | "axisDirection" | "devicePixelRatio" | "axis" | "outOfRange" | "atEdge" | "extentBefore" | "extentInside" | "extentAfter" | "extentTotal" | "page" | "viewportFraction" | "toString" | "copyWith" | "__flaxBound:package:flutter/src/widgets/page_view.dart::PageMetrics" | "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::FixedScrollMetrics" | "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics";
export {};

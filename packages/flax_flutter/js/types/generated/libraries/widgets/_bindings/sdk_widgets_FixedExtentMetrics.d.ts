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
export interface FixedExtentMetrics extends Omit<upstream0.FixedScrollMetrics, _flaxOwnMembers0>, Omit<upstream1.ScrollMetrics, _flaxOwnMembers0 | keyof upstream0.FixedScrollMetrics>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::FixedExtentMetrics": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::FixedScrollMetrics": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
}> {
    readonly __FixedExtentMetrics: unique symbol;
    readonly [_flaxDartTypeValue]: FixedExtentMetrics;
}
export interface FixedExtentMetrics {
    readonly [_flaxDartTypeValue]: FixedExtentMetrics;
    toString(): string;
    copyWith(options?: {
        minScrollExtent?: number | null | undefined;
        maxScrollExtent?: number | null | undefined;
        pixels?: number | null | undefined;
        viewportDimension?: number | null | undefined;
        axisDirection?: upstream2.AxisDirection | null | undefined;
        itemIndex?: number | null | undefined;
        devicePixelRatio?: number | null | undefined;
    }): FixedExtentMetrics;
    get itemIndex(): number;
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
export declare abstract class FixedExtentMetrics extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FixedExtentMetrics>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: FixedExtentMetrics;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:FixedExtentMetrics", readonly [], false];
    constructor(options: {
        minScrollExtent: number | null;
        maxScrollExtent: number | null;
        pixels: number | null;
        viewportDimension: number | null;
        axisDirection: upstream2.AxisDirection;
        itemIndex: number;
        devicePixelRatio: number;
    });
}
export declare namespace FixedExtentMetrics {
    function implement(args: [options: {
        minScrollExtent: number | null;
        maxScrollExtent: number | null;
        pixels: number | null;
        viewportDimension: number | null;
        axisDirection: upstream2.AxisDirection;
        itemIndex: number;
        devicePixelRatio: number;
    }], implementation: {}): FixedExtentMetrics;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "minScrollExtent" | "maxScrollExtent" | "hasContentDimensions" | "pixels" | "hasPixels" | "viewportDimension" | "hasViewportDimension" | "axisDirection" | "devicePixelRatio" | "axis" | "outOfRange" | "atEdge" | "extentBefore" | "extentInside" | "extentAfter" | "extentTotal" | "itemIndex" | "toString" | "copyWith" | "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::FixedExtentMetrics" | "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::FixedScrollMetrics" | "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics";
export {};

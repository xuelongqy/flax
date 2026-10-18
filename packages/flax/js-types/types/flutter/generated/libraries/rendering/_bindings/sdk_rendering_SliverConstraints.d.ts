import { type FlaxInstanceType as _FlaxInstanceType, type DartIterableInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_Constraints';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Constraints';
import type * as upstream1 from '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_GrowthDirection';
import '@flax/flutter/rendering/_bindings/sdk_rendering_GrowthDirection';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_ScrollDirection';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ScrollDirection';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_Axis';
import '@flax/flutter/painting/_bindings/flutter_Axis';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface SliverConstraints extends Omit<upstream0.Constraints, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverConstraints": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
}> {
    readonly __SliverConstraints: unique symbol;
    readonly [_flaxDartTypeValue]: SliverConstraints;
}
export interface SliverConstraints {
    readonly [_flaxDartTypeValue]: SliverConstraints;
    debugAssertIsValid(options?: {
        isAppliedConstraint?: boolean | undefined;
        informationCollector?: (() => DartIterableInput<upstream5.DiagnosticsNode, Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }>>) | null | undefined;
    }): boolean;
    copyWith(options?: {
        axisDirection?: upstream1.AxisDirection | null | undefined;
        growthDirection?: upstream2.GrowthDirection | null | undefined;
        userScrollDirection?: upstream3.ScrollDirection | null | undefined;
        scrollOffset?: number | null | undefined;
        precedingScrollExtent?: number | null | undefined;
        overlap?: number | null | undefined;
        remainingPaintExtent?: number | null | undefined;
        crossAxisExtent?: number | null | undefined;
        crossAxisDirection?: upstream1.AxisDirection | null | undefined;
        viewportMainAxisExtent?: number | null | undefined;
        remainingCacheExtent?: number | null | undefined;
        cacheOrigin?: number | null | undefined;
    }): SliverConstraints;
    asBoxConstraints(options?: {
        minExtent?: number | undefined;
        maxExtent?: number | undefined;
        crossAxisExtent?: number | null | undefined;
    }): upstream6.BoxConstraints;
    toString(): string;
    get axisDirection(): upstream1.AxisDirection;
    get growthDirection(): upstream2.GrowthDirection;
    get userScrollDirection(): upstream3.ScrollDirection;
    get scrollOffset(): number;
    get precedingScrollExtent(): number;
    get overlap(): number;
    get remainingPaintExtent(): number;
    get crossAxisExtent(): number;
    get crossAxisDirection(): upstream1.AxisDirection;
    get viewportMainAxisExtent(): number;
    get cacheOrigin(): number;
    get remainingCacheExtent(): number;
    get axis(): upstream4.Axis;
    get normalizedGrowthDirection(): upstream2.GrowthDirection;
    get isTight(): boolean;
    get isNormalized(): boolean;
}
export declare abstract class SliverConstraints extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverConstraints>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SliverConstraints;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverConstraints", readonly [], false];
    constructor(options: {
        axisDirection: upstream1.AxisDirection;
        growthDirection: upstream2.GrowthDirection;
        userScrollDirection: upstream3.ScrollDirection;
        scrollOffset: number;
        precedingScrollExtent: number;
        overlap: number;
        remainingPaintExtent: number;
        crossAxisExtent: number;
        crossAxisDirection: upstream1.AxisDirection;
        viewportMainAxisExtent: number;
        remainingCacheExtent: number;
        cacheOrigin: number;
    });
}
export declare namespace SliverConstraints {
    function implement(args: [options: {
        axisDirection: upstream1.AxisDirection;
        growthDirection: upstream2.GrowthDirection;
        userScrollDirection: upstream3.ScrollDirection;
        scrollOffset: number;
        precedingScrollExtent: number;
        overlap: number;
        remainingPaintExtent: number;
        crossAxisExtent: number;
        crossAxisDirection: upstream1.AxisDirection;
        viewportMainAxisExtent: number;
        remainingCacheExtent: number;
        cacheOrigin: number;
    }], implementation: {}): SliverConstraints;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isTight" | "isNormalized" | "axisDirection" | "growthDirection" | "userScrollDirection" | "scrollOffset" | "precedingScrollExtent" | "overlap" | "remainingPaintExtent" | "crossAxisExtent" | "crossAxisDirection" | "viewportMainAxisExtent" | "cacheOrigin" | "remainingCacheExtent" | "axis" | "normalizedGrowthDirection" | "debugAssertIsValid" | "copyWith" | "asBoxConstraints" | "toString" | "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverConstraints" | "__flaxBound:package:flutter/src/rendering/object.dart::Constraints";
export {};

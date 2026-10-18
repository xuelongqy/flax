import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridLayout';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridLayout';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridGeometry';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridGeometry';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface SliverGridRegularTileLayout extends Omit<upstream0.SliverGridLayout, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridRegularTileLayout": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridLayout": readonly [];
}> {
    readonly __SliverGridRegularTileLayout: unique symbol;
    readonly [_flaxDartTypeValue]: SliverGridRegularTileLayout;
}
export interface SliverGridRegularTileLayout {
    readonly [_flaxDartTypeValue]: SliverGridRegularTileLayout;
    getMinChildIndexForScrollOffset(scrollOffset: number): number;
    getMaxChildIndexForScrollOffset(scrollOffset: number): number;
    getGeometryForChildIndex(index: number): upstream1.SliverGridGeometry;
    computeMaxScrollOffset(childCount: number): number;
    get crossAxisCount(): number;
    get mainAxisStride(): number;
    get crossAxisStride(): number;
    get childMainAxisExtent(): number;
    get childCrossAxisExtent(): number;
    get reverseCrossAxis(): boolean;
}
export declare abstract class SliverGridRegularTileLayout extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverGridRegularTileLayout>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SliverGridRegularTileLayout;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverGridRegularTileLayout", readonly [], false];
    constructor(options: {
        crossAxisCount: number;
        mainAxisStride: number;
        crossAxisStride: number;
        childMainAxisExtent: number;
        childCrossAxisExtent: number;
        reverseCrossAxis: boolean;
    });
}
export declare namespace SliverGridRegularTileLayout {
    function implement(args: [options: {
        crossAxisCount: number;
        mainAxisStride: number;
        crossAxisStride: number;
        childMainAxisExtent: number;
        childCrossAxisExtent: number;
        reverseCrossAxis: boolean;
    }], implementation: {}): SliverGridRegularTileLayout;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "crossAxisCount" | "mainAxisStride" | "crossAxisStride" | "childMainAxisExtent" | "childCrossAxisExtent" | "reverseCrossAxis" | "getMinChildIndexForScrollOffset" | "getMaxChildIndexForScrollOffset" | "getGeometryForChildIndex" | "computeMaxScrollOffset" | "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridRegularTileLayout" | "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridLayout";
export {};

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridGeometry';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridGeometry';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SliverGridLayout extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridLayout": readonly [];
}> {
    readonly __SliverGridLayout: unique symbol;
    readonly [_flaxDartTypeValue]: SliverGridLayout;
    getMinChildIndexForScrollOffset(scrollOffset: number): number;
    getMaxChildIndexForScrollOffset(scrollOffset: number): number;
    getGeometryForChildIndex(index: number): upstream0.SliverGridGeometry;
    computeMaxScrollOffset(childCount: number): number;
}
export declare namespace _SliverGridLayoutFactory {
    function implement(args: [], implementation: {
        getMinChildIndexForScrollOffset: ((scrollOffset: number) => number);
        getMaxChildIndexForScrollOffset: ((scrollOffset: number) => number);
        getGeometryForChildIndex: ((index: number) => Readonly<{
            "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridGeometry": readonly [];
        }>);
        computeMaxScrollOffset: ((childCount: number) => number);
    }): SliverGridLayout;
}
export declare const SliverGridLayout: typeof _SliverGridLayoutFactory & _FlaxInstanceType<SliverGridLayout> & _FlaxDartType<SliverGridLayout, readonly ["class", "flax.core/sdk_rendering#type:SliverGridLayout", readonly [], false]>;

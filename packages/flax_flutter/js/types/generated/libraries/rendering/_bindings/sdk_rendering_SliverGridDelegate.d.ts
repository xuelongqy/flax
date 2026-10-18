import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridLayout';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridLayout';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverConstraints';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverConstraints';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SliverGridDelegate extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegate": readonly [];
}> {
    readonly __SliverGridDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: SliverGridDelegate;
    getLayout(constraints: Readonly<{
        "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>): upstream0.SliverGridLayout;
    shouldRelayout(oldDelegate: Readonly<{
        "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegate": readonly [];
    }>): boolean;
}
export declare namespace _SliverGridDelegateFactory {
    function implement(args: [], implementation: {
        getLayout: ((constraints: upstream1.SliverConstraints) => Readonly<{
            "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridLayout": readonly [];
        }>);
        shouldRelayout: ((oldDelegate: SliverGridDelegate) => boolean);
    }): SliverGridDelegate;
}
export declare const SliverGridDelegate: typeof _SliverGridDelegateFactory & _FlaxInstanceType<SliverGridDelegate> & _FlaxDartType<SliverGridDelegate, readonly ["class", "flax.core/sdk_rendering#type:SliverGridDelegate", readonly [], false]>;

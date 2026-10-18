import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_FloatingHeaderSnapConfiguration';
import '@flax/flutter/rendering/_bindings/sdk_rendering_FloatingHeaderSnapConfiguration';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_OverScrollHeaderStretchConfiguration';
import '@flax/flutter/rendering/_bindings/sdk_rendering_OverScrollHeaderStretchConfiguration';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_PersistentHeaderShowOnScreenConfiguration';
import '@flax/flutter/rendering/_bindings/sdk_rendering_PersistentHeaderShowOnScreenConfiguration';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface SliverPersistentHeaderDelegate extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/sliver_persistent_header.dart::SliverPersistentHeaderDelegate": readonly [];
}> {
    readonly __SliverPersistentHeaderDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: SliverPersistentHeaderDelegate;
}
export interface SliverPersistentHeaderDelegate {
    readonly [_flaxDartTypeValue]: SliverPersistentHeaderDelegate;
    get vsync(): upstream0.TickerProvider | null;
    get snapConfiguration(): upstream1.FloatingHeaderSnapConfiguration | null;
    get stretchConfiguration(): upstream2.OverScrollHeaderStretchConfiguration | null;
    get showOnScreenConfiguration(): upstream3.PersistentHeaderShowOnScreenConfiguration | null;
}
export declare abstract class SliverPersistentHeaderDelegate extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverPersistentHeaderDelegate>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SliverPersistentHeaderDelegate;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:SliverPersistentHeaderDelegate", readonly [], false];
    constructor();
    abstract build(context: upstream4.BuildContext, shrinkOffset: number, overlapsContent: boolean): Widget;
    abstract shouldRebuild(oldDelegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/sliver_persistent_header.dart::SliverPersistentHeaderDelegate": readonly [];
    }>): boolean;
    abstract get minExtent(): number;
    abstract get maxExtent(): number;
}
export declare namespace SliverPersistentHeaderDelegate {
    function implement(args: [], implementation: {
        build: ((context: upstream4.BuildContext, shrinkOffset: number, overlapsContent: boolean) => Widget);
        shouldRebuild: ((oldDelegate: SliverPersistentHeaderDelegate) => boolean);
        get minExtent(): number;
        get maxExtent(): number;
    }): SliverPersistentHeaderDelegate;
}

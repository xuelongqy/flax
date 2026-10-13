import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AlwaysScrollableScrollPhysics extends upstream0.ScrollPhysics, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::AlwaysScrollableScrollPhysics": readonly [];
}> {
    readonly __AlwaysScrollableScrollPhysics: unique symbol;
    readonly parent: upstream0.ScrollPhysics | null;
}
declare function _AlwaysScrollableScrollPhysicsFactory(options?: {
    parent?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }> | null | undefined;
}): AlwaysScrollableScrollPhysics;
export declare const AlwaysScrollableScrollPhysics: typeof _AlwaysScrollableScrollPhysicsFactory & _FlaxInstanceType<AlwaysScrollableScrollPhysics> & _FlaxDartType<AlwaysScrollableScrollPhysics, readonly ["class", "flax.core/flutter#type:AlwaysScrollableScrollPhysics", readonly [], false]>;
export {};

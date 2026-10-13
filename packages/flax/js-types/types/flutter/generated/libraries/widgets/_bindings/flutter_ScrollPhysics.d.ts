import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ScrollPhysics extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
}> {
    readonly __ScrollPhysics: unique symbol;
    readonly parent: ScrollPhysics | null;
}
declare function _ScrollPhysicsFactory(options?: {
    parent?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }> | null | undefined;
}): ScrollPhysics;
export declare const ScrollPhysics: typeof _ScrollPhysicsFactory & _FlaxInstanceType<ScrollPhysics> & _FlaxDartType<ScrollPhysics, readonly ["class", "flax.core/flutter#type:ScrollPhysics", readonly [], false]>;
export {};

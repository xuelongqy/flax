import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ScrollPhysics extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
}> {
    readonly __ScrollPhysics: unique symbol;
    readonly parent: ScrollPhysics | null;
    readonly minFlingDistance: number;
    readonly minFlingVelocity: number;
    readonly maxFlingVelocity: number;
    readonly dragStartDistanceMotionThreshold: number | null;
    readonly allowImplicitScrolling: boolean;
    readonly allowUserScrolling: boolean;
    buildParent(ancestor: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }> | null): ScrollPhysics | null;
    applyTo(ancestor: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }> | null): ScrollPhysics;
    carriedMomentum(existingVelocity: number): number;
    toString(): string;
}
export declare function _ScrollPhysicsFactory(options?: {
    parent?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }> | null | undefined;
}): ScrollPhysics;
export declare const ScrollPhysics: typeof _ScrollPhysicsFactory & _FlaxInstanceType<ScrollPhysics> & _FlaxDartType<ScrollPhysics, readonly ["class", "flax.core/flutter#type:ScrollPhysics", readonly [], false]>;

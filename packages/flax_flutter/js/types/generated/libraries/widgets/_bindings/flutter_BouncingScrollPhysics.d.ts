import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface BouncingScrollPhysics extends Omit<upstream0.ScrollPhysics, typeof _flaxDartTypeValue | "parent" | "minFlingDistance" | "minFlingVelocity" | "maxFlingVelocity" | "dragStartDistanceMotionThreshold" | "allowImplicitScrolling" | "allowUserScrolling" | "buildParent" | "applyTo" | "carriedMomentum" | "toString" | "frictionFactor">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::BouncingScrollPhysics": readonly [];
}> {
    readonly __BouncingScrollPhysics: unique symbol;
    readonly parent: upstream0.ScrollPhysics | null;
    readonly minFlingDistance: number;
    readonly minFlingVelocity: number;
    readonly maxFlingVelocity: number;
    readonly dragStartDistanceMotionThreshold: number;
    readonly allowImplicitScrolling: boolean;
    readonly allowUserScrolling: boolean;
    buildParent(ancestor: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }> | null): upstream0.ScrollPhysics | null;
    applyTo(ancestor: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }> | null): BouncingScrollPhysics;
    carriedMomentum(existingVelocity: number): number;
    toString(): string;
    frictionFactor(overscrollFraction: number): number;
}
export declare function _BouncingScrollPhysicsFactory(options?: {
    parent?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }> | null | undefined;
}): BouncingScrollPhysics;
export declare const BouncingScrollPhysics: typeof _BouncingScrollPhysicsFactory & _FlaxInstanceType<BouncingScrollPhysics> & _FlaxDartType<BouncingScrollPhysics, readonly ["class", "flax.core/flutter#type:BouncingScrollPhysics", readonly [], false]>;

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AlwaysScrollableScrollPhysics extends Omit<upstream0.ScrollPhysics, typeof _flaxDartTypeValue | "parent" | "minFlingDistance" | "minFlingVelocity" | "maxFlingVelocity" | "dragStartDistanceMotionThreshold" | "allowImplicitScrolling" | "allowUserScrolling" | "buildParent" | "applyTo" | "carriedMomentum" | "toString">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::AlwaysScrollableScrollPhysics": readonly [];
}> {
    readonly __AlwaysScrollableScrollPhysics: unique symbol;
    readonly parent: upstream0.ScrollPhysics | null;
    readonly minFlingDistance: number;
    readonly minFlingVelocity: number;
    readonly maxFlingVelocity: number;
    readonly dragStartDistanceMotionThreshold: number | null;
    readonly allowImplicitScrolling: boolean;
    readonly allowUserScrolling: boolean;
    buildParent(ancestor: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }> | null): upstream0.ScrollPhysics | null;
    applyTo(ancestor: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }> | null): AlwaysScrollableScrollPhysics;
    carriedMomentum(existingVelocity: number): number;
    toString(): string;
}
export declare function _AlwaysScrollableScrollPhysicsFactory(options?: {
    parent?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }> | null | undefined;
}): AlwaysScrollableScrollPhysics;
export declare const AlwaysScrollableScrollPhysics: typeof _AlwaysScrollableScrollPhysicsFactory & _FlaxInstanceType<AlwaysScrollableScrollPhysics> & _FlaxDartType<AlwaysScrollableScrollPhysics, readonly ["class", "flax.core/flutter#type:AlwaysScrollableScrollPhysics", readonly [], false]>;

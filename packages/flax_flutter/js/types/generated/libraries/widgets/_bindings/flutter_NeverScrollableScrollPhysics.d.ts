import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface NeverScrollableScrollPhysics extends Omit<upstream0.ScrollPhysics, typeof _flaxDartTypeValue | "parent" | "minFlingDistance" | "minFlingVelocity" | "maxFlingVelocity" | "dragStartDistanceMotionThreshold" | "allowImplicitScrolling" | "allowUserScrolling" | "buildParent" | "applyTo" | "carriedMomentum" | "toString">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::NeverScrollableScrollPhysics": readonly [];
}> {
    readonly __NeverScrollableScrollPhysics: unique symbol;
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
    }> | null): NeverScrollableScrollPhysics;
    carriedMomentum(existingVelocity: number): number;
    toString(): string;
}
export declare function _NeverScrollableScrollPhysicsFactory(options?: {
    parent?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }> | null | undefined;
}): NeverScrollableScrollPhysics;
export declare const NeverScrollableScrollPhysics: typeof _NeverScrollableScrollPhysicsFactory & _FlaxInstanceType<NeverScrollableScrollPhysics> & _FlaxDartType<NeverScrollableScrollPhysics, readonly ["class", "flax.core/flutter#type:NeverScrollableScrollPhysics", readonly [], false]>;

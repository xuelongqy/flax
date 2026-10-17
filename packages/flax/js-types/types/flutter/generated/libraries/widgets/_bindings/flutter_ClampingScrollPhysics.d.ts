import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ClampingScrollPhysics extends Omit<upstream0.ScrollPhysics, typeof _flaxDartTypeValue | "parent" | "minFlingDistance" | "minFlingVelocity" | "maxFlingVelocity" | "dragStartDistanceMotionThreshold" | "allowImplicitScrolling" | "allowUserScrolling" | "buildParent" | "applyTo" | "carriedMomentum" | "toString">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ClampingScrollPhysics": readonly [];
}> {
    readonly __ClampingScrollPhysics: unique symbol;
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
    }> | null): ClampingScrollPhysics;
    carriedMomentum(existingVelocity: number): number;
    toString(): string;
}
export declare function _ClampingScrollPhysicsFactory(options?: {
    parent?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }> | null | undefined;
}): ClampingScrollPhysics;
export declare const ClampingScrollPhysics: typeof _ClampingScrollPhysicsFactory & _FlaxInstanceType<ClampingScrollPhysics> & _FlaxDartType<ClampingScrollPhysics, readonly ["class", "flax.core/flutter#type:ClampingScrollPhysics", readonly [], false]>;

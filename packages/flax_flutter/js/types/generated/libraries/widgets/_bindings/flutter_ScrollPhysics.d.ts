import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollDecelerationRate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollDecelerationRate';
import type * as upstream1 from '@flax/flutter/physics/_bindings/sdk_physics_SpringDescription';
import '@flax/flutter/physics/_bindings/sdk_physics_SpringDescription';
import type * as upstream2 from '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream5 from '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ScrollPhysics extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
}> {
    readonly __ScrollPhysics: unique symbol;
    readonly [_flaxDartTypeValue]: ScrollPhysics;
    readonly parent: ScrollPhysics | null;
    readonly spring: upstream1.SpringDescription;
    readonly tolerance: upstream2.Tolerance;
    readonly minFlingDistance: number;
    readonly minFlingVelocity: number;
    readonly maxFlingVelocity: number;
    readonly dragStartDistanceMotionThreshold: number | null;
    readonly allowImplicitScrolling: boolean;
    readonly allowUserScrolling: boolean;
    readonly allowSelectionEdgeScrolling: boolean;
    buildParent(ancestor: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }> | null): ScrollPhysics | null;
    applyTo(ancestor: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }> | null): ScrollPhysics;
    applyPhysicsToUserOffset(position: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, offset: number): number;
    shouldAcceptUserOffset(position: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>): boolean;
    recommendDeferredLoading(velocity: number, metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, context: upstream4.BuildContext): boolean;
    applyBoundaryConditions(position: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, value: number): number;
    adjustPositionForNewDimensions(options: {
        isScrolling: boolean;
        newPosition: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
        }>;
        oldPosition: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
        }>;
        velocity: number;
    }): number;
    createBallisticSimulation(position: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, velocity: number): upstream5.Simulation | null;
    toleranceFor(metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>): upstream2.Tolerance;
    carriedMomentum(existingVelocity: number): number;
    shouldUpdate(old: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }>): boolean;
    toString(): string;
}
export declare function _ScrollPhysicsFactory(options?: {
    parent?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }> | null | undefined;
}): ScrollPhysics;
export declare namespace _ScrollPhysicsFactory {
    function alwaysScrollable(options?: {
        parent?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
        }> | null | undefined;
    }): ScrollPhysics;
}
export declare namespace _ScrollPhysicsFactory {
    function bouncing(options?: {
        parent?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
        }> | null | undefined;
        decelerationRate?: upstream0.ScrollDecelerationRate | undefined;
    }): ScrollPhysics;
}
export declare namespace _ScrollPhysicsFactory {
    function clamping(options?: {
        parent?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
        }> | null | undefined;
    }): ScrollPhysics;
}
export declare namespace _ScrollPhysicsFactory {
    function neverScrollable(options?: {
        parent?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
        }> | null | undefined;
    }): ScrollPhysics;
}
export declare namespace _ScrollPhysicsFactory {
    function rangeMaintaining(options?: {
        parent?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
        }> | null | undefined;
    }): ScrollPhysics;
}
export declare const ScrollPhysics: typeof _ScrollPhysicsFactory & _FlaxInstanceType<ScrollPhysics> & _FlaxDartType<ScrollPhysics, readonly ["class", "flax.core/flutter#type:ScrollPhysics", readonly [], false]>;

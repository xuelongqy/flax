import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import type * as upstream1 from '@flax/flutter/physics/_bindings/sdk_physics_SpringDescription';
import '@flax/flutter/physics/_bindings/sdk_physics_SpringDescription';
import type * as upstream2 from '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream5 from '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CarouselScrollPhysics extends Omit<upstream0.ScrollPhysics, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:material_ui/src/carousel.dart::CarouselScrollPhysics": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
}> {
    readonly __CarouselScrollPhysics: unique symbol;
    readonly [_flaxDartTypeValue]: CarouselScrollPhysics;
    readonly parent: upstream0.ScrollPhysics | null;
    readonly spring: upstream1.SpringDescription;
    readonly tolerance: upstream2.Tolerance;
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
    }> | null): CarouselScrollPhysics;
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
    toString(): string;
}
export declare function _CarouselScrollPhysicsFactory(options?: {
    parent?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }> | null | undefined;
}): CarouselScrollPhysics;
export interface _CarouselScrollPhysicsNative extends CarouselScrollPhysics {
    readonly [_flaxDartTypeValue]: _CarouselScrollPhysicsNative;
    buildParent(ancestor: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }> | null): upstream0.ScrollPhysics | null;
    applyTo(ancestor: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }> | null): CarouselScrollPhysics;
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
        oldPosition: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
        }>;
        newPosition: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
        }>;
        isScrolling: boolean;
        velocity: number;
    }): number;
    createBallisticSimulation(position: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, velocity: number): upstream5.Simulation | null;
    toleranceFor(metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>): upstream2.Tolerance;
    carriedMomentum(existingVelocity: number): number;
    toString(): string;
    get allowImplicitScrolling(): boolean;
    get parent(): upstream0.ScrollPhysics | null;
    get spring(): upstream1.SpringDescription;
    get tolerance(): upstream2.Tolerance;
    get minFlingDistance(): number;
    get minFlingVelocity(): number;
    get maxFlingVelocity(): number;
    get dragStartDistanceMotionThreshold(): number | null;
    get allowUserScrolling(): boolean;
}
export declare abstract class _CarouselScrollPhysicsNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CarouselScrollPhysics>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: CarouselScrollPhysics;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:CarouselScrollPhysics", readonly [], false];
    constructor(options?: {
        parent?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
        }> | null | undefined;
    });
}
export declare namespace _CarouselScrollPhysicsFactory {
    function implement(args: [options?: {
        parent?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
        }> | null | undefined;
    }], implementation: {}): CarouselScrollPhysics;
}
declare const _CarouselScrollPhysicsBinding: typeof _CarouselScrollPhysicsFactory & (new (options?: {
    parent?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }> | null | undefined;
}) => _CarouselScrollPhysicsNative);
export declare const CarouselScrollPhysics: typeof _CarouselScrollPhysicsBinding & _FlaxInstanceType<CarouselScrollPhysics> & _FlaxDartType<CarouselScrollPhysics, readonly ["class", "flax.material/material#type:CarouselScrollPhysics", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "parent" | "spring" | "tolerance" | "minFlingDistance" | "minFlingVelocity" | "maxFlingVelocity" | "dragStartDistanceMotionThreshold" | "allowImplicitScrolling" | "allowUserScrolling" | "buildParent" | "applyTo" | "applyPhysicsToUserOffset" | "shouldAcceptUserOffset" | "recommendDeferredLoading" | "applyBoundaryConditions" | "adjustPositionForNewDimensions" | "createBallisticSimulation" | "toleranceFor" | "carriedMomentum" | "toString" | "__flaxBound:package:material_ui/src/carousel.dart::CarouselScrollPhysics" | "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics";
export {};

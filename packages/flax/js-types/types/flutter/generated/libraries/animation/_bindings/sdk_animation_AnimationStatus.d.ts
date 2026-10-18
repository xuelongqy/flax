import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AnimationStatus extends DartEnum, Omit<upstream0.Enum, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/animation/animation.dart::AnimationStatus": readonly [];
}> {
    readonly __AnimationStatus: unique symbol;
    readonly [_flaxDartTypeValue]: AnimationStatus;
    readonly name: string;
    readonly index: number;
    readonly isDismissed: boolean;
    readonly isCompleted: boolean;
    readonly isAnimating: boolean;
    readonly isForwardOrCompleted: boolean;
}
export declare const AnimationStatus: Readonly<{
    dismissed: AnimationStatus;
    forward: AnimationStatus;
    reverse: AnimationStatus;
    completed: AnimationStatus;
    values: readonly AnimationStatus[];
} & _FlaxInstanceType<AnimationStatus> & _FlaxDartType<AnimationStatus, readonly ["class", "flax.core/sdk_animation#type:AnimationStatus", readonly [], false]>>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isDismissed" | "isCompleted" | "isAnimating" | "isForwardOrCompleted" | "__flaxBound:package:flutter/src/animation/animation.dart::AnimationStatus";
export {};

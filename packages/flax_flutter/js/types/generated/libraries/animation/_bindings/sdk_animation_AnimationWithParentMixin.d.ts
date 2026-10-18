import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationStatus';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationStatus';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AnimationWithParentMixin<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/animation/animations.dart::AnimationWithParentMixin": readonly [T];
}> {
    readonly __AnimationWithParentMixin: unique symbol;
    readonly [_flaxDartTypeValue]: AnimationWithParentMixin<T>;
    readonly parent: upstream0.Animation<T>;
    readonly status: upstream1.AnimationStatus;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    addStatusListener(listener: ((status: upstream1.AnimationStatus) => void)): void;
    removeStatusListener(listener: ((status: upstream1.AnimationStatus) => void)): void;
}
export declare const AnimationWithParentMixin: object & _FlaxInstanceType<AnimationWithParentMixin<unknown | null>> & _FlaxDartType<AnimationWithParentMixin<unknown | null>, readonly ["class", "flax.core/sdk_animation#type:AnimationWithParentMixin", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        readonly prototype: AnimationWithParentMixin<_Selected0>;
    } & _FlaxInstanceType<AnimationWithParentMixin<_Selected0>> & _FlaxDartType<AnimationWithParentMixin<_Selected0>> : never : never;
}
export {};

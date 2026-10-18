import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AnimationEagerListenerMixin extends Readonly<{
    "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationEagerListenerMixin": readonly [];
}> {
    readonly __AnimationEagerListenerMixin: unique symbol;
    readonly [_flaxDartTypeValue]: AnimationEagerListenerMixin;
    didRegisterListener(): void;
    didUnregisterListener(): void;
    dispose(): void;
}
export declare const AnimationEagerListenerMixin: object & _FlaxInstanceType<AnimationEagerListenerMixin> & _FlaxDartType<AnimationEagerListenerMixin, readonly ["class", "flax.core/sdk_animation#type:AnimationEagerListenerMixin", readonly [], false]>;

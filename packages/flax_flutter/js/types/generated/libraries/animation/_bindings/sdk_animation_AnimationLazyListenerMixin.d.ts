import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AnimationLazyListenerMixin extends Readonly<{
    "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLazyListenerMixin": readonly [];
}> {
    readonly __AnimationLazyListenerMixin: unique symbol;
    readonly [_flaxDartTypeValue]: AnimationLazyListenerMixin;
    readonly isListening: boolean;
    didRegisterListener(): void;
    didUnregisterListener(): void;
    didStartListening(): void;
    didStopListening(): void;
}
export declare const AnimationLazyListenerMixin: object & _FlaxInstanceType<AnimationLazyListenerMixin> & _FlaxDartType<AnimationLazyListenerMixin, readonly ["class", "flax.core/sdk_animation#type:AnimationLazyListenerMixin", readonly [], false]>;

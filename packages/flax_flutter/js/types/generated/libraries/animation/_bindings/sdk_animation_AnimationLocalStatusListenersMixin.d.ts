import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationStatus';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationStatus';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AnimationLocalStatusListenersMixin extends Readonly<{
    "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalStatusListenersMixin": readonly [];
}> {
    readonly __AnimationLocalStatusListenersMixin: unique symbol;
    readonly [_flaxDartTypeValue]: AnimationLocalStatusListenersMixin;
    didRegisterListener(): void;
    didUnregisterListener(): void;
    addStatusListener(listener: ((status: upstream0.AnimationStatus) => void)): void;
    removeStatusListener(listener: ((status: upstream0.AnimationStatus) => void)): void;
    clearStatusListeners(): void;
    notifyStatusListeners(status: upstream0.AnimationStatus): void;
}
export declare const AnimationLocalStatusListenersMixin: object & _FlaxInstanceType<AnimationLocalStatusListenersMixin> & _FlaxDartType<AnimationLocalStatusListenersMixin, readonly ["class", "flax.core/sdk_animation#type:AnimationLocalStatusListenersMixin", readonly [], false]>;

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AnimationLocalListenersMixin extends Readonly<{
    "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalListenersMixin": readonly [];
}> {
    readonly __AnimationLocalListenersMixin: unique symbol;
    readonly [_flaxDartTypeValue]: AnimationLocalListenersMixin;
    didRegisterListener(): void;
    didUnregisterListener(): void;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    clearListeners(): void;
    notifyListeners(): void;
}
export declare const AnimationLocalListenersMixin: object & _FlaxInstanceType<AnimationLocalListenersMixin> & _FlaxDartType<AnimationLocalListenersMixin, readonly ["class", "flax.core/sdk_animation#type:AnimationLocalListenersMixin", readonly [], false]>;

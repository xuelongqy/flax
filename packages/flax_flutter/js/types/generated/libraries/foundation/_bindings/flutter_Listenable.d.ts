import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Listenable extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __Listenable: unique symbol;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
}
export declare const Listenable: object & _FlaxInstanceType<Listenable> & _FlaxDartType<Listenable, readonly ["class", "flax.core/flutter#type:Listenable", readonly [], false]>;

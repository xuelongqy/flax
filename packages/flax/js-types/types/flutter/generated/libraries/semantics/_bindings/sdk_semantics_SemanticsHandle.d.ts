import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SemanticsHandle extends Readonly<{
    "__flaxBound:package:flutter/src/semantics/binding.dart::SemanticsHandle": readonly [];
}> {
    readonly __SemanticsHandle: unique symbol;
    readonly [_flaxDartTypeValue]: SemanticsHandle;
    dispose(): void;
}
export declare const SemanticsHandle: object & _FlaxInstanceType<SemanticsHandle> & _FlaxDartType<SemanticsHandle, readonly ["class", "flax.core/sdk_semantics#type:SemanticsHandle", readonly [], false]>;

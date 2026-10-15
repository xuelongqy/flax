import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Type extends Readonly<{
    "__flaxBound:dart:core::Type": readonly [];
}> {
    readonly __Type: unique symbol;
    toString(): string;
}
export declare const Type: object & _FlaxInstanceType<Type> & _FlaxDartType<Type, readonly ["class", "flax.core/flutter#type:Type", readonly [], false]>;

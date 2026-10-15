import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Deprecated extends Readonly<{
    "__flaxBound:dart:core::Deprecated": readonly [];
}> {
    readonly __Deprecated: unique symbol;
    readonly message: string | null;
}
declare function _DeprecatedFactory(message: string | null): Deprecated;
export declare const Deprecated: typeof _DeprecatedFactory & _FlaxInstanceType<Deprecated> & _FlaxDartType<Deprecated, readonly ["class", "flax.core/flutter#type:Deprecated", readonly [], false]>;
export {};

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Deprecated extends Readonly<{
    "__flaxBound:dart:core::Deprecated": readonly [];
}> {
    readonly __Deprecated: unique symbol;
    readonly [_flaxDartTypeValue]: Deprecated;
    readonly message: string | null;
    toString(): string;
}
export declare function _DeprecatedFactory(message: string | null): Deprecated;
export declare namespace _DeprecatedFactory {
    function implement(message?: string | null): Deprecated;
}
export declare namespace _DeprecatedFactory {
    function extend(message?: string | null): Deprecated;
}
export declare namespace _DeprecatedFactory {
    function subclass(message?: string | null): Deprecated;
}
export declare namespace _DeprecatedFactory {
    function instantiate(message?: string | null): Deprecated;
}
export declare namespace _DeprecatedFactory {
    function mixin(message?: string | null): Deprecated;
}
export declare namespace _DeprecatedFactory {
    function optional(message?: string | null): Deprecated;
}
export declare const Deprecated: typeof _DeprecatedFactory & _FlaxInstanceType<Deprecated> & _FlaxDartType<Deprecated, readonly ["class", "flax.core/flutter#type:Deprecated", readonly [], false]>;

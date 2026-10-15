import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Error extends Readonly<{
    "__flaxBound:dart:core::Error": readonly [];
}> {
    readonly __Error: unique symbol;
    readonly stackTrace: upstream0.StackTrace | null;
    toString(): string;
}
declare function _ErrorFactory(): Error;
export declare const Error: typeof _ErrorFactory & _FlaxInstanceType<Error> & _FlaxDartType<Error, readonly ["class", "flax.core/flutter#type:Error", readonly [], false]>;
export {};

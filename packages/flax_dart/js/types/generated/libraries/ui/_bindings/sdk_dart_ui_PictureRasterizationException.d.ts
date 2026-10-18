import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PictureRasterizationException extends Readonly<{
    "__flaxBound:dart:ui::PictureRasterizationException": readonly [];
}>, Readonly<{
    "__flaxBound:dart:core::Exception": readonly [];
}> {
    readonly __PictureRasterizationException: unique symbol;
    readonly [_flaxDartTypeValue]: PictureRasterizationException;
    readonly message: string;
    readonly stack: upstream0.StackTrace | null;
    toString(): string;
}
export declare namespace _PictureRasterizationExceptionFactory {
    function implement(args: [], implementation: {
        toString: (() => string);
        get message(): string;
        get stack(): Readonly<{
            "__flaxBound:dart:core::StackTrace": readonly [];
        }> | null;
    }): PictureRasterizationException;
}
export declare const PictureRasterizationException: typeof _PictureRasterizationExceptionFactory & _FlaxInstanceType<PictureRasterizationException> & _FlaxDartType<PictureRasterizationException, readonly ["class", "flax.core/sdk_dart_ui#type:PictureRasterizationException", readonly [], false]>;

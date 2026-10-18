import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Display extends Readonly<{
    "__flaxBound:dart:ui::Display": readonly [];
}> {
    readonly __Display: unique symbol;
    readonly [_flaxDartTypeValue]: Display;
    readonly id: number;
    readonly devicePixelRatio: number;
    readonly size: upstream0.Size;
    readonly refreshRate: number;
    toString(): string;
}
export declare namespace _DisplayFactory {
    function implement(args: [], implementation: {
        toString: (() => string);
        get id(): number;
        get devicePixelRatio(): number;
        get size(): Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        get refreshRate(): number;
    }): Display;
}
export declare const Display: typeof _DisplayFactory & _FlaxInstanceType<Display> & _FlaxDartType<Display, readonly ["class", "flax.core/sdk_dart_ui#type:Display", readonly [], false]>;

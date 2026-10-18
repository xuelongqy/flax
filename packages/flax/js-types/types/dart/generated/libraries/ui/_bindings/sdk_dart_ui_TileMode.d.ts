import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TileMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::TileMode">, Readonly<{
    "__flaxBound:dart:ui::TileMode": readonly [];
}> {
    readonly __TileMode: unique symbol;
    readonly [_flaxDartTypeValue]: TileMode;
    readonly name: string;
    readonly index: number;
}
export declare const TileMode: Readonly<{
    clamp: TileMode;
    repeated: TileMode;
    mirror: TileMode;
    decal: TileMode;
    values: readonly TileMode[];
} & _FlaxInstanceType<TileMode> & _FlaxDartType<TileMode, readonly ["class", "flax.core/sdk_dart_ui#type:TileMode", readonly [], false]>>;

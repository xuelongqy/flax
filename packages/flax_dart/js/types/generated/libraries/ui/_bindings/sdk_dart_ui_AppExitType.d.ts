import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AppExitType extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::AppExitType">, Readonly<{
    "__flaxBound:dart:ui::AppExitType": readonly [];
}> {
    readonly __AppExitType: unique symbol;
    readonly [_flaxDartTypeValue]: AppExitType;
    readonly name: string;
    readonly index: number;
}
export declare const AppExitType: Readonly<{
    cancelable: AppExitType;
    required: AppExitType;
    values: readonly AppExitType[];
} & _FlaxInstanceType<AppExitType> & _FlaxDartType<AppExitType, readonly ["class", "flax.core/sdk_dart_ui#type:AppExitType", readonly [], false]>>;

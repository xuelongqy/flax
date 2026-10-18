import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AppExitResponse extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::AppExitResponse">, Readonly<{
    "__flaxBound:dart:ui::AppExitResponse": readonly [];
}> {
    readonly __AppExitResponse: unique symbol;
    readonly [_flaxDartTypeValue]: AppExitResponse;
    readonly name: string;
    readonly index: number;
}
export declare const AppExitResponse: Readonly<{
    exit: AppExitResponse;
    cancel: AppExitResponse;
    values: readonly AppExitResponse[];
} & _FlaxInstanceType<AppExitResponse> & _FlaxDartType<AppExitResponse, readonly ["class", "flax.core/sdk_dart_ui#type:AppExitResponse", readonly [], false]>>;

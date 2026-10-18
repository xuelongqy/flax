import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RefreshIndicatorMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/cupertino/refresh.dart::RefreshIndicatorMode">, Readonly<{
    "__flaxBound:package:flutter/src/cupertino/refresh.dart::RefreshIndicatorMode": readonly [];
}> {
    readonly __RefreshIndicatorMode: unique symbol;
    readonly [_flaxDartTypeValue]: RefreshIndicatorMode;
    readonly name: string;
    readonly index: number;
}
export declare const RefreshIndicatorMode: Readonly<{
    inactive: RefreshIndicatorMode;
    drag: RefreshIndicatorMode;
    armed: RefreshIndicatorMode;
    refresh: RefreshIndicatorMode;
    done: RefreshIndicatorMode;
    values: readonly RefreshIndicatorMode[];
} & _FlaxInstanceType<RefreshIndicatorMode> & _FlaxDartType<RefreshIndicatorMode, readonly ["class", "flax.core/sdk_cupertino#type:RefreshIndicatorMode", readonly [], false]>>;

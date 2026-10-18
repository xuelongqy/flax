import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RefreshIndicatorTriggerMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/material/refresh_indicator.dart::RefreshIndicatorTriggerMode">, Readonly<{
    "__flaxBound:package:flutter/src/material/refresh_indicator.dart::RefreshIndicatorTriggerMode": readonly [];
}> {
    readonly __RefreshIndicatorTriggerMode: unique symbol;
    readonly [_flaxDartTypeValue]: RefreshIndicatorTriggerMode;
    readonly name: string;
    readonly index: number;
}
export declare const RefreshIndicatorTriggerMode: Readonly<{
    anywhere: RefreshIndicatorTriggerMode;
    onEdge: RefreshIndicatorTriggerMode;
    values: readonly RefreshIndicatorTriggerMode[];
} & _FlaxInstanceType<RefreshIndicatorTriggerMode> & _FlaxDartType<RefreshIndicatorTriggerMode, readonly ["class", "flax.core/sdk_material#type:RefreshIndicatorTriggerMode", readonly [], false]>>;

import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RefreshIndicatorStatus extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/material/refresh_indicator.dart::RefreshIndicatorStatus">, Readonly<{
    "__flaxBound:package:flutter/src/material/refresh_indicator.dart::RefreshIndicatorStatus": readonly [];
}> {
    readonly __RefreshIndicatorStatus: unique symbol;
    readonly [_flaxDartTypeValue]: RefreshIndicatorStatus;
    readonly name: string;
    readonly index: number;
}
export declare const RefreshIndicatorStatus: Readonly<{
    drag: RefreshIndicatorStatus;
    armed: RefreshIndicatorStatus;
    snap: RefreshIndicatorStatus;
    refresh: RefreshIndicatorStatus;
    done: RefreshIndicatorStatus;
    canceled: RefreshIndicatorStatus;
    values: readonly RefreshIndicatorStatus[];
} & _FlaxInstanceType<RefreshIndicatorStatus> & _FlaxDartType<RefreshIndicatorStatus, readonly ["class", "flax.core/sdk_material#type:RefreshIndicatorStatus", readonly [], false]>>;

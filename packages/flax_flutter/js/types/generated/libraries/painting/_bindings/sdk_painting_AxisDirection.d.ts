import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AxisDirection extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/painting/basic_types.dart::AxisDirection">, Readonly<{
    "__flaxBound:package:flutter/src/painting/basic_types.dart::AxisDirection": readonly [];
}> {
    readonly __AxisDirection: unique symbol;
    readonly [_flaxDartTypeValue]: AxisDirection;
    readonly name: string;
    readonly index: number;
}
export declare const AxisDirection: Readonly<{
    up: AxisDirection;
    right: AxisDirection;
    down: AxisDirection;
    left: AxisDirection;
    values: readonly AxisDirection[];
} & _FlaxInstanceType<AxisDirection> & _FlaxDartType<AxisDirection, readonly ["class", "flax.core/sdk_painting#type:AxisDirection", readonly [], false]>>;

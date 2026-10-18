import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ScrollDecelerationRate extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollDecelerationRate">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollDecelerationRate": readonly [];
}> {
    readonly __ScrollDecelerationRate: unique symbol;
    readonly [_flaxDartTypeValue]: ScrollDecelerationRate;
    readonly name: string;
    readonly index: number;
}
export declare const ScrollDecelerationRate: Readonly<{
    normal: ScrollDecelerationRate;
    fast: ScrollDecelerationRate;
    values: readonly ScrollDecelerationRate[];
} & _FlaxInstanceType<ScrollDecelerationRate> & _FlaxDartType<ScrollDecelerationRate, readonly ["class", "flax.core/sdk_widgets#type:ScrollDecelerationRate", readonly [], false]>>;

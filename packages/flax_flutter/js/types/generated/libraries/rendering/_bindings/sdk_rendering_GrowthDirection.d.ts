import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface GrowthDirection extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/rendering/sliver.dart::GrowthDirection">, Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver.dart::GrowthDirection": readonly [];
}> {
    readonly __GrowthDirection: unique symbol;
    readonly [_flaxDartTypeValue]: GrowthDirection;
    readonly name: string;
    readonly index: number;
}
export declare const GrowthDirection: Readonly<{
    forward: GrowthDirection;
    reverse: GrowthDirection;
    values: readonly GrowthDirection[];
} & _FlaxInstanceType<GrowthDirection> & _FlaxDartType<GrowthDirection, readonly ["class", "flax.core/sdk_rendering#type:GrowthDirection", readonly [], false]>>;

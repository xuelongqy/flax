import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RenderComparison extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/painting/basic_types.dart::RenderComparison">, Readonly<{
    "__flaxBound:package:flutter/src/painting/basic_types.dart::RenderComparison": readonly [];
}> {
    readonly __RenderComparison: unique symbol;
    readonly [_flaxDartTypeValue]: RenderComparison;
    readonly name: string;
    readonly index: number;
}
export declare const RenderComparison: Readonly<{
    identical: RenderComparison;
    metadata: RenderComparison;
    paint: RenderComparison;
    layout: RenderComparison;
    values: readonly RenderComparison[];
} & _FlaxInstanceType<RenderComparison> & _FlaxDartType<RenderComparison, readonly ["class", "flax.core/sdk_painting#type:RenderComparison", readonly [], false]>>;

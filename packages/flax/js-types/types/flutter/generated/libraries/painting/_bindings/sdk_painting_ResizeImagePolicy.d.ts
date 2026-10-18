import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ResizeImagePolicy extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/painting/image_provider.dart::ResizeImagePolicy">, Readonly<{
    "__flaxBound:package:flutter/src/painting/image_provider.dart::ResizeImagePolicy": readonly [];
}> {
    readonly __ResizeImagePolicy: unique symbol;
    readonly [_flaxDartTypeValue]: ResizeImagePolicy;
    readonly name: string;
    readonly index: number;
}
export declare const ResizeImagePolicy: Readonly<{
    exact: ResizeImagePolicy;
    fit: ResizeImagePolicy;
    values: readonly ResizeImagePolicy[];
} & _FlaxInstanceType<ResizeImagePolicy> & _FlaxDartType<ResizeImagePolicy, readonly ["class", "flax.core/sdk_painting#type:ResizeImagePolicy", readonly [], false]>>;

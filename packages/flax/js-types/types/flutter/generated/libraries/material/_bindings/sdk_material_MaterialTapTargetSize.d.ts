import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MaterialTapTargetSize extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/material/theme_data.dart::MaterialTapTargetSize">, Readonly<{
    "__flaxBound:package:flutter/src/material/theme_data.dart::MaterialTapTargetSize": readonly [];
}> {
    readonly __MaterialTapTargetSize: unique symbol;
    readonly [_flaxDartTypeValue]: MaterialTapTargetSize;
    readonly name: string;
    readonly index: number;
}
export declare const MaterialTapTargetSize: Readonly<{
    padded: MaterialTapTargetSize;
    shrinkWrap: MaterialTapTargetSize;
    values: readonly MaterialTapTargetSize[];
} & _FlaxInstanceType<MaterialTapTargetSize> & _FlaxDartType<MaterialTapTargetSize, readonly ["class", "flax.core/sdk_material#type:MaterialTapTargetSize", readonly [], false]>>;

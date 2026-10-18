import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface IconAlignment extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/material/button_style_button.dart::IconAlignment">, Readonly<{
    "__flaxBound:package:flutter/src/material/button_style_button.dart::IconAlignment": readonly [];
}> {
    readonly __IconAlignment: unique symbol;
    readonly [_flaxDartTypeValue]: IconAlignment;
    readonly name: string;
    readonly index: number;
}
export declare const IconAlignment: Readonly<{
    start: IconAlignment;
    end: IconAlignment;
    values: readonly IconAlignment[];
} & _FlaxInstanceType<IconAlignment> & _FlaxDartType<IconAlignment, readonly ["class", "flax.core/sdk_material#type:IconAlignment", readonly [], false]>>;

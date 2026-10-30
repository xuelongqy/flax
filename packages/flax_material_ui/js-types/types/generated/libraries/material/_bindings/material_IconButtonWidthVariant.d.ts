import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface IconButtonWidthVariant extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:material_ui/src/button_style.dart::IconButtonWidthVariant">, Readonly<{
    "__flaxBound:package:material_ui/src/button_style.dart::IconButtonWidthVariant": readonly [];
}> {
    readonly __IconButtonWidthVariant: unique symbol;
    readonly [_flaxDartTypeValue]: IconButtonWidthVariant;
    readonly name: string;
    readonly index: number;
}
export declare const IconButtonWidthVariant: Readonly<{
    narrow: IconButtonWidthVariant;
    standard: IconButtonWidthVariant;
    wide: IconButtonWidthVariant;
    values: readonly IconButtonWidthVariant[];
} & _FlaxInstanceType<IconButtonWidthVariant> & _FlaxDartType<IconButtonWidthVariant, readonly ["class", "flax.material/material#type:IconButtonWidthVariant", readonly [], false]>>;

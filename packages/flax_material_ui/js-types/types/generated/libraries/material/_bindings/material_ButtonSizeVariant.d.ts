import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ButtonSizeVariant extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:material_ui/src/button_style.dart::ButtonSizeVariant">, Readonly<{
    "__flaxBound:package:material_ui/src/button_style.dart::ButtonSizeVariant": readonly [];
}> {
    readonly __ButtonSizeVariant: unique symbol;
    readonly [_flaxDartTypeValue]: ButtonSizeVariant;
    readonly name: string;
    readonly index: number;
}
export declare const ButtonSizeVariant: Readonly<{
    xSmall: ButtonSizeVariant;
    small: ButtonSizeVariant;
    medium: ButtonSizeVariant;
    large: ButtonSizeVariant;
    xLarge: ButtonSizeVariant;
    values: readonly ButtonSizeVariant[];
} & _FlaxInstanceType<ButtonSizeVariant> & _FlaxDartType<ButtonSizeVariant, readonly ["class", "flax.material/material#type:ButtonSizeVariant", readonly [], false]>>;

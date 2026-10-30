import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ButtonShapeVariant extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:material_ui/src/button_style.dart::ButtonShapeVariant">, Readonly<{
    "__flaxBound:package:material_ui/src/button_style.dart::ButtonShapeVariant": readonly [];
}> {
    readonly __ButtonShapeVariant: unique symbol;
    readonly [_flaxDartTypeValue]: ButtonShapeVariant;
    readonly name: string;
    readonly index: number;
}
export declare const ButtonShapeVariant: Readonly<{
    round: ButtonShapeVariant;
    square: ButtonShapeVariant;
    values: readonly ButtonShapeVariant[];
} & _FlaxInstanceType<ButtonShapeVariant> & _FlaxDartType<ButtonShapeVariant, readonly ["class", "flax.material/material#type:ButtonShapeVariant", readonly [], false]>>;

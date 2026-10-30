import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface StyleVariant extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:material_ui/src/theme_data.dart::StyleVariant">, Readonly<{
    "__flaxBound:package:material_ui/src/theme_data.dart::StyleVariant": readonly [];
}> {
    readonly __StyleVariant: unique symbol;
    readonly [_flaxDartTypeValue]: StyleVariant;
    readonly name: string;
    readonly index: number;
}
export declare const StyleVariant: Readonly<{
    material3: StyleVariant;
    material3Expressive: StyleVariant;
    values: readonly StyleVariant[];
} & _FlaxInstanceType<StyleVariant> & _FlaxDartType<StyleVariant, readonly ["class", "flax.material/material#type:StyleVariant", readonly [], false]>>;

import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MaterialType extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:material_ui/src/material.dart::MaterialType">, Readonly<{
    "__flaxBound:package:material_ui/src/material.dart::MaterialType": readonly [];
}> {
    readonly __MaterialType: unique symbol;
    readonly [_flaxDartTypeValue]: MaterialType;
    readonly name: string;
    readonly index: number;
}
export declare const MaterialType: Readonly<{
    canvas: MaterialType;
    card: MaterialType;
    circle: MaterialType;
    button: MaterialType;
    transparency: MaterialType;
    values: readonly MaterialType[];
} & _FlaxInstanceType<MaterialType> & _FlaxDartType<MaterialType, readonly ["class", "flax.material/material#type:MaterialType", readonly [], false]>>;

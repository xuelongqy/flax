import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FloatingLabelBehavior extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:material_ui/src/input_decorator.dart::FloatingLabelBehavior">, Readonly<{
    "__flaxBound:package:material_ui/src/input_decorator.dart::FloatingLabelBehavior": readonly [];
}> {
    readonly __FloatingLabelBehavior: unique symbol;
    readonly [_flaxDartTypeValue]: FloatingLabelBehavior;
    readonly name: string;
    readonly index: number;
}
export declare const FloatingLabelBehavior: Readonly<{
    never: FloatingLabelBehavior;
    auto: FloatingLabelBehavior;
    always: FloatingLabelBehavior;
    values: readonly FloatingLabelBehavior[];
} & _FlaxInstanceType<FloatingLabelBehavior> & _FlaxDartType<FloatingLabelBehavior, readonly ["class", "flax.material/material#type:FloatingLabelBehavior", readonly [], false]>>;

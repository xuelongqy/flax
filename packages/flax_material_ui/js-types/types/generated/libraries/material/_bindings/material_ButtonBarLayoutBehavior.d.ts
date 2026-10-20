import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ButtonBarLayoutBehavior extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:material_ui/src/button_theme.dart::ButtonBarLayoutBehavior">, Readonly<{
    "__flaxBound:package:material_ui/src/button_theme.dart::ButtonBarLayoutBehavior": readonly [];
}> {
    readonly __ButtonBarLayoutBehavior: unique symbol;
    readonly [_flaxDartTypeValue]: ButtonBarLayoutBehavior;
    readonly name: string;
    readonly index: number;
}
export declare const ButtonBarLayoutBehavior: Readonly<{
    constrained: ButtonBarLayoutBehavior;
    padded: ButtonBarLayoutBehavior;
    values: readonly ButtonBarLayoutBehavior[];
} & _FlaxInstanceType<ButtonBarLayoutBehavior> & _FlaxDartType<ButtonBarLayoutBehavior, readonly ["class", "flax.material/material#type:ButtonBarLayoutBehavior", readonly [], false]>>;

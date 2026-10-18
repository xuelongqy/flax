import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SnackBarBehavior extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/material/snack_bar_theme.dart::SnackBarBehavior">, Readonly<{
    "__flaxBound:package:flutter/src/material/snack_bar_theme.dart::SnackBarBehavior": readonly [];
}> {
    readonly __SnackBarBehavior: unique symbol;
    readonly [_flaxDartTypeValue]: SnackBarBehavior;
    readonly name: string;
    readonly index: number;
}
export declare const SnackBarBehavior: Readonly<{
    fixed: SnackBarBehavior;
    floating: SnackBarBehavior;
    values: readonly SnackBarBehavior[];
} & _FlaxInstanceType<SnackBarBehavior> & _FlaxDartType<SnackBarBehavior, readonly ["class", "flax.core/sdk_material#type:SnackBarBehavior", readonly [], false]>>;

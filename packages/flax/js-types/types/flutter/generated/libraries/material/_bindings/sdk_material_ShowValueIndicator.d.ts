import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ShowValueIndicator extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/material/slider_theme.dart::ShowValueIndicator">, Readonly<{
    "__flaxBound:package:flutter/src/material/slider_theme.dart::ShowValueIndicator": readonly [];
}> {
    readonly __ShowValueIndicator: unique symbol;
    readonly [_flaxDartTypeValue]: ShowValueIndicator;
    readonly name: string;
    readonly index: number;
}
export declare const ShowValueIndicator: Readonly<{
    onlyForDiscrete: ShowValueIndicator;
    onlyForContinuous: ShowValueIndicator;
    always: ShowValueIndicator;
    onDrag: ShowValueIndicator;
    alwaysVisible: ShowValueIndicator;
    never: ShowValueIndicator;
    values: readonly ShowValueIndicator[];
} & _FlaxInstanceType<ShowValueIndicator> & _FlaxDartType<ShowValueIndicator, readonly ["class", "flax.core/sdk_material#type:ShowValueIndicator", readonly [], false]>>;

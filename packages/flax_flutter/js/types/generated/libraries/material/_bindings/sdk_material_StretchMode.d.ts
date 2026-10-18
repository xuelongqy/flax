import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface StretchMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/material/flexible_space_bar.dart::StretchMode">, Readonly<{
    "__flaxBound:package:flutter/src/material/flexible_space_bar.dart::StretchMode": readonly [];
}> {
    readonly __StretchMode: unique symbol;
    readonly [_flaxDartTypeValue]: StretchMode;
    readonly name: string;
    readonly index: number;
}
export declare const StretchMode: Readonly<{
    zoomBackground: StretchMode;
    blurBackground: StretchMode;
    fadeTitle: StretchMode;
    values: readonly StretchMode[];
} & _FlaxInstanceType<StretchMode> & _FlaxDartType<StretchMode, readonly ["class", "flax.core/sdk_material#type:StretchMode", readonly [], false]>>;

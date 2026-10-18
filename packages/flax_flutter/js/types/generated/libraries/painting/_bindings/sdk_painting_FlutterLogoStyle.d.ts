import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FlutterLogoStyle extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/painting/flutter_logo.dart::FlutterLogoStyle">, Readonly<{
    "__flaxBound:package:flutter/src/painting/flutter_logo.dart::FlutterLogoStyle": readonly [];
}> {
    readonly __FlutterLogoStyle: unique symbol;
    readonly [_flaxDartTypeValue]: FlutterLogoStyle;
    readonly name: string;
    readonly index: number;
}
export declare const FlutterLogoStyle: Readonly<{
    markOnly: FlutterLogoStyle;
    horizontal: FlutterLogoStyle;
    stacked: FlutterLogoStyle;
    values: readonly FlutterLogoStyle[];
} & _FlaxInstanceType<FlutterLogoStyle> & _FlaxDartType<FlutterLogoStyle, readonly ["class", "flax.core/sdk_painting#type:FlutterLogoStyle", readonly [], false]>>;

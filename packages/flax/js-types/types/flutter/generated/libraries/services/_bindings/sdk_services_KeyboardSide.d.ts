import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface KeyboardSide extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/services/raw_keyboard.dart::KeyboardSide">, Readonly<{
    "__flaxBound:package:flutter/src/services/raw_keyboard.dart::KeyboardSide": readonly [];
}> {
    readonly __KeyboardSide: unique symbol;
    readonly [_flaxDartTypeValue]: KeyboardSide;
    readonly name: string;
    readonly index: number;
}
export declare const KeyboardSide: Readonly<{
    any: KeyboardSide;
    left: KeyboardSide;
    right: KeyboardSide;
    all: KeyboardSide;
    values: readonly KeyboardSide[];
} & _FlaxInstanceType<KeyboardSide> & _FlaxDartType<KeyboardSide, readonly ["class", "flax.core/sdk_services#type:KeyboardSide", readonly [], false]>>;

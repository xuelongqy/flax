import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface GestureDisposition extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/gestures/arena.dart::GestureDisposition">, Readonly<{
    "__flaxBound:package:flutter/src/gestures/arena.dart::GestureDisposition": readonly [];
}> {
    readonly __GestureDisposition: unique symbol;
    readonly [_flaxDartTypeValue]: GestureDisposition;
    readonly name: string;
    readonly index: number;
}
export declare const GestureDisposition: Readonly<{
    accepted: GestureDisposition;
    rejected: GestureDisposition;
    values: readonly GestureDisposition[];
} & _FlaxInstanceType<GestureDisposition> & _FlaxDartType<GestureDisposition, readonly ["class", "flax.core/sdk_gestures#type:GestureDisposition", readonly [], false]>>;

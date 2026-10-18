import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface GestureRecognizerState extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/gestures/recognizer.dart::GestureRecognizerState">, Readonly<{
    "__flaxBound:package:flutter/src/gestures/recognizer.dart::GestureRecognizerState": readonly [];
}> {
    readonly __GestureRecognizerState: unique symbol;
    readonly [_flaxDartTypeValue]: GestureRecognizerState;
    readonly name: string;
    readonly index: number;
}
export declare const GestureRecognizerState: Readonly<{
    ready: GestureRecognizerState;
    possible: GestureRecognizerState;
    defunct: GestureRecognizerState;
    values: readonly GestureRecognizerState[];
} & _FlaxInstanceType<GestureRecognizerState> & _FlaxDartType<GestureRecognizerState, readonly ["class", "flax.core/sdk_gestures#type:GestureRecognizerState", readonly [], false]>>;

import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface KeyEventType extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "label" | "__flaxBound:dart:ui::KeyEventType">, Readonly<{
    "__flaxBound:dart:ui::KeyEventType": readonly [];
}> {
    readonly __KeyEventType: unique symbol;
    readonly [_flaxDartTypeValue]: KeyEventType;
    readonly name: string;
    readonly index: number;
    readonly label: string;
}
export declare const KeyEventType: Readonly<{
    down: KeyEventType;
    up: KeyEventType;
    repeat: KeyEventType;
    values: readonly KeyEventType[];
} & _FlaxInstanceType<KeyEventType> & _FlaxDartType<KeyEventType, readonly ["class", "flax.core/sdk_dart_ui#type:KeyEventType", readonly [], false]>>;

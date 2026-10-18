import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface KeyEventDeviceType extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "label" | "__flaxBound:dart:ui::KeyEventDeviceType">, Readonly<{
    "__flaxBound:dart:ui::KeyEventDeviceType": readonly [];
}> {
    readonly __KeyEventDeviceType: unique symbol;
    readonly [_flaxDartTypeValue]: KeyEventDeviceType;
    readonly name: string;
    readonly index: number;
    readonly label: string;
}
export declare const KeyEventDeviceType: Readonly<{
    keyboard: KeyEventDeviceType;
    directionalPad: KeyEventDeviceType;
    gamepad: KeyEventDeviceType;
    joystick: KeyEventDeviceType;
    hdmi: KeyEventDeviceType;
    values: readonly KeyEventDeviceType[];
} & _FlaxInstanceType<KeyEventDeviceType> & _FlaxDartType<KeyEventDeviceType, readonly ["class", "flax.core/sdk_dart_ui#type:KeyEventDeviceType", readonly [], false]>>;

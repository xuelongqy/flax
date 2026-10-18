import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface KeyDataTransitMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyDataTransitMode">, Readonly<{
    "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyDataTransitMode": readonly [];
}> {
    readonly __KeyDataTransitMode: unique symbol;
    readonly [_flaxDartTypeValue]: KeyDataTransitMode;
    readonly name: string;
    readonly index: number;
}
export declare const KeyDataTransitMode: Readonly<{
    rawKeyData: KeyDataTransitMode;
    keyDataThenRawKeyData: KeyDataTransitMode;
    values: readonly KeyDataTransitMode[];
} & _FlaxInstanceType<KeyDataTransitMode> & _FlaxDartType<KeyDataTransitMode, readonly ["class", "flax.core/sdk_services#type:KeyDataTransitMode", readonly [], false]>>;

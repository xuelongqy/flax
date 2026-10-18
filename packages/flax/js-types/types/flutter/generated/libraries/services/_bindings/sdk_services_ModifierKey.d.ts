import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ModifierKey extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/services/raw_keyboard.dart::ModifierKey">, Readonly<{
    "__flaxBound:package:flutter/src/services/raw_keyboard.dart::ModifierKey": readonly [];
}> {
    readonly __ModifierKey: unique symbol;
    readonly [_flaxDartTypeValue]: ModifierKey;
    readonly name: string;
    readonly index: number;
}
export declare const ModifierKey: Readonly<{
    controlModifier: ModifierKey;
    shiftModifier: ModifierKey;
    altModifier: ModifierKey;
    metaModifier: ModifierKey;
    capsLockModifier: ModifierKey;
    numLockModifier: ModifierKey;
    scrollLockModifier: ModifierKey;
    functionModifier: ModifierKey;
    symbolModifier: ModifierKey;
    values: readonly ModifierKey[];
} & _FlaxInstanceType<ModifierKey> & _FlaxDartType<ModifierKey, readonly ["class", "flax.core/sdk_services#type:ModifierKey", readonly [], false]>>;

import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface KeyboardLockMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "logicalKey" | "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyboardLockMode">, Readonly<{
    "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyboardLockMode": readonly [];
}> {
    readonly __KeyboardLockMode: unique symbol;
    readonly [_flaxDartTypeValue]: KeyboardLockMode;
    readonly name: string;
    readonly index: number;
    readonly logicalKey: upstream1.LogicalKeyboardKey;
}
export declare const KeyboardLockMode: Readonly<{
    numLock: KeyboardLockMode;
    scrollLock: KeyboardLockMode;
    capsLock: KeyboardLockMode;
    values: readonly KeyboardLockMode[];
    findLockByLogicalKey(logicalKey: Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): KeyboardLockMode | null;
} & _FlaxInstanceType<KeyboardLockMode> & _FlaxDartType<KeyboardLockMode, readonly ["class", "flax.core/sdk_services#type:KeyboardLockMode", readonly [], false]>>;

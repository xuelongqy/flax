import { type FlaxInstanceType as _FlaxInstanceType, type DartSet } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_RawKeyEvent';
import '@flax/flutter/services/_bindings/sdk_services_RawKeyEvent';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_PhysicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_PhysicalKeyboardKey';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RawKeyboard extends Readonly<{
    "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyboard": readonly [];
}> {
    readonly __RawKeyboard: unique symbol;
    readonly [_flaxDartTypeValue]: RawKeyboard;
    get keyEventHandler(): ((event: Readonly<{
        "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => boolean) | null;
    readonly keysPressed: DartSet<upstream1.LogicalKeyboardKey>;
    readonly physicalKeysPressed: DartSet<upstream2.PhysicalKeyboardKey>;
    addListener(listener: ((value: upstream0.RawKeyEvent) => void)): void;
    removeListener(listener: ((value: upstream0.RawKeyEvent) => void)): void;
    handleRawKeyEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): boolean;
    lookUpLayout(physicalKey: Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::PhysicalKeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): upstream1.LogicalKeyboardKey | null;
    set keyEventHandler(value: ((event: upstream0.RawKeyEvent) => boolean) | null);
}
declare const _RawKeyboardFactory: {
    readonly instance: RawKeyboard;
};
export declare const RawKeyboard: typeof _RawKeyboardFactory & _FlaxInstanceType<RawKeyboard> & _FlaxDartType<RawKeyboard, readonly ["class", "flax.core/sdk_services#type:RawKeyboard", readonly [], false]>;
export {};

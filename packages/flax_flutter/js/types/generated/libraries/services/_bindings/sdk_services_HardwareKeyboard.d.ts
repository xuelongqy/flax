import { type FlaxInstanceType as _FlaxInstanceType, type DartSet } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_PhysicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_PhysicalKeyboardKey';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_KeyboardLockMode';
import '@flax/flutter/services/_bindings/sdk_services_KeyboardLockMode';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_KeyEvent';
import '@flax/flutter/services/_bindings/flutter_KeyEvent';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface HardwareKeyboard extends Readonly<{
    "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::HardwareKeyboard": readonly [];
}> {
    readonly __HardwareKeyboard: unique symbol;
    readonly [_flaxDartTypeValue]: HardwareKeyboard;
    readonly physicalKeysPressed: DartSet<upstream0.PhysicalKeyboardKey>;
    readonly logicalKeysPressed: DartSet<upstream1.LogicalKeyboardKey>;
    readonly lockModesEnabled: DartSet<upstream2.KeyboardLockMode>;
    readonly isControlPressed: boolean;
    readonly isShiftPressed: boolean;
    readonly isAltPressed: boolean;
    readonly isMetaPressed: boolean;
    lookUpLayout(physicalKey: Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::PhysicalKeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): upstream1.LogicalKeyboardKey | null;
    isLogicalKeyPressed(key: Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): boolean;
    isPhysicalKeyPressed(key: Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::PhysicalKeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): boolean;
    addHandler(handler: ((event: upstream3.KeyEvent) => boolean)): void;
    removeHandler(handler: ((event: upstream3.KeyEvent) => boolean)): void;
    syncKeyboardState(): Promise<void>;
    handleKeyEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): boolean;
}
export declare function _HardwareKeyboardFactory(): HardwareKeyboard;
export interface _HardwareKeyboardNative extends HardwareKeyboard {
    readonly [_flaxDartTypeValue]: _HardwareKeyboardNative;
    lookUpLayout(physicalKey: Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::PhysicalKeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): upstream1.LogicalKeyboardKey | null;
    isLogicalKeyPressed(key: Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): boolean;
    isPhysicalKeyPressed(key: Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::PhysicalKeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): boolean;
    addHandler(handler: ((event: upstream3.KeyEvent) => boolean)): void;
    removeHandler(handler: ((event: upstream3.KeyEvent) => boolean)): void;
    syncKeyboardState(): Promise<void>;
    handleKeyEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): boolean;
    get physicalKeysPressed(): DartSet<upstream0.PhysicalKeyboardKey>;
    get logicalKeysPressed(): DartSet<upstream1.LogicalKeyboardKey>;
    get lockModesEnabled(): DartSet<upstream2.KeyboardLockMode>;
    get isControlPressed(): boolean;
    get isShiftPressed(): boolean;
    get isAltPressed(): boolean;
    get isMetaPressed(): boolean;
}
export declare abstract class _HardwareKeyboardNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<HardwareKeyboard>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: HardwareKeyboard;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:HardwareKeyboard", readonly [], false];
    constructor();
}
export declare namespace _HardwareKeyboardFactory {
    function implement(args: [], implementation: {}): HardwareKeyboard;
}
declare const _HardwareKeyboardBinding: typeof _HardwareKeyboardFactory & (new () => _HardwareKeyboardNative);
export declare namespace _HardwareKeyboardFactory {
    const instance: HardwareKeyboard;
}
export declare const HardwareKeyboard: typeof _HardwareKeyboardBinding & _FlaxInstanceType<HardwareKeyboard> & _FlaxDartType<HardwareKeyboard, readonly ["class", "flax.core/sdk_services#type:HardwareKeyboard", readonly [], false]>;
export {};

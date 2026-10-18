import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_KeyboardSide';
import '@flax/flutter/services/_bindings/sdk_services_KeyboardSide';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_ModifierKey';
import '@flax/flutter/services/_bindings/sdk_services_ModifierKey';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface KeyHelper extends Readonly<{
    "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::KeyHelper": readonly [];
}> {
    readonly __KeyHelper: unique symbol;
    readonly [_flaxDartTypeValue]: KeyHelper;
    readonly debugToolkit: string;
    readonly platformPlane: number;
    getModifierSide(key: upstream1.ModifierKey): upstream0.KeyboardSide;
    isModifierPressed(key: upstream1.ModifierKey, modifiers: number, options: {
        isDown: boolean;
        keyCode: number;
        side?: upstream0.KeyboardSide | undefined;
    }): boolean;
    numpadKey(keyCode: number): upstream2.LogicalKeyboardKey | null;
    logicalKey(keyCode: number): upstream2.LogicalKeyboardKey | null;
}
export declare function _KeyHelperFactory(toolkit: string): KeyHelper;
export declare namespace _KeyHelperFactory {
    function implement(args: [], implementation: {
        getModifierSide: ((key: upstream1.ModifierKey) => upstream0.KeyboardSide);
        isModifierPressed: ((key: upstream1.ModifierKey, modifiers: number, options: {
            side?: upstream0.KeyboardSide | undefined;
            keyCode: number;
            isDown: boolean;
        }) => boolean);
        numpadKey: ((keyCode: number) => (Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null);
        logicalKey: ((keyCode: number) => (Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null);
        get debugToolkit(): string;
        get platformPlane(): number;
    }): KeyHelper;
}
export declare const KeyHelper: typeof _KeyHelperFactory & _FlaxInstanceType<KeyHelper> & _FlaxDartType<KeyHelper, readonly ["class", "flax.core/sdk_services#type:KeyHelper", readonly [], false]>;

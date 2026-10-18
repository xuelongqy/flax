import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_KeyHelper';
import '@flax/flutter/services/_bindings/sdk_services_KeyHelper';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_KeyboardSide';
import '@flax/flutter/services/_bindings/sdk_services_KeyboardSide';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_ModifierKey';
import '@flax/flutter/services/_bindings/sdk_services_ModifierKey';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface GtkKeyHelper extends Omit<upstream0.KeyHelper, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::GtkKeyHelper": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::KeyHelper": readonly [];
}> {
    readonly __GtkKeyHelper: unique symbol;
    readonly [_flaxDartTypeValue]: GtkKeyHelper;
}
export interface GtkKeyHelper {
    readonly [_flaxDartTypeValue]: GtkKeyHelper;
    getModifierSide(key: upstream2.ModifierKey): upstream1.KeyboardSide;
    isModifierPressed(key: upstream2.ModifierKey, modifiers: number, options: {
        side?: upstream1.KeyboardSide | undefined;
        keyCode: number;
        isDown: boolean;
    }): boolean;
    numpadKey(keyCode: number): upstream3.LogicalKeyboardKey | null;
    logicalKey(keyCode: number): upstream3.LogicalKeyboardKey | null;
    get debugToolkit(): string;
    get platformPlane(): number;
}
export declare abstract class GtkKeyHelper extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GtkKeyHelper>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: GtkKeyHelper;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:GtkKeyHelper", readonly [], false];
    constructor();
}
export declare namespace GtkKeyHelper {
    function implement(args: [], implementation: {}): GtkKeyHelper;
}
export declare namespace GtkKeyHelper {
    const modifierShift: number;
}
export declare namespace GtkKeyHelper {
    const modifierCapsLock: number;
}
export declare namespace GtkKeyHelper {
    const modifierControl: number;
}
export declare namespace GtkKeyHelper {
    const modifierMod1: number;
}
export declare namespace GtkKeyHelper {
    const modifierMod2: number;
}
export declare namespace GtkKeyHelper {
    const modifierMeta: number;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "debugToolkit" | "platformPlane" | "getModifierSide" | "isModifierPressed" | "numpadKey" | "logicalKey" | "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::GtkKeyHelper" | "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::KeyHelper";
export {};

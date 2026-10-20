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
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface GtkKeyHelper extends Omit<upstream0.KeyHelper, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::GtkKeyHelper": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::KeyHelper": readonly [];
}> {
    readonly __GtkKeyHelper: unique symbol;
    readonly [_flaxDartTypeValue]: GtkKeyHelper;
    readonly debugToolkit: string;
    readonly platformPlane: number;
    getModifierSide(key: upstream2.ModifierKey): upstream1.KeyboardSide;
    isModifierPressed(key: upstream2.ModifierKey, modifiers: number, options: {
        isDown: boolean;
        keyCode: number;
        side?: upstream1.KeyboardSide | undefined;
    }): boolean;
    numpadKey(keyCode: number): upstream3.LogicalKeyboardKey | null;
    logicalKey(keyCode: number): upstream3.LogicalKeyboardKey | null;
}
export declare function _GtkKeyHelperFactory(): GtkKeyHelper;
export interface _GtkKeyHelperNative extends GtkKeyHelper {
    readonly [_flaxDartTypeValue]: _GtkKeyHelperNative;
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
export declare abstract class _GtkKeyHelperNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GtkKeyHelper>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: GtkKeyHelper;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:GtkKeyHelper", readonly [], false];
    constructor();
}
export declare namespace _GtkKeyHelperFactory {
    function implement(args: [], implementation: {}): GtkKeyHelper;
}
declare const _GtkKeyHelperBinding: typeof _GtkKeyHelperFactory & (new () => _GtkKeyHelperNative);
export declare namespace _GtkKeyHelperFactory {
    const modifierShift: number;
}
export declare namespace _GtkKeyHelperFactory {
    const modifierCapsLock: number;
}
export declare namespace _GtkKeyHelperFactory {
    const modifierControl: number;
}
export declare namespace _GtkKeyHelperFactory {
    const modifierMod1: number;
}
export declare namespace _GtkKeyHelperFactory {
    const modifierMod2: number;
}
export declare namespace _GtkKeyHelperFactory {
    const modifierMeta: number;
}
export declare const GtkKeyHelper: typeof _GtkKeyHelperBinding & _FlaxInstanceType<GtkKeyHelper> & _FlaxDartType<GtkKeyHelper, readonly ["class", "flax.core/sdk_services#type:GtkKeyHelper", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "debugToolkit" | "platformPlane" | "getModifierSide" | "isModifierPressed" | "numpadKey" | "logicalKey" | "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::GtkKeyHelper" | "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::KeyHelper";
export {};

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
export interface GLFWKeyHelper extends Omit<upstream0.KeyHelper, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::GLFWKeyHelper": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::KeyHelper": readonly [];
}> {
    readonly __GLFWKeyHelper: unique symbol;
    readonly [_flaxDartTypeValue]: GLFWKeyHelper;
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
export declare function _GLFWKeyHelperFactory(): GLFWKeyHelper;
export interface _GLFWKeyHelperNative extends GLFWKeyHelper {
    readonly [_flaxDartTypeValue]: _GLFWKeyHelperNative;
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
export declare abstract class _GLFWKeyHelperNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GLFWKeyHelper>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: GLFWKeyHelper;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:GLFWKeyHelper", readonly [], false];
    constructor();
}
export declare namespace _GLFWKeyHelperFactory {
    function implement(args: [], implementation: {}): GLFWKeyHelper;
}
declare const _GLFWKeyHelperBinding: typeof _GLFWKeyHelperFactory & (new () => _GLFWKeyHelperNative);
export declare namespace _GLFWKeyHelperFactory {
    const modifierCapsLock: number;
}
export declare namespace _GLFWKeyHelperFactory {
    const modifierShift: number;
}
export declare namespace _GLFWKeyHelperFactory {
    const modifierControl: number;
}
export declare namespace _GLFWKeyHelperFactory {
    const modifierAlt: number;
}
export declare namespace _GLFWKeyHelperFactory {
    const modifierMeta: number;
}
export declare namespace _GLFWKeyHelperFactory {
    const modifierNumericPad: number;
}
export declare const GLFWKeyHelper: typeof _GLFWKeyHelperBinding & _FlaxInstanceType<GLFWKeyHelper> & _FlaxDartType<GLFWKeyHelper, readonly ["class", "flax.core/sdk_services#type:GLFWKeyHelper", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "debugToolkit" | "platformPlane" | "getModifierSide" | "isModifierPressed" | "numpadKey" | "logicalKey" | "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::GLFWKeyHelper" | "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::KeyHelper";
export {};

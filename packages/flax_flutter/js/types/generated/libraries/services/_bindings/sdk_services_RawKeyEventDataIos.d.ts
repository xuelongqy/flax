import { type FlaxInstanceType as _FlaxInstanceType, type DartMap } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_RawKeyEventData';
import '@flax/flutter/services/_bindings/sdk_services_RawKeyEventData';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_KeyboardSide';
import '@flax/flutter/services/_bindings/sdk_services_KeyboardSide';
import type * as upstream3 from '@flax/flutter/services/_bindings/sdk_services_ModifierKey';
import '@flax/flutter/services/_bindings/sdk_services_ModifierKey';
import type * as upstream4 from '@flax/flutter/services/_bindings/flutter_PhysicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_PhysicalKeyboardKey';
import type * as upstream5 from '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RawKeyEventDataIos extends Omit<upstream0.RawKeyEventData, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.RawKeyEventData>, Readonly<{
    "__flaxBound:package:flutter/src/services/raw_keyboard_ios.dart::RawKeyEventDataIos": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __RawKeyEventDataIos: unique symbol;
    readonly [_flaxDartTypeValue]: RawKeyEventDataIos;
    readonly isControlPressed: boolean;
    readonly isShiftPressed: boolean;
    readonly isAltPressed: boolean;
    readonly isMetaPressed: boolean;
    readonly modifiersPressed: DartMap<upstream3.ModifierKey, upstream2.KeyboardSide>;
    readonly physicalKey: upstream4.PhysicalKeyboardKey;
    readonly logicalKey: upstream5.LogicalKeyboardKey;
    readonly keyLabel: string;
    readonly characters: string;
    readonly charactersIgnoringModifiers: string;
    readonly keyCode: number;
    readonly modifiers: number;
    isModifierPressed(key: upstream3.ModifierKey, options?: {
        side?: upstream2.KeyboardSide | undefined;
    }): boolean;
    getModifierSide(key: upstream3.ModifierKey): upstream2.KeyboardSide | null;
    shouldDispatchEvent(): boolean;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream7.DiagnosticsTreeStyle | null | undefined;
    }): upstream6.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toString(options?: {
        minLevel?: upstream9.DiagnosticLevel | undefined;
    }): string;
}
export declare function _RawKeyEventDataIosFactory(options?: {
    characters?: string | undefined;
    charactersIgnoringModifiers?: string | undefined;
    keyCode?: number | undefined;
    modifiers?: number | undefined;
}): RawKeyEventDataIos;
export interface _RawKeyEventDataIosNative extends RawKeyEventDataIos {
    readonly [_flaxDartTypeValue]: _RawKeyEventDataIosNative;
    isModifierPressed(key: upstream3.ModifierKey, options?: {
        side?: upstream2.KeyboardSide | undefined;
    }): boolean;
    getModifierSide(key: upstream3.ModifierKey): upstream2.KeyboardSide | null;
    shouldDispatchEvent(): boolean;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream7.DiagnosticsTreeStyle | null | undefined;
    }): upstream6.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toString(options?: {
        minLevel?: upstream9.DiagnosticLevel | undefined;
    }): string;
    get characters(): string;
    get charactersIgnoringModifiers(): string;
    get keyCode(): number;
    get modifiers(): number;
    get keyLabel(): string;
    get physicalKey(): upstream4.PhysicalKeyboardKey;
    get logicalKey(): upstream5.LogicalKeyboardKey;
    get isControlPressed(): boolean;
    get isShiftPressed(): boolean;
    get isAltPressed(): boolean;
    get isMetaPressed(): boolean;
    get modifiersPressed(): DartMap<upstream3.ModifierKey, upstream2.KeyboardSide>;
}
export declare abstract class _RawKeyEventDataIosNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RawKeyEventDataIos>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RawKeyEventDataIos;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:RawKeyEventDataIos", readonly [], false];
    constructor(options?: {
        characters?: string | undefined;
        charactersIgnoringModifiers?: string | undefined;
        keyCode?: number | undefined;
        modifiers?: number | undefined;
    });
}
export declare namespace _RawKeyEventDataIosFactory {
    function implement(args: [options?: {
        characters?: string | undefined;
        charactersIgnoringModifiers?: string | undefined;
        keyCode?: number | undefined;
        modifiers?: number | undefined;
    }], implementation: {}): RawKeyEventDataIos;
}
declare const _RawKeyEventDataIosBinding: typeof _RawKeyEventDataIosFactory & (new (options?: {
    characters?: string | undefined;
    charactersIgnoringModifiers?: string | undefined;
    keyCode?: number | undefined;
    modifiers?: number | undefined;
}) => _RawKeyEventDataIosNative);
export declare namespace _RawKeyEventDataIosFactory {
    const modifierCapsLock: number;
}
export declare namespace _RawKeyEventDataIosFactory {
    const modifierShift: number;
}
export declare namespace _RawKeyEventDataIosFactory {
    const modifierLeftShift: number;
}
export declare namespace _RawKeyEventDataIosFactory {
    const modifierRightShift: number;
}
export declare namespace _RawKeyEventDataIosFactory {
    const modifierControl: number;
}
export declare namespace _RawKeyEventDataIosFactory {
    const modifierLeftControl: number;
}
export declare namespace _RawKeyEventDataIosFactory {
    const modifierRightControl: number;
}
export declare namespace _RawKeyEventDataIosFactory {
    const modifierOption: number;
}
export declare namespace _RawKeyEventDataIosFactory {
    const modifierLeftOption: number;
}
export declare namespace _RawKeyEventDataIosFactory {
    const modifierRightOption: number;
}
export declare namespace _RawKeyEventDataIosFactory {
    const modifierCommand: number;
}
export declare namespace _RawKeyEventDataIosFactory {
    const modifierLeftCommand: number;
}
export declare namespace _RawKeyEventDataIosFactory {
    const modifierRightCommand: number;
}
export declare namespace _RawKeyEventDataIosFactory {
    const modifierNumericPad: number;
}
export declare namespace _RawKeyEventDataIosFactory {
    const modifierHelp: number;
}
export declare namespace _RawKeyEventDataIosFactory {
    const modifierFunction: number;
}
export declare namespace _RawKeyEventDataIosFactory {
    const deviceIndependentMask: number;
}
export declare const RawKeyEventDataIos: typeof _RawKeyEventDataIosBinding & _FlaxInstanceType<RawKeyEventDataIos> & _FlaxDartType<RawKeyEventDataIos, readonly ["class", "flax.core/sdk_services#type:RawKeyEventDataIos", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isControlPressed" | "isShiftPressed" | "isAltPressed" | "isMetaPressed" | "modifiersPressed" | "physicalKey" | "logicalKey" | "keyLabel" | "characters" | "charactersIgnoringModifiers" | "keyCode" | "modifiers" | "isModifierPressed" | "getModifierSide" | "shouldDispatchEvent" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/services/raw_keyboard_ios.dart::RawKeyEventDataIos" | "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

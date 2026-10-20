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
export interface RawKeyEventDataWindows extends Omit<upstream0.RawKeyEventData, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.RawKeyEventData>, Readonly<{
    "__flaxBound:package:flutter/src/services/raw_keyboard_windows.dart::RawKeyEventDataWindows": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __RawKeyEventDataWindows: unique symbol;
    readonly [_flaxDartTypeValue]: RawKeyEventDataWindows;
    readonly isControlPressed: boolean;
    readonly isShiftPressed: boolean;
    readonly isAltPressed: boolean;
    readonly isMetaPressed: boolean;
    readonly modifiersPressed: DartMap<upstream3.ModifierKey, upstream2.KeyboardSide>;
    readonly physicalKey: upstream4.PhysicalKeyboardKey;
    readonly logicalKey: upstream5.LogicalKeyboardKey;
    readonly keyLabel: string;
    readonly keyCode: number;
    readonly scanCode: number;
    readonly characterCodePoint: number;
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
export declare function _RawKeyEventDataWindowsFactory(options?: {
    keyCode?: number | undefined;
    scanCode?: number | undefined;
    characterCodePoint?: number | undefined;
    modifiers?: number | undefined;
}): RawKeyEventDataWindows;
export interface _RawKeyEventDataWindowsNative extends RawKeyEventDataWindows {
    readonly [_flaxDartTypeValue]: _RawKeyEventDataWindowsNative;
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
    get keyCode(): number;
    get scanCode(): number;
    get characterCodePoint(): number;
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
export declare abstract class _RawKeyEventDataWindowsNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RawKeyEventDataWindows>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RawKeyEventDataWindows;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:RawKeyEventDataWindows", readonly [], false];
    constructor(options?: {
        keyCode?: number | undefined;
        scanCode?: number | undefined;
        characterCodePoint?: number | undefined;
        modifiers?: number | undefined;
    });
}
export declare namespace _RawKeyEventDataWindowsFactory {
    function implement(args: [options?: {
        keyCode?: number | undefined;
        scanCode?: number | undefined;
        characterCodePoint?: number | undefined;
        modifiers?: number | undefined;
    }], implementation: {}): RawKeyEventDataWindows;
}
declare const _RawKeyEventDataWindowsBinding: typeof _RawKeyEventDataWindowsFactory & (new (options?: {
    keyCode?: number | undefined;
    scanCode?: number | undefined;
    characterCodePoint?: number | undefined;
    modifiers?: number | undefined;
}) => _RawKeyEventDataWindowsNative);
export declare namespace _RawKeyEventDataWindowsFactory {
    const modifierShift: number;
}
export declare namespace _RawKeyEventDataWindowsFactory {
    const modifierLeftShift: number;
}
export declare namespace _RawKeyEventDataWindowsFactory {
    const modifierRightShift: number;
}
export declare namespace _RawKeyEventDataWindowsFactory {
    const modifierControl: number;
}
export declare namespace _RawKeyEventDataWindowsFactory {
    const modifierLeftControl: number;
}
export declare namespace _RawKeyEventDataWindowsFactory {
    const modifierRightControl: number;
}
export declare namespace _RawKeyEventDataWindowsFactory {
    const modifierAlt: number;
}
export declare namespace _RawKeyEventDataWindowsFactory {
    const modifierLeftAlt: number;
}
export declare namespace _RawKeyEventDataWindowsFactory {
    const modifierRightAlt: number;
}
export declare namespace _RawKeyEventDataWindowsFactory {
    const modifierLeftMeta: number;
}
export declare namespace _RawKeyEventDataWindowsFactory {
    const modifierRightMeta: number;
}
export declare namespace _RawKeyEventDataWindowsFactory {
    const modifierCaps: number;
}
export declare namespace _RawKeyEventDataWindowsFactory {
    const modifierNumLock: number;
}
export declare namespace _RawKeyEventDataWindowsFactory {
    const modifierScrollLock: number;
}
export declare const RawKeyEventDataWindows: typeof _RawKeyEventDataWindowsBinding & _FlaxInstanceType<RawKeyEventDataWindows> & _FlaxDartType<RawKeyEventDataWindows, readonly ["class", "flax.core/sdk_services#type:RawKeyEventDataWindows", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isControlPressed" | "isShiftPressed" | "isAltPressed" | "isMetaPressed" | "modifiersPressed" | "physicalKey" | "logicalKey" | "keyLabel" | "keyCode" | "scanCode" | "characterCodePoint" | "modifiers" | "isModifierPressed" | "getModifierSide" | "shouldDispatchEvent" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/services/raw_keyboard_windows.dart::RawKeyEventDataWindows" | "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

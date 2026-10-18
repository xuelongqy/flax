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
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface RawKeyEventDataMacOs extends Omit<upstream0.RawKeyEventData, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.RawKeyEventData>, Readonly<{
    "__flaxBound:package:flutter/src/services/raw_keyboard_macos.dart::RawKeyEventDataMacOs": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __RawKeyEventDataMacOs: unique symbol;
    readonly [_flaxDartTypeValue]: RawKeyEventDataMacOs;
}
export interface RawKeyEventDataMacOs {
    readonly [_flaxDartTypeValue]: RawKeyEventDataMacOs;
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
    get specifiedLogicalKey(): number | null;
    get keyLabel(): string;
    get physicalKey(): upstream4.PhysicalKeyboardKey;
    get logicalKey(): upstream5.LogicalKeyboardKey;
    get isControlPressed(): boolean;
    get isShiftPressed(): boolean;
    get isAltPressed(): boolean;
    get isMetaPressed(): boolean;
    get modifiersPressed(): DartMap<upstream3.ModifierKey, upstream2.KeyboardSide>;
}
export declare abstract class RawKeyEventDataMacOs extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RawKeyEventDataMacOs>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RawKeyEventDataMacOs;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:RawKeyEventDataMacOs", readonly [], false];
    constructor(options?: {
        characters?: string | undefined;
        charactersIgnoringModifiers?: string | undefined;
        keyCode?: number | undefined;
        modifiers?: number | undefined;
        specifiedLogicalKey?: number | null | undefined;
    });
}
export declare namespace RawKeyEventDataMacOs {
    function implement(args: [options?: {
        characters?: string | undefined;
        charactersIgnoringModifiers?: string | undefined;
        keyCode?: number | undefined;
        modifiers?: number | undefined;
        specifiedLogicalKey?: number | null | undefined;
    }], implementation: {}): RawKeyEventDataMacOs;
}
export declare namespace RawKeyEventDataMacOs {
    const modifierCapsLock: number;
}
export declare namespace RawKeyEventDataMacOs {
    const modifierShift: number;
}
export declare namespace RawKeyEventDataMacOs {
    const modifierLeftShift: number;
}
export declare namespace RawKeyEventDataMacOs {
    const modifierRightShift: number;
}
export declare namespace RawKeyEventDataMacOs {
    const modifierControl: number;
}
export declare namespace RawKeyEventDataMacOs {
    const modifierLeftControl: number;
}
export declare namespace RawKeyEventDataMacOs {
    const modifierRightControl: number;
}
export declare namespace RawKeyEventDataMacOs {
    const modifierOption: number;
}
export declare namespace RawKeyEventDataMacOs {
    const modifierLeftOption: number;
}
export declare namespace RawKeyEventDataMacOs {
    const modifierRightOption: number;
}
export declare namespace RawKeyEventDataMacOs {
    const modifierCommand: number;
}
export declare namespace RawKeyEventDataMacOs {
    const modifierLeftCommand: number;
}
export declare namespace RawKeyEventDataMacOs {
    const modifierRightCommand: number;
}
export declare namespace RawKeyEventDataMacOs {
    const modifierNumericPad: number;
}
export declare namespace RawKeyEventDataMacOs {
    const modifierHelp: number;
}
export declare namespace RawKeyEventDataMacOs {
    const modifierFunction: number;
}
export declare namespace RawKeyEventDataMacOs {
    const deviceIndependentMask: number;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isControlPressed" | "isShiftPressed" | "isAltPressed" | "isMetaPressed" | "modifiersPressed" | "physicalKey" | "logicalKey" | "keyLabel" | "characters" | "charactersIgnoringModifiers" | "keyCode" | "modifiers" | "specifiedLogicalKey" | "isModifierPressed" | "getModifierSide" | "shouldDispatchEvent" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/services/raw_keyboard_macos.dart::RawKeyEventDataMacOs" | "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

import { type FlaxInstanceType as _FlaxInstanceType, type DartMap } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_RawKeyEventData';
import '@flax/flutter/services/_bindings/sdk_services_RawKeyEventData';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_KeyHelper';
import '@flax/flutter/services/_bindings/sdk_services_KeyHelper';
import type * as upstream3 from '@flax/flutter/services/_bindings/sdk_services_KeyboardSide';
import '@flax/flutter/services/_bindings/sdk_services_KeyboardSide';
import type * as upstream4 from '@flax/flutter/services/_bindings/sdk_services_ModifierKey';
import '@flax/flutter/services/_bindings/sdk_services_ModifierKey';
import type * as upstream5 from '@flax/flutter/services/_bindings/flutter_PhysicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_PhysicalKeyboardKey';
import type * as upstream6 from '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RawKeyEventDataLinux extends Omit<upstream0.RawKeyEventData, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.RawKeyEventData>, Readonly<{
    "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::RawKeyEventDataLinux": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __RawKeyEventDataLinux: unique symbol;
    readonly [_flaxDartTypeValue]: RawKeyEventDataLinux;
    readonly isControlPressed: boolean;
    readonly isShiftPressed: boolean;
    readonly isAltPressed: boolean;
    readonly isMetaPressed: boolean;
    readonly modifiersPressed: DartMap<upstream4.ModifierKey, upstream3.KeyboardSide>;
    readonly physicalKey: upstream5.PhysicalKeyboardKey;
    readonly logicalKey: upstream6.LogicalKeyboardKey;
    readonly keyLabel: string;
    readonly keyHelper: upstream2.KeyHelper;
    readonly unicodeScalarValues: number;
    readonly scanCode: number;
    readonly keyCode: number;
    readonly modifiers: number;
    readonly isDown: boolean;
    readonly specifiedLogicalKey: number | null;
    isModifierPressed(key: upstream4.ModifierKey, options?: {
        side?: upstream3.KeyboardSide | undefined;
    }): boolean;
    getModifierSide(key: upstream4.ModifierKey): upstream3.KeyboardSide;
    shouldDispatchEvent(): boolean;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream8.DiagnosticsTreeStyle | null | undefined;
    }): upstream7.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toString(options?: {
        minLevel?: upstream10.DiagnosticLevel | undefined;
    }): string;
}
export declare function _RawKeyEventDataLinuxFactory(options: {
    keyHelper: Readonly<{
        "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::KeyHelper": readonly [];
    }>;
    unicodeScalarValues?: number | undefined;
    scanCode?: number | undefined;
    keyCode?: number | undefined;
    modifiers?: number | undefined;
    isDown: boolean;
    specifiedLogicalKey?: number | null | undefined;
}): RawKeyEventDataLinux;
export interface _RawKeyEventDataLinuxNative extends RawKeyEventDataLinux {
    readonly [_flaxDartTypeValue]: _RawKeyEventDataLinuxNative;
    isModifierPressed(key: upstream4.ModifierKey, options?: {
        side?: upstream3.KeyboardSide | undefined;
    }): boolean;
    getModifierSide(key: upstream4.ModifierKey): upstream3.KeyboardSide;
    shouldDispatchEvent(): boolean;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream8.DiagnosticsTreeStyle | null | undefined;
    }): upstream7.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toString(options?: {
        minLevel?: upstream10.DiagnosticLevel | undefined;
    }): string;
    get keyHelper(): upstream2.KeyHelper;
    get unicodeScalarValues(): number;
    get scanCode(): number;
    get keyCode(): number;
    get modifiers(): number;
    get isDown(): boolean;
    get specifiedLogicalKey(): number | null;
    get keyLabel(): string;
    get physicalKey(): upstream5.PhysicalKeyboardKey;
    get logicalKey(): upstream6.LogicalKeyboardKey;
    get isControlPressed(): boolean;
    get isShiftPressed(): boolean;
    get isAltPressed(): boolean;
    get isMetaPressed(): boolean;
    get modifiersPressed(): DartMap<upstream4.ModifierKey, upstream3.KeyboardSide>;
}
export declare abstract class _RawKeyEventDataLinuxNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RawKeyEventDataLinux>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RawKeyEventDataLinux;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:RawKeyEventDataLinux", readonly [], false];
    constructor(options: {
        keyHelper: Readonly<{
            "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::KeyHelper": readonly [];
        }>;
        unicodeScalarValues?: number | undefined;
        scanCode?: number | undefined;
        keyCode?: number | undefined;
        modifiers?: number | undefined;
        isDown: boolean;
        specifiedLogicalKey?: number | null | undefined;
    });
}
export declare namespace _RawKeyEventDataLinuxFactory {
    function implement(args: [options: {
        keyHelper: Readonly<{
            "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::KeyHelper": readonly [];
        }>;
        unicodeScalarValues?: number | undefined;
        scanCode?: number | undefined;
        keyCode?: number | undefined;
        modifiers?: number | undefined;
        isDown: boolean;
        specifiedLogicalKey?: number | null | undefined;
    }], implementation: {}): RawKeyEventDataLinux;
}
declare const _RawKeyEventDataLinuxBinding: typeof _RawKeyEventDataLinuxFactory & (new (options: {
    keyHelper: Readonly<{
        "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::KeyHelper": readonly [];
    }>;
    unicodeScalarValues?: number | undefined;
    scanCode?: number | undefined;
    keyCode?: number | undefined;
    modifiers?: number | undefined;
    isDown: boolean;
    specifiedLogicalKey?: number | null | undefined;
}) => _RawKeyEventDataLinuxNative);
export declare const RawKeyEventDataLinux: typeof _RawKeyEventDataLinuxBinding & _FlaxInstanceType<RawKeyEventDataLinux> & _FlaxDartType<RawKeyEventDataLinux, readonly ["class", "flax.core/sdk_services#type:RawKeyEventDataLinux", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isControlPressed" | "isShiftPressed" | "isAltPressed" | "isMetaPressed" | "modifiersPressed" | "physicalKey" | "logicalKey" | "keyLabel" | "keyHelper" | "unicodeScalarValues" | "scanCode" | "keyCode" | "modifiers" | "isDown" | "specifiedLogicalKey" | "isModifierPressed" | "getModifierSide" | "shouldDispatchEvent" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/services/raw_keyboard_linux.dart::RawKeyEventDataLinux" | "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

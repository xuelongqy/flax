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
export interface RawKeyEventDataAndroid extends Omit<upstream0.RawKeyEventData, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.RawKeyEventData>, Readonly<{
    "__flaxBound:package:flutter/src/services/raw_keyboard_android.dart::RawKeyEventDataAndroid": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __RawKeyEventDataAndroid: unique symbol;
    readonly [_flaxDartTypeValue]: RawKeyEventDataAndroid;
}
export interface RawKeyEventDataAndroid {
    readonly [_flaxDartTypeValue]: RawKeyEventDataAndroid;
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
    get flags(): number;
    get codePoint(): number;
    get plainCodePoint(): number;
    get keyCode(): number;
    get scanCode(): number;
    get metaState(): number;
    get eventSource(): number;
    get vendorId(): number;
    get productId(): number;
    get deviceId(): number;
    get repeatCount(): number;
    get keyLabel(): string;
    get physicalKey(): upstream4.PhysicalKeyboardKey;
    get logicalKey(): upstream5.LogicalKeyboardKey;
    get isControlPressed(): boolean;
    get isShiftPressed(): boolean;
    get isAltPressed(): boolean;
    get isMetaPressed(): boolean;
    get modifiersPressed(): DartMap<upstream3.ModifierKey, upstream2.KeyboardSide>;
}
export declare abstract class RawKeyEventDataAndroid extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RawKeyEventDataAndroid>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RawKeyEventDataAndroid;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:RawKeyEventDataAndroid", readonly [], false];
    constructor(options?: {
        flags?: number | undefined;
        codePoint?: number | undefined;
        plainCodePoint?: number | undefined;
        keyCode?: number | undefined;
        scanCode?: number | undefined;
        metaState?: number | undefined;
        eventSource?: number | undefined;
        vendorId?: number | undefined;
        productId?: number | undefined;
        deviceId?: number | undefined;
        repeatCount?: number | undefined;
    });
}
export declare namespace RawKeyEventDataAndroid {
    function implement(args: [options?: {
        flags?: number | undefined;
        codePoint?: number | undefined;
        plainCodePoint?: number | undefined;
        keyCode?: number | undefined;
        scanCode?: number | undefined;
        metaState?: number | undefined;
        eventSource?: number | undefined;
        vendorId?: number | undefined;
        productId?: number | undefined;
        deviceId?: number | undefined;
        repeatCount?: number | undefined;
    }], implementation: {}): RawKeyEventDataAndroid;
}
export declare namespace RawKeyEventDataAndroid {
    const modifierNone: number;
}
export declare namespace RawKeyEventDataAndroid {
    const modifierAlt: number;
}
export declare namespace RawKeyEventDataAndroid {
    const modifierLeftAlt: number;
}
export declare namespace RawKeyEventDataAndroid {
    const modifierRightAlt: number;
}
export declare namespace RawKeyEventDataAndroid {
    const modifierShift: number;
}
export declare namespace RawKeyEventDataAndroid {
    const modifierLeftShift: number;
}
export declare namespace RawKeyEventDataAndroid {
    const modifierRightShift: number;
}
export declare namespace RawKeyEventDataAndroid {
    const modifierSym: number;
}
export declare namespace RawKeyEventDataAndroid {
    const modifierFunction: number;
}
export declare namespace RawKeyEventDataAndroid {
    const modifierControl: number;
}
export declare namespace RawKeyEventDataAndroid {
    const modifierLeftControl: number;
}
export declare namespace RawKeyEventDataAndroid {
    const modifierRightControl: number;
}
export declare namespace RawKeyEventDataAndroid {
    const modifierMeta: number;
}
export declare namespace RawKeyEventDataAndroid {
    const modifierLeftMeta: number;
}
export declare namespace RawKeyEventDataAndroid {
    const modifierRightMeta: number;
}
export declare namespace RawKeyEventDataAndroid {
    const modifierCapsLock: number;
}
export declare namespace RawKeyEventDataAndroid {
    const modifierNumLock: number;
}
export declare namespace RawKeyEventDataAndroid {
    const modifierScrollLock: number;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isControlPressed" | "isShiftPressed" | "isAltPressed" | "isMetaPressed" | "modifiersPressed" | "physicalKey" | "logicalKey" | "keyLabel" | "flags" | "codePoint" | "plainCodePoint" | "keyCode" | "scanCode" | "metaState" | "eventSource" | "vendorId" | "productId" | "deviceId" | "repeatCount" | "isModifierPressed" | "getModifierSide" | "shouldDispatchEvent" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/services/raw_keyboard_android.dart::RawKeyEventDataAndroid" | "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

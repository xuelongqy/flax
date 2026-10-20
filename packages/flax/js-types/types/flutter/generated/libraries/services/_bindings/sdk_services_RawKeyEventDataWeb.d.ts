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
export interface RawKeyEventDataWeb extends Omit<upstream0.RawKeyEventData, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.RawKeyEventData>, Readonly<{
    "__flaxBound:package:flutter/src/services/raw_keyboard_web.dart::RawKeyEventDataWeb": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __RawKeyEventDataWeb: unique symbol;
    readonly [_flaxDartTypeValue]: RawKeyEventDataWeb;
    readonly isControlPressed: boolean;
    readonly isShiftPressed: boolean;
    readonly isAltPressed: boolean;
    readonly isMetaPressed: boolean;
    readonly modifiersPressed: DartMap<upstream3.ModifierKey, upstream2.KeyboardSide>;
    readonly physicalKey: upstream4.PhysicalKeyboardKey;
    readonly logicalKey: upstream5.LogicalKeyboardKey;
    readonly keyLabel: string;
    readonly code: string;
    readonly key: string;
    readonly location: number;
    readonly metaState: number;
    readonly keyCode: number;
    isModifierPressed(key: upstream3.ModifierKey, options?: {
        side?: upstream2.KeyboardSide | undefined;
    }): boolean;
    getModifierSide(key: upstream3.ModifierKey): upstream2.KeyboardSide;
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
export declare function _RawKeyEventDataWebFactory(options: {
    code: string;
    key: string;
    location?: number | undefined;
    metaState?: number | undefined;
    keyCode?: number | undefined;
}): RawKeyEventDataWeb;
export interface _RawKeyEventDataWebNative extends RawKeyEventDataWeb {
    readonly [_flaxDartTypeValue]: _RawKeyEventDataWebNative;
    isModifierPressed(key: upstream3.ModifierKey, options?: {
        side?: upstream2.KeyboardSide | undefined;
    }): boolean;
    getModifierSide(key: upstream3.ModifierKey): upstream2.KeyboardSide;
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
    get code(): string;
    get key(): string;
    get location(): number;
    get metaState(): number;
    get keyCode(): number;
    get keyLabel(): string;
    get physicalKey(): upstream4.PhysicalKeyboardKey;
    get logicalKey(): upstream5.LogicalKeyboardKey;
    get isControlPressed(): boolean;
    get isShiftPressed(): boolean;
    get isAltPressed(): boolean;
    get isMetaPressed(): boolean;
    get modifiersPressed(): DartMap<upstream3.ModifierKey, upstream2.KeyboardSide>;
}
export declare abstract class _RawKeyEventDataWebNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RawKeyEventDataWeb>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RawKeyEventDataWeb;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:RawKeyEventDataWeb", readonly [], false];
    constructor(options: {
        code: string;
        key: string;
        location?: number | undefined;
        metaState?: number | undefined;
        keyCode?: number | undefined;
    });
}
export declare namespace _RawKeyEventDataWebFactory {
    function implement(args: [options: {
        code: string;
        key: string;
        location?: number | undefined;
        metaState?: number | undefined;
        keyCode?: number | undefined;
    }], implementation: {}): RawKeyEventDataWeb;
}
declare const _RawKeyEventDataWebBinding: typeof _RawKeyEventDataWebFactory & (new (options: {
    code: string;
    key: string;
    location?: number | undefined;
    metaState?: number | undefined;
    keyCode?: number | undefined;
}) => _RawKeyEventDataWebNative);
export declare namespace _RawKeyEventDataWebFactory {
    const modifierNone: number;
}
export declare namespace _RawKeyEventDataWebFactory {
    const modifierShift: number;
}
export declare namespace _RawKeyEventDataWebFactory {
    const modifierAlt: number;
}
export declare namespace _RawKeyEventDataWebFactory {
    const modifierControl: number;
}
export declare namespace _RawKeyEventDataWebFactory {
    const modifierMeta: number;
}
export declare namespace _RawKeyEventDataWebFactory {
    const modifierNumLock: number;
}
export declare namespace _RawKeyEventDataWebFactory {
    const modifierCapsLock: number;
}
export declare namespace _RawKeyEventDataWebFactory {
    const modifierScrollLock: number;
}
export declare const RawKeyEventDataWeb: typeof _RawKeyEventDataWebBinding & _FlaxInstanceType<RawKeyEventDataWeb> & _FlaxDartType<RawKeyEventDataWeb, readonly ["class", "flax.core/sdk_services#type:RawKeyEventDataWeb", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isControlPressed" | "isShiftPressed" | "isAltPressed" | "isMetaPressed" | "modifiersPressed" | "physicalKey" | "logicalKey" | "keyLabel" | "code" | "key" | "location" | "metaState" | "keyCode" | "isModifierPressed" | "getModifierSide" | "shouldDispatchEvent" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/services/raw_keyboard_web.dart::RawKeyEventDataWeb" | "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

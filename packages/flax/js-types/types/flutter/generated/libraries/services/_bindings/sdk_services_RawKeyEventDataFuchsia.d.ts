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
export interface RawKeyEventDataFuchsia extends Omit<upstream0.RawKeyEventData, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.RawKeyEventData>, Readonly<{
    "__flaxBound:package:flutter/src/services/raw_keyboard_fuchsia.dart::RawKeyEventDataFuchsia": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __RawKeyEventDataFuchsia: unique symbol;
    readonly [_flaxDartTypeValue]: RawKeyEventDataFuchsia;
    readonly isControlPressed: boolean;
    readonly isShiftPressed: boolean;
    readonly isAltPressed: boolean;
    readonly isMetaPressed: boolean;
    readonly modifiersPressed: DartMap<upstream3.ModifierKey, upstream2.KeyboardSide>;
    readonly physicalKey: upstream4.PhysicalKeyboardKey;
    readonly logicalKey: upstream5.LogicalKeyboardKey;
    readonly keyLabel: string;
    readonly hidUsage: number;
    readonly codePoint: number;
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
export declare function _RawKeyEventDataFuchsiaFactory(options?: {
    hidUsage?: number | undefined;
    codePoint?: number | undefined;
    modifiers?: number | undefined;
}): RawKeyEventDataFuchsia;
export interface _RawKeyEventDataFuchsiaNative extends RawKeyEventDataFuchsia {
    readonly [_flaxDartTypeValue]: _RawKeyEventDataFuchsiaNative;
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
    get hidUsage(): number;
    get codePoint(): number;
    get modifiers(): number;
    get keyLabel(): string;
    get logicalKey(): upstream5.LogicalKeyboardKey;
    get physicalKey(): upstream4.PhysicalKeyboardKey;
    get isControlPressed(): boolean;
    get isShiftPressed(): boolean;
    get isAltPressed(): boolean;
    get isMetaPressed(): boolean;
    get modifiersPressed(): DartMap<upstream3.ModifierKey, upstream2.KeyboardSide>;
}
export declare abstract class _RawKeyEventDataFuchsiaNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RawKeyEventDataFuchsia>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RawKeyEventDataFuchsia;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:RawKeyEventDataFuchsia", readonly [], false];
    constructor(options?: {
        hidUsage?: number | undefined;
        codePoint?: number | undefined;
        modifiers?: number | undefined;
    });
}
export declare namespace _RawKeyEventDataFuchsiaFactory {
    function implement(args: [options?: {
        hidUsage?: number | undefined;
        codePoint?: number | undefined;
        modifiers?: number | undefined;
    }], implementation: {}): RawKeyEventDataFuchsia;
}
declare const _RawKeyEventDataFuchsiaBinding: typeof _RawKeyEventDataFuchsiaFactory & (new (options?: {
    hidUsage?: number | undefined;
    codePoint?: number | undefined;
    modifiers?: number | undefined;
}) => _RawKeyEventDataFuchsiaNative);
export declare namespace _RawKeyEventDataFuchsiaFactory {
    const modifierNone: number;
}
export declare namespace _RawKeyEventDataFuchsiaFactory {
    const modifierCapsLock: number;
}
export declare namespace _RawKeyEventDataFuchsiaFactory {
    const modifierLeftShift: number;
}
export declare namespace _RawKeyEventDataFuchsiaFactory {
    const modifierRightShift: number;
}
export declare namespace _RawKeyEventDataFuchsiaFactory {
    const modifierShift: number;
}
export declare namespace _RawKeyEventDataFuchsiaFactory {
    const modifierLeftControl: number;
}
export declare namespace _RawKeyEventDataFuchsiaFactory {
    const modifierRightControl: number;
}
export declare namespace _RawKeyEventDataFuchsiaFactory {
    const modifierControl: number;
}
export declare namespace _RawKeyEventDataFuchsiaFactory {
    const modifierLeftAlt: number;
}
export declare namespace _RawKeyEventDataFuchsiaFactory {
    const modifierRightAlt: number;
}
export declare namespace _RawKeyEventDataFuchsiaFactory {
    const modifierAlt: number;
}
export declare namespace _RawKeyEventDataFuchsiaFactory {
    const modifierLeftMeta: number;
}
export declare namespace _RawKeyEventDataFuchsiaFactory {
    const modifierRightMeta: number;
}
export declare namespace _RawKeyEventDataFuchsiaFactory {
    const modifierMeta: number;
}
export declare const RawKeyEventDataFuchsia: typeof _RawKeyEventDataFuchsiaBinding & _FlaxInstanceType<RawKeyEventDataFuchsia> & _FlaxDartType<RawKeyEventDataFuchsia, readonly ["class", "flax.core/sdk_services#type:RawKeyEventDataFuchsia", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isControlPressed" | "isShiftPressed" | "isAltPressed" | "isMetaPressed" | "modifiersPressed" | "physicalKey" | "logicalKey" | "keyLabel" | "hidUsage" | "codePoint" | "modifiers" | "isModifierPressed" | "getModifierSide" | "shouldDispatchEvent" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/services/raw_keyboard_fuchsia.dart::RawKeyEventDataFuchsia" | "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

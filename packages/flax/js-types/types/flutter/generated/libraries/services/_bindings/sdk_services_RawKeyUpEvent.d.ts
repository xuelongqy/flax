import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_RawKeyEvent';
import '@flax/flutter/services/_bindings/sdk_services_RawKeyEvent';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_RawKeyEventData';
import '@flax/flutter/services/_bindings/sdk_services_RawKeyEventData';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_PhysicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_PhysicalKeyboardKey';
import type * as upstream4 from '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RawKeyUpEvent extends Omit<upstream0.RawKeyEvent, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.RawKeyEvent>, Readonly<{
    "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyUpEvent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEvent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __RawKeyUpEvent: unique symbol;
    readonly [_flaxDartTypeValue]: RawKeyUpEvent;
    readonly isControlPressed: boolean;
    readonly isShiftPressed: boolean;
    readonly isAltPressed: boolean;
    readonly isMetaPressed: boolean;
    readonly physicalKey: upstream3.PhysicalKeyboardKey;
    readonly logicalKey: upstream4.LogicalKeyboardKey;
    readonly character: string | null;
    readonly repeat: boolean;
    readonly data: upstream2.RawKeyEventData;
    isKeyPressed(key: Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): boolean;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream7.DiagnosticsTreeStyle | null | undefined;
    }): upstream6.DiagnosticsNode;
    toString(options?: {
        minLevel?: upstream8.DiagnosticLevel | undefined;
    }): string;
}
export declare function _RawKeyUpEventFactory(options: {
    data: Readonly<{
        "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>;
    character?: string | null | undefined;
}): RawKeyUpEvent;
export interface _RawKeyUpEventNative extends RawKeyUpEvent {
    readonly [_flaxDartTypeValue]: _RawKeyUpEventNative;
    isKeyPressed(key: Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): boolean;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream7.DiagnosticsTreeStyle | null | undefined;
    }): upstream6.DiagnosticsNode;
    toString(options?: {
        minLevel?: upstream8.DiagnosticLevel | undefined;
    }): string;
    get isControlPressed(): boolean;
    get isShiftPressed(): boolean;
    get isAltPressed(): boolean;
    get isMetaPressed(): boolean;
    get physicalKey(): upstream3.PhysicalKeyboardKey;
    get logicalKey(): upstream4.LogicalKeyboardKey;
    get character(): string | null;
    get repeat(): boolean;
    get data(): upstream2.RawKeyEventData;
}
export declare abstract class _RawKeyUpEventNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RawKeyUpEvent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RawKeyUpEvent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:RawKeyUpEvent", readonly [], false];
    constructor(options: {
        data: Readonly<{
            "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        character?: string | null | undefined;
    });
}
export declare namespace _RawKeyUpEventFactory {
    function implement(args: [options: {
        data: Readonly<{
            "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        character?: string | null | undefined;
    }], implementation: {}): RawKeyUpEvent;
}
declare const _RawKeyUpEventBinding: typeof _RawKeyUpEventFactory & (new (options: {
    data: Readonly<{
        "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>;
    character?: string | null | undefined;
}) => _RawKeyUpEventNative);
export declare const RawKeyUpEvent: typeof _RawKeyUpEventBinding & _FlaxInstanceType<RawKeyUpEvent> & _FlaxDartType<RawKeyUpEvent, readonly ["class", "flax.core/sdk_services#type:RawKeyUpEvent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isControlPressed" | "isShiftPressed" | "isAltPressed" | "isMetaPressed" | "physicalKey" | "logicalKey" | "character" | "repeat" | "data" | "isKeyPressed" | "debugFillProperties" | "toStringShort" | "toDiagnosticsNode" | "toString" | "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyUpEvent" | "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEvent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

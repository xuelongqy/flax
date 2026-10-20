import { type FlaxInstanceType as _FlaxInstanceType, type DartMapInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_RawKeyEventData';
import '@flax/flutter/services/_bindings/sdk_services_RawKeyEventData';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_PhysicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_PhysicalKeyboardKey';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RawKeyEvent extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEvent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __RawKeyEvent: unique symbol;
    readonly [_flaxDartTypeValue]: RawKeyEvent;
    readonly isControlPressed: boolean;
    readonly isShiftPressed: boolean;
    readonly isAltPressed: boolean;
    readonly isMetaPressed: boolean;
    readonly physicalKey: upstream2.PhysicalKeyboardKey;
    readonly logicalKey: upstream3.LogicalKeyboardKey;
    readonly character: string | null;
    readonly repeat: boolean;
    readonly data: upstream1.RawKeyEventData;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream4.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream6.DiagnosticsTreeStyle | null | undefined;
    }): upstream5.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    isKeyPressed(key: Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): boolean;
}
export declare namespace _RawKeyEventFactory {
    function fromMessage(message: DartMapInput<string, unknown | null, string, unknown | null>): RawKeyEvent;
}
export interface _RawKeyEventNative extends RawKeyEvent {
    readonly [_flaxDartTypeValue]: _RawKeyEventNative;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream4.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream6.DiagnosticsTreeStyle | null | undefined;
    }): upstream5.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    isKeyPressed(key: Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): boolean;
    get isControlPressed(): boolean;
    get isShiftPressed(): boolean;
    get isAltPressed(): boolean;
    get isMetaPressed(): boolean;
    get physicalKey(): upstream2.PhysicalKeyboardKey;
    get logicalKey(): upstream3.LogicalKeyboardKey;
    get character(): string | null;
    get repeat(): boolean;
    get data(): upstream1.RawKeyEventData;
}
export declare abstract class _RawKeyEventNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RawKeyEvent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RawKeyEvent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:RawKeyEvent", readonly [], false];
    constructor(options: {
        data: Readonly<{
            "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        character?: string | null | undefined;
        repeat?: boolean | undefined;
    });
}
export declare namespace _RawKeyEventFactory {
    function implement(args: [options: {
        data: Readonly<{
            "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        character?: string | null | undefined;
        repeat?: boolean | undefined;
    }], implementation: {}): RawKeyEvent;
}
declare const _RawKeyEventBinding: typeof _RawKeyEventFactory & (abstract new (options: {
    data: Readonly<{
        "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEventData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>;
    character?: string | null | undefined;
    repeat?: boolean | undefined;
}) => _RawKeyEventNative);
export declare const RawKeyEvent: typeof _RawKeyEventBinding & _FlaxInstanceType<RawKeyEvent> & _FlaxDartType<RawKeyEvent, readonly ["class", "flax.core/sdk_services#type:RawKeyEvent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isControlPressed" | "isShiftPressed" | "isAltPressed" | "isMetaPressed" | "physicalKey" | "logicalKey" | "character" | "repeat" | "data" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "isKeyPressed" | "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEvent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

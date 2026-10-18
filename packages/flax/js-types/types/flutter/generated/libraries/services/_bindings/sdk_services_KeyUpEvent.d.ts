import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_KeyEvent';
import '@flax/flutter/services/_bindings/flutter_KeyEvent';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_PhysicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_PhysicalKeyboardKey';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import type * as upstream4 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_KeyEventDeviceType';
import '@flax/dart/ui/_bindings/sdk_dart_ui_KeyEventDeviceType';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface KeyUpEvent extends Omit<upstream0.KeyEvent, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.KeyEvent>, Readonly<{
    "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyUpEvent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyEvent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __KeyUpEvent: unique symbol;
    readonly [_flaxDartTypeValue]: KeyUpEvent;
}
export interface KeyUpEvent {
    readonly [_flaxDartTypeValue]: KeyUpEvent;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream8.DiagnosticsTreeStyle | null | undefined;
    }): upstream7.DiagnosticsNode;
    toString(options?: {
        minLevel?: upstream9.DiagnosticLevel | undefined;
    }): string;
    get physicalKey(): upstream2.PhysicalKeyboardKey;
    get logicalKey(): upstream3.LogicalKeyboardKey;
    get character(): string | null;
    get timeStamp(): upstream4.Duration;
    get deviceType(): upstream5.KeyEventDeviceType;
    get synthesized(): boolean;
}
export declare abstract class KeyUpEvent extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<KeyUpEvent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: KeyUpEvent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:KeyUpEvent", readonly [], false];
    constructor(options: {
        physicalKey: Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::PhysicalKeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        logicalKey: Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        timeStamp: Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream4.Duration];
        }>;
        synthesized?: boolean | undefined;
        deviceType?: upstream5.KeyEventDeviceType | undefined;
    });
}
export declare namespace KeyUpEvent {
    function implement(args: [options: {
        physicalKey: Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::PhysicalKeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        logicalKey: Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        timeStamp: Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream4.Duration];
        }>;
        synthesized?: boolean | undefined;
        deviceType?: upstream5.KeyEventDeviceType | undefined;
    }], implementation: {}): KeyUpEvent;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "physicalKey" | "logicalKey" | "character" | "timeStamp" | "deviceType" | "synthesized" | "debugFillProperties" | "toStringShort" | "toDiagnosticsNode" | "toString" | "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyUpEvent" | "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyEvent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

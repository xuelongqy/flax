import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutActivator';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutActivator';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_MenuSerializableShortcut';
import '@flax/flutter/widgets/_bindings/sdk_widgets_MenuSerializableShortcut';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_LockState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LockState';
import '@flax/flutter/services/_bindings/flutter_KeyEvent';
import '@flax/flutter/services/_bindings/sdk_services_HardwareKeyboard';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutSerialization';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutSerialization';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SingleActivator extends Omit<upstream0.ShortcutActivator, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.ShortcutActivator>, Omit<upstream2.MenuSerializableShortcut, _flaxOwnMembers0 | keyof upstream0.ShortcutActivator | keyof upstream1.Diagnosticable>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/shortcuts.dart::SingleActivator": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::MenuSerializableShortcut": readonly [];
}> {
    readonly __SingleActivator: unique symbol;
    readonly [_flaxDartTypeValue]: SingleActivator;
    readonly triggers: DartIterable<upstream3.LogicalKeyboardKey>;
    readonly trigger: upstream3.LogicalKeyboardKey;
    readonly control: boolean;
    readonly shift: boolean;
    readonly alt: boolean;
    readonly meta: boolean;
    readonly numLock: upstream4.LockState;
    readonly includeRepeats: boolean;
    accepts(event: Readonly<{
        "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, state: Readonly<{
        "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::HardwareKeyboard": readonly [];
    }>): boolean;
    debugDescribeKeys(): string;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream7.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream9.DiagnosticsTreeStyle | null | undefined;
    }): upstream8.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    serializeForMenu(): upstream11.ShortcutSerialization;
}
export declare function _SingleActivatorFactory(trigger: Readonly<{
    "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, options?: {
    control?: boolean | undefined;
    shift?: boolean | undefined;
    alt?: boolean | undefined;
    meta?: boolean | undefined;
    numLock?: upstream4.LockState | undefined;
    includeRepeats?: boolean | undefined;
}): SingleActivator;
export interface _SingleActivatorNative extends SingleActivator {
    readonly [_flaxDartTypeValue]: _SingleActivatorNative;
    accepts(event: Readonly<{
        "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, state: Readonly<{
        "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::HardwareKeyboard": readonly [];
    }>): boolean;
    debugDescribeKeys(): string;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream7.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream9.DiagnosticsTreeStyle | null | undefined;
    }): upstream8.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    serializeForMenu(): upstream11.ShortcutSerialization;
    get trigger(): upstream3.LogicalKeyboardKey;
    get control(): boolean;
    get shift(): boolean;
    get alt(): boolean;
    get meta(): boolean;
    get numLock(): upstream4.LockState;
    get includeRepeats(): boolean;
    get triggers(): DartIterable<upstream3.LogicalKeyboardKey>;
}
export declare abstract class _SingleActivatorNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SingleActivator>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SingleActivator;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:SingleActivator", readonly [], false];
    constructor(trigger: Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, options?: {
        control?: boolean | undefined;
        shift?: boolean | undefined;
        alt?: boolean | undefined;
        meta?: boolean | undefined;
        numLock?: upstream4.LockState | undefined;
        includeRepeats?: boolean | undefined;
    });
}
export declare namespace _SingleActivatorFactory {
    function implement(args: [trigger: Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, options?: {
        control?: boolean | undefined;
        shift?: boolean | undefined;
        alt?: boolean | undefined;
        meta?: boolean | undefined;
        numLock?: upstream4.LockState | undefined;
        includeRepeats?: boolean | undefined;
    }], implementation: {}): SingleActivator;
}
declare const _SingleActivatorBinding: typeof _SingleActivatorFactory & (new (trigger: Readonly<{
    "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, options?: {
    control?: boolean | undefined;
    shift?: boolean | undefined;
    alt?: boolean | undefined;
    meta?: boolean | undefined;
    numLock?: upstream4.LockState | undefined;
    includeRepeats?: boolean | undefined;
}) => _SingleActivatorNative);
export declare const SingleActivator: typeof _SingleActivatorBinding & _FlaxInstanceType<SingleActivator> & _FlaxDartType<SingleActivator, readonly ["class", "flax.core/sdk_widgets#type:SingleActivator", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "triggers" | "trigger" | "control" | "shift" | "alt" | "meta" | "numLock" | "includeRepeats" | "accepts" | "debugDescribeKeys" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "serializeForMenu" | "__flaxBound:package:flutter/src/widgets/shortcuts.dart::SingleActivator" | "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::MenuSerializableShortcut";
export {};

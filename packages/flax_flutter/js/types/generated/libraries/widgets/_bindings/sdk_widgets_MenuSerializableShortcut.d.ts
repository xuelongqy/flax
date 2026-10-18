import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutActivator';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutActivator';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_KeyEvent';
import '@flax/flutter/services/_bindings/sdk_services_HardwareKeyboard';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutSerialization';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutSerialization';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MenuSerializableShortcut extends Omit<upstream0.ShortcutActivator, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::MenuSerializableShortcut": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [];
}> {
    readonly __MenuSerializableShortcut: unique symbol;
    readonly [_flaxDartTypeValue]: MenuSerializableShortcut;
    readonly triggers: DartIterable<upstream1.LogicalKeyboardKey> | null;
    accepts(event: Readonly<{
        "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, state: Readonly<{
        "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::HardwareKeyboard": readonly [];
    }>): boolean;
    debugDescribeKeys(): string;
    serializeForMenu(): upstream4.ShortcutSerialization;
}
export declare const MenuSerializableShortcut: object & _FlaxInstanceType<MenuSerializableShortcut> & _FlaxDartType<MenuSerializableShortcut, readonly ["class", "flax.core/sdk_widgets#type:MenuSerializableShortcut", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "triggers" | "accepts" | "debugDescribeKeys" | "serializeForMenu" | "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::MenuSerializableShortcut" | "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator";
export {};

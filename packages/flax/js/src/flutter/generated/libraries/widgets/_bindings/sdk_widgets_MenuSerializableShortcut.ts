// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutActivator';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutActivator';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_KeyEvent';
import '@flax/flutter/services/_bindings/flutter_KeyEvent';
import type * as upstream3 from '@flax/flutter/services/_bindings/sdk_services_HardwareKeyboard';
import '@flax/flutter/services/_bindings/sdk_services_HardwareKeyboard';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutSerialization';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutSerialization';
const _flaxMemberParameters0 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MenuSerializableShortcut extends Omit<upstream0.ShortcutActivator, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::MenuSerializableShortcut": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [] }> { readonly __MenuSerializableShortcut: unique symbol;
readonly [_flaxDartTypeValue]: MenuSerializableShortcut;

readonly triggers: DartIterable<upstream1.LogicalKeyboardKey> | null;
accepts(event: Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, state: Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::HardwareKeyboard": readonly [] }>): boolean;
debugDescribeKeys(): string;
serializeForMenu(): upstream4.ShortcutSerialization;
}
defineObject("flax.core/sdk_widgets#type:MenuSerializableShortcut", ["triggers"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:MenuSerializableShortcut", "object", {"serializeForMenu":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_widgets#type:ShortcutActivator");
export const MenuSerializableShortcut: object & _FlaxInstanceType<MenuSerializableShortcut> & _FlaxDartType<MenuSerializableShortcut, readonly ["class", "flax.core/sdk_widgets#type:MenuSerializableShortcut", readonly [], false]> = _flaxBindInstanceType<MenuSerializableShortcut, object>({}, "flax.core/sdk_widgets#type:MenuSerializableShortcut", ["dart:core::Object","flax.core/sdk_widgets#type:ShortcutActivator"]) as object & _FlaxInstanceType<MenuSerializableShortcut> & _FlaxDartType<MenuSerializableShortcut, readonly ["class", "flax.core/sdk_widgets#type:MenuSerializableShortcut", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "triggers" | "accepts" | "debugDescribeKeys" | "serializeForMenu" | "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::MenuSerializableShortcut" | "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator";

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_KeySet';
import '@flax/flutter/widgets/_bindings/sdk_widgets_KeySet';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutActivator';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutActivator';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream4 from '@flax/flutter/services/_bindings/flutter_KeyEvent';
import '@flax/flutter/services/_bindings/flutter_KeyEvent';
import type * as upstream5 from '@flax/flutter/services/_bindings/sdk_services_HardwareKeyboard';
import '@flax/flutter/services/_bindings/sdk_services_HardwareKeyboard';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
const _flaxMemberParameters0 = [{"name":"event","required":true,"positional":true},{"name":"state","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"key1","required":true,"positional":true},{"name":"key2","positional":true},{"name":"key3","positional":true},{"name":"key4","positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"minLevel"}] as const;
const _flaxMemberParameters4 = [{"name":"name"},{"name":"style"}] as const;
const _flaxMemberParameters5 = [{"name":"properties","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface LogicalKeySet extends Omit<upstream0.KeySet<upstream1.LogicalKeyboardKey>, _flaxOwnMembers0>, Omit<upstream2.ShortcutActivator, _flaxOwnMembers0 | keyof upstream0.KeySet<upstream1.LogicalKeyboardKey>>, Omit<upstream3.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.KeySet<upstream1.LogicalKeyboardKey> | keyof upstream2.ShortcutActivator>, Readonly<{ "__flaxBound:package:flutter/src/widgets/shortcuts.dart::LogicalKeySet": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/shortcuts.dart::KeySet": readonly [upstream1.LogicalKeyboardKey] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __LogicalKeySet: unique symbol;
readonly [_flaxDartTypeValue]: LogicalKeySet;

}
defineObject("flax.core/sdk_widgets#type:LogicalKeySet", ["keys","triggers"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:LogicalKeySet", "object", {"accepts":_flaxMemberParameters0,"debugDescribeKeys":_flaxMemberParameters1}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
const _LogicalKeySetProxy = {type: "flax.core/sdk_widgets#type:LogicalKeySet", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"accepts":_flaxMemberParameters0,"debugDescribeKeys":_flaxMemberParameters1,"toStringShort":_flaxMemberParameters1,"toString":_flaxMemberParameters3,"toDiagnosticsNode":_flaxMemberParameters4,"debugFillProperties":_flaxMemberParameters5}, getters: ["triggers","keys"], setters: [], contextMembers: [], superMembers: ["get:triggers","get:keys","accepts","debugDescribeKeys","toStringShort","toString","toDiagnosticsNode","debugFillProperties"]} as const;
export interface LogicalKeySet {
readonly [_flaxDartTypeValue]: LogicalKeySet;

accepts(event: Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, state: Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::HardwareKeyboard": readonly [] }>): boolean;
debugDescribeKeys(): string;
toStringShort(): string;
toString(options?: {minLevel?: upstream6.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream8.DiagnosticsTreeStyle | null | undefined}): upstream7.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
get triggers(): DartIterable<upstream1.LogicalKeyboardKey>;
get keys(): DartSet<upstream1.LogicalKeyboardKey>;
}
export abstract class LogicalKeySet extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LogicalKeySet>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: LogicalKeySet;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:LogicalKeySet", readonly [], false];
constructor(key1: Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, key2?: Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, key3?: Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, key4?: Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null) { super(_LogicalKeySetProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(LogicalKeySet.prototype, _LogicalKeySetProxy);
export namespace LogicalKeySet { export function implement(args: [key1: Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, key2?: Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, key3?: Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, key4?: Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null], implementation: {}): LogicalKeySet {
return constructProxy(_LogicalKeySetProxy, args, implementation) as LogicalKeySet; } }
_flaxBindInstanceType<LogicalKeySet, typeof LogicalKeySet>(LogicalKeySet, "flax.core/sdk_widgets#type:LogicalKeySet", ["flax.core/sdk_widgets#type:KeySet","dart:core::Object","flax.core/sdk_widgets#type:ShortcutActivator","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "keys" | "triggers" | "accepts" | "debugDescribeKeys" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/widgets/shortcuts.dart::LogicalKeySet" | "__flaxBound:package:flutter/src/widgets/shortcuts.dart::KeySet" | "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

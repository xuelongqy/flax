// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
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
import type * as upstream5 from '@flax/flutter/services/_bindings/flutter_KeyEvent';
import '@flax/flutter/services/_bindings/flutter_KeyEvent';
import type * as upstream6 from '@flax/flutter/services/_bindings/sdk_services_HardwareKeyboard';
import '@flax/flutter/services/_bindings/sdk_services_HardwareKeyboard';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutSerialization';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutSerialization';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"minLevel","required":false,"positional":false}] as const;
const _flaxMemberParameters2 = [{"name":"name","required":false,"positional":false},{"name":"style","required":false,"positional":false}] as const;
const _flaxMemberParameters3 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"event","required":true,"positional":true},{"name":"state","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SingleActivator extends Omit<upstream0.ShortcutActivator, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.ShortcutActivator>, Omit<upstream2.MenuSerializableShortcut, _flaxOwnMembers0 | keyof upstream0.ShortcutActivator | keyof upstream1.Diagnosticable>, Readonly<{ "__flaxBound:package:flutter/src/widgets/shortcuts.dart::SingleActivator": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::MenuSerializableShortcut": readonly [] }> { readonly __SingleActivator: unique symbol;
readonly [_flaxDartTypeValue]: SingleActivator;

}
defineObject("flax.core/sdk_widgets#type:SingleActivator", ["triggers","trigger","control","shift","alt","meta","numLock","includeRepeats"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:SingleActivator", "object", {"toStringShort":_flaxMemberParameters0,"toString":_flaxMemberParameters1,"toDiagnosticsNode":_flaxMemberParameters2,"debugFillProperties":_flaxMemberParameters3}, {}), [], undefined, "flax.core/sdk_widgets#type:MenuSerializableShortcut");
const _SingleActivatorProxy = {type: "flax.core/sdk_widgets#type:SingleActivator", parameters: [{"name":"trigger","required":true,"positional":true},{"name":"control","required":false,"positional":false},{"name":"shift","required":false,"positional":false},{"name":"alt","required":false,"positional":false},{"name":"meta","required":false,"positional":false},{"name":"numLock","required":false,"positional":false},{"name":"includeRepeats","required":false,"positional":false}], constructors: {"":[{"name":"trigger","required":true,"positional":true},{"name":"control","required":false,"positional":false},{"name":"shift","required":false,"positional":false},{"name":"alt","required":false,"positional":false},{"name":"meta","required":false,"positional":false},{"name":"numLock","required":false,"positional":false},{"name":"includeRepeats","required":false,"positional":false}]}, methods: {"accepts":_flaxMemberParameters4,"debugDescribeKeys":_flaxMemberParameters0,"toStringShort":_flaxMemberParameters0,"toString":_flaxMemberParameters1,"toDiagnosticsNode":_flaxMemberParameters2,"debugFillProperties":_flaxMemberParameters3,"serializeForMenu":_flaxMemberParameters0}, getters: ["trigger","control","shift","alt","meta","numLock","includeRepeats","triggers"], setters: [], contextMembers: [], superMembers: ["get:trigger","get:control","get:shift","get:alt","get:meta","get:numLock","get:includeRepeats","get:triggers","accepts","debugDescribeKeys","toStringShort","toString","toDiagnosticsNode","debugFillProperties","serializeForMenu"]} as const;
export interface SingleActivator {
readonly [_flaxDartTypeValue]: SingleActivator;

accepts(event: Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, state: Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::HardwareKeyboard": readonly [] }>): boolean;
debugDescribeKeys(): string;
toStringShort(): string;
toString(options?: {minLevel?: upstream7.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream9.DiagnosticsTreeStyle | null | undefined}): upstream8.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
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
export abstract class SingleActivator extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SingleActivator>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SingleActivator;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:SingleActivator", readonly [], false];
constructor(trigger: Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, options?: {control?: boolean | undefined; shift?: boolean | undefined; alt?: boolean | undefined; meta?: boolean | undefined; numLock?: upstream4.LockState | undefined; includeRepeats?: boolean | undefined}) { super(_SingleActivatorProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(SingleActivator.prototype, _SingleActivatorProxy);
export namespace SingleActivator { export function implement(args: [trigger: Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, options?: {control?: boolean | undefined; shift?: boolean | undefined; alt?: boolean | undefined; meta?: boolean | undefined; numLock?: upstream4.LockState | undefined; includeRepeats?: boolean | undefined}], implementation: {}): SingleActivator {
return constructProxy(_SingleActivatorProxy, args, implementation) as SingleActivator; } }
_flaxBindInstanceType<SingleActivator, typeof SingleActivator>(SingleActivator, "flax.core/sdk_widgets#type:SingleActivator", ["dart:core::Object","flax.core/sdk_widgets#type:ShortcutActivator","flax.core/sdk_foundation#type:Diagnosticable","flax.core/sdk_widgets#type:MenuSerializableShortcut"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "triggers" | "trigger" | "control" | "shift" | "alt" | "meta" | "numLock" | "includeRepeats" | "accepts" | "debugDescribeKeys" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "serializeForMenu" | "__flaxBound:package:flutter/src/widgets/shortcuts.dart::SingleActivator" | "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::MenuSerializableShortcut";

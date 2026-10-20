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
import type * as upstream10 from '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutSerialization';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutSerialization';
import { _flaxMemberParameters2, _flaxMemberParameters9, _flaxMemberParameters8, _flaxMemberParameters5, _flaxMemberParameters54, _flaxMemberParameters55 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CharacterActivator extends Omit<upstream0.ShortcutActivator, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.ShortcutActivator>, Omit<upstream2.MenuSerializableShortcut, _flaxOwnMembers0 | keyof upstream0.ShortcutActivator | keyof upstream1.Diagnosticable>, Readonly<{ "__flaxBound:package:flutter/src/widgets/shortcuts.dart::CharacterActivator": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::MenuSerializableShortcut": readonly [] }> { readonly __CharacterActivator: unique symbol;
readonly [_flaxDartTypeValue]: CharacterActivator;

readonly triggers: DartIterable<upstream3.LogicalKeyboardKey> | null;
readonly alt: boolean;
readonly control: boolean;
readonly meta: boolean;
readonly includeRepeats: boolean;
readonly character: string;
accepts(event: Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, state: Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::HardwareKeyboard": readonly [] }>): boolean;
debugDescribeKeys(): string;
toStringShort(): string;
toString(options?: {minLevel?: upstream6.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream8.DiagnosticsTreeStyle | null | undefined}): upstream7.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
serializeForMenu(): upstream10.ShortcutSerialization;
}
defineObject("flax.core/sdk_widgets#type:CharacterActivator", ["triggers","alt","control","meta","includeRepeats","character"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:CharacterActivator", "object", {"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters9,"toDiagnosticsNode":_flaxMemberParameters8,"debugFillProperties":_flaxMemberParameters5}, {}), [], undefined, "flax.core/sdk_widgets#type:MenuSerializableShortcut");
export function _CharacterActivatorFactory(character: string, options: { alt?: boolean | undefined; control?: boolean | undefined; meta?: boolean | undefined; includeRepeats?: boolean | undefined } = {}): CharacterActivator {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:CharacterActivator", "", [{"name":"character","required":true,"positional":true},{"name":"alt"},{"name":"control"},{"name":"meta"},{"name":"includeRepeats"}], [character], options) as CharacterActivator;
}
const _CharacterActivatorProxy = {type: "flax.core/sdk_widgets#type:CharacterActivator", parameters: _flaxMemberParameters54, constructors: {"": _flaxMemberParameters54}, methods: {"accepts":_flaxMemberParameters55,"debugDescribeKeys":_flaxMemberParameters2,"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters9,"toDiagnosticsNode":_flaxMemberParameters8,"debugFillProperties":_flaxMemberParameters5,"serializeForMenu":_flaxMemberParameters2}, getters: ["alt","control","meta","includeRepeats","character","triggers"], setters: [], contextMembers: [], superMembers: ["get:alt","get:control","get:meta","get:includeRepeats","get:character","get:triggers","accepts","debugDescribeKeys","toStringShort","toString","toDiagnosticsNode","debugFillProperties","serializeForMenu"]} as const;
export interface _CharacterActivatorNative extends CharacterActivator {
readonly [_flaxDartTypeValue]: _CharacterActivatorNative;

accepts(event: Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, state: Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::HardwareKeyboard": readonly [] }>): boolean;
debugDescribeKeys(): string;
toStringShort(): string;
toString(options?: {minLevel?: upstream6.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream8.DiagnosticsTreeStyle | null | undefined}): upstream7.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
serializeForMenu(): upstream10.ShortcutSerialization;
get alt(): boolean;
get control(): boolean;
get meta(): boolean;
get includeRepeats(): boolean;
get character(): string;
get triggers(): DartIterable<upstream3.LogicalKeyboardKey> | null;
}
export abstract class _CharacterActivatorNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CharacterActivator>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CharacterActivator;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:CharacterActivator", readonly [], false];
constructor(character: string, options?: {alt?: boolean | undefined; control?: boolean | undefined; meta?: boolean | undefined; includeRepeats?: boolean | undefined}) { super(_CharacterActivatorProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_CharacterActivatorNative.prototype, _CharacterActivatorProxy);
export namespace _CharacterActivatorFactory { export function implement(args: [character: string, options?: {alt?: boolean | undefined; control?: boolean | undefined; meta?: boolean | undefined; includeRepeats?: boolean | undefined}], implementation: {}): CharacterActivator {
return constructProxy(_CharacterActivatorProxy, args, implementation) as CharacterActivator; } }
const _CharacterActivatorBinding = _flaxProxyFactory(_CharacterActivatorFactory, _CharacterActivatorNative) as unknown as typeof _CharacterActivatorFactory & (new(character: string, options?: {alt?: boolean | undefined; control?: boolean | undefined; meta?: boolean | undefined; includeRepeats?: boolean | undefined}) => _CharacterActivatorNative);
export const CharacterActivator: typeof _CharacterActivatorBinding & _FlaxInstanceType<CharacterActivator> & _FlaxDartType<CharacterActivator, readonly ["class", "flax.core/sdk_widgets#type:CharacterActivator", readonly [], false]> = _flaxBindInstanceType<CharacterActivator, typeof _CharacterActivatorBinding>(_CharacterActivatorBinding, "flax.core/sdk_widgets#type:CharacterActivator", ["dart:core::Object","flax.core/sdk_widgets#type:ShortcutActivator","flax.core/sdk_foundation#type:Diagnosticable","flax.core/sdk_widgets#type:MenuSerializableShortcut"]) as typeof _CharacterActivatorBinding & _FlaxInstanceType<CharacterActivator> & _FlaxDartType<CharacterActivator, readonly ["class", "flax.core/sdk_widgets#type:CharacterActivator", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "triggers" | "alt" | "control" | "meta" | "includeRepeats" | "character" | "accepts" | "debugDescribeKeys" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "serializeForMenu" | "__flaxBound:package:flutter/src/widgets/shortcuts.dart::CharacterActivator" | "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::MenuSerializableShortcut";

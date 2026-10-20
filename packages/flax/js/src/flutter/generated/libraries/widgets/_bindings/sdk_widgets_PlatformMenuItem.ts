// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_MenuSerializableShortcut';
import '@flax/flutter/widgets/_bindings/sdk_widgets_MenuSerializableShortcut';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_PlatformMenuDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PlatformMenuDelegate';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters257, _flaxMemberParameters259, _flaxMemberParameters2, _flaxMemberParameters9, _flaxMemberParameters8, _flaxMemberParameters5 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PlatformMenuItem extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __PlatformMenuItem: unique symbol;
readonly [_flaxDartTypeValue]: PlatformMenuItem;

readonly label: string;
readonly tooltip: string | null;
readonly shortcut: upstream1.MenuSerializableShortcut | null;
readonly onSelected: (() => void) | null;
readonly onOpen: (() => void) | null;
readonly onClose: (() => void) | null;
readonly onSelectedIntent: upstream2.Intent | null;
readonly descendants: DartList<PlatformMenuItem>;
readonly members: DartList<PlatformMenuItem>;
toStringShort(): string;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toChannelRepresentation(delegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuDelegate": readonly [] }>, options: {getId: ((item: PlatformMenuItem) => number)}): DartIterable<DartMap<string, unknown | null>>;
}
defineObject("flax.core/sdk_widgets#type:PlatformMenuItem", ["label","tooltip","shortcut","onSelected","onOpen","onClose","onSelectedIntent","descendants","members"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:PlatformMenuItem", "object", {"toChannelRepresentation":_flaxMemberParameters257}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _PlatformMenuItemFactory(options: { label: string; tooltip?: string | null | undefined; shortcut?: Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::MenuSerializableShortcut": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [] }> | null | undefined; onSelected?: (() => void) | null | undefined; onSelectedIntent?: Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined }): PlatformMenuItem {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:PlatformMenuItem", "", [{"name":"label","required":true},{"name":"tooltip"},{"name":"shortcut"},{"name":"onSelected"},{"name":"onSelectedIntent"}], [], options) as PlatformMenuItem;
}
const _PlatformMenuItemProxy = {type: "flax.core/sdk_widgets#type:PlatformMenuItem", parameters: _flaxMemberParameters259, constructors: {"": _flaxMemberParameters259}, methods: {"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters9,"toDiagnosticsNode":_flaxMemberParameters8,"debugFillProperties":_flaxMemberParameters5,"toChannelRepresentation":_flaxMemberParameters257}, getters: ["label","tooltip","shortcut","onSelected","onOpen","onClose","onSelectedIntent","descendants","members"], setters: [], contextMembers: [], superMembers: ["get:label","get:tooltip","get:shortcut","get:onSelected","get:onOpen","get:onClose","get:onSelectedIntent","get:descendants","get:members","toStringShort","toString","toDiagnosticsNode","debugFillProperties","toChannelRepresentation"]} as const;
export interface _PlatformMenuItemNative extends PlatformMenuItem {
readonly [_flaxDartTypeValue]: _PlatformMenuItemNative;

toStringShort(): string;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toChannelRepresentation(delegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuDelegate": readonly [] }>, options: {getId: ((item: PlatformMenuItem) => number)}): DartIterable<DartMap<string, unknown | null>>;
get label(): string;
get tooltip(): string | null;
get shortcut(): upstream1.MenuSerializableShortcut | null;
get onSelected(): (() => void) | null;
get onOpen(): (() => void) | null;
get onClose(): (() => void) | null;
get onSelectedIntent(): upstream2.Intent | null;
get descendants(): DartList<PlatformMenuItem>;
get members(): DartList<PlatformMenuItem>;
}
export abstract class _PlatformMenuItemNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PlatformMenuItem>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PlatformMenuItem;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:PlatformMenuItem", readonly [], false];
constructor(options: {label: string; tooltip?: string | null | undefined; shortcut?: Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::MenuSerializableShortcut": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [] }> | null | undefined; onSelected?: (() => void) | null | undefined; onSelectedIntent?: Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}) { super(_PlatformMenuItemProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_PlatformMenuItemNative.prototype, _PlatformMenuItemProxy);
export namespace _PlatformMenuItemFactory { export function implement(args: [options: {label: string; tooltip?: string | null | undefined; shortcut?: Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::MenuSerializableShortcut": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [] }> | null | undefined; onSelected?: (() => void) | null | undefined; onSelectedIntent?: Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}], implementation: {}): PlatformMenuItem {
return constructProxy(_PlatformMenuItemProxy, args, implementation) as PlatformMenuItem; } }
const _PlatformMenuItemBinding = _flaxProxyFactory(_PlatformMenuItemFactory, _PlatformMenuItemNative) as unknown as typeof _PlatformMenuItemFactory & (new(options: {label: string; tooltip?: string | null | undefined; shortcut?: Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::MenuSerializableShortcut": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [] }> | null | undefined; onSelected?: (() => void) | null | undefined; onSelectedIntent?: Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}) => _PlatformMenuItemNative);
export namespace _PlatformMenuItemFactory { export function serialize(item: Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, delegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuDelegate": readonly [] }>, getId: ((item: PlatformMenuItem) => number)): DartMap<string, unknown | null> {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:PlatformMenuItem.serialize", [item, delegate, getId]);
return _flaxResult as DartMap<string, unknown | null>;
} }
export const PlatformMenuItem: typeof _PlatformMenuItemBinding & _FlaxInstanceType<PlatformMenuItem> & _FlaxDartType<PlatformMenuItem, readonly ["class", "flax.core/sdk_widgets#type:PlatformMenuItem", readonly [], false]> = _flaxBindInstanceType<PlatformMenuItem, typeof _PlatformMenuItemBinding>(_PlatformMenuItemBinding, "flax.core/sdk_widgets#type:PlatformMenuItem", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _PlatformMenuItemBinding & _FlaxInstanceType<PlatformMenuItem> & _FlaxDartType<PlatformMenuItem, readonly ["class", "flax.core/sdk_widgets#type:PlatformMenuItem", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "label" | "tooltip" | "shortcut" | "onSelected" | "onOpen" | "onClose" | "onSelectedIntent" | "descendants" | "members" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "toChannelRepresentation" | "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_PlatformMenuItem';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PlatformMenuItem';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_PlatformProvidedMenuItemType';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PlatformProvidedMenuItemType';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_MenuSerializableShortcut';
import '@flax/flutter/widgets/_bindings/sdk_widgets_MenuSerializableShortcut';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_PlatformMenuDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PlatformMenuDelegate';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { _flaxMemberParameters261, _flaxMemberParameters257, _flaxMemberParameters2, _flaxMemberParameters5, _flaxMemberParameters8, _flaxMemberParameters9 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PlatformProvidedMenuItem extends Omit<upstream0.PlatformMenuItem, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.PlatformMenuItem>, Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformProvidedMenuItem": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __PlatformProvidedMenuItem: unique symbol;
readonly [_flaxDartTypeValue]: PlatformProvidedMenuItem;

readonly label: string;
readonly tooltip: string | null;
readonly shortcut: upstream3.MenuSerializableShortcut | null;
readonly onSelected: (() => void) | null;
readonly onOpen: (() => void) | null;
readonly onClose: (() => void) | null;
readonly onSelectedIntent: upstream4.Intent | null;
readonly descendants: DartList<upstream0.PlatformMenuItem>;
readonly members: DartList<upstream0.PlatformMenuItem>;
readonly type: upstream2.PlatformProvidedMenuItemType;
readonly enabled: boolean;
toChannelRepresentation(delegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuDelegate": readonly [] }>, options: {getId: ((item: upstream0.PlatformMenuItem) => number)}): DartIterable<DartMap<string, unknown | null>>;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream8.DiagnosticsTreeStyle | null | undefined}): upstream7.DiagnosticsNode;
toString(options?: {minLevel?: upstream9.DiagnosticLevel | undefined}): string;
}
defineObject("flax.core/sdk_widgets#type:PlatformProvidedMenuItem", ["label","tooltip","shortcut","onSelected","onOpen","onClose","onSelectedIntent","descendants","members","type","enabled"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:PlatformProvidedMenuItem", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:PlatformMenuItem");
export function _PlatformProvidedMenuItemFactory(options: { type: upstream2.PlatformProvidedMenuItemType; enabled?: boolean | undefined }): PlatformProvidedMenuItem {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:PlatformProvidedMenuItem", "", [{"name":"type","required":true},{"name":"enabled"}], [], options) as PlatformProvidedMenuItem;
}
const _PlatformProvidedMenuItemProxy = {type: "flax.core/sdk_widgets#type:PlatformProvidedMenuItem", parameters: _flaxMemberParameters261, constructors: {"": _flaxMemberParameters261}, methods: {"toChannelRepresentation":_flaxMemberParameters257,"toStringShort":_flaxMemberParameters2,"debugFillProperties":_flaxMemberParameters5,"toDiagnosticsNode":_flaxMemberParameters8,"toString":_flaxMemberParameters9}, getters: ["type","enabled","label","tooltip","shortcut","onSelected","onOpen","onClose","onSelectedIntent","descendants","members"], setters: [], contextMembers: [], superMembers: ["get:type","get:enabled","get:label","get:tooltip","get:shortcut","get:onSelected","get:onOpen","get:onClose","get:onSelectedIntent","get:descendants","get:members","toChannelRepresentation","toStringShort","debugFillProperties","toDiagnosticsNode","toString"]} as const;
export interface _PlatformProvidedMenuItemNative extends PlatformProvidedMenuItem {
readonly [_flaxDartTypeValue]: _PlatformProvidedMenuItemNative;

toChannelRepresentation(delegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuDelegate": readonly [] }>, options: {getId: ((item: upstream0.PlatformMenuItem) => number)}): DartIterable<DartMap<string, unknown | null>>;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream8.DiagnosticsTreeStyle | null | undefined}): upstream7.DiagnosticsNode;
toString(options?: {minLevel?: upstream9.DiagnosticLevel | undefined}): string;
get type(): upstream2.PlatformProvidedMenuItemType;
get enabled(): boolean;
get label(): string;
get tooltip(): string | null;
get shortcut(): upstream3.MenuSerializableShortcut | null;
get onSelected(): (() => void) | null;
get onOpen(): (() => void) | null;
get onClose(): (() => void) | null;
get onSelectedIntent(): upstream4.Intent | null;
get descendants(): DartList<upstream0.PlatformMenuItem>;
get members(): DartList<upstream0.PlatformMenuItem>;
}
export abstract class _PlatformProvidedMenuItemNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PlatformProvidedMenuItem>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PlatformProvidedMenuItem;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:PlatformProvidedMenuItem", readonly [], false];
constructor(options: {type: upstream2.PlatformProvidedMenuItemType; enabled?: boolean | undefined}) { super(_PlatformProvidedMenuItemProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_PlatformProvidedMenuItemNative.prototype, _PlatformProvidedMenuItemProxy);
export namespace _PlatformProvidedMenuItemFactory { export function implement(args: [options: {type: upstream2.PlatformProvidedMenuItemType; enabled?: boolean | undefined}], implementation: {}): PlatformProvidedMenuItem {
return constructProxy(_PlatformProvidedMenuItemProxy, args, implementation) as PlatformProvidedMenuItem; } }
const _PlatformProvidedMenuItemBinding = _flaxProxyFactory(_PlatformProvidedMenuItemFactory, _PlatformProvidedMenuItemNative) as unknown as typeof _PlatformProvidedMenuItemFactory & (new(options: {type: upstream2.PlatformProvidedMenuItemType; enabled?: boolean | undefined}) => _PlatformProvidedMenuItemNative);
export namespace _PlatformProvidedMenuItemFactory { export function hasMenu(menu: upstream2.PlatformProvidedMenuItemType): boolean {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:PlatformProvidedMenuItem.hasMenu", [menu]);
return _flaxResult as boolean;
} }
export const PlatformProvidedMenuItem: typeof _PlatformProvidedMenuItemBinding & _FlaxInstanceType<PlatformProvidedMenuItem> & _FlaxDartType<PlatformProvidedMenuItem, readonly ["class", "flax.core/sdk_widgets#type:PlatformProvidedMenuItem", readonly [], false]> = _flaxBindInstanceType<PlatformProvidedMenuItem, typeof _PlatformProvidedMenuItemBinding>(_PlatformProvidedMenuItemBinding, "flax.core/sdk_widgets#type:PlatformProvidedMenuItem", ["flax.core/sdk_widgets#type:PlatformMenuItem","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _PlatformProvidedMenuItemBinding & _FlaxInstanceType<PlatformProvidedMenuItem> & _FlaxDartType<PlatformProvidedMenuItem, readonly ["class", "flax.core/sdk_widgets#type:PlatformProvidedMenuItem", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "label" | "tooltip" | "shortcut" | "onSelected" | "onOpen" | "onClose" | "onSelectedIntent" | "descendants" | "members" | "type" | "enabled" | "toChannelRepresentation" | "toStringShort" | "debugFillProperties" | "toDiagnosticsNode" | "toString" | "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformProvidedMenuItem" | "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

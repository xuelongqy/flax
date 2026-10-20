// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_PlatformMenuItem';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PlatformMenuItem';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_MenuSerializableShortcut';
import '@flax/flutter/widgets/_bindings/sdk_widgets_MenuSerializableShortcut';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_PlatformMenuDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PlatformMenuDelegate';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { _flaxMemberParameters260, _flaxMemberParameters257, _flaxMemberParameters2, _flaxMemberParameters5, _flaxMemberParameters8, _flaxMemberParameters9 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PlatformMenuItemGroup extends Omit<upstream0.PlatformMenuItem, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.PlatformMenuItem>, Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItemGroup": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __PlatformMenuItemGroup: unique symbol;
readonly [_flaxDartTypeValue]: PlatformMenuItemGroup;

readonly label: string;
readonly tooltip: string | null;
readonly shortcut: upstream2.MenuSerializableShortcut | null;
readonly onSelected: (() => void) | null;
readonly onOpen: (() => void) | null;
readonly onClose: (() => void) | null;
readonly onSelectedIntent: upstream3.Intent | null;
readonly descendants: DartList<upstream0.PlatformMenuItem>;
readonly members: DartList<upstream0.PlatformMenuItem>;
toChannelRepresentation(delegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuDelegate": readonly [] }>, options: {getId: ((item: upstream0.PlatformMenuItem) => number)}): DartIterable<DartMap<string, unknown | null>>;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
toString(options?: {minLevel?: upstream8.DiagnosticLevel | undefined}): string;
}
defineObject("flax.core/sdk_widgets#type:PlatformMenuItemGroup", ["label","tooltip","shortcut","onSelected","onOpen","onClose","onSelectedIntent","descendants","members"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:PlatformMenuItemGroup", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:PlatformMenuItem");
export function _PlatformMenuItemGroupFactory(options: { members: DartListInput<upstream0.PlatformMenuItem, Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>> }): PlatformMenuItemGroup {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:PlatformMenuItemGroup", "", [{"name":"members","required":true}], [], options) as PlatformMenuItemGroup;
}
const _PlatformMenuItemGroupProxy = {type: "flax.core/sdk_widgets#type:PlatformMenuItemGroup", parameters: _flaxMemberParameters260, constructors: {"": _flaxMemberParameters260}, methods: {"toChannelRepresentation":_flaxMemberParameters257,"toStringShort":_flaxMemberParameters2,"debugFillProperties":_flaxMemberParameters5,"toDiagnosticsNode":_flaxMemberParameters8,"toString":_flaxMemberParameters9}, getters: ["members","label","tooltip","shortcut","onSelected","onOpen","onClose","onSelectedIntent","descendants"], setters: [], contextMembers: [], superMembers: ["get:members","get:label","get:tooltip","get:shortcut","get:onSelected","get:onOpen","get:onClose","get:onSelectedIntent","get:descendants","toChannelRepresentation","toStringShort","debugFillProperties","toDiagnosticsNode","toString"]} as const;
export interface _PlatformMenuItemGroupNative extends PlatformMenuItemGroup {
readonly [_flaxDartTypeValue]: _PlatformMenuItemGroupNative;

toChannelRepresentation(delegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuDelegate": readonly [] }>, options: {getId: ((item: upstream0.PlatformMenuItem) => number)}): DartIterable<DartMap<string, unknown | null>>;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
toString(options?: {minLevel?: upstream8.DiagnosticLevel | undefined}): string;
get members(): DartList<upstream0.PlatformMenuItem>;
get label(): string;
get tooltip(): string | null;
get shortcut(): upstream2.MenuSerializableShortcut | null;
get onSelected(): (() => void) | null;
get onOpen(): (() => void) | null;
get onClose(): (() => void) | null;
get onSelectedIntent(): upstream3.Intent | null;
get descendants(): DartList<upstream0.PlatformMenuItem>;
}
export abstract class _PlatformMenuItemGroupNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PlatformMenuItemGroup>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PlatformMenuItemGroup;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:PlatformMenuItemGroup", readonly [], false];
constructor(options: {members: DartListInput<upstream0.PlatformMenuItem, Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>}) { super(_PlatformMenuItemGroupProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_PlatformMenuItemGroupNative.prototype, _PlatformMenuItemGroupProxy);
export namespace _PlatformMenuItemGroupFactory { export function implement(args: [options: {members: DartListInput<upstream0.PlatformMenuItem, Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>}], implementation: {}): PlatformMenuItemGroup {
return constructProxy(_PlatformMenuItemGroupProxy, args, implementation) as PlatformMenuItemGroup; } }
const _PlatformMenuItemGroupBinding = _flaxProxyFactory(_PlatformMenuItemGroupFactory, _PlatformMenuItemGroupNative) as unknown as typeof _PlatformMenuItemGroupFactory & (new(options: {members: DartListInput<upstream0.PlatformMenuItem, Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>}) => _PlatformMenuItemGroupNative);
export namespace _PlatformMenuItemGroupFactory { export function serialize(group: Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, delegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuDelegate": readonly [] }>, options: { getId: ((item: upstream0.PlatformMenuItem) => number) }): DartIterable<DartMap<string, unknown | null>> {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["getId"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:PlatformMenuItemGroup.serialize", [group, delegate, options.getId]);
return _flaxResult as DartIterable<DartMap<string, unknown | null>>;
} }
export const PlatformMenuItemGroup: typeof _PlatformMenuItemGroupBinding & _FlaxInstanceType<PlatformMenuItemGroup> & _FlaxDartType<PlatformMenuItemGroup, readonly ["class", "flax.core/sdk_widgets#type:PlatformMenuItemGroup", readonly [], false]> = _flaxBindInstanceType<PlatformMenuItemGroup, typeof _PlatformMenuItemGroupBinding>(_PlatformMenuItemGroupBinding, "flax.core/sdk_widgets#type:PlatformMenuItemGroup", ["flax.core/sdk_widgets#type:PlatformMenuItem","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _PlatformMenuItemGroupBinding & _FlaxInstanceType<PlatformMenuItemGroup> & _FlaxDartType<PlatformMenuItemGroup, readonly ["class", "flax.core/sdk_widgets#type:PlatformMenuItemGroup", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "label" | "tooltip" | "shortcut" | "onSelected" | "onOpen" | "onClose" | "onSelectedIntent" | "descendants" | "members" | "toChannelRepresentation" | "toStringShort" | "debugFillProperties" | "toDiagnosticsNode" | "toString" | "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItemGroup" | "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

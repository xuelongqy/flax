// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_PlatformMenuItem';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PlatformMenuItem';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_MenuSerializableShortcut';
import '@flax/flutter/widgets/_bindings/sdk_widgets_MenuSerializableShortcut';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_PlatformMenuDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PlatformMenuDelegate';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { _flaxMemberParameters257, _flaxMemberParameters258, _flaxMemberParameters2, _flaxMemberParameters5, _flaxMemberParameters8, _flaxMemberParameters9, _flaxMemberParameters6, _flaxMemberParameters7 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PlatformMenu extends Omit<upstream0.PlatformMenuItem, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.PlatformMenuItem>, Omit<upstream2.DiagnosticableTreeMixin, _flaxOwnMembers0 | keyof upstream0.PlatformMenuItem | keyof upstream1.Diagnosticable>, Omit<upstream3.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.PlatformMenuItem | keyof upstream1.Diagnosticable | keyof upstream2.DiagnosticableTreeMixin>, Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenu": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> { readonly __PlatformMenu: unique symbol;
readonly [_flaxDartTypeValue]: PlatformMenu;

readonly label: string;
readonly tooltip: string | null;
readonly shortcut: upstream4.MenuSerializableShortcut | null;
readonly onSelected: (() => void) | null;
readonly onOpen: (() => void) | null;
readonly onClose: (() => void) | null;
readonly onSelectedIntent: upstream5.Intent | null;
readonly descendants: DartList<upstream0.PlatformMenuItem>;
readonly members: DartList<upstream0.PlatformMenuItem>;
readonly menus: DartList<upstream0.PlatformMenuItem>;
toChannelRepresentation(delegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuDelegate": readonly [] }>, options: {getId: ((item: upstream0.PlatformMenuItem) => number)}): DartIterable<DartMap<string, unknown | null>>;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream9.DiagnosticsTreeStyle | null | undefined}): upstream8.DiagnosticsNode;
toString(options?: {minLevel?: upstream10.DiagnosticLevel | undefined}): string;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream10.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream10.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
debugDescribeChildren(): DartList<upstream8.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:PlatformMenu", ["label","tooltip","shortcut","onSelected","onOpen","onClose","onSelectedIntent","descendants","members","menus"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:PlatformMenu", "object", {"toChannelRepresentation":_flaxMemberParameters257}, {}), [], undefined, "flax.core/sdk_foundation#type:DiagnosticableTreeMixin");
export function _PlatformMenuFactory(options: { label: string; tooltip?: string | null | undefined; onOpen?: (() => void) | null | undefined; onClose?: (() => void) | null | undefined; menus: DartListInput<upstream0.PlatformMenuItem, Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>> }): PlatformMenu {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:PlatformMenu", "", [{"name":"label","required":true},{"name":"tooltip"},{"name":"onOpen"},{"name":"onClose"},{"name":"menus","required":true}], [], options) as PlatformMenu;
}
const _PlatformMenuProxy = {type: "flax.core/sdk_widgets#type:PlatformMenu", parameters: _flaxMemberParameters258, constructors: {"": _flaxMemberParameters258}, methods: {"toChannelRepresentation":_flaxMemberParameters257,"toStringShort":_flaxMemberParameters2,"debugFillProperties":_flaxMemberParameters5,"toDiagnosticsNode":_flaxMemberParameters8,"toString":_flaxMemberParameters9,"toStringShallow":_flaxMemberParameters6,"toStringDeep":_flaxMemberParameters7,"debugDescribeChildren":_flaxMemberParameters2}, getters: ["onOpen","onClose","menus","descendants","label","tooltip","shortcut","onSelected","onSelectedIntent","members"], setters: [], contextMembers: [], superMembers: ["get:onOpen","get:onClose","get:menus","get:descendants","get:label","get:tooltip","get:shortcut","get:onSelected","get:onSelectedIntent","get:members","toChannelRepresentation","toStringShort","debugFillProperties","toDiagnosticsNode","toString","toStringShallow","toStringDeep","debugDescribeChildren"]} as const;
export interface _PlatformMenuNative extends PlatformMenu {
readonly [_flaxDartTypeValue]: _PlatformMenuNative;

toChannelRepresentation(delegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuDelegate": readonly [] }>, options: {getId: ((item: upstream0.PlatformMenuItem) => number)}): DartIterable<DartMap<string, unknown | null>>;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream9.DiagnosticsTreeStyle | null | undefined}): upstream8.DiagnosticsNode;
toString(options?: {minLevel?: upstream10.DiagnosticLevel | undefined}): string;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream10.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; minLevel?: upstream10.DiagnosticLevel | undefined; wrapWidth?: number | undefined}): string;
debugDescribeChildren(): DartList<upstream8.DiagnosticsNode>;
get onOpen(): (() => void) | null;
get onClose(): (() => void) | null;
get menus(): DartList<upstream0.PlatformMenuItem>;
get descendants(): DartList<upstream0.PlatformMenuItem>;
get label(): string;
get tooltip(): string | null;
get shortcut(): upstream4.MenuSerializableShortcut | null;
get onSelected(): (() => void) | null;
get onSelectedIntent(): upstream5.Intent | null;
get members(): DartList<upstream0.PlatformMenuItem>;
}
export abstract class _PlatformMenuNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PlatformMenu>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PlatformMenu;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:PlatformMenu", readonly [], false];
constructor(options: {label: string; tooltip?: string | null | undefined; onOpen?: (() => void) | null | undefined; onClose?: (() => void) | null | undefined; menus: DartListInput<upstream0.PlatformMenuItem, Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>}) { super(_PlatformMenuProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_PlatformMenuNative.prototype, _PlatformMenuProxy);
export namespace _PlatformMenuFactory { export function implement(args: [options: {label: string; tooltip?: string | null | undefined; onOpen?: (() => void) | null | undefined; onClose?: (() => void) | null | undefined; menus: DartListInput<upstream0.PlatformMenuItem, Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>}], implementation: {}): PlatformMenu {
return constructProxy(_PlatformMenuProxy, args, implementation) as PlatformMenu; } }
const _PlatformMenuBinding = _flaxProxyFactory(_PlatformMenuFactory, _PlatformMenuNative) as unknown as typeof _PlatformMenuFactory & (new(options: {label: string; tooltip?: string | null | undefined; onOpen?: (() => void) | null | undefined; onClose?: (() => void) | null | undefined; menus: DartListInput<upstream0.PlatformMenuItem, Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>}) => _PlatformMenuNative);
export namespace _PlatformMenuFactory { export function getDescendants(item: Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenu": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>): DartList<upstream0.PlatformMenuItem> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:PlatformMenu.getDescendants", [item]);
return _flaxResult as DartList<upstream0.PlatformMenuItem>;
} }
export namespace _PlatformMenuFactory { export function serialize(item: Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenu": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, delegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuDelegate": readonly [] }>, getId: ((item: upstream0.PlatformMenuItem) => number)): DartMap<string, unknown | null> {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:PlatformMenu.serialize", [item, delegate, getId]);
return _flaxResult as DartMap<string, unknown | null>;
} }
export const PlatformMenu: typeof _PlatformMenuBinding & _FlaxInstanceType<PlatformMenu> & _FlaxDartType<PlatformMenu, readonly ["class", "flax.core/sdk_widgets#type:PlatformMenu", readonly [], false]> = _flaxBindInstanceType<PlatformMenu, typeof _PlatformMenuBinding>(_PlatformMenuBinding, "flax.core/sdk_widgets#type:PlatformMenu", ["flax.core/sdk_widgets#type:PlatformMenuItem","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable","flax.core/sdk_foundation#type:DiagnosticableTreeMixin","flax.core/sdk_foundation#type:DiagnosticableTree"]) as typeof _PlatformMenuBinding & _FlaxInstanceType<PlatformMenu> & _FlaxDartType<PlatformMenu, readonly ["class", "flax.core/sdk_widgets#type:PlatformMenu", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "label" | "tooltip" | "shortcut" | "onSelected" | "onOpen" | "onClose" | "onSelectedIntent" | "descendants" | "members" | "menus" | "toChannelRepresentation" | "toStringShort" | "debugFillProperties" | "toDiagnosticsNode" | "toString" | "toStringShallow" | "toStringDeep" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenu" | "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree";

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
const _flaxMemberParameters0 = [{"name":"delegate","required":true,"positional":true},{"name":"getId","required":true,"positional":false}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"name","required":false,"positional":false},{"name":"style","required":false,"positional":false}] as const;
const _flaxMemberParameters4 = [{"name":"minLevel","required":false,"positional":false}] as const;
const _flaxMemberParameters5 = [{"name":"joiner","required":false,"positional":false},{"name":"minLevel","required":false,"positional":false}] as const;
const _flaxMemberParameters6 = [{"name":"minLevel","required":false,"positional":false},{"name":"prefixLineOne","required":false,"positional":false},{"name":"prefixOtherLines","required":false,"positional":false},{"name":"wrapWidth","required":false,"positional":false}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PlatformMenu extends Omit<upstream0.PlatformMenuItem, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.PlatformMenuItem>, Omit<upstream2.DiagnosticableTreeMixin, _flaxOwnMembers0 | keyof upstream0.PlatformMenuItem | keyof upstream1.Diagnosticable>, Omit<upstream3.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.PlatformMenuItem | keyof upstream1.Diagnosticable | keyof upstream2.DiagnosticableTreeMixin>, Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenu": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> { readonly __PlatformMenu: unique symbol;
readonly [_flaxDartTypeValue]: PlatformMenu;

}
defineObject("flax.core/sdk_widgets#type:PlatformMenu", ["label","tooltip","shortcut","onSelected","onOpen","onClose","onSelectedIntent","descendants","members","menus"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:PlatformMenu", "object", {"toChannelRepresentation":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_foundation#type:DiagnosticableTreeMixin");
const _PlatformMenuProxy = {type: "flax.core/sdk_widgets#type:PlatformMenu", parameters: [{"name":"label","required":true,"positional":false},{"name":"tooltip","required":false,"positional":false},{"name":"onOpen","required":false,"positional":false},{"name":"onClose","required":false,"positional":false},{"name":"menus","required":true,"positional":false}], constructors: {"":[{"name":"label","required":true,"positional":false},{"name":"tooltip","required":false,"positional":false},{"name":"onOpen","required":false,"positional":false},{"name":"onClose","required":false,"positional":false},{"name":"menus","required":true,"positional":false}]}, methods: {"toChannelRepresentation":_flaxMemberParameters0,"toStringShort":_flaxMemberParameters1,"debugFillProperties":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters3,"toString":_flaxMemberParameters4,"toStringShallow":_flaxMemberParameters5,"toStringDeep":_flaxMemberParameters6,"debugDescribeChildren":_flaxMemberParameters1}, getters: ["onOpen","onClose","menus","descendants","label","tooltip","shortcut","onSelected","onSelectedIntent","members"], setters: [], contextMembers: [], superMembers: ["get:onOpen","get:onClose","get:menus","get:descendants","get:label","get:tooltip","get:shortcut","get:onSelected","get:onSelectedIntent","get:members","toChannelRepresentation","toStringShort","debugFillProperties","toDiagnosticsNode","toString","toStringShallow","toStringDeep","debugDescribeChildren"]} as const;
export interface PlatformMenu {
readonly [_flaxDartTypeValue]: PlatformMenu;

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
export abstract class PlatformMenu extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PlatformMenu>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PlatformMenu;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:PlatformMenu", readonly [], false];
constructor(options: {label: string; tooltip?: string | null | undefined; onOpen?: (() => void) | null | undefined; onClose?: (() => void) | null | undefined; menus: DartListInput<upstream0.PlatformMenuItem, Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>}) { super(_PlatformMenuProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(PlatformMenu.prototype, _PlatformMenuProxy);
export namespace PlatformMenu { export function implement(args: [options: {label: string; tooltip?: string | null | undefined; onOpen?: (() => void) | null | undefined; onClose?: (() => void) | null | undefined; menus: DartListInput<upstream0.PlatformMenuItem, Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>}], implementation: {}): PlatformMenu {
return constructProxy(_PlatformMenuProxy, args, implementation) as PlatformMenu; } }
export namespace PlatformMenu { export function getDescendants(item: Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenu": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>): DartList<upstream0.PlatformMenuItem> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:PlatformMenu.getDescendants", [item]);
return _flaxResult as DartList<upstream0.PlatformMenuItem>;
} }
export namespace PlatformMenu { export function serialize(item: Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenu": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, delegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuDelegate": readonly [] }>, getId: ((item: upstream0.PlatformMenuItem) => number)): DartMap<string, unknown | null> {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:PlatformMenu.serialize", [item, delegate, getId]);
return _flaxResult as DartMap<string, unknown | null>;
} }
_flaxBindInstanceType<PlatformMenu, typeof PlatformMenu>(PlatformMenu, "flax.core/sdk_widgets#type:PlatformMenu", ["flax.core/sdk_widgets#type:PlatformMenuItem","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable","flax.core/sdk_foundation#type:DiagnosticableTreeMixin","flax.core/sdk_foundation#type:DiagnosticableTree"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "label" | "tooltip" | "shortcut" | "onSelected" | "onOpen" | "onClose" | "onSelectedIntent" | "descendants" | "members" | "menus" | "toChannelRepresentation" | "toStringShort" | "debugFillProperties" | "toDiagnosticsNode" | "toString" | "toStringShallow" | "toStringDeep" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenu" | "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformMenuItem" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree";

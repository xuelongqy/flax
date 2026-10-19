// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_IOSSystemContextMenuItem';
import '@flax/flutter/widgets/_bindings/sdk_widgets_IOSSystemContextMenuItem';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemData';
import '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemData';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsLocalizations';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsLocalizations';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
const _flaxMemberParameters0 = [{"name":"localizations","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"title","required":true},{"name":"onPressed","required":true}] as const;
const _flaxMemberParameters2 = [] as const;
const _flaxMemberParameters3 = [{"name":"minLevel"}] as const;
const _flaxMemberParameters4 = [{"name":"name"},{"name":"style"}] as const;
const _flaxMemberParameters5 = [{"name":"properties","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface IOSSystemContextMenuItemCustom extends Omit<upstream0.IOSSystemContextMenuItem, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.IOSSystemContextMenuItem>, Readonly<{ "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItemCustom": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItem": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __IOSSystemContextMenuItemCustom: unique symbol;
readonly [_flaxDartTypeValue]: IOSSystemContextMenuItemCustom;

}
defineObject("flax.core/sdk_widgets#type:IOSSystemContextMenuItemCustom", ["title","onPressed"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:IOSSystemContextMenuItemCustom", "object", {"getData":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
const _IOSSystemContextMenuItemCustomProxy = {type: "flax.core/sdk_widgets#type:IOSSystemContextMenuItemCustom", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"getData":_flaxMemberParameters0,"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters3,"toDiagnosticsNode":_flaxMemberParameters4,"debugFillProperties":_flaxMemberParameters5}, getters: ["title","onPressed"], setters: [], contextMembers: [], superMembers: ["get:title","get:onPressed","getData","toStringShort","toString","toDiagnosticsNode","debugFillProperties"]} as const;
export interface IOSSystemContextMenuItemCustom {
readonly [_flaxDartTypeValue]: IOSSystemContextMenuItemCustom;

getData(localizations: Readonly<{ "__flaxBound:package:flutter/src/widgets/localizations.dart::WidgetsLocalizations": readonly [] }>): upstream2.IOSSystemContextMenuItemData;
toStringShort(): string;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
get title(): string;
get onPressed(): (() => void);
}
export abstract class IOSSystemContextMenuItemCustom extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<IOSSystemContextMenuItemCustom>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: IOSSystemContextMenuItemCustom;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:IOSSystemContextMenuItemCustom", readonly [], false];
constructor(options: {title: string; onPressed: (() => void)}) { super(_IOSSystemContextMenuItemCustomProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(IOSSystemContextMenuItemCustom.prototype, _IOSSystemContextMenuItemCustomProxy);
export namespace IOSSystemContextMenuItemCustom { export function implement(args: [options: {title: string; onPressed: (() => void)}], implementation: {}): IOSSystemContextMenuItemCustom {
return constructProxy(_IOSSystemContextMenuItemCustomProxy, args, implementation) as IOSSystemContextMenuItemCustom; } }
_flaxBindInstanceType<IOSSystemContextMenuItemCustom, typeof IOSSystemContextMenuItemCustom>(IOSSystemContextMenuItemCustom, "flax.core/sdk_widgets#type:IOSSystemContextMenuItemCustom", ["flax.core/sdk_widgets#type:IOSSystemContextMenuItem","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "title" | "onPressed" | "getData" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItemCustom" | "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItem" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

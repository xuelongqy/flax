// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters1, _flaxMemberParameters2, _flaxMemberParameters3, _flaxMemberParameters4, _flaxMemberParameters5 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ActionIconThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/material/action_icons_theme.dart::ActionIconThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __ActionIconThemeData: unique symbol;
readonly [_flaxDartTypeValue]: ActionIconThemeData;

}
defineObject("flax.core/sdk_material#type:ActionIconThemeData", ["backButtonIconBuilder","closeButtonIconBuilder","drawerButtonIconBuilder","endDrawerButtonIconBuilder"], [], _flaxBindingMethods("flax.core/sdk_material#type:ActionIconThemeData", "object", {"copyWith":_flaxMemberParameters1}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
const _ActionIconThemeDataProxy = {type: "flax.core/sdk_material#type:ActionIconThemeData", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters3,"toDiagnosticsNode":_flaxMemberParameters4,"debugFillProperties":_flaxMemberParameters5,"copyWith":_flaxMemberParameters1}, getters: ["backButtonIconBuilder","closeButtonIconBuilder","drawerButtonIconBuilder","endDrawerButtonIconBuilder"], setters: [], contextMembers: [], superMembers: ["get:backButtonIconBuilder","get:closeButtonIconBuilder","get:drawerButtonIconBuilder","get:endDrawerButtonIconBuilder","toStringShort","toString","toDiagnosticsNode","debugFillProperties","copyWith"]} as const;
export interface ActionIconThemeData {
readonly [_flaxDartTypeValue]: ActionIconThemeData;

toStringShort(): string;
toString(options?: {minLevel?: upstream2.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream4.DiagnosticsTreeStyle | null | undefined}): upstream3.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {backButtonIconBuilder?: ((context: upstream1.BuildContext) => Widget) | null | undefined; closeButtonIconBuilder?: ((context: upstream1.BuildContext) => Widget) | null | undefined; drawerButtonIconBuilder?: ((context: upstream1.BuildContext) => Widget) | null | undefined; endDrawerButtonIconBuilder?: ((context: upstream1.BuildContext) => Widget) | null | undefined}): ActionIconThemeData;
get backButtonIconBuilder(): ((context: upstream1.BuildContext) => Widget) | null;
get closeButtonIconBuilder(): ((context: upstream1.BuildContext) => Widget) | null;
get drawerButtonIconBuilder(): ((context: upstream1.BuildContext) => Widget) | null;
get endDrawerButtonIconBuilder(): ((context: upstream1.BuildContext) => Widget) | null;
}
export abstract class ActionIconThemeData extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ActionIconThemeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ActionIconThemeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:ActionIconThemeData", readonly [], false];
constructor(options?: {backButtonIconBuilder?: ((context: upstream1.BuildContext) => Widget) | null | undefined; closeButtonIconBuilder?: ((context: upstream1.BuildContext) => Widget) | null | undefined; drawerButtonIconBuilder?: ((context: upstream1.BuildContext) => Widget) | null | undefined; endDrawerButtonIconBuilder?: ((context: upstream1.BuildContext) => Widget) | null | undefined}) { super(_ActionIconThemeDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ActionIconThemeData.prototype, _ActionIconThemeDataProxy);
export namespace ActionIconThemeData { export function implement(args: [options?: {backButtonIconBuilder?: ((context: upstream1.BuildContext) => Widget) | null | undefined; closeButtonIconBuilder?: ((context: upstream1.BuildContext) => Widget) | null | undefined; drawerButtonIconBuilder?: ((context: upstream1.BuildContext) => Widget) | null | undefined; endDrawerButtonIconBuilder?: ((context: upstream1.BuildContext) => Widget) | null | undefined}], implementation: {}): ActionIconThemeData {
return constructProxy(_ActionIconThemeDataProxy, args, implementation) as ActionIconThemeData; } }
export namespace ActionIconThemeData { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/material/action_icons_theme.dart::ActionIconThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/material/action_icons_theme.dart::ActionIconThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): ActionIconThemeData | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_material#function:ActionIconThemeData.lerp", [a, b, t]);
return _flaxResult as ActionIconThemeData | null;
} }
_flaxBindInstanceType<ActionIconThemeData, typeof ActionIconThemeData>(ActionIconThemeData, "flax.core/sdk_material#type:ActionIconThemeData", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "backButtonIconBuilder" | "closeButtonIconBuilder" | "drawerButtonIconBuilder" | "endDrawerButtonIconBuilder" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:flutter/src/material/action_icons_theme.dart::ActionIconThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

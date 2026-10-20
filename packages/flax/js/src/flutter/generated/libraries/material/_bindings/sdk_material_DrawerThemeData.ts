// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters122, _flaxMemberParameters123, _flaxMemberParameters2, _flaxMemberParameters3, _flaxMemberParameters4, _flaxMemberParameters5 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DrawerThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/material/drawer_theme.dart::DrawerThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __DrawerThemeData: unique symbol;
readonly [_flaxDartTypeValue]: DrawerThemeData;

readonly backgroundColor: upstream1.Color | null;
readonly scrimColor: upstream1.Color | null;
readonly elevation: number | null;
readonly shadowColor: upstream1.Color | null;
readonly surfaceTintColor: upstream1.Color | null;
readonly shape: upstream2.ShapeBorder | null;
readonly endShape: upstream2.ShapeBorder | null;
readonly width: number | null;
readonly clipBehavior: upstream3.Clip | null;
toStringShort(): string;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; clipBehavior?: upstream3.Clip | null | undefined; elevation?: number | null | undefined; endShape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; scrimColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; shadowColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; surfaceTintColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; width?: number | null | undefined}): DrawerThemeData;
}
defineObject("flax.core/sdk_material#type:DrawerThemeData", ["backgroundColor","scrimColor","elevation","shadowColor","surfaceTintColor","shape","endShape","width","clipBehavior"], [], _flaxBindingMethods("flax.core/sdk_material#type:DrawerThemeData", "object", {"copyWith":_flaxMemberParameters122}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _DrawerThemeDataFactory(options: { backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; scrimColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; elevation?: number | null | undefined; shadowColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; surfaceTintColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; endShape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; width?: number | null | undefined; clipBehavior?: upstream3.Clip | null | undefined } = {}): DrawerThemeData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:DrawerThemeData", "", [{"name":"backgroundColor"},{"name":"scrimColor"},{"name":"elevation"},{"name":"shadowColor"},{"name":"surfaceTintColor"},{"name":"shape"},{"name":"endShape"},{"name":"width"},{"name":"clipBehavior"}], [], options) as DrawerThemeData;
}
const _DrawerThemeDataProxy = {type: "flax.core/sdk_material#type:DrawerThemeData", parameters: _flaxMemberParameters123, constructors: {"": _flaxMemberParameters123}, methods: {"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters3,"toDiagnosticsNode":_flaxMemberParameters4,"debugFillProperties":_flaxMemberParameters5,"copyWith":_flaxMemberParameters122}, getters: ["backgroundColor","scrimColor","elevation","shadowColor","surfaceTintColor","shape","endShape","width","clipBehavior"], setters: [], contextMembers: [], superMembers: ["get:backgroundColor","get:scrimColor","get:elevation","get:shadowColor","get:surfaceTintColor","get:shape","get:endShape","get:width","get:clipBehavior","toStringShort","toString","toDiagnosticsNode","debugFillProperties","copyWith"]} as const;
export interface _DrawerThemeDataNative extends DrawerThemeData {
readonly [_flaxDartTypeValue]: _DrawerThemeDataNative;

toStringShort(): string;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; scrimColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; elevation?: number | null | undefined; shadowColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; surfaceTintColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; endShape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; width?: number | null | undefined; clipBehavior?: upstream3.Clip | null | undefined}): DrawerThemeData;
get backgroundColor(): upstream1.Color | null;
get scrimColor(): upstream1.Color | null;
get elevation(): number | null;
get shadowColor(): upstream1.Color | null;
get surfaceTintColor(): upstream1.Color | null;
get shape(): upstream2.ShapeBorder | null;
get endShape(): upstream2.ShapeBorder | null;
get width(): number | null;
get clipBehavior(): upstream3.Clip | null;
}
export abstract class _DrawerThemeDataNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DrawerThemeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DrawerThemeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:DrawerThemeData", readonly [], false];
constructor(options?: {backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; scrimColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; elevation?: number | null | undefined; shadowColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; surfaceTintColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; endShape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; width?: number | null | undefined; clipBehavior?: upstream3.Clip | null | undefined}) { super(_DrawerThemeDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_DrawerThemeDataNative.prototype, _DrawerThemeDataProxy);
export namespace _DrawerThemeDataFactory { export function implement(args: [options?: {backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; scrimColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; elevation?: number | null | undefined; shadowColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; surfaceTintColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; endShape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; width?: number | null | undefined; clipBehavior?: upstream3.Clip | null | undefined}], implementation: {}): DrawerThemeData {
return constructProxy(_DrawerThemeDataProxy, args, implementation) as DrawerThemeData; } }
const _DrawerThemeDataBinding = _flaxProxyFactory(_DrawerThemeDataFactory, _DrawerThemeDataNative) as unknown as typeof _DrawerThemeDataFactory & (new(options?: {backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; scrimColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; elevation?: number | null | undefined; shadowColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; surfaceTintColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; endShape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; width?: number | null | undefined; clipBehavior?: upstream3.Clip | null | undefined}) => _DrawerThemeDataNative);
export namespace _DrawerThemeDataFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/material/drawer_theme.dart::DrawerThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/material/drawer_theme.dart::DrawerThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): DrawerThemeData | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_material#function:DrawerThemeData.lerp", [a, b, t]);
return _flaxResult as DrawerThemeData | null;
} }
export const DrawerThemeData: typeof _DrawerThemeDataBinding & _FlaxInstanceType<DrawerThemeData> & _FlaxDartType<DrawerThemeData, readonly ["class", "flax.core/sdk_material#type:DrawerThemeData", readonly [], false]> = _flaxBindInstanceType<DrawerThemeData, typeof _DrawerThemeDataBinding>(_DrawerThemeDataBinding, "flax.core/sdk_material#type:DrawerThemeData", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _DrawerThemeDataBinding & _FlaxInstanceType<DrawerThemeData> & _FlaxDartType<DrawerThemeData, readonly ["class", "flax.core/sdk_material#type:DrawerThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "backgroundColor" | "scrimColor" | "elevation" | "shadowColor" | "surfaceTintColor" | "shape" | "endShape" | "width" | "clipBehavior" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:flutter/src/material/drawer_theme.dart::DrawerThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

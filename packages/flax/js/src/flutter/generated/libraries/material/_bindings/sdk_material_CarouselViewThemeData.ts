// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters62, _flaxMemberParameters63, _flaxMemberParameters2, _flaxMemberParameters3, _flaxMemberParameters4, _flaxMemberParameters5 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CarouselViewThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/material/carousel_theme.dart::CarouselViewThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __CarouselViewThemeData: unique symbol;
readonly [_flaxDartTypeValue]: CarouselViewThemeData;

readonly padding: upstream4.EdgeInsets | null;
readonly backgroundColor: upstream1.Color | null;
readonly elevation: number | null;
readonly shape: upstream3.OutlinedBorder | null;
readonly itemClipBehavior: upstream5.Clip | null;
readonly overlayColor: upstream2.WidgetStateProperty<upstream1.Color | null> | null;
toStringShort(): string;
toString(options?: {minLevel?: upstream6.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream8.DiagnosticsTreeStyle | null | undefined}): upstream7.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; elevation?: number | null | undefined; itemClipBehavior?: upstream5.Clip | null | undefined; overlayColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream1.Color | null] }> | null | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined}): CarouselViewThemeData;
}
defineObject("flax.core/sdk_material#type:CarouselViewThemeData", ["padding","backgroundColor","elevation","shape","itemClipBehavior","overlayColor"], [], _flaxBindingMethods("flax.core/sdk_material#type:CarouselViewThemeData", "object", {"copyWith":_flaxMemberParameters62}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _CarouselViewThemeDataFactory(options: { elevation?: number | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; overlayColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream1.Color | null] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; itemClipBehavior?: upstream5.Clip | null | undefined } = {}): CarouselViewThemeData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:CarouselViewThemeData", "", [{"name":"elevation"},{"name":"backgroundColor"},{"name":"overlayColor"},{"name":"shape"},{"name":"padding"},{"name":"itemClipBehavior"}], [], options) as CarouselViewThemeData;
}
const _CarouselViewThemeDataProxy = {type: "flax.core/sdk_material#type:CarouselViewThemeData", parameters: _flaxMemberParameters63, constructors: {"": _flaxMemberParameters63}, methods: {"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters3,"toDiagnosticsNode":_flaxMemberParameters4,"debugFillProperties":_flaxMemberParameters5,"copyWith":_flaxMemberParameters62}, getters: ["padding","backgroundColor","elevation","shape","itemClipBehavior","overlayColor"], setters: [], contextMembers: [], superMembers: ["get:padding","get:backgroundColor","get:elevation","get:shape","get:itemClipBehavior","get:overlayColor","toStringShort","toString","toDiagnosticsNode","debugFillProperties","copyWith"]} as const;
export interface _CarouselViewThemeDataNative extends CarouselViewThemeData {
readonly [_flaxDartTypeValue]: _CarouselViewThemeDataNative;

toStringShort(): string;
toString(options?: {minLevel?: upstream6.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream8.DiagnosticsTreeStyle | null | undefined}): upstream7.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; elevation?: number | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; overlayColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream1.Color | null] }> | null | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; itemClipBehavior?: upstream5.Clip | null | undefined}): CarouselViewThemeData;
get padding(): upstream4.EdgeInsets | null;
get backgroundColor(): upstream1.Color | null;
get elevation(): number | null;
get shape(): upstream3.OutlinedBorder | null;
get itemClipBehavior(): upstream5.Clip | null;
get overlayColor(): upstream2.WidgetStateProperty<upstream1.Color | null> | null;
}
export abstract class _CarouselViewThemeDataNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CarouselViewThemeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CarouselViewThemeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:CarouselViewThemeData", readonly [], false];
constructor(options?: {elevation?: number | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; overlayColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream1.Color | null] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; itemClipBehavior?: upstream5.Clip | null | undefined}) { super(_CarouselViewThemeDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_CarouselViewThemeDataNative.prototype, _CarouselViewThemeDataProxy);
export namespace _CarouselViewThemeDataFactory { export function implement(args: [options?: {elevation?: number | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; overlayColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream1.Color | null] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; itemClipBehavior?: upstream5.Clip | null | undefined}], implementation: {}): CarouselViewThemeData {
return constructProxy(_CarouselViewThemeDataProxy, args, implementation) as CarouselViewThemeData; } }
const _CarouselViewThemeDataBinding = _flaxProxyFactory(_CarouselViewThemeDataFactory, _CarouselViewThemeDataNative) as unknown as typeof _CarouselViewThemeDataFactory & (new(options?: {elevation?: number | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; overlayColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream1.Color | null] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; itemClipBehavior?: upstream5.Clip | null | undefined}) => _CarouselViewThemeDataNative);
export namespace _CarouselViewThemeDataFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/material/carousel_theme.dart::CarouselViewThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/material/carousel_theme.dart::CarouselViewThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): CarouselViewThemeData {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_material#function:CarouselViewThemeData.lerp", [a, b, t]);
return _flaxResult as CarouselViewThemeData;
} }
export const CarouselViewThemeData: typeof _CarouselViewThemeDataBinding & _FlaxInstanceType<CarouselViewThemeData> & _FlaxDartType<CarouselViewThemeData, readonly ["class", "flax.core/sdk_material#type:CarouselViewThemeData", readonly [], false]> = _flaxBindInstanceType<CarouselViewThemeData, typeof _CarouselViewThemeDataBinding>(_CarouselViewThemeDataBinding, "flax.core/sdk_material#type:CarouselViewThemeData", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _CarouselViewThemeDataBinding & _FlaxInstanceType<CarouselViewThemeData> & _FlaxDartType<CarouselViewThemeData, readonly ["class", "flax.core/sdk_material#type:CarouselViewThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "padding" | "backgroundColor" | "elevation" | "shape" | "itemClipBehavior" | "overlayColor" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:flutter/src/material/carousel_theme.dart::CarouselViewThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

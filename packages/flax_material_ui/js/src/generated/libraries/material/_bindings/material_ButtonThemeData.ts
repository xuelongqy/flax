// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/material-ui/_bindings/material_ButtonTextTheme';
import '@flax/material-ui/_bindings/material_ButtonTextTheme';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream4 from '@flax/material-ui/_bindings/material_ButtonBarLayoutBehavior';
import '@flax/material-ui/_bindings/material_ButtonBarLayoutBehavior';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream6 from '@flax/material-ui/_bindings/material_ColorScheme';
import '@flax/material-ui/_bindings/material_ColorScheme';
import type * as upstream7 from '@flax/material-ui/_bindings/material_MaterialTapTargetSize';
import '@flax/material-ui/_bindings/material_MaterialTapTargetSize';
import type * as upstream8 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream13 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import type * as upstream14 from '@flax/material-ui/_bindings/material_MaterialButton';
import type * as upstream15 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { _flaxMemberParameters27, _flaxMemberParameters28, _flaxMemberParameters29, _flaxMemberParameters2, _flaxMemberParameters3, _flaxMemberParameters4, _flaxMemberParameters5 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ButtonThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:material_ui/src/button_theme.dart::ButtonThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __ButtonThemeData: unique symbol;
readonly [_flaxDartTypeValue]: ButtonThemeData;

readonly minWidth: number;
readonly height: number;
readonly textTheme: upstream1.ButtonTextTheme;
readonly layoutBehavior: upstream4.ButtonBarLayoutBehavior;
readonly constraints: upstream8.BoxConstraints;
readonly padding: upstream2.EdgeInsetsGeometry;
readonly shape: upstream3.ShapeBorder;
readonly alignedDropdown: boolean;
readonly colorScheme: upstream6.ColorScheme | null;
toStringShort(): string;
toString(options?: {minLevel?: upstream9.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream11.DiagnosticsTreeStyle | null | undefined}): upstream10.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
getBrightness(button: upstream14.MaterialButton): upstream13.Brightness;
getTextTheme(button: upstream14.MaterialButton): upstream1.ButtonTextTheme;
getDisabledTextColor(button: upstream14.MaterialButton): upstream5.Color;
getDisabledFillColor(button: upstream14.MaterialButton): upstream5.Color;
getFillColor(button: upstream14.MaterialButton): upstream5.Color | null;
getTextColor(button: upstream14.MaterialButton): upstream5.Color;
getSplashColor(button: upstream14.MaterialButton): upstream5.Color;
getFocusColor(button: upstream14.MaterialButton): upstream5.Color;
getHoverColor(button: upstream14.MaterialButton): upstream5.Color;
getHighlightColor(button: upstream14.MaterialButton): upstream5.Color;
getElevation(button: upstream14.MaterialButton): number;
getFocusElevation(button: upstream14.MaterialButton): number;
getHoverElevation(button: upstream14.MaterialButton): number;
getHighlightElevation(button: upstream14.MaterialButton): number;
getDisabledElevation(button: upstream14.MaterialButton): number;
getPadding(button: upstream14.MaterialButton): upstream2.EdgeInsetsGeometry;
getShape(button: upstream14.MaterialButton): upstream3.ShapeBorder;
getAnimationDuration(button: upstream14.MaterialButton): upstream15.Duration;
getConstraints(button: upstream14.MaterialButton): upstream8.BoxConstraints;
getMaterialTapTargetSize(button: upstream14.MaterialButton): upstream7.MaterialTapTargetSize;
copyWith(options?: {alignedDropdown?: boolean | null | undefined; buttonColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; colorScheme?: Readonly<{ "__flaxBound:package:material_ui/src/color_scheme.dart::ColorScheme": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; disabledColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; focusColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; height?: number | null | undefined; highlightColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; hoverColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; layoutBehavior?: upstream4.ButtonBarLayoutBehavior | null | undefined; materialTapTargetSize?: upstream7.MaterialTapTargetSize | null | undefined; minWidth?: number | null | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; splashColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; textTheme?: upstream1.ButtonTextTheme | null | undefined}): ButtonThemeData;
}
defineObject("flax.material/material#type:ButtonThemeData", ["minWidth","height","textTheme","layoutBehavior","constraints","padding","shape","alignedDropdown","colorScheme"], [], _flaxBindingMethods("flax.material/material#type:ButtonThemeData", "object", {"getBrightness":_flaxMemberParameters27,"getTextTheme":_flaxMemberParameters27,"getDisabledTextColor":_flaxMemberParameters27,"getDisabledFillColor":_flaxMemberParameters27,"getFillColor":_flaxMemberParameters27,"getTextColor":_flaxMemberParameters27,"getSplashColor":_flaxMemberParameters27,"getFocusColor":_flaxMemberParameters27,"getHoverColor":_flaxMemberParameters27,"getHighlightColor":_flaxMemberParameters27,"getElevation":_flaxMemberParameters27,"getFocusElevation":_flaxMemberParameters27,"getHoverElevation":_flaxMemberParameters27,"getHighlightElevation":_flaxMemberParameters27,"getDisabledElevation":_flaxMemberParameters27,"getPadding":_flaxMemberParameters27,"getShape":_flaxMemberParameters27,"getAnimationDuration":_flaxMemberParameters27,"getConstraints":_flaxMemberParameters27,"getMaterialTapTargetSize":_flaxMemberParameters27,"copyWith":_flaxMemberParameters28}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _ButtonThemeDataFactory(options: { textTheme?: upstream1.ButtonTextTheme | undefined; minWidth?: number | undefined; height?: number | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; layoutBehavior?: upstream4.ButtonBarLayoutBehavior | undefined; alignedDropdown?: boolean | undefined; buttonColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; disabledColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; focusColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; hoverColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; highlightColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; splashColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; colorScheme?: Readonly<{ "__flaxBound:package:material_ui/src/color_scheme.dart::ColorScheme": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; materialTapTargetSize?: upstream7.MaterialTapTargetSize | null | undefined } = {}): ButtonThemeData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:ButtonThemeData", "", [{"name":"textTheme"},{"name":"minWidth"},{"name":"height"},{"name":"padding"},{"name":"shape"},{"name":"layoutBehavior"},{"name":"alignedDropdown"},{"name":"buttonColor"},{"name":"disabledColor"},{"name":"focusColor"},{"name":"hoverColor"},{"name":"highlightColor"},{"name":"splashColor"},{"name":"colorScheme"},{"name":"materialTapTargetSize"}], [], options) as ButtonThemeData;
}
const _ButtonThemeDataProxy = {type: "flax.material/material#type:ButtonThemeData", parameters: _flaxMemberParameters29, constructors: {"": _flaxMemberParameters29}, methods: {"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters3,"toDiagnosticsNode":_flaxMemberParameters4,"debugFillProperties":_flaxMemberParameters5,"getBrightness":_flaxMemberParameters27,"getTextTheme":_flaxMemberParameters27,"getDisabledTextColor":_flaxMemberParameters27,"getDisabledFillColor":_flaxMemberParameters27,"getFillColor":_flaxMemberParameters27,"getTextColor":_flaxMemberParameters27,"getSplashColor":_flaxMemberParameters27,"getFocusColor":_flaxMemberParameters27,"getHoverColor":_flaxMemberParameters27,"getHighlightColor":_flaxMemberParameters27,"getElevation":_flaxMemberParameters27,"getFocusElevation":_flaxMemberParameters27,"getHoverElevation":_flaxMemberParameters27,"getHighlightElevation":_flaxMemberParameters27,"getDisabledElevation":_flaxMemberParameters27,"getPadding":_flaxMemberParameters27,"getShape":_flaxMemberParameters27,"getAnimationDuration":_flaxMemberParameters27,"getConstraints":_flaxMemberParameters27,"getMaterialTapTargetSize":_flaxMemberParameters27,"copyWith":_flaxMemberParameters28}, getters: ["minWidth","height","textTheme","layoutBehavior","constraints","padding","shape","alignedDropdown","colorScheme"], setters: [], contextMembers: [], superMembers: ["get:minWidth","get:height","get:textTheme","get:layoutBehavior","get:constraints","get:padding","get:shape","get:alignedDropdown","get:colorScheme","toStringShort","toString","toDiagnosticsNode","debugFillProperties","getBrightness","getTextTheme","getDisabledTextColor","getDisabledFillColor","getFillColor","getTextColor","getSplashColor","getFocusColor","getHoverColor","getHighlightColor","getElevation","getFocusElevation","getHoverElevation","getHighlightElevation","getDisabledElevation","getPadding","getShape","getAnimationDuration","getConstraints","getMaterialTapTargetSize","copyWith"]} as const;
export interface _ButtonThemeDataNative extends ButtonThemeData {
readonly [_flaxDartTypeValue]: _ButtonThemeDataNative;

toStringShort(): string;
toString(options?: {minLevel?: upstream9.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream11.DiagnosticsTreeStyle | null | undefined}): upstream10.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
getBrightness(button: upstream14.MaterialButton): upstream13.Brightness;
getTextTheme(button: upstream14.MaterialButton): upstream1.ButtonTextTheme;
getDisabledTextColor(button: upstream14.MaterialButton): upstream5.Color;
getDisabledFillColor(button: upstream14.MaterialButton): upstream5.Color;
getFillColor(button: upstream14.MaterialButton): upstream5.Color | null;
getTextColor(button: upstream14.MaterialButton): upstream5.Color;
getSplashColor(button: upstream14.MaterialButton): upstream5.Color;
getFocusColor(button: upstream14.MaterialButton): upstream5.Color;
getHoverColor(button: upstream14.MaterialButton): upstream5.Color;
getHighlightColor(button: upstream14.MaterialButton): upstream5.Color;
getElevation(button: upstream14.MaterialButton): number;
getFocusElevation(button: upstream14.MaterialButton): number;
getHoverElevation(button: upstream14.MaterialButton): number;
getHighlightElevation(button: upstream14.MaterialButton): number;
getDisabledElevation(button: upstream14.MaterialButton): number;
getPadding(button: upstream14.MaterialButton): upstream2.EdgeInsetsGeometry;
getShape(button: upstream14.MaterialButton): upstream3.ShapeBorder;
getAnimationDuration(button: upstream14.MaterialButton): upstream15.Duration;
getConstraints(button: upstream14.MaterialButton): upstream8.BoxConstraints;
getMaterialTapTargetSize(button: upstream14.MaterialButton): upstream7.MaterialTapTargetSize;
copyWith(options?: {textTheme?: upstream1.ButtonTextTheme | null | undefined; layoutBehavior?: upstream4.ButtonBarLayoutBehavior | null | undefined; minWidth?: number | null | undefined; height?: number | null | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; alignedDropdown?: boolean | null | undefined; buttonColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; disabledColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; focusColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; hoverColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; highlightColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; splashColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; colorScheme?: Readonly<{ "__flaxBound:package:material_ui/src/color_scheme.dart::ColorScheme": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; materialTapTargetSize?: upstream7.MaterialTapTargetSize | null | undefined}): ButtonThemeData;
get minWidth(): number;
get height(): number;
get textTheme(): upstream1.ButtonTextTheme;
get layoutBehavior(): upstream4.ButtonBarLayoutBehavior;
get constraints(): upstream8.BoxConstraints;
get padding(): upstream2.EdgeInsetsGeometry;
get shape(): upstream3.ShapeBorder;
get alignedDropdown(): boolean;
get colorScheme(): upstream6.ColorScheme | null;
}
export abstract class _ButtonThemeDataNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ButtonThemeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ButtonThemeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:ButtonThemeData", readonly [], false];
constructor(options?: {textTheme?: upstream1.ButtonTextTheme | undefined; minWidth?: number | undefined; height?: number | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; layoutBehavior?: upstream4.ButtonBarLayoutBehavior | undefined; alignedDropdown?: boolean | undefined; buttonColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; disabledColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; focusColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; hoverColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; highlightColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; splashColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; colorScheme?: Readonly<{ "__flaxBound:package:material_ui/src/color_scheme.dart::ColorScheme": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; materialTapTargetSize?: upstream7.MaterialTapTargetSize | null | undefined}) { super(_ButtonThemeDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ButtonThemeDataNative.prototype, _ButtonThemeDataProxy);
export namespace _ButtonThemeDataFactory { export function implement(args: [options?: {textTheme?: upstream1.ButtonTextTheme | undefined; minWidth?: number | undefined; height?: number | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; layoutBehavior?: upstream4.ButtonBarLayoutBehavior | undefined; alignedDropdown?: boolean | undefined; buttonColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; disabledColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; focusColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; hoverColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; highlightColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; splashColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; colorScheme?: Readonly<{ "__flaxBound:package:material_ui/src/color_scheme.dart::ColorScheme": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; materialTapTargetSize?: upstream7.MaterialTapTargetSize | null | undefined}], implementation: {}): ButtonThemeData {
return constructProxy(_ButtonThemeDataProxy, args, implementation) as ButtonThemeData; } }
const _ButtonThemeDataBinding = _flaxProxyFactory(_ButtonThemeDataFactory, _ButtonThemeDataNative) as unknown as typeof _ButtonThemeDataFactory & (new(options?: {textTheme?: upstream1.ButtonTextTheme | undefined; minWidth?: number | undefined; height?: number | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; layoutBehavior?: upstream4.ButtonBarLayoutBehavior | undefined; alignedDropdown?: boolean | undefined; buttonColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; disabledColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; focusColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; hoverColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; highlightColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; splashColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; colorScheme?: Readonly<{ "__flaxBound:package:material_ui/src/color_scheme.dart::ColorScheme": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; materialTapTargetSize?: upstream7.MaterialTapTargetSize | null | undefined}) => _ButtonThemeDataNative);
export const ButtonThemeData: typeof _ButtonThemeDataBinding & _FlaxInstanceType<ButtonThemeData> & _FlaxDartType<ButtonThemeData, readonly ["class", "flax.material/material#type:ButtonThemeData", readonly [], false]> = _flaxBindInstanceType<ButtonThemeData, typeof _ButtonThemeDataBinding>(_ButtonThemeDataBinding, "flax.material/material#type:ButtonThemeData", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _ButtonThemeDataBinding & _FlaxInstanceType<ButtonThemeData> & _FlaxDartType<ButtonThemeData, readonly ["class", "flax.material/material#type:ButtonThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "minWidth" | "height" | "textTheme" | "layoutBehavior" | "constraints" | "padding" | "shape" | "alignedDropdown" | "colorScheme" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "getBrightness" | "getTextTheme" | "getDisabledTextColor" | "getDisabledFillColor" | "getFillColor" | "getTextColor" | "getSplashColor" | "getFocusColor" | "getHoverColor" | "getHighlightColor" | "getElevation" | "getFocusElevation" | "getHoverElevation" | "getHighlightElevation" | "getDisabledElevation" | "getPadding" | "getShape" | "getAnimationDuration" | "getConstraints" | "getMaterialTapTargetSize" | "copyWith" | "__flaxBound:package:material_ui/src/button_theme.dart::ButtonThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

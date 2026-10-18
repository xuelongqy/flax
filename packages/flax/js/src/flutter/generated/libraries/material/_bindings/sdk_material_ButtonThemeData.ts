// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/material/_bindings/sdk_material_ButtonTextTheme';
import '@flax/flutter/material/_bindings/sdk_material_ButtonTextTheme';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream4 from '@flax/flutter/material/_bindings/sdk_material_ButtonBarLayoutBehavior';
import '@flax/flutter/material/_bindings/sdk_material_ButtonBarLayoutBehavior';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream6 from '@flax/flutter/material/_bindings/sdk_material_ColorScheme';
import '@flax/flutter/material/_bindings/sdk_material_ColorScheme';
import type * as upstream7 from '@flax/flutter/material/_bindings/sdk_material_MaterialTapTargetSize';
import '@flax/flutter/material/_bindings/sdk_material_MaterialTapTargetSize';
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
import type * as upstream14 from '@flax/flutter/material/_bindings/sdk_material_MaterialButton';
import type * as upstream15 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
const _flaxMemberParameters0 = [{"name":"button","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"alignedDropdown","required":false,"positional":false},{"name":"buttonColor","required":false,"positional":false},{"name":"colorScheme","required":false,"positional":false},{"name":"disabledColor","required":false,"positional":false},{"name":"focusColor","required":false,"positional":false},{"name":"height","required":false,"positional":false},{"name":"highlightColor","required":false,"positional":false},{"name":"hoverColor","required":false,"positional":false},{"name":"layoutBehavior","required":false,"positional":false},{"name":"materialTapTargetSize","required":false,"positional":false},{"name":"minWidth","required":false,"positional":false},{"name":"padding","required":false,"positional":false},{"name":"shape","required":false,"positional":false},{"name":"splashColor","required":false,"positional":false},{"name":"textTheme","required":false,"positional":false}] as const;
const _flaxMemberParameters2 = [] as const;
const _flaxMemberParameters3 = [{"name":"minLevel","required":false,"positional":false}] as const;
const _flaxMemberParameters4 = [{"name":"name","required":false,"positional":false},{"name":"style","required":false,"positional":false}] as const;
const _flaxMemberParameters5 = [{"name":"properties","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ButtonThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/material/button_theme.dart::ButtonThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __ButtonThemeData: unique symbol;
readonly [_flaxDartTypeValue]: ButtonThemeData;

}
defineObject("flax.core/sdk_material#type:ButtonThemeData", ["minWidth","height","textTheme","layoutBehavior","constraints","padding","shape","alignedDropdown","colorScheme"], [], _flaxBindingMethods("flax.core/sdk_material#type:ButtonThemeData", "object", {"getBrightness":_flaxMemberParameters0,"getTextTheme":_flaxMemberParameters0,"getDisabledTextColor":_flaxMemberParameters0,"getDisabledFillColor":_flaxMemberParameters0,"getFillColor":_flaxMemberParameters0,"getTextColor":_flaxMemberParameters0,"getSplashColor":_flaxMemberParameters0,"getFocusColor":_flaxMemberParameters0,"getHoverColor":_flaxMemberParameters0,"getHighlightColor":_flaxMemberParameters0,"getElevation":_flaxMemberParameters0,"getFocusElevation":_flaxMemberParameters0,"getHoverElevation":_flaxMemberParameters0,"getHighlightElevation":_flaxMemberParameters0,"getDisabledElevation":_flaxMemberParameters0,"getPadding":_flaxMemberParameters0,"getShape":_flaxMemberParameters0,"getAnimationDuration":_flaxMemberParameters0,"getConstraints":_flaxMemberParameters0,"getMaterialTapTargetSize":_flaxMemberParameters0,"copyWith":_flaxMemberParameters1}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
const _ButtonThemeDataProxy = {type: "flax.core/sdk_material#type:ButtonThemeData", parameters: [{"name":"textTheme","required":false,"positional":false},{"name":"minWidth","required":false,"positional":false},{"name":"height","required":false,"positional":false},{"name":"padding","required":false,"positional":false},{"name":"shape","required":false,"positional":false},{"name":"layoutBehavior","required":false,"positional":false},{"name":"alignedDropdown","required":false,"positional":false},{"name":"buttonColor","required":false,"positional":false},{"name":"disabledColor","required":false,"positional":false},{"name":"focusColor","required":false,"positional":false},{"name":"hoverColor","required":false,"positional":false},{"name":"highlightColor","required":false,"positional":false},{"name":"splashColor","required":false,"positional":false},{"name":"colorScheme","required":false,"positional":false},{"name":"materialTapTargetSize","required":false,"positional":false}], constructors: {"":[{"name":"textTheme","required":false,"positional":false},{"name":"minWidth","required":false,"positional":false},{"name":"height","required":false,"positional":false},{"name":"padding","required":false,"positional":false},{"name":"shape","required":false,"positional":false},{"name":"layoutBehavior","required":false,"positional":false},{"name":"alignedDropdown","required":false,"positional":false},{"name":"buttonColor","required":false,"positional":false},{"name":"disabledColor","required":false,"positional":false},{"name":"focusColor","required":false,"positional":false},{"name":"hoverColor","required":false,"positional":false},{"name":"highlightColor","required":false,"positional":false},{"name":"splashColor","required":false,"positional":false},{"name":"colorScheme","required":false,"positional":false},{"name":"materialTapTargetSize","required":false,"positional":false}]}, methods: {"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters3,"toDiagnosticsNode":_flaxMemberParameters4,"debugFillProperties":_flaxMemberParameters5,"getBrightness":_flaxMemberParameters0,"getTextTheme":_flaxMemberParameters0,"getDisabledTextColor":_flaxMemberParameters0,"getDisabledFillColor":_flaxMemberParameters0,"getFillColor":_flaxMemberParameters0,"getTextColor":_flaxMemberParameters0,"getSplashColor":_flaxMemberParameters0,"getFocusColor":_flaxMemberParameters0,"getHoverColor":_flaxMemberParameters0,"getHighlightColor":_flaxMemberParameters0,"getElevation":_flaxMemberParameters0,"getFocusElevation":_flaxMemberParameters0,"getHoverElevation":_flaxMemberParameters0,"getHighlightElevation":_flaxMemberParameters0,"getDisabledElevation":_flaxMemberParameters0,"getPadding":_flaxMemberParameters0,"getShape":_flaxMemberParameters0,"getAnimationDuration":_flaxMemberParameters0,"getConstraints":_flaxMemberParameters0,"getMaterialTapTargetSize":_flaxMemberParameters0,"copyWith":_flaxMemberParameters1}, getters: ["minWidth","height","textTheme","layoutBehavior","constraints","padding","shape","alignedDropdown","colorScheme"], setters: [], contextMembers: [], superMembers: ["get:minWidth","get:height","get:textTheme","get:layoutBehavior","get:constraints","get:padding","get:shape","get:alignedDropdown","get:colorScheme","toStringShort","toString","toDiagnosticsNode","debugFillProperties","getBrightness","getTextTheme","getDisabledTextColor","getDisabledFillColor","getFillColor","getTextColor","getSplashColor","getFocusColor","getHoverColor","getHighlightColor","getElevation","getFocusElevation","getHoverElevation","getHighlightElevation","getDisabledElevation","getPadding","getShape","getAnimationDuration","getConstraints","getMaterialTapTargetSize","copyWith"]} as const;
export interface ButtonThemeData {
readonly [_flaxDartTypeValue]: ButtonThemeData;

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
copyWith(options?: {textTheme?: upstream1.ButtonTextTheme | null | undefined; layoutBehavior?: upstream4.ButtonBarLayoutBehavior | null | undefined; minWidth?: number | null | undefined; height?: number | null | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; alignedDropdown?: boolean | null | undefined; buttonColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; disabledColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; focusColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; hoverColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; highlightColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; splashColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; colorScheme?: Readonly<{ "__flaxBound:package:flutter/src/material/color_scheme.dart::ColorScheme": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; materialTapTargetSize?: upstream7.MaterialTapTargetSize | null | undefined}): ButtonThemeData;
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
export abstract class ButtonThemeData extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ButtonThemeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ButtonThemeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:ButtonThemeData", readonly [], false];
constructor(options?: {textTheme?: upstream1.ButtonTextTheme | undefined; minWidth?: number | undefined; height?: number | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; layoutBehavior?: upstream4.ButtonBarLayoutBehavior | undefined; alignedDropdown?: boolean | undefined; buttonColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; disabledColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; focusColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; hoverColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; highlightColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; splashColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; colorScheme?: Readonly<{ "__flaxBound:package:flutter/src/material/color_scheme.dart::ColorScheme": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; materialTapTargetSize?: upstream7.MaterialTapTargetSize | null | undefined}) { super(_ButtonThemeDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ButtonThemeData.prototype, _ButtonThemeDataProxy);
export namespace ButtonThemeData { export function implement(args: [options?: {textTheme?: upstream1.ButtonTextTheme | undefined; minWidth?: number | undefined; height?: number | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; layoutBehavior?: upstream4.ButtonBarLayoutBehavior | undefined; alignedDropdown?: boolean | undefined; buttonColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; disabledColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; focusColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; hoverColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; highlightColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; splashColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; colorScheme?: Readonly<{ "__flaxBound:package:flutter/src/material/color_scheme.dart::ColorScheme": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; materialTapTargetSize?: upstream7.MaterialTapTargetSize | null | undefined}], implementation: {}): ButtonThemeData {
return constructProxy(_ButtonThemeDataProxy, args, implementation) as ButtonThemeData; } }
_flaxBindInstanceType<ButtonThemeData, typeof ButtonThemeData>(ButtonThemeData, "flax.core/sdk_material#type:ButtonThemeData", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "minWidth" | "height" | "textTheme" | "layoutBehavior" | "constraints" | "padding" | "shape" | "alignedDropdown" | "colorScheme" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "getBrightness" | "getTextTheme" | "getDisabledTextColor" | "getDisabledFillColor" | "getFillColor" | "getTextColor" | "getSplashColor" | "getFocusColor" | "getHoverColor" | "getHighlightColor" | "getElevation" | "getFocusElevation" | "getHoverElevation" | "getHighlightElevation" | "getDisabledElevation" | "getPadding" | "getShape" | "getAnimationDuration" | "getConstraints" | "getMaterialTapTargetSize" | "copyWith" | "__flaxBound:package:flutter/src/material/button_theme.dart::ButtonThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

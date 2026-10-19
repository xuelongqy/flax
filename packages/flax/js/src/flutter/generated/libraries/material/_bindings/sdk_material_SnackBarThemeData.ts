// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream4 from '@flax/flutter/material/_bindings/sdk_material_SnackBarBehavior';
import '@flax/flutter/material/_bindings/sdk_material_SnackBarBehavior';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_DismissDirection';
import '@flax/flutter/widgets/_bindings/sdk_widgets_DismissDirection';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters286, _flaxMemberParameters287, _flaxMemberParameters2, _flaxMemberParameters3, _flaxMemberParameters4, _flaxMemberParameters5 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SnackBarThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/material/snack_bar_theme.dart::SnackBarThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __SnackBarThemeData: unique symbol;
readonly [_flaxDartTypeValue]: SnackBarThemeData;

}
defineObject("flax.core/sdk_material#type:SnackBarThemeData", ["backgroundColor","actionTextColor","disabledActionTextColor","contentTextStyle","elevation","shape","behavior","width","insetPadding","showCloseIcon","closeIconColor","actionOverflowThreshold","actionBackgroundColor","disabledActionBackgroundColor","dismissDirection"], [], _flaxBindingMethods("flax.core/sdk_material#type:SnackBarThemeData", "object", {"copyWith":_flaxMemberParameters286}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
const _SnackBarThemeDataProxy = {type: "flax.core/sdk_material#type:SnackBarThemeData", parameters: _flaxMemberParameters287, constructors: {"": _flaxMemberParameters287}, methods: {"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters3,"toDiagnosticsNode":_flaxMemberParameters4,"debugFillProperties":_flaxMemberParameters5,"copyWith":_flaxMemberParameters286}, getters: ["backgroundColor","actionTextColor","disabledActionTextColor","contentTextStyle","elevation","shape","behavior","width","insetPadding","showCloseIcon","closeIconColor","actionOverflowThreshold","actionBackgroundColor","disabledActionBackgroundColor","dismissDirection"], setters: [], contextMembers: [], superMembers: ["get:backgroundColor","get:actionTextColor","get:disabledActionTextColor","get:contentTextStyle","get:elevation","get:shape","get:behavior","get:width","get:insetPadding","get:showCloseIcon","get:closeIconColor","get:actionOverflowThreshold","get:actionBackgroundColor","get:disabledActionBackgroundColor","get:dismissDirection","toStringShort","toString","toDiagnosticsNode","debugFillProperties","copyWith"]} as const;
export interface SnackBarThemeData {
readonly [_flaxDartTypeValue]: SnackBarThemeData;

toStringShort(): string;
toString(options?: {minLevel?: upstream7.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream9.DiagnosticsTreeStyle | null | undefined}): upstream8.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; actionTextColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; disabledActionTextColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; contentTextStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; elevation?: number | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; behavior?: upstream4.SnackBarBehavior | null | undefined; width?: number | null | undefined; insetPadding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; showCloseIcon?: boolean | null | undefined; closeIconColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; actionOverflowThreshold?: number | null | undefined; actionBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; disabledActionBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; dismissDirection?: upstream6.DismissDirection | null | undefined}): SnackBarThemeData;
get backgroundColor(): upstream1.Color | null;
get actionTextColor(): upstream1.Color | null;
get disabledActionTextColor(): upstream1.Color | null;
get contentTextStyle(): upstream2.TextStyle | null;
get elevation(): number | null;
get shape(): upstream3.ShapeBorder | null;
get behavior(): upstream4.SnackBarBehavior | null;
get width(): number | null;
get insetPadding(): upstream5.EdgeInsets | null;
get showCloseIcon(): boolean | null;
get closeIconColor(): upstream1.Color | null;
get actionOverflowThreshold(): number | null;
get actionBackgroundColor(): upstream1.Color | null;
get disabledActionBackgroundColor(): upstream1.Color | null;
get dismissDirection(): upstream6.DismissDirection | null;
}
export abstract class SnackBarThemeData extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SnackBarThemeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SnackBarThemeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:SnackBarThemeData", readonly [], false];
constructor(options?: {backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; actionTextColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; disabledActionTextColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; contentTextStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; elevation?: number | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; behavior?: upstream4.SnackBarBehavior | null | undefined; width?: number | null | undefined; insetPadding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; showCloseIcon?: boolean | null | undefined; closeIconColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; actionOverflowThreshold?: number | null | undefined; actionBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; disabledActionBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; dismissDirection?: upstream6.DismissDirection | null | undefined}) { super(_SnackBarThemeDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(SnackBarThemeData.prototype, _SnackBarThemeDataProxy);
export namespace SnackBarThemeData { export function implement(args: [options?: {backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; actionTextColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; disabledActionTextColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; contentTextStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; elevation?: number | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; behavior?: upstream4.SnackBarBehavior | null | undefined; width?: number | null | undefined; insetPadding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; showCloseIcon?: boolean | null | undefined; closeIconColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; actionOverflowThreshold?: number | null | undefined; actionBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; disabledActionBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; dismissDirection?: upstream6.DismissDirection | null | undefined}], implementation: {}): SnackBarThemeData {
return constructProxy(_SnackBarThemeDataProxy, args, implementation) as SnackBarThemeData; } }
export namespace SnackBarThemeData { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/material/snack_bar_theme.dart::SnackBarThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/material/snack_bar_theme.dart::SnackBarThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): SnackBarThemeData {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_material#function:SnackBarThemeData.lerp", [a, b, t]);
return _flaxResult as SnackBarThemeData;
} }
_flaxBindInstanceType<SnackBarThemeData, typeof SnackBarThemeData>(SnackBarThemeData, "flax.core/sdk_material#type:SnackBarThemeData", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "backgroundColor" | "actionTextColor" | "disabledActionTextColor" | "contentTextStyle" | "elevation" | "shape" | "behavior" | "width" | "insetPadding" | "showCloseIcon" | "closeIconColor" | "actionOverflowThreshold" | "actionBackgroundColor" | "disabledActionBackgroundColor" | "dismissDirection" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:flutter/src/material/snack_bar_theme.dart::SnackBarThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedTheme';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedTheme';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedWidget';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_ProxyWidget';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_Decoration';
import '@flax/flutter/painting/_bindings/flutter_Decoration';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream6 from '@flax/material-ui/_bindings/material_TabBarIndicatorSize';
import '@flax/material-ui/_bindings/material_TabBarIndicatorSize';
import type * as upstream7 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream8 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream10 from '@flax/material-ui/_bindings/material_InteractiveInkFeatureFactory';
import '@flax/material-ui/_bindings/material_InteractiveInkFeatureFactory';
import type * as upstream11 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream12 from '@flax/material-ui/_bindings/material_TabAlignment';
import '@flax/material-ui/_bindings/material_TabAlignment';
import type * as upstream13 from '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import type * as upstream14 from '@flax/material-ui/_bindings/material_TabIndicatorAnimation';
import '@flax/material-ui/_bindings/material_TabIndicatorAnimation';
import type * as upstream15 from '@flax/material-ui/_bindings/material_TabBarThemeData';
import '@flax/material-ui/_bindings/material_TabBarThemeData';
import type * as upstream16 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream17 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import type * as upstream18 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream19 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream20 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream21 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { _flaxMemberParameters303, _flaxMemberParameters0 } from "@flax/material-ui/_bindings/material.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TabBarTheme extends _FlaxDartWidget, Omit<upstream0.InheritedTheme, _flaxOwnMembers0>, Omit<upstream1.InheritedWidget, _flaxOwnMembers0 | keyof upstream0.InheritedTheme>, Omit<upstream2.ProxyWidget, _flaxOwnMembers0 | keyof upstream0.InheritedTheme | keyof upstream1.InheritedWidget>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.InheritedTheme | keyof upstream1.InheritedWidget | keyof upstream2.ProxyWidget>, Readonly<{ "__flaxBound:package:material_ui/src/tab_bar_theme.dart::TabBarTheme": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/inherited_theme.dart::InheritedTheme": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __TabBarTheme: unique symbol;
readonly [_flaxDartTypeValue]: TabBarTheme;

readonly indicator: upstream4.Decoration | null;
readonly indicatorColor: upstream5.Color | null;
readonly indicatorSize: upstream6.TabBarIndicatorSize | null;
readonly dividerColor: upstream5.Color | null;
readonly dividerHeight: number | null;
readonly labelColor: upstream5.Color | null;
readonly labelPadding: upstream7.EdgeInsetsGeometry | null;
readonly labelStyle: upstream8.TextStyle | null;
readonly unselectedLabelColor: upstream5.Color | null;
readonly unselectedLabelStyle: upstream8.TextStyle | null;
readonly overlayColor: upstream9.WidgetStateProperty<upstream5.Color | null> | null;
readonly splashFactory: upstream10.InteractiveInkFeatureFactory | null;
readonly mouseCursor: upstream9.WidgetStateProperty<upstream11.MouseCursor | null> | null;
readonly tabAlignment: upstream12.TabAlignment | null;
readonly textScaler: upstream13.TextScaler | null;
readonly indicatorAnimation: upstream14.TabIndicatorAnimation | null;
readonly data: upstream15.TabBarThemeData;
readonly child: Widget;
readonly key: upstream3.Key | null;
copyWith(options?: {dividerColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; dividerHeight?: number | null | undefined; indicator?: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; indicatorAnimation?: upstream14.TabIndicatorAnimation | null | undefined; indicatorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; indicatorSize?: upstream6.TabBarIndicatorSize | null | undefined; labelColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; labelPadding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; labelStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; mouseCursor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream11.MouseCursor | null] }> | null | undefined; overlayColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.Color | null] }> | null | undefined; splashFactory?: Readonly<{ "__flaxBound:package:material_ui/src/ink_well.dart::InteractiveInkFeatureFactory": readonly [] }> | null | undefined; tabAlignment?: upstream12.TabAlignment | null | undefined; textScaler?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [] }> | null | undefined; unselectedLabelColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; unselectedLabelStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}): TabBarTheme;
updateShouldNotify(oldWidget: TabBarTheme): boolean;
wrap(context: upstream16.BuildContext, child: Widget): Widget;
createElement(): upstream17.InheritedElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream19.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream19.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream21.DiagnosticsTreeStyle | null | undefined}): upstream20.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream20.DiagnosticsNode>;
}
defineObject("flax.material/material#type:TabBarTheme", ["indicator","indicatorColor","indicatorSize","dividerColor","dividerHeight","labelColor","labelPadding","labelStyle","unselectedLabelColor","unselectedLabelStyle","overlayColor","splashFactory","mouseCursor","tabAlignment","textScaler","indicatorAnimation","data","child","key"], [], _flaxBindingMethods("flax.material/material#type:TabBarTheme", "object", {"copyWith":_flaxMemberParameters303,"updateShouldNotify":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_widgets#type:InheritedTheme");
export function _TabBarThemeFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; indicator?: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; indicatorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; indicatorSize?: upstream6.TabBarIndicatorSize | null | undefined; dividerColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; dividerHeight?: number | null | undefined; labelColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; labelPadding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; labelStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; unselectedLabelColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; unselectedLabelStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; overlayColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.Color | null] }> | null | undefined; splashFactory?: Readonly<{ "__flaxBound:package:material_ui/src/ink_well.dart::InteractiveInkFeatureFactory": readonly [] }> | null | undefined; mouseCursor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream11.MouseCursor | null] }> | null | undefined; tabAlignment?: upstream12.TabAlignment | null | undefined; textScaler?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [] }> | null | undefined; indicatorAnimation?: upstream14.TabIndicatorAnimation | null | undefined; data?: Readonly<{ "__flaxBound:package:material_ui/src/tab_bar_theme.dart::TabBarThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; child?: Widget | null | undefined } = {}): TabBarTheme {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:TabBarTheme", "", [{"name":"key"},{"name":"indicator"},{"name":"indicatorColor"},{"name":"indicatorSize"},{"name":"dividerColor"},{"name":"dividerHeight"},{"name":"labelColor"},{"name":"labelPadding"},{"name":"labelStyle"},{"name":"unselectedLabelColor"},{"name":"unselectedLabelStyle"},{"name":"overlayColor"},{"name":"splashFactory"},{"name":"mouseCursor"},{"name":"tabAlignment"},{"name":"textScaler"},{"name":"indicatorAnimation"},{"name":"data"},{"name":"child"}], [], options) as TabBarTheme;
}
export namespace _TabBarThemeFactory { export function of(context: upstream16.BuildContext): upstream15.TabBarThemeData {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:TabBarTheme.of", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream15.TabBarThemeData;
} }
export namespace _TabBarThemeFactory { export function lerp(a: TabBarTheme, b: TabBarTheme, t: number): TabBarTheme {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:TabBarTheme.lerp", [a, b, t]);
return _flaxResult as TabBarTheme;
} }
export const TabBarTheme: typeof _TabBarThemeFactory & _FlaxInstanceType<TabBarTheme> & _FlaxDartType<TabBarTheme, readonly ["class", "flax.material/material#type:TabBarTheme", readonly [], false]> = _flaxBindInstanceType<TabBarTheme, typeof _TabBarThemeFactory>(_TabBarThemeFactory, "flax.material/material#type:TabBarTheme", ["flax.core/sdk_widgets#type:InheritedTheme","flax.core/sdk_widgets#type:InheritedWidget","flax.core/sdk_widgets#type:ProxyWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _TabBarThemeFactory & _FlaxInstanceType<TabBarTheme> & _FlaxDartType<TabBarTheme, readonly ["class", "flax.material/material#type:TabBarTheme", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "indicator" | "indicatorColor" | "indicatorSize" | "dividerColor" | "dividerHeight" | "labelColor" | "labelPadding" | "labelStyle" | "unselectedLabelColor" | "unselectedLabelStyle" | "overlayColor" | "splashFactory" | "mouseCursor" | "tabAlignment" | "textScaler" | "indicatorAnimation" | "data" | "child" | "key" | "copyWith" | "updateShouldNotify" | "wrap" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/tab_bar_theme.dart::TabBarTheme" | "__flaxBound:package:flutter/src/widgets/inherited_theme.dart::InheritedTheme" | "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

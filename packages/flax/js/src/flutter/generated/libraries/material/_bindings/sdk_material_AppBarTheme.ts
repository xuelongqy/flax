// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedTheme';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedTheme';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedWidget';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_ProxyWidget';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_IconThemeData';
import '@flax/flutter/widgets/_bindings/sdk_widgets_IconThemeData';
import type * as upstream7 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream8 from '@flax/flutter/services/_bindings/sdk_services_SystemUiOverlayStyle';
import '@flax/flutter/services/_bindings/sdk_services_SystemUiOverlayStyle';
import type * as upstream9 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream10 from '@flax/flutter/material/_bindings/sdk_material_AppBarThemeData';
import '@flax/flutter/material/_bindings/sdk_material_AppBarThemeData';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
const _flaxMemberParameters0 = [{"name":"actionsIconTheme"},{"name":"actionsPadding"},{"name":"backgroundColor"},{"name":"centerTitle"},{"name":"color"},{"name":"elevation"},{"name":"foregroundColor"},{"name":"iconTheme"},{"name":"leadingWidth"},{"name":"scrolledUnderElevation"},{"name":"shadowColor"},{"name":"shape"},{"name":"surfaceTintColor"},{"name":"systemOverlayStyle"},{"name":"titleSpacing"},{"name":"titleTextStyle"},{"name":"toolbarHeight"},{"name":"toolbarTextStyle"}] as const;
const _flaxMemberParameters1 = [{"name":"oldWidget","required":true,"positional":true}] as const;
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AppBarTheme extends _FlaxDartWidget, Omit<upstream0.InheritedTheme, _flaxOwnMembers0>, Omit<upstream1.InheritedWidget, _flaxOwnMembers0 | keyof upstream0.InheritedTheme>, Omit<upstream2.ProxyWidget, _flaxOwnMembers0 | keyof upstream0.InheritedTheme | keyof upstream1.InheritedWidget>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.InheritedTheme | keyof upstream1.InheritedWidget | keyof upstream2.ProxyWidget>, Readonly<{ "__flaxBound:package:flutter/src/material/app_bar_theme.dart::AppBarTheme": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/inherited_theme.dart::InheritedTheme": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __AppBarTheme: unique symbol;
readonly [_flaxDartTypeValue]: AppBarTheme;

readonly backgroundColor: upstream4.Color | null;
readonly foregroundColor: upstream4.Color | null;
readonly elevation: number | null;
readonly scrolledUnderElevation: number | null;
readonly shadowColor: upstream4.Color | null;
readonly surfaceTintColor: upstream4.Color | null;
readonly shape: upstream5.ShapeBorder | null;
readonly iconTheme: upstream6.IconThemeData | null;
readonly actionsIconTheme: upstream6.IconThemeData | null;
readonly centerTitle: boolean | null;
readonly titleSpacing: number | null;
readonly leadingWidth: number | null;
readonly toolbarHeight: number | null;
readonly toolbarTextStyle: upstream7.TextStyle | null;
readonly titleTextStyle: upstream7.TextStyle | null;
readonly systemOverlayStyle: upstream8.SystemUiOverlayStyle | null;
readonly actionsPadding: upstream9.EdgeInsetsGeometry | null;
readonly data: upstream10.AppBarThemeData;
readonly child: Widget;
readonly key: upstream3.Key | null;
copyWith(options?: {actionsIconTheme?: Readonly<{ "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; actionsPadding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; centerTitle?: boolean | null | undefined; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; elevation?: number | null | undefined; foregroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; iconTheme?: Readonly<{ "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; leadingWidth?: number | null | undefined; scrolledUnderElevation?: number | null | undefined; shadowColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; surfaceTintColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; systemOverlayStyle?: Readonly<{ "__flaxBound:package:flutter/src/services/system_chrome.dart::SystemUiOverlayStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; titleSpacing?: number | null | undefined; titleTextStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; toolbarHeight?: number | null | undefined; toolbarTextStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}): AppBarTheme;
updateShouldNotify(oldWidget: AppBarTheme): boolean;
wrap(context: upstream11.BuildContext, child: Widget): Widget;
createElement(): upstream12.InheritedElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream14.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream14.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream16.DiagnosticsTreeStyle | null | undefined}): upstream15.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream15.DiagnosticsNode>;
}
defineObject("flax.core/sdk_material#type:AppBarTheme", ["backgroundColor","foregroundColor","elevation","scrolledUnderElevation","shadowColor","surfaceTintColor","shape","iconTheme","actionsIconTheme","centerTitle","titleSpacing","leadingWidth","toolbarHeight","toolbarTextStyle","titleTextStyle","systemOverlayStyle","actionsPadding","data","child","key"], [], _flaxBindingMethods("flax.core/sdk_material#type:AppBarTheme", "object", {"copyWith":_flaxMemberParameters0,"updateShouldNotify":_flaxMemberParameters1}, {}), [], undefined, "flax.core/sdk_widgets#type:InheritedTheme");
export function _AppBarThemeFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; foregroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; elevation?: number | null | undefined; scrolledUnderElevation?: number | null | undefined; shadowColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; surfaceTintColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; iconTheme?: Readonly<{ "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; actionsIconTheme?: Readonly<{ "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; centerTitle?: boolean | null | undefined; titleSpacing?: number | null | undefined; leadingWidth?: number | null | undefined; toolbarHeight?: number | null | undefined; toolbarTextStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; titleTextStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; systemOverlayStyle?: Readonly<{ "__flaxBound:package:flutter/src/services/system_chrome.dart::SystemUiOverlayStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; actionsPadding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; data?: Readonly<{ "__flaxBound:package:flutter/src/material/app_bar_theme.dart::AppBarThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; child?: Widget | null | undefined } = {}): AppBarTheme {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:AppBarTheme", "", [{"name":"key"},{"name":"color"},{"name":"backgroundColor"},{"name":"foregroundColor"},{"name":"elevation"},{"name":"scrolledUnderElevation"},{"name":"shadowColor"},{"name":"surfaceTintColor"},{"name":"shape"},{"name":"iconTheme"},{"name":"actionsIconTheme"},{"name":"centerTitle"},{"name":"titleSpacing"},{"name":"leadingWidth"},{"name":"toolbarHeight"},{"name":"toolbarTextStyle"},{"name":"titleTextStyle"},{"name":"systemOverlayStyle"},{"name":"actionsPadding"},{"name":"data"},{"name":"child"}], [], options) as AppBarTheme;
}
export namespace _AppBarThemeFactory { export function of(context: upstream11.BuildContext): upstream10.AppBarThemeData {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_material#function:AppBarTheme.of", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream10.AppBarThemeData;
} }
export namespace _AppBarThemeFactory { export function lerp(a: AppBarTheme | null, b: AppBarTheme | null, t: number): AppBarTheme {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_material#function:AppBarTheme.lerp", [a, b, t]);
return _flaxResult as AppBarTheme;
} }
export const AppBarTheme: typeof _AppBarThemeFactory & _FlaxInstanceType<AppBarTheme> & _FlaxDartType<AppBarTheme, readonly ["class", "flax.core/sdk_material#type:AppBarTheme", readonly [], false]> = _flaxBindInstanceType<AppBarTheme, typeof _AppBarThemeFactory>(_AppBarThemeFactory, "flax.core/sdk_material#type:AppBarTheme", ["flax.core/sdk_widgets#type:InheritedTheme","flax.core/sdk_widgets#type:InheritedWidget","flax.core/sdk_widgets#type:ProxyWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _AppBarThemeFactory & _FlaxInstanceType<AppBarTheme> & _FlaxDartType<AppBarTheme, readonly ["class", "flax.core/sdk_material#type:AppBarTheme", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "backgroundColor" | "foregroundColor" | "elevation" | "scrolledUnderElevation" | "shadowColor" | "surfaceTintColor" | "shape" | "iconTheme" | "actionsIconTheme" | "centerTitle" | "titleSpacing" | "leadingWidth" | "toolbarHeight" | "toolbarTextStyle" | "titleTextStyle" | "systemOverlayStyle" | "actionsPadding" | "data" | "child" | "key" | "copyWith" | "updateShouldNotify" | "wrap" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/material/app_bar_theme.dart::AppBarTheme" | "__flaxBound:package:flutter/src/widgets/inherited_theme.dart::InheritedTheme" | "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

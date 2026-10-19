// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import type * as upstream2 from '@flax/material-ui/_bindings/material_VisualDensity';
import '@flax/material-ui/_bindings/material_VisualDensity';
import type * as upstream3 from '@flax/material-ui/_bindings/material_ColorScheme';
import '@flax/material-ui/_bindings/material_ColorScheme';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_IconThemeData';
import '@flax/flutter/widgets/_bindings/sdk_widgets_IconThemeData';
import type * as upstream7 from '@flax/material-ui/_bindings/material_TextTheme';
import '@flax/material-ui/_bindings/material_TextTheme';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"appBarTheme"},{"name":"applyElevationOverlayColor"},{"name":"brightness"},{"name":"canvasColor"},{"name":"cardColor"},{"name":"colorScheme"},{"name":"dialogBackgroundColor"},{"name":"disabledColor"},{"name":"dividerColor"},{"name":"focusColor"},{"name":"highlightColor"},{"name":"hintColor"},{"name":"hoverColor"},{"name":"iconTheme"},{"name":"indicatorColor"},{"name":"inputDecorationTheme"},{"name":"platform"},{"name":"primaryColor"},{"name":"primaryColorDark"},{"name":"primaryColorLight"},{"name":"primaryIconTheme"},{"name":"primaryTextTheme"},{"name":"scaffoldBackgroundColor"},{"name":"secondaryHeaderColor"},{"name":"shadowColor"},{"name":"splashColor"},{"name":"textTheme"},{"name":"unselectedWidgetColor"},{"name":"useMaterial3"},{"name":"visualDensity"}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __ThemeData: unique symbol;
readonly [_flaxDartTypeValue]: ThemeData;
readonly [_flaxDartMethodCases]?: {extension: _FlaxSignature0;};
readonly brightness: upstream4.Brightness;
readonly applyElevationOverlayColor: boolean;
readonly platform: upstream1.TargetPlatform;
readonly useMaterial3: boolean;
readonly visualDensity: upstream2.VisualDensity;
readonly canvasColor: upstream5.Color;
readonly cardColor: upstream5.Color;
readonly colorScheme: upstream3.ColorScheme;
readonly disabledColor: upstream5.Color;
readonly dividerColor: upstream5.Color;
readonly focusColor: upstream5.Color;
readonly highlightColor: upstream5.Color;
readonly hintColor: upstream5.Color;
readonly hoverColor: upstream5.Color;
readonly primaryColor: upstream5.Color;
readonly primaryColorDark: upstream5.Color;
readonly primaryColorLight: upstream5.Color;
readonly scaffoldBackgroundColor: upstream5.Color;
readonly secondaryHeaderColor: upstream5.Color;
readonly shadowColor: upstream5.Color;
readonly splashColor: upstream5.Color;
readonly unselectedWidgetColor: upstream5.Color;
readonly iconTheme: upstream6.IconThemeData;
readonly primaryIconTheme: upstream6.IconThemeData;
readonly primaryTextTheme: upstream7.TextTheme;
readonly textTheme: upstream7.TextTheme;
readonly dialogBackgroundColor: upstream5.Color;
readonly indicatorColor: upstream5.Color;
toStringShort(): string;
toString(options?: {minLevel?: upstream8.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream10.DiagnosticsTreeStyle | null | undefined}): upstream9.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
extension<T extends unknown | null = unknown | null>(): _FlaxDartOutput<T> | null;
copyWith(options?: {appBarTheme?: unknown | null | undefined; applyElevationOverlayColor?: boolean | null | undefined; brightness?: upstream4.Brightness | null | undefined; canvasColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; cardColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; colorScheme?: Readonly<{ "__flaxBound:package:material_ui/src/color_scheme.dart::ColorScheme": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; dialogBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; disabledColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; dividerColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; focusColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; highlightColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; hintColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; hoverColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; iconTheme?: Readonly<{ "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; indicatorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; inputDecorationTheme?: unknown | null | undefined; platform?: upstream1.TargetPlatform | null | undefined; primaryColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; primaryColorDark?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; primaryColorLight?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; primaryIconTheme?: Readonly<{ "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; primaryTextTheme?: Readonly<{ "__flaxBound:package:material_ui/src/text_theme.dart::TextTheme": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; scaffoldBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; secondaryHeaderColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; shadowColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; splashColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; textTheme?: Readonly<{ "__flaxBound:package:material_ui/src/text_theme.dart::TextTheme": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; unselectedWidgetColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; useMaterial3?: boolean | null | undefined; visualDensity?: Readonly<{ "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}): ThemeData;
}
defineObject("flax.material/material#type:ThemeData", ["brightness","applyElevationOverlayColor","platform","useMaterial3","visualDensity","canvasColor","cardColor","colorScheme","disabledColor","dividerColor","focusColor","highlightColor","hintColor","hoverColor","primaryColor","primaryColorDark","primaryColorLight","scaffoldBackgroundColor","secondaryHeaderColor","shadowColor","splashColor","unselectedWidgetColor","iconTheme","primaryIconTheme","primaryTextTheme","textTheme","dialogBackgroundColor","indicatorColor"], [], _flaxBindingMethods("flax.material/material#type:ThemeData", "object", {"extension":_flaxMemberParameters0,"copyWith":_flaxMemberParameters1}, {"extension":{"id":"extension","parameters":[]}}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _ThemeDataFactory(options: { applyElevationOverlayColor?: boolean | null | undefined; inputDecorationTheme?: unknown | null | undefined; platform?: upstream1.TargetPlatform | null | undefined; useMaterial3?: boolean | null | undefined; useSystemColors?: boolean | null | undefined; visualDensity?: Readonly<{ "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; colorScheme?: Readonly<{ "__flaxBound:package:material_ui/src/color_scheme.dart::ColorScheme": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; brightness?: upstream4.Brightness | null | undefined; colorSchemeSeed?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; canvasColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; cardColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; disabledColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; dividerColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; focusColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; highlightColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; hintColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; hoverColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; primaryColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; primaryColorDark?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; primaryColorLight?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; scaffoldBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; secondaryHeaderColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; shadowColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; splashColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; unselectedWidgetColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; fontFamily?: string | null | undefined; fontFamilyFallback?: DartListInput<string, string> | null | undefined; package?: string | null | undefined; iconTheme?: Readonly<{ "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; primaryIconTheme?: Readonly<{ "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; primaryTextTheme?: Readonly<{ "__flaxBound:package:material_ui/src/text_theme.dart::TextTheme": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; textTheme?: Readonly<{ "__flaxBound:package:material_ui/src/text_theme.dart::TextTheme": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; appBarTheme?: unknown | null | undefined; dialogBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; indicatorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined } = {}): ThemeData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:ThemeData", "", [{"name":"applyElevationOverlayColor"},{"name":"inputDecorationTheme"},{"name":"platform"},{"name":"useMaterial3"},{"name":"useSystemColors"},{"name":"visualDensity"},{"name":"colorScheme"},{"name":"brightness"},{"name":"colorSchemeSeed"},{"name":"canvasColor"},{"name":"cardColor"},{"name":"disabledColor"},{"name":"dividerColor"},{"name":"focusColor"},{"name":"highlightColor"},{"name":"hintColor"},{"name":"hoverColor"},{"name":"primaryColor"},{"name":"primaryColorDark"},{"name":"primaryColorLight"},{"name":"scaffoldBackgroundColor"},{"name":"secondaryHeaderColor"},{"name":"shadowColor"},{"name":"splashColor"},{"name":"unselectedWidgetColor"},{"name":"fontFamily"},{"name":"fontFamilyFallback"},{"name":"package"},{"name":"iconTheme"},{"name":"primaryIconTheme"},{"name":"primaryTextTheme"},{"name":"textTheme"},{"name":"appBarTheme"},{"name":"dialogBackgroundColor"},{"name":"indicatorColor"}], [], options) as ThemeData;
}
export namespace _ThemeDataFactory {
export function from(options: { colorScheme: Readonly<{ "__flaxBound:package:material_ui/src/color_scheme.dart::ColorScheme": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; textTheme?: Readonly<{ "__flaxBound:package:material_ui/src/text_theme.dart::TextTheme": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; useMaterial3?: boolean | null | undefined }): ThemeData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:ThemeData", "from", [{"name":"colorScheme","required":true},{"name":"textTheme"},{"name":"useMaterial3"}], [], options) as ThemeData;
}
}
export namespace _ThemeDataFactory {
export function light(options: { useMaterial3?: boolean | null | undefined } = {}): ThemeData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:ThemeData", "light", [{"name":"useMaterial3"}], [], options) as ThemeData;
}
}
export namespace _ThemeDataFactory {
export function dark(options: { useMaterial3?: boolean | null | undefined } = {}): ThemeData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:ThemeData", "dark", [{"name":"useMaterial3"}], [], options) as ThemeData;
}
}
export namespace _ThemeDataFactory {
export function fallback(options: { useMaterial3?: boolean | null | undefined } = {}): ThemeData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:ThemeData", "fallback", [{"name":"useMaterial3"}], [], options) as ThemeData;
}
}
export namespace _ThemeDataFactory { export function localize(baseTheme: Readonly<{ "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, localTextGeometry: Readonly<{ "__flaxBound:package:material_ui/src/text_theme.dart::TextTheme": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): ThemeData {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:ThemeData.localize", [baseTheme, localTextGeometry]);
return _flaxResult as ThemeData;
} }
export namespace _ThemeDataFactory { export function estimateBrightnessForColor(color: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>): upstream4.Brightness {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:ThemeData.estimateBrightnessForColor", [color]);
return _flaxResult as upstream4.Brightness;
} }
export namespace _ThemeDataFactory { export function lerp(a: Readonly<{ "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, b: Readonly<{ "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, t: number): ThemeData {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:ThemeData.lerp", [a, b, t]);
return _flaxResult as ThemeData;
} }
export const ThemeData: typeof _ThemeDataFactory & _FlaxInstanceType<ThemeData> & _FlaxDartType<ThemeData, readonly ["class", "flax.material/material#type:ThemeData", readonly [], false]> = _flaxBindInstanceType<ThemeData, typeof _ThemeDataFactory>(_ThemeDataFactory, "flax.material/material#type:ThemeData", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _ThemeDataFactory & _FlaxInstanceType<ThemeData> & _FlaxDartType<ThemeData, readonly ["class", "flax.material/material#type:ThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "brightness" | "applyElevationOverlayColor" | "platform" | "useMaterial3" | "visualDensity" | "canvasColor" | "cardColor" | "colorScheme" | "disabledColor" | "dividerColor" | "focusColor" | "highlightColor" | "hintColor" | "hoverColor" | "primaryColor" | "primaryColorDark" | "primaryColorLight" | "scaffoldBackgroundColor" | "secondaryHeaderColor" | "shadowColor" | "splashColor" | "unselectedWidgetColor" | "iconTheme" | "primaryIconTheme" | "primaryTextTheme" | "textTheme" | "dialogBackgroundColor" | "indicatorColor" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "extension" | "copyWith" | "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => _Selected0 | null : never : never; }

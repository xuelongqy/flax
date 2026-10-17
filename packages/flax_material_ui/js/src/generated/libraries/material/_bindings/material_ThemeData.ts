// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"appBarTheme","required":false,"positional":false},{"name":"applyElevationOverlayColor","required":false,"positional":false},{"name":"brightness","required":false,"positional":false},{"name":"canvasColor","required":false,"positional":false},{"name":"cardColor","required":false,"positional":false},{"name":"colorScheme","required":false,"positional":false},{"name":"dialogBackgroundColor","required":false,"positional":false},{"name":"disabledColor","required":false,"positional":false},{"name":"dividerColor","required":false,"positional":false},{"name":"focusColor","required":false,"positional":false},{"name":"highlightColor","required":false,"positional":false},{"name":"hintColor","required":false,"positional":false},{"name":"hoverColor","required":false,"positional":false},{"name":"indicatorColor","required":false,"positional":false},{"name":"inputDecorationTheme","required":false,"positional":false},{"name":"platform","required":false,"positional":false},{"name":"primaryColor","required":false,"positional":false},{"name":"primaryColorDark","required":false,"positional":false},{"name":"primaryColorLight","required":false,"positional":false},{"name":"primaryTextTheme","required":false,"positional":false},{"name":"scaffoldBackgroundColor","required":false,"positional":false},{"name":"secondaryHeaderColor","required":false,"positional":false},{"name":"shadowColor","required":false,"positional":false},{"name":"splashColor","required":false,"positional":false},{"name":"textTheme","required":false,"positional":false},{"name":"unselectedWidgetColor","required":false,"positional":false},{"name":"useMaterial3","required":false,"positional":false},{"name":"visualDensity","required":false,"positional":false}] as const;
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import type * as upstream1 from '@flax/flutter/material/_bindings/material_VisualDensity';
import '@flax/flutter/material/_bindings/material_VisualDensity';
import type * as upstream2 from '@flax/flutter/material/_bindings/material_ColorScheme';
import '@flax/flutter/material/_bindings/material_ColorScheme';
import type * as upstream3 from '@flax/flutter/material/_bindings/material_Brightness';
import '@flax/flutter/material/_bindings/material_Brightness';
import type * as upstream4 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream5 from '@flax/flutter/material/_bindings/material_TextTheme';
import '@flax/flutter/material/_bindings/material_TextTheme';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ThemeData extends Readonly<{ "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __ThemeData: unique symbol;
readonly [_flaxDartMethodCases]?: {extension: _FlaxSignature0;};
readonly brightness: upstream3.Brightness;
readonly applyElevationOverlayColor: boolean;
readonly platform: upstream0.TargetPlatform;
readonly useMaterial3: boolean;
readonly visualDensity: upstream1.VisualDensity;
readonly canvasColor: upstream4.Color;
readonly cardColor: upstream4.Color;
readonly colorScheme: upstream2.ColorScheme;
readonly disabledColor: upstream4.Color;
readonly dividerColor: upstream4.Color;
readonly focusColor: upstream4.Color;
readonly highlightColor: upstream4.Color;
readonly hintColor: upstream4.Color;
readonly hoverColor: upstream4.Color;
readonly primaryColor: upstream4.Color;
readonly primaryColorDark: upstream4.Color;
readonly primaryColorLight: upstream4.Color;
readonly scaffoldBackgroundColor: upstream4.Color;
readonly secondaryHeaderColor: upstream4.Color;
readonly shadowColor: upstream4.Color;
readonly splashColor: upstream4.Color;
readonly unselectedWidgetColor: upstream4.Color;
readonly primaryTextTheme: upstream5.TextTheme;
readonly textTheme: upstream5.TextTheme;
readonly dialogBackgroundColor: upstream4.Color;
readonly indicatorColor: upstream4.Color;
extension<T extends unknown | null = unknown | null>(): _FlaxDartOutput<T> | null;
copyWith(options?: {appBarTheme?: unknown | null | undefined; applyElevationOverlayColor?: boolean | null | undefined; brightness?: upstream3.Brightness | null | undefined; canvasColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; cardColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; colorScheme?: Readonly<{ "__flaxBound:package:material_ui/src/color_scheme.dart::ColorScheme": readonly [] }> | null | undefined; dialogBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; disabledColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; dividerColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; focusColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; highlightColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; hintColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; hoverColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; indicatorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; inputDecorationTheme?: unknown | null | undefined; platform?: upstream0.TargetPlatform | null | undefined; primaryColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; primaryColorDark?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; primaryColorLight?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; primaryTextTheme?: Readonly<{ "__flaxBound:package:material_ui/src/text_theme.dart::TextTheme": readonly [] }> | null | undefined; scaffoldBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; secondaryHeaderColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; shadowColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; splashColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; textTheme?: Readonly<{ "__flaxBound:package:material_ui/src/text_theme.dart::TextTheme": readonly [] }> | null | undefined; unselectedWidgetColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; useMaterial3?: boolean | null | undefined; visualDensity?: Readonly<{ "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [] }> | null | undefined}): ThemeData;
toStringShort(): string;
}
defineObject("flax.material/material#type:ThemeData", ["brightness","applyElevationOverlayColor","platform","useMaterial3","visualDensity","canvasColor","cardColor","colorScheme","disabledColor","dividerColor","focusColor","highlightColor","hintColor","hoverColor","primaryColor","primaryColorDark","primaryColorLight","scaffoldBackgroundColor","secondaryHeaderColor","shadowColor","splashColor","unselectedWidgetColor","primaryTextTheme","textTheme","dialogBackgroundColor","indicatorColor"], [], _flaxBindingMethods("flax.material/material#type:ThemeData", "object", {"extension":_flaxMemberParameters0,"copyWith":_flaxMemberParameters1,"toStringShort":_flaxMemberParameters0}, {"extension":{"id":"extension","parameters":[]}}), []);
export function _ThemeDataFactory(options: { applyElevationOverlayColor?: boolean | null | undefined; inputDecorationTheme?: unknown | null | undefined; platform?: upstream0.TargetPlatform | null | undefined; useMaterial3?: boolean | null | undefined; useSystemColors?: boolean | null | undefined; visualDensity?: Readonly<{ "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [] }> | null | undefined; colorScheme?: Readonly<{ "__flaxBound:package:material_ui/src/color_scheme.dart::ColorScheme": readonly [] }> | null | undefined; brightness?: upstream3.Brightness | null | undefined; colorSchemeSeed?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; canvasColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; cardColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; disabledColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; dividerColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; focusColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; highlightColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; hintColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; hoverColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; primaryColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; primaryColorDark?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; primaryColorLight?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; scaffoldBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; secondaryHeaderColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; shadowColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; splashColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; unselectedWidgetColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; fontFamily?: string | null | undefined; fontFamilyFallback?: DartListInput<string, string> | null | undefined; package?: string | null | undefined; primaryTextTheme?: Readonly<{ "__flaxBound:package:material_ui/src/text_theme.dart::TextTheme": readonly [] }> | null | undefined; textTheme?: Readonly<{ "__flaxBound:package:material_ui/src/text_theme.dart::TextTheme": readonly [] }> | null | undefined; appBarTheme?: unknown | null | undefined; dialogBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; indicatorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined } = {}): ThemeData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:ThemeData", "", [{"name":"applyElevationOverlayColor","required":false,"positional":false},{"name":"inputDecorationTheme","required":false,"positional":false},{"name":"platform","required":false,"positional":false},{"name":"useMaterial3","required":false,"positional":false},{"name":"useSystemColors","required":false,"positional":false},{"name":"visualDensity","required":false,"positional":false},{"name":"colorScheme","required":false,"positional":false},{"name":"brightness","required":false,"positional":false},{"name":"colorSchemeSeed","required":false,"positional":false},{"name":"canvasColor","required":false,"positional":false},{"name":"cardColor","required":false,"positional":false},{"name":"disabledColor","required":false,"positional":false},{"name":"dividerColor","required":false,"positional":false},{"name":"focusColor","required":false,"positional":false},{"name":"highlightColor","required":false,"positional":false},{"name":"hintColor","required":false,"positional":false},{"name":"hoverColor","required":false,"positional":false},{"name":"primaryColor","required":false,"positional":false},{"name":"primaryColorDark","required":false,"positional":false},{"name":"primaryColorLight","required":false,"positional":false},{"name":"scaffoldBackgroundColor","required":false,"positional":false},{"name":"secondaryHeaderColor","required":false,"positional":false},{"name":"shadowColor","required":false,"positional":false},{"name":"splashColor","required":false,"positional":false},{"name":"unselectedWidgetColor","required":false,"positional":false},{"name":"fontFamily","required":false,"positional":false},{"name":"fontFamilyFallback","required":false,"positional":false},{"name":"package","required":false,"positional":false},{"name":"primaryTextTheme","required":false,"positional":false},{"name":"textTheme","required":false,"positional":false},{"name":"appBarTheme","required":false,"positional":false},{"name":"dialogBackgroundColor","required":false,"positional":false},{"name":"indicatorColor","required":false,"positional":false}], [], options) as ThemeData;
}
export namespace _ThemeDataFactory {
export function from(options: { colorScheme: Readonly<{ "__flaxBound:package:material_ui/src/color_scheme.dart::ColorScheme": readonly [] }>; textTheme?: Readonly<{ "__flaxBound:package:material_ui/src/text_theme.dart::TextTheme": readonly [] }> | null | undefined; useMaterial3?: boolean | null | undefined }): ThemeData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:ThemeData", "from", [{"name":"colorScheme","required":true,"positional":false},{"name":"textTheme","required":false,"positional":false},{"name":"useMaterial3","required":false,"positional":false}], [], options) as ThemeData;
}
}
export namespace _ThemeDataFactory {
export function light(options: { useMaterial3?: boolean | null | undefined } = {}): ThemeData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:ThemeData", "light", [{"name":"useMaterial3","required":false,"positional":false}], [], options) as ThemeData;
}
}
export namespace _ThemeDataFactory {
export function dark(options: { useMaterial3?: boolean | null | undefined } = {}): ThemeData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:ThemeData", "dark", [{"name":"useMaterial3","required":false,"positional":false}], [], options) as ThemeData;
}
}
export namespace _ThemeDataFactory {
export function fallback(options: { useMaterial3?: boolean | null | undefined } = {}): ThemeData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:ThemeData", "fallback", [{"name":"useMaterial3","required":false,"positional":false}], [], options) as ThemeData;
}
}
export namespace _ThemeDataFactory { export function localize(baseTheme: Readonly<{ "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData": readonly [] }>, localTextGeometry: Readonly<{ "__flaxBound:package:material_ui/src/text_theme.dart::TextTheme": readonly [] }>): ThemeData {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:ThemeData.localize", [baseTheme, localTextGeometry]);
return _flaxResult as ThemeData;
} }
export namespace _ThemeDataFactory { export function estimateBrightnessForColor(color: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>): upstream3.Brightness {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:ThemeData.estimateBrightnessForColor", [color]);
return _flaxResult as upstream3.Brightness;
} }
export namespace _ThemeDataFactory { export function lerp(a: Readonly<{ "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData": readonly [] }>, b: Readonly<{ "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData": readonly [] }>, t: number): ThemeData {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:ThemeData.lerp", [a, b, t]);
return _flaxResult as ThemeData;
} }
export const ThemeData: typeof _ThemeDataFactory & _FlaxInstanceType<ThemeData> & _FlaxDartType<ThemeData, readonly ["class", "flax.material/material#type:ThemeData", readonly [], false]> = _flaxBindInstanceType<ThemeData, typeof _ThemeDataFactory>(_ThemeDataFactory, "flax.material/material#type:ThemeData", ["dart:core::Object","package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]) as typeof _ThemeDataFactory & _FlaxInstanceType<ThemeData> & _FlaxDartType<ThemeData, readonly ["class", "flax.material/material#type:ThemeData", readonly [], false]>;
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => _Selected0 | null : never : never; }

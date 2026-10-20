// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/cupertino-ui/_bindings/cupertino_CupertinoThemeData';
import '@flax/cupertino-ui/_bindings/cupertino_CupertinoThemeData';
import type * as upstream1 from '@flax/cupertino-ui/_bindings/cupertino_NoDefaultCupertinoThemeData';
import '@flax/cupertino-ui/_bindings/cupertino_NoDefaultCupertinoThemeData';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/material-ui/_bindings/material_ThemeData';
import '@flax/material-ui/_bindings/material_ThemeData';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream6 from '@flax/cupertino-ui/_bindings/cupertino_CupertinoTextThemeData';
import '@flax/cupertino-ui/_bindings/cupertino_CupertinoTextThemeData';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters189, _flaxMemberParameters190, _flaxMemberParameters2, _flaxMemberParameters9, _flaxMemberParameters3, _flaxMemberParameters4, _flaxMemberParameters5 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MaterialBasedCupertinoThemeData extends Omit<upstream0.CupertinoThemeData, _flaxOwnMembers0>, Omit<upstream1.NoDefaultCupertinoThemeData, _flaxOwnMembers0 | keyof upstream0.CupertinoThemeData>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.CupertinoThemeData | keyof upstream1.NoDefaultCupertinoThemeData>, Readonly<{ "__flaxBound:package:material_ui/src/theme_data.dart::MaterialBasedCupertinoThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:cupertino_ui/src/theme.dart::CupertinoThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:cupertino_ui/src/theme.dart::NoDefaultCupertinoThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __MaterialBasedCupertinoThemeData: unique symbol;
readonly [_flaxDartTypeValue]: MaterialBasedCupertinoThemeData;

readonly brightness: upstream4.Brightness;
readonly primaryColor: upstream5.Color;
readonly primaryContrastingColor: upstream5.Color;
readonly textTheme: upstream6.CupertinoTextThemeData;
readonly barBackgroundColor: upstream5.Color;
readonly scaffoldBackgroundColor: upstream5.Color;
readonly selectionHandleColor: upstream5.Color;
readonly applyThemeToAll: boolean;
noDefault(): upstream1.NoDefaultCupertinoThemeData;
resolveFrom(context: upstream7.BuildContext): upstream0.CupertinoThemeData;
copyWith(options?: {applyThemeToAll?: boolean | null | undefined; barBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; brightness?: upstream4.Brightness | null | undefined; primaryColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; primaryContrastingColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; scaffoldBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; selectionHandleColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; textTheme?: Readonly<{ "__flaxBound:package:cupertino_ui/src/text_theme.dart::CupertinoTextThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}): MaterialBasedCupertinoThemeData;
toStringShort(): string;
toString(options?: {minLevel?: upstream8.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream10.DiagnosticsTreeStyle | null | undefined}): upstream9.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
}
defineObject("flax.material/material#type:MaterialBasedCupertinoThemeData", ["brightness","primaryColor","primaryContrastingColor","textTheme","barBackgroundColor","scaffoldBackgroundColor","selectionHandleColor","applyThemeToAll"], [], _flaxBindingMethods("flax.material/material#type:MaterialBasedCupertinoThemeData", "object", {"copyWith":_flaxMemberParameters189}, {}), [], undefined, "flax.cupertino/cupertino#type:CupertinoThemeData");
export function _MaterialBasedCupertinoThemeDataFactory(options: { materialTheme: Readonly<{ "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> }): MaterialBasedCupertinoThemeData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:MaterialBasedCupertinoThemeData", "", [{"name":"materialTheme","required":true}], [], options) as MaterialBasedCupertinoThemeData;
}
const _MaterialBasedCupertinoThemeDataProxy = {type: "flax.material/material#type:MaterialBasedCupertinoThemeData", parameters: _flaxMemberParameters190, constructors: {"": _flaxMemberParameters190}, methods: {"noDefault":_flaxMemberParameters2,"resolveFrom":_flaxMemberParameters9,"copyWith":_flaxMemberParameters189,"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters3,"toDiagnosticsNode":_flaxMemberParameters4,"debugFillProperties":_flaxMemberParameters5}, getters: ["brightness","primaryColor","primaryContrastingColor","scaffoldBackgroundColor","textTheme","barBackgroundColor","selectionHandleColor","applyThemeToAll"], setters: [], contextMembers: [], superMembers: ["get:brightness","get:primaryColor","get:primaryContrastingColor","get:scaffoldBackgroundColor","get:textTheme","get:barBackgroundColor","get:selectionHandleColor","get:applyThemeToAll","noDefault","resolveFrom","copyWith","toStringShort","toString","toDiagnosticsNode","debugFillProperties"]} as const;
export interface _MaterialBasedCupertinoThemeDataNative extends MaterialBasedCupertinoThemeData {
readonly [_flaxDartTypeValue]: _MaterialBasedCupertinoThemeDataNative;

noDefault(): upstream1.NoDefaultCupertinoThemeData;
resolveFrom(context: upstream7.BuildContext): upstream0.CupertinoThemeData;
copyWith(options?: {brightness?: upstream4.Brightness | null | undefined; primaryColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; primaryContrastingColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; textTheme?: Readonly<{ "__flaxBound:package:cupertino_ui/src/text_theme.dart::CupertinoTextThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; barBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; scaffoldBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; selectionHandleColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; applyThemeToAll?: boolean | null | undefined}): MaterialBasedCupertinoThemeData;
toStringShort(): string;
toString(options?: {minLevel?: upstream8.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream10.DiagnosticsTreeStyle | null | undefined}): upstream9.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
get brightness(): upstream4.Brightness;
get primaryColor(): upstream5.Color;
get primaryContrastingColor(): upstream5.Color;
get scaffoldBackgroundColor(): upstream5.Color;
get textTheme(): upstream6.CupertinoTextThemeData;
get barBackgroundColor(): upstream5.Color;
get selectionHandleColor(): upstream5.Color;
get applyThemeToAll(): boolean;
}
export abstract class _MaterialBasedCupertinoThemeDataNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaterialBasedCupertinoThemeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MaterialBasedCupertinoThemeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:MaterialBasedCupertinoThemeData", readonly [], false];
constructor(options: {materialTheme: Readonly<{ "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>}) { super(_MaterialBasedCupertinoThemeDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_MaterialBasedCupertinoThemeDataNative.prototype, _MaterialBasedCupertinoThemeDataProxy);
export namespace _MaterialBasedCupertinoThemeDataFactory { export function implement(args: [options: {materialTheme: Readonly<{ "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>}], implementation: {}): MaterialBasedCupertinoThemeData {
return constructProxy(_MaterialBasedCupertinoThemeDataProxy, args, implementation) as MaterialBasedCupertinoThemeData; } }
const _MaterialBasedCupertinoThemeDataBinding = _flaxProxyFactory(_MaterialBasedCupertinoThemeDataFactory, _MaterialBasedCupertinoThemeDataNative) as unknown as typeof _MaterialBasedCupertinoThemeDataFactory & (new(options: {materialTheme: Readonly<{ "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>}) => _MaterialBasedCupertinoThemeDataNative);
export const MaterialBasedCupertinoThemeData: typeof _MaterialBasedCupertinoThemeDataBinding & _FlaxInstanceType<MaterialBasedCupertinoThemeData> & _FlaxDartType<MaterialBasedCupertinoThemeData, readonly ["class", "flax.material/material#type:MaterialBasedCupertinoThemeData", readonly [], false]> = _flaxBindInstanceType<MaterialBasedCupertinoThemeData, typeof _MaterialBasedCupertinoThemeDataBinding>(_MaterialBasedCupertinoThemeDataBinding, "flax.material/material#type:MaterialBasedCupertinoThemeData", ["flax.cupertino/cupertino#type:CupertinoThemeData","flax.cupertino/cupertino#type:NoDefaultCupertinoThemeData","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _MaterialBasedCupertinoThemeDataBinding & _FlaxInstanceType<MaterialBasedCupertinoThemeData> & _FlaxDartType<MaterialBasedCupertinoThemeData, readonly ["class", "flax.material/material#type:MaterialBasedCupertinoThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "brightness" | "primaryColor" | "primaryContrastingColor" | "textTheme" | "barBackgroundColor" | "scaffoldBackgroundColor" | "selectionHandleColor" | "applyThemeToAll" | "noDefault" | "resolveFrom" | "copyWith" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:material_ui/src/theme_data.dart::MaterialBasedCupertinoThemeData" | "__flaxBound:package:cupertino_ui/src/theme.dart::CupertinoThemeData" | "__flaxBound:package:cupertino_ui/src/theme.dart::NoDefaultCupertinoThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

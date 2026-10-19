// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/cupertino/_bindings/sdk_cupertino_CupertinoThemeData';
import '@flax/flutter/cupertino/_bindings/sdk_cupertino_CupertinoThemeData';
import type * as upstream1 from '@flax/flutter/cupertino/_bindings/sdk_cupertino_NoDefaultCupertinoThemeData';
import '@flax/flutter/cupertino/_bindings/sdk_cupertino_NoDefaultCupertinoThemeData';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/material/_bindings/sdk_material_ThemeData';
import '@flax/flutter/material/_bindings/sdk_material_ThemeData';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream5 from '@flax/flutter/cupertino/_bindings/sdk_cupertino_CupertinoTextThemeData';
import '@flax/flutter/cupertino/_bindings/sdk_cupertino_CupertinoTextThemeData';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { _flaxMemberParameters185, _flaxMemberParameters186, _flaxMemberParameters2, _flaxMemberParameters9, _flaxMemberParameters5, _flaxMemberParameters4, _flaxMemberParameters3 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MaterialBasedCupertinoThemeData extends Omit<upstream0.CupertinoThemeData, _flaxOwnMembers0>, Omit<upstream1.NoDefaultCupertinoThemeData, _flaxOwnMembers0 | keyof upstream0.CupertinoThemeData>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.CupertinoThemeData | keyof upstream1.NoDefaultCupertinoThemeData>, Readonly<{ "__flaxBound:package:flutter/src/material/theme_data.dart::MaterialBasedCupertinoThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/cupertino/theme.dart::CupertinoThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/cupertino/theme.dart::NoDefaultCupertinoThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __MaterialBasedCupertinoThemeData: unique symbol;
readonly [_flaxDartTypeValue]: MaterialBasedCupertinoThemeData;

}
defineObject("flax.core/sdk_material#type:MaterialBasedCupertinoThemeData", ["primaryColor","primaryContrastingColor","textTheme","barBackgroundColor","scaffoldBackgroundColor","selectionHandleColor","applyThemeToAll","brightness"], [], _flaxBindingMethods("flax.core/sdk_material#type:MaterialBasedCupertinoThemeData", "object", {"copyWith":_flaxMemberParameters185}, {}), [], undefined, "flax.core/sdk_cupertino#type:CupertinoThemeData");
const _MaterialBasedCupertinoThemeDataProxy = {type: "flax.core/sdk_material#type:MaterialBasedCupertinoThemeData", parameters: _flaxMemberParameters186, constructors: {"": _flaxMemberParameters186}, methods: {"noDefault":_flaxMemberParameters2,"resolveFrom":_flaxMemberParameters9,"copyWith":_flaxMemberParameters185,"debugFillProperties":_flaxMemberParameters5,"toStringShort":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters4,"toString":_flaxMemberParameters3}, getters: ["brightness","primaryColor","primaryContrastingColor","scaffoldBackgroundColor","textTheme","barBackgroundColor","selectionHandleColor","applyThemeToAll"], setters: [], contextMembers: [], superMembers: ["get:brightness","get:primaryColor","get:primaryContrastingColor","get:scaffoldBackgroundColor","get:textTheme","get:barBackgroundColor","get:selectionHandleColor","get:applyThemeToAll","noDefault","resolveFrom","copyWith","debugFillProperties","toStringShort","toDiagnosticsNode","toString"]} as const;
export interface MaterialBasedCupertinoThemeData {
readonly [_flaxDartTypeValue]: MaterialBasedCupertinoThemeData;

noDefault(): upstream1.NoDefaultCupertinoThemeData;
resolveFrom(context: upstream7.BuildContext): upstream0.CupertinoThemeData;
copyWith(options?: {brightness?: upstream6.Brightness | null | undefined; primaryColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; primaryContrastingColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; textTheme?: Readonly<{ "__flaxBound:package:flutter/src/cupertino/text_theme.dart::CupertinoTextThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; barBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; scaffoldBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; selectionHandleColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; applyThemeToAll?: boolean | null | undefined}): MaterialBasedCupertinoThemeData;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream10.DiagnosticsTreeStyle | null | undefined}): upstream9.DiagnosticsNode;
toString(options?: {minLevel?: upstream11.DiagnosticLevel | undefined}): string;
get brightness(): upstream6.Brightness;
get primaryColor(): upstream4.Color;
get primaryContrastingColor(): upstream4.Color;
get scaffoldBackgroundColor(): upstream4.Color;
get textTheme(): upstream5.CupertinoTextThemeData;
get barBackgroundColor(): upstream4.Color;
get selectionHandleColor(): upstream4.Color;
get applyThemeToAll(): boolean;
}
export abstract class MaterialBasedCupertinoThemeData extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaterialBasedCupertinoThemeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MaterialBasedCupertinoThemeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:MaterialBasedCupertinoThemeData", readonly [], false];
constructor(options: {materialTheme: Readonly<{ "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>}) { super(_MaterialBasedCupertinoThemeDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(MaterialBasedCupertinoThemeData.prototype, _MaterialBasedCupertinoThemeDataProxy);
export namespace MaterialBasedCupertinoThemeData { export function implement(args: [options: {materialTheme: Readonly<{ "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>}], implementation: {}): MaterialBasedCupertinoThemeData {
return constructProxy(_MaterialBasedCupertinoThemeDataProxy, args, implementation) as MaterialBasedCupertinoThemeData; } }
_flaxBindInstanceType<MaterialBasedCupertinoThemeData, typeof MaterialBasedCupertinoThemeData>(MaterialBasedCupertinoThemeData, "flax.core/sdk_material#type:MaterialBasedCupertinoThemeData", ["flax.core/sdk_cupertino#type:CupertinoThemeData","flax.core/sdk_cupertino#type:NoDefaultCupertinoThemeData","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "primaryColor" | "primaryContrastingColor" | "textTheme" | "barBackgroundColor" | "scaffoldBackgroundColor" | "selectionHandleColor" | "applyThemeToAll" | "brightness" | "noDefault" | "resolveFrom" | "copyWith" | "debugFillProperties" | "toStringShort" | "toDiagnosticsNode" | "toString" | "__flaxBound:package:flutter/src/material/theme_data.dart::MaterialBasedCupertinoThemeData" | "__flaxBound:package:flutter/src/cupertino/theme.dart::CupertinoThemeData" | "__flaxBound:package:flutter/src/cupertino/theme.dart::NoDefaultCupertinoThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

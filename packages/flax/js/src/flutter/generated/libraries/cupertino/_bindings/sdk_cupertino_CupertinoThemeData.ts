// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/cupertino/_bindings/sdk_cupertino_NoDefaultCupertinoThemeData';
import '@flax/flutter/cupertino/_bindings/sdk_cupertino_NoDefaultCupertinoThemeData';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/cupertino/_bindings/sdk_cupertino_CupertinoTextThemeData';
import '@flax/flutter/cupertino/_bindings/sdk_cupertino_CupertinoTextThemeData';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters24, _flaxMemberParameters57, _flaxMemberParameters0, _flaxMemberParameters21, _flaxMemberParameters22, _flaxMemberParameters23, _flaxMemberParameters58 } from "@flax/flutter/cupertino/_bindings/sdk_cupertino.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/cupertino/_bindings/sdk_cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CupertinoThemeData extends Omit<upstream0.NoDefaultCupertinoThemeData, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.NoDefaultCupertinoThemeData>, Readonly<{ "__flaxBound:package:flutter/src/cupertino/theme.dart::CupertinoThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/cupertino/theme.dart::NoDefaultCupertinoThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __CupertinoThemeData: unique symbol;
readonly [_flaxDartTypeValue]: CupertinoThemeData;

}
defineObject("flax.core/sdk_cupertino#type:CupertinoThemeData", ["brightness","primaryColor","primaryContrastingColor","textTheme","barBackgroundColor","scaffoldBackgroundColor","selectionHandleColor","applyThemeToAll"], [], _flaxBindingMethods("flax.core/sdk_cupertino#type:CupertinoThemeData", "object", {"resolveFrom":_flaxMemberParameters24,"copyWith":_flaxMemberParameters57,"toStringShort":_flaxMemberParameters0,"toString":_flaxMemberParameters21,"toDiagnosticsNode":_flaxMemberParameters22,"debugFillProperties":_flaxMemberParameters23}, {}), [], undefined, "flax.core/sdk_cupertino#type:NoDefaultCupertinoThemeData");
const _CupertinoThemeDataProxy = {type: "flax.core/sdk_cupertino#type:CupertinoThemeData", parameters: _flaxMemberParameters58, constructors: {"": _flaxMemberParameters58}, methods: {"noDefault":_flaxMemberParameters0,"resolveFrom":_flaxMemberParameters24,"copyWith":_flaxMemberParameters57,"toStringShort":_flaxMemberParameters0,"toString":_flaxMemberParameters21,"toDiagnosticsNode":_flaxMemberParameters22,"debugFillProperties":_flaxMemberParameters23}, getters: ["primaryColor","primaryContrastingColor","textTheme","barBackgroundColor","scaffoldBackgroundColor","selectionHandleColor","applyThemeToAll","brightness"], setters: [], contextMembers: [], superMembers: ["get:primaryColor","get:primaryContrastingColor","get:textTheme","get:barBackgroundColor","get:scaffoldBackgroundColor","get:selectionHandleColor","get:applyThemeToAll","get:brightness","noDefault","resolveFrom","copyWith","toStringShort","toString","toDiagnosticsNode","debugFillProperties"]} as const;
export interface CupertinoThemeData {
readonly [_flaxDartTypeValue]: CupertinoThemeData;

noDefault(): upstream0.NoDefaultCupertinoThemeData;
resolveFrom(context: upstream5.BuildContext): CupertinoThemeData;
copyWith(options?: {brightness?: upstream2.Brightness | null | undefined; primaryColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; primaryContrastingColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; textTheme?: Readonly<{ "__flaxBound:package:flutter/src/cupertino/text_theme.dart::CupertinoTextThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; barBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; scaffoldBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; selectionHandleColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; applyThemeToAll?: boolean | null | undefined}): CupertinoThemeData;
toStringShort(): string;
toString(options?: {minLevel?: upstream6.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream8.DiagnosticsTreeStyle | null | undefined}): upstream7.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
get primaryColor(): upstream3.Color;
get primaryContrastingColor(): upstream3.Color;
get textTheme(): upstream4.CupertinoTextThemeData;
get barBackgroundColor(): upstream3.Color;
get scaffoldBackgroundColor(): upstream3.Color;
get selectionHandleColor(): upstream3.Color;
get applyThemeToAll(): boolean;
get brightness(): upstream2.Brightness | null;
}
export abstract class CupertinoThemeData extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CupertinoThemeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CupertinoThemeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_cupertino#type:CupertinoThemeData", readonly [], false];
constructor(options?: {brightness?: upstream2.Brightness | null | undefined; primaryColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; primaryContrastingColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; textTheme?: Readonly<{ "__flaxBound:package:flutter/src/cupertino/text_theme.dart::CupertinoTextThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; barBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; scaffoldBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; selectionHandleColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; applyThemeToAll?: boolean | null | undefined}) { super(_CupertinoThemeDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(CupertinoThemeData.prototype, _CupertinoThemeDataProxy);
export namespace CupertinoThemeData { export function implement(args: [options?: {brightness?: upstream2.Brightness | null | undefined; primaryColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; primaryContrastingColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; textTheme?: Readonly<{ "__flaxBound:package:flutter/src/cupertino/text_theme.dart::CupertinoTextThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; barBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; scaffoldBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; selectionHandleColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; applyThemeToAll?: boolean | null | undefined}], implementation: {}): CupertinoThemeData {
return constructProxy(_CupertinoThemeDataProxy, args, implementation) as CupertinoThemeData; } }
_flaxBindInstanceType<CupertinoThemeData, typeof CupertinoThemeData>(CupertinoThemeData, "flax.core/sdk_cupertino#type:CupertinoThemeData", ["flax.core/sdk_cupertino#type:NoDefaultCupertinoThemeData","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "brightness" | "primaryColor" | "primaryContrastingColor" | "textTheme" | "barBackgroundColor" | "scaffoldBackgroundColor" | "selectionHandleColor" | "applyThemeToAll" | "noDefault" | "resolveFrom" | "copyWith" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/cupertino/theme.dart::CupertinoThemeData" | "__flaxBound:package:flutter/src/cupertino/theme.dart::NoDefaultCupertinoThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

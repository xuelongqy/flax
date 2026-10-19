// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/cupertino/_bindings/sdk_cupertino_CupertinoTextThemeData';
import '@flax/flutter/cupertino/_bindings/sdk_cupertino_CupertinoTextThemeData';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { _flaxMemberParameters0, _flaxMemberParameters24, _flaxMemberParameters57, _flaxMemberParameters58 } from "@flax/flutter/cupertino/_bindings/sdk_cupertino.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/cupertino/_bindings/sdk_cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface NoDefaultCupertinoThemeData extends Readonly<{ "__flaxBound:package:flutter/src/cupertino/theme.dart::NoDefaultCupertinoThemeData": readonly [] }> { readonly __NoDefaultCupertinoThemeData: unique symbol;
readonly [_flaxDartTypeValue]: NoDefaultCupertinoThemeData;

}
defineObject("flax.core/sdk_cupertino#type:NoDefaultCupertinoThemeData", ["brightness","primaryColor","primaryContrastingColor","textTheme","barBackgroundColor","scaffoldBackgroundColor","selectionHandleColor","applyThemeToAll"], [], _flaxBindingMethods("flax.core/sdk_cupertino#type:NoDefaultCupertinoThemeData", "object", {"noDefault":_flaxMemberParameters0,"resolveFrom":_flaxMemberParameters24,"copyWith":_flaxMemberParameters57}, {}), []);
const _NoDefaultCupertinoThemeDataProxy = {type: "flax.core/sdk_cupertino#type:NoDefaultCupertinoThemeData", parameters: _flaxMemberParameters58, constructors: {"": _flaxMemberParameters58}, methods: {"noDefault":_flaxMemberParameters0,"resolveFrom":_flaxMemberParameters24,"copyWith":_flaxMemberParameters57}, getters: ["brightness","primaryColor","primaryContrastingColor","textTheme","barBackgroundColor","scaffoldBackgroundColor","selectionHandleColor","applyThemeToAll"], setters: [], contextMembers: [], superMembers: ["get:brightness","get:primaryColor","get:primaryContrastingColor","get:textTheme","get:barBackgroundColor","get:scaffoldBackgroundColor","get:selectionHandleColor","get:applyThemeToAll","noDefault","resolveFrom","copyWith"]} as const;
export interface NoDefaultCupertinoThemeData {
readonly [_flaxDartTypeValue]: NoDefaultCupertinoThemeData;

noDefault(): NoDefaultCupertinoThemeData;
resolveFrom(context: upstream3.BuildContext): NoDefaultCupertinoThemeData;
copyWith(options?: {brightness?: upstream0.Brightness | null | undefined; primaryColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; primaryContrastingColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; textTheme?: Readonly<{ "__flaxBound:package:flutter/src/cupertino/text_theme.dart::CupertinoTextThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; barBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; scaffoldBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; selectionHandleColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; applyThemeToAll?: boolean | null | undefined}): NoDefaultCupertinoThemeData;
get brightness(): upstream0.Brightness | null;
get primaryColor(): upstream1.Color | null;
get primaryContrastingColor(): upstream1.Color | null;
get textTheme(): upstream2.CupertinoTextThemeData | null;
get barBackgroundColor(): upstream1.Color | null;
get scaffoldBackgroundColor(): upstream1.Color | null;
get selectionHandleColor(): upstream1.Color | null;
get applyThemeToAll(): boolean | null;
}
export abstract class NoDefaultCupertinoThemeData extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<NoDefaultCupertinoThemeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: NoDefaultCupertinoThemeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_cupertino#type:NoDefaultCupertinoThemeData", readonly [], false];
constructor(options?: {brightness?: upstream0.Brightness | null | undefined; primaryColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; primaryContrastingColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; textTheme?: Readonly<{ "__flaxBound:package:flutter/src/cupertino/text_theme.dart::CupertinoTextThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; barBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; scaffoldBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; selectionHandleColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; applyThemeToAll?: boolean | null | undefined}) { super(_NoDefaultCupertinoThemeDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(NoDefaultCupertinoThemeData.prototype, _NoDefaultCupertinoThemeDataProxy);
export namespace NoDefaultCupertinoThemeData { export function implement(args: [options?: {brightness?: upstream0.Brightness | null | undefined; primaryColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; primaryContrastingColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; textTheme?: Readonly<{ "__flaxBound:package:flutter/src/cupertino/text_theme.dart::CupertinoTextThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; barBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; scaffoldBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; selectionHandleColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; applyThemeToAll?: boolean | null | undefined}], implementation: {}): NoDefaultCupertinoThemeData {
return constructProxy(_NoDefaultCupertinoThemeDataProxy, args, implementation) as NoDefaultCupertinoThemeData; } }
_flaxBindInstanceType<NoDefaultCupertinoThemeData, typeof NoDefaultCupertinoThemeData>(NoDefaultCupertinoThemeData, "flax.core/sdk_cupertino#type:NoDefaultCupertinoThemeData", ["dart:core::Object"]);

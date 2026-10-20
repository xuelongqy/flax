// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/cupertino-ui/_bindings/cupertino_CupertinoTextThemeData';
import '@flax/cupertino-ui/_bindings/cupertino_CupertinoTextThemeData';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { _flaxMemberParameters0, _flaxMemberParameters1, _flaxMemberParameters3 } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface NoDefaultCupertinoThemeData extends Readonly<{ "__flaxBound:package:cupertino_ui/src/theme.dart::NoDefaultCupertinoThemeData": readonly [] }> { readonly __NoDefaultCupertinoThemeData: unique symbol;
readonly [_flaxDartTypeValue]: NoDefaultCupertinoThemeData;

readonly brightness: upstream0.Brightness | null;
readonly primaryColor: upstream1.Color | null;
readonly primaryContrastingColor: upstream1.Color | null;
readonly textTheme: upstream2.CupertinoTextThemeData | null;
readonly barBackgroundColor: upstream1.Color | null;
readonly scaffoldBackgroundColor: upstream1.Color | null;
readonly selectionHandleColor: upstream1.Color | null;
readonly applyThemeToAll: boolean | null;
noDefault(): NoDefaultCupertinoThemeData;
resolveFrom(context: upstream3.BuildContext): NoDefaultCupertinoThemeData;
copyWith(options?: {applyThemeToAll?: boolean | null | undefined; barBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; brightness?: upstream0.Brightness | null | undefined; primaryColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; primaryContrastingColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; scaffoldBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; selectionHandleColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; textTheme?: Readonly<{ "__flaxBound:package:cupertino_ui/src/text_theme.dart::CupertinoTextThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}): NoDefaultCupertinoThemeData;
}
defineObject("flax.cupertino/cupertino#type:NoDefaultCupertinoThemeData", ["brightness","primaryColor","primaryContrastingColor","textTheme","barBackgroundColor","scaffoldBackgroundColor","selectionHandleColor","applyThemeToAll"], [], _flaxBindingMethods("flax.cupertino/cupertino#type:NoDefaultCupertinoThemeData", "object", {"noDefault":_flaxMemberParameters0,"resolveFrom":_flaxMemberParameters1,"copyWith":_flaxMemberParameters3}, {}), []);
export function _NoDefaultCupertinoThemeDataFactory(options: { brightness?: upstream0.Brightness | null | undefined; primaryColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; primaryContrastingColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; textTheme?: Readonly<{ "__flaxBound:package:cupertino_ui/src/text_theme.dart::CupertinoTextThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; barBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; scaffoldBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; selectionHandleColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; applyThemeToAll?: boolean | null | undefined } = {}): NoDefaultCupertinoThemeData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/cupertino#type:NoDefaultCupertinoThemeData", "", [{"name":"brightness"},{"name":"primaryColor"},{"name":"primaryContrastingColor"},{"name":"textTheme"},{"name":"barBackgroundColor"},{"name":"scaffoldBackgroundColor"},{"name":"selectionHandleColor"},{"name":"applyThemeToAll"}], [], options) as NoDefaultCupertinoThemeData;
}
export const NoDefaultCupertinoThemeData: typeof _NoDefaultCupertinoThemeDataFactory & _FlaxInstanceType<NoDefaultCupertinoThemeData> & _FlaxDartType<NoDefaultCupertinoThemeData, readonly ["class", "flax.cupertino/cupertino#type:NoDefaultCupertinoThemeData", readonly [], false]> = _flaxBindInstanceType<NoDefaultCupertinoThemeData, typeof _NoDefaultCupertinoThemeDataFactory>(_NoDefaultCupertinoThemeDataFactory, "flax.cupertino/cupertino#type:NoDefaultCupertinoThemeData", ["dart:core::Object"]) as typeof _NoDefaultCupertinoThemeDataFactory & _FlaxInstanceType<NoDefaultCupertinoThemeData> & _FlaxDartType<NoDefaultCupertinoThemeData, readonly ["class", "flax.cupertino/cupertino#type:NoDefaultCupertinoThemeData", readonly [], false]>;

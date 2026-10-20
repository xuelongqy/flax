// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/cupertino-ui/_bindings/cupertino_NoDefaultCupertinoThemeData';
import '@flax/cupertino-ui/_bindings/cupertino_NoDefaultCupertinoThemeData';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream4 from '@flax/cupertino-ui/_bindings/cupertino_CupertinoTextThemeData';
import '@flax/cupertino-ui/_bindings/cupertino_CupertinoTextThemeData';
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
import { _flaxMemberParameters0, _flaxMemberParameters1, _flaxMemberParameters3 } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CupertinoThemeData extends Omit<upstream0.NoDefaultCupertinoThemeData, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.NoDefaultCupertinoThemeData>, Readonly<{ "__flaxBound:package:cupertino_ui/src/theme.dart::CupertinoThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:cupertino_ui/src/theme.dart::NoDefaultCupertinoThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __CupertinoThemeData: unique symbol;
readonly [_flaxDartTypeValue]: CupertinoThemeData;

readonly brightness: upstream2.Brightness | null;
readonly primaryColor: upstream3.Color;
readonly primaryContrastingColor: upstream3.Color;
readonly textTheme: upstream4.CupertinoTextThemeData;
readonly barBackgroundColor: upstream3.Color;
readonly scaffoldBackgroundColor: upstream3.Color;
readonly selectionHandleColor: upstream3.Color;
readonly applyThemeToAll: boolean;
noDefault(): upstream0.NoDefaultCupertinoThemeData;
resolveFrom(context: upstream5.BuildContext): CupertinoThemeData;
copyWith(options?: {applyThemeToAll?: boolean | null | undefined; barBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; brightness?: upstream2.Brightness | null | undefined; primaryColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; primaryContrastingColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; scaffoldBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; selectionHandleColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; textTheme?: Readonly<{ "__flaxBound:package:cupertino_ui/src/text_theme.dart::CupertinoTextThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}): CupertinoThemeData;
toStringShort(): string;
toString(options?: {minLevel?: upstream6.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream8.DiagnosticsTreeStyle | null | undefined}): upstream7.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
}
defineObject("flax.cupertino/cupertino#type:CupertinoThemeData", ["brightness","primaryColor","primaryContrastingColor","textTheme","barBackgroundColor","scaffoldBackgroundColor","selectionHandleColor","applyThemeToAll"], [], _flaxBindingMethods("flax.cupertino/cupertino#type:CupertinoThemeData", "object", {"noDefault":_flaxMemberParameters0,"resolveFrom":_flaxMemberParameters1,"copyWith":_flaxMemberParameters3}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _CupertinoThemeDataFactory(options: { brightness?: upstream2.Brightness | null | undefined; primaryColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; primaryContrastingColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; textTheme?: Readonly<{ "__flaxBound:package:cupertino_ui/src/text_theme.dart::CupertinoTextThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; barBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; scaffoldBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; selectionHandleColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; applyThemeToAll?: boolean | null | undefined } = {}): CupertinoThemeData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/cupertino#type:CupertinoThemeData", "", [{"name":"brightness"},{"name":"primaryColor"},{"name":"primaryContrastingColor"},{"name":"textTheme"},{"name":"barBackgroundColor"},{"name":"scaffoldBackgroundColor"},{"name":"selectionHandleColor"},{"name":"applyThemeToAll"}], [], options) as CupertinoThemeData;
}
export namespace _CupertinoThemeDataFactory {
export function raw(brightness: upstream2.Brightness | null, primaryColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null, primaryContrastingColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null, textTheme: Readonly<{ "__flaxBound:package:cupertino_ui/src/text_theme.dart::CupertinoTextThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, barBackgroundColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null, scaffoldBackgroundColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null, selectionHandleColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null, applyThemeToAll: boolean | null): CupertinoThemeData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 8) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/cupertino#type:CupertinoThemeData", "raw", [{"name":"brightness","required":true,"positional":true},{"name":"primaryColor","required":true,"positional":true},{"name":"primaryContrastingColor","required":true,"positional":true},{"name":"textTheme","required":true,"positional":true},{"name":"barBackgroundColor","required":true,"positional":true},{"name":"scaffoldBackgroundColor","required":true,"positional":true},{"name":"selectionHandleColor","required":true,"positional":true},{"name":"applyThemeToAll","required":true,"positional":true}], [brightness, primaryColor, primaryContrastingColor, textTheme, barBackgroundColor, scaffoldBackgroundColor, selectionHandleColor, applyThemeToAll], {}) as CupertinoThemeData;
}
}
export const CupertinoThemeData: typeof _CupertinoThemeDataFactory & _FlaxInstanceType<CupertinoThemeData> & _FlaxDartType<CupertinoThemeData, readonly ["class", "flax.cupertino/cupertino#type:CupertinoThemeData", readonly [], false]> = _flaxBindInstanceType<CupertinoThemeData, typeof _CupertinoThemeDataFactory>(_CupertinoThemeDataFactory, "flax.cupertino/cupertino#type:CupertinoThemeData", ["flax.cupertino/cupertino#type:NoDefaultCupertinoThemeData","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _CupertinoThemeDataFactory & _FlaxInstanceType<CupertinoThemeData> & _FlaxDartType<CupertinoThemeData, readonly ["class", "flax.cupertino/cupertino#type:CupertinoThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "brightness" | "primaryColor" | "primaryContrastingColor" | "textTheme" | "barBackgroundColor" | "scaffoldBackgroundColor" | "selectionHandleColor" | "applyThemeToAll" | "noDefault" | "resolveFrom" | "copyWith" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:cupertino_ui/src/theme.dart::CupertinoThemeData" | "__flaxBound:package:cupertino_ui/src/theme.dart::NoDefaultCupertinoThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

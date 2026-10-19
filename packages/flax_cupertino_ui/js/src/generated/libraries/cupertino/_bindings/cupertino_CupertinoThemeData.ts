// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { _flaxMemberParameters1, _flaxMemberParameters2 } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CupertinoThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:cupertino_ui/src/theme.dart::CupertinoThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:cupertino_ui/src/theme.dart::NoDefaultCupertinoThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __CupertinoThemeData: unique symbol;
readonly [_flaxDartTypeValue]: CupertinoThemeData;

readonly primaryColor: upstream2.Color;
readonly primaryContrastingColor: upstream2.Color;
readonly barBackgroundColor: upstream2.Color;
readonly scaffoldBackgroundColor: upstream2.Color;
readonly selectionHandleColor: upstream2.Color;
readonly applyThemeToAll: boolean;
readonly brightness: upstream1.Brightness | null;
toStringShort(): string;
toString(options?: {minLevel?: upstream3.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream5.DiagnosticsTreeStyle | null | undefined}): upstream4.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
resolveFrom(context: upstream7.BuildContext): CupertinoThemeData;
copyWith(options?: {applyThemeToAll?: boolean | null | undefined; barBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; brightness?: upstream1.Brightness | null | undefined; primaryColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; primaryContrastingColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; scaffoldBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; selectionHandleColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined}): CupertinoThemeData;
}
defineObject("flax.cupertino/cupertino#type:CupertinoThemeData", ["primaryColor","primaryContrastingColor","barBackgroundColor","scaffoldBackgroundColor","selectionHandleColor","applyThemeToAll","brightness"], [], _flaxBindingMethods("flax.cupertino/cupertino#type:CupertinoThemeData", "object", {"resolveFrom":_flaxMemberParameters1,"copyWith":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _CupertinoThemeDataFactory(options: { brightness?: upstream1.Brightness | null | undefined; primaryColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; primaryContrastingColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; barBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; scaffoldBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; selectionHandleColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; applyThemeToAll?: boolean | null | undefined } = {}): CupertinoThemeData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/cupertino#type:CupertinoThemeData", "", [{"name":"brightness"},{"name":"primaryColor"},{"name":"primaryContrastingColor"},{"name":"barBackgroundColor"},{"name":"scaffoldBackgroundColor"},{"name":"selectionHandleColor"},{"name":"applyThemeToAll"}], [], options) as CupertinoThemeData;
}
export const CupertinoThemeData: typeof _CupertinoThemeDataFactory & _FlaxInstanceType<CupertinoThemeData> & _FlaxDartType<CupertinoThemeData, readonly ["class", "flax.cupertino/cupertino#type:CupertinoThemeData", readonly [], false]> = _flaxBindInstanceType<CupertinoThemeData, typeof _CupertinoThemeDataFactory>(_CupertinoThemeDataFactory, "flax.cupertino/cupertino#type:CupertinoThemeData", ["package:cupertino_ui/src/theme.dart::NoDefaultCupertinoThemeData","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _CupertinoThemeDataFactory & _FlaxInstanceType<CupertinoThemeData> & _FlaxDartType<CupertinoThemeData, readonly ["class", "flax.cupertino/cupertino#type:CupertinoThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "primaryColor" | "primaryContrastingColor" | "barBackgroundColor" | "scaffoldBackgroundColor" | "selectionHandleColor" | "applyThemeToAll" | "brightness" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "resolveFrom" | "copyWith" | "__flaxBound:package:cupertino_ui/src/theme.dart::CupertinoThemeData" | "__flaxBound:package:cupertino_ui/src/theme.dart::NoDefaultCupertinoThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

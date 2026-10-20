// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters105, _flaxMemberParameters106, _flaxMemberParameters0, _flaxMemberParameters45, _flaxMemberParameters44, _flaxMemberParameters43 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SystemUiOverlayStyle extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/system_chrome.dart::SystemUiOverlayStyle": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __SystemUiOverlayStyle: unique symbol;
readonly [_flaxDartTypeValue]: SystemUiOverlayStyle;

readonly systemNavigationBarColor: upstream1.Color | null;
readonly systemNavigationBarDividerColor: upstream1.Color | null;
readonly systemNavigationBarIconBrightness: upstream2.Brightness | null;
readonly systemNavigationBarContrastEnforced: boolean | null;
readonly statusBarColor: upstream1.Color | null;
readonly statusBarBrightness: upstream2.Brightness | null;
readonly statusBarIconBrightness: upstream2.Brightness | null;
readonly systemStatusBarContrastEnforced: boolean | null;
toStringShort(): string;
toString(options?: {minLevel?: upstream3.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream5.DiagnosticsTreeStyle | null | undefined}): upstream4.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {statusBarBrightness?: upstream2.Brightness | null | undefined; statusBarColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; statusBarIconBrightness?: upstream2.Brightness | null | undefined; systemNavigationBarColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; systemNavigationBarContrastEnforced?: boolean | null | undefined; systemNavigationBarDividerColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; systemNavigationBarIconBrightness?: upstream2.Brightness | null | undefined; systemStatusBarContrastEnforced?: boolean | null | undefined}): SystemUiOverlayStyle;
}
defineObject("flax.core/sdk_services#type:SystemUiOverlayStyle", ["systemNavigationBarColor","systemNavigationBarDividerColor","systemNavigationBarIconBrightness","systemNavigationBarContrastEnforced","statusBarColor","statusBarBrightness","statusBarIconBrightness","systemStatusBarContrastEnforced"], [], _flaxBindingMethods("flax.core/sdk_services#type:SystemUiOverlayStyle", "object", {"copyWith":_flaxMemberParameters105}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _SystemUiOverlayStyleFactory(options: { systemNavigationBarColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; systemNavigationBarDividerColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; systemNavigationBarIconBrightness?: upstream2.Brightness | null | undefined; systemNavigationBarContrastEnforced?: boolean | null | undefined; statusBarColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; statusBarBrightness?: upstream2.Brightness | null | undefined; statusBarIconBrightness?: upstream2.Brightness | null | undefined; systemStatusBarContrastEnforced?: boolean | null | undefined } = {}): SystemUiOverlayStyle {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:SystemUiOverlayStyle", "", [{"name":"systemNavigationBarColor"},{"name":"systemNavigationBarDividerColor"},{"name":"systemNavigationBarIconBrightness"},{"name":"systemNavigationBarContrastEnforced"},{"name":"statusBarColor"},{"name":"statusBarBrightness"},{"name":"statusBarIconBrightness"},{"name":"systemStatusBarContrastEnforced"}], [], options) as SystemUiOverlayStyle;
}
const _SystemUiOverlayStyleProxy = {type: "flax.core/sdk_services#type:SystemUiOverlayStyle", parameters: _flaxMemberParameters106, constructors: {"": _flaxMemberParameters106}, methods: {"toStringShort":_flaxMemberParameters0,"toString":_flaxMemberParameters45,"toDiagnosticsNode":_flaxMemberParameters44,"debugFillProperties":_flaxMemberParameters43,"copyWith":_flaxMemberParameters105}, getters: ["systemNavigationBarColor","systemNavigationBarDividerColor","systemNavigationBarIconBrightness","systemNavigationBarContrastEnforced","statusBarColor","statusBarBrightness","statusBarIconBrightness","systemStatusBarContrastEnforced"], setters: [], contextMembers: [], superMembers: ["get:systemNavigationBarColor","get:systemNavigationBarDividerColor","get:systemNavigationBarIconBrightness","get:systemNavigationBarContrastEnforced","get:statusBarColor","get:statusBarBrightness","get:statusBarIconBrightness","get:systemStatusBarContrastEnforced","toStringShort","toString","toDiagnosticsNode","debugFillProperties","copyWith"]} as const;
export interface _SystemUiOverlayStyleNative extends SystemUiOverlayStyle {
readonly [_flaxDartTypeValue]: _SystemUiOverlayStyleNative;

toStringShort(): string;
toString(options?: {minLevel?: upstream3.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream5.DiagnosticsTreeStyle | null | undefined}): upstream4.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {systemNavigationBarColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; systemNavigationBarDividerColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; systemNavigationBarContrastEnforced?: boolean | null | undefined; statusBarColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; statusBarBrightness?: upstream2.Brightness | null | undefined; statusBarIconBrightness?: upstream2.Brightness | null | undefined; systemStatusBarContrastEnforced?: boolean | null | undefined; systemNavigationBarIconBrightness?: upstream2.Brightness | null | undefined}): SystemUiOverlayStyle;
get systemNavigationBarColor(): upstream1.Color | null;
get systemNavigationBarDividerColor(): upstream1.Color | null;
get systemNavigationBarIconBrightness(): upstream2.Brightness | null;
get systemNavigationBarContrastEnforced(): boolean | null;
get statusBarColor(): upstream1.Color | null;
get statusBarBrightness(): upstream2.Brightness | null;
get statusBarIconBrightness(): upstream2.Brightness | null;
get systemStatusBarContrastEnforced(): boolean | null;
}
export abstract class _SystemUiOverlayStyleNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SystemUiOverlayStyle>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SystemUiOverlayStyle;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:SystemUiOverlayStyle", readonly [], false];
constructor(options?: {systemNavigationBarColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; systemNavigationBarDividerColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; systemNavigationBarIconBrightness?: upstream2.Brightness | null | undefined; systemNavigationBarContrastEnforced?: boolean | null | undefined; statusBarColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; statusBarBrightness?: upstream2.Brightness | null | undefined; statusBarIconBrightness?: upstream2.Brightness | null | undefined; systemStatusBarContrastEnforced?: boolean | null | undefined}) { super(_SystemUiOverlayStyleProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SystemUiOverlayStyleNative.prototype, _SystemUiOverlayStyleProxy);
export namespace _SystemUiOverlayStyleFactory { export function implement(args: [options?: {systemNavigationBarColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; systemNavigationBarDividerColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; systemNavigationBarIconBrightness?: upstream2.Brightness | null | undefined; systemNavigationBarContrastEnforced?: boolean | null | undefined; statusBarColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; statusBarBrightness?: upstream2.Brightness | null | undefined; statusBarIconBrightness?: upstream2.Brightness | null | undefined; systemStatusBarContrastEnforced?: boolean | null | undefined}], implementation: {}): SystemUiOverlayStyle {
return constructProxy(_SystemUiOverlayStyleProxy, args, implementation) as SystemUiOverlayStyle; } }
const _SystemUiOverlayStyleBinding = _flaxProxyFactory(_SystemUiOverlayStyleFactory, _SystemUiOverlayStyleNative) as unknown as typeof _SystemUiOverlayStyleFactory & (new(options?: {systemNavigationBarColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; systemNavigationBarDividerColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; systemNavigationBarIconBrightness?: upstream2.Brightness | null | undefined; systemNavigationBarContrastEnforced?: boolean | null | undefined; statusBarColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; statusBarBrightness?: upstream2.Brightness | null | undefined; statusBarIconBrightness?: upstream2.Brightness | null | undefined; systemStatusBarContrastEnforced?: boolean | null | undefined}) => _SystemUiOverlayStyleNative);
export namespace _SystemUiOverlayStyleFactory { export declare const light: SystemUiOverlayStyle; }
export namespace _SystemUiOverlayStyleFactory { export declare const dark: SystemUiOverlayStyle; }
_flaxDefineStaticGetters(_SystemUiOverlayStyleFactory, "flax.core/sdk_services#read:SystemUiOverlayStyle.", ["light","dark"]);
export const SystemUiOverlayStyle: typeof _SystemUiOverlayStyleBinding & _FlaxInstanceType<SystemUiOverlayStyle> & _FlaxDartType<SystemUiOverlayStyle, readonly ["class", "flax.core/sdk_services#type:SystemUiOverlayStyle", readonly [], false]> = _flaxBindInstanceType<SystemUiOverlayStyle, typeof _SystemUiOverlayStyleBinding>(_SystemUiOverlayStyleBinding, "flax.core/sdk_services#type:SystemUiOverlayStyle", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _SystemUiOverlayStyleBinding & _FlaxInstanceType<SystemUiOverlayStyle> & _FlaxDartType<SystemUiOverlayStyle, readonly ["class", "flax.core/sdk_services#type:SystemUiOverlayStyle", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "systemNavigationBarColor" | "systemNavigationBarDividerColor" | "systemNavigationBarIconBrightness" | "systemNavigationBarContrastEnforced" | "statusBarColor" | "statusBarBrightness" | "statusBarIconBrightness" | "systemStatusBarContrastEnforced" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:flutter/src/services/system_chrome.dart::SystemUiOverlayStyle" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

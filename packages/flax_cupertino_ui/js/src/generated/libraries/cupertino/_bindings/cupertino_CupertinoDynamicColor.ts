// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_ColorSpace';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ColorSpace';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters22, _flaxMemberParameters23, _flaxMemberParameters0, _flaxMemberParameters24, _flaxMemberParameters25, _flaxMemberParameters26, _flaxMemberParameters27, _flaxMemberParameters28, _flaxMemberParameters29, _flaxMemberParameters30, _flaxMemberParameters31, _flaxMemberParameters32, _flaxMemberParameters33, _flaxMemberParameters34, _flaxMemberParameters35 } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CupertinoDynamicColor extends Omit<upstream0.Color, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Color>, Readonly<{ "__flaxBound:package:cupertino_ui/src/colors.dart::CupertinoDynamicColor": readonly [] }>, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __CupertinoDynamicColor: unique symbol;
readonly [_flaxDartTypeValue]: CupertinoDynamicColor;

readonly a: number;
readonly r: number;
readonly g: number;
readonly b: number;
readonly colorSpace: upstream2.ColorSpace;
readonly value: number;
readonly alpha: number;
readonly opacity: number;
readonly red: number;
readonly green: number;
readonly blue: number;
readonly color: upstream0.Color;
readonly darkColor: upstream0.Color;
readonly highContrastColor: upstream0.Color;
readonly darkHighContrastColor: upstream0.Color;
readonly elevatedColor: upstream0.Color;
readonly darkElevatedColor: upstream0.Color;
readonly highContrastElevatedColor: upstream0.Color;
readonly darkHighContrastElevatedColor: upstream0.Color;
toARGB32(): number;
withValues(options?: {alpha?: number | null | undefined; blue?: number | null | undefined; colorSpace?: upstream2.ColorSpace | null | undefined; green?: number | null | undefined; red?: number | null | undefined}): upstream0.Color;
withAlpha(a: number): upstream0.Color;
withOpacity(opacity: number): upstream0.Color;
withRed(r: number): upstream0.Color;
withGreen(g: number): upstream0.Color;
withBlue(b: number): upstream0.Color;
computeLuminance(): number;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
resolveFrom(context: upstream3.BuildContext): CupertinoDynamicColor;
}
defineObject("flax.cupertino/cupertino#type:CupertinoDynamicColor", ["a","r","g","b","colorSpace","value","alpha","opacity","red","green","blue","color","darkColor","highContrastColor","darkHighContrastColor","elevatedColor","darkElevatedColor","highContrastElevatedColor","darkHighContrastElevatedColor"], [], _flaxBindingMethods("flax.cupertino/cupertino#type:CupertinoDynamicColor", "object", {"toString":_flaxMemberParameters23,"toStringShort":_flaxMemberParameters0,"toDiagnosticsNode":_flaxMemberParameters24,"debugFillProperties":_flaxMemberParameters25,"resolveFrom":_flaxMemberParameters26}, {}), [], undefined, "flax.core/flutter#type:Color");
export function _CupertinoDynamicColorFactory(options: { debugLabel?: string | null | undefined; color: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; darkColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; highContrastColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; darkHighContrastColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; elevatedColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; darkElevatedColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; highContrastElevatedColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; darkHighContrastElevatedColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> }): CupertinoDynamicColor {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/cupertino#type:CupertinoDynamicColor", "", [{"name":"debugLabel"},{"name":"color","required":true},{"name":"darkColor","required":true},{"name":"highContrastColor","required":true},{"name":"darkHighContrastColor","required":true},{"name":"elevatedColor","required":true},{"name":"darkElevatedColor","required":true},{"name":"highContrastElevatedColor","required":true},{"name":"darkHighContrastElevatedColor","required":true}], [], options) as CupertinoDynamicColor;
}
export namespace _CupertinoDynamicColorFactory {
export function withBrightnessAndContrast(options: { debugLabel?: string | null | undefined; color: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; darkColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; highContrastColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; darkHighContrastColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> }): CupertinoDynamicColor {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/cupertino#type:CupertinoDynamicColor", "withBrightnessAndContrast", [{"name":"debugLabel"},{"name":"color","required":true},{"name":"darkColor","required":true},{"name":"highContrastColor","required":true},{"name":"darkHighContrastColor","required":true}], [], options) as CupertinoDynamicColor;
}
}
export namespace _CupertinoDynamicColorFactory {
export function withBrightness(options: { debugLabel?: string | null | undefined; color: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; darkColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> }): CupertinoDynamicColor {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/cupertino#type:CupertinoDynamicColor", "withBrightness", [{"name":"debugLabel"},{"name":"color","required":true},{"name":"darkColor","required":true}], [], options) as CupertinoDynamicColor;
}
}
const _CupertinoDynamicColorProxy = {type: "flax.cupertino/cupertino#type:CupertinoDynamicColor", parameters: _flaxMemberParameters27, constructors: {"": _flaxMemberParameters27,"withBrightnessAndContrast": _flaxMemberParameters28,"withBrightness": _flaxMemberParameters29}, methods: {"toARGB32":_flaxMemberParameters0,"withValues":_flaxMemberParameters30,"withAlpha":_flaxMemberParameters31,"withOpacity":_flaxMemberParameters32,"withRed":_flaxMemberParameters33,"withGreen":_flaxMemberParameters34,"withBlue":_flaxMemberParameters35,"computeLuminance":_flaxMemberParameters0,"toString":_flaxMemberParameters23,"toStringShort":_flaxMemberParameters0,"toDiagnosticsNode":_flaxMemberParameters24,"debugFillProperties":_flaxMemberParameters25,"resolveFrom":_flaxMemberParameters26}, getters: ["color","darkColor","highContrastColor","darkHighContrastColor","elevatedColor","darkElevatedColor","highContrastElevatedColor","darkHighContrastElevatedColor","value","alpha","blue","green","opacity","red","a","r","g","b","colorSpace"], setters: [], contextMembers: [], superMembers: ["get:color","get:darkColor","get:highContrastColor","get:darkHighContrastColor","get:elevatedColor","get:darkElevatedColor","get:highContrastElevatedColor","get:darkHighContrastElevatedColor","get:value","get:alpha","get:blue","get:green","get:opacity","get:red","get:a","get:r","get:g","get:b","get:colorSpace","toARGB32","withValues","withAlpha","withOpacity","withRed","withGreen","withBlue","computeLuminance","toString","toStringShort","toDiagnosticsNode","debugFillProperties","resolveFrom"]} as const;
export interface _CupertinoDynamicColorNative extends CupertinoDynamicColor {
readonly [_flaxDartTypeValue]: _CupertinoDynamicColorNative;
readonly [_flaxDartConstructors]?: {"": (options: {debugLabel?: string | null | undefined; color: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; darkColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; highContrastColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; darkHighContrastColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; elevatedColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; darkElevatedColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; highContrastElevatedColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; darkHighContrastElevatedColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>}) => void;"withBrightnessAndContrast": (options: {debugLabel?: string | null | undefined; color: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; darkColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; highContrastColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; darkHighContrastColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>}) => void;"withBrightness": (options: {debugLabel?: string | null | undefined; color: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; darkColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>}) => void;};

toARGB32(): number;
withValues(options?: {alpha?: number | null | undefined; red?: number | null | undefined; green?: number | null | undefined; blue?: number | null | undefined; colorSpace?: upstream2.ColorSpace | null | undefined}): upstream0.Color;
withAlpha(a: number): upstream0.Color;
withOpacity(opacity: number): upstream0.Color;
withRed(r: number): upstream0.Color;
withGreen(g: number): upstream0.Color;
withBlue(b: number): upstream0.Color;
computeLuminance(): number;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
resolveFrom(context: upstream3.BuildContext): CupertinoDynamicColor;
get color(): upstream0.Color;
get darkColor(): upstream0.Color;
get highContrastColor(): upstream0.Color;
get darkHighContrastColor(): upstream0.Color;
get elevatedColor(): upstream0.Color;
get darkElevatedColor(): upstream0.Color;
get highContrastElevatedColor(): upstream0.Color;
get darkHighContrastElevatedColor(): upstream0.Color;
get value(): number;
get alpha(): number;
get blue(): number;
get green(): number;
get opacity(): number;
get red(): number;
get a(): number;
get r(): number;
get g(): number;
get b(): number;
get colorSpace(): upstream2.ColorSpace;
}
export abstract class _CupertinoDynamicColorNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CupertinoDynamicColor>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CupertinoDynamicColor;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.cupertino/cupertino#type:CupertinoDynamicColor", readonly [], false];
constructor(options: {debugLabel?: string | null | undefined; color: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; darkColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; highContrastColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; darkHighContrastColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; elevatedColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; darkElevatedColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; highContrastElevatedColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; darkHighContrastElevatedColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>}); constructor(call: _FlaxProxySuper<_CupertinoDynamicColorNative>); constructor(...args: unknown[]) { super(_CupertinoDynamicColorProxy, args); }
}
_flaxDefineProxyBase(_CupertinoDynamicColorNative.prototype, _CupertinoDynamicColorProxy);
export namespace _CupertinoDynamicColorFactory { export function implement(args: [options: {debugLabel?: string | null | undefined; color: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; darkColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; highContrastColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; darkHighContrastColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; elevatedColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; darkElevatedColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; highContrastElevatedColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; darkHighContrastElevatedColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>}], implementation: {}): CupertinoDynamicColor {
return constructProxy(_CupertinoDynamicColorProxy, args, implementation) as CupertinoDynamicColor; } }
const _CupertinoDynamicColorBinding = _flaxProxyFactory(_CupertinoDynamicColorFactory, _CupertinoDynamicColorNative) as unknown as typeof _CupertinoDynamicColorFactory & (new(options: {debugLabel?: string | null | undefined; color: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; darkColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; highContrastColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; darkHighContrastColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; elevatedColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; darkElevatedColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; highContrastElevatedColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; darkHighContrastElevatedColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>}) => _CupertinoDynamicColorNative) & (new(call: _FlaxProxySuper<_CupertinoDynamicColorNative>) => _CupertinoDynamicColorNative);
export namespace _CupertinoDynamicColorFactory { export function resolve(resolvable: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>, context: upstream3.BuildContext): upstream0.Color {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.cupertino/cupertino#function:CupertinoDynamicColor.resolve", [resolvable, contextHandle(context, "flax.core/flutter#type:BuildContext")], _flaxMemberParameters22);
return _flaxResult as upstream0.Color;
} }
export namespace _CupertinoDynamicColorFactory { export function maybeResolve(resolvable: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null, context: upstream3.BuildContext): upstream0.Color | null {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.cupertino/cupertino#function:CupertinoDynamicColor.maybeResolve", [resolvable, contextHandle(context, "flax.core/flutter#type:BuildContext")], _flaxMemberParameters22);
return _flaxResult as upstream0.Color | null;
} }
export const CupertinoDynamicColor: typeof _CupertinoDynamicColorBinding & _FlaxInstanceType<CupertinoDynamicColor> & _FlaxDartType<CupertinoDynamicColor, readonly ["class", "flax.cupertino/cupertino#type:CupertinoDynamicColor", readonly [], false]> = _flaxBindInstanceType<CupertinoDynamicColor, typeof _CupertinoDynamicColorBinding>(_CupertinoDynamicColorBinding, "flax.cupertino/cupertino#type:CupertinoDynamicColor", ["dart:core::Object","flax.core/flutter#type:Color","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _CupertinoDynamicColorBinding & _FlaxInstanceType<CupertinoDynamicColor> & _FlaxDartType<CupertinoDynamicColor, readonly ["class", "flax.cupertino/cupertino#type:CupertinoDynamicColor", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "a" | "r" | "g" | "b" | "colorSpace" | "value" | "alpha" | "opacity" | "red" | "green" | "blue" | "color" | "darkColor" | "highContrastColor" | "darkHighContrastColor" | "elevatedColor" | "darkElevatedColor" | "highContrastElevatedColor" | "darkHighContrastElevatedColor" | "toARGB32" | "withValues" | "withAlpha" | "withOpacity" | "withRed" | "withGreen" | "withBlue" | "computeLuminance" | "toString" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "resolveFrom" | "__flaxBound:package:cupertino_ui/src/colors.dart::CupertinoDynamicColor" | "__flaxBound:dart:ui::Color" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

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
const _flaxMemberParameters0 = [{"name":"minLevel","required":false,"positional":false}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"name","required":false,"positional":false},{"name":"style","required":false,"positional":false}] as const;
const _flaxMemberParameters3 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}] as const;
const _flaxMemberParameters5 = [{"name":"alpha","required":false,"positional":false},{"name":"blue","required":false,"positional":false},{"name":"colorSpace","required":false,"positional":false},{"name":"green","required":false,"positional":false},{"name":"red","required":false,"positional":false}] as const;
const _flaxMemberParameters6 = [{"name":"a","required":true,"positional":true}] as const;
const _flaxMemberParameters7 = [{"name":"opacity","required":true,"positional":true}] as const;
const _flaxMemberParameters8 = [{"name":"r","required":true,"positional":true}] as const;
const _flaxMemberParameters9 = [{"name":"g","required":true,"positional":true}] as const;
const _flaxMemberParameters10 = [{"name":"b","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/cupertino/_bindings/sdk_cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CupertinoDynamicColor extends Omit<upstream0.Color, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Color>, Readonly<{ "__flaxBound:package:flutter/src/cupertino/colors.dart::CupertinoDynamicColor": readonly [] }>, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __CupertinoDynamicColor: unique symbol;
readonly [_flaxDartTypeValue]: CupertinoDynamicColor;

}
defineObject("flax.core/sdk_cupertino#type:CupertinoDynamicColor", ["a","r","g","b","colorSpace","value","alpha","opacity","red","green","blue","color","darkColor","highContrastColor","darkHighContrastColor","elevatedColor","darkElevatedColor","highContrastElevatedColor","darkHighContrastElevatedColor"], [], _flaxBindingMethods("flax.core/sdk_cupertino#type:CupertinoDynamicColor", "object", {"toString":_flaxMemberParameters0,"toStringShort":_flaxMemberParameters1,"toDiagnosticsNode":_flaxMemberParameters2,"debugFillProperties":_flaxMemberParameters3,"resolveFrom":_flaxMemberParameters4}, {}), [], undefined, "flax.core/flutter#type:Color");
const _CupertinoDynamicColorProxy = {type: "flax.core/sdk_cupertino#type:CupertinoDynamicColor", parameters: [{"name":"debugLabel","required":false,"positional":false},{"name":"color","required":true,"positional":false},{"name":"darkColor","required":true,"positional":false},{"name":"highContrastColor","required":true,"positional":false},{"name":"darkHighContrastColor","required":true,"positional":false},{"name":"elevatedColor","required":true,"positional":false},{"name":"darkElevatedColor","required":true,"positional":false},{"name":"highContrastElevatedColor","required":true,"positional":false},{"name":"darkHighContrastElevatedColor","required":true,"positional":false}], constructors: {"":[{"name":"debugLabel","required":false,"positional":false},{"name":"color","required":true,"positional":false},{"name":"darkColor","required":true,"positional":false},{"name":"highContrastColor","required":true,"positional":false},{"name":"darkHighContrastColor","required":true,"positional":false},{"name":"elevatedColor","required":true,"positional":false},{"name":"darkElevatedColor","required":true,"positional":false},{"name":"highContrastElevatedColor","required":true,"positional":false},{"name":"darkHighContrastElevatedColor","required":true,"positional":false}]}, methods: {"toARGB32":_flaxMemberParameters1,"withValues":_flaxMemberParameters5,"withAlpha":_flaxMemberParameters6,"withOpacity":_flaxMemberParameters7,"withRed":_flaxMemberParameters8,"withGreen":_flaxMemberParameters9,"withBlue":_flaxMemberParameters10,"computeLuminance":_flaxMemberParameters1,"toString":_flaxMemberParameters0,"toStringShort":_flaxMemberParameters1,"toDiagnosticsNode":_flaxMemberParameters2,"debugFillProperties":_flaxMemberParameters3,"resolveFrom":_flaxMemberParameters4}, getters: ["color","darkColor","highContrastColor","darkHighContrastColor","elevatedColor","darkElevatedColor","highContrastElevatedColor","darkHighContrastElevatedColor","value","alpha","blue","green","opacity","red","a","r","g","b","colorSpace"], setters: [], contextMembers: [], superMembers: ["get:color","get:darkColor","get:highContrastColor","get:darkHighContrastColor","get:elevatedColor","get:darkElevatedColor","get:highContrastElevatedColor","get:darkHighContrastElevatedColor","get:value","get:alpha","get:blue","get:green","get:opacity","get:red","get:a","get:r","get:g","get:b","get:colorSpace","toARGB32","withValues","withAlpha","withOpacity","withRed","withGreen","withBlue","computeLuminance","toString","toStringShort","toDiagnosticsNode","debugFillProperties","resolveFrom"]} as const;
export interface CupertinoDynamicColor {
readonly [_flaxDartTypeValue]: CupertinoDynamicColor;

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
export abstract class CupertinoDynamicColor extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CupertinoDynamicColor>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CupertinoDynamicColor;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_cupertino#type:CupertinoDynamicColor", readonly [], false];
constructor(options: {debugLabel?: string | null | undefined; color: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; darkColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; highContrastColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; darkHighContrastColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; elevatedColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; darkElevatedColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; highContrastElevatedColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; darkHighContrastElevatedColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>}) { super(_CupertinoDynamicColorProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(CupertinoDynamicColor.prototype, _CupertinoDynamicColorProxy);
export namespace CupertinoDynamicColor { export function implement(args: [options: {debugLabel?: string | null | undefined; color: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; darkColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; highContrastColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; darkHighContrastColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; elevatedColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; darkElevatedColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; highContrastElevatedColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; darkHighContrastElevatedColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>}], implementation: {}): CupertinoDynamicColor {
return constructProxy(_CupertinoDynamicColorProxy, args, implementation) as CupertinoDynamicColor; } }
export namespace CupertinoDynamicColor { export function resolve(resolvable: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>, context: upstream3.BuildContext): upstream0.Color {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_cupertino#function:CupertinoDynamicColor.resolve", [resolvable, contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream0.Color;
} }
export namespace CupertinoDynamicColor { export function maybeResolve(resolvable: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null, context: upstream3.BuildContext): upstream0.Color | null {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_cupertino#function:CupertinoDynamicColor.maybeResolve", [resolvable, contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream0.Color | null;
} }
_flaxBindInstanceType<CupertinoDynamicColor, typeof CupertinoDynamicColor>(CupertinoDynamicColor, "flax.core/sdk_cupertino#type:CupertinoDynamicColor", ["dart:core::Object","flax.core/flutter#type:Color","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "a" | "r" | "g" | "b" | "colorSpace" | "value" | "alpha" | "opacity" | "red" | "green" | "blue" | "color" | "darkColor" | "highContrastColor" | "darkHighContrastColor" | "elevatedColor" | "darkElevatedColor" | "highContrastElevatedColor" | "darkHighContrastElevatedColor" | "toARGB32" | "withValues" | "withAlpha" | "withOpacity" | "withRed" | "withGreen" | "withBlue" | "computeLuminance" | "toString" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "resolveFrom" | "__flaxBound:package:flutter/src/cupertino/colors.dart::CupertinoDynamicColor" | "__flaxBound:dart:ui::Color" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

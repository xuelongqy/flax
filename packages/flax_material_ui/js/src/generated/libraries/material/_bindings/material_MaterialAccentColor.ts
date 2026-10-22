// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_ColorSwatch';
import '@flax/flutter/painting/_bindings/sdk_painting_ColorSwatch';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_ColorSpace';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ColorSpace';
import { _flaxMemberParameters196, _flaxMemberParameters197, _flaxMemberParameters4, _flaxMemberParameters198, _flaxMemberParameters199, _flaxMemberParameters200, _flaxMemberParameters201, _flaxMemberParameters202, _flaxMemberParameters203 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MaterialAccentColor extends Omit<upstream0.ColorSwatch<number>, _flaxOwnMembers0>, Omit<upstream1.Color, _flaxOwnMembers0 | keyof upstream0.ColorSwatch<number>>, Readonly<{ "__flaxBound:package:material_ui/src/colors.dart::MaterialAccentColor": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/colors.dart::ColorSwatch": readonly [number] }>, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> { readonly __MaterialAccentColor: unique symbol;
readonly [_flaxDartTypeValue]: MaterialAccentColor;

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
readonly keys: DartIterable<number>;
readonly shade100: upstream1.Color;
readonly shade200: upstream1.Color;
readonly shade400: upstream1.Color;
readonly shade700: upstream1.Color;
toARGB32(): number;
withValues(options?: {alpha?: number | null | undefined; blue?: number | null | undefined; colorSpace?: upstream2.ColorSpace | null | undefined; green?: number | null | undefined; red?: number | null | undefined}): upstream1.Color;
withAlpha(a: number): upstream1.Color;
withOpacity(opacity: number): upstream1.Color;
withRed(r: number): upstream1.Color;
withGreen(g: number): upstream1.Color;
withBlue(b: number): upstream1.Color;
computeLuminance(): number;
toString(): string;
operatorGetIndex(key: number): upstream1.Color | null;
}
defineObject("flax.material/material#type:MaterialAccentColor", ["a","r","g","b","colorSpace","value","alpha","opacity","red","green","blue","keys","shade100","shade200","shade400","shade700"], [], _flaxBindingMethods("flax.material/material#type:MaterialAccentColor", "object", {"operatorGetIndex":_flaxMemberParameters196}, {}), [], undefined, "flax.core/flutter#type:Color");
export function _MaterialAccentColorFactory(primary: number, swatch: DartMapInput<number, upstream1.Color, number, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>): MaterialAccentColor {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:MaterialAccentColor", "", [{"name":"primary","required":true,"positional":true},{"name":"swatch","required":true,"positional":true}], [primary, swatch], {}) as MaterialAccentColor;
}
const _MaterialAccentColorProxy = {type: "flax.material/material#type:MaterialAccentColor", parameters: _flaxMemberParameters197, constructors: {"": _flaxMemberParameters197}, methods: {"toARGB32":_flaxMemberParameters4,"withValues":_flaxMemberParameters198,"withAlpha":_flaxMemberParameters199,"withOpacity":_flaxMemberParameters200,"withRed":_flaxMemberParameters201,"withGreen":_flaxMemberParameters202,"withBlue":_flaxMemberParameters203,"computeLuminance":_flaxMemberParameters4,"toString":_flaxMemberParameters4,"operatorGetIndex":_flaxMemberParameters196}, getters: ["shade100","shade200","shade400","shade700","keys","a","r","g","b","colorSpace","value","alpha","opacity","red","green","blue"], setters: [], contextMembers: [], superMembers: ["get:shade100","get:shade200","get:shade400","get:shade700","get:keys","get:a","get:r","get:g","get:b","get:colorSpace","get:value","get:alpha","get:opacity","get:red","get:green","get:blue","toARGB32","withValues","withAlpha","withOpacity","withRed","withGreen","withBlue","computeLuminance","toString","operatorGetIndex"]} as const;
export interface _MaterialAccentColorNative extends MaterialAccentColor {
readonly [_flaxDartTypeValue]: _MaterialAccentColorNative;

toARGB32(): number;
withValues(options?: {alpha?: number | null | undefined; red?: number | null | undefined; green?: number | null | undefined; blue?: number | null | undefined; colorSpace?: upstream2.ColorSpace | null | undefined}): upstream1.Color;
withAlpha(a: number): upstream1.Color;
withOpacity(opacity: number): upstream1.Color;
withRed(r: number): upstream1.Color;
withGreen(g: number): upstream1.Color;
withBlue(b: number): upstream1.Color;
computeLuminance(): number;
toString(): string;
operatorGetIndex(key: number): upstream1.Color | null;
get shade100(): upstream1.Color;
get shade200(): upstream1.Color;
get shade400(): upstream1.Color;
get shade700(): upstream1.Color;
get keys(): DartIterable<number>;
get a(): number;
get r(): number;
get g(): number;
get b(): number;
get colorSpace(): upstream2.ColorSpace;
get value(): number;
get alpha(): number;
get opacity(): number;
get red(): number;
get green(): number;
get blue(): number;
}
export abstract class _MaterialAccentColorNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaterialAccentColor>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MaterialAccentColor;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:MaterialAccentColor", readonly [], false];
constructor(primary: number, swatch: DartMapInput<number, upstream1.Color, number, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>) { super(_MaterialAccentColorProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_MaterialAccentColorNative.prototype, _MaterialAccentColorProxy);
export namespace _MaterialAccentColorFactory { export function implement(args: [primary: number, swatch: DartMapInput<number, upstream1.Color, number, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>], implementation: {}): MaterialAccentColor {
return constructProxy(_MaterialAccentColorProxy, args, implementation) as MaterialAccentColor; } }
const _MaterialAccentColorBinding = _flaxProxyFactory(_MaterialAccentColorFactory, _MaterialAccentColorNative) as unknown as typeof _MaterialAccentColorFactory & (new(primary: number, swatch: DartMapInput<number, upstream1.Color, number, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>) => _MaterialAccentColorNative);
export const MaterialAccentColor: typeof _MaterialAccentColorBinding & _FlaxInstanceType<MaterialAccentColor> & _FlaxDartType<MaterialAccentColor, readonly ["class", "flax.material/material#type:MaterialAccentColor", readonly [], false]> = _flaxBindInstanceType<MaterialAccentColor, typeof _MaterialAccentColorBinding>(_MaterialAccentColorBinding, "flax.material/material#type:MaterialAccentColor", ["flax.core/sdk_painting#type:ColorSwatch","flax.core/flutter#type:Color","dart:core::Object"]) as typeof _MaterialAccentColorBinding & _FlaxInstanceType<MaterialAccentColor> & _FlaxDartType<MaterialAccentColor, readonly ["class", "flax.material/material#type:MaterialAccentColor", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "a" | "r" | "g" | "b" | "colorSpace" | "value" | "alpha" | "opacity" | "red" | "green" | "blue" | "keys" | "shade100" | "shade200" | "shade400" | "shade700" | "toARGB32" | "withValues" | "withAlpha" | "withOpacity" | "withRed" | "withGreen" | "withBlue" | "computeLuminance" | "toString" | "operatorGetIndex" | "__flaxBound:package:material_ui/src/colors.dart::MaterialAccentColor" | "__flaxBound:package:flutter/src/painting/colors.dart::ColorSwatch" | "__flaxBound:dart:ui::Color";

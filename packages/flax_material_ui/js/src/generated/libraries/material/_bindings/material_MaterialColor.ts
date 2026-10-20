// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_ColorSwatch';
import '@flax/flutter/painting/_bindings/sdk_painting_ColorSwatch';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_ColorSpace';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ColorSpace';
import { _flaxMemberParameters177, _flaxMemberParameters178, _flaxMemberParameters2, _flaxMemberParameters179, _flaxMemberParameters180, _flaxMemberParameters181, _flaxMemberParameters182, _flaxMemberParameters183, _flaxMemberParameters184 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MaterialColor extends Omit<upstream0.ColorSwatch<number>, _flaxOwnMembers0>, Omit<upstream1.Color, _flaxOwnMembers0 | keyof upstream0.ColorSwatch<number>>, Readonly<{ "__flaxBound:package:material_ui/src/colors.dart::MaterialColor": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/colors.dart::ColorSwatch": readonly [number] }>, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> { readonly __MaterialColor: unique symbol;
readonly [_flaxDartTypeValue]: MaterialColor;

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
readonly shade50: upstream1.Color;
readonly shade100: upstream1.Color;
readonly shade200: upstream1.Color;
readonly shade300: upstream1.Color;
readonly shade400: upstream1.Color;
readonly shade500: upstream1.Color;
readonly shade600: upstream1.Color;
readonly shade700: upstream1.Color;
readonly shade800: upstream1.Color;
readonly shade900: upstream1.Color;
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
defineObject("flax.material/material#type:MaterialColor", ["a","r","g","b","colorSpace","value","alpha","opacity","red","green","blue","keys","shade50","shade100","shade200","shade300","shade400","shade500","shade600","shade700","shade800","shade900"], [], _flaxBindingMethods("flax.material/material#type:MaterialColor", "object", {"operatorGetIndex":_flaxMemberParameters177}, {}), [], undefined, "flax.core/flutter#type:Color");
export function _MaterialColorFactory(primary: number, swatch: DartMapInput<number, upstream1.Color, number, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>): MaterialColor {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:MaterialColor", "", [{"name":"primary","required":true,"positional":true},{"name":"swatch","required":true,"positional":true}], [primary, swatch], {}) as MaterialColor;
}
const _MaterialColorProxy = {type: "flax.material/material#type:MaterialColor", parameters: _flaxMemberParameters178, constructors: {"": _flaxMemberParameters178}, methods: {"toARGB32":_flaxMemberParameters2,"withValues":_flaxMemberParameters179,"withAlpha":_flaxMemberParameters180,"withOpacity":_flaxMemberParameters181,"withRed":_flaxMemberParameters182,"withGreen":_flaxMemberParameters183,"withBlue":_flaxMemberParameters184,"computeLuminance":_flaxMemberParameters2,"toString":_flaxMemberParameters2,"operatorGetIndex":_flaxMemberParameters177}, getters: ["shade50","shade100","shade200","shade300","shade400","shade500","shade600","shade700","shade800","shade900","keys","a","r","g","b","colorSpace","value","alpha","opacity","red","green","blue"], setters: [], contextMembers: [], superMembers: ["get:shade50","get:shade100","get:shade200","get:shade300","get:shade400","get:shade500","get:shade600","get:shade700","get:shade800","get:shade900","get:keys","get:a","get:r","get:g","get:b","get:colorSpace","get:value","get:alpha","get:opacity","get:red","get:green","get:blue","toARGB32","withValues","withAlpha","withOpacity","withRed","withGreen","withBlue","computeLuminance","toString","operatorGetIndex"]} as const;
export interface _MaterialColorNative extends MaterialColor {
readonly [_flaxDartTypeValue]: _MaterialColorNative;

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
get shade50(): upstream1.Color;
get shade100(): upstream1.Color;
get shade200(): upstream1.Color;
get shade300(): upstream1.Color;
get shade400(): upstream1.Color;
get shade500(): upstream1.Color;
get shade600(): upstream1.Color;
get shade700(): upstream1.Color;
get shade800(): upstream1.Color;
get shade900(): upstream1.Color;
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
export abstract class _MaterialColorNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaterialColor>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MaterialColor;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:MaterialColor", readonly [], false];
constructor(primary: number, swatch: DartMapInput<number, upstream1.Color, number, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>) { super(_MaterialColorProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_MaterialColorNative.prototype, _MaterialColorProxy);
export namespace _MaterialColorFactory { export function implement(args: [primary: number, swatch: DartMapInput<number, upstream1.Color, number, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>], implementation: {}): MaterialColor {
return constructProxy(_MaterialColorProxy, args, implementation) as MaterialColor; } }
const _MaterialColorBinding = _flaxProxyFactory(_MaterialColorFactory, _MaterialColorNative) as unknown as typeof _MaterialColorFactory & (new(primary: number, swatch: DartMapInput<number, upstream1.Color, number, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>) => _MaterialColorNative);
export const MaterialColor: typeof _MaterialColorBinding & _FlaxInstanceType<MaterialColor> & _FlaxDartType<MaterialColor, readonly ["class", "flax.material/material#type:MaterialColor", readonly [], false]> = _flaxBindInstanceType<MaterialColor, typeof _MaterialColorBinding>(_MaterialColorBinding, "flax.material/material#type:MaterialColor", ["flax.core/sdk_painting#type:ColorSwatch","flax.core/flutter#type:Color","dart:core::Object"]) as typeof _MaterialColorBinding & _FlaxInstanceType<MaterialColor> & _FlaxDartType<MaterialColor, readonly ["class", "flax.material/material#type:MaterialColor", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "a" | "r" | "g" | "b" | "colorSpace" | "value" | "alpha" | "opacity" | "red" | "green" | "blue" | "keys" | "shade50" | "shade100" | "shade200" | "shade300" | "shade400" | "shade500" | "shade600" | "shade700" | "shade800" | "shade900" | "toARGB32" | "withValues" | "withAlpha" | "withOpacity" | "withRed" | "withGreen" | "withBlue" | "computeLuminance" | "toString" | "operatorGetIndex" | "__flaxBound:package:material_ui/src/colors.dart::MaterialColor" | "__flaxBound:package:flutter/src/painting/colors.dart::ColorSwatch" | "__flaxBound:dart:ui::Color";

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_ColorSwatch';
import '@flax/flutter/painting/_bindings/sdk_painting_ColorSwatch';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_ColorSpace';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ColorSpace';
const _flaxMemberParameters0 = [{"name":"key","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"alpha","required":false,"positional":false},{"name":"blue","required":false,"positional":false},{"name":"colorSpace","required":false,"positional":false},{"name":"green","required":false,"positional":false},{"name":"red","required":false,"positional":false}] as const;
const _flaxMemberParameters3 = [{"name":"a","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"opacity","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"r","required":true,"positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"g","required":true,"positional":true}] as const;
const _flaxMemberParameters7 = [{"name":"b","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MaterialAccentColor extends Omit<upstream0.ColorSwatch<number>, _flaxOwnMembers0>, Omit<upstream1.Color, _flaxOwnMembers0 | keyof upstream0.ColorSwatch<number>>, Readonly<{ "__flaxBound:package:flutter/src/material/colors.dart::MaterialAccentColor": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/colors.dart::ColorSwatch": readonly [number] }>, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> { readonly __MaterialAccentColor: unique symbol;
readonly [_flaxDartTypeValue]: MaterialAccentColor;

}
defineObject("flax.core/sdk_material#type:MaterialAccentColor", ["keys","a","r","g","b","colorSpace","value","alpha","opacity","red","green","blue","shade100","shade200","shade400","shade700"], [], _flaxBindingMethods("flax.core/sdk_material#type:MaterialAccentColor", "object", {"operatorGetIndex":_flaxMemberParameters0}, {}), [], undefined, "flax.core/flutter#type:Color");
const _MaterialAccentColorProxy = {type: "flax.core/sdk_material#type:MaterialAccentColor", parameters: [{"name":"primary","required":true,"positional":true},{"name":"swatch","required":true,"positional":true}], constructors: {"":[{"name":"primary","required":true,"positional":true},{"name":"swatch","required":true,"positional":true}]}, methods: {"toString":_flaxMemberParameters1,"toARGB32":_flaxMemberParameters1,"withValues":_flaxMemberParameters2,"withAlpha":_flaxMemberParameters3,"withOpacity":_flaxMemberParameters4,"withRed":_flaxMemberParameters5,"withGreen":_flaxMemberParameters6,"withBlue":_flaxMemberParameters7,"computeLuminance":_flaxMemberParameters1,"operatorGetIndex":_flaxMemberParameters0}, getters: ["shade100","shade200","shade400","shade700","keys","a","r","g","b","colorSpace","value","alpha","opacity","red","green","blue"], setters: [], contextMembers: [], superMembers: ["get:shade100","get:shade200","get:shade400","get:shade700","get:keys","get:a","get:r","get:g","get:b","get:colorSpace","get:value","get:alpha","get:opacity","get:red","get:green","get:blue","toString","toARGB32","withValues","withAlpha","withOpacity","withRed","withGreen","withBlue","computeLuminance","operatorGetIndex"]} as const;
export interface MaterialAccentColor {
readonly [_flaxDartTypeValue]: MaterialAccentColor;

toString(): string;
toARGB32(): number;
withValues(options?: {alpha?: number | null | undefined; red?: number | null | undefined; green?: number | null | undefined; blue?: number | null | undefined; colorSpace?: upstream2.ColorSpace | null | undefined}): upstream1.Color;
withAlpha(a: number): upstream1.Color;
withOpacity(opacity: number): upstream1.Color;
withRed(r: number): upstream1.Color;
withGreen(g: number): upstream1.Color;
withBlue(b: number): upstream1.Color;
computeLuminance(): number;
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
export abstract class MaterialAccentColor extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaterialAccentColor>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MaterialAccentColor;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:MaterialAccentColor", readonly [], false];
constructor(primary: number, swatch: DartMapInput<number, upstream1.Color, number, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>) { super(_MaterialAccentColorProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(MaterialAccentColor.prototype, _MaterialAccentColorProxy);
export namespace MaterialAccentColor { export function implement(args: [primary: number, swatch: DartMapInput<number, upstream1.Color, number, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>], implementation: {}): MaterialAccentColor {
return constructProxy(_MaterialAccentColorProxy, args, implementation) as MaterialAccentColor; } }
_flaxBindInstanceType<MaterialAccentColor, typeof MaterialAccentColor>(MaterialAccentColor, "flax.core/sdk_material#type:MaterialAccentColor", ["flax.core/sdk_painting#type:ColorSwatch","flax.core/flutter#type:Color","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "keys" | "a" | "r" | "g" | "b" | "colorSpace" | "value" | "alpha" | "opacity" | "red" | "green" | "blue" | "shade100" | "shade200" | "shade400" | "shade700" | "toString" | "toARGB32" | "withValues" | "withAlpha" | "withOpacity" | "withRed" | "withGreen" | "withBlue" | "computeLuminance" | "operatorGetIndex" | "__flaxBound:package:flutter/src/material/colors.dart::MaterialAccentColor" | "__flaxBound:package:flutter/src/painting/colors.dart::ColorSwatch" | "__flaxBound:dart:ui::Color";

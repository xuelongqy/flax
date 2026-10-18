// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_ColorSpace';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ColorSpace';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"alpha","required":false,"positional":false},{"name":"blue","required":false,"positional":false},{"name":"colorSpace","required":false,"positional":false},{"name":"green","required":false,"positional":false},{"name":"red","required":false,"positional":false}] as const;
const _flaxMemberParameters2 = [{"name":"a","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"opacity","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"r","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"g","required":true,"positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"b","required":true,"positional":true}] as const;
const _flaxMemberParameters7 = [{"name":"key","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ColorSwatch<T extends unknown | null = unknown | null> extends Omit<upstream0.Color, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/painting/colors.dart::ColorSwatch": readonly [T] }>, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> { readonly __ColorSwatch: unique symbol;
readonly [_flaxDartTypeValue]: ColorSwatch<T>;

}
defineObject("flax.core/sdk_painting#type:ColorSwatch", ["a","r","g","b","colorSpace","value","alpha","opacity","red","green","blue","keys"], [], _flaxBindingMethods("flax.core/sdk_painting#type:ColorSwatch", "object", {"toARGB32":_flaxMemberParameters0,"withValues":_flaxMemberParameters1,"withAlpha":_flaxMemberParameters2,"withOpacity":_flaxMemberParameters3,"withRed":_flaxMemberParameters4,"withGreen":_flaxMemberParameters5,"withBlue":_flaxMemberParameters6,"computeLuminance":_flaxMemberParameters0,"toString":_flaxMemberParameters0,"operatorGetIndex":_flaxMemberParameters7}, {}), []);
const _ColorSwatchProxy = {type: "flax.core/sdk_painting#type:ColorSwatch", parameters: [{"name":"primary","required":true,"positional":true},{"name":"_swatch","required":true,"positional":true}], constructors: {"":[{"name":"primary","required":true,"positional":true},{"name":"_swatch","required":true,"positional":true}]}, methods: {"toARGB32":_flaxMemberParameters0,"withValues":_flaxMemberParameters1,"withAlpha":_flaxMemberParameters2,"withOpacity":_flaxMemberParameters3,"withRed":_flaxMemberParameters4,"withGreen":_flaxMemberParameters5,"withBlue":_flaxMemberParameters6,"computeLuminance":_flaxMemberParameters0,"toString":_flaxMemberParameters0,"operatorGetIndex":_flaxMemberParameters7}, getters: ["keys","a","r","g","b","colorSpace","value","alpha","opacity","red","green","blue"], setters: [], contextMembers: [], superMembers: ["get:keys","get:a","get:r","get:g","get:b","get:colorSpace","get:value","get:alpha","get:opacity","get:red","get:green","get:blue","toARGB32","withValues","withAlpha","withOpacity","withRed","withGreen","withBlue","computeLuminance","toString","operatorGetIndex"]} as const;
export interface ColorSwatch<T extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: ColorSwatch<T>;

toARGB32(): number;
withValues(options?: {alpha?: number | null | undefined; red?: number | null | undefined; green?: number | null | undefined; blue?: number | null | undefined; colorSpace?: upstream1.ColorSpace | null | undefined}): upstream0.Color;
withAlpha(a: number): upstream0.Color;
withOpacity(opacity: number): upstream0.Color;
withRed(r: number): upstream0.Color;
withGreen(g: number): upstream0.Color;
withBlue(b: number): upstream0.Color;
computeLuminance(): number;
toString(): string;
operatorGetIndex(key: (T | DartInput<T>)): upstream0.Color | null;
get keys(): DartIterable<T>;
get a(): number;
get r(): number;
get g(): number;
get b(): number;
get colorSpace(): upstream1.ColorSpace;
get value(): number;
get alpha(): number;
get opacity(): number;
get red(): number;
get green(): number;
get blue(): number;
}
export abstract class ColorSwatch<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ColorSwatch<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ColorSwatch<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:ColorSwatch", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature2;
constructor(primary: number, _swatch: DartMapInput<unknown | null, upstream0.Color, unknown | null, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>) { super(_ColorSwatchProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ColorSwatch.prototype, _ColorSwatchProxy);
export namespace ColorSwatch { export function implement<T extends unknown | null = unknown | null>(args: [primary: number, _swatch: DartMapInput<unknown | null, upstream0.Color, unknown | null, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>], implementation: {}): ColorSwatch<T> {
return constructProxy(_ColorSwatchProxy, args, implementation) as ColorSwatch<T>; } }
export namespace ColorSwatch { function _flaxDefault_lerp<T extends unknown | null = unknown | null>(a: Readonly<{ "__flaxBound:package:flutter/src/painting/colors.dart::ColorSwatch": readonly [_FlaxDartOutput<T>] }> & Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/colors.dart::ColorSwatch": readonly [_FlaxDartOutput<T>] }> & Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null, t: number): ColorSwatch<_FlaxDartOutput<T>> | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:ColorSwatch.lerp", [a, b, t]);
return _flaxResult as ColorSwatch<_FlaxDartOutput<T>> | null;
}
export const lerp = _flaxDefineDartCallTypes(_flaxDefault_lerp, {"id":"flax.core/sdk_painting#function:ColorSwatch.lerp","parameters":[{"name":"a","required":true,"positional":true},{"name":"b","required":true,"positional":true},{"name":"t","required":true,"positional":true}]}) as _FlaxDartCallable<typeof _flaxDefault_lerp, _FlaxSignature1>;
}
_flaxBindInstanceType<ColorSwatch<unknown | null>, typeof ColorSwatch>(ColorSwatch, "flax.core/sdk_painting#type:ColorSwatch", ["flax.core/flutter#type:Color","dart:core::Object"]);
_flaxDefineDartTypes(ColorSwatch, "flax.core/sdk_painting#type:ColorSwatch", {...{"category":"object","constructors":{}}, proxy: _ColorSwatchProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "a" | "r" | "g" | "b" | "colorSpace" | "value" | "alpha" | "opacity" | "red" | "green" | "blue" | "keys" | "toARGB32" | "withValues" | "withAlpha" | "withOpacity" | "withRed" | "withGreen" | "withBlue" | "computeLuminance" | "toString" | "operatorGetIndex" | "__flaxBound:package:flutter/src/painting/colors.dart::ColorSwatch" | "__flaxBound:dart:ui::Color";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (primary: number, _swatch: DartMapInput<unknown | null, upstream0.Color, unknown | null, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>) => ColorSwatch<_Selected0>) & {readonly prototype: ColorSwatch<_Selected0>;implement(args: readonly [number, DartMapInput<unknown | null, upstream0.Color, unknown | null, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>], implementation: Partial<ColorSwatch<_Selected0>>): ColorSwatch<_Selected0>;} & _FlaxInstanceType<ColorSwatch<_Selected0>> & _FlaxDartType<ColorSwatch<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (a: Readonly<{ "__flaxBound:package:flutter/src/painting/colors.dart::ColorSwatch": readonly [_Selected0] }> & Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null,b: Readonly<{ "__flaxBound:package:flutter/src/painting/colors.dart::ColorSwatch": readonly [_Selected0] }> & Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null,t: number) => ColorSwatch<_Selected0> | null : never : never; }
interface _FlaxSignature2 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (primary: number, _swatch: DartMapInput<unknown | null, upstream0.Color, unknown | null, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>) => ColorSwatch<_Selected0>) & {readonly prototype: ColorSwatch<_Selected0>;implement(args: readonly [number, DartMapInput<unknown | null, upstream0.Color, unknown | null, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>], implementation: Partial<ColorSwatch<_Selected0>>): ColorSwatch<_Selected0>;} & _FlaxInstanceType<ColorSwatch<_Selected0>> & _FlaxDartType<ColorSwatch<_Selected0>> : never : never; }

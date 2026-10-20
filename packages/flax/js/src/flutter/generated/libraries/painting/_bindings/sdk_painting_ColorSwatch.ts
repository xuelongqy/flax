// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_ColorSpace';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ColorSpace';
import { _flaxMemberParameters2, _flaxMemberParameters39, _flaxMemberParameters40, _flaxMemberParameters41, _flaxMemberParameters42, _flaxMemberParameters43, _flaxMemberParameters44, _flaxMemberParameters45, _flaxMemberParameters46 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ColorSwatch<T extends unknown | null = unknown | null> extends Omit<upstream0.Color, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/painting/colors.dart::ColorSwatch": readonly [T] }>, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> { readonly __ColorSwatch: unique symbol;
readonly [_flaxDartTypeValue]: ColorSwatch<T>;

readonly a: number;
readonly r: number;
readonly g: number;
readonly b: number;
readonly colorSpace: upstream1.ColorSpace;
readonly value: number;
readonly alpha: number;
readonly opacity: number;
readonly red: number;
readonly green: number;
readonly blue: number;
readonly keys: DartIterable<T>;
toARGB32(): number;
withValues(options?: {alpha?: number | null | undefined; blue?: number | null | undefined; colorSpace?: upstream1.ColorSpace | null | undefined; green?: number | null | undefined; red?: number | null | undefined}): upstream0.Color;
withAlpha(a: number): upstream0.Color;
withOpacity(opacity: number): upstream0.Color;
withRed(r: number): upstream0.Color;
withGreen(g: number): upstream0.Color;
withBlue(b: number): upstream0.Color;
computeLuminance(): number;
toString(): string;
operatorGetIndex(key: (T | DartInput<T>)): upstream0.Color | null;
}
defineObject("flax.core/sdk_painting#type:ColorSwatch", ["a","r","g","b","colorSpace","value","alpha","opacity","red","green","blue","keys"], [], _flaxBindingMethods("flax.core/sdk_painting#type:ColorSwatch", "object", {"toARGB32":_flaxMemberParameters2,"withValues":_flaxMemberParameters39,"withAlpha":_flaxMemberParameters40,"withOpacity":_flaxMemberParameters41,"withRed":_flaxMemberParameters42,"withGreen":_flaxMemberParameters43,"withBlue":_flaxMemberParameters44,"computeLuminance":_flaxMemberParameters2,"toString":_flaxMemberParameters2,"operatorGetIndex":_flaxMemberParameters45}, {}), []);
export function _ColorSwatchFactory<T extends unknown | null = unknown | null>(primary: number, _swatch: DartMapInput<_FlaxDartOutput<T>, upstream0.Color, (T | _FlaxDartOutput<T>), Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>): ColorSwatch<T>;
export function _ColorSwatchFactory(primary: number, _swatch: DartMapInput<unknown | null, upstream0.Color, unknown | null, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>): ColorSwatch<unknown | null>;
export function _ColorSwatchFactory(primary: unknown, _swatch: unknown): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:ColorSwatch", "", [{"name":"primary","required":true,"positional":true},{"name":"_swatch","required":true,"positional":true}], [primary, _swatch], {}) as ColorSwatch<unknown | null>;
}
const _ColorSwatchProxy = {type: "flax.core/sdk_painting#type:ColorSwatch", parameters: _flaxMemberParameters46, constructors: {"": _flaxMemberParameters46}, methods: {"toARGB32":_flaxMemberParameters2,"withValues":_flaxMemberParameters39,"withAlpha":_flaxMemberParameters40,"withOpacity":_flaxMemberParameters41,"withRed":_flaxMemberParameters42,"withGreen":_flaxMemberParameters43,"withBlue":_flaxMemberParameters44,"computeLuminance":_flaxMemberParameters2,"toString":_flaxMemberParameters2,"operatorGetIndex":_flaxMemberParameters45}, getters: ["keys","a","r","g","b","colorSpace","value","alpha","opacity","red","green","blue"], setters: [], contextMembers: [], superMembers: ["get:keys","get:a","get:r","get:g","get:b","get:colorSpace","get:value","get:alpha","get:opacity","get:red","get:green","get:blue","toARGB32","withValues","withAlpha","withOpacity","withRed","withGreen","withBlue","computeLuminance","toString","operatorGetIndex"]} as const;
export interface _ColorSwatchNative<T extends unknown | null = unknown | null> extends ColorSwatch<T> {
readonly [_flaxDartTypeValue]: _ColorSwatchNative<T>;

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
export abstract class _ColorSwatchNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ColorSwatch<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ColorSwatch<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:ColorSwatch", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature2;
constructor(primary: number, _swatch: DartMapInput<unknown | null, upstream0.Color, unknown | null, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>) { super(_ColorSwatchProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ColorSwatchNative.prototype, _ColorSwatchProxy);
export namespace _ColorSwatchFactory { export function implement<T extends unknown | null = unknown | null>(args: [primary: number, _swatch: DartMapInput<unknown | null, upstream0.Color, unknown | null, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>], implementation: {}): ColorSwatch<T> {
return constructProxy(_ColorSwatchProxy, args, implementation) as ColorSwatch<T>; } }
const _ColorSwatchBinding = _flaxProxyFactory(_ColorSwatchFactory, _ColorSwatchNative) as unknown as typeof _ColorSwatchFactory & (new<T extends unknown | null = unknown | null>(primary: number, _swatch: DartMapInput<unknown | null, upstream0.Color, unknown | null, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>) => _ColorSwatchNative<T>);
export namespace _ColorSwatchFactory { function _flaxDefault_lerp<T extends unknown | null = unknown | null>(a: Readonly<{ "__flaxBound:package:flutter/src/painting/colors.dart::ColorSwatch": readonly [_FlaxDartOutput<T>] }> & Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/colors.dart::ColorSwatch": readonly [_FlaxDartOutput<T>] }> & Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null, t: number): ColorSwatch<_FlaxDartOutput<T>> | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:ColorSwatch.lerp", [a, b, t]);
return _flaxResult as ColorSwatch<_FlaxDartOutput<T>> | null;
}
export const lerp = _flaxDefineDartCallTypes(_flaxDefault_lerp, {"id":"flax.core/sdk_painting#function:ColorSwatch.lerp","parameters":[{"name":"a","required":true,"positional":true},{"name":"b","required":true,"positional":true},{"name":"t","required":true,"positional":true}]}) as _FlaxDartCallable<typeof _flaxDefault_lerp, _FlaxSignature1>;
}
export const ColorSwatch: typeof _ColorSwatchBinding & _FlaxInstanceType<ColorSwatch<unknown | null>> & _FlaxDartType<ColorSwatch<unknown | null>, readonly ["class", "flax.core/sdk_painting#type:ColorSwatch", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<ColorSwatch<unknown | null>, typeof _ColorSwatchBinding>(_ColorSwatchBinding, "flax.core/sdk_painting#type:ColorSwatch", ["flax.core/flutter#type:Color","dart:core::Object"]) as typeof _ColorSwatchBinding & _FlaxInstanceType<ColorSwatch<unknown | null>> & _FlaxDartType<ColorSwatch<unknown | null>, readonly ["class", "flax.core/sdk_painting#type:ColorSwatch", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(ColorSwatch, "flax.core/sdk_painting#type:ColorSwatch", {...{"category":"object","constructors":{"":[{"name":"primary","required":true,"positional":true},{"name":"_swatch","required":true,"positional":true}]}}, proxy: _ColorSwatchProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "a" | "r" | "g" | "b" | "colorSpace" | "value" | "alpha" | "opacity" | "red" | "green" | "blue" | "keys" | "toARGB32" | "withValues" | "withAlpha" | "withOpacity" | "withRed" | "withGreen" | "withBlue" | "computeLuminance" | "toString" | "operatorGetIndex" | "__flaxBound:package:flutter/src/painting/colors.dart::ColorSwatch" | "__flaxBound:dart:ui::Color";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (primary: number, _swatch: DartMapInput<unknown | null, upstream0.Color, unknown | null, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>) => _ColorSwatchNative<_Selected0>) & {(primary: number, _swatch: DartMapInput<_Selected0, upstream0.Color, (_Selected0 | DartInput<_Selected0>), Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>): _ColorSwatchNative<_Selected0>;readonly prototype: _ColorSwatchNative<_Selected0>;implement(args: readonly [number, DartMapInput<unknown | null, upstream0.Color, unknown | null, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>], implementation: Partial<_ColorSwatchNative<_Selected0>>): _ColorSwatchNative<_Selected0>;} & _FlaxInstanceType<_ColorSwatchNative<_Selected0>> & _FlaxDartType<_ColorSwatchNative<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (a: Readonly<{ "__flaxBound:package:flutter/src/painting/colors.dart::ColorSwatch": readonly [_Selected0] }> & Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null,b: Readonly<{ "__flaxBound:package:flutter/src/painting/colors.dart::ColorSwatch": readonly [_Selected0] }> & Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null,t: number) => ColorSwatch<_Selected0> | null : never : never; }
interface _FlaxSignature2 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (primary: number, _swatch: DartMapInput<unknown | null, upstream0.Color, unknown | null, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>) => _ColorSwatchNative<_Selected0>) & {(primary: number, _swatch: DartMapInput<_Selected0, upstream0.Color, (_Selected0 | DartInput<_Selected0>), Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>): _ColorSwatchNative<_Selected0>;readonly prototype: _ColorSwatchNative<_Selected0>;implement(args: readonly [number, DartMapInput<unknown | null, upstream0.Color, unknown | null, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>], implementation: Partial<_ColorSwatchNative<_Selected0>>): _ColorSwatchNative<_Selected0>;} & _FlaxInstanceType<_ColorSwatchNative<_Selected0>> & _FlaxDartType<_ColorSwatchNative<_Selected0>> : never : never; }

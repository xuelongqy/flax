// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
const _flaxMemberParameters0 = [{"name":"alpha","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"hue","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"saturation","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"lightness","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [] as const;
const _flaxMemberParameters5 = [{"name":"alpha","required":true,"positional":true},{"name":"hue","required":true,"positional":true},{"name":"saturation","required":true,"positional":true},{"name":"lightness","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface HSLColor extends Readonly<{ "__flaxBound:package:flutter/src/painting/colors.dart::HSLColor": readonly [] }> { readonly __HSLColor: unique symbol;
readonly [_flaxDartTypeValue]: HSLColor;

}
defineObject("flax.core/sdk_painting#type:HSLColor", ["alpha","hue","saturation","lightness"], [], _flaxBindingMethods("flax.core/sdk_painting#type:HSLColor", "object", {"withAlpha":_flaxMemberParameters0,"withHue":_flaxMemberParameters1,"withSaturation":_flaxMemberParameters2,"withLightness":_flaxMemberParameters3,"toColor":_flaxMemberParameters4,"toString":_flaxMemberParameters4}, {}), []);
const _HSLColorProxy = {type: "flax.core/sdk_painting#type:HSLColor", parameters: _flaxMemberParameters5, constructors: {"fromAHSL": _flaxMemberParameters5}, methods: {"withAlpha":_flaxMemberParameters0,"withHue":_flaxMemberParameters1,"withSaturation":_flaxMemberParameters2,"withLightness":_flaxMemberParameters3,"toColor":_flaxMemberParameters4,"toString":_flaxMemberParameters4}, getters: ["alpha","hue","saturation","lightness"], setters: [], contextMembers: [], superMembers: ["get:alpha","get:hue","get:saturation","get:lightness","withAlpha","withHue","withSaturation","withLightness","toColor","toString"]} as const;
export interface HSLColor {
readonly [_flaxDartTypeValue]: HSLColor;

withAlpha(alpha: number): HSLColor;
withHue(hue: number): HSLColor;
withSaturation(saturation: number): HSLColor;
withLightness(lightness: number): HSLColor;
toColor(): upstream0.Color;
toString(): string;
get alpha(): number;
get hue(): number;
get saturation(): number;
get lightness(): number;
}
export abstract class HSLColor extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<HSLColor>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: HSLColor;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:HSLColor", readonly [], false];
constructor(alpha: number, hue: number, saturation: number, lightness: number) { super(_HSLColorProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(HSLColor.prototype, _HSLColorProxy);
export namespace HSLColor { export function implement(args: [alpha: number, hue: number, saturation: number, lightness: number], implementation: {}): HSLColor {
return constructProxy(_HSLColorProxy, args, implementation) as HSLColor; } }
export namespace HSLColor { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/colors.dart::HSLColor": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/colors.dart::HSLColor": readonly [] }> | null, t: number): HSLColor | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:HSLColor.lerp", [a, b, t]);
return _flaxResult as HSLColor | null;
} }
_flaxBindInstanceType<HSLColor, typeof HSLColor>(HSLColor, "flax.core/sdk_painting#type:HSLColor", ["dart:core::Object"]);

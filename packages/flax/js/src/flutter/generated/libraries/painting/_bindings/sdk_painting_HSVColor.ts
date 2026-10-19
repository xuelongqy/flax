// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import { _flaxMemberParameters62, _flaxMemberParameters63, _flaxMemberParameters64, _flaxMemberParameters67, _flaxMemberParameters2, _flaxMemberParameters68 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface HSVColor extends Readonly<{ "__flaxBound:package:flutter/src/painting/colors.dart::HSVColor": readonly [] }> { readonly __HSVColor: unique symbol;
readonly [_flaxDartTypeValue]: HSVColor;

}
defineObject("flax.core/sdk_painting#type:HSVColor", ["alpha","hue","saturation","value"], [], _flaxBindingMethods("flax.core/sdk_painting#type:HSVColor", "object", {"withAlpha":_flaxMemberParameters62,"withHue":_flaxMemberParameters63,"withSaturation":_flaxMemberParameters64,"withValue":_flaxMemberParameters67,"toColor":_flaxMemberParameters2,"toString":_flaxMemberParameters2}, {}), []);
const _HSVColorProxy = {type: "flax.core/sdk_painting#type:HSVColor", parameters: _flaxMemberParameters68, constructors: {"fromAHSV": _flaxMemberParameters68}, methods: {"withAlpha":_flaxMemberParameters62,"withHue":_flaxMemberParameters63,"withSaturation":_flaxMemberParameters64,"withValue":_flaxMemberParameters67,"toColor":_flaxMemberParameters2,"toString":_flaxMemberParameters2}, getters: ["alpha","hue","saturation","value"], setters: [], contextMembers: [], superMembers: ["get:alpha","get:hue","get:saturation","get:value","withAlpha","withHue","withSaturation","withValue","toColor","toString"]} as const;
export interface HSVColor {
readonly [_flaxDartTypeValue]: HSVColor;

withAlpha(alpha: number): HSVColor;
withHue(hue: number): HSVColor;
withSaturation(saturation: number): HSVColor;
withValue(value: number): HSVColor;
toColor(): upstream0.Color;
toString(): string;
get alpha(): number;
get hue(): number;
get saturation(): number;
get value(): number;
}
export abstract class HSVColor extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<HSVColor>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: HSVColor;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:HSVColor", readonly [], false];
constructor(alpha: number, hue: number, saturation: number, value: number) { super(_HSVColorProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(HSVColor.prototype, _HSVColorProxy);
export namespace HSVColor { export function implement(args: [alpha: number, hue: number, saturation: number, value: number], implementation: {}): HSVColor {
return constructProxy(_HSVColorProxy, args, implementation) as HSVColor; } }
export namespace HSVColor { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/colors.dart::HSVColor": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/colors.dart::HSVColor": readonly [] }> | null, t: number): HSVColor | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:HSVColor.lerp", [a, b, t]);
return _flaxResult as HSVColor | null;
} }
_flaxBindInstanceType<HSVColor, typeof HSVColor>(HSVColor, "flax.core/sdk_painting#type:HSVColor", ["dart:core::Object"]);

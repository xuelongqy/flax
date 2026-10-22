// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import { _flaxMemberParameters24, _flaxMemberParameters63, _flaxMemberParameters64, _flaxMemberParameters65, _flaxMemberParameters66, _flaxMemberParameters2, _flaxMemberParameters67 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface HSLColor extends Readonly<{ "__flaxBound:package:flutter/src/painting/colors.dart::HSLColor": readonly [] }> { readonly __HSLColor: unique symbol;
readonly [_flaxDartTypeValue]: HSLColor;

readonly alpha: number;
readonly hue: number;
readonly saturation: number;
readonly lightness: number;
withAlpha(alpha: number): HSLColor;
withHue(hue: number): HSLColor;
withSaturation(saturation: number): HSLColor;
withLightness(lightness: number): HSLColor;
toColor(): upstream0.Color;
toString(): string;
}
defineObject("flax.core/sdk_painting#type:HSLColor", ["alpha","hue","saturation","lightness"], [], _flaxBindingMethods("flax.core/sdk_painting#type:HSLColor", "object", {"withAlpha":_flaxMemberParameters63,"withHue":_flaxMemberParameters64,"withSaturation":_flaxMemberParameters65,"withLightness":_flaxMemberParameters66,"toColor":_flaxMemberParameters2,"toString":_flaxMemberParameters2}, {}), []);
export namespace _HSLColorFactory {
export function fromAHSL(alpha: number, hue: number, saturation: number, lightness: number): HSLColor {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 4) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:HSLColor", "fromAHSL", [{"name":"alpha","required":true,"positional":true},{"name":"hue","required":true,"positional":true},{"name":"saturation","required":true,"positional":true},{"name":"lightness","required":true,"positional":true}], [alpha, hue, saturation, lightness], {}) as HSLColor;
}
}
export namespace _HSLColorFactory {
export function fromColor(color: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>): HSLColor {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:HSLColor", "fromColor", [{"name":"color","required":true,"positional":true}], [color], {}) as HSLColor;
}
}
const _HSLColorProxy = {type: "flax.core/sdk_painting#type:HSLColor", parameters: _flaxMemberParameters67, constructors: {"fromAHSL": _flaxMemberParameters67}, methods: {"withAlpha":_flaxMemberParameters63,"withHue":_flaxMemberParameters64,"withSaturation":_flaxMemberParameters65,"withLightness":_flaxMemberParameters66,"toColor":_flaxMemberParameters2,"toString":_flaxMemberParameters2}, getters: ["alpha","hue","saturation","lightness"], setters: [], contextMembers: [], superMembers: ["get:alpha","get:hue","get:saturation","get:lightness","withAlpha","withHue","withSaturation","withLightness","toColor","toString"]} as const;
export interface _HSLColorNative extends HSLColor {
readonly [_flaxDartTypeValue]: _HSLColorNative;
readonly [_flaxDartConstructors]?: {"fromAHSL": (alpha: number, hue: number, saturation: number, lightness: number) => void;};

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
export abstract class _HSLColorNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<HSLColor>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: HSLColor;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:HSLColor", readonly [], false];
constructor(alpha: number, hue: number, saturation: number, lightness: number); constructor(call: _FlaxProxySuper<_HSLColorNative>); constructor(...args: unknown[]) { super(_HSLColorProxy, args); }
}
_flaxDefineProxyBase(_HSLColorNative.prototype, _HSLColorProxy);
export namespace _HSLColorFactory { export function implement(args: [alpha: number, hue: number, saturation: number, lightness: number], implementation: {}): HSLColor {
return constructProxy(_HSLColorProxy, args, implementation) as HSLColor; } }
const _HSLColorBinding = _flaxProxyFactory(_HSLColorFactory, _HSLColorNative) as unknown as typeof _HSLColorFactory & (new(alpha: number, hue: number, saturation: number, lightness: number) => _HSLColorNative) & (new(call: _FlaxProxySuper<_HSLColorNative>) => _HSLColorNative);
export namespace _HSLColorFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/colors.dart::HSLColor": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/colors.dart::HSLColor": readonly [] }> | null, t: number): HSLColor | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:HSLColor.lerp", [a, b, t], _flaxMemberParameters24);
return _flaxResult as HSLColor | null;
} }
export const HSLColor: typeof _HSLColorBinding & _FlaxInstanceType<HSLColor> & _FlaxDartType<HSLColor, readonly ["class", "flax.core/sdk_painting#type:HSLColor", readonly [], false]> = _flaxBindInstanceType<HSLColor, typeof _HSLColorBinding>(_HSLColorBinding, "flax.core/sdk_painting#type:HSLColor", ["dart:core::Object"]) as typeof _HSLColorBinding & _FlaxInstanceType<HSLColor> & _FlaxDartType<HSLColor, readonly ["class", "flax.core/sdk_painting#type:HSLColor", readonly [], false]>;

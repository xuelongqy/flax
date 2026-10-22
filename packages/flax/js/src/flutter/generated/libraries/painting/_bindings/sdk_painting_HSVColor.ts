// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import { _flaxMemberParameters24, _flaxMemberParameters63, _flaxMemberParameters64, _flaxMemberParameters65, _flaxMemberParameters68, _flaxMemberParameters2, _flaxMemberParameters69 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface HSVColor extends Readonly<{ "__flaxBound:package:flutter/src/painting/colors.dart::HSVColor": readonly [] }> { readonly __HSVColor: unique symbol;
readonly [_flaxDartTypeValue]: HSVColor;

readonly alpha: number;
readonly hue: number;
readonly saturation: number;
readonly value: number;
withAlpha(alpha: number): HSVColor;
withHue(hue: number): HSVColor;
withSaturation(saturation: number): HSVColor;
withValue(value: number): HSVColor;
toColor(): upstream0.Color;
toString(): string;
}
defineObject("flax.core/sdk_painting#type:HSVColor", ["alpha","hue","saturation","value"], [], _flaxBindingMethods("flax.core/sdk_painting#type:HSVColor", "object", {"withAlpha":_flaxMemberParameters63,"withHue":_flaxMemberParameters64,"withSaturation":_flaxMemberParameters65,"withValue":_flaxMemberParameters68,"toColor":_flaxMemberParameters2,"toString":_flaxMemberParameters2}, {}), []);
export namespace _HSVColorFactory {
export function fromAHSV(alpha: number, hue: number, saturation: number, value: number): HSVColor {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 4) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:HSVColor", "fromAHSV", [{"name":"alpha","required":true,"positional":true},{"name":"hue","required":true,"positional":true},{"name":"saturation","required":true,"positional":true},{"name":"value","required":true,"positional":true}], [alpha, hue, saturation, value], {}) as HSVColor;
}
}
export namespace _HSVColorFactory {
export function fromColor(color: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>): HSVColor {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:HSVColor", "fromColor", [{"name":"color","required":true,"positional":true}], [color], {}) as HSVColor;
}
}
const _HSVColorProxy = {type: "flax.core/sdk_painting#type:HSVColor", parameters: _flaxMemberParameters69, constructors: {"fromAHSV": _flaxMemberParameters69}, methods: {"withAlpha":_flaxMemberParameters63,"withHue":_flaxMemberParameters64,"withSaturation":_flaxMemberParameters65,"withValue":_flaxMemberParameters68,"toColor":_flaxMemberParameters2,"toString":_flaxMemberParameters2}, getters: ["alpha","hue","saturation","value"], setters: [], contextMembers: [], superMembers: ["get:alpha","get:hue","get:saturation","get:value","withAlpha","withHue","withSaturation","withValue","toColor","toString"]} as const;
export interface _HSVColorNative extends HSVColor {
readonly [_flaxDartTypeValue]: _HSVColorNative;
readonly [_flaxDartConstructors]?: {"fromAHSV": (alpha: number, hue: number, saturation: number, value: number) => void;};

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
export abstract class _HSVColorNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<HSVColor>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: HSVColor;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:HSVColor", readonly [], false];
constructor(alpha: number, hue: number, saturation: number, value: number); constructor(call: _FlaxProxySuper<_HSVColorNative>); constructor(...args: unknown[]) { super(_HSVColorProxy, args); }
}
_flaxDefineProxyBase(_HSVColorNative.prototype, _HSVColorProxy);
export namespace _HSVColorFactory { export function implement(args: [alpha: number, hue: number, saturation: number, value: number], implementation: {}): HSVColor {
return constructProxy(_HSVColorProxy, args, implementation) as HSVColor; } }
const _HSVColorBinding = _flaxProxyFactory(_HSVColorFactory, _HSVColorNative) as unknown as typeof _HSVColorFactory & (new(alpha: number, hue: number, saturation: number, value: number) => _HSVColorNative) & (new(call: _FlaxProxySuper<_HSVColorNative>) => _HSVColorNative);
export namespace _HSVColorFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/colors.dart::HSVColor": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/colors.dart::HSVColor": readonly [] }> | null, t: number): HSVColor | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:HSVColor.lerp", [a, b, t], _flaxMemberParameters24);
return _flaxResult as HSVColor | null;
} }
export const HSVColor: typeof _HSVColorBinding & _FlaxInstanceType<HSVColor> & _FlaxDartType<HSVColor, readonly ["class", "flax.core/sdk_painting#type:HSVColor", readonly [], false]> = _flaxBindInstanceType<HSVColor, typeof _HSVColorBinding>(_HSVColorBinding, "flax.core/sdk_painting#type:HSVColor", ["dart:core::Object"]) as typeof _HSVColorBinding & _FlaxInstanceType<HSVColor> & _FlaxDartType<HSVColor, readonly ["class", "flax.core/sdk_painting#type:HSVColor", readonly [], false]>;

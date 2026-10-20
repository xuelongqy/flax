// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesConstraint';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesConstraint';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_ColorSpace';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ColorSpace';
import { _flaxMemberParameters454, _flaxMemberParameters30, _flaxMemberParameters2, _flaxMemberParameters456, _flaxMemberParameters457, _flaxMemberParameters458, _flaxMemberParameters459, _flaxMemberParameters460, _flaxMemberParameters461 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface WidgetStateColor extends Omit<upstream0.Color, _flaxOwnMembers0>, Omit<upstream1.WidgetStateProperty<upstream0.Color>, _flaxOwnMembers0 | keyof upstream0.Color>, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateColor": readonly [] }>, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream0.Color] }> { readonly __WidgetStateColor: unique symbol;
readonly [_flaxDartTypeValue]: WidgetStateColor;

readonly a: number;
readonly r: number;
readonly g: number;
readonly b: number;
readonly colorSpace: upstream4.ColorSpace;
readonly value: number;
readonly alpha: number;
readonly opacity: number;
readonly red: number;
readonly green: number;
readonly blue: number;
toARGB32(): number;
withValues(options?: {alpha?: number | null | undefined; blue?: number | null | undefined; colorSpace?: upstream4.ColorSpace | null | undefined; green?: number | null | undefined; red?: number | null | undefined}): upstream0.Color;
withAlpha(a: number): upstream0.Color;
withOpacity(opacity: number): upstream0.Color;
withRed(r: number): upstream0.Color;
withGreen(g: number): upstream0.Color;
withBlue(b: number): upstream0.Color;
computeLuminance(): number;
toString(): string;
resolve(states: DartSetInput<upstream2.WidgetState, upstream2.WidgetState>): upstream0.Color;
}
defineObject("flax.core/sdk_widgets#type:WidgetStateColor", ["a","r","g","b","colorSpace","value","alpha","opacity","red","green","blue"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:WidgetStateColor", "object", {"resolve":_flaxMemberParameters454}, {}), [], undefined, "flax.core/flutter#type:Color");
export namespace _WidgetStateColorFactory {
export function resolveWith(callback: ((states: DartSet<upstream2.WidgetState>) => Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>)): WidgetStateColor {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:WidgetStateColor", "resolveWith", [{"name":"callback","required":true,"positional":true}], [callback], {}) as WidgetStateColor;
}
}
export namespace _WidgetStateColorFactory {
export function fromMap(map: DartMapInput<upstream3.WidgetStatesConstraint, upstream0.Color, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [] }>, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>>): WidgetStateColor {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:WidgetStateColor", "fromMap", [{"name":"map","required":true,"positional":true}], [map], {}) as WidgetStateColor;
}
}
const _WidgetStateColorProxy = {type: "flax.core/sdk_widgets#type:WidgetStateColor", parameters: _flaxMemberParameters30, constructors: {"": _flaxMemberParameters30}, methods: {"toARGB32":_flaxMemberParameters2,"withValues":_flaxMemberParameters456,"withAlpha":_flaxMemberParameters457,"withOpacity":_flaxMemberParameters458,"withRed":_flaxMemberParameters459,"withGreen":_flaxMemberParameters460,"withBlue":_flaxMemberParameters461,"computeLuminance":_flaxMemberParameters2,"toString":_flaxMemberParameters2,"resolve":_flaxMemberParameters454}, getters: ["a","r","g","b","colorSpace","value","alpha","opacity","red","green","blue"], setters: [], contextMembers: [], superMembers: ["get:a","get:r","get:g","get:b","get:colorSpace","get:value","get:alpha","get:opacity","get:red","get:green","get:blue","toARGB32","withValues","withAlpha","withOpacity","withRed","withGreen","withBlue","computeLuminance","toString"]} as const;
export interface _WidgetStateColorNative extends WidgetStateColor {
readonly [_flaxDartTypeValue]: _WidgetStateColorNative;

toARGB32(): number;
withValues(options?: {alpha?: number | null | undefined; red?: number | null | undefined; green?: number | null | undefined; blue?: number | null | undefined; colorSpace?: upstream4.ColorSpace | null | undefined}): upstream0.Color;
withAlpha(a: number): upstream0.Color;
withOpacity(opacity: number): upstream0.Color;
withRed(r: number): upstream0.Color;
withGreen(g: number): upstream0.Color;
withBlue(b: number): upstream0.Color;
computeLuminance(): number;
toString(): string;
get a(): number;
get r(): number;
get g(): number;
get b(): number;
get colorSpace(): upstream4.ColorSpace;
get value(): number;
get alpha(): number;
get opacity(): number;
get red(): number;
get green(): number;
get blue(): number;
}
export abstract class _WidgetStateColorNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<WidgetStateColor>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: WidgetStateColor;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:WidgetStateColor", readonly [], false];
constructor(defaultValue: number) { super(_WidgetStateColorProxy, Array.from(arguments)); }
abstract resolve(states: DartSetInput<upstream2.WidgetState, upstream2.WidgetState>): upstream0.Color;
}
_flaxDefineProxyBase(_WidgetStateColorNative.prototype, _WidgetStateColorProxy);
export namespace _WidgetStateColorFactory { export function implement(args: [defaultValue: number], implementation: {resolve: ((states: DartSet<upstream2.WidgetState>) => Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>)}): WidgetStateColor {
return constructProxy(_WidgetStateColorProxy, args, implementation) as WidgetStateColor; } }
const _WidgetStateColorBinding = _flaxProxyFactory(_WidgetStateColorFactory, _WidgetStateColorNative) as unknown as typeof _WidgetStateColorFactory & (abstract new(defaultValue: number) => _WidgetStateColorNative);
export namespace _WidgetStateColorFactory { export declare const transparent: WidgetStateColor; }
_flaxDefineStaticGetters(_WidgetStateColorFactory, "flax.core/sdk_widgets#read:WidgetStateColor.", ["transparent"]);
export const WidgetStateColor: typeof _WidgetStateColorBinding & _FlaxInstanceType<WidgetStateColor> & _FlaxDartType<WidgetStateColor, readonly ["class", "flax.core/sdk_widgets#type:WidgetStateColor", readonly [], false]> = _flaxBindInstanceType<WidgetStateColor, typeof _WidgetStateColorBinding>(_WidgetStateColorBinding, "flax.core/sdk_widgets#type:WidgetStateColor", ["flax.core/flutter#type:Color","dart:core::Object","flax.core/flutter#type:WidgetStateProperty"]) as typeof _WidgetStateColorBinding & _FlaxInstanceType<WidgetStateColor> & _FlaxDartType<WidgetStateColor, readonly ["class", "flax.core/sdk_widgets#type:WidgetStateColor", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "a" | "r" | "g" | "b" | "colorSpace" | "value" | "alpha" | "opacity" | "red" | "green" | "blue" | "toARGB32" | "withValues" | "withAlpha" | "withOpacity" | "withRed" | "withGreen" | "withBlue" | "computeLuminance" | "toString" | "resolve" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateColor" | "__flaxBound:dart:ui::Color" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty";

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_ColorSpace';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ColorSpace';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
const _flaxMemberParameters0 = [{"name":"states","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"defaultValue","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
const _flaxMemberParameters3 = [{"name":"alpha"},{"name":"blue"},{"name":"colorSpace"},{"name":"green"},{"name":"red"}] as const;
const _flaxMemberParameters4 = [{"name":"a","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"opacity","required":true,"positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"r","required":true,"positional":true}] as const;
const _flaxMemberParameters7 = [{"name":"g","required":true,"positional":true}] as const;
const _flaxMemberParameters8 = [{"name":"b","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface WidgetStateColor extends Omit<upstream0.Color, _flaxOwnMembers0>, Omit<upstream1.WidgetStateProperty<upstream0.Color>, _flaxOwnMembers0 | keyof upstream0.Color>, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateColor": readonly [] }>, Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream0.Color] }> { readonly __WidgetStateColor: unique symbol;
readonly [_flaxDartTypeValue]: WidgetStateColor;

}
defineObject("flax.core/sdk_widgets#type:WidgetStateColor", ["a","r","g","b","colorSpace","value","alpha","opacity","red","green","blue"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:WidgetStateColor", "object", {"resolve":_flaxMemberParameters0}, {}), [], undefined, "flax.core/flutter#type:Color");
const _WidgetStateColorProxy = {type: "flax.core/sdk_widgets#type:WidgetStateColor", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toARGB32":_flaxMemberParameters2,"withValues":_flaxMemberParameters3,"withAlpha":_flaxMemberParameters4,"withOpacity":_flaxMemberParameters5,"withRed":_flaxMemberParameters6,"withGreen":_flaxMemberParameters7,"withBlue":_flaxMemberParameters8,"computeLuminance":_flaxMemberParameters2,"toString":_flaxMemberParameters2,"resolve":_flaxMemberParameters0}, getters: ["a","r","g","b","colorSpace","value","alpha","opacity","red","green","blue"], setters: [], contextMembers: [], superMembers: ["get:a","get:r","get:g","get:b","get:colorSpace","get:value","get:alpha","get:opacity","get:red","get:green","get:blue","toARGB32","withValues","withAlpha","withOpacity","withRed","withGreen","withBlue","computeLuminance","toString"]} as const;
export interface WidgetStateColor {
readonly [_flaxDartTypeValue]: WidgetStateColor;

toARGB32(): number;
withValues(options?: {alpha?: number | null | undefined; red?: number | null | undefined; green?: number | null | undefined; blue?: number | null | undefined; colorSpace?: upstream2.ColorSpace | null | undefined}): upstream0.Color;
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
get colorSpace(): upstream2.ColorSpace;
get value(): number;
get alpha(): number;
get opacity(): number;
get red(): number;
get green(): number;
get blue(): number;
}
export abstract class WidgetStateColor extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<WidgetStateColor>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: WidgetStateColor;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:WidgetStateColor", readonly [], false];
constructor(defaultValue: number) { super(_WidgetStateColorProxy, Array.from(arguments)); }
abstract resolve(states: DartSetInput<upstream3.WidgetState, upstream3.WidgetState>): upstream0.Color;
}
_flaxDefineProxyBase(WidgetStateColor.prototype, _WidgetStateColorProxy);
export namespace WidgetStateColor { export function implement(args: [defaultValue: number], implementation: {resolve: ((states: DartSet<upstream3.WidgetState>) => Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>)}): WidgetStateColor {
return constructProxy(_WidgetStateColorProxy, args, implementation) as WidgetStateColor; } }
export namespace WidgetStateColor { export declare const transparent: WidgetStateColor; }
_flaxDefineStaticGetters(WidgetStateColor, "flax.core/sdk_widgets#read:WidgetStateColor.", ["transparent"]);
_flaxBindInstanceType<WidgetStateColor, typeof WidgetStateColor>(WidgetStateColor, "flax.core/sdk_widgets#type:WidgetStateColor", ["flax.core/flutter#type:Color","dart:core::Object","flax.core/flutter#type:WidgetStateProperty"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "a" | "r" | "g" | "b" | "colorSpace" | "value" | "alpha" | "opacity" | "red" | "green" | "blue" | "toARGB32" | "withValues" | "withAlpha" | "withOpacity" | "withRed" | "withGreen" | "withBlue" | "computeLuminance" | "toString" | "resolve" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateColor" | "__flaxBound:dart:ui::Color" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty";

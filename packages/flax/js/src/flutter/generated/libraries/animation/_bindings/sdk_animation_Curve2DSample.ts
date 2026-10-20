// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { _flaxMemberParameters2, _flaxMemberParameters30 } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Curve2DSample extends Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve2DSample": readonly [] }> { readonly __Curve2DSample: unique symbol;
readonly [_flaxDartTypeValue]: Curve2DSample;

readonly t: number;
readonly value: upstream0.Offset;
toString(): string;
}
defineObject("flax.core/sdk_animation#type:Curve2DSample", ["t","value"], [], _flaxBindingMethods("flax.core/sdk_animation#type:Curve2DSample", "object", {"toString":_flaxMemberParameters2}, {}), []);
export function _Curve2DSampleFactory(t: number, value: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): Curve2DSample {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_animation#type:Curve2DSample", "", [{"name":"t","required":true,"positional":true},{"name":"value","required":true,"positional":true}], [t, value], {}) as Curve2DSample;
}
const _Curve2DSampleProxy = {type: "flax.core/sdk_animation#type:Curve2DSample", parameters: _flaxMemberParameters30, constructors: {"": _flaxMemberParameters30}, methods: {"toString":_flaxMemberParameters2}, getters: ["t","value"], setters: [], contextMembers: [], superMembers: ["get:t","get:value","toString"]} as const;
export interface _Curve2DSampleNative extends Curve2DSample {
readonly [_flaxDartTypeValue]: _Curve2DSampleNative;

toString(): string;
get t(): number;
get value(): upstream0.Offset;
}
export abstract class _Curve2DSampleNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Curve2DSample>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Curve2DSample;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:Curve2DSample", readonly [], false];
constructor(t: number, value: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) { super(_Curve2DSampleProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_Curve2DSampleNative.prototype, _Curve2DSampleProxy);
export namespace _Curve2DSampleFactory { export function implement(args: [t: number, value: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>], implementation: {}): Curve2DSample {
return constructProxy(_Curve2DSampleProxy, args, implementation) as Curve2DSample; } }
const _Curve2DSampleBinding = _flaxProxyFactory(_Curve2DSampleFactory, _Curve2DSampleNative) as unknown as typeof _Curve2DSampleFactory & (new(t: number, value: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => _Curve2DSampleNative);
export const Curve2DSample: typeof _Curve2DSampleBinding & _FlaxInstanceType<Curve2DSample> & _FlaxDartType<Curve2DSample, readonly ["class", "flax.core/sdk_animation#type:Curve2DSample", readonly [], false]> = _flaxBindInstanceType<Curve2DSample, typeof _Curve2DSampleBinding>(_Curve2DSampleBinding, "flax.core/sdk_animation#type:Curve2DSample", ["dart:core::Object"]) as typeof _Curve2DSampleBinding & _FlaxInstanceType<Curve2DSample> & _FlaxDartType<Curve2DSample, readonly ["class", "flax.core/sdk_animation#type:Curve2DSample", readonly [], false]>;

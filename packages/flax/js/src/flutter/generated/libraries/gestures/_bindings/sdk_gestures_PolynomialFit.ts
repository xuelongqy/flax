// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters7, _flaxMemberParameters46 } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PolynomialFit extends Readonly<{ "__flaxBound:package:flutter/src/gestures/lsq_solver.dart::PolynomialFit": readonly [] }> { readonly __PolynomialFit: unique symbol;
readonly [_flaxDartTypeValue]: PolynomialFit;

readonly coefficients: DartList<number>;
get confidence(): number;
toString(): string;
set confidence(value: number);
}
defineObject("flax.core/sdk_gestures#type:PolynomialFit", ["coefficients","confidence"], ["confidence"], _flaxBindingMethods("flax.core/sdk_gestures#type:PolynomialFit", "object", {"toString":_flaxMemberParameters7}, {}), []);
export function _PolynomialFitFactory(degree: number): PolynomialFit {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_gestures#type:PolynomialFit", "", [{"name":"degree","required":true,"positional":true}], [degree], {}) as PolynomialFit;
}
const _PolynomialFitProxy = {type: "flax.core/sdk_gestures#type:PolynomialFit", parameters: _flaxMemberParameters46, constructors: {"": _flaxMemberParameters46}, methods: {"toString":_flaxMemberParameters7}, getters: ["coefficients","confidence"], setters: ["confidence"], contextMembers: [], superMembers: ["get:coefficients","get:confidence","set:confidence","toString"]} as const;
export interface _PolynomialFitNative extends PolynomialFit {
readonly [_flaxDartTypeValue]: _PolynomialFitNative;

toString(): string;
get coefficients(): DartList<number>;
get confidence(): number;
set confidence(value: number);
}
export abstract class _PolynomialFitNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PolynomialFit>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PolynomialFit;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:PolynomialFit", readonly [], false];
constructor(degree: number) { super(_PolynomialFitProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_PolynomialFitNative.prototype, _PolynomialFitProxy);
export namespace _PolynomialFitFactory { export function implement(args: [degree: number], implementation: {}): PolynomialFit {
return constructProxy(_PolynomialFitProxy, args, implementation) as PolynomialFit; } }
const _PolynomialFitBinding = _flaxProxyFactory(_PolynomialFitFactory, _PolynomialFitNative) as unknown as typeof _PolynomialFitFactory & (new(degree: number) => _PolynomialFitNative);
export const PolynomialFit: typeof _PolynomialFitBinding & _FlaxInstanceType<PolynomialFit> & _FlaxDartType<PolynomialFit, readonly ["class", "flax.core/sdk_gestures#type:PolynomialFit", readonly [], false]> = _flaxBindInstanceType<PolynomialFit, typeof _PolynomialFitBinding>(_PolynomialFitBinding, "flax.core/sdk_gestures#type:PolynomialFit", ["dart:core::Object"]) as typeof _PolynomialFitBinding & _FlaxInstanceType<PolynomialFit> & _FlaxDartType<PolynomialFit, readonly ["class", "flax.core/sdk_gestures#type:PolynomialFit", readonly [], false]>;

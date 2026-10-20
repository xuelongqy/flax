// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_PolynomialFit';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PolynomialFit';
import { _flaxMemberParameters46, _flaxMemberParameters47 } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface LeastSquaresSolver extends Readonly<{ "__flaxBound:package:flutter/src/gestures/lsq_solver.dart::LeastSquaresSolver": readonly [] }> { readonly __LeastSquaresSolver: unique symbol;
readonly [_flaxDartTypeValue]: LeastSquaresSolver;

readonly x: DartList<number>;
readonly y: DartList<number>;
readonly w: DartList<number>;
solve(degree: number): upstream0.PolynomialFit | null;
}
defineObject("flax.core/sdk_gestures#type:LeastSquaresSolver", ["x","y","w"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:LeastSquaresSolver", "object", {"solve":_flaxMemberParameters46}, {}), []);
export function _LeastSquaresSolverFactory(x: DartListInput<number, number>, y: DartListInput<number, number>, w: DartListInput<number, number>): LeastSquaresSolver {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_gestures#type:LeastSquaresSolver", "", [{"name":"x","required":true,"positional":true},{"name":"y","required":true,"positional":true},{"name":"w","required":true,"positional":true}], [x, y, w], {}) as LeastSquaresSolver;
}
const _LeastSquaresSolverProxy = {type: "flax.core/sdk_gestures#type:LeastSquaresSolver", parameters: _flaxMemberParameters47, constructors: {"": _flaxMemberParameters47}, methods: {"solve":_flaxMemberParameters46}, getters: ["x","y","w"], setters: [], contextMembers: [], superMembers: ["get:x","get:y","get:w","solve"]} as const;
export interface _LeastSquaresSolverNative extends LeastSquaresSolver {
readonly [_flaxDartTypeValue]: _LeastSquaresSolverNative;

solve(degree: number): upstream0.PolynomialFit | null;
get x(): DartList<number>;
get y(): DartList<number>;
get w(): DartList<number>;
}
export abstract class _LeastSquaresSolverNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LeastSquaresSolver>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: LeastSquaresSolver;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:LeastSquaresSolver", readonly [], false];
constructor(x: DartListInput<number, number>, y: DartListInput<number, number>, w: DartListInput<number, number>) { super(_LeastSquaresSolverProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_LeastSquaresSolverNative.prototype, _LeastSquaresSolverProxy);
export namespace _LeastSquaresSolverFactory { export function implement(args: [x: DartListInput<number, number>, y: DartListInput<number, number>, w: DartListInput<number, number>], implementation: {}): LeastSquaresSolver {
return constructProxy(_LeastSquaresSolverProxy, args, implementation) as LeastSquaresSolver; } }
const _LeastSquaresSolverBinding = _flaxProxyFactory(_LeastSquaresSolverFactory, _LeastSquaresSolverNative) as unknown as typeof _LeastSquaresSolverFactory & (new(x: DartListInput<number, number>, y: DartListInput<number, number>, w: DartListInput<number, number>) => _LeastSquaresSolverNative);
export const LeastSquaresSolver: typeof _LeastSquaresSolverBinding & _FlaxInstanceType<LeastSquaresSolver> & _FlaxDartType<LeastSquaresSolver, readonly ["class", "flax.core/sdk_gestures#type:LeastSquaresSolver", readonly [], false]> = _flaxBindInstanceType<LeastSquaresSolver, typeof _LeastSquaresSolverBinding>(_LeastSquaresSolverBinding, "flax.core/sdk_gestures#type:LeastSquaresSolver", ["dart:core::Object"]) as typeof _LeastSquaresSolverBinding & _FlaxInstanceType<LeastSquaresSolver> & _FlaxDartType<LeastSquaresSolver, readonly ["class", "flax.core/sdk_gestures#type:LeastSquaresSolver", readonly [], false]>;

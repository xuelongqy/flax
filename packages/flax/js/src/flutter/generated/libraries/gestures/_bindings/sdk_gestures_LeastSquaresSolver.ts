// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_PolynomialFit';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PolynomialFit';
import { _flaxMemberParameters45, _flaxMemberParameters46 } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface LeastSquaresSolver extends Readonly<{ "__flaxBound:package:flutter/src/gestures/lsq_solver.dart::LeastSquaresSolver": readonly [] }> { readonly __LeastSquaresSolver: unique symbol;
readonly [_flaxDartTypeValue]: LeastSquaresSolver;

}
defineObject("flax.core/sdk_gestures#type:LeastSquaresSolver", ["x","y","w"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:LeastSquaresSolver", "object", {"solve":_flaxMemberParameters45}, {}), []);
const _LeastSquaresSolverProxy = {type: "flax.core/sdk_gestures#type:LeastSquaresSolver", parameters: _flaxMemberParameters46, constructors: {"": _flaxMemberParameters46}, methods: {"solve":_flaxMemberParameters45}, getters: ["x","y","w"], setters: [], contextMembers: [], superMembers: ["get:x","get:y","get:w","solve"]} as const;
export interface LeastSquaresSolver {
readonly [_flaxDartTypeValue]: LeastSquaresSolver;

solve(degree: number): upstream0.PolynomialFit | null;
get x(): DartList<number>;
get y(): DartList<number>;
get w(): DartList<number>;
}
export abstract class LeastSquaresSolver extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LeastSquaresSolver>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: LeastSquaresSolver;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:LeastSquaresSolver", readonly [], false];
constructor(x: DartListInput<number, number>, y: DartListInput<number, number>, w: DartListInput<number, number>) { super(_LeastSquaresSolverProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(LeastSquaresSolver.prototype, _LeastSquaresSolverProxy);
export namespace LeastSquaresSolver { export function implement(args: [x: DartListInput<number, number>, y: DartListInput<number, number>, w: DartListInput<number, number>], implementation: {}): LeastSquaresSolver {
return constructProxy(_LeastSquaresSolverProxy, args, implementation) as LeastSquaresSolver; } }
_flaxBindInstanceType<LeastSquaresSolver, typeof LeastSquaresSolver>(LeastSquaresSolver, "flax.core/sdk_gestures#type:LeastSquaresSolver", ["dart:core::Object"]);

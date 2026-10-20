// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import type * as upstream1 from '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import { _flaxMemberParameters4, _flaxMemberParameters1, _flaxMemberParameters3 } from "@flax/flutter/physics/_bindings/sdk_physics.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/physics/_bindings/sdk_physics.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ClampedSimulation extends Omit<upstream0.Simulation, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/physics/clamped_simulation.dart::ClampedSimulation": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [] }> { readonly __ClampedSimulation: unique symbol;
readonly [_flaxDartTypeValue]: ClampedSimulation;

get tolerance(): upstream1.Tolerance;
readonly simulation: upstream0.Simulation;
readonly xMin: number;
readonly xMax: number;
readonly dxMin: number;
readonly dxMax: number;
x(time: number): number;
dx(time: number): number;
isDone(time: number): boolean;
toString(): string;
set tolerance(value: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }>);
}
defineObject("flax.core/sdk_physics#type:ClampedSimulation", ["tolerance","simulation","xMin","xMax","dxMin","dxMax"], ["tolerance"], _flaxBindingMethods("flax.core/sdk_physics#type:ClampedSimulation", "object", {}, {}), [], undefined, "flax.core/sdk_physics#type:Simulation");
export function _ClampedSimulationFactory(simulation: Readonly<{ "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [] }>, options: { xMin?: number | undefined; xMax?: number | undefined; dxMin?: number | undefined; dxMax?: number | undefined } = {}): ClampedSimulation {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_physics#type:ClampedSimulation", "", [{"name":"simulation","required":true,"positional":true},{"name":"xMin"},{"name":"xMax"},{"name":"dxMin"},{"name":"dxMax"}], [simulation], options) as ClampedSimulation;
}
const _ClampedSimulationProxy = {type: "flax.core/sdk_physics#type:ClampedSimulation", parameters: _flaxMemberParameters4, constructors: {"": _flaxMemberParameters4}, methods: {"x":_flaxMemberParameters1,"dx":_flaxMemberParameters1,"isDone":_flaxMemberParameters1,"toString":_flaxMemberParameters3}, getters: ["simulation","xMin","xMax","dxMin","dxMax","tolerance"], setters: ["tolerance"], contextMembers: [], superMembers: ["get:simulation","get:xMin","get:xMax","get:dxMin","get:dxMax","get:tolerance","set:tolerance","x","dx","isDone","toString"]} as const;
export interface _ClampedSimulationNative extends ClampedSimulation {
readonly [_flaxDartTypeValue]: _ClampedSimulationNative;

x(time: number): number;
dx(time: number): number;
isDone(time: number): boolean;
toString(): string;
get simulation(): upstream0.Simulation;
get xMin(): number;
get xMax(): number;
get dxMin(): number;
get dxMax(): number;
get tolerance(): upstream1.Tolerance;
set tolerance(value: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }>);
}
export abstract class _ClampedSimulationNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ClampedSimulation>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ClampedSimulation;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_physics#type:ClampedSimulation", readonly [], false];
constructor(simulation: Readonly<{ "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [] }>, options?: {xMin?: number | undefined; xMax?: number | undefined; dxMin?: number | undefined; dxMax?: number | undefined}) { super(_ClampedSimulationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ClampedSimulationNative.prototype, _ClampedSimulationProxy);
export namespace _ClampedSimulationFactory { export function implement(args: [simulation: Readonly<{ "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [] }>, options?: {xMin?: number | undefined; xMax?: number | undefined; dxMin?: number | undefined; dxMax?: number | undefined}], implementation: {}): ClampedSimulation {
return constructProxy(_ClampedSimulationProxy, args, implementation) as ClampedSimulation; } }
const _ClampedSimulationBinding = _flaxProxyFactory(_ClampedSimulationFactory, _ClampedSimulationNative) as unknown as typeof _ClampedSimulationFactory & (new(simulation: Readonly<{ "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [] }>, options?: {xMin?: number | undefined; xMax?: number | undefined; dxMin?: number | undefined; dxMax?: number | undefined}) => _ClampedSimulationNative);
export const ClampedSimulation: typeof _ClampedSimulationBinding & _FlaxInstanceType<ClampedSimulation> & _FlaxDartType<ClampedSimulation, readonly ["class", "flax.core/sdk_physics#type:ClampedSimulation", readonly [], false]> = _flaxBindInstanceType<ClampedSimulation, typeof _ClampedSimulationBinding>(_ClampedSimulationBinding, "flax.core/sdk_physics#type:ClampedSimulation", ["flax.core/sdk_physics#type:Simulation","dart:core::Object"]) as typeof _ClampedSimulationBinding & _FlaxInstanceType<ClampedSimulation> & _FlaxDartType<ClampedSimulation, readonly ["class", "flax.core/sdk_physics#type:ClampedSimulation", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "tolerance" | "simulation" | "xMin" | "xMax" | "dxMin" | "dxMax" | "x" | "dx" | "isDone" | "toString" | "__flaxBound:package:flutter/src/physics/clamped_simulation.dart::ClampedSimulation" | "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation";

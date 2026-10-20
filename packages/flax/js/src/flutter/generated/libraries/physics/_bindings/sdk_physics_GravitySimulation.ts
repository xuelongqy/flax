// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import type * as upstream1 from '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import { _flaxMemberParameters6, _flaxMemberParameters1, _flaxMemberParameters3 } from "@flax/flutter/physics/_bindings/sdk_physics.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/physics/_bindings/sdk_physics.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface GravitySimulation extends Omit<upstream0.Simulation, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/physics/gravity_simulation.dart::GravitySimulation": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [] }> { readonly __GravitySimulation: unique symbol;
readonly [_flaxDartTypeValue]: GravitySimulation;

get tolerance(): upstream1.Tolerance;
x(time: number): number;
dx(time: number): number;
isDone(time: number): boolean;
toString(): string;
set tolerance(value: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }>);
}
defineObject("flax.core/sdk_physics#type:GravitySimulation", ["tolerance"], ["tolerance"], _flaxBindingMethods("flax.core/sdk_physics#type:GravitySimulation", "object", {}, {}), [], undefined, "flax.core/sdk_physics#type:Simulation");
export function _GravitySimulationFactory(acceleration: number, distance: number, endDistance: number, velocity: number): GravitySimulation {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 4) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_physics#type:GravitySimulation", "", [{"name":"acceleration","required":true,"positional":true},{"name":"distance","required":true,"positional":true},{"name":"endDistance","required":true,"positional":true},{"name":"velocity","required":true,"positional":true}], [acceleration, distance, endDistance, velocity], {}) as GravitySimulation;
}
const _GravitySimulationProxy = {type: "flax.core/sdk_physics#type:GravitySimulation", parameters: _flaxMemberParameters6, constructors: {"": _flaxMemberParameters6}, methods: {"x":_flaxMemberParameters1,"dx":_flaxMemberParameters1,"isDone":_flaxMemberParameters1,"toString":_flaxMemberParameters3}, getters: ["tolerance"], setters: ["tolerance"], contextMembers: [], superMembers: ["get:tolerance","set:tolerance","x","dx","isDone","toString"]} as const;
export interface _GravitySimulationNative extends GravitySimulation {
readonly [_flaxDartTypeValue]: _GravitySimulationNative;

x(time: number): number;
dx(time: number): number;
isDone(time: number): boolean;
toString(): string;
get tolerance(): upstream1.Tolerance;
set tolerance(value: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }>);
}
export abstract class _GravitySimulationNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GravitySimulation>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: GravitySimulation;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_physics#type:GravitySimulation", readonly [], false];
constructor(acceleration: number, distance: number, endDistance: number, velocity: number) { super(_GravitySimulationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_GravitySimulationNative.prototype, _GravitySimulationProxy);
export namespace _GravitySimulationFactory { export function implement(args: [acceleration: number, distance: number, endDistance: number, velocity: number], implementation: {}): GravitySimulation {
return constructProxy(_GravitySimulationProxy, args, implementation) as GravitySimulation; } }
const _GravitySimulationBinding = _flaxProxyFactory(_GravitySimulationFactory, _GravitySimulationNative) as unknown as typeof _GravitySimulationFactory & (new(acceleration: number, distance: number, endDistance: number, velocity: number) => _GravitySimulationNative);
export const GravitySimulation: typeof _GravitySimulationBinding & _FlaxInstanceType<GravitySimulation> & _FlaxDartType<GravitySimulation, readonly ["class", "flax.core/sdk_physics#type:GravitySimulation", readonly [], false]> = _flaxBindInstanceType<GravitySimulation, typeof _GravitySimulationBinding>(_GravitySimulationBinding, "flax.core/sdk_physics#type:GravitySimulation", ["flax.core/sdk_physics#type:Simulation","dart:core::Object"]) as typeof _GravitySimulationBinding & _FlaxInstanceType<GravitySimulation> & _FlaxDartType<GravitySimulation, readonly ["class", "flax.core/sdk_physics#type:GravitySimulation", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "tolerance" | "x" | "dx" | "isDone" | "toString" | "__flaxBound:package:flutter/src/physics/gravity_simulation.dart::GravitySimulation" | "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation";

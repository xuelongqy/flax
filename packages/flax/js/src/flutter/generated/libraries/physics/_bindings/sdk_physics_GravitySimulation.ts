// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import type * as upstream1 from '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import { _flaxMemberParameters6, _flaxMemberParameters1, _flaxMemberParameters3 } from "@flax/flutter/physics/_bindings/sdk_physics.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/physics/_bindings/sdk_physics.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface GravitySimulation extends Omit<upstream0.Simulation, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/physics/gravity_simulation.dart::GravitySimulation": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [] }> { readonly __GravitySimulation: unique symbol;
readonly [_flaxDartTypeValue]: GravitySimulation;

}
defineObject("flax.core/sdk_physics#type:GravitySimulation", ["tolerance"], ["tolerance"], _flaxBindingMethods("flax.core/sdk_physics#type:GravitySimulation", "object", {}, {}), [], undefined, "flax.core/sdk_physics#type:Simulation");
const _GravitySimulationProxy = {type: "flax.core/sdk_physics#type:GravitySimulation", parameters: _flaxMemberParameters6, constructors: {"": _flaxMemberParameters6}, methods: {"x":_flaxMemberParameters1,"dx":_flaxMemberParameters1,"isDone":_flaxMemberParameters1,"toString":_flaxMemberParameters3}, getters: ["tolerance"], setters: ["tolerance"], contextMembers: [], superMembers: ["get:tolerance","set:tolerance","x","dx","isDone","toString"]} as const;
export interface GravitySimulation {
readonly [_flaxDartTypeValue]: GravitySimulation;

x(time: number): number;
dx(time: number): number;
isDone(time: number): boolean;
toString(): string;
get tolerance(): upstream1.Tolerance;
set tolerance(value: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }>);
}
export abstract class GravitySimulation extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GravitySimulation>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: GravitySimulation;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_physics#type:GravitySimulation", readonly [], false];
constructor(acceleration: number, distance: number, endDistance: number, velocity: number) { super(_GravitySimulationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(GravitySimulation.prototype, _GravitySimulationProxy);
export namespace GravitySimulation { export function implement(args: [acceleration: number, distance: number, endDistance: number, velocity: number], implementation: {}): GravitySimulation {
return constructProxy(_GravitySimulationProxy, args, implementation) as GravitySimulation; } }
_flaxBindInstanceType<GravitySimulation, typeof GravitySimulation>(GravitySimulation, "flax.core/sdk_physics#type:GravitySimulation", ["flax.core/sdk_physics#type:Simulation","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "tolerance" | "x" | "dx" | "isDone" | "toString" | "__flaxBound:package:flutter/src/physics/gravity_simulation.dart::GravitySimulation" | "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation";

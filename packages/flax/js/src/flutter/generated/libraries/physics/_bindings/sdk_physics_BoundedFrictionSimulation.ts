// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/physics/_bindings/sdk_physics_FrictionSimulation';
import '@flax/flutter/physics/_bindings/sdk_physics_FrictionSimulation';
import type * as upstream1 from '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import type * as upstream2 from '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
const _flaxMemberParameters0 = [{"name":"time","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"x","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/physics/_bindings/sdk_physics.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BoundedFrictionSimulation extends Omit<upstream0.FrictionSimulation, _flaxOwnMembers0>, Omit<upstream1.Simulation, _flaxOwnMembers0 | keyof upstream0.FrictionSimulation>, Readonly<{ "__flaxBound:package:flutter/src/physics/friction_simulation.dart::BoundedFrictionSimulation": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/physics/friction_simulation.dart::FrictionSimulation": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [] }> { readonly __BoundedFrictionSimulation: unique symbol;
readonly [_flaxDartTypeValue]: BoundedFrictionSimulation;

}
defineObject("flax.core/sdk_physics#type:BoundedFrictionSimulation", ["finalX","tolerance"], ["tolerance"], _flaxBindingMethods("flax.core/sdk_physics#type:BoundedFrictionSimulation", "object", {}, {}), [], undefined, "flax.core/sdk_physics#type:FrictionSimulation");
const _BoundedFrictionSimulationProxy = {type: "flax.core/sdk_physics#type:BoundedFrictionSimulation", parameters: [{"name":"drag","required":true,"positional":true},{"name":"position","required":true,"positional":true},{"name":"velocity","required":true,"positional":true},{"name":"_minX","required":true,"positional":true},{"name":"_maxX","required":true,"positional":true}], constructors: {"":[{"name":"drag","required":true,"positional":true},{"name":"position","required":true,"positional":true},{"name":"velocity","required":true,"positional":true},{"name":"_minX","required":true,"positional":true},{"name":"_maxX","required":true,"positional":true}]}, methods: {"x":_flaxMemberParameters0,"dx":_flaxMemberParameters0,"timeAtX":_flaxMemberParameters1,"isDone":_flaxMemberParameters0,"toString":_flaxMemberParameters2}, getters: ["finalX","tolerance"], setters: ["tolerance"], contextMembers: [], superMembers: ["get:finalX","get:tolerance","set:tolerance","x","dx","timeAtX","isDone","toString"]} as const;
export interface BoundedFrictionSimulation {
readonly [_flaxDartTypeValue]: BoundedFrictionSimulation;

x(time: number): number;
dx(time: number): number;
timeAtX(x: number): number;
isDone(time: number): boolean;
toString(): string;
get finalX(): number;
get tolerance(): upstream2.Tolerance;
set tolerance(value: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }>);
}
export abstract class BoundedFrictionSimulation extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BoundedFrictionSimulation>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: BoundedFrictionSimulation;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_physics#type:BoundedFrictionSimulation", readonly [], false];
constructor(drag: number, position: number, velocity: number, _minX: number, _maxX: number) { super(_BoundedFrictionSimulationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(BoundedFrictionSimulation.prototype, _BoundedFrictionSimulationProxy);
export namespace BoundedFrictionSimulation { export function implement(args: [drag: number, position: number, velocity: number, _minX: number, _maxX: number], implementation: {}): BoundedFrictionSimulation {
return constructProxy(_BoundedFrictionSimulationProxy, args, implementation) as BoundedFrictionSimulation; } }
_flaxBindInstanceType<BoundedFrictionSimulation, typeof BoundedFrictionSimulation>(BoundedFrictionSimulation, "flax.core/sdk_physics#type:BoundedFrictionSimulation", ["flax.core/sdk_physics#type:FrictionSimulation","flax.core/sdk_physics#type:Simulation","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "finalX" | "tolerance" | "x" | "dx" | "timeAtX" | "isDone" | "toString" | "__flaxBound:package:flutter/src/physics/friction_simulation.dart::BoundedFrictionSimulation" | "__flaxBound:package:flutter/src/physics/friction_simulation.dart::FrictionSimulation" | "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation";

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import type * as upstream1 from '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
const _flaxMemberParameters0 = [{"name":"x","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"time","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/physics/_bindings/sdk_physics.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FrictionSimulation extends Omit<upstream0.Simulation, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/physics/friction_simulation.dart::FrictionSimulation": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [] }> { readonly __FrictionSimulation: unique symbol;
readonly [_flaxDartTypeValue]: FrictionSimulation;

}
defineObject("flax.core/sdk_physics#type:FrictionSimulation", ["tolerance","finalX"], ["tolerance"], _flaxBindingMethods("flax.core/sdk_physics#type:FrictionSimulation", "object", {"timeAtX":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_physics#type:Simulation");
const _FrictionSimulationProxy = {type: "flax.core/sdk_physics#type:FrictionSimulation", parameters: [{"name":"drag","required":true,"positional":true},{"name":"position","required":true,"positional":true},{"name":"velocity","required":true,"positional":true},{"name":"tolerance","required":false,"positional":false},{"name":"constantDeceleration","required":false,"positional":false}], constructors: {"":[{"name":"drag","required":true,"positional":true},{"name":"position","required":true,"positional":true},{"name":"velocity","required":true,"positional":true},{"name":"tolerance","required":false,"positional":false},{"name":"constantDeceleration","required":false,"positional":false}]}, methods: {"x":_flaxMemberParameters1,"dx":_flaxMemberParameters1,"isDone":_flaxMemberParameters1,"toString":_flaxMemberParameters2,"timeAtX":_flaxMemberParameters0}, getters: ["finalX","tolerance"], setters: ["tolerance"], contextMembers: [], superMembers: ["get:finalX","get:tolerance","set:tolerance","x","dx","isDone","toString","timeAtX"]} as const;
export interface FrictionSimulation {
readonly [_flaxDartTypeValue]: FrictionSimulation;

x(time: number): number;
dx(time: number): number;
isDone(time: number): boolean;
toString(): string;
timeAtX(x: number): number;
get finalX(): number;
get tolerance(): upstream1.Tolerance;
set tolerance(value: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }>);
}
export abstract class FrictionSimulation extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FrictionSimulation>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: FrictionSimulation;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_physics#type:FrictionSimulation", readonly [], false];
constructor(drag: number, position: number, velocity: number, options?: {tolerance?: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }> | undefined; constantDeceleration?: number | undefined}) { super(_FrictionSimulationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(FrictionSimulation.prototype, _FrictionSimulationProxy);
export namespace FrictionSimulation { export function implement(args: [drag: number, position: number, velocity: number, options?: {tolerance?: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }> | undefined; constantDeceleration?: number | undefined}], implementation: {}): FrictionSimulation {
return constructProxy(_FrictionSimulationProxy, args, implementation) as FrictionSimulation; } }
_flaxBindInstanceType<FrictionSimulation, typeof FrictionSimulation>(FrictionSimulation, "flax.core/sdk_physics#type:FrictionSimulation", ["flax.core/sdk_physics#type:Simulation","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "tolerance" | "finalX" | "x" | "dx" | "isDone" | "toString" | "timeAtX" | "__flaxBound:package:flutter/src/physics/friction_simulation.dart::FrictionSimulation" | "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation";

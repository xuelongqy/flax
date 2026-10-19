// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import type * as upstream1 from '@flax/flutter/physics/_bindings/sdk_physics_SpringDescription';
import '@flax/flutter/physics/_bindings/sdk_physics_SpringDescription';
import type * as upstream2 from '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import type * as upstream3 from '@flax/flutter/physics/_bindings/sdk_physics_SpringType';
import '@flax/flutter/physics/_bindings/sdk_physics_SpringType';
import { _flaxMemberParameters10, _flaxMemberParameters1, _flaxMemberParameters3 } from "@flax/flutter/physics/_bindings/sdk_physics.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/physics/_bindings/sdk_physics.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SpringSimulation extends Omit<upstream0.Simulation, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringSimulation": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [] }> { readonly __SpringSimulation: unique symbol;
readonly [_flaxDartTypeValue]: SpringSimulation;

}
defineObject("flax.core/sdk_physics#type:SpringSimulation", ["tolerance","type"], ["tolerance"], _flaxBindingMethods("flax.core/sdk_physics#type:SpringSimulation", "object", {}, {}), [], undefined, "flax.core/sdk_physics#type:Simulation");
const _SpringSimulationProxy = {type: "flax.core/sdk_physics#type:SpringSimulation", parameters: _flaxMemberParameters10, constructors: {"": _flaxMemberParameters10}, methods: {"x":_flaxMemberParameters1,"dx":_flaxMemberParameters1,"isDone":_flaxMemberParameters1,"toString":_flaxMemberParameters3}, getters: ["type","tolerance"], setters: ["tolerance"], contextMembers: [], superMembers: ["get:type","get:tolerance","set:tolerance","x","dx","isDone","toString"]} as const;
export interface SpringSimulation {
readonly [_flaxDartTypeValue]: SpringSimulation;

x(time: number): number;
dx(time: number): number;
isDone(time: number): boolean;
toString(): string;
get type(): upstream3.SpringType;
get tolerance(): upstream2.Tolerance;
set tolerance(value: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }>);
}
export abstract class SpringSimulation extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SpringSimulation>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SpringSimulation;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_physics#type:SpringSimulation", readonly [], false];
constructor(spring: Readonly<{ "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringDescription": readonly [] }>, start: number, end: number, velocity: number, options?: {snapToEnd?: boolean | undefined; tolerance?: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }> | undefined}) { super(_SpringSimulationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(SpringSimulation.prototype, _SpringSimulationProxy);
export namespace SpringSimulation { export function implement(args: [spring: Readonly<{ "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringDescription": readonly [] }>, start: number, end: number, velocity: number, options?: {snapToEnd?: boolean | undefined; tolerance?: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }> | undefined}], implementation: {}): SpringSimulation {
return constructProxy(_SpringSimulationProxy, args, implementation) as SpringSimulation; } }
_flaxBindInstanceType<SpringSimulation, typeof SpringSimulation>(SpringSimulation, "flax.core/sdk_physics#type:SpringSimulation", ["flax.core/sdk_physics#type:Simulation","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "tolerance" | "type" | "x" | "dx" | "isDone" | "toString" | "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringSimulation" | "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation";

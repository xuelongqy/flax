// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/physics/_bindings/sdk_physics_SpringSimulation';
import '@flax/flutter/physics/_bindings/sdk_physics_SpringSimulation';
import type * as upstream1 from '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import type * as upstream2 from '@flax/flutter/physics/_bindings/sdk_physics_SpringDescription';
import '@flax/flutter/physics/_bindings/sdk_physics_SpringDescription';
import type * as upstream3 from '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import type * as upstream4 from '@flax/flutter/physics/_bindings/sdk_physics_SpringType';
import '@flax/flutter/physics/_bindings/sdk_physics_SpringType';
const _flaxMemberParameters0 = [{"name":"spring","required":true,"positional":true},{"name":"start","required":true,"positional":true},{"name":"end","required":true,"positional":true},{"name":"velocity","required":true,"positional":true},{"name":"tolerance"}] as const;
const _flaxMemberParameters1 = [{"name":"time","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/physics/_bindings/sdk_physics.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ScrollSpringSimulation extends Omit<upstream0.SpringSimulation, _flaxOwnMembers0>, Omit<upstream1.Simulation, _flaxOwnMembers0 | keyof upstream0.SpringSimulation>, Readonly<{ "__flaxBound:package:flutter/src/physics/spring_simulation.dart::ScrollSpringSimulation": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringSimulation": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [] }> { readonly __ScrollSpringSimulation: unique symbol;
readonly [_flaxDartTypeValue]: ScrollSpringSimulation;

}
defineObject("flax.core/sdk_physics#type:ScrollSpringSimulation", ["type","tolerance"], ["tolerance"], _flaxBindingMethods("flax.core/sdk_physics#type:ScrollSpringSimulation", "object", {}, {}), [], undefined, "flax.core/sdk_physics#type:SpringSimulation");
const _ScrollSpringSimulationProxy = {type: "flax.core/sdk_physics#type:ScrollSpringSimulation", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"x":_flaxMemberParameters1,"dx":_flaxMemberParameters1,"isDone":_flaxMemberParameters1,"toString":_flaxMemberParameters2}, getters: ["type","tolerance"], setters: ["tolerance"], contextMembers: [], superMembers: ["get:type","get:tolerance","set:tolerance","x","dx","isDone","toString"]} as const;
export interface ScrollSpringSimulation {
readonly [_flaxDartTypeValue]: ScrollSpringSimulation;

x(time: number): number;
dx(time: number): number;
isDone(time: number): boolean;
toString(): string;
get type(): upstream4.SpringType;
get tolerance(): upstream3.Tolerance;
set tolerance(value: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }>);
}
export abstract class ScrollSpringSimulation extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScrollSpringSimulation>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ScrollSpringSimulation;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_physics#type:ScrollSpringSimulation", readonly [], false];
constructor(spring: Readonly<{ "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringDescription": readonly [] }>, start: number, end: number, velocity: number, options?: {tolerance?: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }> | undefined}) { super(_ScrollSpringSimulationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ScrollSpringSimulation.prototype, _ScrollSpringSimulationProxy);
export namespace ScrollSpringSimulation { export function implement(args: [spring: Readonly<{ "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringDescription": readonly [] }>, start: number, end: number, velocity: number, options?: {tolerance?: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }> | undefined}], implementation: {}): ScrollSpringSimulation {
return constructProxy(_ScrollSpringSimulationProxy, args, implementation) as ScrollSpringSimulation; } }
_flaxBindInstanceType<ScrollSpringSimulation, typeof ScrollSpringSimulation>(ScrollSpringSimulation, "flax.core/sdk_physics#type:ScrollSpringSimulation", ["flax.core/sdk_physics#type:SpringSimulation","flax.core/sdk_physics#type:Simulation","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "type" | "tolerance" | "x" | "dx" | "isDone" | "toString" | "__flaxBound:package:flutter/src/physics/spring_simulation.dart::ScrollSpringSimulation" | "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringSimulation" | "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation";

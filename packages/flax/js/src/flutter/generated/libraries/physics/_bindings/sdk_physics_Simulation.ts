// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
const _flaxMemberParameters0 = [{"name":"time","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/physics/_bindings/sdk_physics.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Simulation extends Readonly<{ "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [] }> { readonly __Simulation: unique symbol;
readonly [_flaxDartTypeValue]: Simulation;

}
defineObject("flax.core/sdk_physics#type:Simulation", ["tolerance"], ["tolerance"], _flaxBindingMethods("flax.core/sdk_physics#type:Simulation", "object", {"x":_flaxMemberParameters0,"dx":_flaxMemberParameters0,"isDone":_flaxMemberParameters0,"toString":_flaxMemberParameters1}, {}), []);
const _SimulationProxy = {type: "flax.core/sdk_physics#type:Simulation", parameters: [{"name":"tolerance","required":false,"positional":false}], constructors: {"":[{"name":"tolerance","required":false,"positional":false}]}, methods: {"x":_flaxMemberParameters0,"dx":_flaxMemberParameters0,"isDone":_flaxMemberParameters0,"toString":_flaxMemberParameters1}, getters: ["tolerance"], setters: ["tolerance"], contextMembers: [], superMembers: ["get:tolerance","set:tolerance","toString"]} as const;
export interface Simulation {
readonly [_flaxDartTypeValue]: Simulation;

toString(): string;
get tolerance(): upstream0.Tolerance;
set tolerance(value: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }>);
}
export abstract class Simulation extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Simulation>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Simulation;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_physics#type:Simulation", readonly [], false];
constructor(options?: {tolerance?: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }> | undefined}) { super(_SimulationProxy, Array.from(arguments)); }
abstract x(time: number): number;
abstract dx(time: number): number;
abstract isDone(time: number): boolean;
}
_flaxDefineProxyBase(Simulation.prototype, _SimulationProxy);
export namespace Simulation { export function implement(args: [options?: {tolerance?: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }> | undefined}], implementation: {x: ((time: number) => number); dx: ((time: number) => number); isDone: ((time: number) => boolean)}): Simulation {
return constructProxy(_SimulationProxy, args, implementation) as Simulation; } }
_flaxBindInstanceType<Simulation, typeof Simulation>(Simulation, "flax.core/sdk_physics#type:Simulation", ["dart:core::Object"]);

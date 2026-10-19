// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import type * as upstream1 from '@flax/flutter/physics/_bindings/sdk_physics_SpringDescription';
import '@flax/flutter/physics/_bindings/sdk_physics_SpringDescription';
import type * as upstream2 from '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import { _flaxMemberParameters47, _flaxMemberParameters48, _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BouncingScrollSimulation extends Omit<upstream0.Simulation, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_simulation.dart::BouncingScrollSimulation": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [] }> { readonly __BouncingScrollSimulation: unique symbol;
readonly [_flaxDartTypeValue]: BouncingScrollSimulation;

}
defineObject("flax.core/sdk_widgets#type:BouncingScrollSimulation", ["tolerance","leadingExtent","trailingExtent","spring"], ["tolerance"], _flaxBindingMethods("flax.core/sdk_widgets#type:BouncingScrollSimulation", "object", {}, {}), [], undefined, "flax.core/sdk_physics#type:Simulation");
const _BouncingScrollSimulationProxy = {type: "flax.core/sdk_widgets#type:BouncingScrollSimulation", parameters: _flaxMemberParameters47, constructors: {"": _flaxMemberParameters47}, methods: {"x":_flaxMemberParameters48,"dx":_flaxMemberParameters48,"isDone":_flaxMemberParameters48,"toString":_flaxMemberParameters2}, getters: ["leadingExtent","trailingExtent","spring","tolerance"], setters: ["tolerance"], contextMembers: [], superMembers: ["get:leadingExtent","get:trailingExtent","get:spring","get:tolerance","set:tolerance","x","dx","isDone","toString"]} as const;
export interface BouncingScrollSimulation {
readonly [_flaxDartTypeValue]: BouncingScrollSimulation;

x(time: number): number;
dx(time: number): number;
isDone(time: number): boolean;
toString(): string;
get leadingExtent(): number;
get trailingExtent(): number;
get spring(): upstream1.SpringDescription;
get tolerance(): upstream2.Tolerance;
set tolerance(value: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }>);
}
export abstract class BouncingScrollSimulation extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BouncingScrollSimulation>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: BouncingScrollSimulation;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:BouncingScrollSimulation", readonly [], false];
constructor(options: {position: number; velocity: number; leadingExtent: number; trailingExtent: number; spring: Readonly<{ "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringDescription": readonly [] }>; constantDeceleration?: number | undefined; tolerance?: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }> | undefined}) { super(_BouncingScrollSimulationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(BouncingScrollSimulation.prototype, _BouncingScrollSimulationProxy);
export namespace BouncingScrollSimulation { export function implement(args: [options: {position: number; velocity: number; leadingExtent: number; trailingExtent: number; spring: Readonly<{ "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringDescription": readonly [] }>; constantDeceleration?: number | undefined; tolerance?: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }> | undefined}], implementation: {}): BouncingScrollSimulation {
return constructProxy(_BouncingScrollSimulationProxy, args, implementation) as BouncingScrollSimulation; } }
export namespace BouncingScrollSimulation { export declare const maxSpringTransferVelocity: number; }
_flaxDefineStaticGetters(BouncingScrollSimulation, "flax.core/sdk_widgets#read:BouncingScrollSimulation.", ["maxSpringTransferVelocity"]);
_flaxBindInstanceType<BouncingScrollSimulation, typeof BouncingScrollSimulation>(BouncingScrollSimulation, "flax.core/sdk_widgets#type:BouncingScrollSimulation", ["flax.core/sdk_physics#type:Simulation","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "tolerance" | "leadingExtent" | "trailingExtent" | "spring" | "x" | "dx" | "isDone" | "toString" | "__flaxBound:package:flutter/src/widgets/scroll_simulation.dart::BouncingScrollSimulation" | "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation";

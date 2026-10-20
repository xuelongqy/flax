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
import { _flaxMemberParameters7, _flaxMemberParameters1, _flaxMemberParameters3 } from "@flax/flutter/physics/_bindings/sdk_physics.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/physics/_bindings/sdk_physics.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ScrollSpringSimulation extends Omit<upstream0.SpringSimulation, _flaxOwnMembers0>, Omit<upstream1.Simulation, _flaxOwnMembers0 | keyof upstream0.SpringSimulation>, Readonly<{ "__flaxBound:package:flutter/src/physics/spring_simulation.dart::ScrollSpringSimulation": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringSimulation": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [] }> { readonly __ScrollSpringSimulation: unique symbol;
readonly [_flaxDartTypeValue]: ScrollSpringSimulation;

readonly type: upstream4.SpringType;
get tolerance(): upstream3.Tolerance;
x(time: number): number;
dx(time: number): number;
isDone(time: number): boolean;
toString(): string;
set tolerance(value: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }>);
}
defineObject("flax.core/sdk_physics#type:ScrollSpringSimulation", ["type","tolerance"], ["tolerance"], _flaxBindingMethods("flax.core/sdk_physics#type:ScrollSpringSimulation", "object", {}, {}), [], undefined, "flax.core/sdk_physics#type:SpringSimulation");
export function _ScrollSpringSimulationFactory(spring: Readonly<{ "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringDescription": readonly [] }>, start: number, end: number, velocity: number, options: { tolerance?: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }> | undefined } = {}): ScrollSpringSimulation {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 5) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_physics#type:ScrollSpringSimulation", "", [{"name":"spring","required":true,"positional":true},{"name":"start","required":true,"positional":true},{"name":"end","required":true,"positional":true},{"name":"velocity","required":true,"positional":true},{"name":"tolerance"}], [spring, start, end, velocity], options) as ScrollSpringSimulation;
}
const _ScrollSpringSimulationProxy = {type: "flax.core/sdk_physics#type:ScrollSpringSimulation", parameters: _flaxMemberParameters7, constructors: {"": _flaxMemberParameters7}, methods: {"x":_flaxMemberParameters1,"dx":_flaxMemberParameters1,"isDone":_flaxMemberParameters1,"toString":_flaxMemberParameters3}, getters: ["type","tolerance"], setters: ["tolerance"], contextMembers: [], superMembers: ["get:type","get:tolerance","set:tolerance","x","dx","isDone","toString"]} as const;
export interface _ScrollSpringSimulationNative extends ScrollSpringSimulation {
readonly [_flaxDartTypeValue]: _ScrollSpringSimulationNative;

x(time: number): number;
dx(time: number): number;
isDone(time: number): boolean;
toString(): string;
get type(): upstream4.SpringType;
get tolerance(): upstream3.Tolerance;
set tolerance(value: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }>);
}
export abstract class _ScrollSpringSimulationNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScrollSpringSimulation>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ScrollSpringSimulation;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_physics#type:ScrollSpringSimulation", readonly [], false];
constructor(spring: Readonly<{ "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringDescription": readonly [] }>, start: number, end: number, velocity: number, options?: {tolerance?: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }> | undefined}) { super(_ScrollSpringSimulationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ScrollSpringSimulationNative.prototype, _ScrollSpringSimulationProxy);
export namespace _ScrollSpringSimulationFactory { export function implement(args: [spring: Readonly<{ "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringDescription": readonly [] }>, start: number, end: number, velocity: number, options?: {tolerance?: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }> | undefined}], implementation: {}): ScrollSpringSimulation {
return constructProxy(_ScrollSpringSimulationProxy, args, implementation) as ScrollSpringSimulation; } }
const _ScrollSpringSimulationBinding = _flaxProxyFactory(_ScrollSpringSimulationFactory, _ScrollSpringSimulationNative) as unknown as typeof _ScrollSpringSimulationFactory & (new(spring: Readonly<{ "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringDescription": readonly [] }>, start: number, end: number, velocity: number, options?: {tolerance?: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }> | undefined}) => _ScrollSpringSimulationNative);
export const ScrollSpringSimulation: typeof _ScrollSpringSimulationBinding & _FlaxInstanceType<ScrollSpringSimulation> & _FlaxDartType<ScrollSpringSimulation, readonly ["class", "flax.core/sdk_physics#type:ScrollSpringSimulation", readonly [], false]> = _flaxBindInstanceType<ScrollSpringSimulation, typeof _ScrollSpringSimulationBinding>(_ScrollSpringSimulationBinding, "flax.core/sdk_physics#type:ScrollSpringSimulation", ["flax.core/sdk_physics#type:SpringSimulation","flax.core/sdk_physics#type:Simulation","dart:core::Object"]) as typeof _ScrollSpringSimulationBinding & _FlaxInstanceType<ScrollSpringSimulation> & _FlaxDartType<ScrollSpringSimulation, readonly ["class", "flax.core/sdk_physics#type:ScrollSpringSimulation", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "type" | "tolerance" | "x" | "dx" | "isDone" | "toString" | "__flaxBound:package:flutter/src/physics/spring_simulation.dart::ScrollSpringSimulation" | "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringSimulation" | "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation";

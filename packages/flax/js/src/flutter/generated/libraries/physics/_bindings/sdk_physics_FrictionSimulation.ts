// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import type * as upstream1 from '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import { _flaxMemberParameters2, _flaxMemberParameters5, _flaxMemberParameters1, _flaxMemberParameters3 } from "@flax/flutter/physics/_bindings/sdk_physics.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/physics/_bindings/sdk_physics.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FrictionSimulation extends Omit<upstream0.Simulation, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/physics/friction_simulation.dart::FrictionSimulation": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [] }> { readonly __FrictionSimulation: unique symbol;
readonly [_flaxDartTypeValue]: FrictionSimulation;

get tolerance(): upstream1.Tolerance;
readonly finalX: number;
x(time: number): number;
dx(time: number): number;
isDone(time: number): boolean;
toString(): string;
timeAtX(x: number): number;
set tolerance(value: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }>);
}
defineObject("flax.core/sdk_physics#type:FrictionSimulation", ["tolerance","finalX"], ["tolerance"], _flaxBindingMethods("flax.core/sdk_physics#type:FrictionSimulation", "object", {"timeAtX":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_physics#type:Simulation");
export function _FrictionSimulationFactory(drag: number, position: number, velocity: number, options: { tolerance?: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }> | undefined; constantDeceleration?: number | undefined } = {}): FrictionSimulation {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 4) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_physics#type:FrictionSimulation", "", [{"name":"drag","required":true,"positional":true},{"name":"position","required":true,"positional":true},{"name":"velocity","required":true,"positional":true},{"name":"tolerance"},{"name":"constantDeceleration"}], [drag, position, velocity], options) as FrictionSimulation;
}
export namespace _FrictionSimulationFactory {
export function through(startPosition: number, endPosition: number, startVelocity: number, endVelocity: number): FrictionSimulation {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 4) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_physics#type:FrictionSimulation", "through", [{"name":"startPosition","required":true,"positional":true},{"name":"endPosition","required":true,"positional":true},{"name":"startVelocity","required":true,"positional":true},{"name":"endVelocity","required":true,"positional":true}], [startPosition, endPosition, startVelocity, endVelocity], {}) as FrictionSimulation;
}
}
const _FrictionSimulationProxy = {type: "flax.core/sdk_physics#type:FrictionSimulation", parameters: _flaxMemberParameters5, constructors: {"": _flaxMemberParameters5}, methods: {"x":_flaxMemberParameters1,"dx":_flaxMemberParameters1,"isDone":_flaxMemberParameters1,"toString":_flaxMemberParameters3,"timeAtX":_flaxMemberParameters2}, getters: ["finalX","tolerance"], setters: ["tolerance"], contextMembers: [], superMembers: ["get:finalX","get:tolerance","set:tolerance","x","dx","isDone","toString","timeAtX"]} as const;
export interface _FrictionSimulationNative extends FrictionSimulation {
readonly [_flaxDartTypeValue]: _FrictionSimulationNative;

x(time: number): number;
dx(time: number): number;
isDone(time: number): boolean;
toString(): string;
timeAtX(x: number): number;
get finalX(): number;
get tolerance(): upstream1.Tolerance;
set tolerance(value: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }>);
}
export abstract class _FrictionSimulationNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FrictionSimulation>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: FrictionSimulation;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_physics#type:FrictionSimulation", readonly [], false];
constructor(drag: number, position: number, velocity: number, options?: {tolerance?: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }> | undefined; constantDeceleration?: number | undefined}) { super(_FrictionSimulationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_FrictionSimulationNative.prototype, _FrictionSimulationProxy);
export namespace _FrictionSimulationFactory { export function implement(args: [drag: number, position: number, velocity: number, options?: {tolerance?: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }> | undefined; constantDeceleration?: number | undefined}], implementation: {}): FrictionSimulation {
return constructProxy(_FrictionSimulationProxy, args, implementation) as FrictionSimulation; } }
const _FrictionSimulationBinding = _flaxProxyFactory(_FrictionSimulationFactory, _FrictionSimulationNative) as unknown as typeof _FrictionSimulationFactory & (new(drag: number, position: number, velocity: number, options?: {tolerance?: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }> | undefined; constantDeceleration?: number | undefined}) => _FrictionSimulationNative);
export const FrictionSimulation: typeof _FrictionSimulationBinding & _FlaxInstanceType<FrictionSimulation> & _FlaxDartType<FrictionSimulation, readonly ["class", "flax.core/sdk_physics#type:FrictionSimulation", readonly [], false]> = _flaxBindInstanceType<FrictionSimulation, typeof _FrictionSimulationBinding>(_FrictionSimulationBinding, "flax.core/sdk_physics#type:FrictionSimulation", ["flax.core/sdk_physics#type:Simulation","dart:core::Object"]) as typeof _FrictionSimulationBinding & _FlaxInstanceType<FrictionSimulation> & _FlaxDartType<FrictionSimulation, readonly ["class", "flax.core/sdk_physics#type:FrictionSimulation", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "tolerance" | "finalX" | "x" | "dx" | "isDone" | "toString" | "timeAtX" | "__flaxBound:package:flutter/src/physics/friction_simulation.dart::FrictionSimulation" | "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation";

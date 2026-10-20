// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import type * as upstream1 from '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import { _flaxMemberParameters58, _flaxMemberParameters48, _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ClampingScrollSimulation extends Omit<upstream0.Simulation, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_simulation.dart::ClampingScrollSimulation": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [] }> { readonly __ClampingScrollSimulation: unique symbol;
readonly [_flaxDartTypeValue]: ClampingScrollSimulation;

get tolerance(): upstream1.Tolerance;
readonly position: number;
readonly velocity: number;
readonly friction: number;
x(time: number): number;
dx(time: number): number;
isDone(time: number): boolean;
toString(): string;
set tolerance(value: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }>);
}
defineObject("flax.core/sdk_widgets#type:ClampingScrollSimulation", ["tolerance","position","velocity","friction"], ["tolerance"], _flaxBindingMethods("flax.core/sdk_widgets#type:ClampingScrollSimulation", "object", {}, {}), [], undefined, "flax.core/sdk_physics#type:Simulation");
export function _ClampingScrollSimulationFactory(options: { position: number; velocity: number; friction?: number | undefined; tolerance?: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }> | undefined }): ClampingScrollSimulation {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:ClampingScrollSimulation", "", [{"name":"position","required":true},{"name":"velocity","required":true},{"name":"friction"},{"name":"tolerance"}], [], options) as ClampingScrollSimulation;
}
const _ClampingScrollSimulationProxy = {type: "flax.core/sdk_widgets#type:ClampingScrollSimulation", parameters: _flaxMemberParameters58, constructors: {"": _flaxMemberParameters58}, methods: {"x":_flaxMemberParameters48,"dx":_flaxMemberParameters48,"isDone":_flaxMemberParameters48,"toString":_flaxMemberParameters2}, getters: ["position","velocity","friction","tolerance"], setters: ["tolerance"], contextMembers: [], superMembers: ["get:position","get:velocity","get:friction","get:tolerance","set:tolerance","x","dx","isDone","toString"]} as const;
export interface _ClampingScrollSimulationNative extends ClampingScrollSimulation {
readonly [_flaxDartTypeValue]: _ClampingScrollSimulationNative;

x(time: number): number;
dx(time: number): number;
isDone(time: number): boolean;
toString(): string;
get position(): number;
get velocity(): number;
get friction(): number;
get tolerance(): upstream1.Tolerance;
set tolerance(value: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }>);
}
export abstract class _ClampingScrollSimulationNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ClampingScrollSimulation>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ClampingScrollSimulation;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ClampingScrollSimulation", readonly [], false];
constructor(options: {position: number; velocity: number; friction?: number | undefined; tolerance?: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }> | undefined}) { super(_ClampingScrollSimulationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ClampingScrollSimulationNative.prototype, _ClampingScrollSimulationProxy);
export namespace _ClampingScrollSimulationFactory { export function implement(args: [options: {position: number; velocity: number; friction?: number | undefined; tolerance?: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }> | undefined}], implementation: {}): ClampingScrollSimulation {
return constructProxy(_ClampingScrollSimulationProxy, args, implementation) as ClampingScrollSimulation; } }
const _ClampingScrollSimulationBinding = _flaxProxyFactory(_ClampingScrollSimulationFactory, _ClampingScrollSimulationNative) as unknown as typeof _ClampingScrollSimulationFactory & (new(options: {position: number; velocity: number; friction?: number | undefined; tolerance?: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }> | undefined}) => _ClampingScrollSimulationNative);
export const ClampingScrollSimulation: typeof _ClampingScrollSimulationBinding & _FlaxInstanceType<ClampingScrollSimulation> & _FlaxDartType<ClampingScrollSimulation, readonly ["class", "flax.core/sdk_widgets#type:ClampingScrollSimulation", readonly [], false]> = _flaxBindInstanceType<ClampingScrollSimulation, typeof _ClampingScrollSimulationBinding>(_ClampingScrollSimulationBinding, "flax.core/sdk_widgets#type:ClampingScrollSimulation", ["flax.core/sdk_physics#type:Simulation","dart:core::Object"]) as typeof _ClampingScrollSimulationBinding & _FlaxInstanceType<ClampingScrollSimulation> & _FlaxDartType<ClampingScrollSimulation, readonly ["class", "flax.core/sdk_widgets#type:ClampingScrollSimulation", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "tolerance" | "position" | "velocity" | "friction" | "x" | "dx" | "isDone" | "toString" | "__flaxBound:package:flutter/src/widgets/scroll_simulation.dart::ClampingScrollSimulation" | "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation";

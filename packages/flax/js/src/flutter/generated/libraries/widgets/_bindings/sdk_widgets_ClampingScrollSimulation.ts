// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import type * as upstream1 from '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
const _flaxMemberParameters0 = [{"name":"position","required":true},{"name":"velocity","required":true},{"name":"friction"},{"name":"tolerance"}] as const;
const _flaxMemberParameters1 = [{"name":"time","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ClampingScrollSimulation extends Omit<upstream0.Simulation, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_simulation.dart::ClampingScrollSimulation": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [] }> { readonly __ClampingScrollSimulation: unique symbol;
readonly [_flaxDartTypeValue]: ClampingScrollSimulation;

}
defineObject("flax.core/sdk_widgets#type:ClampingScrollSimulation", ["tolerance","position","velocity","friction"], ["tolerance"], _flaxBindingMethods("flax.core/sdk_widgets#type:ClampingScrollSimulation", "object", {}, {}), [], undefined, "flax.core/sdk_physics#type:Simulation");
const _ClampingScrollSimulationProxy = {type: "flax.core/sdk_widgets#type:ClampingScrollSimulation", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"x":_flaxMemberParameters1,"dx":_flaxMemberParameters1,"isDone":_flaxMemberParameters1,"toString":_flaxMemberParameters2}, getters: ["position","velocity","friction","tolerance"], setters: ["tolerance"], contextMembers: [], superMembers: ["get:position","get:velocity","get:friction","get:tolerance","set:tolerance","x","dx","isDone","toString"]} as const;
export interface ClampingScrollSimulation {
readonly [_flaxDartTypeValue]: ClampingScrollSimulation;

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
export abstract class ClampingScrollSimulation extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ClampingScrollSimulation>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ClampingScrollSimulation;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ClampingScrollSimulation", readonly [], false];
constructor(options: {position: number; velocity: number; friction?: number | undefined; tolerance?: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }> | undefined}) { super(_ClampingScrollSimulationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ClampingScrollSimulation.prototype, _ClampingScrollSimulationProxy);
export namespace ClampingScrollSimulation { export function implement(args: [options: {position: number; velocity: number; friction?: number | undefined; tolerance?: Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }> | undefined}], implementation: {}): ClampingScrollSimulation {
return constructProxy(_ClampingScrollSimulationProxy, args, implementation) as ClampingScrollSimulation; } }
_flaxBindInstanceType<ClampingScrollSimulation, typeof ClampingScrollSimulation>(ClampingScrollSimulation, "flax.core/sdk_widgets#type:ClampingScrollSimulation", ["flax.core/sdk_physics#type:Simulation","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "tolerance" | "position" | "velocity" | "friction" | "x" | "dx" | "isDone" | "toString" | "__flaxBound:package:flutter/src/widgets/scroll_simulation.dart::ClampingScrollSimulation" | "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation";

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters3, _flaxMemberParameters11 } from "@flax/flutter/physics/_bindings/sdk_physics.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/physics/_bindings/sdk_physics.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Tolerance extends Readonly<{ "__flaxBound:package:flutter/src/physics/tolerance.dart::Tolerance": readonly [] }> { readonly __Tolerance: unique symbol;
readonly [_flaxDartTypeValue]: Tolerance;

}
defineObject("flax.core/sdk_physics#type:Tolerance", ["distance","time","velocity"], [], _flaxBindingMethods("flax.core/sdk_physics#type:Tolerance", "object", {"toString":_flaxMemberParameters3}, {}), []);
const _ToleranceProxy = {type: "flax.core/sdk_physics#type:Tolerance", parameters: _flaxMemberParameters11, constructors: {"": _flaxMemberParameters11}, methods: {"toString":_flaxMemberParameters3}, getters: ["distance","time","velocity"], setters: [], contextMembers: [], superMembers: ["get:distance","get:time","get:velocity","toString"]} as const;
export interface Tolerance {
readonly [_flaxDartTypeValue]: Tolerance;

toString(): string;
get distance(): number;
get time(): number;
get velocity(): number;
}
export abstract class Tolerance extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Tolerance>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Tolerance;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_physics#type:Tolerance", readonly [], false];
constructor(options?: {distance?: number | undefined; time?: number | undefined; velocity?: number | undefined}) { super(_ToleranceProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(Tolerance.prototype, _ToleranceProxy);
export namespace Tolerance { export function implement(args: [options?: {distance?: number | undefined; time?: number | undefined; velocity?: number | undefined}], implementation: {}): Tolerance {
return constructProxy(_ToleranceProxy, args, implementation) as Tolerance; } }
export namespace Tolerance { export declare const defaultTolerance: Tolerance; }
_flaxDefineStaticGetters(Tolerance, "flax.core/sdk_physics#read:Tolerance.", ["defaultTolerance"]);
_flaxBindInstanceType<Tolerance, typeof Tolerance>(Tolerance, "flax.core/sdk_physics#type:Tolerance", ["dart:core::Object"]);

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { _flaxMemberParameters3, _flaxMemberParameters9 } from "@flax/flutter/physics/_bindings/sdk_physics.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/physics/_bindings/sdk_physics.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SpringDescription extends Readonly<{ "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringDescription": readonly [] }> { readonly __SpringDescription: unique symbol;
readonly [_flaxDartTypeValue]: SpringDescription;

}
defineObject("flax.core/sdk_physics#type:SpringDescription", ["mass","stiffness","damping","duration","bounce"], [], _flaxBindingMethods("flax.core/sdk_physics#type:SpringDescription", "object", {"toString":_flaxMemberParameters3}, {}), []);
const _SpringDescriptionProxy = {type: "flax.core/sdk_physics#type:SpringDescription", parameters: _flaxMemberParameters9, constructors: {"": _flaxMemberParameters9}, methods: {"toString":_flaxMemberParameters3}, getters: ["mass","stiffness","damping","duration","bounce"], setters: [], contextMembers: [], superMembers: ["get:mass","get:stiffness","get:damping","get:duration","get:bounce","toString"]} as const;
export interface SpringDescription {
readonly [_flaxDartTypeValue]: SpringDescription;

toString(): string;
get mass(): number;
get stiffness(): number;
get damping(): number;
get duration(): upstream0.Duration;
get bounce(): number;
}
export abstract class SpringDescription extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SpringDescription>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SpringDescription;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_physics#type:SpringDescription", readonly [], false];
constructor(options: {mass: number; stiffness: number; damping: number}) { super(_SpringDescriptionProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(SpringDescription.prototype, _SpringDescriptionProxy);
export namespace SpringDescription { export function implement(args: [options: {mass: number; stiffness: number; damping: number}], implementation: {}): SpringDescription {
return constructProxy(_SpringDescriptionProxy, args, implementation) as SpringDescription; } }
_flaxBindInstanceType<SpringDescription, typeof SpringDescription>(SpringDescription, "flax.core/sdk_physics#type:SpringDescription", ["dart:core::Object"]);

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
const _flaxMemberParameters0 = [{"name":"informationCollector"},{"name":"isAppliedConstraint"}] as const;
const _flaxMemberParameters1 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Constraints extends Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> { readonly __Constraints: unique symbol;
readonly [_flaxDartTypeValue]: Constraints;

}
defineObject("flax.core/sdk_rendering#type:Constraints", ["isTight","isNormalized"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:Constraints", "object", {"debugAssertIsValid":_flaxMemberParameters0}, {}), []);
const _ConstraintsProxy = {type: "flax.core/sdk_rendering#type:Constraints", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"debugAssertIsValid":_flaxMemberParameters0}, getters: ["isTight","isNormalized"], setters: [], contextMembers: [], superMembers: ["debugAssertIsValid"]} as const;
export interface Constraints {
readonly [_flaxDartTypeValue]: Constraints;

debugAssertIsValid(options?: {isAppliedConstraint?: boolean | undefined; informationCollector?: (() => DartIterableInput<upstream0.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>>) | null | undefined}): boolean;
}
export abstract class Constraints extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Constraints>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Constraints;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:Constraints", readonly [], false];
constructor() { super(_ConstraintsProxy, Array.from(arguments)); }
abstract get isTight(): boolean;
abstract get isNormalized(): boolean;
}
_flaxDefineProxyBase(Constraints.prototype, _ConstraintsProxy);
export namespace Constraints { export function implement(args: [], implementation: {get isTight(): boolean; get isNormalized(): boolean}): Constraints {
return constructProxy(_ConstraintsProxy, args, implementation) as Constraints; } }
_flaxBindInstanceType<Constraints, typeof Constraints>(Constraints, "flax.core/sdk_rendering#type:Constraints", ["dart:core::Object"]);

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
const _flaxMemberParameters0 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverLogicalParentData extends Omit<upstream0.ParentData, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverLogicalParentData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [] }> { readonly __SliverLogicalParentData: unique symbol;
readonly [_flaxDartTypeValue]: SliverLogicalParentData;

}
defineObject("flax.core/sdk_rendering#type:SliverLogicalParentData", ["layoutOffset"], ["layoutOffset"], _flaxBindingMethods("flax.core/sdk_rendering#type:SliverLogicalParentData", "object", {}, {}), [], undefined, "flax.core/sdk_rendering#type:ParentData");
const _SliverLogicalParentDataProxy = {type: "flax.core/sdk_rendering#type:SliverLogicalParentData", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"detach":_flaxMemberParameters0,"toString":_flaxMemberParameters0}, getters: ["layoutOffset"], setters: ["layoutOffset"], contextMembers: [], superMembers: ["get:layoutOffset","set:layoutOffset","detach","toString"]} as const;
export interface SliverLogicalParentData {
readonly [_flaxDartTypeValue]: SliverLogicalParentData;

detach(): void;
toString(): string;
get layoutOffset(): number | null;
set layoutOffset(value: number | null);
}
export abstract class SliverLogicalParentData extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverLogicalParentData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SliverLogicalParentData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverLogicalParentData", readonly [], false];
constructor() { super(_SliverLogicalParentDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(SliverLogicalParentData.prototype, _SliverLogicalParentDataProxy);
export namespace SliverLogicalParentData { export function implement(args: [], implementation: {}): SliverLogicalParentData {
return constructProxy(_SliverLogicalParentDataProxy, args, implementation) as SliverLogicalParentData; } }
_flaxBindInstanceType<SliverLogicalParentData, typeof SliverLogicalParentData>(SliverLogicalParentData, "flax.core/sdk_rendering#type:SliverLogicalParentData", ["flax.core/sdk_rendering#type:ParentData","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "layoutOffset" | "detach" | "toString" | "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverLogicalParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ParentData";

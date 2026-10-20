// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import { _flaxMemberParameters1 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverLogicalParentData extends Omit<upstream0.ParentData, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverLogicalParentData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [] }> { readonly __SliverLogicalParentData: unique symbol;
readonly [_flaxDartTypeValue]: SliverLogicalParentData;

get layoutOffset(): number | null;
detach(): void;
toString(): string;
set layoutOffset(value: number | null);
}
defineObject("flax.core/sdk_rendering#type:SliverLogicalParentData", ["layoutOffset"], ["layoutOffset"], _flaxBindingMethods("flax.core/sdk_rendering#type:SliverLogicalParentData", "object", {}, {}), [], undefined, "flax.core/sdk_rendering#type:ParentData");
export function _SliverLogicalParentDataFactory(): SliverLogicalParentData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:SliverLogicalParentData", "", [], [], {}) as SliverLogicalParentData;
}
const _SliverLogicalParentDataProxy = {type: "flax.core/sdk_rendering#type:SliverLogicalParentData", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"detach":_flaxMemberParameters1,"toString":_flaxMemberParameters1}, getters: ["layoutOffset"], setters: ["layoutOffset"], contextMembers: [], superMembers: ["get:layoutOffset","set:layoutOffset","detach","toString"]} as const;
export interface _SliverLogicalParentDataNative extends SliverLogicalParentData {
readonly [_flaxDartTypeValue]: _SliverLogicalParentDataNative;

detach(): void;
toString(): string;
get layoutOffset(): number | null;
set layoutOffset(value: number | null);
}
export abstract class _SliverLogicalParentDataNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverLogicalParentData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SliverLogicalParentData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverLogicalParentData", readonly [], false];
constructor() { super(_SliverLogicalParentDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SliverLogicalParentDataNative.prototype, _SliverLogicalParentDataProxy);
export namespace _SliverLogicalParentDataFactory { export function implement(args: [], implementation: {}): SliverLogicalParentData {
return constructProxy(_SliverLogicalParentDataProxy, args, implementation) as SliverLogicalParentData; } }
const _SliverLogicalParentDataBinding = _flaxProxyFactory(_SliverLogicalParentDataFactory, _SliverLogicalParentDataNative) as unknown as typeof _SliverLogicalParentDataFactory & (new() => _SliverLogicalParentDataNative);
export const SliverLogicalParentData: typeof _SliverLogicalParentDataBinding & _FlaxInstanceType<SliverLogicalParentData> & _FlaxDartType<SliverLogicalParentData, readonly ["class", "flax.core/sdk_rendering#type:SliverLogicalParentData", readonly [], false]> = _flaxBindInstanceType<SliverLogicalParentData, typeof _SliverLogicalParentDataBinding>(_SliverLogicalParentDataBinding, "flax.core/sdk_rendering#type:SliverLogicalParentData", ["flax.core/sdk_rendering#type:ParentData","dart:core::Object"]) as typeof _SliverLogicalParentDataBinding & _FlaxInstanceType<SliverLogicalParentData> & _FlaxDartType<SliverLogicalParentData, readonly ["class", "flax.core/sdk_rendering#type:SliverLogicalParentData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "layoutOffset" | "detach" | "toString" | "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverLogicalParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ParentData";

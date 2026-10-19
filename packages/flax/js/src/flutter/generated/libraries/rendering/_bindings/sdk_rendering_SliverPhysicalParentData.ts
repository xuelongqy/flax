// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import { _flaxMemberParameters25, _flaxMemberParameters1 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverPhysicalParentData extends Omit<upstream0.ParentData, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverPhysicalParentData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [] }> { readonly __SliverPhysicalParentData: unique symbol;
readonly [_flaxDartTypeValue]: SliverPhysicalParentData;

}
defineObject("flax.core/sdk_rendering#type:SliverPhysicalParentData", ["paintOffset","crossAxisFlex"], ["paintOffset","crossAxisFlex"], _flaxBindingMethods("flax.core/sdk_rendering#type:SliverPhysicalParentData", "object", {"applyPaintTransform":_flaxMemberParameters25}, {}), [], undefined, "flax.core/sdk_rendering#type:ParentData");
const _SliverPhysicalParentDataProxy = {type: "flax.core/sdk_rendering#type:SliverPhysicalParentData", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"detach":_flaxMemberParameters1,"toString":_flaxMemberParameters1,"applyPaintTransform":_flaxMemberParameters25}, getters: ["paintOffset","crossAxisFlex"], setters: ["paintOffset","crossAxisFlex"], contextMembers: [], superMembers: ["get:paintOffset","get:crossAxisFlex","set:paintOffset","set:crossAxisFlex","detach","toString","applyPaintTransform"]} as const;
export interface SliverPhysicalParentData {
readonly [_flaxDartTypeValue]: SliverPhysicalParentData;

detach(): void;
toString(): string;
applyPaintTransform(transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
get paintOffset(): upstream1.Offset;
get crossAxisFlex(): number | null;
set paintOffset(value: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>);
set crossAxisFlex(value: number | null);
}
export abstract class SliverPhysicalParentData extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverPhysicalParentData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SliverPhysicalParentData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverPhysicalParentData", readonly [], false];
constructor() { super(_SliverPhysicalParentDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(SliverPhysicalParentData.prototype, _SliverPhysicalParentDataProxy);
export namespace SliverPhysicalParentData { export function implement(args: [], implementation: {}): SliverPhysicalParentData {
return constructProxy(_SliverPhysicalParentDataProxy, args, implementation) as SliverPhysicalParentData; } }
_flaxBindInstanceType<SliverPhysicalParentData, typeof SliverPhysicalParentData>(SliverPhysicalParentData, "flax.core/sdk_rendering#type:SliverPhysicalParentData", ["flax.core/sdk_rendering#type:ParentData","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "paintOffset" | "crossAxisFlex" | "detach" | "toString" | "applyPaintTransform" | "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverPhysicalParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ParentData";

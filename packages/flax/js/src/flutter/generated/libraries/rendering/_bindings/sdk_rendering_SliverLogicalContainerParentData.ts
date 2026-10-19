// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverLogicalParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverLogicalParentData';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerParentDataMixin';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerParentDataMixin';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderSliver';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderSliver';
import { _flaxMemberParameters1 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverLogicalContainerParentData extends Omit<upstream0.SliverLogicalParentData, _flaxOwnMembers0>, Omit<upstream1.ParentData, _flaxOwnMembers0 | keyof upstream0.SliverLogicalParentData>, Omit<upstream2.ContainerParentDataMixin<upstream3.RenderSliver>, _flaxOwnMembers0 | keyof upstream0.SliverLogicalParentData | keyof upstream1.ParentData>, Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverLogicalContainerParentData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverLogicalParentData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin": readonly [upstream3.RenderSliver] }> { readonly __SliverLogicalContainerParentData: unique symbol;
readonly [_flaxDartTypeValue]: SliverLogicalContainerParentData;

}
defineObject("flax.core/sdk_rendering#type:SliverLogicalContainerParentData", ["layoutOffset","previousSibling","nextSibling"], ["layoutOffset","previousSibling","nextSibling"], _flaxBindingMethods("flax.core/sdk_rendering#type:SliverLogicalContainerParentData", "object", {}, {}), [], undefined, "flax.core/sdk_rendering#type:SliverLogicalParentData");
const _SliverLogicalContainerParentDataProxy = {type: "flax.core/sdk_rendering#type:SliverLogicalContainerParentData", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toString":_flaxMemberParameters1,"detach":_flaxMemberParameters1}, getters: ["layoutOffset","previousSibling","nextSibling"], setters: ["layoutOffset","previousSibling","nextSibling"], contextMembers: [], superMembers: ["get:layoutOffset","get:previousSibling","get:nextSibling","set:layoutOffset","set:previousSibling","set:nextSibling","toString","detach"]} as const;
export interface SliverLogicalContainerParentData {
readonly [_flaxDartTypeValue]: SliverLogicalContainerParentData;

toString(): string;
detach(): void;
get layoutOffset(): number | null;
get previousSibling(): upstream3.RenderSliver | null;
get nextSibling(): upstream3.RenderSliver | null;
set layoutOffset(value: number | null);
set previousSibling(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::RenderSliver": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
set nextSibling(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::RenderSliver": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
}
export abstract class SliverLogicalContainerParentData extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverLogicalContainerParentData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SliverLogicalContainerParentData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverLogicalContainerParentData", readonly [], false];
constructor() { super(_SliverLogicalContainerParentDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(SliverLogicalContainerParentData.prototype, _SliverLogicalContainerParentDataProxy);
export namespace SliverLogicalContainerParentData { export function implement(args: [], implementation: {}): SliverLogicalContainerParentData {
return constructProxy(_SliverLogicalContainerParentDataProxy, args, implementation) as SliverLogicalContainerParentData; } }
_flaxBindInstanceType<SliverLogicalContainerParentData, typeof SliverLogicalContainerParentData>(SliverLogicalContainerParentData, "flax.core/sdk_rendering#type:SliverLogicalContainerParentData", ["flax.core/sdk_rendering#type:SliverLogicalParentData","flax.core/sdk_rendering#type:ParentData","dart:core::Object","flax.core/sdk_rendering#type:ContainerParentDataMixin"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "layoutOffset" | "previousSibling" | "nextSibling" | "toString" | "detach" | "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverLogicalContainerParentData" | "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverLogicalParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin";

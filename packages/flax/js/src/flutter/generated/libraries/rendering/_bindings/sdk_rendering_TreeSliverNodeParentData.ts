// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverMultiBoxAdaptorParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverMultiBoxAdaptorParentData';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverLogicalParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverLogicalParentData';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerParentDataMixin';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerParentDataMixin';
import type * as upstream4 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream5 from '@flax/flutter/rendering/_bindings/sdk_rendering_KeepAliveParentDataMixin';
import '@flax/flutter/rendering/_bindings/sdk_rendering_KeepAliveParentDataMixin';
import { _flaxMemberParameters1 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TreeSliverNodeParentData extends Omit<upstream0.SliverMultiBoxAdaptorParentData, _flaxOwnMembers0>, Omit<upstream1.SliverLogicalParentData, _flaxOwnMembers0 | keyof upstream0.SliverMultiBoxAdaptorParentData>, Omit<upstream2.ParentData, _flaxOwnMembers0 | keyof upstream0.SliverMultiBoxAdaptorParentData | keyof upstream1.SliverLogicalParentData>, Omit<upstream3.ContainerParentDataMixin<upstream4.RenderBox>, _flaxOwnMembers0 | keyof upstream0.SliverMultiBoxAdaptorParentData | keyof upstream1.SliverLogicalParentData | keyof upstream2.ParentData>, Omit<upstream5.KeepAliveParentDataMixin, _flaxOwnMembers0 | keyof upstream0.SliverMultiBoxAdaptorParentData | keyof upstream1.SliverLogicalParentData | keyof upstream2.ParentData | keyof upstream3.ContainerParentDataMixin<upstream4.RenderBox>>, Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_tree.dart::TreeSliverNodeParentData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_multi_box_adaptor.dart::SliverMultiBoxAdaptorParentData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverLogicalParentData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin": readonly [upstream4.RenderBox] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_multi_box_adaptor.dart::KeepAliveParentDataMixin": readonly [] }> { readonly __TreeSliverNodeParentData: unique symbol;
readonly [_flaxDartTypeValue]: TreeSliverNodeParentData;

}
defineObject("flax.core/sdk_rendering#type:TreeSliverNodeParentData", ["index","keptAlive","layoutOffset","previousSibling","nextSibling","keepAlive","depth"], ["index","layoutOffset","previousSibling","nextSibling","keepAlive","depth"], _flaxBindingMethods("flax.core/sdk_rendering#type:TreeSliverNodeParentData", "object", {}, {}), [], undefined, "flax.core/sdk_rendering#type:SliverMultiBoxAdaptorParentData");
const _TreeSliverNodeParentDataProxy = {type: "flax.core/sdk_rendering#type:TreeSliverNodeParentData", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toString":_flaxMemberParameters1,"detach":_flaxMemberParameters1}, getters: ["depth","index","keptAlive","layoutOffset","previousSibling","nextSibling","keepAlive"], setters: ["depth","index","layoutOffset","previousSibling","nextSibling","keepAlive"], contextMembers: [], superMembers: ["get:depth","get:index","get:keptAlive","get:layoutOffset","get:previousSibling","get:nextSibling","get:keepAlive","set:depth","set:index","set:layoutOffset","set:previousSibling","set:nextSibling","set:keepAlive","toString","detach"]} as const;
export interface TreeSliverNodeParentData {
readonly [_flaxDartTypeValue]: TreeSliverNodeParentData;

toString(): string;
detach(): void;
get depth(): number;
get index(): number | null;
get keptAlive(): boolean;
get layoutOffset(): number | null;
get previousSibling(): upstream4.RenderBox | null;
get nextSibling(): upstream4.RenderBox | null;
get keepAlive(): boolean;
set depth(value: number);
set index(value: number | null);
set layoutOffset(value: number | null);
set previousSibling(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
set nextSibling(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
set keepAlive(value: boolean);
}
export abstract class TreeSliverNodeParentData extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TreeSliverNodeParentData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TreeSliverNodeParentData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:TreeSliverNodeParentData", readonly [], false];
constructor() { super(_TreeSliverNodeParentDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TreeSliverNodeParentData.prototype, _TreeSliverNodeParentDataProxy);
export namespace TreeSliverNodeParentData { export function implement(args: [], implementation: {}): TreeSliverNodeParentData {
return constructProxy(_TreeSliverNodeParentDataProxy, args, implementation) as TreeSliverNodeParentData; } }
_flaxBindInstanceType<TreeSliverNodeParentData, typeof TreeSliverNodeParentData>(TreeSliverNodeParentData, "flax.core/sdk_rendering#type:TreeSliverNodeParentData", ["flax.core/sdk_rendering#type:SliverMultiBoxAdaptorParentData","flax.core/sdk_rendering#type:SliverLogicalParentData","flax.core/sdk_rendering#type:ParentData","dart:core::Object","flax.core/sdk_rendering#type:ContainerParentDataMixin","flax.core/sdk_rendering#type:KeepAliveParentDataMixin"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "index" | "keptAlive" | "layoutOffset" | "previousSibling" | "nextSibling" | "keepAlive" | "depth" | "toString" | "detach" | "__flaxBound:package:flutter/src/rendering/sliver_tree.dart::TreeSliverNodeParentData" | "__flaxBound:package:flutter/src/rendering/sliver_multi_box_adaptor.dart::SliverMultiBoxAdaptorParentData" | "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverLogicalParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin" | "__flaxBound:package:flutter/src/rendering/sliver_multi_box_adaptor.dart::KeepAliveParentDataMixin";

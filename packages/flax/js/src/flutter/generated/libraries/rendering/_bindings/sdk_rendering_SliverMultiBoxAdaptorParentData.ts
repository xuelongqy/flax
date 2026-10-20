// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverLogicalParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverLogicalParentData';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerParentDataMixin';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerParentDataMixin';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream4 from '@flax/flutter/rendering/_bindings/sdk_rendering_KeepAliveParentDataMixin';
import '@flax/flutter/rendering/_bindings/sdk_rendering_KeepAliveParentDataMixin';
import { _flaxMemberParameters1 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverMultiBoxAdaptorParentData extends Omit<upstream0.SliverLogicalParentData, _flaxOwnMembers0>, Omit<upstream1.ParentData, _flaxOwnMembers0 | keyof upstream0.SliverLogicalParentData>, Omit<upstream2.ContainerParentDataMixin<upstream3.RenderBox>, _flaxOwnMembers0 | keyof upstream0.SliverLogicalParentData | keyof upstream1.ParentData>, Omit<upstream4.KeepAliveParentDataMixin, _flaxOwnMembers0 | keyof upstream0.SliverLogicalParentData | keyof upstream1.ParentData | keyof upstream2.ContainerParentDataMixin<upstream3.RenderBox>>, Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_multi_box_adaptor.dart::SliverMultiBoxAdaptorParentData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverLogicalParentData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin": readonly [upstream3.RenderBox] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_multi_box_adaptor.dart::KeepAliveParentDataMixin": readonly [] }> { readonly __SliverMultiBoxAdaptorParentData: unique symbol;
readonly [_flaxDartTypeValue]: SliverMultiBoxAdaptorParentData;

get layoutOffset(): number | null;
get previousSibling(): upstream3.RenderBox | null;
get nextSibling(): upstream3.RenderBox | null;
get keepAlive(): boolean;
readonly keptAlive: boolean;
get index(): number | null;
toString(): string;
detach(): void;
set layoutOffset(value: number | null);
set previousSibling(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
set nextSibling(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
set keepAlive(value: boolean);
set index(value: number | null);
}
defineObject("flax.core/sdk_rendering#type:SliverMultiBoxAdaptorParentData", ["layoutOffset","previousSibling","nextSibling","keepAlive","keptAlive","index"], ["layoutOffset","previousSibling","nextSibling","keepAlive","index"], _flaxBindingMethods("flax.core/sdk_rendering#type:SliverMultiBoxAdaptorParentData", "object", {}, {}), [], undefined, "flax.core/sdk_rendering#type:KeepAliveParentDataMixin");
export function _SliverMultiBoxAdaptorParentDataFactory(): SliverMultiBoxAdaptorParentData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:SliverMultiBoxAdaptorParentData", "", [], [], {}) as SliverMultiBoxAdaptorParentData;
}
const _SliverMultiBoxAdaptorParentDataProxy = {type: "flax.core/sdk_rendering#type:SliverMultiBoxAdaptorParentData", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toString":_flaxMemberParameters1,"detach":_flaxMemberParameters1}, getters: ["index","keptAlive","layoutOffset","previousSibling","nextSibling","keepAlive"], setters: ["index","layoutOffset","previousSibling","nextSibling","keepAlive"], contextMembers: [], superMembers: ["get:index","get:keptAlive","get:layoutOffset","get:previousSibling","get:nextSibling","get:keepAlive","set:index","set:layoutOffset","set:previousSibling","set:nextSibling","set:keepAlive","toString","detach"]} as const;
export interface _SliverMultiBoxAdaptorParentDataNative extends SliverMultiBoxAdaptorParentData {
readonly [_flaxDartTypeValue]: _SliverMultiBoxAdaptorParentDataNative;

toString(): string;
detach(): void;
get index(): number | null;
get keptAlive(): boolean;
get layoutOffset(): number | null;
get previousSibling(): upstream3.RenderBox | null;
get nextSibling(): upstream3.RenderBox | null;
get keepAlive(): boolean;
set index(value: number | null);
set layoutOffset(value: number | null);
set previousSibling(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
set nextSibling(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
set keepAlive(value: boolean);
}
export abstract class _SliverMultiBoxAdaptorParentDataNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverMultiBoxAdaptorParentData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SliverMultiBoxAdaptorParentData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverMultiBoxAdaptorParentData", readonly [], false];
constructor() { super(_SliverMultiBoxAdaptorParentDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SliverMultiBoxAdaptorParentDataNative.prototype, _SliverMultiBoxAdaptorParentDataProxy);
export namespace _SliverMultiBoxAdaptorParentDataFactory { export function implement(args: [], implementation: {}): SliverMultiBoxAdaptorParentData {
return constructProxy(_SliverMultiBoxAdaptorParentDataProxy, args, implementation) as SliverMultiBoxAdaptorParentData; } }
const _SliverMultiBoxAdaptorParentDataBinding = _flaxProxyFactory(_SliverMultiBoxAdaptorParentDataFactory, _SliverMultiBoxAdaptorParentDataNative) as unknown as typeof _SliverMultiBoxAdaptorParentDataFactory & (new() => _SliverMultiBoxAdaptorParentDataNative);
export const SliverMultiBoxAdaptorParentData: typeof _SliverMultiBoxAdaptorParentDataBinding & _FlaxInstanceType<SliverMultiBoxAdaptorParentData> & _FlaxDartType<SliverMultiBoxAdaptorParentData, readonly ["class", "flax.core/sdk_rendering#type:SliverMultiBoxAdaptorParentData", readonly [], false]> = _flaxBindInstanceType<SliverMultiBoxAdaptorParentData, typeof _SliverMultiBoxAdaptorParentDataBinding>(_SliverMultiBoxAdaptorParentDataBinding, "flax.core/sdk_rendering#type:SliverMultiBoxAdaptorParentData", ["flax.core/sdk_rendering#type:SliverLogicalParentData","flax.core/sdk_rendering#type:ParentData","dart:core::Object","flax.core/sdk_rendering#type:ContainerParentDataMixin","flax.core/sdk_rendering#type:KeepAliveParentDataMixin"]) as typeof _SliverMultiBoxAdaptorParentDataBinding & _FlaxInstanceType<SliverMultiBoxAdaptorParentData> & _FlaxDartType<SliverMultiBoxAdaptorParentData, readonly ["class", "flax.core/sdk_rendering#type:SliverMultiBoxAdaptorParentData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "layoutOffset" | "previousSibling" | "nextSibling" | "keepAlive" | "keptAlive" | "index" | "toString" | "detach" | "__flaxBound:package:flutter/src/rendering/sliver_multi_box_adaptor.dart::SliverMultiBoxAdaptorParentData" | "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverLogicalParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin" | "__flaxBound:package:flutter/src/rendering/sliver_multi_box_adaptor.dart::KeepAliveParentDataMixin";

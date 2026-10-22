// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverPhysicalParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverPhysicalParentData';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerParentDataMixin';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerParentDataMixin';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderSliver';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderSliver';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream5 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import { _flaxMemberParameters1, _flaxMemberParameters29 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverPhysicalContainerParentData extends Omit<upstream0.SliverPhysicalParentData, _flaxOwnMembers0>, Omit<upstream1.ParentData, _flaxOwnMembers0 | keyof upstream0.SliverPhysicalParentData>, Omit<upstream2.ContainerParentDataMixin<upstream3.RenderSliver>, _flaxOwnMembers0 | keyof upstream0.SliverPhysicalParentData | keyof upstream1.ParentData>, Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverPhysicalContainerParentData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverPhysicalParentData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin": readonly [upstream3.RenderSliver] }> { readonly __SliverPhysicalContainerParentData: unique symbol;
readonly [_flaxDartTypeValue]: SliverPhysicalContainerParentData;

get paintOffset(): upstream4.Offset;
get crossAxisFlex(): number | null;
get previousSibling(): upstream3.RenderSliver | null;
get nextSibling(): upstream3.RenderSliver | null;
applyPaintTransform(transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
toString(): string;
detach(): void;
set paintOffset(value: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>);
set crossAxisFlex(value: number | null);
set previousSibling(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::RenderSliver": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
set nextSibling(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::RenderSliver": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
}
defineObject("flax.core/sdk_rendering#type:SliverPhysicalContainerParentData", ["paintOffset","crossAxisFlex","previousSibling","nextSibling"], ["paintOffset","crossAxisFlex","previousSibling","nextSibling"], _flaxBindingMethods("flax.core/sdk_rendering#type:SliverPhysicalContainerParentData", "object", {}, {}), [], undefined, "flax.core/sdk_rendering#type:SliverPhysicalParentData");
export function _SliverPhysicalContainerParentDataFactory(): SliverPhysicalContainerParentData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:SliverPhysicalContainerParentData", "", [], [], {}) as SliverPhysicalContainerParentData;
}
const _SliverPhysicalContainerParentDataProxy = {type: "flax.core/sdk_rendering#type:SliverPhysicalContainerParentData", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"applyPaintTransform":_flaxMemberParameters29,"toString":_flaxMemberParameters1,"detach":_flaxMemberParameters1}, getters: ["paintOffset","crossAxisFlex","previousSibling","nextSibling"], setters: ["paintOffset","crossAxisFlex","previousSibling","nextSibling"], contextMembers: [], superMembers: ["get:paintOffset","get:crossAxisFlex","get:previousSibling","get:nextSibling","set:paintOffset","set:crossAxisFlex","set:previousSibling","set:nextSibling","applyPaintTransform","toString","detach"]} as const;
export interface _SliverPhysicalContainerParentDataNative extends SliverPhysicalContainerParentData {
readonly [_flaxDartTypeValue]: _SliverPhysicalContainerParentDataNative;

applyPaintTransform(transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
toString(): string;
detach(): void;
get paintOffset(): upstream4.Offset;
get crossAxisFlex(): number | null;
get previousSibling(): upstream3.RenderSliver | null;
get nextSibling(): upstream3.RenderSliver | null;
set paintOffset(value: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>);
set crossAxisFlex(value: number | null);
set previousSibling(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::RenderSliver": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
set nextSibling(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::RenderSliver": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
}
export abstract class _SliverPhysicalContainerParentDataNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverPhysicalContainerParentData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SliverPhysicalContainerParentData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverPhysicalContainerParentData", readonly [], false];
constructor() { super(_SliverPhysicalContainerParentDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SliverPhysicalContainerParentDataNative.prototype, _SliverPhysicalContainerParentDataProxy);
export namespace _SliverPhysicalContainerParentDataFactory { export function implement(args: [], implementation: {}): SliverPhysicalContainerParentData {
return constructProxy(_SliverPhysicalContainerParentDataProxy, args, implementation) as SliverPhysicalContainerParentData; } }
const _SliverPhysicalContainerParentDataBinding = _flaxProxyFactory(_SliverPhysicalContainerParentDataFactory, _SliverPhysicalContainerParentDataNative) as unknown as typeof _SliverPhysicalContainerParentDataFactory & (new() => _SliverPhysicalContainerParentDataNative);
export const SliverPhysicalContainerParentData: typeof _SliverPhysicalContainerParentDataBinding & _FlaxInstanceType<SliverPhysicalContainerParentData> & _FlaxDartType<SliverPhysicalContainerParentData, readonly ["class", "flax.core/sdk_rendering#type:SliverPhysicalContainerParentData", readonly [], false]> = _flaxBindInstanceType<SliverPhysicalContainerParentData, typeof _SliverPhysicalContainerParentDataBinding>(_SliverPhysicalContainerParentDataBinding, "flax.core/sdk_rendering#type:SliverPhysicalContainerParentData", ["flax.core/sdk_rendering#type:SliverPhysicalParentData","flax.core/sdk_rendering#type:ParentData","dart:core::Object","flax.core/sdk_rendering#type:ContainerParentDataMixin"]) as typeof _SliverPhysicalContainerParentDataBinding & _FlaxInstanceType<SliverPhysicalContainerParentData> & _FlaxDartType<SliverPhysicalContainerParentData, readonly ["class", "flax.core/sdk_rendering#type:SliverPhysicalContainerParentData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "paintOffset" | "crossAxisFlex" | "previousSibling" | "nextSibling" | "applyPaintTransform" | "toString" | "detach" | "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverPhysicalContainerParentData" | "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverPhysicalParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin";

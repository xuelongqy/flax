// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerBoxParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerBoxParentData';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_BoxParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_BoxParentData';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import type * as upstream4 from '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerParentDataMixin';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerParentDataMixin';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_RelativeRect';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RelativeRect';
import type * as upstream7 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import type * as upstream8 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import { _flaxMemberParameters347, _flaxMemberParameters1 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StackParentData extends Omit<upstream0.ContainerBoxParentData<upstream1.RenderBox>, _flaxOwnMembers0>, Omit<upstream2.BoxParentData, _flaxOwnMembers0 | keyof upstream0.ContainerBoxParentData<upstream1.RenderBox>>, Omit<upstream3.ParentData, _flaxOwnMembers0 | keyof upstream0.ContainerBoxParentData<upstream1.RenderBox> | keyof upstream2.BoxParentData>, Omit<upstream4.ContainerParentDataMixin<upstream1.RenderBox>, _flaxOwnMembers0 | keyof upstream0.ContainerBoxParentData<upstream1.RenderBox> | keyof upstream2.BoxParentData | keyof upstream3.ParentData>, Readonly<{ "__flaxBound:package:flutter/src/rendering/stack.dart::StackParentData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::ContainerBoxParentData": readonly [upstream1.RenderBox] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxParentData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin": readonly [upstream1.RenderBox] }> { readonly __StackParentData: unique symbol;
readonly [_flaxDartTypeValue]: StackParentData;

get offset(): upstream5.Offset;
get previousSibling(): upstream1.RenderBox | null;
get nextSibling(): upstream1.RenderBox | null;
get top(): number | null;
get right(): number | null;
get bottom(): number | null;
get left(): number | null;
get width(): number | null;
get height(): number | null;
get rect(): upstream6.RelativeRect;
readonly isPositioned: boolean;
detach(): void;
toString(): string;
positionedChildConstraints(stackSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream7.BoxConstraints;
set offset(value: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>);
set previousSibling(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
set nextSibling(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
set top(value: number | null);
set right(value: number | null);
set bottom(value: number | null);
set left(value: number | null);
set width(value: number | null);
set height(value: number | null);
set rect(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [] }>);
}
defineObject("flax.core/sdk_rendering#type:StackParentData", ["offset","previousSibling","nextSibling","top","right","bottom","left","width","height","rect","isPositioned"], ["offset","previousSibling","nextSibling","top","right","bottom","left","width","height","rect"], _flaxBindingMethods("flax.core/sdk_rendering#type:StackParentData", "object", {"positionedChildConstraints":_flaxMemberParameters347}, {}), [], undefined, "flax.core/sdk_rendering#type:BoxParentData");
export function _StackParentDataFactory(): StackParentData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:StackParentData", "", [], [], {}) as StackParentData;
}
const _StackParentDataProxy = {type: "flax.core/sdk_rendering#type:StackParentData", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"detach":_flaxMemberParameters1,"toString":_flaxMemberParameters1,"positionedChildConstraints":_flaxMemberParameters347}, getters: ["top","right","bottom","left","width","height","rect","isPositioned","offset","previousSibling","nextSibling"], setters: ["top","right","bottom","left","width","height","rect","offset","previousSibling","nextSibling"], contextMembers: [], superMembers: ["get:top","get:right","get:bottom","get:left","get:width","get:height","get:rect","get:isPositioned","get:offset","get:previousSibling","get:nextSibling","set:top","set:right","set:bottom","set:left","set:width","set:height","set:rect","set:offset","set:previousSibling","set:nextSibling","detach","toString","positionedChildConstraints"]} as const;
export interface _StackParentDataNative extends StackParentData {
readonly [_flaxDartTypeValue]: _StackParentDataNative;

detach(): void;
toString(): string;
positionedChildConstraints(stackSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream7.BoxConstraints;
get top(): number | null;
get right(): number | null;
get bottom(): number | null;
get left(): number | null;
get width(): number | null;
get height(): number | null;
get rect(): upstream6.RelativeRect;
get isPositioned(): boolean;
get offset(): upstream5.Offset;
get previousSibling(): upstream1.RenderBox | null;
get nextSibling(): upstream1.RenderBox | null;
set top(value: number | null);
set right(value: number | null);
set bottom(value: number | null);
set left(value: number | null);
set width(value: number | null);
set height(value: number | null);
set rect(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [] }>);
set offset(value: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>);
set previousSibling(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
set nextSibling(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
}
export abstract class _StackParentDataNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<StackParentData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: StackParentData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:StackParentData", readonly [], false];
constructor() { super(_StackParentDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_StackParentDataNative.prototype, _StackParentDataProxy);
export namespace _StackParentDataFactory { export function implement(args: [], implementation: {}): StackParentData {
return constructProxy(_StackParentDataProxy, args, implementation) as StackParentData; } }
const _StackParentDataBinding = _flaxProxyFactory(_StackParentDataFactory, _StackParentDataNative) as unknown as typeof _StackParentDataFactory & (new() => _StackParentDataNative);
export const StackParentData: typeof _StackParentDataBinding & _FlaxInstanceType<StackParentData> & _FlaxDartType<StackParentData, readonly ["class", "flax.core/sdk_rendering#type:StackParentData", readonly [], false]> = _flaxBindInstanceType<StackParentData, typeof _StackParentDataBinding>(_StackParentDataBinding, "flax.core/sdk_rendering#type:StackParentData", ["flax.core/sdk_rendering#type:ContainerBoxParentData","flax.core/sdk_rendering#type:BoxParentData","flax.core/sdk_rendering#type:ParentData","dart:core::Object","flax.core/sdk_rendering#type:ContainerParentDataMixin"]) as typeof _StackParentDataBinding & _FlaxInstanceType<StackParentData> & _FlaxDartType<StackParentData, readonly ["class", "flax.core/sdk_rendering#type:StackParentData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "offset" | "previousSibling" | "nextSibling" | "top" | "right" | "bottom" | "left" | "width" | "height" | "rect" | "isPositioned" | "detach" | "toString" | "positionedChildConstraints" | "__flaxBound:package:flutter/src/rendering/stack.dart::StackParentData" | "__flaxBound:package:flutter/src/rendering/box.dart::ContainerBoxParentData" | "__flaxBound:package:flutter/src/rendering/box.dart::BoxParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin";

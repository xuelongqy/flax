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
import { _flaxMemberParameters1 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface WrapParentData extends Omit<upstream0.ContainerBoxParentData<upstream1.RenderBox>, _flaxOwnMembers0>, Omit<upstream2.BoxParentData, _flaxOwnMembers0 | keyof upstream0.ContainerBoxParentData<upstream1.RenderBox>>, Omit<upstream3.ParentData, _flaxOwnMembers0 | keyof upstream0.ContainerBoxParentData<upstream1.RenderBox> | keyof upstream2.BoxParentData>, Omit<upstream4.ContainerParentDataMixin<upstream1.RenderBox>, _flaxOwnMembers0 | keyof upstream0.ContainerBoxParentData<upstream1.RenderBox> | keyof upstream2.BoxParentData | keyof upstream3.ParentData>, Readonly<{ "__flaxBound:package:flutter/src/rendering/wrap.dart::WrapParentData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::ContainerBoxParentData": readonly [upstream1.RenderBox] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxParentData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin": readonly [upstream1.RenderBox] }> { readonly __WrapParentData: unique symbol;
readonly [_flaxDartTypeValue]: WrapParentData;

get offset(): upstream5.Offset;
get previousSibling(): upstream1.RenderBox | null;
get nextSibling(): upstream1.RenderBox | null;
detach(): void;
toString(): string;
set offset(value: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>);
set previousSibling(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
set nextSibling(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
}
defineObject("flax.core/sdk_rendering#type:WrapParentData", ["offset","previousSibling","nextSibling"], ["offset","previousSibling","nextSibling"], _flaxBindingMethods("flax.core/sdk_rendering#type:WrapParentData", "object", {}, {}), [], undefined, "flax.core/sdk_rendering#type:BoxParentData");
export function _WrapParentDataFactory(): WrapParentData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:WrapParentData", "", [], [], {}) as WrapParentData;
}
const _WrapParentDataProxy = {type: "flax.core/sdk_rendering#type:WrapParentData", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"detach":_flaxMemberParameters1,"toString":_flaxMemberParameters1}, getters: ["offset","previousSibling","nextSibling"], setters: ["offset","previousSibling","nextSibling"], contextMembers: [], superMembers: ["get:offset","get:previousSibling","get:nextSibling","set:offset","set:previousSibling","set:nextSibling","detach","toString"]} as const;
export interface _WrapParentDataNative extends WrapParentData {
readonly [_flaxDartTypeValue]: _WrapParentDataNative;

detach(): void;
toString(): string;
get offset(): upstream5.Offset;
get previousSibling(): upstream1.RenderBox | null;
get nextSibling(): upstream1.RenderBox | null;
set offset(value: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>);
set previousSibling(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
set nextSibling(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
}
export abstract class _WrapParentDataNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<WrapParentData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: WrapParentData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:WrapParentData", readonly [], false];
constructor() { super(_WrapParentDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_WrapParentDataNative.prototype, _WrapParentDataProxy);
export namespace _WrapParentDataFactory { export function implement(args: [], implementation: {}): WrapParentData {
return constructProxy(_WrapParentDataProxy, args, implementation) as WrapParentData; } }
const _WrapParentDataBinding = _flaxProxyFactory(_WrapParentDataFactory, _WrapParentDataNative) as unknown as typeof _WrapParentDataFactory & (new() => _WrapParentDataNative);
export const WrapParentData: typeof _WrapParentDataBinding & _FlaxInstanceType<WrapParentData> & _FlaxDartType<WrapParentData, readonly ["class", "flax.core/sdk_rendering#type:WrapParentData", readonly [], false]> = _flaxBindInstanceType<WrapParentData, typeof _WrapParentDataBinding>(_WrapParentDataBinding, "flax.core/sdk_rendering#type:WrapParentData", ["flax.core/sdk_rendering#type:ContainerBoxParentData","flax.core/sdk_rendering#type:BoxParentData","flax.core/sdk_rendering#type:ParentData","dart:core::Object","flax.core/sdk_rendering#type:ContainerParentDataMixin"]) as typeof _WrapParentDataBinding & _FlaxInstanceType<WrapParentData> & _FlaxDartType<WrapParentData, readonly ["class", "flax.core/sdk_rendering#type:WrapParentData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "offset" | "previousSibling" | "nextSibling" | "detach" | "toString" | "__flaxBound:package:flutter/src/rendering/wrap.dart::WrapParentData" | "__flaxBound:package:flutter/src/rendering/box.dart::ContainerBoxParentData" | "__flaxBound:package:flutter/src/rendering/box.dart::BoxParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin";

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerParentDataMixin';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerParentDataMixin';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream4 from '@flax/flutter/painting/_bindings/sdk_painting_PlaceholderSpan';
import '@flax/flutter/painting/_bindings/sdk_painting_PlaceholderSpan';
import { _flaxMemberParameters1 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextParentData extends Omit<upstream0.ParentData, _flaxOwnMembers0>, Omit<upstream1.ContainerParentDataMixin<upstream2.RenderBox>, _flaxOwnMembers0 | keyof upstream0.ParentData>, Readonly<{ "__flaxBound:package:flutter/src/rendering/paragraph.dart::TextParentData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin": readonly [upstream2.RenderBox] }> { readonly __TextParentData: unique symbol;
readonly [_flaxDartTypeValue]: TextParentData;

get previousSibling(): upstream2.RenderBox | null;
get nextSibling(): upstream2.RenderBox | null;
readonly offset: upstream3.Offset | null;
get span(): upstream4.PlaceholderSpan | null;
detach(): void;
toString(): string;
set previousSibling(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
set nextSibling(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
set span(value: Readonly<{ "__flaxBound:package:flutter/src/painting/placeholder_span.dart::PlaceholderSpan": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
}
defineObject("flax.core/sdk_rendering#type:TextParentData", ["previousSibling","nextSibling","offset","span"], ["previousSibling","nextSibling","span"], _flaxBindingMethods("flax.core/sdk_rendering#type:TextParentData", "object", {}, {}), [], undefined, "flax.core/sdk_rendering#type:ParentData");
export function _TextParentDataFactory(): TextParentData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:TextParentData", "", [], [], {}) as TextParentData;
}
const _TextParentDataProxy = {type: "flax.core/sdk_rendering#type:TextParentData", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"detach":_flaxMemberParameters1,"toString":_flaxMemberParameters1}, getters: ["offset","span","previousSibling","nextSibling"], setters: ["span","previousSibling","nextSibling"], contextMembers: [], superMembers: ["get:offset","get:span","get:previousSibling","get:nextSibling","set:span","set:previousSibling","set:nextSibling","detach","toString"]} as const;
export interface _TextParentDataNative extends TextParentData {
readonly [_flaxDartTypeValue]: _TextParentDataNative;

detach(): void;
toString(): string;
get offset(): upstream3.Offset | null;
get span(): upstream4.PlaceholderSpan | null;
get previousSibling(): upstream2.RenderBox | null;
get nextSibling(): upstream2.RenderBox | null;
set span(value: Readonly<{ "__flaxBound:package:flutter/src/painting/placeholder_span.dart::PlaceholderSpan": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
set previousSibling(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
set nextSibling(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
}
export abstract class _TextParentDataNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextParentData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextParentData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:TextParentData", readonly [], false];
constructor() { super(_TextParentDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_TextParentDataNative.prototype, _TextParentDataProxy);
export namespace _TextParentDataFactory { export function implement(args: [], implementation: {}): TextParentData {
return constructProxy(_TextParentDataProxy, args, implementation) as TextParentData; } }
const _TextParentDataBinding = _flaxProxyFactory(_TextParentDataFactory, _TextParentDataNative) as unknown as typeof _TextParentDataFactory & (new() => _TextParentDataNative);
export const TextParentData: typeof _TextParentDataBinding & _FlaxInstanceType<TextParentData> & _FlaxDartType<TextParentData, readonly ["class", "flax.core/sdk_rendering#type:TextParentData", readonly [], false]> = _flaxBindInstanceType<TextParentData, typeof _TextParentDataBinding>(_TextParentDataBinding, "flax.core/sdk_rendering#type:TextParentData", ["flax.core/sdk_rendering#type:ParentData","dart:core::Object","flax.core/sdk_rendering#type:ContainerParentDataMixin"]) as typeof _TextParentDataBinding & _FlaxInstanceType<TextParentData> & _FlaxDartType<TextParentData, readonly ["class", "flax.core/sdk_rendering#type:TextParentData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "previousSibling" | "nextSibling" | "offset" | "span" | "detach" | "toString" | "__flaxBound:package:flutter/src/rendering/paragraph.dart::TextParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin";

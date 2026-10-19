// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream2 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsProperties';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsProperties';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream4 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsTag';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsTag';
const _flaxMemberParameters0 = [{"name":"key"},{"name":"rect","required":true},{"name":"properties","required":true},{"name":"transform"},{"name":"tags"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CustomPainterSemantics extends Readonly<{ "__flaxBound:package:flutter/src/rendering/custom_paint.dart::CustomPainterSemantics": readonly [] }> { readonly __CustomPainterSemantics: unique symbol;
readonly [_flaxDartTypeValue]: CustomPainterSemantics;

}
defineObject("flax.core/sdk_rendering#type:CustomPainterSemantics", ["key","rect","transform","properties","tags"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:CustomPainterSemantics", "object", {}, {}), []);
const _CustomPainterSemanticsProxy = {type: "flax.core/sdk_rendering#type:CustomPainterSemantics", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {}, getters: ["key","rect","transform","properties","tags"], setters: [], contextMembers: [], superMembers: ["get:key","get:rect","get:transform","get:properties","get:tags"]} as const;
export interface CustomPainterSemantics {
readonly [_flaxDartTypeValue]: CustomPainterSemantics;

get key(): upstream0.Key | null;
get rect(): upstream1.Rect;
get transform(): upstream3.Matrix4 | null;
get properties(): upstream2.SemanticsProperties;
get tags(): DartSet<upstream4.SemanticsTag> | null;
}
export abstract class CustomPainterSemantics extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CustomPainterSemantics>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CustomPainterSemantics;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:CustomPainterSemantics", readonly [], false];
constructor(options: {key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>; properties: Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsProperties": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; transform?: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null | undefined; tags?: DartSetInput<upstream4.SemanticsTag, Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsTag": readonly [] }>> | null | undefined}) { super(_CustomPainterSemanticsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(CustomPainterSemantics.prototype, _CustomPainterSemanticsProxy);
export namespace CustomPainterSemantics { export function implement(args: [options: {key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>; properties: Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsProperties": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; transform?: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null | undefined; tags?: DartSetInput<upstream4.SemanticsTag, Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsTag": readonly [] }>> | null | undefined}], implementation: {}): CustomPainterSemantics {
return constructProxy(_CustomPainterSemanticsProxy, args, implementation) as CustomPainterSemantics; } }
_flaxBindInstanceType<CustomPainterSemantics, typeof CustomPainterSemantics>(CustomPainterSemantics, "flax.core/sdk_rendering#type:CustomPainterSemantics", ["dart:core::Object"]);

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_Layer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Layer';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_ClipRectLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ClipRectLayer';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_LeaderLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_LeaderLayer';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_OpacityLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_OpacityLayer';
import type * as upstream4 from '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerLayer';
import type * as upstream5 from '@flax/flutter/rendering/_bindings/sdk_rendering_TransformLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TransformLayer';
const _flaxMemberParameters0 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface LayerHandle<T extends upstream0.Layer = upstream0.Layer> extends Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::LayerHandle": readonly [T] }> { readonly __LayerHandle: unique symbol;
readonly [_flaxDartTypeValue]: LayerHandle<T>;

}
defineObject("flax.core/sdk_rendering#type:LayerHandle", ["layer"], ["layer"], _flaxBindingMethods("flax.core/sdk_rendering#type:LayerHandle", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _LayerHandleProxy = {type: "flax.core/sdk_rendering#type:LayerHandle", parameters: [{"name":"_layer","required":false,"positional":true}], constructors: {"":[{"name":"_layer","required":false,"positional":true}]}, methods: {"toString":_flaxMemberParameters0}, getters: ["layer"], setters: ["layer"], contextMembers: [], superMembers: ["get:layer","set:layer","toString"]} as const;
export interface LayerHandle<T extends upstream0.Layer = upstream0.Layer> {
readonly [_flaxDartTypeValue]: LayerHandle<T>;

toString(): string;
get layer(): T | null;
set layer(value: (T | DartInput<T>) | null);
}
export abstract class LayerHandle<T extends upstream0.Layer = upstream0.Layer> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LayerHandle<upstream0.Layer>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: LayerHandle<upstream0.Layer>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:LayerHandle", readonly [readonly ["class", "flax.core/sdk_rendering#type:Layer", readonly [], false]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(_layer?: Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null) { super(_LayerHandleProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(LayerHandle.prototype, _LayerHandleProxy);
export namespace LayerHandle { export function implement<T extends upstream0.Layer = upstream0.Layer>(args: [_layer?: Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null], implementation: {}): LayerHandle<T> {
return constructProxy(_LayerHandleProxy, args, implementation) as LayerHandle<T>; } }
_flaxBindInstanceType<LayerHandle<upstream0.Layer>, typeof LayerHandle>(LayerHandle, "flax.core/sdk_rendering#type:LayerHandle", ["dart:core::Object"]);
_flaxDefineDartTypes(LayerHandle, "flax.core/sdk_rendering#type:LayerHandle", {...{"category":"object","constructors":{}}, proxy: _LayerHandleProxy});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Layer] ? (abstract new (_layer?: Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null) => LayerHandle<_Selected0>) & {readonly prototype: LayerHandle<_Selected0>;implement(args: readonly [Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null], implementation: Partial<LayerHandle<_Selected0>>): LayerHandle<_Selected0>;} & _FlaxInstanceType<LayerHandle<_Selected0>> & _FlaxDartType<LayerHandle<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Layer] ? (abstract new (_layer?: Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null) => LayerHandle<_Selected0>) & {readonly prototype: LayerHandle<_Selected0>;implement(args: readonly [Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null], implementation: Partial<LayerHandle<_Selected0>>): LayerHandle<_Selected0>;} & _FlaxInstanceType<LayerHandle<_Selected0>> & _FlaxDartType<LayerHandle<_Selected0>> : never : never; }

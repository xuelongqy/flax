// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderSliver';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderSliver';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import { _flaxMemberParameters1, _flaxMemberParameters347 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverHitTestEntry extends Omit<upstream0.HitTestEntry<upstream1.RenderSliver>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverHitTestEntry": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [upstream1.RenderSliver] }> { readonly __SliverHitTestEntry: unique symbol;
readonly [_flaxDartTypeValue]: SliverHitTestEntry;

}
defineObject("flax.core/sdk_rendering#type:SliverHitTestEntry", ["target","transform","mainAxisPosition","crossAxisPosition"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:SliverHitTestEntry", "object", {"toString":_flaxMemberParameters1}, {}), []);
const _SliverHitTestEntryProxy = {type: "flax.core/sdk_rendering#type:SliverHitTestEntry", parameters: _flaxMemberParameters347, constructors: {"": _flaxMemberParameters347}, methods: {"toString":_flaxMemberParameters1}, getters: ["mainAxisPosition","crossAxisPosition","target","transform"], setters: [], contextMembers: [], superMembers: ["get:mainAxisPosition","get:crossAxisPosition","get:target","get:transform","toString"]} as const;
export interface SliverHitTestEntry {
readonly [_flaxDartTypeValue]: SliverHitTestEntry;

toString(): string;
get mainAxisPosition(): number;
get crossAxisPosition(): number;
get target(): upstream1.RenderSliver;
get transform(): upstream2.Matrix4 | null;
}
export abstract class SliverHitTestEntry extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverHitTestEntry>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SliverHitTestEntry;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverHitTestEntry", readonly [], false];
constructor(target: Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::RenderSliver": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, options: {mainAxisPosition: number; crossAxisPosition: number}) { super(_SliverHitTestEntryProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(SliverHitTestEntry.prototype, _SliverHitTestEntryProxy);
export namespace SliverHitTestEntry { export function implement(args: [target: Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::RenderSliver": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, options: {mainAxisPosition: number; crossAxisPosition: number}], implementation: {}): SliverHitTestEntry {
return constructProxy(_SliverHitTestEntryProxy, args, implementation) as SliverHitTestEntry; } }
_flaxBindInstanceType<SliverHitTestEntry, typeof SliverHitTestEntry>(SliverHitTestEntry, "flax.core/sdk_rendering#type:SliverHitTestEntry", ["flax.core/sdk_gestures#type:HitTestEntry","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "target" | "transform" | "mainAxisPosition" | "crossAxisPosition" | "toString" | "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverHitTestEntry" | "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry";

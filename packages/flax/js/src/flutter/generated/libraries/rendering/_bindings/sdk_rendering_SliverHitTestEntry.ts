// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderSliver';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderSliver';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import { _flaxMemberParameters1, _flaxMemberParameters344 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverHitTestEntry extends Omit<upstream0.HitTestEntry<upstream1.RenderSliver>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverHitTestEntry": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [upstream1.RenderSliver] }> { readonly __SliverHitTestEntry: unique symbol;
readonly [_flaxDartTypeValue]: SliverHitTestEntry;

readonly target: upstream1.RenderSliver;
readonly transform: upstream2.Matrix4 | null;
readonly mainAxisPosition: number;
readonly crossAxisPosition: number;
toString(): string;
}
defineObject("flax.core/sdk_rendering#type:SliverHitTestEntry", ["target","transform","mainAxisPosition","crossAxisPosition"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:SliverHitTestEntry", "object", {"toString":_flaxMemberParameters1}, {}), []);
export function _SliverHitTestEntryFactory(target: Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::RenderSliver": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, options: { mainAxisPosition: number; crossAxisPosition: number }): SliverHitTestEntry {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:SliverHitTestEntry", "", [{"name":"target","required":true,"positional":true},{"name":"mainAxisPosition","required":true},{"name":"crossAxisPosition","required":true}], [target], options) as SliverHitTestEntry;
}
const _SliverHitTestEntryProxy = {type: "flax.core/sdk_rendering#type:SliverHitTestEntry", parameters: _flaxMemberParameters344, constructors: {"": _flaxMemberParameters344}, methods: {"toString":_flaxMemberParameters1}, getters: ["mainAxisPosition","crossAxisPosition","target","transform"], setters: [], contextMembers: [], superMembers: ["get:mainAxisPosition","get:crossAxisPosition","get:target","get:transform","toString"]} as const;
export interface _SliverHitTestEntryNative extends SliverHitTestEntry {
readonly [_flaxDartTypeValue]: _SliverHitTestEntryNative;

toString(): string;
get mainAxisPosition(): number;
get crossAxisPosition(): number;
get target(): upstream1.RenderSliver;
get transform(): upstream2.Matrix4 | null;
}
export abstract class _SliverHitTestEntryNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverHitTestEntry>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SliverHitTestEntry;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverHitTestEntry", readonly [], false];
constructor(target: Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::RenderSliver": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, options: {mainAxisPosition: number; crossAxisPosition: number}) { super(_SliverHitTestEntryProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SliverHitTestEntryNative.prototype, _SliverHitTestEntryProxy);
export namespace _SliverHitTestEntryFactory { export function implement(args: [target: Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::RenderSliver": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, options: {mainAxisPosition: number; crossAxisPosition: number}], implementation: {}): SliverHitTestEntry {
return constructProxy(_SliverHitTestEntryProxy, args, implementation) as SliverHitTestEntry; } }
const _SliverHitTestEntryBinding = _flaxProxyFactory(_SliverHitTestEntryFactory, _SliverHitTestEntryNative) as unknown as typeof _SliverHitTestEntryFactory & (new(target: Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::RenderSliver": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, options: {mainAxisPosition: number; crossAxisPosition: number}) => _SliverHitTestEntryNative);
export const SliverHitTestEntry: typeof _SliverHitTestEntryBinding & _FlaxInstanceType<SliverHitTestEntry> & _FlaxDartType<SliverHitTestEntry, readonly ["class", "flax.core/sdk_rendering#type:SliverHitTestEntry", readonly [], false]> = _flaxBindInstanceType<SliverHitTestEntry, typeof _SliverHitTestEntryBinding>(_SliverHitTestEntryBinding, "flax.core/sdk_rendering#type:SliverHitTestEntry", ["flax.core/sdk_gestures#type:HitTestEntry","dart:core::Object"]) as typeof _SliverHitTestEntryBinding & _FlaxInstanceType<SliverHitTestEntry> & _FlaxDartType<SliverHitTestEntry, readonly ["class", "flax.core/sdk_rendering#type:SliverHitTestEntry", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "target" | "transform" | "mainAxisPosition" | "crossAxisPosition" | "toString" | "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverHitTestEntry" | "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry";

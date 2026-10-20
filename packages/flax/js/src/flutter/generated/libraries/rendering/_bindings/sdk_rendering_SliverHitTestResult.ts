// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestResult';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestResult';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import type * as upstream2 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { _flaxMemberParameters345, _flaxMemberParameters1, _flaxMemberParameters25, _flaxMemberParameters19, _flaxMemberParameters26, _flaxMemberParameters27 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverHitTestResult extends Omit<upstream0.HitTestResult, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverHitTestResult": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [] }> { readonly __SliverHitTestResult: unique symbol;
readonly [_flaxDartTypeValue]: SliverHitTestResult;

readonly path: DartIterable<upstream1.HitTestEntry<upstream2.HitTestTarget>>;
add(entry: Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [upstream2.HitTestTarget] }>): void;
pushTransform(transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
pushOffset(offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): void;
popTransform(): void;
toString(): string;
addWithAxisOffset(options: {crossAxisOffset: number; crossAxisPosition: number; hitTest: ((result: SliverHitTestResult, options: { crossAxisPosition: number; mainAxisPosition: number }) => boolean); mainAxisOffset: number; mainAxisPosition: number; paintOffset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null}): boolean;
}
defineObject("flax.core/sdk_rendering#type:SliverHitTestResult", ["path"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:SliverHitTestResult", "object", {"addWithAxisOffset":_flaxMemberParameters345}, {}), [], undefined, "flax.core/sdk_gestures#type:HitTestResult");
export function _SliverHitTestResultFactory(): SliverHitTestResult {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:SliverHitTestResult", "", [], [], {}) as SliverHitTestResult;
}
export namespace _SliverHitTestResultFactory {
export function wrap(result: Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [] }>): SliverHitTestResult {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:SliverHitTestResult", "wrap", [{"name":"result","required":true,"positional":true}], [result], {}) as SliverHitTestResult;
}
}
const _SliverHitTestResultProxy = {type: "flax.core/sdk_rendering#type:SliverHitTestResult", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1,"wrap": _flaxMemberParameters25}, methods: {"add":_flaxMemberParameters19,"pushTransform":_flaxMemberParameters26,"pushOffset":_flaxMemberParameters27,"popTransform":_flaxMemberParameters1,"toString":_flaxMemberParameters1,"addWithAxisOffset":_flaxMemberParameters345}, getters: ["path"], setters: [], contextMembers: [], superMembers: ["get:path","add","pushTransform","pushOffset","popTransform","toString","addWithAxisOffset"]} as const;
export interface _SliverHitTestResultNative extends SliverHitTestResult {
readonly [_flaxDartTypeValue]: _SliverHitTestResultNative;
readonly [_flaxDartConstructors]?: {"": () => void;"wrap": (result: Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [] }>) => void;};

add(entry: Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [upstream2.HitTestTarget] }>): void;
pushTransform(transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
pushOffset(offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): void;
popTransform(): void;
toString(): string;
addWithAxisOffset(options: {paintOffset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null; mainAxisOffset: number; crossAxisOffset: number; mainAxisPosition: number; crossAxisPosition: number; hitTest: ((result: SliverHitTestResult, options: { crossAxisPosition: number; mainAxisPosition: number }) => boolean)}): boolean;
get path(): DartIterable<upstream1.HitTestEntry<upstream2.HitTestTarget>>;
}
export abstract class _SliverHitTestResultNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverHitTestResult>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SliverHitTestResult;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverHitTestResult", readonly [], false];
constructor(); constructor(call: _FlaxProxySuper<_SliverHitTestResultNative>); constructor(...args: unknown[]) { super(_SliverHitTestResultProxy, args); }
}
_flaxDefineProxyBase(_SliverHitTestResultNative.prototype, _SliverHitTestResultProxy);
export namespace _SliverHitTestResultFactory { export function implement(args: [], implementation: {}): SliverHitTestResult {
return constructProxy(_SliverHitTestResultProxy, args, implementation) as SliverHitTestResult; } }
const _SliverHitTestResultBinding = _flaxProxyFactory(_SliverHitTestResultFactory, _SliverHitTestResultNative) as unknown as typeof _SliverHitTestResultFactory & (new() => _SliverHitTestResultNative) & (new(call: _FlaxProxySuper<_SliverHitTestResultNative>) => _SliverHitTestResultNative);
export const SliverHitTestResult: typeof _SliverHitTestResultBinding & _FlaxInstanceType<SliverHitTestResult> & _FlaxDartType<SliverHitTestResult, readonly ["class", "flax.core/sdk_rendering#type:SliverHitTestResult", readonly [], false]> = _flaxBindInstanceType<SliverHitTestResult, typeof _SliverHitTestResultBinding>(_SliverHitTestResultBinding, "flax.core/sdk_rendering#type:SliverHitTestResult", ["flax.core/sdk_gestures#type:HitTestResult","dart:core::Object"]) as typeof _SliverHitTestResultBinding & _FlaxInstanceType<SliverHitTestResult> & _FlaxDartType<SliverHitTestResult, readonly ["class", "flax.core/sdk_rendering#type:SliverHitTestResult", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "path" | "add" | "pushTransform" | "pushOffset" | "popTransform" | "toString" | "addWithAxisOffset" | "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverHitTestResult" | "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult";

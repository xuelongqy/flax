// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { _flaxMemberParameters40, _flaxMemberParameters41, _flaxMemberParameters42, _flaxMemberParameters7, _flaxMemberParameters43 } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface HitTestResult extends Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [] }> { readonly __HitTestResult: unique symbol;
readonly [_flaxDartTypeValue]: HitTestResult;

readonly path: DartIterable<upstream0.HitTestEntry<upstream1.HitTestTarget>>;
add(entry: Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [upstream1.HitTestTarget] }>): void;
pushTransform(transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
pushOffset(offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): void;
popTransform(): void;
toString(): string;
}
defineObject("flax.core/sdk_gestures#type:HitTestResult", ["path"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:HitTestResult", "object", {"add":_flaxMemberParameters40,"pushTransform":_flaxMemberParameters41,"pushOffset":_flaxMemberParameters42,"popTransform":_flaxMemberParameters7,"toString":_flaxMemberParameters7}, {}), []);
export function _HitTestResultFactory(): HitTestResult {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_gestures#type:HitTestResult", "", _flaxMemberParameters7, [], {}) as HitTestResult;
}
export namespace _HitTestResultFactory {
export function wrap(result: Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [] }>): HitTestResult {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_gestures#type:HitTestResult", "wrap", [{"name":"result","required":true,"positional":true}], [result], {}) as HitTestResult;
}
}
const _HitTestResultProxy = {type: "flax.core/sdk_gestures#type:HitTestResult", parameters: _flaxMemberParameters7, constructors: {"": _flaxMemberParameters7,"wrap": _flaxMemberParameters43}, methods: {"add":_flaxMemberParameters40,"pushTransform":_flaxMemberParameters41,"pushOffset":_flaxMemberParameters42,"popTransform":_flaxMemberParameters7,"toString":_flaxMemberParameters7}, getters: ["path"], setters: [], contextMembers: [], superMembers: ["get:path","add","pushTransform","pushOffset","popTransform","toString"]} as const;
export interface _HitTestResultNative extends HitTestResult {
readonly [_flaxDartTypeValue]: _HitTestResultNative;
readonly [_flaxDartConstructors]?: {"": () => void;"wrap": (result: Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [] }>) => void;};

add(entry: Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [upstream1.HitTestTarget] }>): void;
pushTransform(transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
pushOffset(offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): void;
popTransform(): void;
toString(): string;
get path(): DartIterable<upstream0.HitTestEntry<upstream1.HitTestTarget>>;
}
export abstract class _HitTestResultNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<HitTestResult>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: HitTestResult;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:HitTestResult", readonly [], false];
constructor(); constructor(call: _FlaxProxySuper<_HitTestResultNative>); constructor(...args: unknown[]) { super(_HitTestResultProxy, args); }
}
_flaxDefineProxyBase(_HitTestResultNative.prototype, _HitTestResultProxy);
export namespace _HitTestResultFactory { export function implement(args: [], implementation: {}): HitTestResult {
return constructProxy(_HitTestResultProxy, args, implementation) as HitTestResult; } }
const _HitTestResultBinding = _flaxProxyFactory(_HitTestResultFactory, _HitTestResultNative) as unknown as typeof _HitTestResultFactory & (new() => _HitTestResultNative) & (new(call: _FlaxProxySuper<_HitTestResultNative>) => _HitTestResultNative);
export const HitTestResult: typeof _HitTestResultBinding & _FlaxInstanceType<HitTestResult> & _FlaxDartType<HitTestResult, readonly ["class", "flax.core/sdk_gestures#type:HitTestResult", readonly [], false]> = _flaxBindInstanceType<HitTestResult, typeof _HitTestResultBinding>(_HitTestResultBinding, "flax.core/sdk_gestures#type:HitTestResult", ["dart:core::Object"]) as typeof _HitTestResultBinding & _FlaxInstanceType<HitTestResult> & _FlaxDartType<HitTestResult, readonly ["class", "flax.core/sdk_gestures#type:HitTestResult", readonly [], false]>;

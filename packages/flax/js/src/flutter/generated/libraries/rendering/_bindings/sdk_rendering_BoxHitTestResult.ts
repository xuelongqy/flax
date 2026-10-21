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
import { _flaxMemberParameters25, _flaxMemberParameters26, _flaxMemberParameters27, _flaxMemberParameters1, _flaxMemberParameters28, _flaxMemberParameters19, _flaxMemberParameters29, _flaxMemberParameters30 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BoxHitTestResult extends Omit<upstream0.HitTestResult, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxHitTestResult": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [] }> { readonly __BoxHitTestResult: unique symbol;
readonly [_flaxDartTypeValue]: BoxHitTestResult;

readonly path: DartIterable<upstream1.HitTestEntry<upstream2.HitTestTarget>>;
add(entry: Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [upstream2.HitTestTarget] }>): void;
pushTransform(transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
pushOffset(offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): void;
popTransform(): void;
toString(): string;
addWithPaintTransform(options: {hitTest: ((result: BoxHitTestResult, position: upstream4.Offset) => boolean); position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null}): boolean;
addWithPaintOffset(options: {hitTest: ((result: BoxHitTestResult, position: upstream4.Offset) => boolean); offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null; position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}): boolean;
addWithRawTransform(options: {hitTest: ((result: BoxHitTestResult, position: upstream4.Offset) => boolean); position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null}): boolean;
addWithOutOfBandPosition(options: {hitTest: ((result: BoxHitTestResult) => boolean); paintOffset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; paintTransform?: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null | undefined; rawTransform?: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null | undefined}): boolean;
}
defineObject("flax.core/sdk_rendering#type:BoxHitTestResult", ["path"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:BoxHitTestResult", "object", {"addWithPaintTransform":_flaxMemberParameters25,"addWithPaintOffset":_flaxMemberParameters26,"addWithRawTransform":_flaxMemberParameters25,"addWithOutOfBandPosition":_flaxMemberParameters27}, {}), [], undefined, "flax.core/sdk_gestures#type:HitTestResult");
export function _BoxHitTestResultFactory(): BoxHitTestResult {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:BoxHitTestResult", "", [], [], {}) as BoxHitTestResult;
}
export namespace _BoxHitTestResultFactory {
export function wrap(result: Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [] }>): BoxHitTestResult {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:BoxHitTestResult", "wrap", [{"name":"result","required":true,"positional":true}], [result], {}) as BoxHitTestResult;
}
}
const _BoxHitTestResultProxy = {type: "flax.core/sdk_rendering#type:BoxHitTestResult", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1,"wrap": _flaxMemberParameters28}, methods: {"add":_flaxMemberParameters19,"pushTransform":_flaxMemberParameters29,"pushOffset":_flaxMemberParameters30,"popTransform":_flaxMemberParameters1,"toString":_flaxMemberParameters1,"addWithPaintTransform":_flaxMemberParameters25,"addWithPaintOffset":_flaxMemberParameters26,"addWithRawTransform":_flaxMemberParameters25,"addWithOutOfBandPosition":_flaxMemberParameters27}, getters: ["path"], setters: [], contextMembers: [], superMembers: ["get:path","add","pushTransform","pushOffset","popTransform","toString","addWithPaintTransform","addWithPaintOffset","addWithRawTransform","addWithOutOfBandPosition"]} as const;
export interface _BoxHitTestResultNative extends BoxHitTestResult {
readonly [_flaxDartTypeValue]: _BoxHitTestResultNative;
readonly [_flaxDartConstructors]?: {"": () => void;"wrap": (result: Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [] }>) => void;};

add(entry: Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [upstream2.HitTestTarget] }>): void;
pushTransform(transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
pushOffset(offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): void;
popTransform(): void;
toString(): string;
addWithPaintTransform(options: {transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null; position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; hitTest: ((result: BoxHitTestResult, position: upstream4.Offset) => boolean)}): boolean;
addWithPaintOffset(options: {offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null; position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; hitTest: ((result: BoxHitTestResult, position: upstream4.Offset) => boolean)}): boolean;
addWithRawTransform(options: {transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null; position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; hitTest: ((result: BoxHitTestResult, position: upstream4.Offset) => boolean)}): boolean;
addWithOutOfBandPosition(options: {paintOffset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; paintTransform?: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null | undefined; rawTransform?: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null | undefined; hitTest: ((result: BoxHitTestResult) => boolean)}): boolean;
get path(): DartIterable<upstream1.HitTestEntry<upstream2.HitTestTarget>>;
}
export abstract class _BoxHitTestResultNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BoxHitTestResult>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: BoxHitTestResult;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:BoxHitTestResult", readonly [], false];
constructor(); constructor(call: _FlaxProxySuper<_BoxHitTestResultNative>); constructor(...args: unknown[]) { super(_BoxHitTestResultProxy, args); }
}
_flaxDefineProxyBase(_BoxHitTestResultNative.prototype, _BoxHitTestResultProxy);
export namespace _BoxHitTestResultFactory { export function implement(args: [], implementation: {}): BoxHitTestResult {
return constructProxy(_BoxHitTestResultProxy, args, implementation) as BoxHitTestResult; } }
const _BoxHitTestResultBinding = _flaxProxyFactory(_BoxHitTestResultFactory, _BoxHitTestResultNative) as unknown as typeof _BoxHitTestResultFactory & (new() => _BoxHitTestResultNative) & (new(call: _FlaxProxySuper<_BoxHitTestResultNative>) => _BoxHitTestResultNative);
export const BoxHitTestResult: typeof _BoxHitTestResultBinding & _FlaxInstanceType<BoxHitTestResult> & _FlaxDartType<BoxHitTestResult, readonly ["class", "flax.core/sdk_rendering#type:BoxHitTestResult", readonly [], false]> = _flaxBindInstanceType<BoxHitTestResult, typeof _BoxHitTestResultBinding>(_BoxHitTestResultBinding, "flax.core/sdk_rendering#type:BoxHitTestResult", ["flax.core/sdk_gestures#type:HitTestResult","dart:core::Object"]) as typeof _BoxHitTestResultBinding & _FlaxInstanceType<BoxHitTestResult> & _FlaxDartType<BoxHitTestResult, readonly ["class", "flax.core/sdk_rendering#type:BoxHitTestResult", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "path" | "add" | "pushTransform" | "pushOffset" | "popTransform" | "toString" | "addWithPaintTransform" | "addWithPaintOffset" | "addWithRawTransform" | "addWithOutOfBandPosition" | "__flaxBound:package:flutter/src/rendering/box.dart::BoxHitTestResult" | "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult";

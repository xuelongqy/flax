// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { _flaxMemberParameters7, _flaxMemberParameters103 } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface VelocityEstimate extends Readonly<{ "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::VelocityEstimate": readonly [] }> { readonly __VelocityEstimate: unique symbol;
readonly [_flaxDartTypeValue]: VelocityEstimate;

readonly pixelsPerSecond: upstream0.Offset;
readonly confidence: number;
readonly duration: upstream1.Duration;
readonly offset: upstream0.Offset;
toString(): string;
}
defineObject("flax.core/sdk_gestures#type:VelocityEstimate", ["pixelsPerSecond","confidence","duration","offset"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:VelocityEstimate", "object", {"toString":_flaxMemberParameters7}, {}), []);
export function _VelocityEstimateFactory(options: { pixelsPerSecond: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; confidence: number; duration: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }>; offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> }): VelocityEstimate {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_gestures#type:VelocityEstimate", "", [{"name":"pixelsPerSecond","required":true},{"name":"confidence","required":true},{"name":"duration","required":true},{"name":"offset","required":true}], [], options) as VelocityEstimate;
}
const _VelocityEstimateProxy = {type: "flax.core/sdk_gestures#type:VelocityEstimate", parameters: _flaxMemberParameters103, constructors: {"": _flaxMemberParameters103}, methods: {"toString":_flaxMemberParameters7}, getters: ["pixelsPerSecond","confidence","duration","offset"], setters: [], contextMembers: [], superMembers: ["get:pixelsPerSecond","get:confidence","get:duration","get:offset","toString"]} as const;
export interface _VelocityEstimateNative extends VelocityEstimate {
readonly [_flaxDartTypeValue]: _VelocityEstimateNative;

toString(): string;
get pixelsPerSecond(): upstream0.Offset;
get confidence(): number;
get duration(): upstream1.Duration;
get offset(): upstream0.Offset;
}
export abstract class _VelocityEstimateNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<VelocityEstimate>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: VelocityEstimate;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:VelocityEstimate", readonly [], false];
constructor(options: {pixelsPerSecond: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; confidence: number; duration: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }>; offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}) { super(_VelocityEstimateProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_VelocityEstimateNative.prototype, _VelocityEstimateProxy);
export namespace _VelocityEstimateFactory { export function implement(args: [options: {pixelsPerSecond: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; confidence: number; duration: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }>; offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}], implementation: {}): VelocityEstimate {
return constructProxy(_VelocityEstimateProxy, args, implementation) as VelocityEstimate; } }
const _VelocityEstimateBinding = _flaxProxyFactory(_VelocityEstimateFactory, _VelocityEstimateNative) as unknown as typeof _VelocityEstimateFactory & (new(options: {pixelsPerSecond: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; confidence: number; duration: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }>; offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}) => _VelocityEstimateNative);
export const VelocityEstimate: typeof _VelocityEstimateBinding & _FlaxInstanceType<VelocityEstimate> & _FlaxDartType<VelocityEstimate, readonly ["class", "flax.core/sdk_gestures#type:VelocityEstimate", readonly [], false]> = _flaxBindInstanceType<VelocityEstimate, typeof _VelocityEstimateBinding>(_VelocityEstimateBinding, "flax.core/sdk_gestures#type:VelocityEstimate", ["dart:core::Object"]) as typeof _VelocityEstimateBinding & _FlaxInstanceType<VelocityEstimate> & _FlaxDartType<VelocityEstimate, readonly ["class", "flax.core/sdk_gestures#type:VelocityEstimate", readonly [], false]>;

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"pixelsPerSecond","required":true},{"name":"confidence","required":true},{"name":"duration","required":true},{"name":"offset","required":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface VelocityEstimate extends Readonly<{ "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::VelocityEstimate": readonly [] }> { readonly __VelocityEstimate: unique symbol;
readonly [_flaxDartTypeValue]: VelocityEstimate;

}
defineObject("flax.core/sdk_gestures#type:VelocityEstimate", ["pixelsPerSecond","confidence","duration","offset"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:VelocityEstimate", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _VelocityEstimateProxy = {type: "flax.core/sdk_gestures#type:VelocityEstimate", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toString":_flaxMemberParameters0}, getters: ["pixelsPerSecond","confidence","duration","offset"], setters: [], contextMembers: [], superMembers: ["get:pixelsPerSecond","get:confidence","get:duration","get:offset","toString"]} as const;
export interface VelocityEstimate {
readonly [_flaxDartTypeValue]: VelocityEstimate;

toString(): string;
get pixelsPerSecond(): upstream0.Offset;
get confidence(): number;
get duration(): upstream1.Duration;
get offset(): upstream0.Offset;
}
export abstract class VelocityEstimate extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<VelocityEstimate>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: VelocityEstimate;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:VelocityEstimate", readonly [], false];
constructor(options: {pixelsPerSecond: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; confidence: number; duration: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }>; offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}) { super(_VelocityEstimateProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(VelocityEstimate.prototype, _VelocityEstimateProxy);
export namespace VelocityEstimate { export function implement(args: [options: {pixelsPerSecond: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; confidence: number; duration: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }>; offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}], implementation: {}): VelocityEstimate {
return constructProxy(_VelocityEstimateProxy, args, implementation) as VelocityEstimate; } }
_flaxBindInstanceType<VelocityEstimate, typeof VelocityEstimate>(VelocityEstimate, "flax.core/sdk_gestures#type:VelocityEstimate", ["dart:core::Object"]);

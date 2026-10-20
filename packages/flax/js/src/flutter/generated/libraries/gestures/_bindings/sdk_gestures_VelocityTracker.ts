// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/flutter/gestures/_bindings/sdk_gestures_VelocityEstimate';
import '@flax/flutter/gestures/_bindings/sdk_gestures_VelocityEstimate';
import type * as upstream4 from '@flax/flutter/gestures/_bindings/sdk_gestures_Velocity';
import '@flax/flutter/gestures/_bindings/sdk_gestures_Velocity';
import { _flaxMemberParameters45, _flaxMemberParameters7, _flaxMemberParameters44 } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface VelocityTracker extends Readonly<{ "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::VelocityTracker": readonly [] }> { readonly __VelocityTracker: unique symbol;
readonly [_flaxDartTypeValue]: VelocityTracker;

readonly kind: upstream0.PointerDeviceKind;
addPosition(time: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }>, position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): void;
getVelocityEstimate(): upstream3.VelocityEstimate | null;
getVelocity(): upstream4.Velocity;
}
defineObject("flax.core/sdk_gestures#type:VelocityTracker", ["kind"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:VelocityTracker", "object", {"addPosition":_flaxMemberParameters45,"getVelocityEstimate":_flaxMemberParameters7,"getVelocity":_flaxMemberParameters7}, {}), []);
export namespace _VelocityTrackerFactory {
export function withKind(kind: upstream0.PointerDeviceKind): VelocityTracker {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_gestures#type:VelocityTracker", "withKind", [{"name":"kind","required":true,"positional":true}], [kind], {}) as VelocityTracker;
}
}
const _VelocityTrackerProxy = {type: "flax.core/sdk_gestures#type:VelocityTracker", parameters: _flaxMemberParameters44, constructors: {"withKind": _flaxMemberParameters44}, methods: {"addPosition":_flaxMemberParameters45,"getVelocityEstimate":_flaxMemberParameters7,"getVelocity":_flaxMemberParameters7}, getters: ["kind"], setters: [], contextMembers: [], superMembers: ["get:kind","addPosition","getVelocityEstimate","getVelocity"]} as const;
export interface _VelocityTrackerNative extends VelocityTracker {
readonly [_flaxDartTypeValue]: _VelocityTrackerNative;
readonly [_flaxDartConstructors]?: {"withKind": (kind: upstream0.PointerDeviceKind) => void;};

addPosition(time: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }>, position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): void;
getVelocityEstimate(): upstream3.VelocityEstimate | null;
getVelocity(): upstream4.Velocity;
get kind(): upstream0.PointerDeviceKind;
}
export abstract class _VelocityTrackerNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<VelocityTracker>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: VelocityTracker;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:VelocityTracker", readonly [], false];
constructor(kind: upstream0.PointerDeviceKind); constructor(call: _FlaxProxySuper<_VelocityTrackerNative>); constructor(...args: unknown[]) { super(_VelocityTrackerProxy, args); }
}
_flaxDefineProxyBase(_VelocityTrackerNative.prototype, _VelocityTrackerProxy);
export namespace _VelocityTrackerFactory { export function implement(args: [kind: upstream0.PointerDeviceKind], implementation: {}): VelocityTracker {
return constructProxy(_VelocityTrackerProxy, args, implementation) as VelocityTracker; } }
const _VelocityTrackerBinding = _flaxProxyFactory(_VelocityTrackerFactory, _VelocityTrackerNative) as unknown as typeof _VelocityTrackerFactory & (new(kind: upstream0.PointerDeviceKind) => _VelocityTrackerNative) & (new(call: _FlaxProxySuper<_VelocityTrackerNative>) => _VelocityTrackerNative);
export const VelocityTracker: typeof _VelocityTrackerBinding & _FlaxInstanceType<VelocityTracker> & _FlaxDartType<VelocityTracker, readonly ["class", "flax.core/sdk_gestures#type:VelocityTracker", readonly [], false]> = _flaxBindInstanceType<VelocityTracker, typeof _VelocityTrackerBinding>(_VelocityTrackerBinding, "flax.core/sdk_gestures#type:VelocityTracker", ["dart:core::Object"]) as typeof _VelocityTrackerBinding & _FlaxInstanceType<VelocityTracker> & _FlaxDartType<VelocityTracker, readonly ["class", "flax.core/sdk_gestures#type:VelocityTracker", readonly [], false]>;

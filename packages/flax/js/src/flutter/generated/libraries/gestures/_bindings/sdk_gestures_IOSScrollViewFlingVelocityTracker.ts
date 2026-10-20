// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_VelocityTracker';
import '@flax/flutter/gestures/_bindings/sdk_gestures_VelocityTracker';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream4 from '@flax/flutter/gestures/_bindings/sdk_gestures_VelocityEstimate';
import '@flax/flutter/gestures/_bindings/sdk_gestures_VelocityEstimate';
import type * as upstream5 from '@flax/flutter/gestures/_bindings/sdk_gestures_Velocity';
import '@flax/flutter/gestures/_bindings/sdk_gestures_Velocity';
import { _flaxMemberParameters7, _flaxMemberParameters44, _flaxMemberParameters45 } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface IOSScrollViewFlingVelocityTracker extends Omit<upstream0.VelocityTracker, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::IOSScrollViewFlingVelocityTracker": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::VelocityTracker": readonly [] }> { readonly __IOSScrollViewFlingVelocityTracker: unique symbol;
readonly [_flaxDartTypeValue]: IOSScrollViewFlingVelocityTracker;

readonly kind: upstream1.PointerDeviceKind;
addPosition(time: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration] }>, position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): void;
getVelocityEstimate(): upstream4.VelocityEstimate;
getVelocity(): upstream5.Velocity;
}
defineObject("flax.core/sdk_gestures#type:IOSScrollViewFlingVelocityTracker", ["kind"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:IOSScrollViewFlingVelocityTracker", "object", {"getVelocityEstimate":_flaxMemberParameters7}, {}), [], undefined, "flax.core/sdk_gestures#type:VelocityTracker");
export function _IOSScrollViewFlingVelocityTrackerFactory(kind: upstream1.PointerDeviceKind): IOSScrollViewFlingVelocityTracker {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_gestures#type:IOSScrollViewFlingVelocityTracker", "", [{"name":"kind","required":true,"positional":true}], [kind], {}) as IOSScrollViewFlingVelocityTracker;
}
const _IOSScrollViewFlingVelocityTrackerProxy = {type: "flax.core/sdk_gestures#type:IOSScrollViewFlingVelocityTracker", parameters: _flaxMemberParameters44, constructors: {"": _flaxMemberParameters44}, methods: {"addPosition":_flaxMemberParameters45,"getVelocityEstimate":_flaxMemberParameters7,"getVelocity":_flaxMemberParameters7}, getters: ["kind"], setters: [], contextMembers: [], superMembers: ["get:kind","addPosition","getVelocityEstimate","getVelocity"]} as const;
export interface _IOSScrollViewFlingVelocityTrackerNative extends IOSScrollViewFlingVelocityTracker {
readonly [_flaxDartTypeValue]: _IOSScrollViewFlingVelocityTrackerNative;

addPosition(time: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration] }>, position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): void;
getVelocityEstimate(): upstream4.VelocityEstimate;
getVelocity(): upstream5.Velocity;
get kind(): upstream1.PointerDeviceKind;
}
export abstract class _IOSScrollViewFlingVelocityTrackerNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<IOSScrollViewFlingVelocityTracker>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: IOSScrollViewFlingVelocityTracker;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:IOSScrollViewFlingVelocityTracker", readonly [], false];
constructor(kind: upstream1.PointerDeviceKind) { super(_IOSScrollViewFlingVelocityTrackerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_IOSScrollViewFlingVelocityTrackerNative.prototype, _IOSScrollViewFlingVelocityTrackerProxy);
export namespace _IOSScrollViewFlingVelocityTrackerFactory { export function implement(args: [kind: upstream1.PointerDeviceKind], implementation: {}): IOSScrollViewFlingVelocityTracker {
return constructProxy(_IOSScrollViewFlingVelocityTrackerProxy, args, implementation) as IOSScrollViewFlingVelocityTracker; } }
const _IOSScrollViewFlingVelocityTrackerBinding = _flaxProxyFactory(_IOSScrollViewFlingVelocityTrackerFactory, _IOSScrollViewFlingVelocityTrackerNative) as unknown as typeof _IOSScrollViewFlingVelocityTrackerFactory & (new(kind: upstream1.PointerDeviceKind) => _IOSScrollViewFlingVelocityTrackerNative);
export const IOSScrollViewFlingVelocityTracker: typeof _IOSScrollViewFlingVelocityTrackerBinding & _FlaxInstanceType<IOSScrollViewFlingVelocityTracker> & _FlaxDartType<IOSScrollViewFlingVelocityTracker, readonly ["class", "flax.core/sdk_gestures#type:IOSScrollViewFlingVelocityTracker", readonly [], false]> = _flaxBindInstanceType<IOSScrollViewFlingVelocityTracker, typeof _IOSScrollViewFlingVelocityTrackerBinding>(_IOSScrollViewFlingVelocityTrackerBinding, "flax.core/sdk_gestures#type:IOSScrollViewFlingVelocityTracker", ["flax.core/sdk_gestures#type:VelocityTracker","dart:core::Object"]) as typeof _IOSScrollViewFlingVelocityTrackerBinding & _FlaxInstanceType<IOSScrollViewFlingVelocityTracker> & _FlaxDartType<IOSScrollViewFlingVelocityTracker, readonly ["class", "flax.core/sdk_gestures#type:IOSScrollViewFlingVelocityTracker", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "kind" | "addPosition" | "getVelocityEstimate" | "getVelocity" | "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::IOSScrollViewFlingVelocityTracker" | "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::VelocityTracker";

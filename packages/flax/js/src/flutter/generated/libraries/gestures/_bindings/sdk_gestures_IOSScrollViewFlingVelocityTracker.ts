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
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"kind","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"time","required":true,"positional":true},{"name":"position","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface IOSScrollViewFlingVelocityTracker extends Omit<upstream0.VelocityTracker, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::IOSScrollViewFlingVelocityTracker": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::VelocityTracker": readonly [] }> { readonly __IOSScrollViewFlingVelocityTracker: unique symbol;
readonly [_flaxDartTypeValue]: IOSScrollViewFlingVelocityTracker;

}
defineObject("flax.core/sdk_gestures#type:IOSScrollViewFlingVelocityTracker", ["kind"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:IOSScrollViewFlingVelocityTracker", "object", {"getVelocityEstimate":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_gestures#type:VelocityTracker");
const _IOSScrollViewFlingVelocityTrackerProxy = {type: "flax.core/sdk_gestures#type:IOSScrollViewFlingVelocityTracker", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"addPosition":_flaxMemberParameters2,"getVelocityEstimate":_flaxMemberParameters0,"getVelocity":_flaxMemberParameters0}, getters: ["kind"], setters: [], contextMembers: [], superMembers: ["get:kind","addPosition","getVelocityEstimate","getVelocity"]} as const;
export interface IOSScrollViewFlingVelocityTracker {
readonly [_flaxDartTypeValue]: IOSScrollViewFlingVelocityTracker;

addPosition(time: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration] }>, position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): void;
getVelocityEstimate(): upstream4.VelocityEstimate;
getVelocity(): upstream5.Velocity;
get kind(): upstream1.PointerDeviceKind;
}
export abstract class IOSScrollViewFlingVelocityTracker extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<IOSScrollViewFlingVelocityTracker>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: IOSScrollViewFlingVelocityTracker;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:IOSScrollViewFlingVelocityTracker", readonly [], false];
constructor(kind: upstream1.PointerDeviceKind) { super(_IOSScrollViewFlingVelocityTrackerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(IOSScrollViewFlingVelocityTracker.prototype, _IOSScrollViewFlingVelocityTrackerProxy);
export namespace IOSScrollViewFlingVelocityTracker { export function implement(args: [kind: upstream1.PointerDeviceKind], implementation: {}): IOSScrollViewFlingVelocityTracker {
return constructProxy(_IOSScrollViewFlingVelocityTrackerProxy, args, implementation) as IOSScrollViewFlingVelocityTracker; } }
_flaxBindInstanceType<IOSScrollViewFlingVelocityTracker, typeof IOSScrollViewFlingVelocityTracker>(IOSScrollViewFlingVelocityTracker, "flax.core/sdk_gestures#type:IOSScrollViewFlingVelocityTracker", ["flax.core/sdk_gestures#type:VelocityTracker","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "kind" | "addPosition" | "getVelocityEstimate" | "getVelocity" | "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::IOSScrollViewFlingVelocityTracker" | "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::VelocityTracker";

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_IOSScrollViewFlingVelocityTracker';
import '@flax/flutter/gestures/_bindings/sdk_gestures_IOSScrollViewFlingVelocityTracker';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/sdk_gestures_VelocityTracker';
import '@flax/flutter/gestures/_bindings/sdk_gestures_VelocityTracker';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream5 from '@flax/flutter/gestures/_bindings/sdk_gestures_VelocityEstimate';
import '@flax/flutter/gestures/_bindings/sdk_gestures_VelocityEstimate';
import type * as upstream6 from '@flax/flutter/gestures/_bindings/sdk_gestures_Velocity';
import '@flax/flutter/gestures/_bindings/sdk_gestures_Velocity';
const _flaxMemberParameters0 = [{"name":"kind","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"time","required":true,"positional":true},{"name":"position","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MacOSScrollViewFlingVelocityTracker extends Omit<upstream0.IOSScrollViewFlingVelocityTracker, _flaxOwnMembers0>, Omit<upstream1.VelocityTracker, _flaxOwnMembers0 | keyof upstream0.IOSScrollViewFlingVelocityTracker>, Readonly<{ "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::MacOSScrollViewFlingVelocityTracker": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::IOSScrollViewFlingVelocityTracker": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::VelocityTracker": readonly [] }> { readonly __MacOSScrollViewFlingVelocityTracker: unique symbol;
readonly [_flaxDartTypeValue]: MacOSScrollViewFlingVelocityTracker;

}
defineObject("flax.core/sdk_gestures#type:MacOSScrollViewFlingVelocityTracker", ["kind"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:MacOSScrollViewFlingVelocityTracker", "object", {}, {}), [], undefined, "flax.core/sdk_gestures#type:IOSScrollViewFlingVelocityTracker");
const _MacOSScrollViewFlingVelocityTrackerProxy = {type: "flax.core/sdk_gestures#type:MacOSScrollViewFlingVelocityTracker", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"addPosition":_flaxMemberParameters1,"getVelocityEstimate":_flaxMemberParameters2,"getVelocity":_flaxMemberParameters2}, getters: ["kind"], setters: [], contextMembers: [], superMembers: ["get:kind","addPosition","getVelocityEstimate","getVelocity"]} as const;
export interface MacOSScrollViewFlingVelocityTracker {
readonly [_flaxDartTypeValue]: MacOSScrollViewFlingVelocityTracker;

addPosition(time: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream3.Duration] }>, position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): void;
getVelocityEstimate(): upstream5.VelocityEstimate;
getVelocity(): upstream6.Velocity;
get kind(): upstream2.PointerDeviceKind;
}
export abstract class MacOSScrollViewFlingVelocityTracker extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MacOSScrollViewFlingVelocityTracker>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MacOSScrollViewFlingVelocityTracker;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:MacOSScrollViewFlingVelocityTracker", readonly [], false];
constructor(kind: upstream2.PointerDeviceKind) { super(_MacOSScrollViewFlingVelocityTrackerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(MacOSScrollViewFlingVelocityTracker.prototype, _MacOSScrollViewFlingVelocityTrackerProxy);
export namespace MacOSScrollViewFlingVelocityTracker { export function implement(args: [kind: upstream2.PointerDeviceKind], implementation: {}): MacOSScrollViewFlingVelocityTracker {
return constructProxy(_MacOSScrollViewFlingVelocityTrackerProxy, args, implementation) as MacOSScrollViewFlingVelocityTracker; } }
_flaxBindInstanceType<MacOSScrollViewFlingVelocityTracker, typeof MacOSScrollViewFlingVelocityTracker>(MacOSScrollViewFlingVelocityTracker, "flax.core/sdk_gestures#type:MacOSScrollViewFlingVelocityTracker", ["flax.core/sdk_gestures#type:IOSScrollViewFlingVelocityTracker","flax.core/sdk_gestures#type:VelocityTracker","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "kind" | "addPosition" | "getVelocityEstimate" | "getVelocity" | "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::MacOSScrollViewFlingVelocityTracker" | "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::IOSScrollViewFlingVelocityTracker" | "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::VelocityTracker";

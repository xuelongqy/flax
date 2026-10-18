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
const _flaxMemberParameters0 = [{"name":"time","required":true,"positional":true},{"name":"position","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface VelocityTracker extends Readonly<{ "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::VelocityTracker": readonly [] }> { readonly __VelocityTracker: unique symbol;
readonly [_flaxDartTypeValue]: VelocityTracker;

}
defineObject("flax.core/sdk_gestures#type:VelocityTracker", ["kind"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:VelocityTracker", "object", {"addPosition":_flaxMemberParameters0,"getVelocityEstimate":_flaxMemberParameters1,"getVelocity":_flaxMemberParameters1}, {}), []);
const _VelocityTrackerProxy = {type: "flax.core/sdk_gestures#type:VelocityTracker", parameters: [{"name":"kind","required":true,"positional":true}], constructors: {"withKind":[{"name":"kind","required":true,"positional":true}]}, methods: {"addPosition":_flaxMemberParameters0,"getVelocityEstimate":_flaxMemberParameters1,"getVelocity":_flaxMemberParameters1}, getters: ["kind"], setters: [], contextMembers: [], superMembers: ["get:kind","addPosition","getVelocityEstimate","getVelocity"]} as const;
export interface VelocityTracker {
readonly [_flaxDartTypeValue]: VelocityTracker;

addPosition(time: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }>, position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): void;
getVelocityEstimate(): upstream3.VelocityEstimate | null;
getVelocity(): upstream4.Velocity;
get kind(): upstream0.PointerDeviceKind;
}
export abstract class VelocityTracker extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<VelocityTracker>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: VelocityTracker;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:VelocityTracker", readonly [], false];
constructor(kind: upstream0.PointerDeviceKind) { super(_VelocityTrackerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(VelocityTracker.prototype, _VelocityTrackerProxy);
export namespace VelocityTracker { export function implement(args: [kind: upstream0.PointerDeviceKind], implementation: {}): VelocityTracker {
return constructProxy(_VelocityTrackerProxy, args, implementation) as VelocityTracker; } }
_flaxBindInstanceType<VelocityTracker, typeof VelocityTracker>(VelocityTracker, "flax.core/sdk_gestures#type:VelocityTracker", ["dart:core::Object"]);

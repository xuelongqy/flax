// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestResult';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestResult';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream4 from '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import { _flaxMemberParameters127, _flaxMemberParameters1, _flaxMemberParameters128, _flaxMemberParameters54 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MouseTracker extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/rendering/mouse_tracker.dart::MouseTracker": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __MouseTracker: unique symbol;
readonly [_flaxDartTypeValue]: MouseTracker;

readonly hasListeners: boolean;
readonly mouseIsConnected: boolean;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
updateWithEvent(event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, hitTestResult: Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [] }> | null): void;
updateAllDevices(): void;
}
defineObject("flax.core/sdk_rendering#type:MouseTracker", ["hasListeners","mouseIsConnected"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:MouseTracker", "object", {"updateWithEvent":_flaxMemberParameters127,"updateAllDevices":_flaxMemberParameters1}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
export function _MouseTrackerFactory(hitTestInView: ((offset: upstream3.Offset, viewId: number) => Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [] }>)): MouseTracker {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:MouseTracker", "", [{"name":"hitTestInView","required":true,"positional":true}], [hitTestInView], {}) as MouseTracker;
}
const _MouseTrackerProxy = {type: "flax.core/sdk_rendering#type:MouseTracker", parameters: _flaxMemberParameters128, constructors: {"": _flaxMemberParameters128}, methods: {"addListener":_flaxMemberParameters54,"removeListener":_flaxMemberParameters54,"dispose":_flaxMemberParameters1,"updateWithEvent":_flaxMemberParameters127,"updateAllDevices":_flaxMemberParameters1}, getters: ["mouseIsConnected","hasListeners"], setters: [], contextMembers: [], superMembers: ["get:mouseIsConnected","get:hasListeners","addListener","removeListener","dispose","updateWithEvent","updateAllDevices"]} as const;
export interface _MouseTrackerNative extends MouseTracker {
readonly [_flaxDartTypeValue]: _MouseTrackerNative;

addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
updateWithEvent(event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, hitTestResult: Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [] }> | null): void;
updateAllDevices(): void;
get mouseIsConnected(): boolean;
get hasListeners(): boolean;
}
export abstract class _MouseTrackerNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MouseTracker>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MouseTracker;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:MouseTracker", readonly [], false];
constructor(hitTestInView: ((offset: upstream3.Offset, viewId: number) => Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [] }>)) { super(_MouseTrackerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_MouseTrackerNative.prototype, _MouseTrackerProxy);
export namespace _MouseTrackerFactory { export function implement(args: [hitTestInView: ((offset: upstream3.Offset, viewId: number) => Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [] }>)], implementation: {}): MouseTracker {
return constructProxy(_MouseTrackerProxy, args, implementation) as MouseTracker; } }
const _MouseTrackerBinding = _flaxProxyFactory(_MouseTrackerFactory, _MouseTrackerNative) as unknown as typeof _MouseTrackerFactory & (new(hitTestInView: ((offset: upstream3.Offset, viewId: number) => Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [] }>)) => _MouseTrackerNative);
export const MouseTracker: typeof _MouseTrackerBinding & _FlaxInstanceType<MouseTracker> & _FlaxDartType<MouseTracker, readonly ["class", "flax.core/sdk_rendering#type:MouseTracker", readonly [], false]> = _flaxBindInstanceType<MouseTracker, typeof _MouseTrackerBinding>(_MouseTrackerBinding, "flax.core/sdk_rendering#type:MouseTracker", ["flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]) as typeof _MouseTrackerBinding & _FlaxInstanceType<MouseTracker> & _FlaxDartType<MouseTracker, readonly ["class", "flax.core/sdk_rendering#type:MouseTracker", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "mouseIsConnected" | "addListener" | "removeListener" | "dispose" | "updateWithEvent" | "updateAllDevices" | "__flaxBound:package:flutter/src/rendering/mouse_tracker.dart::MouseTracker" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";

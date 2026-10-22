// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivity';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivity';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivityDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivityDelegate';
import type * as upstream2 from '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import type * as upstream3 from '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { _flaxMemberParameters38, _flaxMemberParameters39, _flaxMemberParameters2, _flaxMemberParameters40, _flaxMemberParameters41, _flaxMemberParameters42 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BallisticScrollActivity extends Omit<upstream0.ScrollActivity, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::BallisticScrollActivity": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivity": readonly [] }> { readonly __BallisticScrollActivity: unique symbol;
readonly [_flaxDartTypeValue]: BallisticScrollActivity;

readonly delegate: upstream1.ScrollActivityDelegate;
readonly shouldIgnorePointer: boolean;
readonly isScrolling: boolean;
readonly velocity: number;
updateDelegate(value: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [] }>): void;
resetActivity(): void;
dispatchScrollStartNotification(metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, context: upstream5.BuildContext | null): void;
dispatchScrollUpdateNotification(metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, context: upstream5.BuildContext, scrollDelta: number): void;
dispatchOverscrollNotification(metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, context: upstream5.BuildContext, overscroll: number): void;
dispatchScrollEndNotification(metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, context: upstream5.BuildContext): void;
applyNewDimensions(): void;
dispose(): void;
toString(): string;
applyMoveTo(value: number): boolean;
}
defineObject("flax.core/sdk_widgets#type:BallisticScrollActivity", ["delegate","shouldIgnorePointer","isScrolling","velocity"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:BallisticScrollActivity", "object", {"applyMoveTo":_flaxMemberParameters38}, {}), [], undefined, "flax.core/sdk_widgets#type:ScrollActivity");
export function _BallisticScrollActivityFactory(delegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [] }>, simulation: Readonly<{ "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [] }>, vsync: Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }>, shouldIgnorePointer: boolean): BallisticScrollActivity {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 4) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:BallisticScrollActivity", "", [{"name":"delegate","required":true,"positional":true},{"name":"simulation","required":true,"positional":true},{"name":"vsync","required":true,"positional":true},{"name":"shouldIgnorePointer","required":true,"positional":true}], [delegate, simulation, vsync, shouldIgnorePointer], {}) as BallisticScrollActivity;
}
const _BallisticScrollActivityProxy = {type: "flax.core/sdk_widgets#type:BallisticScrollActivity", parameters: _flaxMemberParameters39, constructors: {"": _flaxMemberParameters39}, methods: {"updateDelegate":_flaxMemberParameters38,"resetActivity":_flaxMemberParameters2,"dispatchScrollStartNotification":_flaxMemberParameters40,"dispatchScrollUpdateNotification":_flaxMemberParameters41,"dispatchOverscrollNotification":_flaxMemberParameters42,"dispatchScrollEndNotification":_flaxMemberParameters40,"applyNewDimensions":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"toString":_flaxMemberParameters2,"applyMoveTo":_flaxMemberParameters38}, getters: ["shouldIgnorePointer","isScrolling","velocity","delegate"], setters: [], contextMembers: [], superMembers: ["get:shouldIgnorePointer","get:isScrolling","get:velocity","get:delegate","updateDelegate","resetActivity","dispatchScrollStartNotification","dispatchScrollUpdateNotification","dispatchOverscrollNotification","dispatchScrollEndNotification","applyNewDimensions","dispose","toString","applyMoveTo"]} as const;
export interface _BallisticScrollActivityNative extends BallisticScrollActivity {
readonly [_flaxDartTypeValue]: _BallisticScrollActivityNative;

updateDelegate(value: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [] }>): void;
resetActivity(): void;
dispatchScrollStartNotification(metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, context: upstream5.BuildContext | null): void;
dispatchScrollUpdateNotification(metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, context: upstream5.BuildContext, scrollDelta: number): void;
dispatchOverscrollNotification(metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, context: upstream5.BuildContext, overscroll: number): void;
dispatchScrollEndNotification(metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, context: upstream5.BuildContext): void;
applyNewDimensions(): void;
dispose(): void;
toString(): string;
applyMoveTo(value: number): boolean;
get shouldIgnorePointer(): boolean;
get isScrolling(): boolean;
get velocity(): number;
get delegate(): upstream1.ScrollActivityDelegate;
}
export abstract class _BallisticScrollActivityNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BallisticScrollActivity>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: BallisticScrollActivity;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:BallisticScrollActivity", readonly [], false];
constructor(delegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [] }>, simulation: Readonly<{ "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [] }>, vsync: Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }>, shouldIgnorePointer: boolean) { super(_BallisticScrollActivityProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_BallisticScrollActivityNative.prototype, _BallisticScrollActivityProxy);
export namespace _BallisticScrollActivityFactory { export function implement(args: [delegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [] }>, simulation: Readonly<{ "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [] }>, vsync: Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }>, shouldIgnorePointer: boolean], implementation: {}): BallisticScrollActivity {
return constructProxy(_BallisticScrollActivityProxy, args, implementation) as BallisticScrollActivity; } }
const _BallisticScrollActivityBinding = _flaxProxyFactory(_BallisticScrollActivityFactory, _BallisticScrollActivityNative) as unknown as typeof _BallisticScrollActivityFactory & (new(delegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [] }>, simulation: Readonly<{ "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [] }>, vsync: Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }>, shouldIgnorePointer: boolean) => _BallisticScrollActivityNative);
export const BallisticScrollActivity: typeof _BallisticScrollActivityBinding & _FlaxInstanceType<BallisticScrollActivity> & _FlaxDartType<BallisticScrollActivity, readonly ["class", "flax.core/sdk_widgets#type:BallisticScrollActivity", readonly [], false]> = _flaxBindInstanceType<BallisticScrollActivity, typeof _BallisticScrollActivityBinding>(_BallisticScrollActivityBinding, "flax.core/sdk_widgets#type:BallisticScrollActivity", ["flax.core/sdk_widgets#type:ScrollActivity","dart:core::Object"]) as typeof _BallisticScrollActivityBinding & _FlaxInstanceType<BallisticScrollActivity> & _FlaxDartType<BallisticScrollActivity, readonly ["class", "flax.core/sdk_widgets#type:BallisticScrollActivity", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "delegate" | "shouldIgnorePointer" | "isScrolling" | "velocity" | "updateDelegate" | "resetActivity" | "dispatchScrollStartNotification" | "dispatchScrollUpdateNotification" | "dispatchOverscrollNotification" | "dispatchScrollEndNotification" | "applyNewDimensions" | "dispose" | "toString" | "applyMoveTo" | "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::BallisticScrollActivity" | "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivity";

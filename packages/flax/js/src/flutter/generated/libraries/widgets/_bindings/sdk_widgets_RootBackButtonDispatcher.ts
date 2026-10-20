// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_BackButtonDispatcher';
import '@flax/flutter/widgets/_bindings/sdk_widgets_BackButtonDispatcher';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsBindingObserver';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsBindingObserver';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_ChildBackButtonDispatcher';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ChildBackButtonDispatcher';
import type * as upstream3 from '@flax/flutter/services/_bindings/sdk_services_PredictiveBackEvent';
import '@flax/flutter/services/_bindings/sdk_services_PredictiveBackEvent';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformation';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformation';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_AppLifecycleState';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AppLifecycleState';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_ViewFocusEvent';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ViewFocusEvent';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_AppExitResponse';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AppExitResponse';
import { _flaxMemberParameters2, _flaxMemberParameters21, _flaxMemberParameters22, _flaxMemberParameters23, _flaxMemberParameters24, _flaxMemberParameters25, _flaxMemberParameters26, _flaxMemberParameters30, _flaxMemberParameters31, _flaxMemberParameters32 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RootBackButtonDispatcher extends Omit<upstream0.BackButtonDispatcher, _flaxOwnMembers0>, Omit<upstream1.WidgetsBindingObserver, _flaxOwnMembers0 | keyof upstream0.BackButtonDispatcher>, Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::RootBackButtonDispatcher": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [] }> { readonly __RootBackButtonDispatcher: unique symbol;
readonly [_flaxDartTypeValue]: RootBackButtonDispatcher;

readonly hasCallbacks: boolean;
invokeCallback(defaultValue: Promise<boolean>): Promise<boolean>;
createChildBackButtonDispatcher(): upstream2.ChildBackButtonDispatcher;
takePriority(): void;
deferTo(child: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::ChildBackButtonDispatcher": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>] }>): void;
forget(child: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::ChildBackButtonDispatcher": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>] }>): void;
addCallback(callback: (() => Promise<boolean>)): void;
removeCallback(callback: (() => Promise<boolean>)): void;
didPopRoute(): Promise<boolean>;
handleStartBackGesture(backEvent: Readonly<{ "__flaxBound:package:flutter/src/services/predictive_back_event.dart::PredictiveBackEvent": readonly [] }>): boolean;
handleUpdateBackGestureProgress(backEvent: Readonly<{ "__flaxBound:package:flutter/src/services/predictive_back_event.dart::PredictiveBackEvent": readonly [] }>): void;
handleCommitBackGesture(): void;
handleCancelBackGesture(): void;
handleStatusBarTap(): void;
didPushRoute(route: string): Promise<boolean>;
didPushRouteInformation(routeInformation: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformation": readonly [] }>): Promise<boolean>;
didChangeMetrics(): void;
didChangeTextScaleFactor(): void;
didChangePlatformBrightness(): void;
didChangeLocales(locales: DartListInput<upstream5.Locale, Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }>> | null): void;
didChangeAppLifecycleState(state: upstream6.AppLifecycleState): void;
didChangeViewFocus(event: Readonly<{ "__flaxBound:dart:ui::ViewFocusEvent": readonly [] }>): void;
didRequestAppExit(): Promise<upstream8.AppExitResponse>;
didHaveMemoryPressure(): void;
didChangeAccessibilityFeatures(): void;
}
defineObject("flax.core/sdk_widgets#type:RootBackButtonDispatcher", ["hasCallbacks"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:RootBackButtonDispatcher", "object", {"didPopRoute":_flaxMemberParameters2,"handleStartBackGesture":_flaxMemberParameters21,"handleUpdateBackGestureProgress":_flaxMemberParameters21,"handleCommitBackGesture":_flaxMemberParameters2,"handleCancelBackGesture":_flaxMemberParameters2,"handleStatusBarTap":_flaxMemberParameters2,"didPushRoute":_flaxMemberParameters22,"didPushRouteInformation":_flaxMemberParameters23,"didChangeMetrics":_flaxMemberParameters2,"didChangeTextScaleFactor":_flaxMemberParameters2,"didChangePlatformBrightness":_flaxMemberParameters2,"didChangeLocales":_flaxMemberParameters24,"didChangeAppLifecycleState":_flaxMemberParameters25,"didChangeViewFocus":_flaxMemberParameters26,"didRequestAppExit":_flaxMemberParameters2,"didHaveMemoryPressure":_flaxMemberParameters2,"didChangeAccessibilityFeatures":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_widgets#type:BackButtonDispatcher");
export function _RootBackButtonDispatcherFactory(): RootBackButtonDispatcher {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:RootBackButtonDispatcher", "", _flaxMemberParameters2, [], {}) as RootBackButtonDispatcher;
}
const _RootBackButtonDispatcherProxy = {type: "flax.core/sdk_widgets#type:RootBackButtonDispatcher", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"invokeCallback":_flaxMemberParameters30,"createChildBackButtonDispatcher":_flaxMemberParameters2,"takePriority":_flaxMemberParameters2,"deferTo":_flaxMemberParameters31,"forget":_flaxMemberParameters31,"addCallback":_flaxMemberParameters32,"removeCallback":_flaxMemberParameters32,"didPopRoute":_flaxMemberParameters2,"handleStartBackGesture":_flaxMemberParameters21,"handleUpdateBackGestureProgress":_flaxMemberParameters21,"handleCommitBackGesture":_flaxMemberParameters2,"handleCancelBackGesture":_flaxMemberParameters2,"handleStatusBarTap":_flaxMemberParameters2,"didPushRoute":_flaxMemberParameters22,"didPushRouteInformation":_flaxMemberParameters23,"didChangeMetrics":_flaxMemberParameters2,"didChangeTextScaleFactor":_flaxMemberParameters2,"didChangePlatformBrightness":_flaxMemberParameters2,"didChangeLocales":_flaxMemberParameters24,"didChangeAppLifecycleState":_flaxMemberParameters25,"didChangeViewFocus":_flaxMemberParameters26,"didRequestAppExit":_flaxMemberParameters2,"didHaveMemoryPressure":_flaxMemberParameters2,"didChangeAccessibilityFeatures":_flaxMemberParameters2}, getters: ["hasCallbacks"], setters: [], contextMembers: [], superMembers: ["get:hasCallbacks","invokeCallback","createChildBackButtonDispatcher","takePriority","deferTo","forget","addCallback","removeCallback","didPopRoute","handleStartBackGesture","handleUpdateBackGestureProgress","handleCommitBackGesture","handleCancelBackGesture","handleStatusBarTap","didPushRoute","didPushRouteInformation","didChangeMetrics","didChangeTextScaleFactor","didChangePlatformBrightness","didChangeLocales","didChangeAppLifecycleState","didChangeViewFocus","didRequestAppExit","didHaveMemoryPressure","didChangeAccessibilityFeatures"]} as const;
export interface _RootBackButtonDispatcherNative extends RootBackButtonDispatcher {
readonly [_flaxDartTypeValue]: _RootBackButtonDispatcherNative;

invokeCallback(defaultValue: Promise<boolean>): Promise<boolean>;
createChildBackButtonDispatcher(): upstream2.ChildBackButtonDispatcher;
takePriority(): void;
deferTo(child: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::ChildBackButtonDispatcher": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>] }>): void;
forget(child: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::ChildBackButtonDispatcher": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>] }>): void;
addCallback(callback: (() => Promise<boolean>)): void;
removeCallback(callback: (() => Promise<boolean>)): void;
didPopRoute(): Promise<boolean>;
handleStartBackGesture(backEvent: Readonly<{ "__flaxBound:package:flutter/src/services/predictive_back_event.dart::PredictiveBackEvent": readonly [] }>): boolean;
handleUpdateBackGestureProgress(backEvent: Readonly<{ "__flaxBound:package:flutter/src/services/predictive_back_event.dart::PredictiveBackEvent": readonly [] }>): void;
handleCommitBackGesture(): void;
handleCancelBackGesture(): void;
handleStatusBarTap(): void;
didPushRoute(route: string): Promise<boolean>;
didPushRouteInformation(routeInformation: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformation": readonly [] }>): Promise<boolean>;
didChangeMetrics(): void;
didChangeTextScaleFactor(): void;
didChangePlatformBrightness(): void;
didChangeLocales(locales: DartListInput<upstream5.Locale, Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }>> | null): void;
didChangeAppLifecycleState(state: upstream6.AppLifecycleState): void;
didChangeViewFocus(event: Readonly<{ "__flaxBound:dart:ui::ViewFocusEvent": readonly [] }>): void;
didRequestAppExit(): Promise<upstream8.AppExitResponse>;
didHaveMemoryPressure(): void;
didChangeAccessibilityFeatures(): void;
get hasCallbacks(): boolean;
}
export abstract class _RootBackButtonDispatcherNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RootBackButtonDispatcher>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RootBackButtonDispatcher;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RootBackButtonDispatcher", readonly [], false];
constructor() { super(_RootBackButtonDispatcherProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_RootBackButtonDispatcherNative.prototype, _RootBackButtonDispatcherProxy);
export namespace _RootBackButtonDispatcherFactory { export function implement(args: [], implementation: {}): RootBackButtonDispatcher {
return constructProxy(_RootBackButtonDispatcherProxy, args, implementation) as RootBackButtonDispatcher; } }
const _RootBackButtonDispatcherBinding = _flaxProxyFactory(_RootBackButtonDispatcherFactory, _RootBackButtonDispatcherNative) as unknown as typeof _RootBackButtonDispatcherFactory & (new() => _RootBackButtonDispatcherNative);
export const RootBackButtonDispatcher: typeof _RootBackButtonDispatcherBinding & _FlaxInstanceType<RootBackButtonDispatcher> & _FlaxDartType<RootBackButtonDispatcher, readonly ["class", "flax.core/sdk_widgets#type:RootBackButtonDispatcher", readonly [], false]> = _flaxBindInstanceType<RootBackButtonDispatcher, typeof _RootBackButtonDispatcherBinding>(_RootBackButtonDispatcherBinding, "flax.core/sdk_widgets#type:RootBackButtonDispatcher", ["flax.core/sdk_widgets#type:BackButtonDispatcher","package:flutter/src/widgets/router.dart::_CallbackHookProvider","dart:core::Object","flax.core/sdk_widgets#type:WidgetsBindingObserver"]) as typeof _RootBackButtonDispatcherBinding & _FlaxInstanceType<RootBackButtonDispatcher> & _FlaxDartType<RootBackButtonDispatcher, readonly ["class", "flax.core/sdk_widgets#type:RootBackButtonDispatcher", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasCallbacks" | "invokeCallback" | "createChildBackButtonDispatcher" | "takePriority" | "deferTo" | "forget" | "addCallback" | "removeCallback" | "didPopRoute" | "handleStartBackGesture" | "handleUpdateBackGestureProgress" | "handleCommitBackGesture" | "handleCancelBackGesture" | "handleStatusBarTap" | "didPushRoute" | "didPushRouteInformation" | "didChangeMetrics" | "didChangeTextScaleFactor" | "didChangePlatformBrightness" | "didChangeLocales" | "didChangeAppLifecycleState" | "didChangeViewFocus" | "didRequestAppExit" | "didHaveMemoryPressure" | "didChangeAccessibilityFeatures" | "__flaxBound:package:flutter/src/widgets/router.dart::RootBackButtonDispatcher" | "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher" | "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider" | "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver";

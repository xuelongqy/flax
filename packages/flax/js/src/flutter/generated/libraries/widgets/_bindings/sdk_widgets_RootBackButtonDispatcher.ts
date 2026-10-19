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
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"backEvent","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"route","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"routeInformation","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"locales","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"state","required":true,"positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"event","required":true,"positional":true}] as const;
const _flaxMemberParameters7 = [{"name":"defaultValue","required":true,"positional":true}] as const;
const _flaxMemberParameters8 = [{"name":"child","required":true,"positional":true}] as const;
const _flaxMemberParameters9 = [{"name":"callback","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RootBackButtonDispatcher extends Omit<upstream0.BackButtonDispatcher, _flaxOwnMembers0>, Omit<upstream1.WidgetsBindingObserver, _flaxOwnMembers0 | keyof upstream0.BackButtonDispatcher>, Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::RootBackButtonDispatcher": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [] }> { readonly __RootBackButtonDispatcher: unique symbol;
readonly [_flaxDartTypeValue]: RootBackButtonDispatcher;

}
defineObject("flax.core/sdk_widgets#type:RootBackButtonDispatcher", ["hasCallbacks"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:RootBackButtonDispatcher", "object", {"didPopRoute":_flaxMemberParameters0,"handleStartBackGesture":_flaxMemberParameters1,"handleUpdateBackGestureProgress":_flaxMemberParameters1,"handleCommitBackGesture":_flaxMemberParameters0,"handleCancelBackGesture":_flaxMemberParameters0,"handleStatusBarTap":_flaxMemberParameters0,"didPushRoute":_flaxMemberParameters2,"didPushRouteInformation":_flaxMemberParameters3,"didChangeMetrics":_flaxMemberParameters0,"didChangeTextScaleFactor":_flaxMemberParameters0,"didChangePlatformBrightness":_flaxMemberParameters0,"didChangeLocales":_flaxMemberParameters4,"didChangeAppLifecycleState":_flaxMemberParameters5,"didChangeViewFocus":_flaxMemberParameters6,"didRequestAppExit":_flaxMemberParameters0,"didHaveMemoryPressure":_flaxMemberParameters0,"didChangeAccessibilityFeatures":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_widgets#type:BackButtonDispatcher");
const _RootBackButtonDispatcherProxy = {type: "flax.core/sdk_widgets#type:RootBackButtonDispatcher", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"invokeCallback":_flaxMemberParameters7,"createChildBackButtonDispatcher":_flaxMemberParameters0,"takePriority":_flaxMemberParameters0,"deferTo":_flaxMemberParameters8,"forget":_flaxMemberParameters8,"addCallback":_flaxMemberParameters9,"removeCallback":_flaxMemberParameters9,"didPopRoute":_flaxMemberParameters0,"handleStartBackGesture":_flaxMemberParameters1,"handleUpdateBackGestureProgress":_flaxMemberParameters1,"handleCommitBackGesture":_flaxMemberParameters0,"handleCancelBackGesture":_flaxMemberParameters0,"handleStatusBarTap":_flaxMemberParameters0,"didPushRoute":_flaxMemberParameters2,"didPushRouteInformation":_flaxMemberParameters3,"didChangeMetrics":_flaxMemberParameters0,"didChangeTextScaleFactor":_flaxMemberParameters0,"didChangePlatformBrightness":_flaxMemberParameters0,"didChangeLocales":_flaxMemberParameters4,"didChangeAppLifecycleState":_flaxMemberParameters5,"didChangeViewFocus":_flaxMemberParameters6,"didRequestAppExit":_flaxMemberParameters0,"didHaveMemoryPressure":_flaxMemberParameters0,"didChangeAccessibilityFeatures":_flaxMemberParameters0}, getters: ["hasCallbacks"], setters: [], contextMembers: [], superMembers: ["get:hasCallbacks","invokeCallback","createChildBackButtonDispatcher","takePriority","deferTo","forget","addCallback","removeCallback","didPopRoute","handleStartBackGesture","handleUpdateBackGestureProgress","handleCommitBackGesture","handleCancelBackGesture","handleStatusBarTap","didPushRoute","didPushRouteInformation","didChangeMetrics","didChangeTextScaleFactor","didChangePlatformBrightness","didChangeLocales","didChangeAppLifecycleState","didChangeViewFocus","didRequestAppExit","didHaveMemoryPressure","didChangeAccessibilityFeatures"]} as const;
export interface RootBackButtonDispatcher {
readonly [_flaxDartTypeValue]: RootBackButtonDispatcher;

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
export abstract class RootBackButtonDispatcher extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RootBackButtonDispatcher>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RootBackButtonDispatcher;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RootBackButtonDispatcher", readonly [], false];
constructor() { super(_RootBackButtonDispatcherProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(RootBackButtonDispatcher.prototype, _RootBackButtonDispatcherProxy);
export namespace RootBackButtonDispatcher { export function implement(args: [], implementation: {}): RootBackButtonDispatcher {
return constructProxy(_RootBackButtonDispatcherProxy, args, implementation) as RootBackButtonDispatcher; } }
_flaxBindInstanceType<RootBackButtonDispatcher, typeof RootBackButtonDispatcher>(RootBackButtonDispatcher, "flax.core/sdk_widgets#type:RootBackButtonDispatcher", ["flax.core/sdk_widgets#type:BackButtonDispatcher","package:flutter/src/widgets/router.dart::_CallbackHookProvider","dart:core::Object","flax.core/sdk_widgets#type:WidgetsBindingObserver"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasCallbacks" | "invokeCallback" | "createChildBackButtonDispatcher" | "takePriority" | "deferTo" | "forget" | "addCallback" | "removeCallback" | "didPopRoute" | "handleStartBackGesture" | "handleUpdateBackGestureProgress" | "handleCommitBackGesture" | "handleCancelBackGesture" | "handleStatusBarTap" | "didPushRoute" | "didPushRouteInformation" | "didChangeMetrics" | "didChangeTextScaleFactor" | "didChangePlatformBrightness" | "didChangeLocales" | "didChangeAppLifecycleState" | "didChangeViewFocus" | "didRequestAppExit" | "didHaveMemoryPressure" | "didChangeAccessibilityFeatures" | "__flaxBound:package:flutter/src/widgets/router.dart::RootBackButtonDispatcher" | "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher" | "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider" | "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver";

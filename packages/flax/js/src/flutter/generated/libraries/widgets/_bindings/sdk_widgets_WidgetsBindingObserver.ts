// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_PredictiveBackEvent';
import '@flax/flutter/services/_bindings/sdk_services_PredictiveBackEvent';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformation';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformation';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_AppLifecycleState';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AppLifecycleState';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_ViewFocusEvent';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ViewFocusEvent';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_AppExitResponse';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AppExitResponse';
import { _flaxMemberParameters2, _flaxMemberParameters21, _flaxMemberParameters22, _flaxMemberParameters23, _flaxMemberParameters24, _flaxMemberParameters25, _flaxMemberParameters26 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface WidgetsBindingObserver extends Readonly<{ "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [] }> { readonly __WidgetsBindingObserver: unique symbol;
readonly [_flaxDartTypeValue]: WidgetsBindingObserver;

}
defineObject("flax.core/sdk_widgets#type:WidgetsBindingObserver", [], [], _flaxBindingMethods("flax.core/sdk_widgets#type:WidgetsBindingObserver", "object", {"didPopRoute":_flaxMemberParameters2,"handleStartBackGesture":_flaxMemberParameters21,"handleUpdateBackGestureProgress":_flaxMemberParameters21,"handleCommitBackGesture":_flaxMemberParameters2,"handleCancelBackGesture":_flaxMemberParameters2,"handleStatusBarTap":_flaxMemberParameters2,"didPushRoute":_flaxMemberParameters22,"didPushRouteInformation":_flaxMemberParameters23,"didChangeMetrics":_flaxMemberParameters2,"didChangeTextScaleFactor":_flaxMemberParameters2,"didChangePlatformBrightness":_flaxMemberParameters2,"didChangeLocales":_flaxMemberParameters24,"didChangeAppLifecycleState":_flaxMemberParameters25,"didChangeViewFocus":_flaxMemberParameters26,"didRequestAppExit":_flaxMemberParameters2,"didHaveMemoryPressure":_flaxMemberParameters2,"didChangeAccessibilityFeatures":_flaxMemberParameters2}, {}), []);
const _WidgetsBindingObserverProxy = {type: "flax.core/sdk_widgets#type:WidgetsBindingObserver", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"didPopRoute":_flaxMemberParameters2,"handleStartBackGesture":_flaxMemberParameters21,"handleUpdateBackGestureProgress":_flaxMemberParameters21,"handleCommitBackGesture":_flaxMemberParameters2,"handleCancelBackGesture":_flaxMemberParameters2,"handleStatusBarTap":_flaxMemberParameters2,"didPushRoute":_flaxMemberParameters22,"didPushRouteInformation":_flaxMemberParameters23,"didChangeMetrics":_flaxMemberParameters2,"didChangeTextScaleFactor":_flaxMemberParameters2,"didChangePlatformBrightness":_flaxMemberParameters2,"didChangeLocales":_flaxMemberParameters24,"didChangeAppLifecycleState":_flaxMemberParameters25,"didChangeViewFocus":_flaxMemberParameters26,"didRequestAppExit":_flaxMemberParameters2,"didHaveMemoryPressure":_flaxMemberParameters2,"didChangeAccessibilityFeatures":_flaxMemberParameters2}, getters: [], setters: [], contextMembers: [], superMembers: ["didPopRoute","handleStartBackGesture","handleUpdateBackGestureProgress","handleCommitBackGesture","handleCancelBackGesture","handleStatusBarTap","didPushRoute","didPushRouteInformation","didChangeMetrics","didChangeTextScaleFactor","didChangePlatformBrightness","didChangeLocales","didChangeAppLifecycleState","didChangeViewFocus","didRequestAppExit","didHaveMemoryPressure","didChangeAccessibilityFeatures"]} as const;
export interface WidgetsBindingObserver {
readonly [_flaxDartTypeValue]: WidgetsBindingObserver;

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
didChangeLocales(locales: DartListInput<upstream2.Locale, Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }>> | null): void;
didChangeAppLifecycleState(state: upstream3.AppLifecycleState): void;
didChangeViewFocus(event: Readonly<{ "__flaxBound:dart:ui::ViewFocusEvent": readonly [] }>): void;
didRequestAppExit(): Promise<upstream5.AppExitResponse>;
didHaveMemoryPressure(): void;
didChangeAccessibilityFeatures(): void;
}
export abstract class WidgetsBindingObserver extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<WidgetsBindingObserver>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: WidgetsBindingObserver;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:WidgetsBindingObserver", readonly [], false];
constructor() { super(_WidgetsBindingObserverProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(WidgetsBindingObserver.prototype, _WidgetsBindingObserverProxy);
export namespace WidgetsBindingObserver { export function implement(args: [], implementation: {}): WidgetsBindingObserver {
return constructProxy(_WidgetsBindingObserverProxy, args, implementation) as WidgetsBindingObserver; } }
_flaxBindInstanceType<WidgetsBindingObserver, typeof WidgetsBindingObserver>(WidgetsBindingObserver, "flax.core/sdk_widgets#type:WidgetsBindingObserver", ["dart:core::Object"]);

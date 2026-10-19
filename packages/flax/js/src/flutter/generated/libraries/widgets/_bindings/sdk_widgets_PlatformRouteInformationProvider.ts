// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformationProvider';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformationProvider';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformation';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformation';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsBindingObserver';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsBindingObserver';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformationReportingType';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformationReportingType';
import type * as upstream7 from '@flax/flutter/services/_bindings/sdk_services_PredictiveBackEvent';
import '@flax/flutter/services/_bindings/sdk_services_PredictiveBackEvent';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_AppLifecycleState';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AppLifecycleState';
import type * as upstream10 from '@flax/dart/ui/_bindings/sdk_dart_ui_ViewFocusEvent';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ViewFocusEvent';
import type * as upstream11 from '@flax/dart/ui/_bindings/sdk_dart_ui_AppExitResponse';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AppExitResponse';
import { _flaxMemberParameters2, _flaxMemberParameters21, _flaxMemberParameters22, _flaxMemberParameters23, _flaxMemberParameters24, _flaxMemberParameters25, _flaxMemberParameters26, _flaxMemberParameters278, _flaxMemberParameters279, _flaxMemberParameters12 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PlatformRouteInformationProvider extends Omit<upstream0.RouteInformationProvider, _flaxOwnMembers0>, Omit<upstream1.ValueListenable<upstream2.RouteInformation>, _flaxOwnMembers0 | keyof upstream0.RouteInformationProvider>, Omit<upstream3.Listenable, _flaxOwnMembers0 | keyof upstream0.RouteInformationProvider | keyof upstream1.ValueListenable<upstream2.RouteInformation>>, Omit<upstream4.WidgetsBindingObserver, _flaxOwnMembers0 | keyof upstream0.RouteInformationProvider | keyof upstream1.ValueListenable<upstream2.RouteInformation> | keyof upstream3.Listenable>, Omit<upstream5.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.RouteInformationProvider | keyof upstream1.ValueListenable<upstream2.RouteInformation> | keyof upstream3.Listenable | keyof upstream4.WidgetsBindingObserver>, Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::PlatformRouteInformationProvider": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformationProvider": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream2.RouteInformation] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> { readonly __PlatformRouteInformationProvider: unique symbol;
readonly [_flaxDartTypeValue]: PlatformRouteInformationProvider;

}
defineObject("flax.core/sdk_widgets#type:PlatformRouteInformationProvider", ["value","hasListeners"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:PlatformRouteInformationProvider", "object", {"didPopRoute":_flaxMemberParameters2,"handleStartBackGesture":_flaxMemberParameters21,"handleUpdateBackGestureProgress":_flaxMemberParameters21,"handleCommitBackGesture":_flaxMemberParameters2,"handleCancelBackGesture":_flaxMemberParameters2,"handleStatusBarTap":_flaxMemberParameters2,"didPushRoute":_flaxMemberParameters22,"didPushRouteInformation":_flaxMemberParameters23,"didChangeMetrics":_flaxMemberParameters2,"didChangeTextScaleFactor":_flaxMemberParameters2,"didChangePlatformBrightness":_flaxMemberParameters2,"didChangeLocales":_flaxMemberParameters24,"didChangeAppLifecycleState":_flaxMemberParameters25,"didChangeViewFocus":_flaxMemberParameters26,"didRequestAppExit":_flaxMemberParameters2,"didHaveMemoryPressure":_flaxMemberParameters2,"didChangeAccessibilityFeatures":_flaxMemberParameters2,"dispose":_flaxMemberParameters2}, {}), ["removeListener"], undefined, "flax.core/sdk_widgets#type:RouteInformationProvider");
const _PlatformRouteInformationProviderProxy = {type: "flax.core/sdk_widgets#type:PlatformRouteInformationProvider", parameters: _flaxMemberParameters278, constructors: {"": _flaxMemberParameters278}, methods: {"routerReportsNewRouteInformation":_flaxMemberParameters279,"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12,"didPopRoute":_flaxMemberParameters2,"handleStartBackGesture":_flaxMemberParameters21,"handleUpdateBackGestureProgress":_flaxMemberParameters21,"handleCommitBackGesture":_flaxMemberParameters2,"handleCancelBackGesture":_flaxMemberParameters2,"handleStatusBarTap":_flaxMemberParameters2,"didPushRoute":_flaxMemberParameters22,"didPushRouteInformation":_flaxMemberParameters23,"didChangeMetrics":_flaxMemberParameters2,"didChangeTextScaleFactor":_flaxMemberParameters2,"didChangePlatformBrightness":_flaxMemberParameters2,"didChangeLocales":_flaxMemberParameters24,"didChangeAppLifecycleState":_flaxMemberParameters25,"didChangeViewFocus":_flaxMemberParameters26,"didRequestAppExit":_flaxMemberParameters2,"didHaveMemoryPressure":_flaxMemberParameters2,"didChangeAccessibilityFeatures":_flaxMemberParameters2,"dispose":_flaxMemberParameters2}, getters: ["value","hasListeners"], setters: [], contextMembers: [], superMembers: ["get:value","get:hasListeners","routerReportsNewRouteInformation","addListener","removeListener","didPopRoute","handleStartBackGesture","handleUpdateBackGestureProgress","handleCommitBackGesture","handleCancelBackGesture","handleStatusBarTap","didPushRoute","didPushRouteInformation","didChangeMetrics","didChangeTextScaleFactor","didChangePlatformBrightness","didChangeLocales","didChangeAppLifecycleState","didChangeViewFocus","didRequestAppExit","didHaveMemoryPressure","didChangeAccessibilityFeatures","dispose"]} as const;
export interface PlatformRouteInformationProvider {
readonly [_flaxDartTypeValue]: PlatformRouteInformationProvider;

routerReportsNewRouteInformation(routeInformation: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformation": readonly [] }>, options?: {type?: upstream6.RouteInformationReportingType | undefined}): void;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
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
didChangeLocales(locales: DartListInput<upstream8.Locale, Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }>> | null): void;
didChangeAppLifecycleState(state: upstream9.AppLifecycleState): void;
didChangeViewFocus(event: Readonly<{ "__flaxBound:dart:ui::ViewFocusEvent": readonly [] }>): void;
didRequestAppExit(): Promise<upstream11.AppExitResponse>;
didHaveMemoryPressure(): void;
didChangeAccessibilityFeatures(): void;
dispose(): void;
get value(): upstream2.RouteInformation;
get hasListeners(): boolean;
}
export abstract class PlatformRouteInformationProvider extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PlatformRouteInformationProvider>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PlatformRouteInformationProvider;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:PlatformRouteInformationProvider", readonly [], false];
constructor(options: {initialRouteInformation: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformation": readonly [] }>}) { super(_PlatformRouteInformationProviderProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(PlatformRouteInformationProvider.prototype, _PlatformRouteInformationProviderProxy);
export namespace PlatformRouteInformationProvider { export function implement(args: [options: {initialRouteInformation: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformation": readonly [] }>}], implementation: {}): PlatformRouteInformationProvider {
return constructProxy(_PlatformRouteInformationProviderProxy, args, implementation) as PlatformRouteInformationProvider; } }
_flaxBindInstanceType<PlatformRouteInformationProvider, typeof PlatformRouteInformationProvider>(PlatformRouteInformationProvider, "flax.core/sdk_widgets#type:PlatformRouteInformationProvider", ["flax.core/sdk_widgets#type:RouteInformationProvider","flax.core/flutter#type:ValueListenable","flax.core/flutter#type:Listenable","dart:core::Object","flax.core/sdk_widgets#type:WidgetsBindingObserver","flax.core/sdk_foundation#type:ChangeNotifier"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "hasListeners" | "routerReportsNewRouteInformation" | "addListener" | "removeListener" | "didPopRoute" | "handleStartBackGesture" | "handleUpdateBackGestureProgress" | "handleCommitBackGesture" | "handleCancelBackGesture" | "handleStatusBarTap" | "didPushRoute" | "didPushRouteInformation" | "didChangeMetrics" | "didChangeTextScaleFactor" | "didChangePlatformBrightness" | "didChangeLocales" | "didChangeAppLifecycleState" | "didChangeViewFocus" | "didRequestAppExit" | "didHaveMemoryPressure" | "didChangeAccessibilityFeatures" | "dispose" | "__flaxBound:package:flutter/src/widgets/router.dart::PlatformRouteInformationProvider" | "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformationProvider" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier";

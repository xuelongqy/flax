// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_LiveTextInputStatus';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LiveTextInputStatus';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsBindingObserver';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsBindingObserver';
import type * as upstream6 from '@flax/flutter/services/_bindings/sdk_services_PredictiveBackEvent';
import '@flax/flutter/services/_bindings/sdk_services_PredictiveBackEvent';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformation';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformation';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_AppLifecycleState';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AppLifecycleState';
import type * as upstream10 from '@flax/dart/ui/_bindings/sdk_dart_ui_ViewFocusEvent';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ViewFocusEvent';
import type * as upstream11 from '@flax/dart/ui/_bindings/sdk_dart_ui_AppExitResponse';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AppExitResponse';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"backEvent","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"route","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"routeInformation","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"locales","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"state","required":true,"positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"event","required":true,"positional":true}] as const;
const _flaxMemberParameters7 = [{"name":"listener","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface LiveTextInputStatusNotifier extends Omit<upstream0.ValueNotifier<upstream1.LiveTextInputStatus>, _flaxOwnMembers0>, Omit<upstream2.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<upstream1.LiveTextInputStatus>>, Omit<upstream3.Listenable, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<upstream1.LiveTextInputStatus> | keyof upstream2.ChangeNotifier>, Omit<upstream4.ValueListenable<upstream1.LiveTextInputStatus>, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<upstream1.LiveTextInputStatus> | keyof upstream2.ChangeNotifier | keyof upstream3.Listenable>, Omit<upstream5.WidgetsBindingObserver, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<upstream1.LiveTextInputStatus> | keyof upstream2.ChangeNotifier | keyof upstream3.Listenable | keyof upstream4.ValueListenable<upstream1.LiveTextInputStatus>>, Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection.dart::LiveTextInputStatusNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream1.LiveTextInputStatus] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream1.LiveTextInputStatus] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [] }> { readonly __LiveTextInputStatusNotifier: unique symbol;
readonly [_flaxDartTypeValue]: LiveTextInputStatusNotifier;

}
defineObject("flax.core/sdk_widgets#type:LiveTextInputStatusNotifier", ["value","hasListeners"], ["value"], _flaxBindingMethods("flax.core/sdk_widgets#type:LiveTextInputStatusNotifier", "object", {"toString":_flaxMemberParameters0,"didPopRoute":_flaxMemberParameters0,"handleStartBackGesture":_flaxMemberParameters1,"handleUpdateBackGestureProgress":_flaxMemberParameters1,"handleCommitBackGesture":_flaxMemberParameters0,"handleCancelBackGesture":_flaxMemberParameters0,"handleStatusBarTap":_flaxMemberParameters0,"didPushRoute":_flaxMemberParameters2,"didPushRouteInformation":_flaxMemberParameters3,"didChangeMetrics":_flaxMemberParameters0,"didChangeTextScaleFactor":_flaxMemberParameters0,"didChangePlatformBrightness":_flaxMemberParameters0,"didChangeLocales":_flaxMemberParameters4,"didChangeAppLifecycleState":_flaxMemberParameters5,"didChangeViewFocus":_flaxMemberParameters6,"didRequestAppExit":_flaxMemberParameters0,"didHaveMemoryPressure":_flaxMemberParameters0,"didChangeAccessibilityFeatures":_flaxMemberParameters0,"update":_flaxMemberParameters0}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
const _LiveTextInputStatusNotifierProxy = {type: "flax.core/sdk_widgets#type:LiveTextInputStatusNotifier", parameters: [{"name":"value","required":false,"positional":false}], constructors: {"":[{"name":"value","required":false,"positional":false}]}, methods: {"toString":_flaxMemberParameters0,"addListener":_flaxMemberParameters7,"removeListener":_flaxMemberParameters7,"dispose":_flaxMemberParameters0,"didPopRoute":_flaxMemberParameters0,"handleStartBackGesture":_flaxMemberParameters1,"handleUpdateBackGestureProgress":_flaxMemberParameters1,"handleCommitBackGesture":_flaxMemberParameters0,"handleCancelBackGesture":_flaxMemberParameters0,"handleStatusBarTap":_flaxMemberParameters0,"didPushRoute":_flaxMemberParameters2,"didPushRouteInformation":_flaxMemberParameters3,"didChangeMetrics":_flaxMemberParameters0,"didChangeTextScaleFactor":_flaxMemberParameters0,"didChangePlatformBrightness":_flaxMemberParameters0,"didChangeLocales":_flaxMemberParameters4,"didChangeAppLifecycleState":_flaxMemberParameters5,"didChangeViewFocus":_flaxMemberParameters6,"didRequestAppExit":_flaxMemberParameters0,"didHaveMemoryPressure":_flaxMemberParameters0,"didChangeAccessibilityFeatures":_flaxMemberParameters0,"update":_flaxMemberParameters0}, getters: ["value","hasListeners"], setters: ["value"], contextMembers: [], superMembers: ["get:value","get:hasListeners","set:value","toString","addListener","removeListener","dispose","didPopRoute","handleStartBackGesture","handleUpdateBackGestureProgress","handleCommitBackGesture","handleCancelBackGesture","handleStatusBarTap","didPushRoute","didPushRouteInformation","didChangeMetrics","didChangeTextScaleFactor","didChangePlatformBrightness","didChangeLocales","didChangeAppLifecycleState","didChangeViewFocus","didRequestAppExit","didHaveMemoryPressure","didChangeAccessibilityFeatures","update"]} as const;
export interface LiveTextInputStatusNotifier {
readonly [_flaxDartTypeValue]: LiveTextInputStatusNotifier;

toString(): string;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
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
update(): Promise<void>;
get value(): upstream1.LiveTextInputStatus;
get hasListeners(): boolean;
set value(value: upstream1.LiveTextInputStatus);
}
export abstract class LiveTextInputStatusNotifier extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LiveTextInputStatusNotifier>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: LiveTextInputStatusNotifier;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:LiveTextInputStatusNotifier", readonly [], false];
constructor(options?: {value?: upstream1.LiveTextInputStatus | undefined}) { super(_LiveTextInputStatusNotifierProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(LiveTextInputStatusNotifier.prototype, _LiveTextInputStatusNotifierProxy);
export namespace LiveTextInputStatusNotifier { export function implement(args: [options?: {value?: upstream1.LiveTextInputStatus | undefined}], implementation: {}): LiveTextInputStatusNotifier {
return constructProxy(_LiveTextInputStatusNotifierProxy, args, implementation) as LiveTextInputStatusNotifier; } }
_flaxBindInstanceType<LiveTextInputStatusNotifier, typeof LiveTextInputStatusNotifier>(LiveTextInputStatusNotifier, "flax.core/sdk_widgets#type:LiveTextInputStatusNotifier", ["flax.core/sdk_foundation#type:ValueNotifier","flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable","flax.core/flutter#type:ValueListenable","flax.core/sdk_widgets#type:WidgetsBindingObserver"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "hasListeners" | "toString" | "addListener" | "removeListener" | "dispose" | "didPopRoute" | "handleStartBackGesture" | "handleUpdateBackGestureProgress" | "handleCommitBackGesture" | "handleCancelBackGesture" | "handleStatusBarTap" | "didPushRoute" | "didPushRouteInformation" | "didChangeMetrics" | "didChangeTextScaleFactor" | "didChangePlatformBrightness" | "didChangeLocales" | "didChangeAppLifecycleState" | "didChangeViewFocus" | "didRequestAppExit" | "didHaveMemoryPressure" | "didChangeAccessibilityFeatures" | "update" | "__flaxBound:package:flutter/src/widgets/text_selection.dart::LiveTextInputStatusNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable" | "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver";

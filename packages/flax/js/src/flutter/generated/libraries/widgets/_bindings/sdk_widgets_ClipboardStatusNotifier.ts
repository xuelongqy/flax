// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ClipboardStatus';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ClipboardStatus';
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
import { _flaxMemberParameters2, _flaxMemberParameters26, _flaxMemberParameters27, _flaxMemberParameters28, _flaxMemberParameters29, _flaxMemberParameters30, _flaxMemberParameters31, _flaxMemberParameters65, _flaxMemberParameters12 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ClipboardStatusNotifier extends Omit<upstream0.ValueNotifier<upstream1.ClipboardStatus>, _flaxOwnMembers0>, Omit<upstream2.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<upstream1.ClipboardStatus>>, Omit<upstream3.Listenable, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<upstream1.ClipboardStatus> | keyof upstream2.ChangeNotifier>, Omit<upstream4.ValueListenable<upstream1.ClipboardStatus>, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<upstream1.ClipboardStatus> | keyof upstream2.ChangeNotifier | keyof upstream3.Listenable>, Omit<upstream5.WidgetsBindingObserver, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<upstream1.ClipboardStatus> | keyof upstream2.ChangeNotifier | keyof upstream3.Listenable | keyof upstream4.ValueListenable<upstream1.ClipboardStatus>>, Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection.dart::ClipboardStatusNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream1.ClipboardStatus] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream1.ClipboardStatus] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [] }> { readonly __ClipboardStatusNotifier: unique symbol;
readonly [_flaxDartTypeValue]: ClipboardStatusNotifier;

get value(): upstream1.ClipboardStatus;
readonly hasListeners: boolean;
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
set value(value: upstream1.ClipboardStatus);
}
defineObject("flax.core/sdk_widgets#type:ClipboardStatusNotifier", ["value","hasListeners"], ["value"], _flaxBindingMethods("flax.core/sdk_widgets#type:ClipboardStatusNotifier", "object", {"toString":_flaxMemberParameters2,"didPopRoute":_flaxMemberParameters2,"handleStartBackGesture":_flaxMemberParameters26,"handleUpdateBackGestureProgress":_flaxMemberParameters26,"handleCommitBackGesture":_flaxMemberParameters2,"handleCancelBackGesture":_flaxMemberParameters2,"handleStatusBarTap":_flaxMemberParameters2,"didPushRoute":_flaxMemberParameters27,"didPushRouteInformation":_flaxMemberParameters28,"didChangeMetrics":_flaxMemberParameters2,"didChangeTextScaleFactor":_flaxMemberParameters2,"didChangePlatformBrightness":_flaxMemberParameters2,"didChangeLocales":_flaxMemberParameters29,"didChangeAppLifecycleState":_flaxMemberParameters30,"didChangeViewFocus":_flaxMemberParameters31,"didRequestAppExit":_flaxMemberParameters2,"didHaveMemoryPressure":_flaxMemberParameters2,"didChangeAccessibilityFeatures":_flaxMemberParameters2,"update":_flaxMemberParameters2}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
export function _ClipboardStatusNotifierFactory(options: { value?: upstream1.ClipboardStatus | undefined } = {}): ClipboardStatusNotifier {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:ClipboardStatusNotifier", "", [{"name":"value"}], [], options) as ClipboardStatusNotifier;
}
const _ClipboardStatusNotifierProxy = {type: "flax.core/sdk_widgets#type:ClipboardStatusNotifier", parameters: _flaxMemberParameters65, constructors: {"": _flaxMemberParameters65}, methods: {"toString":_flaxMemberParameters2,"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12,"dispose":_flaxMemberParameters2,"didPopRoute":_flaxMemberParameters2,"handleStartBackGesture":_flaxMemberParameters26,"handleUpdateBackGestureProgress":_flaxMemberParameters26,"handleCommitBackGesture":_flaxMemberParameters2,"handleCancelBackGesture":_flaxMemberParameters2,"handleStatusBarTap":_flaxMemberParameters2,"didPushRoute":_flaxMemberParameters27,"didPushRouteInformation":_flaxMemberParameters28,"didChangeMetrics":_flaxMemberParameters2,"didChangeTextScaleFactor":_flaxMemberParameters2,"didChangePlatformBrightness":_flaxMemberParameters2,"didChangeLocales":_flaxMemberParameters29,"didChangeAppLifecycleState":_flaxMemberParameters30,"didChangeViewFocus":_flaxMemberParameters31,"didRequestAppExit":_flaxMemberParameters2,"didHaveMemoryPressure":_flaxMemberParameters2,"didChangeAccessibilityFeatures":_flaxMemberParameters2,"update":_flaxMemberParameters2}, getters: ["value","hasListeners"], setters: ["value"], contextMembers: [], superMembers: ["get:value","get:hasListeners","set:value","toString","addListener","removeListener","dispose","didPopRoute","handleStartBackGesture","handleUpdateBackGestureProgress","handleCommitBackGesture","handleCancelBackGesture","handleStatusBarTap","didPushRoute","didPushRouteInformation","didChangeMetrics","didChangeTextScaleFactor","didChangePlatformBrightness","didChangeLocales","didChangeAppLifecycleState","didChangeViewFocus","didRequestAppExit","didHaveMemoryPressure","didChangeAccessibilityFeatures","update"]} as const;
export interface _ClipboardStatusNotifierNative extends ClipboardStatusNotifier {
readonly [_flaxDartTypeValue]: _ClipboardStatusNotifierNative;

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
get value(): upstream1.ClipboardStatus;
get hasListeners(): boolean;
set value(value: upstream1.ClipboardStatus);
}
export abstract class _ClipboardStatusNotifierNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ClipboardStatusNotifier>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ClipboardStatusNotifier;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ClipboardStatusNotifier", readonly [], false];
constructor(options?: {value?: upstream1.ClipboardStatus | undefined}) { super(_ClipboardStatusNotifierProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ClipboardStatusNotifierNative.prototype, _ClipboardStatusNotifierProxy);
export namespace _ClipboardStatusNotifierFactory { export function implement(args: [options?: {value?: upstream1.ClipboardStatus | undefined}], implementation: {}): ClipboardStatusNotifier {
return constructProxy(_ClipboardStatusNotifierProxy, args, implementation) as ClipboardStatusNotifier; } }
const _ClipboardStatusNotifierBinding = _flaxProxyFactory(_ClipboardStatusNotifierFactory, _ClipboardStatusNotifierNative) as unknown as typeof _ClipboardStatusNotifierFactory & (new(options?: {value?: upstream1.ClipboardStatus | undefined}) => _ClipboardStatusNotifierNative);
export const ClipboardStatusNotifier: typeof _ClipboardStatusNotifierBinding & _FlaxInstanceType<ClipboardStatusNotifier> & _FlaxDartType<ClipboardStatusNotifier, readonly ["class", "flax.core/sdk_widgets#type:ClipboardStatusNotifier", readonly [], false]> = _flaxBindInstanceType<ClipboardStatusNotifier, typeof _ClipboardStatusNotifierBinding>(_ClipboardStatusNotifierBinding, "flax.core/sdk_widgets#type:ClipboardStatusNotifier", ["flax.core/sdk_foundation#type:ValueNotifier","flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable","flax.core/flutter#type:ValueListenable","flax.core/sdk_widgets#type:WidgetsBindingObserver"]) as typeof _ClipboardStatusNotifierBinding & _FlaxInstanceType<ClipboardStatusNotifier> & _FlaxDartType<ClipboardStatusNotifier, readonly ["class", "flax.core/sdk_widgets#type:ClipboardStatusNotifier", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "hasListeners" | "toString" | "addListener" | "removeListener" | "dispose" | "didPopRoute" | "handleStartBackGesture" | "handleUpdateBackGestureProgress" | "handleCommitBackGesture" | "handleCancelBackGesture" | "handleStatusBarTap" | "didPushRoute" | "didPushRouteInformation" | "didChangeMetrics" | "didChangeTextScaleFactor" | "didChangePlatformBrightness" | "didChangeLocales" | "didChangeAppLifecycleState" | "didChangeViewFocus" | "didRequestAppExit" | "didHaveMemoryPressure" | "didChangeAccessibilityFeatures" | "update" | "__flaxBound:package:flutter/src/widgets/text_selection.dart::ClipboardStatusNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable" | "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver";

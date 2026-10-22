// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsBindingObserver';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsBindingObserver';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsBinding';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsBinding';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_AppExitResponse';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AppExitResponse';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_AppLifecycleState';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AppLifecycleState';
import type * as upstream5 from '@flax/flutter/services/_bindings/sdk_services_PredictiveBackEvent';
import '@flax/flutter/services/_bindings/sdk_services_PredictiveBackEvent';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformation';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformation';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_ViewFocusEvent';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ViewFocusEvent';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters2, _flaxMemberParameters26, _flaxMemberParameters27, _flaxMemberParameters28, _flaxMemberParameters29, _flaxMemberParameters30, _flaxMemberParameters31, _flaxMemberParameters32, _flaxMemberParameters9, _flaxMemberParameters8, _flaxMemberParameters5 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AppLifecycleListener extends Omit<upstream0.WidgetsBindingObserver, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.WidgetsBindingObserver>, Readonly<{ "__flaxBound:package:flutter/src/widgets/app_lifecycle_listener.dart::AppLifecycleListener": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __AppLifecycleListener: unique symbol;
readonly [_flaxDartTypeValue]: AppLifecycleListener;

readonly binding: upstream2.WidgetsBinding;
readonly onStateChange: ((value: upstream4.AppLifecycleState) => void) | null;
readonly onInactive: (() => void) | null;
readonly onResume: (() => void) | null;
readonly onHide: (() => void) | null;
readonly onShow: (() => void) | null;
readonly onPause: (() => void) | null;
readonly onRestart: (() => void) | null;
readonly onExitRequested: (() => Promise<upstream3.AppExitResponse>) | null;
readonly onDetach: (() => void) | null;
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
didChangeLocales(locales: DartListInput<upstream7.Locale, Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }>> | null): void;
didChangeAppLifecycleState(state: upstream4.AppLifecycleState): void;
didChangeViewFocus(event: Readonly<{ "__flaxBound:dart:ui::ViewFocusEvent": readonly [] }>): void;
didRequestAppExit(): Promise<upstream3.AppExitResponse>;
didHaveMemoryPressure(): void;
didChangeAccessibilityFeatures(): void;
toStringShort(): string;
toString(options?: {minLevel?: upstream9.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream11.DiagnosticsTreeStyle | null | undefined}): upstream10.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
dispose(): void;
}
defineObject("flax.core/sdk_widgets#type:AppLifecycleListener", ["binding","onStateChange","onInactive","onResume","onHide","onShow","onPause","onRestart","onExitRequested","onDetach"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:AppLifecycleListener", "object", {"didPopRoute":_flaxMemberParameters2,"handleStartBackGesture":_flaxMemberParameters26,"handleUpdateBackGestureProgress":_flaxMemberParameters26,"handleCommitBackGesture":_flaxMemberParameters2,"handleCancelBackGesture":_flaxMemberParameters2,"handleStatusBarTap":_flaxMemberParameters2,"didPushRoute":_flaxMemberParameters27,"didPushRouteInformation":_flaxMemberParameters28,"didChangeMetrics":_flaxMemberParameters2,"didChangeTextScaleFactor":_flaxMemberParameters2,"didChangePlatformBrightness":_flaxMemberParameters2,"didChangeLocales":_flaxMemberParameters29,"didChangeAppLifecycleState":_flaxMemberParameters30,"didChangeViewFocus":_flaxMemberParameters31,"didRequestAppExit":_flaxMemberParameters2,"didHaveMemoryPressure":_flaxMemberParameters2,"didChangeAccessibilityFeatures":_flaxMemberParameters2,"dispose":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _AppLifecycleListenerFactory(options: { binding?: Readonly<{ "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBinding": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/binding.dart::BindingBase": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/binding.dart::ServicesBinding": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/scheduler/binding.dart::SchedulerBinding": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/binding.dart::GestureBinding": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestDispatcher": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/binding.dart::RendererBinding": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/semantics/binding.dart::SemanticsBinding": readonly [] }> | null | undefined; onResume?: (() => void) | null | undefined; onInactive?: (() => void) | null | undefined; onHide?: (() => void) | null | undefined; onShow?: (() => void) | null | undefined; onPause?: (() => void) | null | undefined; onRestart?: (() => void) | null | undefined; onDetach?: (() => void) | null | undefined; onExitRequested?: (() => Promise<upstream3.AppExitResponse>) | null | undefined; onStateChange?: ((value: upstream4.AppLifecycleState) => void) | null | undefined } = {}): AppLifecycleListener {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:AppLifecycleListener", "", [{"name":"binding"},{"name":"onResume"},{"name":"onInactive"},{"name":"onHide"},{"name":"onShow"},{"name":"onPause"},{"name":"onRestart"},{"name":"onDetach"},{"name":"onExitRequested"},{"name":"onStateChange"}], [], options) as AppLifecycleListener;
}
const _AppLifecycleListenerProxy = {type: "flax.core/sdk_widgets#type:AppLifecycleListener", parameters: _flaxMemberParameters32, constructors: {"": _flaxMemberParameters32}, methods: {"didPopRoute":_flaxMemberParameters2,"handleStartBackGesture":_flaxMemberParameters26,"handleUpdateBackGestureProgress":_flaxMemberParameters26,"handleCommitBackGesture":_flaxMemberParameters2,"handleCancelBackGesture":_flaxMemberParameters2,"handleStatusBarTap":_flaxMemberParameters2,"didPushRoute":_flaxMemberParameters27,"didPushRouteInformation":_flaxMemberParameters28,"didChangeMetrics":_flaxMemberParameters2,"didChangeTextScaleFactor":_flaxMemberParameters2,"didChangePlatformBrightness":_flaxMemberParameters2,"didChangeLocales":_flaxMemberParameters29,"didChangeAppLifecycleState":_flaxMemberParameters30,"didChangeViewFocus":_flaxMemberParameters31,"didRequestAppExit":_flaxMemberParameters2,"didHaveMemoryPressure":_flaxMemberParameters2,"didChangeAccessibilityFeatures":_flaxMemberParameters2,"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters9,"toDiagnosticsNode":_flaxMemberParameters8,"debugFillProperties":_flaxMemberParameters5,"dispose":_flaxMemberParameters2}, getters: ["binding","onStateChange","onInactive","onResume","onHide","onShow","onPause","onRestart","onExitRequested","onDetach"], setters: [], contextMembers: [], superMembers: ["get:binding","get:onStateChange","get:onInactive","get:onResume","get:onHide","get:onShow","get:onPause","get:onRestart","get:onExitRequested","get:onDetach","didPopRoute","handleStartBackGesture","handleUpdateBackGestureProgress","handleCommitBackGesture","handleCancelBackGesture","handleStatusBarTap","didPushRoute","didPushRouteInformation","didChangeMetrics","didChangeTextScaleFactor","didChangePlatformBrightness","didChangeLocales","didChangeAppLifecycleState","didChangeViewFocus","didRequestAppExit","didHaveMemoryPressure","didChangeAccessibilityFeatures","toStringShort","toString","toDiagnosticsNode","debugFillProperties","dispose"]} as const;
export interface _AppLifecycleListenerNative extends AppLifecycleListener {
readonly [_flaxDartTypeValue]: _AppLifecycleListenerNative;

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
didChangeLocales(locales: DartListInput<upstream7.Locale, Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }>> | null): void;
didChangeAppLifecycleState(state: upstream4.AppLifecycleState): void;
didChangeViewFocus(event: Readonly<{ "__flaxBound:dart:ui::ViewFocusEvent": readonly [] }>): void;
didRequestAppExit(): Promise<upstream3.AppExitResponse>;
didHaveMemoryPressure(): void;
didChangeAccessibilityFeatures(): void;
toStringShort(): string;
toString(options?: {minLevel?: upstream9.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream11.DiagnosticsTreeStyle | null | undefined}): upstream10.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
dispose(): void;
get binding(): upstream2.WidgetsBinding;
get onStateChange(): ((value: upstream4.AppLifecycleState) => void) | null;
get onInactive(): (() => void) | null;
get onResume(): (() => void) | null;
get onHide(): (() => void) | null;
get onShow(): (() => void) | null;
get onPause(): (() => void) | null;
get onRestart(): (() => void) | null;
get onExitRequested(): (() => Promise<upstream3.AppExitResponse>) | null;
get onDetach(): (() => void) | null;
}
export abstract class _AppLifecycleListenerNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AppLifecycleListener>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AppLifecycleListener;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:AppLifecycleListener", readonly [], false];
constructor(options?: {binding?: Readonly<{ "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBinding": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/binding.dart::BindingBase": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/binding.dart::ServicesBinding": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/scheduler/binding.dart::SchedulerBinding": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/binding.dart::GestureBinding": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestDispatcher": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/binding.dart::RendererBinding": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/semantics/binding.dart::SemanticsBinding": readonly [] }> | null | undefined; onResume?: (() => void) | null | undefined; onInactive?: (() => void) | null | undefined; onHide?: (() => void) | null | undefined; onShow?: (() => void) | null | undefined; onPause?: (() => void) | null | undefined; onRestart?: (() => void) | null | undefined; onDetach?: (() => void) | null | undefined; onExitRequested?: (() => Promise<upstream3.AppExitResponse>) | null | undefined; onStateChange?: ((value: upstream4.AppLifecycleState) => void) | null | undefined}) { super(_AppLifecycleListenerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_AppLifecycleListenerNative.prototype, _AppLifecycleListenerProxy);
export namespace _AppLifecycleListenerFactory { export function implement(args: [options?: {binding?: Readonly<{ "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBinding": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/binding.dart::BindingBase": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/binding.dart::ServicesBinding": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/scheduler/binding.dart::SchedulerBinding": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/binding.dart::GestureBinding": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestDispatcher": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/binding.dart::RendererBinding": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/semantics/binding.dart::SemanticsBinding": readonly [] }> | null | undefined; onResume?: (() => void) | null | undefined; onInactive?: (() => void) | null | undefined; onHide?: (() => void) | null | undefined; onShow?: (() => void) | null | undefined; onPause?: (() => void) | null | undefined; onRestart?: (() => void) | null | undefined; onDetach?: (() => void) | null | undefined; onExitRequested?: (() => Promise<upstream3.AppExitResponse>) | null | undefined; onStateChange?: ((value: upstream4.AppLifecycleState) => void) | null | undefined}], implementation: {}): AppLifecycleListener {
return constructProxy(_AppLifecycleListenerProxy, args, implementation) as AppLifecycleListener; } }
const _AppLifecycleListenerBinding = _flaxProxyFactory(_AppLifecycleListenerFactory, _AppLifecycleListenerNative) as unknown as typeof _AppLifecycleListenerFactory & (new(options?: {binding?: Readonly<{ "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBinding": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/binding.dart::BindingBase": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/binding.dart::ServicesBinding": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/scheduler/binding.dart::SchedulerBinding": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/binding.dart::GestureBinding": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestDispatcher": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/binding.dart::RendererBinding": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/semantics/binding.dart::SemanticsBinding": readonly [] }> | null | undefined; onResume?: (() => void) | null | undefined; onInactive?: (() => void) | null | undefined; onHide?: (() => void) | null | undefined; onShow?: (() => void) | null | undefined; onPause?: (() => void) | null | undefined; onRestart?: (() => void) | null | undefined; onDetach?: (() => void) | null | undefined; onExitRequested?: (() => Promise<upstream3.AppExitResponse>) | null | undefined; onStateChange?: ((value: upstream4.AppLifecycleState) => void) | null | undefined}) => _AppLifecycleListenerNative);
export const AppLifecycleListener: typeof _AppLifecycleListenerBinding & _FlaxInstanceType<AppLifecycleListener> & _FlaxDartType<AppLifecycleListener, readonly ["class", "flax.core/sdk_widgets#type:AppLifecycleListener", readonly [], false]> = _flaxBindInstanceType<AppLifecycleListener, typeof _AppLifecycleListenerBinding>(_AppLifecycleListenerBinding, "flax.core/sdk_widgets#type:AppLifecycleListener", ["dart:core::Object","flax.core/sdk_widgets#type:WidgetsBindingObserver","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _AppLifecycleListenerBinding & _FlaxInstanceType<AppLifecycleListener> & _FlaxDartType<AppLifecycleListener, readonly ["class", "flax.core/sdk_widgets#type:AppLifecycleListener", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "binding" | "onStateChange" | "onInactive" | "onResume" | "onHide" | "onShow" | "onPause" | "onRestart" | "onExitRequested" | "onDetach" | "didPopRoute" | "handleStartBackGesture" | "handleUpdateBackGestureProgress" | "handleCommitBackGesture" | "handleCancelBackGesture" | "handleStatusBarTap" | "didPushRoute" | "didPushRouteInformation" | "didChangeMetrics" | "didChangeTextScaleFactor" | "didChangePlatformBrightness" | "didChangeLocales" | "didChangeAppLifecycleState" | "didChangeViewFocus" | "didRequestAppExit" | "didHaveMemoryPressure" | "didChangeAccessibilityFeatures" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "dispose" | "__flaxBound:package:flutter/src/widgets/app_lifecycle_listener.dart::AppLifecycleListener" | "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

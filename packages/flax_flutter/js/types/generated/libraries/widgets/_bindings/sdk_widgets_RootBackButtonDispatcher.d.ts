import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_BackButtonDispatcher';
import '@flax/flutter/widgets/_bindings/sdk_widgets_BackButtonDispatcher';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsBindingObserver';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsBindingObserver';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_ChildBackButtonDispatcher';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ChildBackButtonDispatcher';
import '@flax/flutter/services/_bindings/sdk_services_PredictiveBackEvent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformation';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_AppLifecycleState';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AppLifecycleState';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ViewFocusEvent';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_AppExitResponse';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AppExitResponse';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface RootBackButtonDispatcher extends Omit<upstream0.BackButtonDispatcher, _flaxOwnMembers0>, Omit<upstream1.WidgetsBindingObserver, _flaxOwnMembers0 | keyof upstream0.BackButtonDispatcher>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/router.dart::RootBackButtonDispatcher": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [];
}> {
    readonly __RootBackButtonDispatcher: unique symbol;
    readonly [_flaxDartTypeValue]: RootBackButtonDispatcher;
}
export interface RootBackButtonDispatcher {
    readonly [_flaxDartTypeValue]: RootBackButtonDispatcher;
    invokeCallback(defaultValue: Promise<boolean>): Promise<boolean>;
    createChildBackButtonDispatcher(): upstream2.ChildBackButtonDispatcher;
    takePriority(): void;
    deferTo(child: Readonly<{
        "__flaxBound:package:flutter/src/widgets/router.dart::ChildBackButtonDispatcher": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>];
    }>): void;
    forget(child: Readonly<{
        "__flaxBound:package:flutter/src/widgets/router.dart::ChildBackButtonDispatcher": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>];
    }>): void;
    addCallback(callback: (() => Promise<boolean>)): void;
    removeCallback(callback: (() => Promise<boolean>)): void;
    didPopRoute(): Promise<boolean>;
    handleStartBackGesture(backEvent: Readonly<{
        "__flaxBound:package:flutter/src/services/predictive_back_event.dart::PredictiveBackEvent": readonly [];
    }>): boolean;
    handleUpdateBackGestureProgress(backEvent: Readonly<{
        "__flaxBound:package:flutter/src/services/predictive_back_event.dart::PredictiveBackEvent": readonly [];
    }>): void;
    handleCommitBackGesture(): void;
    handleCancelBackGesture(): void;
    handleStatusBarTap(): void;
    didPushRoute(route: string): Promise<boolean>;
    didPushRouteInformation(routeInformation: Readonly<{
        "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformation": readonly [];
    }>): Promise<boolean>;
    didChangeMetrics(): void;
    didChangeTextScaleFactor(): void;
    didChangePlatformBrightness(): void;
    didChangeLocales(locales: DartListInput<upstream5.Locale, Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }>> | null): void;
    didChangeAppLifecycleState(state: upstream6.AppLifecycleState): void;
    didChangeViewFocus(event: Readonly<{
        "__flaxBound:dart:ui::ViewFocusEvent": readonly [];
    }>): void;
    didRequestAppExit(): Promise<upstream8.AppExitResponse>;
    didHaveMemoryPressure(): void;
    didChangeAccessibilityFeatures(): void;
    get hasCallbacks(): boolean;
}
export declare abstract class RootBackButtonDispatcher extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RootBackButtonDispatcher>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RootBackButtonDispatcher;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RootBackButtonDispatcher", readonly [], false];
    constructor();
}
export declare namespace RootBackButtonDispatcher {
    function implement(args: [], implementation: {}): RootBackButtonDispatcher;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasCallbacks" | "invokeCallback" | "createChildBackButtonDispatcher" | "takePriority" | "deferTo" | "forget" | "addCallback" | "removeCallback" | "didPopRoute" | "handleStartBackGesture" | "handleUpdateBackGestureProgress" | "handleCommitBackGesture" | "handleCancelBackGesture" | "handleStatusBarTap" | "didPushRoute" | "didPushRouteInformation" | "didChangeMetrics" | "didChangeTextScaleFactor" | "didChangePlatformBrightness" | "didChangeLocales" | "didChangeAppLifecycleState" | "didChangeViewFocus" | "didRequestAppExit" | "didHaveMemoryPressure" | "didChangeAccessibilityFeatures" | "__flaxBound:package:flutter/src/widgets/router.dart::RootBackButtonDispatcher" | "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher" | "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider" | "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver";
export {};

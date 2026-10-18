import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
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
import '@flax/flutter/services/_bindings/sdk_services_PredictiveBackEvent';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_AppLifecycleState';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AppLifecycleState';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ViewFocusEvent';
import type * as upstream11 from '@flax/dart/ui/_bindings/sdk_dart_ui_AppExitResponse';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AppExitResponse';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface PlatformRouteInformationProvider extends Omit<upstream0.RouteInformationProvider, _flaxOwnMembers0>, Omit<upstream1.ValueListenable<upstream2.RouteInformation>, _flaxOwnMembers0 | keyof upstream0.RouteInformationProvider>, Omit<upstream3.Listenable, _flaxOwnMembers0 | keyof upstream0.RouteInformationProvider | keyof upstream1.ValueListenable<upstream2.RouteInformation>>, Omit<upstream4.WidgetsBindingObserver, _flaxOwnMembers0 | keyof upstream0.RouteInformationProvider | keyof upstream1.ValueListenable<upstream2.RouteInformation> | keyof upstream3.Listenable>, Omit<upstream5.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.RouteInformationProvider | keyof upstream1.ValueListenable<upstream2.RouteInformation> | keyof upstream3.Listenable | keyof upstream4.WidgetsBindingObserver>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/router.dart::PlatformRouteInformationProvider": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformationProvider": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream2.RouteInformation];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}> {
    readonly __PlatformRouteInformationProvider: unique symbol;
    readonly [_flaxDartTypeValue]: PlatformRouteInformationProvider;
}
export interface PlatformRouteInformationProvider {
    readonly [_flaxDartTypeValue]: PlatformRouteInformationProvider;
    routerReportsNewRouteInformation(routeInformation: Readonly<{
        "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformation": readonly [];
    }>, options?: {
        type?: upstream6.RouteInformationReportingType | undefined;
    }): void;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
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
    didChangeLocales(locales: DartListInput<upstream8.Locale, Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }>> | null): void;
    didChangeAppLifecycleState(state: upstream9.AppLifecycleState): void;
    didChangeViewFocus(event: Readonly<{
        "__flaxBound:dart:ui::ViewFocusEvent": readonly [];
    }>): void;
    didRequestAppExit(): Promise<upstream11.AppExitResponse>;
    didHaveMemoryPressure(): void;
    didChangeAccessibilityFeatures(): void;
    dispose(): void;
    get value(): upstream2.RouteInformation;
    get hasListeners(): boolean;
}
export declare abstract class PlatformRouteInformationProvider extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PlatformRouteInformationProvider>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PlatformRouteInformationProvider;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:PlatformRouteInformationProvider", readonly [], false];
    constructor(options: {
        initialRouteInformation: Readonly<{
            "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformation": readonly [];
        }>;
    });
}
export declare namespace PlatformRouteInformationProvider {
    function implement(args: [options: {
        initialRouteInformation: Readonly<{
            "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformation": readonly [];
        }>;
    }], implementation: {}): PlatformRouteInformationProvider;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "hasListeners" | "routerReportsNewRouteInformation" | "addListener" | "removeListener" | "didPopRoute" | "handleStartBackGesture" | "handleUpdateBackGestureProgress" | "handleCommitBackGesture" | "handleCancelBackGesture" | "handleStatusBarTap" | "didPushRoute" | "didPushRouteInformation" | "didChangeMetrics" | "didChangeTextScaleFactor" | "didChangePlatformBrightness" | "didChangeLocales" | "didChangeAppLifecycleState" | "didChangeViewFocus" | "didRequestAppExit" | "didHaveMemoryPressure" | "didChangeAccessibilityFeatures" | "dispose" | "__flaxBound:package:flutter/src/widgets/router.dart::PlatformRouteInformationProvider" | "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformationProvider" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier";
export {};

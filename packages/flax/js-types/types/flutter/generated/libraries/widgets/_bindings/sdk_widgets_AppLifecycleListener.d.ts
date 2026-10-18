import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
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
import '@flax/flutter/services/_bindings/sdk_services_PredictiveBackEvent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformation';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ViewFocusEvent';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface AppLifecycleListener extends Omit<upstream0.WidgetsBindingObserver, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.WidgetsBindingObserver>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/app_lifecycle_listener.dart::AppLifecycleListener": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __AppLifecycleListener: unique symbol;
    readonly [_flaxDartTypeValue]: AppLifecycleListener;
}
export interface AppLifecycleListener {
    readonly [_flaxDartTypeValue]: AppLifecycleListener;
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
    didChangeLocales(locales: DartListInput<upstream7.Locale, Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }>> | null): void;
    didChangeAppLifecycleState(state: upstream4.AppLifecycleState): void;
    didChangeViewFocus(event: Readonly<{
        "__flaxBound:dart:ui::ViewFocusEvent": readonly [];
    }>): void;
    didRequestAppExit(): Promise<upstream3.AppExitResponse>;
    didHaveMemoryPressure(): void;
    didChangeAccessibilityFeatures(): void;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream9.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream11.DiagnosticsTreeStyle | null | undefined;
    }): upstream10.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
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
export declare abstract class AppLifecycleListener extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AppLifecycleListener>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: AppLifecycleListener;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:AppLifecycleListener", readonly [], false];
    constructor(options?: {
        binding?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBinding": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/binding.dart::BindingBase": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/services/binding.dart::ServicesBinding": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/scheduler/binding.dart::SchedulerBinding": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/binding.dart::GestureBinding": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestDispatcher": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/binding.dart::RendererBinding": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/semantics/binding.dart::SemanticsBinding": readonly [];
        }>) | null | undefined;
        onResume?: (() => void) | null | undefined;
        onInactive?: (() => void) | null | undefined;
        onHide?: (() => void) | null | undefined;
        onShow?: (() => void) | null | undefined;
        onPause?: (() => void) | null | undefined;
        onRestart?: (() => void) | null | undefined;
        onDetach?: (() => void) | null | undefined;
        onExitRequested?: (() => Promise<upstream3.AppExitResponse>) | null | undefined;
        onStateChange?: ((value: upstream4.AppLifecycleState) => void) | null | undefined;
    });
}
export declare namespace AppLifecycleListener {
    function implement(args: [options?: {
        binding?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBinding": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/binding.dart::BindingBase": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/services/binding.dart::ServicesBinding": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/scheduler/binding.dart::SchedulerBinding": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/binding.dart::GestureBinding": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestDispatcher": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/binding.dart::RendererBinding": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/semantics/binding.dart::SemanticsBinding": readonly [];
        }>) | null | undefined;
        onResume?: (() => void) | null | undefined;
        onInactive?: (() => void) | null | undefined;
        onHide?: (() => void) | null | undefined;
        onShow?: (() => void) | null | undefined;
        onPause?: (() => void) | null | undefined;
        onRestart?: (() => void) | null | undefined;
        onDetach?: (() => void) | null | undefined;
        onExitRequested?: (() => Promise<upstream3.AppExitResponse>) | null | undefined;
        onStateChange?: ((value: upstream4.AppLifecycleState) => void) | null | undefined;
    }], implementation: {}): AppLifecycleListener;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "binding" | "onStateChange" | "onInactive" | "onResume" | "onHide" | "onShow" | "onPause" | "onRestart" | "onExitRequested" | "onDetach" | "didPopRoute" | "handleStartBackGesture" | "handleUpdateBackGestureProgress" | "handleCommitBackGesture" | "handleCancelBackGesture" | "handleStatusBarTap" | "didPushRoute" | "didPushRouteInformation" | "didChangeMetrics" | "didChangeTextScaleFactor" | "didChangePlatformBrightness" | "didChangeLocales" | "didChangeAppLifecycleState" | "didChangeViewFocus" | "didRequestAppExit" | "didHaveMemoryPressure" | "didChangeAccessibilityFeatures" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "dispose" | "__flaxBound:package:flutter/src/widgets/app_lifecycle_listener.dart::AppLifecycleListener" | "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

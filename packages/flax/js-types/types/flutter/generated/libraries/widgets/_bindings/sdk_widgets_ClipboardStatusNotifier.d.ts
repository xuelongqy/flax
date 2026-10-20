import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
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
import '@flax/flutter/services/_bindings/sdk_services_PredictiveBackEvent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformation';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_AppLifecycleState';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AppLifecycleState';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ViewFocusEvent';
import type * as upstream11 from '@flax/dart/ui/_bindings/sdk_dart_ui_AppExitResponse';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AppExitResponse';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ClipboardStatusNotifier extends Omit<upstream0.ValueNotifier<upstream1.ClipboardStatus>, _flaxOwnMembers0>, Omit<upstream2.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<upstream1.ClipboardStatus>>, Omit<upstream3.Listenable, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<upstream1.ClipboardStatus> | keyof upstream2.ChangeNotifier>, Omit<upstream4.ValueListenable<upstream1.ClipboardStatus>, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<upstream1.ClipboardStatus> | keyof upstream2.ChangeNotifier | keyof upstream3.Listenable>, Omit<upstream5.WidgetsBindingObserver, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<upstream1.ClipboardStatus> | keyof upstream2.ChangeNotifier | keyof upstream3.Listenable | keyof upstream4.ValueListenable<upstream1.ClipboardStatus>>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/text_selection.dart::ClipboardStatusNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream1.ClipboardStatus];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream1.ClipboardStatus];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [];
}> {
    readonly __ClipboardStatusNotifier: unique symbol;
    readonly [_flaxDartTypeValue]: ClipboardStatusNotifier;
    get value(): upstream1.ClipboardStatus;
    readonly hasListeners: boolean;
    toString(): string;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
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
    update(): Promise<void>;
    set value(value: upstream1.ClipboardStatus);
}
export declare function _ClipboardStatusNotifierFactory(options?: {
    value?: upstream1.ClipboardStatus | undefined;
}): ClipboardStatusNotifier;
export interface _ClipboardStatusNotifierNative extends ClipboardStatusNotifier {
    readonly [_flaxDartTypeValue]: _ClipboardStatusNotifierNative;
    toString(): string;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
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
    update(): Promise<void>;
    get value(): upstream1.ClipboardStatus;
    get hasListeners(): boolean;
    set value(value: upstream1.ClipboardStatus);
}
export declare abstract class _ClipboardStatusNotifierNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ClipboardStatusNotifier>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ClipboardStatusNotifier;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ClipboardStatusNotifier", readonly [], false];
    constructor(options?: {
        value?: upstream1.ClipboardStatus | undefined;
    });
}
export declare namespace _ClipboardStatusNotifierFactory {
    function implement(args: [options?: {
        value?: upstream1.ClipboardStatus | undefined;
    }], implementation: {}): ClipboardStatusNotifier;
}
declare const _ClipboardStatusNotifierBinding: typeof _ClipboardStatusNotifierFactory & (new (options?: {
    value?: upstream1.ClipboardStatus | undefined;
}) => _ClipboardStatusNotifierNative);
export declare const ClipboardStatusNotifier: typeof _ClipboardStatusNotifierBinding & _FlaxInstanceType<ClipboardStatusNotifier> & _FlaxDartType<ClipboardStatusNotifier, readonly ["class", "flax.core/sdk_widgets#type:ClipboardStatusNotifier", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "hasListeners" | "toString" | "addListener" | "removeListener" | "dispose" | "didPopRoute" | "handleStartBackGesture" | "handleUpdateBackGestureProgress" | "handleCommitBackGesture" | "handleCancelBackGesture" | "handleStatusBarTap" | "didPushRoute" | "didPushRouteInformation" | "didChangeMetrics" | "didChangeTextScaleFactor" | "didChangePlatformBrightness" | "didChangeLocales" | "didChangeAppLifecycleState" | "didChangeViewFocus" | "didRequestAppExit" | "didHaveMemoryPressure" | "didChangeAccessibilityFeatures" | "update" | "__flaxBound:package:flutter/src/widgets/text_selection.dart::ClipboardStatusNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable" | "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver";
export {};

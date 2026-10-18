import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartIterableInput, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsBindingObserver';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsBindingObserver';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_LocalizationsDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LocalizationsDelegate';
import '@flax/flutter/services/_bindings/sdk_services_PredictiveBackEvent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformation';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_AppLifecycleState';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AppLifecycleState';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ViewFocusEvent';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_AppExitResponse';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AppExitResponse';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface LocalizationsResolver extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Omit<upstream2.WidgetsBindingObserver, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier | keyof upstream1.Listenable>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/localizations.dart::LocalizationsResolver": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [];
}> {
    readonly __LocalizationsResolver: unique symbol;
    readonly [_flaxDartTypeValue]: LocalizationsResolver;
}
export interface LocalizationsResolver {
    readonly [_flaxDartTypeValue]: LocalizationsResolver;
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
    didChangeLocales(locales: DartListInput<upstream3.Locale, Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }>> | null): void;
    didChangeAppLifecycleState(state: upstream7.AppLifecycleState): void;
    didChangeViewFocus(event: Readonly<{
        "__flaxBound:dart:ui::ViewFocusEvent": readonly [];
    }>): void;
    didRequestAppExit(): Promise<upstream9.AppExitResponse>;
    didHaveMemoryPressure(): void;
    didChangeAccessibilityFeatures(): void;
    update(options: {
        locale: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null;
        localeListResolutionCallback: ((locales: DartList<upstream3.Locale> | null, supportedLocales: DartIterable<upstream3.Locale>) => Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null) | null;
        localeResolutionCallback: ((locale: upstream3.Locale | null, supportedLocales: DartIterable<upstream3.Locale>) => Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null) | null;
        localizationsDelegates: DartIterableInput<upstream4.LocalizationsDelegate<unknown | null>, Readonly<{
            "__flaxBound:package:flutter/src/widgets/localizations.dart::LocalizationsDelegate": readonly [unknown | null];
        }>> | null;
        supportedLocales: DartIterableInput<upstream3.Locale, Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }>>;
    }): void;
    toString(): string;
    get locale(): upstream3.Locale;
    get localizationsDelegates(): DartIterable<upstream4.LocalizationsDelegate<unknown | null>>;
    get localeListResolutionCallback(): ((locales: DartListInput<upstream3.Locale, Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }>> | null, supportedLocales: DartIterableInput<upstream3.Locale, Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }>>) => upstream3.Locale | null) | null;
    get localeResolutionCallback(): ((locale: Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }> | null, supportedLocales: DartIterableInput<upstream3.Locale, Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }>>) => upstream3.Locale | null) | null;
    get supportedLocales(): DartIterable<upstream3.Locale>;
    get hasListeners(): boolean;
}
export declare abstract class LocalizationsResolver extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LocalizationsResolver>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: LocalizationsResolver;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:LocalizationsResolver", readonly [], false];
    constructor(options: {
        supportedLocales: DartIterableInput<upstream3.Locale, Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }>>;
        locale?: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null | undefined;
        localeListResolutionCallback?: ((locales: DartList<upstream3.Locale> | null, supportedLocales: DartIterable<upstream3.Locale>) => Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null) | null | undefined;
        localeResolutionCallback?: ((locale: upstream3.Locale | null, supportedLocales: DartIterable<upstream3.Locale>) => Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null) | null | undefined;
        localizationsDelegates?: DartIterableInput<upstream4.LocalizationsDelegate<unknown | null>, Readonly<{
            "__flaxBound:package:flutter/src/widgets/localizations.dart::LocalizationsDelegate": readonly [unknown | null];
        }>> | null | undefined;
    });
}
export declare namespace LocalizationsResolver {
    function implement(args: [options: {
        supportedLocales: DartIterableInput<upstream3.Locale, Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }>>;
        locale?: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null | undefined;
        localeListResolutionCallback?: ((locales: DartList<upstream3.Locale> | null, supportedLocales: DartIterable<upstream3.Locale>) => Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null) | null | undefined;
        localeResolutionCallback?: ((locale: upstream3.Locale | null, supportedLocales: DartIterable<upstream3.Locale>) => Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null) | null | undefined;
        localizationsDelegates?: DartIterableInput<upstream4.LocalizationsDelegate<unknown | null>, Readonly<{
            "__flaxBound:package:flutter/src/widgets/localizations.dart::LocalizationsDelegate": readonly [unknown | null];
        }>> | null | undefined;
    }], implementation: {}): LocalizationsResolver;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "locale" | "localizationsDelegates" | "localeListResolutionCallback" | "localeResolutionCallback" | "supportedLocales" | "addListener" | "removeListener" | "dispose" | "didPopRoute" | "handleStartBackGesture" | "handleUpdateBackGestureProgress" | "handleCommitBackGesture" | "handleCancelBackGesture" | "handleStatusBarTap" | "didPushRoute" | "didPushRouteInformation" | "didChangeMetrics" | "didChangeTextScaleFactor" | "didChangePlatformBrightness" | "didChangeLocales" | "didChangeAppLifecycleState" | "didChangeViewFocus" | "didRequestAppExit" | "didHaveMemoryPressure" | "didChangeAccessibilityFeatures" | "update" | "toString" | "__flaxBound:package:flutter/src/widgets/localizations.dart::LocalizationsResolver" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver";
export {};

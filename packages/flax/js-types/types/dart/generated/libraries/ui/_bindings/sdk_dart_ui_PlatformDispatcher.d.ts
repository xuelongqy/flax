import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Display';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Display';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_FlutterView';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FlutterView';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_ViewFocusEvent';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ViewFocusEvent';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDataPacket';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDataPacket';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_KeyData';
import '@flax/dart/ui/_bindings/sdk_dart_ui_KeyData';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_FrameTiming';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FrameTiming';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_AccessibilityFeatures';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AccessibilityFeatures';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import type * as upstream10 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsActionEvent';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsActionEvent';
import type * as upstream11 from '@flax/dart/ui/_bindings/sdk_dart_ui_HitTestResponse';
import '@flax/dart/ui/_bindings/sdk_dart_ui_HitTestResponse';
import type * as upstream12 from '@flax/dart/ui/_bindings/sdk_dart_ui_HitTestRequest';
import '@flax/dart/ui/_bindings/sdk_dart_ui_HitTestRequest';
import type * as upstream13 from '@flax/dart/ui/_bindings/sdk_dart_ui_FrameData';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FrameData';
import type * as upstream14 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream15 from '@flax/dart/ui/_bindings/sdk_dart_ui_ViewFocusDirection';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ViewFocusDirection';
import type * as upstream16 from '@flax/dart/ui/_bindings/sdk_dart_ui_ViewFocusState';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ViewFocusState';
import '@flax/dart/isolate/_bindings/sdk_dependencies_SendPort';
import '@flax/dart/ui/_bindings/sdk_dart_ui_RootIsolateToken';
import type * as upstream19 from '@flax/dart/ui/_bindings/sdk_dart_ui_DartPerformanceMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_DartPerformanceMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsUpdate';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PlatformDispatcher extends Readonly<{
    "__flaxBound:dart:ui::PlatformDispatcher": readonly [];
}> {
    readonly __PlatformDispatcher: unique symbol;
    readonly [_flaxDartTypeValue]: PlatformDispatcher;
    get onPlatformConfigurationChanged(): (() => void) | null;
    readonly displays: DartIterable<upstream0.Display>;
    readonly views: DartIterable<upstream1.FlutterView>;
    readonly implicitView: upstream1.FlutterView | null;
    get onMetricsChanged(): (() => void) | null;
    readonly engineId: number | null;
    get onViewFocusChange(): ((viewFocusEvent: Readonly<{
        "__flaxBound:dart:ui::ViewFocusEvent": readonly [];
    }>) => void) | null;
    get onBeginFrame(): ((duration: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream3.Duration];
    }>) => void) | null;
    get onDrawFrame(): (() => void) | null;
    get onPointerDataPacket(): ((packet: Readonly<{
        "__flaxBound:dart:ui::PointerDataPacket": readonly [];
    }>) => void) | null;
    get onKeyData(): ((data: Readonly<{
        "__flaxBound:dart:ui::KeyData": readonly [];
    }>) => boolean) | null;
    get onReportTimings(): ((timings: DartListInput<upstream6.FrameTiming, Readonly<{
        "__flaxBound:dart:ui::FrameTiming": readonly [];
    }>>) => void) | null;
    get onPlatformMessage(): ((name: string, data: globalThis.DataView | null, callback: ((data: globalThis.DataView | null) => void) | null) => void) | null;
    readonly accessibilityFeatures: upstream7.AccessibilityFeatures;
    get onAccessibilityFeaturesChanged(): (() => void) | null;
    readonly locale: upstream8.Locale;
    readonly locales: DartList<upstream8.Locale>;
    get onLocaleChanged(): (() => void) | null;
    readonly initialLifecycleState: string;
    readonly alwaysUse24HourFormat: boolean;
    readonly lineHeightScaleFactorOverride: number | null;
    readonly letterSpacingOverride: number | null;
    readonly wordSpacingOverride: number | null;
    readonly paragraphSpacingOverride: number | null;
    readonly textScaleFactor: number;
    get onTextScaleFactorChanged(): (() => void) | null;
    readonly nativeSpellCheckServiceDefined: boolean;
    readonly supportsShowingSystemContextMenu: boolean;
    readonly brieflyShowPassword: boolean;
    readonly platformBrightness: upstream9.Brightness;
    get onPlatformBrightnessChanged(): (() => void) | null;
    readonly systemFontFamily: string | null;
    get onSystemFontFamilyChanged(): (() => void) | null;
    readonly semanticsEnabled: boolean;
    get onSemanticsEnabledChanged(): (() => void) | null;
    get onSemanticsActionEvent(): ((action: Readonly<{
        "__flaxBound:dart:ui::SemanticsActionEvent": readonly [];
    }>) => void) | null;
    get onHitTest(): ((request: Readonly<{
        "__flaxBound:dart:ui::HitTestRequest": readonly [];
    }>) => upstream11.HitTestResponse) | null;
    readonly frameData: upstream13.FrameData;
    get onFrameDataChanged(): (() => void) | null;
    get onError(): ((exception: {}, stackTrace: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }>) => boolean) | null;
    readonly defaultRouteName: string;
    view(options: {
        id: number;
    }): upstream1.FlutterView | null;
    requestViewFocusChange(options: {
        direction: upstream15.ViewFocusDirection;
        state: upstream16.ViewFocusState;
        viewId: number;
    }): void;
    sendPlatformMessage(name: string, data: globalThis.DataView | null, callback: ((data: globalThis.DataView | null) => void) | null): void;
    sendPortPlatformMessage(name: string, data: globalThis.DataView | null, identifier: number, port: Readonly<{
        "__flaxBound:dart:isolate::SendPort": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:isolate::Capability": readonly [];
    }>): void;
    registerBackgroundIsolate(token: Readonly<{
        "__flaxBound:dart:ui::RootIsolateToken": readonly [];
    }>): void;
    setSemanticsTreeEnabled(enabled: boolean): void;
    setIsolateDebugName(name: string): void;
    requestDartPerformanceMode(mode: upstream19.DartPerformanceMode): void;
    getPersistentIsolateData(): globalThis.DataView | null;
    scheduleFrame(): void;
    scheduleWarmUpFrame(options: {
        beginFrame: (() => void);
        drawFrame: (() => void);
    }): void;
    updateSemantics(update: Readonly<{
        "__flaxBound:dart:ui::SemanticsUpdate": readonly [];
    }>): void;
    setApplicationLocale(locale: Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }>): void;
    computePlatformResolvedLocale(supportedLocales: DartListInput<upstream8.Locale, Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }>>): upstream8.Locale | null;
    scaleFontSize(unscaledFontSize: number): number;
    set onPlatformConfigurationChanged(value: (() => void) | null);
    set onMetricsChanged(value: (() => void) | null);
    set onViewFocusChange(value: ((viewFocusEvent: upstream2.ViewFocusEvent) => void) | null);
    set onBeginFrame(value: ((duration: upstream3.Duration) => void) | null);
    set onDrawFrame(value: (() => void) | null);
    set onPointerDataPacket(value: ((packet: upstream4.PointerDataPacket) => void) | null);
    set onKeyData(value: ((data: upstream5.KeyData) => boolean) | null);
    set onReportTimings(value: ((timings: DartList<upstream6.FrameTiming>) => void) | null);
    set onPlatformMessage(value: ((name: string, data: globalThis.DataView | null, callback: ((data: globalThis.DataView | null) => void) | null) => void) | null);
    set onAccessibilityFeaturesChanged(value: (() => void) | null);
    set onLocaleChanged(value: (() => void) | null);
    set onTextScaleFactorChanged(value: (() => void) | null);
    set onPlatformBrightnessChanged(value: (() => void) | null);
    set onSystemFontFamilyChanged(value: (() => void) | null);
    set onSemanticsEnabledChanged(value: (() => void) | null);
    set onSemanticsActionEvent(value: ((action: upstream10.SemanticsActionEvent) => void) | null);
    set onHitTest(value: ((request: upstream12.HitTestRequest) => Readonly<{
        "__flaxBound:dart:ui::HitTestResponse": readonly [];
    }>) | null);
    set onFrameDataChanged(value: (() => void) | null);
    set onError(value: ((exception: {}, stackTrace: upstream14.StackTrace) => boolean) | null);
}
declare const _PlatformDispatcherFactory: {
    readonly instance: PlatformDispatcher;
};
export declare const PlatformDispatcher: typeof _PlatformDispatcherFactory & _FlaxInstanceType<PlatformDispatcher> & _FlaxDartType<PlatformDispatcher, readonly ["class", "flax.core/sdk_dart_ui#type:PlatformDispatcher", readonly [], false]>;
export {};

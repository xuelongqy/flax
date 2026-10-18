import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_FlutterView';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FlutterView';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_PlatformDispatcher';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PlatformDispatcher';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Display';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Display';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_ViewConstraints';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ViewConstraints';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_ViewPadding';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ViewPadding';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_GestureSettings';
import '@flax/dart/ui/_bindings/sdk_dart_ui_GestureSettings';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_DisplayFeature';
import '@flax/dart/ui/_bindings/sdk_dart_ui_DisplayFeature';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_DisplayCornerRadii';
import '@flax/dart/ui/_bindings/sdk_dart_ui_DisplayCornerRadii';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import type * as upstream10 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import type * as upstream11 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream12 from '@flax/dart/ui/_bindings/sdk_dart_ui_FrameTiming';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FrameTiming';
import type * as upstream13 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDataPacket';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDataPacket';
import type * as upstream14 from '@flax/dart/ui/_bindings/sdk_dart_ui_KeyData';
import '@flax/dart/ui/_bindings/sdk_dart_ui_KeyData';
import type * as upstream15 from '@flax/dart/ui/_bindings/sdk_dart_ui_FrameData';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FrameData';
import type * as upstream16 from '@flax/dart/ui/_bindings/sdk_dart_ui_AccessibilityFeatures';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AccessibilityFeatures';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Scene';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsUpdate';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SingletonFlutterWindow extends Omit<upstream0.FlutterView, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:dart:ui::SingletonFlutterWindow": readonly [];
}>, Readonly<{
    "__flaxBound:dart:ui::FlutterView": readonly [];
}> {
    readonly __SingletonFlutterWindow: unique symbol;
    readonly [_flaxDartTypeValue]: SingletonFlutterWindow;
    readonly viewId: number;
    readonly platformDispatcher: upstream1.PlatformDispatcher;
    readonly display: upstream2.Display;
    readonly devicePixelRatio: number;
    readonly physicalConstraints: upstream3.ViewConstraints;
    readonly physicalSize: upstream4.Size;
    readonly viewInsets: upstream5.ViewPadding;
    readonly viewPadding: upstream5.ViewPadding;
    readonly systemGestureInsets: upstream5.ViewPadding;
    readonly padding: upstream5.ViewPadding;
    readonly gestureSettings: upstream6.GestureSettings;
    readonly displayFeatures: DartList<upstream7.DisplayFeature>;
    readonly displayCornerRadii: upstream8.DisplayCornerRadii | null;
    get onMetricsChanged(): (() => void) | null;
    readonly locale: upstream9.Locale;
    readonly locales: DartList<upstream9.Locale>;
    get onLocaleChanged(): (() => void) | null;
    readonly initialLifecycleState: string;
    readonly textScaleFactor: number;
    readonly nativeSpellCheckServiceDefined: boolean;
    readonly supportsShowingSystemContextMenu: boolean;
    readonly brieflyShowPassword: boolean;
    readonly alwaysUse24HourFormat: boolean;
    get onTextScaleFactorChanged(): (() => void) | null;
    readonly platformBrightness: upstream10.Brightness;
    get onPlatformBrightnessChanged(): (() => void) | null;
    readonly systemFontFamily: string | null;
    get onSystemFontFamilyChanged(): (() => void) | null;
    get onBeginFrame(): ((duration: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream11.Duration];
    }>) => void) | null;
    get onDrawFrame(): (() => void) | null;
    get onReportTimings(): ((timings: DartListInput<upstream12.FrameTiming, Readonly<{
        "__flaxBound:dart:ui::FrameTiming": readonly [];
    }>>) => void) | null;
    get onPointerDataPacket(): ((packet: Readonly<{
        "__flaxBound:dart:ui::PointerDataPacket": readonly [];
    }>) => void) | null;
    get onKeyData(): ((data: Readonly<{
        "__flaxBound:dart:ui::KeyData": readonly [];
    }>) => boolean) | null;
    readonly defaultRouteName: string;
    readonly semanticsEnabled: boolean;
    get onSemanticsEnabledChanged(): (() => void) | null;
    readonly frameData: upstream15.FrameData;
    get onFrameDataChanged(): (() => void) | null;
    readonly accessibilityFeatures: upstream16.AccessibilityFeatures;
    get onAccessibilityFeaturesChanged(): (() => void) | null;
    get onPlatformMessage(): ((name: string, data: globalThis.DataView | null, callback: ((data: globalThis.DataView | null) => void) | null) => void) | null;
    render(scene: Readonly<{
        "__flaxBound:dart:ui::Scene": readonly [];
    }>, options?: {
        size?: (Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
    }): void;
    updateSemantics(update: Readonly<{
        "__flaxBound:dart:ui::SemanticsUpdate": readonly [];
    }>): void;
    toString(): string;
    computePlatformResolvedLocale(supportedLocales: DartListInput<upstream9.Locale, Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }>>): upstream9.Locale | null;
    scheduleFrame(): void;
    sendPlatformMessage(name: string, data: globalThis.DataView | null, callback: ((data: globalThis.DataView | null) => void) | null): void;
    setIsolateDebugName(name: string): void;
    set onMetricsChanged(value: (() => void) | null);
    set onLocaleChanged(value: (() => void) | null);
    set onTextScaleFactorChanged(value: (() => void) | null);
    set onPlatformBrightnessChanged(value: (() => void) | null);
    set onSystemFontFamilyChanged(value: (() => void) | null);
    set onBeginFrame(value: ((duration: upstream11.Duration) => void) | null);
    set onDrawFrame(value: (() => void) | null);
    set onReportTimings(value: ((timings: DartList<upstream12.FrameTiming>) => void) | null);
    set onPointerDataPacket(value: ((packet: upstream13.PointerDataPacket) => void) | null);
    set onKeyData(value: ((data: upstream14.KeyData) => boolean) | null);
    set onSemanticsEnabledChanged(value: (() => void) | null);
    set onFrameDataChanged(value: (() => void) | null);
    set onAccessibilityFeaturesChanged(value: (() => void) | null);
    set onPlatformMessage(value: ((name: string, data: globalThis.DataView | null, callback: ((data: globalThis.DataView | null) => void) | null) => void) | null);
}
export declare const SingletonFlutterWindow: object & _FlaxInstanceType<SingletonFlutterWindow> & _FlaxDartType<SingletonFlutterWindow, readonly ["class", "flax.core/sdk_dart_ui#type:SingletonFlutterWindow", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "viewId" | "platformDispatcher" | "display" | "devicePixelRatio" | "physicalConstraints" | "physicalSize" | "viewInsets" | "viewPadding" | "systemGestureInsets" | "padding" | "gestureSettings" | "displayFeatures" | "displayCornerRadii" | "onMetricsChanged" | "locale" | "locales" | "onLocaleChanged" | "initialLifecycleState" | "textScaleFactor" | "nativeSpellCheckServiceDefined" | "supportsShowingSystemContextMenu" | "brieflyShowPassword" | "alwaysUse24HourFormat" | "onTextScaleFactorChanged" | "platformBrightness" | "onPlatformBrightnessChanged" | "systemFontFamily" | "onSystemFontFamilyChanged" | "onBeginFrame" | "onDrawFrame" | "onReportTimings" | "onPointerDataPacket" | "onKeyData" | "defaultRouteName" | "semanticsEnabled" | "onSemanticsEnabledChanged" | "frameData" | "onFrameDataChanged" | "accessibilityFeatures" | "onAccessibilityFeaturesChanged" | "onPlatformMessage" | "render" | "updateSemantics" | "toString" | "computePlatformResolvedLocale" | "scheduleFrame" | "sendPlatformMessage" | "setIsolateDebugName" | "__flaxBound:dart:ui::SingletonFlutterWindow" | "__flaxBound:dart:ui::FlutterView";
export {};

import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartMap, type DartMapInput, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_BindingBase';
import '@flax/flutter/foundation/_bindings/sdk_foundation_BindingBase';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_ServicesBinding';
import '@flax/flutter/services/_bindings/sdk_services_ServicesBinding';
import type * as upstream2 from '@flax/flutter/scheduler/_bindings/flutter_SchedulerBinding';
import '@flax/flutter/scheduler/_bindings/flutter_SchedulerBinding';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_SingletonFlutterWindow';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SingletonFlutterWindow';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_PlatformDispatcher';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PlatformDispatcher';
import type * as upstream5 from '@flax/flutter/services/_bindings/sdk_services_HardwareKeyboard';
import '@flax/flutter/services/_bindings/sdk_services_HardwareKeyboard';
import type * as upstream6 from '@flax/flutter/services/_bindings/sdk_services_KeyEventManager';
import '@flax/flutter/services/_bindings/sdk_services_KeyEventManager';
import type * as upstream7 from '@flax/flutter/services/_bindings/sdk_services_BinaryMessenger';
import '@flax/flutter/services/_bindings/sdk_services_BinaryMessenger';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_ChannelBuffers_c3l';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ChannelBuffers_c3l';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import type * as upstream10 from '@flax/flutter/services/_bindings/sdk_services_RestorationManager';
import '@flax/flutter/services/_bindings/sdk_services_RestorationManager';
import type * as upstream11 from '@flax/dart/ui/_bindings/sdk_dart_ui_AppLifecycleState';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AppLifecycleState';
import type * as upstream12 from '@flax/flutter/scheduler/_bindings/sdk_scheduler_SchedulerPhase';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_SchedulerPhase';
import type * as upstream13 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream14 from '@flax/flutter/painting/_bindings/sdk_painting_ImageCache_cx';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageCache_cx';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream16 from '@flax/flutter/painting/_bindings/sdk_painting_ShaderWarmUp';
import '@flax/flutter/painting/_bindings/sdk_painting_ShaderWarmUp';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ViewFocusEvent';
import type * as upstream18 from '@flax/dart/ui/_bindings/sdk_dart_ui_AppExitResponse';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AppExitResponse';
import type * as upstream19 from '@flax/dart/ui/_bindings/sdk_dart_ui_AppExitType';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AppExitType';
import type * as upstream20 from '@flax/dart/ui/_bindings/sdk_dart_ui_FrameTiming';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FrameTiming';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_Priority';
import type * as upstream22 from '@flax/flutter/scheduler/_bindings/sdk_scheduler_PerformanceModeRequestHandle';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_PerformanceModeRequestHandle';
import type * as upstream23 from '@flax/dart/ui/_bindings/sdk_dart_ui_DartPerformanceMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_DartPerformanceMode';
import type * as upstream24 from '@flax/dart/ui/_bindings/sdk_dart_ui_Codec';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Codec';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TargetImageSize';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PaintingBinding extends Omit<upstream0.BindingBase, _flaxOwnMembers0>, Omit<upstream1.ServicesBinding, _flaxOwnMembers0 | keyof upstream0.BindingBase>, Omit<upstream2.SchedulerBinding, _flaxOwnMembers0 | keyof upstream0.BindingBase | keyof upstream1.ServicesBinding>, Readonly<{
    "__flaxBound:package:flutter/src/painting/binding.dart::PaintingBinding": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/binding.dart::BindingBase": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/binding.dart::ServicesBinding": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/scheduler/binding.dart::SchedulerBinding": readonly [];
}> {
    readonly __PaintingBinding: unique symbol;
    readonly [_flaxDartTypeValue]: PaintingBinding;
    readonly [_flaxDartMethodCases]?: {
        scheduleTask: _FlaxSignature0;
    };
    readonly window: upstream3.SingletonFlutterWindow;
    readonly platformDispatcher: upstream4.PlatformDispatcher;
    readonly locked: boolean;
    readonly keyboard: upstream5.HardwareKeyboard;
    readonly keyEventManager: upstream6.KeyEventManager;
    readonly defaultBinaryMessenger: upstream7.BinaryMessenger;
    readonly channelBuffers: upstream8.ChannelBuffers;
    readonly accessibilityFocus: upstream9.ValueNotifier<number | null>;
    readonly restorationManager: upstream10.RestorationManager;
    readonly lifecycleState: upstream11.AppLifecycleState | null;
    get schedulingStrategy(): ((options: {
        priority: number;
        scheduler: Readonly<{
            "__flaxBound:package:flutter/src/scheduler/binding.dart::SchedulerBinding": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/binding.dart::BindingBase": readonly [];
        }>;
    }) => boolean);
    readonly transientCallbackCount: number;
    readonly endOfFrame: Promise<void>;
    readonly hasScheduledFrame: boolean;
    readonly schedulerPhase: upstream12.SchedulerPhase;
    readonly framesEnabled: boolean;
    readonly currentFrameTimeStamp: upstream13.Duration;
    readonly currentSystemFrameTimeStamp: upstream13.Duration;
    readonly imageCache: upstream14.ImageCache;
    readonly systemFonts: upstream15.Listenable;
    initInstances(): void;
    debugCheckZone(entryPoint: string): boolean;
    initServiceExtensions(): void;
    lockEvents(callback: (() => Promise<void>)): Promise<void>;
    unlocked(): void;
    reassembleApplication(): Promise<void>;
    performReassemble(): Promise<void>;
    registerSignalServiceExtension(options: {
        callback: (() => Promise<void>);
        name: string;
    }): void;
    registerBoolServiceExtension(options: {
        getter: (() => Promise<boolean>);
        name: string;
        setter: ((value: boolean) => Promise<void>);
    }): void;
    registerNumericServiceExtension(options: {
        getter: (() => Promise<number>);
        name: string;
        setter: ((value: number) => Promise<void>);
    }): void;
    postEvent(eventKind: string, eventData: DartMapInput<string, unknown | null, string, unknown | null>): void;
    registerStringServiceExtension(options: {
        getter: (() => Promise<string>);
        name: string;
        setter: ((value: string) => Promise<void>);
    }): void;
    registerServiceExtension(options: {
        callback: ((parameters: DartMap<string, string>) => Promise<DartMapInput<string, unknown | null, string, unknown | null>>);
        name: string;
    }): void;
    toString(): string;
    createBinaryMessenger(): upstream7.BinaryMessenger;
    handleMemoryPressure(): void;
    handleSystemMessage(systemMessage: {}): Promise<void>;
    initLicenses(): void;
    evict(asset: string): void;
    readInitialLifecycleStateFromNativeWindow(): void;
    handleViewFocusChanged(event: Readonly<{
        "__flaxBound:dart:ui::ViewFocusEvent": readonly [];
    }>): void;
    handleRequestAppExit(): Promise<upstream18.AppExitResponse>;
    exitApplication(exitType: upstream19.AppExitType, exitCode?: number): Promise<upstream18.AppExitResponse>;
    createRestorationManager(): upstream10.RestorationManager;
    setSystemUiChangeCallback(callback: ((systemOverlaysAreVisible: boolean) => Promise<void>) | null): void;
    initializationComplete(): Promise<void>;
    addTimingsCallback(callback: ((timings: DartList<upstream20.FrameTiming>) => void)): void;
    removeTimingsCallback(callback: ((timings: DartList<upstream20.FrameTiming>) => void)): void;
    handleAppLifecycleStateChanged(state: upstream11.AppLifecycleState): void;
    scheduleTask<T extends unknown | null = unknown | null>(task: (() => (T | _FlaxDartOutput<T>) | Promise<(T | _FlaxDartOutput<T>)>), priority: Readonly<{
        "__flaxBound:package:flutter/src/scheduler/priority.dart::Priority": readonly [];
    }>, options?: {
        debugLabel?: string | null | undefined;
    }): Promise<_FlaxDartOutput<T>>;
    scheduleFrameCallback(callback: ((timeStamp: upstream13.Duration) => void), options?: {
        rescheduling?: boolean | undefined;
        scheduleNewFrame?: boolean | undefined;
    }): number;
    cancelFrameCallbackWithId(id: number): void;
    debugAssertNoTransientCallbacks(reason: string): boolean;
    debugAssertNoPendingPerformanceModeRequests(reason: string): boolean;
    debugAssertNoTimeDilation(reason: string): boolean;
    addPersistentFrameCallback(callback: ((timeStamp: upstream13.Duration) => void)): void;
    addPostFrameCallback(callback: ((timeStamp: upstream13.Duration) => void), options?: {
        debugLabel?: string | undefined;
    }): void;
    ensureFrameCallbacksRegistered(): void;
    ensureVisualUpdate(): void;
    scheduleFrame(): void;
    scheduleForcedFrame(): void;
    scheduleWarmUpFrame(): void;
    resetEpoch(): void;
    handleBeginFrame(rawTimeStamp: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream13.Duration];
    }>) | null): void;
    requestPerformanceMode(mode: upstream23.DartPerformanceMode): upstream22.PerformanceModeRequestHandle | null;
    debugGetRequestedPerformanceMode(): upstream23.DartPerformanceMode | null;
    handleDrawFrame(): void;
    createImageCache(): upstream14.ImageCache;
    instantiateImageCodecFromBuffer(buffer: Readonly<{
        "__flaxBound:dart:ui::ImmutableBuffer": readonly [];
    }>, options?: {
        allowUpscaling?: boolean | undefined;
        cacheHeight?: number | null | undefined;
        cacheWidth?: number | null | undefined;
    }): Promise<upstream24.Codec>;
    instantiateImageCodecWithSize(buffer: Readonly<{
        "__flaxBound:dart:ui::ImmutableBuffer": readonly [];
    }>, options?: {
        getTargetSize?: ((intrinsicWidth: number, intrinsicHeight: number) => Readonly<{
            "__flaxBound:dart:ui::TargetImageSize": readonly [];
        }>) | null | undefined;
    }): Promise<upstream24.Codec>;
    set schedulingStrategy(value: ((options: {
        priority: number;
        scheduler: upstream2.SchedulerBinding;
    }) => boolean));
}
export declare namespace _PaintingBindingFactory {
    function setShaderWarmUp(value: Readonly<{
        "__flaxBound:package:flutter/src/painting/shader_warm_up.dart::ShaderWarmUp": readonly [];
    }> | null): void;
}
export declare namespace _PaintingBindingFactory {
    const instance: PaintingBinding;
}
export declare namespace _PaintingBindingFactory {
    const shaderWarmUp: upstream16.ShaderWarmUp | null;
}
export declare const PaintingBinding: typeof _PaintingBindingFactory & _FlaxInstanceType<PaintingBinding> & _FlaxDartType<PaintingBinding, readonly ["class", "flax.core/sdk_painting#type:PaintingBinding", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "window" | "platformDispatcher" | "locked" | "keyboard" | "keyEventManager" | "defaultBinaryMessenger" | "channelBuffers" | "accessibilityFocus" | "restorationManager" | "lifecycleState" | "schedulingStrategy" | "transientCallbackCount" | "endOfFrame" | "hasScheduledFrame" | "schedulerPhase" | "framesEnabled" | "currentFrameTimeStamp" | "currentSystemFrameTimeStamp" | "imageCache" | "systemFonts" | "initInstances" | "debugCheckZone" | "initServiceExtensions" | "lockEvents" | "unlocked" | "reassembleApplication" | "performReassemble" | "registerSignalServiceExtension" | "registerBoolServiceExtension" | "registerNumericServiceExtension" | "postEvent" | "registerStringServiceExtension" | "registerServiceExtension" | "toString" | "createBinaryMessenger" | "handleMemoryPressure" | "handleSystemMessage" | "initLicenses" | "evict" | "readInitialLifecycleStateFromNativeWindow" | "handleViewFocusChanged" | "handleRequestAppExit" | "exitApplication" | "createRestorationManager" | "setSystemUiChangeCallback" | "initializationComplete" | "addTimingsCallback" | "removeTimingsCallback" | "handleAppLifecycleStateChanged" | "scheduleTask" | "scheduleFrameCallback" | "cancelFrameCallbackWithId" | "debugAssertNoTransientCallbacks" | "debugAssertNoPendingPerformanceModeRequests" | "debugAssertNoTimeDilation" | "addPersistentFrameCallback" | "addPostFrameCallback" | "ensureFrameCallbacksRegistered" | "ensureVisualUpdate" | "scheduleFrame" | "scheduleForcedFrame" | "scheduleWarmUpFrame" | "resetEpoch" | "handleBeginFrame" | "requestPerformanceMode" | "debugGetRequestedPerformanceMode" | "handleDrawFrame" | "createImageCache" | "instantiateImageCodecFromBuffer" | "instantiateImageCodecWithSize" | "__flaxBound:package:flutter/src/painting/binding.dart::PaintingBinding" | "__flaxBound:package:flutter/src/foundation/binding.dart::BindingBase" | "__flaxBound:package:flutter/src/services/binding.dart::ServicesBinding" | "__flaxBound:package:flutter/src/scheduler/binding.dart::SchedulerBinding";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (task: (() => (_Selected0 | DartInput<_Selected0>) | Promise<(_Selected0 | DartInput<_Selected0>)>), priority: Readonly<{
        "__flaxBound:package:flutter/src/scheduler/priority.dart::Priority": readonly [];
    }>, options?: {
        debugLabel?: string | null | undefined;
    }) => Promise<_Selected0> : never : never;
}
export {};

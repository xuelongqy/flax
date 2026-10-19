import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartMap, type DartMapInput, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_BindingBase';
import '@flax/flutter/foundation/_bindings/sdk_foundation_BindingBase';
import type * as upstream1 from '@flax/flutter/scheduler/_bindings/flutter_SchedulerBinding';
import '@flax/flutter/scheduler/_bindings/flutter_SchedulerBinding';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_SingletonFlutterWindow';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SingletonFlutterWindow';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_PlatformDispatcher';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PlatformDispatcher';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_AppLifecycleState';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AppLifecycleState';
import type * as upstream5 from '@flax/flutter/scheduler/_bindings/sdk_scheduler_SchedulerPhase';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_SchedulerPhase';
import type * as upstream6 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream7 from '@flax/flutter/services/_bindings/sdk_services_HardwareKeyboard';
import '@flax/flutter/services/_bindings/sdk_services_HardwareKeyboard';
import type * as upstream8 from '@flax/flutter/services/_bindings/sdk_services_KeyEventManager';
import '@flax/flutter/services/_bindings/sdk_services_KeyEventManager';
import type * as upstream9 from '@flax/flutter/services/_bindings/sdk_services_BinaryMessenger';
import '@flax/flutter/services/_bindings/sdk_services_BinaryMessenger';
import type * as upstream10 from '@flax/dart/ui/_bindings/sdk_dart_ui_ChannelBuffers_c3l';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ChannelBuffers_c3l';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import type * as upstream12 from '@flax/flutter/services/_bindings/sdk_services_RestorationManager';
import '@flax/flutter/services/_bindings/sdk_services_RestorationManager';
import type * as upstream13 from '@flax/dart/ui/_bindings/sdk_dart_ui_RootIsolateToken';
import '@flax/dart/ui/_bindings/sdk_dart_ui_RootIsolateToken';
import '@flax/flutter/services/_bindings/sdk_services_SystemContextMenuClient';
import type * as upstream15 from '@flax/dart/ui/_bindings/sdk_dart_ui_FrameTiming';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FrameTiming';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_Priority';
import '@flax/dart/developer/_bindings/sdk_dependencies_Flow';
import type * as upstream18 from '@flax/flutter/scheduler/_bindings/sdk_scheduler_PerformanceModeRequestHandle';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_PerformanceModeRequestHandle';
import type * as upstream19 from '@flax/dart/ui/_bindings/sdk_dart_ui_DartPerformanceMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_DartPerformanceMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ViewFocusEvent';
import type * as upstream21 from '@flax/dart/ui/_bindings/sdk_dart_ui_AppExitResponse';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AppExitResponse';
import type * as upstream22 from '@flax/dart/ui/_bindings/sdk_dart_ui_AppExitType';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AppExitType';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ServicesBinding extends Omit<upstream0.BindingBase, _flaxOwnMembers0>, Omit<upstream1.SchedulerBinding, _flaxOwnMembers0 | keyof upstream0.BindingBase>, Readonly<{
    "__flaxBound:package:flutter/src/services/binding.dart::ServicesBinding": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/binding.dart::BindingBase": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/scheduler/binding.dart::SchedulerBinding": readonly [];
}> {
    readonly __ServicesBinding: unique symbol;
    readonly [_flaxDartTypeValue]: ServicesBinding;
    readonly [_flaxDartMethodCases]?: {
        scheduleTask: _FlaxSignature0;
    };
    readonly window: upstream2.SingletonFlutterWindow;
    readonly platformDispatcher: upstream3.PlatformDispatcher;
    readonly locked: boolean;
    readonly lifecycleState: upstream4.AppLifecycleState | null;
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
    readonly schedulerPhase: upstream5.SchedulerPhase;
    readonly framesEnabled: boolean;
    readonly currentFrameTimeStamp: upstream6.Duration;
    readonly currentSystemFrameTimeStamp: upstream6.Duration;
    readonly keyboard: upstream7.HardwareKeyboard;
    readonly keyEventManager: upstream8.KeyEventManager;
    readonly defaultBinaryMessenger: upstream9.BinaryMessenger;
    readonly channelBuffers: upstream10.ChannelBuffers;
    readonly accessibilityFocus: upstream11.ValueNotifier<number | null>;
    readonly restorationManager: upstream12.RestorationManager;
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
    addTimingsCallback(callback: ((timings: DartList<upstream15.FrameTiming>) => void)): void;
    removeTimingsCallback(callback: ((timings: DartList<upstream15.FrameTiming>) => void)): void;
    handleAppLifecycleStateChanged(state: upstream4.AppLifecycleState): void;
    scheduleTask<T extends unknown | null = unknown | null>(task: (() => (T | _FlaxDartOutput<T>) | Promise<(T | _FlaxDartOutput<T>)>), priority: Readonly<{
        "__flaxBound:package:flutter/src/scheduler/priority.dart::Priority": readonly [];
    }>, options?: {
        debugLabel?: string | null | undefined;
        flow?: Readonly<{
            "__flaxBound:dart:developer::Flow": readonly [];
        }> | null | undefined;
    }): Promise<_FlaxDartOutput<T>>;
    scheduleFrameCallback(callback: ((timeStamp: upstream6.Duration) => void), options?: {
        rescheduling?: boolean | undefined;
        scheduleNewFrame?: boolean | undefined;
    }): number;
    cancelFrameCallbackWithId(id: number): void;
    debugAssertNoTransientCallbacks(reason: string): boolean;
    debugAssertNoPendingPerformanceModeRequests(reason: string): boolean;
    debugAssertNoTimeDilation(reason: string): boolean;
    addPersistentFrameCallback(callback: ((timeStamp: upstream6.Duration) => void)): void;
    addPostFrameCallback(callback: ((timeStamp: upstream6.Duration) => void), options?: {
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
        "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration];
    }>) | null): void;
    requestPerformanceMode(mode: upstream19.DartPerformanceMode): upstream18.PerformanceModeRequestHandle | null;
    debugGetRequestedPerformanceMode(): upstream19.DartPerformanceMode | null;
    handleDrawFrame(): void;
    createBinaryMessenger(): upstream9.BinaryMessenger;
    handleMemoryPressure(): void;
    handleSystemMessage(systemMessage: {}): Promise<void>;
    initLicenses(): void;
    evict(asset: string): void;
    readInitialLifecycleStateFromNativeWindow(): void;
    handleViewFocusChanged(event: Readonly<{
        "__flaxBound:dart:ui::ViewFocusEvent": readonly [];
    }>): void;
    handleRequestAppExit(): Promise<upstream21.AppExitResponse>;
    exitApplication(exitType: upstream22.AppExitType, exitCode?: number): Promise<upstream21.AppExitResponse>;
    createRestorationManager(): upstream12.RestorationManager;
    setSystemUiChangeCallback(callback: ((systemOverlaysAreVisible: boolean) => Promise<void>) | null): void;
    initializationComplete(): Promise<void>;
    set schedulingStrategy(value: ((options: {
        priority: number;
        scheduler: upstream1.SchedulerBinding;
    }) => boolean));
}
export declare namespace _ServicesBindingFactory {
    function setSystemContextMenuClient(value: Readonly<{
        "__flaxBound:package:flutter/src/services/binding.dart::SystemContextMenuClient": readonly [];
    }> | null): void;
}
export declare namespace _ServicesBindingFactory {
    const instance: ServicesBinding;
}
export declare namespace _ServicesBindingFactory {
    const rootIsolateToken: upstream13.RootIsolateToken | null;
}
export declare const ServicesBinding: typeof _ServicesBindingFactory & _FlaxInstanceType<ServicesBinding> & _FlaxDartType<ServicesBinding, readonly ["class", "flax.core/sdk_services#type:ServicesBinding", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "window" | "platformDispatcher" | "locked" | "lifecycleState" | "schedulingStrategy" | "transientCallbackCount" | "endOfFrame" | "hasScheduledFrame" | "schedulerPhase" | "framesEnabled" | "currentFrameTimeStamp" | "currentSystemFrameTimeStamp" | "keyboard" | "keyEventManager" | "defaultBinaryMessenger" | "channelBuffers" | "accessibilityFocus" | "restorationManager" | "initInstances" | "debugCheckZone" | "initServiceExtensions" | "lockEvents" | "unlocked" | "reassembleApplication" | "performReassemble" | "registerSignalServiceExtension" | "registerBoolServiceExtension" | "registerNumericServiceExtension" | "postEvent" | "registerStringServiceExtension" | "registerServiceExtension" | "toString" | "addTimingsCallback" | "removeTimingsCallback" | "handleAppLifecycleStateChanged" | "scheduleTask" | "scheduleFrameCallback" | "cancelFrameCallbackWithId" | "debugAssertNoTransientCallbacks" | "debugAssertNoPendingPerformanceModeRequests" | "debugAssertNoTimeDilation" | "addPersistentFrameCallback" | "addPostFrameCallback" | "ensureFrameCallbacksRegistered" | "ensureVisualUpdate" | "scheduleFrame" | "scheduleForcedFrame" | "scheduleWarmUpFrame" | "resetEpoch" | "handleBeginFrame" | "requestPerformanceMode" | "debugGetRequestedPerformanceMode" | "handleDrawFrame" | "createBinaryMessenger" | "handleMemoryPressure" | "handleSystemMessage" | "initLicenses" | "evict" | "readInitialLifecycleStateFromNativeWindow" | "handleViewFocusChanged" | "handleRequestAppExit" | "exitApplication" | "createRestorationManager" | "setSystemUiChangeCallback" | "initializationComplete" | "__flaxBound:package:flutter/src/services/binding.dart::ServicesBinding" | "__flaxBound:package:flutter/src/foundation/binding.dart::BindingBase" | "__flaxBound:package:flutter/src/scheduler/binding.dart::SchedulerBinding";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (task: (() => (_Selected0 | DartInput<_Selected0>) | Promise<(_Selected0 | DartInput<_Selected0>)>), priority: Readonly<{
        "__flaxBound:package:flutter/src/scheduler/priority.dart::Priority": readonly [];
    }>, options?: {
        debugLabel?: string | null | undefined;
        flow?: Readonly<{
            "__flaxBound:dart:developer::Flow": readonly [];
        }> | null | undefined;
    }) => Promise<_Selected0> : never : never;
}
export {};

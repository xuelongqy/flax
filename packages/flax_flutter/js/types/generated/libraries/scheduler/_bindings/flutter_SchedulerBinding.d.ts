import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartMap, type DartMapInput, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_BindingBase';
import '@flax/flutter/foundation/_bindings/sdk_foundation_BindingBase';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_SingletonFlutterWindow';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SingletonFlutterWindow';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_PlatformDispatcher';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PlatformDispatcher';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_AppLifecycleState';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AppLifecycleState';
import type * as upstream4 from '@flax/flutter/scheduler/_bindings/sdk_scheduler_SchedulerPhase';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_SchedulerPhase';
import type * as upstream5 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_FrameTiming';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FrameTiming';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_Priority';
import '@flax/dart/developer/_bindings/sdk_dependencies_Flow';
import type * as upstream9 from '@flax/flutter/scheduler/_bindings/sdk_scheduler_PerformanceModeRequestHandle';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_PerformanceModeRequestHandle';
import type * as upstream10 from '@flax/dart/ui/_bindings/sdk_dart_ui_DartPerformanceMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_DartPerformanceMode';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SchedulerBinding extends Omit<upstream0.BindingBase, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/scheduler/binding.dart::SchedulerBinding": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/binding.dart::BindingBase": readonly [];
}> {
    readonly __SchedulerBinding: unique symbol;
    readonly [_flaxDartTypeValue]: SchedulerBinding;
    readonly [_flaxDartMethodCases]?: {
        scheduleTask: _FlaxSignature0;
    };
    readonly window: upstream1.SingletonFlutterWindow;
    readonly platformDispatcher: upstream2.PlatformDispatcher;
    readonly locked: boolean;
    readonly lifecycleState: upstream3.AppLifecycleState | null;
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
    readonly schedulerPhase: upstream4.SchedulerPhase;
    readonly framesEnabled: boolean;
    readonly currentFrameTimeStamp: upstream5.Duration;
    readonly currentSystemFrameTimeStamp: upstream5.Duration;
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
    addTimingsCallback(callback: ((timings: DartList<upstream6.FrameTiming>) => void)): void;
    removeTimingsCallback(callback: ((timings: DartList<upstream6.FrameTiming>) => void)): void;
    handleAppLifecycleStateChanged(state: upstream3.AppLifecycleState): void;
    scheduleTask<T extends unknown | null = unknown | null>(task: (() => (T | _FlaxDartOutput<T>) | Promise<(T | _FlaxDartOutput<T>)>), priority: Readonly<{
        "__flaxBound:package:flutter/src/scheduler/priority.dart::Priority": readonly [];
    }>, options?: {
        debugLabel?: string | null | undefined;
        flow?: Readonly<{
            "__flaxBound:dart:developer::Flow": readonly [];
        }> | null | undefined;
    }): Promise<_FlaxDartOutput<T>>;
    scheduleFrameCallback(callback: ((timeStamp: upstream5.Duration) => void), options?: {
        rescheduling?: boolean | undefined;
        scheduleNewFrame?: boolean | undefined;
    }): number;
    cancelFrameCallbackWithId(id: number): void;
    debugAssertNoTransientCallbacks(reason: string): boolean;
    debugAssertNoPendingPerformanceModeRequests(reason: string): boolean;
    debugAssertNoTimeDilation(reason: string): boolean;
    addPersistentFrameCallback(callback: ((timeStamp: upstream5.Duration) => void)): void;
    addPostFrameCallback(callback: ((timeStamp: upstream5.Duration) => void), options?: {
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
        "__flaxBound:dart:core::Comparable": readonly [upstream5.Duration];
    }>) | null): void;
    requestPerformanceMode(mode: upstream10.DartPerformanceMode): upstream9.PerformanceModeRequestHandle | null;
    debugGetRequestedPerformanceMode(): upstream10.DartPerformanceMode | null;
    handleDrawFrame(): void;
    set schedulingStrategy(value: ((options: {
        priority: number;
        scheduler: SchedulerBinding;
    }) => boolean));
}
export declare namespace _SchedulerBindingFactory {
    const instance: SchedulerBinding;
}
export declare namespace _SchedulerBindingFactory {
    function debugPrintTransientCallbackRegistrationStack(): void;
}
export declare const SchedulerBinding: typeof _SchedulerBindingFactory & _FlaxInstanceType<SchedulerBinding> & _FlaxDartType<SchedulerBinding, readonly ["class", "flax.core/flutter#type:SchedulerBinding", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "window" | "platformDispatcher" | "locked" | "lifecycleState" | "schedulingStrategy" | "transientCallbackCount" | "endOfFrame" | "hasScheduledFrame" | "schedulerPhase" | "framesEnabled" | "currentFrameTimeStamp" | "currentSystemFrameTimeStamp" | "initInstances" | "debugCheckZone" | "initServiceExtensions" | "lockEvents" | "unlocked" | "reassembleApplication" | "performReassemble" | "registerSignalServiceExtension" | "registerBoolServiceExtension" | "registerNumericServiceExtension" | "postEvent" | "registerStringServiceExtension" | "registerServiceExtension" | "toString" | "addTimingsCallback" | "removeTimingsCallback" | "handleAppLifecycleStateChanged" | "scheduleTask" | "scheduleFrameCallback" | "cancelFrameCallbackWithId" | "debugAssertNoTransientCallbacks" | "debugAssertNoPendingPerformanceModeRequests" | "debugAssertNoTimeDilation" | "addPersistentFrameCallback" | "addPostFrameCallback" | "ensureFrameCallbacksRegistered" | "ensureVisualUpdate" | "scheduleFrame" | "scheduleForcedFrame" | "scheduleWarmUpFrame" | "resetEpoch" | "handleBeginFrame" | "requestPerformanceMode" | "debugGetRequestedPerformanceMode" | "handleDrawFrame" | "__flaxBound:package:flutter/src/scheduler/binding.dart::SchedulerBinding" | "__flaxBound:package:flutter/src/foundation/binding.dart::BindingBase";
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

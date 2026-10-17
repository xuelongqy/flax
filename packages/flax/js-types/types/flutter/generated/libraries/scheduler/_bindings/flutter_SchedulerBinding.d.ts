import { type FlaxInstanceType as _FlaxInstanceType, type DartMap, type DartMapInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SchedulerBinding extends Readonly<{
    "__flaxBound:package:flutter/src/scheduler/binding.dart::SchedulerBinding": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/binding.dart::BindingBase": readonly [];
}> {
    readonly __SchedulerBinding: unique symbol;
    get schedulingStrategy(): ((options: {
        priority: number;
        scheduler: Readonly<{
            "__flaxBound:package:flutter/src/scheduler/binding.dart::SchedulerBinding": readonly [];
        }>;
    }) => boolean);
    readonly transientCallbackCount: number;
    readonly endOfFrame: Promise<void>;
    readonly hasScheduledFrame: boolean;
    readonly framesEnabled: boolean;
    readonly currentFrameTimeStamp: upstream0.Duration;
    readonly currentSystemFrameTimeStamp: upstream0.Duration;
    readonly locked: boolean;
    initInstances(): void;
    initServiceExtensions(): void;
    unlocked(): void;
    scheduleFrameCallback(callback: ((timeStamp: upstream0.Duration) => void), options?: {
        rescheduling?: boolean | undefined;
        scheduleNewFrame?: boolean | undefined;
    }): number;
    cancelFrameCallbackWithId(id: number): void;
    debugAssertNoTransientCallbacks(reason: string): boolean;
    debugAssertNoPendingPerformanceModeRequests(reason: string): boolean;
    debugAssertNoTimeDilation(reason: string): boolean;
    addPersistentFrameCallback(callback: ((timeStamp: upstream0.Duration) => void)): void;
    addPostFrameCallback(callback: ((timeStamp: upstream0.Duration) => void), options?: {
        debugLabel?: string | undefined;
    }): void;
    ensureFrameCallbacksRegistered(): void;
    ensureVisualUpdate(): void;
    scheduleFrame(): void;
    scheduleForcedFrame(): void;
    scheduleWarmUpFrame(): void;
    resetEpoch(): void;
    handleBeginFrame(rawTimeStamp: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> | null): void;
    handleDrawFrame(): void;
    debugCheckZone(entryPoint: string): boolean;
    lockEvents(callback: (() => Promise<void>)): Promise<void>;
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

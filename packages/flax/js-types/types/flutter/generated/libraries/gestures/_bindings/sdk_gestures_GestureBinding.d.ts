import { type FlaxInstanceType as _FlaxInstanceType, type DartMap, type DartMapInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_BindingBase';
import '@flax/flutter/foundation/_bindings/sdk_foundation_BindingBase';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestable';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestable';
import type * as upstream2 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestDispatcher';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestDispatcher';
import type * as upstream3 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_SingletonFlutterWindow';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SingletonFlutterWindow';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_PlatformDispatcher';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PlatformDispatcher';
import type * as upstream6 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerRouter';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerRouter';
import type * as upstream7 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaManager';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaManager';
import type * as upstream8 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerSignalResolver';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerSignalResolver';
import type * as upstream9 from '@flax/flutter/gestures/_bindings/sdk_gestures_SamplingClock';
import '@flax/flutter/gestures/_bindings/sdk_gestures_SamplingClock';
import type * as upstream10 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestResult';
import '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface GestureBinding extends Omit<upstream0.BindingBase, _flaxOwnMembers0>, Omit<upstream1.HitTestable, _flaxOwnMembers0 | keyof upstream0.BindingBase>, Omit<upstream2.HitTestDispatcher, _flaxOwnMembers0 | keyof upstream0.BindingBase | keyof upstream1.HitTestable>, Omit<upstream3.HitTestTarget, _flaxOwnMembers0 | keyof upstream0.BindingBase | keyof upstream1.HitTestable | keyof upstream2.HitTestDispatcher>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/binding.dart::GestureBinding": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/binding.dart::BindingBase": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestDispatcher": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
}> {
    readonly __GestureBinding: unique symbol;
    readonly [_flaxDartTypeValue]: GestureBinding;
    readonly window: upstream4.SingletonFlutterWindow;
    readonly platformDispatcher: upstream5.PlatformDispatcher;
    readonly locked: boolean;
    readonly pointerRouter: upstream6.PointerRouter;
    readonly gestureArena: upstream7.GestureArenaManager;
    readonly pointerSignalResolver: upstream8.PointerSignalResolver;
    readonly debugSamplingClock: upstream9.SamplingClock | null;
    readonly samplingClock: upstream9.SamplingClock;
    get resamplingEnabled(): boolean;
    get samplingOffset(): upstream10.Duration;
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
    hitTest(result: Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [];
    }>, position: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): void;
    hitTestInView(result: Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [];
    }>, position: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, viewId: number): void;
    dispatchEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, hitTestResult: Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [];
    }> | null): void;
    handleEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, entry: Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [upstream3.HitTestTarget];
    }>): void;
    cancelPointer(pointer: number): void;
    handlePointerEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    resetGestureBinding(): void;
    set resamplingEnabled(value: boolean);
    set samplingOffset(value: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream10.Duration];
    }>);
}
declare const _GestureBindingFactory: {
    readonly instance: GestureBinding;
};
export declare const GestureBinding: typeof _GestureBindingFactory & _FlaxInstanceType<GestureBinding> & _FlaxDartType<GestureBinding, readonly ["class", "flax.core/sdk_gestures#type:GestureBinding", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "window" | "platformDispatcher" | "locked" | "pointerRouter" | "gestureArena" | "pointerSignalResolver" | "debugSamplingClock" | "samplingClock" | "resamplingEnabled" | "samplingOffset" | "initInstances" | "debugCheckZone" | "initServiceExtensions" | "lockEvents" | "unlocked" | "reassembleApplication" | "performReassemble" | "registerSignalServiceExtension" | "registerBoolServiceExtension" | "registerNumericServiceExtension" | "postEvent" | "registerStringServiceExtension" | "registerServiceExtension" | "toString" | "hitTest" | "hitTestInView" | "dispatchEvent" | "handleEvent" | "cancelPointer" | "handlePointerEvent" | "resetGestureBinding" | "__flaxBound:package:flutter/src/gestures/binding.dart::GestureBinding" | "__flaxBound:package:flutter/src/foundation/binding.dart::BindingBase" | "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestable" | "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestDispatcher" | "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget";
export {};

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PointerEventResampler extends Readonly<{
    "__flaxBound:package:flutter/src/gestures/resampler.dart::PointerEventResampler": readonly [];
}> {
    readonly __PointerEventResampler: unique symbol;
    readonly [_flaxDartTypeValue]: PointerEventResampler;
    readonly hasPendingEvents: boolean;
    readonly isTracked: boolean;
    readonly isDown: boolean;
    addEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    sample(sampleTime: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration];
    }>, nextSampleTime: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration];
    }>, callback: ((event: upstream0.PointerEvent) => void)): void;
    stop(callback: ((event: upstream0.PointerEvent) => void)): void;
}
export declare function _PointerEventResamplerFactory(): PointerEventResampler;
export interface _PointerEventResamplerNative extends PointerEventResampler {
    readonly [_flaxDartTypeValue]: _PointerEventResamplerNative;
    addEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    sample(sampleTime: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration];
    }>, nextSampleTime: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration];
    }>, callback: ((event: upstream0.PointerEvent) => void)): void;
    stop(callback: ((event: upstream0.PointerEvent) => void)): void;
    get hasPendingEvents(): boolean;
    get isTracked(): boolean;
    get isDown(): boolean;
}
export declare abstract class _PointerEventResamplerNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PointerEventResampler>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PointerEventResampler;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:PointerEventResampler", readonly [], false];
    constructor();
}
export declare namespace _PointerEventResamplerFactory {
    function implement(args: [], implementation: {}): PointerEventResampler;
}
declare const _PointerEventResamplerBinding: typeof _PointerEventResamplerFactory & (new () => _PointerEventResamplerNative);
export declare const PointerEventResampler: typeof _PointerEventResamplerBinding & _FlaxInstanceType<PointerEventResampler> & _FlaxDartType<PointerEventResampler, readonly ["class", "flax.core/sdk_gestures#type:PointerEventResampler", readonly [], false]>;
export {};

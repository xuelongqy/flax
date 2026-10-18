import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_AndroidPointerProperties';
import '@flax/flutter/services/_bindings/sdk_services_AndroidPointerProperties';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_AndroidPointerCoords';
import '@flax/flutter/services/_bindings/sdk_services_AndroidPointerCoords';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface AndroidMotionEvent extends Readonly<{
    "__flaxBound:package:flutter/src/services/platform_views.dart::AndroidMotionEvent": readonly [];
}> {
    readonly __AndroidMotionEvent: unique symbol;
    readonly [_flaxDartTypeValue]: AndroidMotionEvent;
}
export interface AndroidMotionEvent {
    readonly [_flaxDartTypeValue]: AndroidMotionEvent;
    toString(): string;
    get downTime(): number;
    get eventTime(): number;
    get action(): number;
    get pointerCount(): number;
    get pointerProperties(): DartList<upstream0.AndroidPointerProperties>;
    get pointerCoords(): DartList<upstream1.AndroidPointerCoords>;
    get metaState(): number;
    get buttonState(): number;
    get xPrecision(): number;
    get yPrecision(): number;
    get deviceId(): number;
    get edgeFlags(): number;
    get source(): number;
    get flags(): number;
    get motionEventId(): number;
}
export declare abstract class AndroidMotionEvent extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AndroidMotionEvent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: AndroidMotionEvent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:AndroidMotionEvent", readonly [], false];
    constructor(options: {
        downTime: number;
        eventTime: number;
        action: number;
        pointerCount: number;
        pointerProperties: DartListInput<upstream0.AndroidPointerProperties, Readonly<{
            "__flaxBound:package:flutter/src/services/platform_views.dart::AndroidPointerProperties": readonly [];
        }>>;
        pointerCoords: DartListInput<upstream1.AndroidPointerCoords, Readonly<{
            "__flaxBound:package:flutter/src/services/platform_views.dart::AndroidPointerCoords": readonly [];
        }>>;
        metaState: number;
        buttonState: number;
        xPrecision: number;
        yPrecision: number;
        deviceId: number;
        edgeFlags: number;
        source: number;
        flags: number;
        motionEventId: number;
    });
}
export declare namespace AndroidMotionEvent {
    function implement(args: [options: {
        downTime: number;
        eventTime: number;
        action: number;
        pointerCount: number;
        pointerProperties: DartListInput<upstream0.AndroidPointerProperties, Readonly<{
            "__flaxBound:package:flutter/src/services/platform_views.dart::AndroidPointerProperties": readonly [];
        }>>;
        pointerCoords: DartListInput<upstream1.AndroidPointerCoords, Readonly<{
            "__flaxBound:package:flutter/src/services/platform_views.dart::AndroidPointerCoords": readonly [];
        }>>;
        metaState: number;
        buttonState: number;
        xPrecision: number;
        yPrecision: number;
        deviceId: number;
        edgeFlags: number;
        source: number;
        flags: number;
        motionEventId: number;
    }], implementation: {}): AndroidMotionEvent;
}

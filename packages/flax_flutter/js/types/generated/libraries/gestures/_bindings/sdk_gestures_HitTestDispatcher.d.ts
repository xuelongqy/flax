import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestResult';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestResult';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface HitTestDispatcher extends Readonly<{
    "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestDispatcher": readonly [];
}> {
    readonly __HitTestDispatcher: unique symbol;
    readonly [_flaxDartTypeValue]: HitTestDispatcher;
    dispatchEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, result: Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [];
    }>): void;
}
export declare namespace _HitTestDispatcherFactory {
    function implement(args: [], implementation: {
        dispatchEvent: ((event: upstream0.PointerEvent, result: upstream1.HitTestResult) => void);
    }): HitTestDispatcher;
}
export declare const HitTestDispatcher: typeof _HitTestDispatcherFactory & _FlaxInstanceType<HitTestDispatcher> & _FlaxDartType<HitTestDispatcher, readonly ["class", "flax.core/sdk_gestures#type:HitTestDispatcher", readonly [], false]>;

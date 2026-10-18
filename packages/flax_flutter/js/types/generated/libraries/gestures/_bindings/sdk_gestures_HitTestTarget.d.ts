import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface HitTestTarget extends Readonly<{
    "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
}> {
    readonly __HitTestTarget: unique symbol;
    readonly [_flaxDartTypeValue]: HitTestTarget;
    handleEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, entry: Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [HitTestTarget];
    }>): void;
}
export declare namespace _HitTestTargetFactory {
    function implement(args: [], implementation: {
        handleEvent: ((event: upstream0.PointerEvent, entry: upstream1.HitTestEntry<HitTestTarget>) => void);
    }): HitTestTarget;
}
export declare const HitTestTarget: typeof _HitTestTargetFactory & _FlaxInstanceType<HitTestTarget> & _FlaxDartType<HitTestTarget, readonly ["class", "flax.core/sdk_gestures#type:HitTestTarget", readonly [], false]>;

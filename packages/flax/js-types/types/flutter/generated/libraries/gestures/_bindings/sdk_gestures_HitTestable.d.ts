import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestResult';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestResult';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface HitTestable extends Readonly<{
    "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestable": readonly [];
}> {
    readonly __HitTestable: unique symbol;
    readonly [_flaxDartTypeValue]: HitTestable;
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
}
export declare namespace _HitTestableFactory {
    function implement(args: [], implementation: {
        hitTest: ((result: upstream0.HitTestResult, position: upstream1.Offset) => void);
        hitTestInView: ((result: upstream0.HitTestResult, position: upstream1.Offset, viewId: number) => void);
    }): HitTestable;
}
export declare const HitTestable: typeof _HitTestableFactory & _FlaxInstanceType<HitTestable> & _FlaxDartType<HitTestable, readonly ["class", "flax.core/sdk_gestures#type:HitTestable", readonly [], false]>;

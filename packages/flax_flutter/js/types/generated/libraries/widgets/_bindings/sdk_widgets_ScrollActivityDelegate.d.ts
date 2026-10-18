import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ScrollActivityDelegate extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
}> {
    readonly __ScrollActivityDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: ScrollActivityDelegate;
    readonly axisDirection: upstream0.AxisDirection;
    setPixels(pixels: number): number;
    applyUserOffset(delta: number): void;
    goIdle(): void;
    goBallistic(velocity: number): void;
}
export declare namespace _ScrollActivityDelegateFactory {
    function implement(args: [], implementation: {
        setPixels: ((pixels: number) => number);
        applyUserOffset: ((delta: number) => void);
        goIdle: (() => void);
        goBallistic: ((velocity: number) => void);
        get axisDirection(): upstream0.AxisDirection;
    }): ScrollActivityDelegate;
}
export declare const ScrollActivityDelegate: typeof _ScrollActivityDelegateFactory & _FlaxInstanceType<ScrollActivityDelegate> & _FlaxDartType<ScrollActivityDelegate, readonly ["class", "flax.core/sdk_widgets#type:ScrollActivityDelegate", readonly [], false]>;

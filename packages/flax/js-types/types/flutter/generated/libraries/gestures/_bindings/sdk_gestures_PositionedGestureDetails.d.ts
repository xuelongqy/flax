import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PositionedGestureDetails extends Readonly<{
    "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
}> {
    readonly __PositionedGestureDetails: unique symbol;
    readonly [_flaxDartTypeValue]: PositionedGestureDetails;
    readonly globalPosition: upstream0.Offset;
    readonly localPosition: upstream0.Offset;
}
export declare namespace _PositionedGestureDetailsFactory {
    function implement(args: [], implementation: {
        get globalPosition(): Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        get localPosition(): Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    }): PositionedGestureDetails;
}
export declare const PositionedGestureDetails: typeof _PositionedGestureDetailsFactory & _FlaxInstanceType<PositionedGestureDetails> & _FlaxDartType<PositionedGestureDetails, readonly ["class", "flax.core/sdk_gestures#type:PositionedGestureDetails", readonly [], false]>;

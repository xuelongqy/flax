import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Feedback extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/feedback.dart::Feedback": readonly [];
}> {
    readonly __Feedback: unique symbol;
    readonly [_flaxDartTypeValue]: Feedback;
}
export declare namespace _FeedbackFactory {
    function forTap(context: upstream0.BuildContext): Promise<void>;
}
export declare namespace _FeedbackFactory {
    function wrapForTap(callback: (() => void) | null, context: upstream0.BuildContext): (() => void) | null;
}
export declare namespace _FeedbackFactory {
    function forLongPress(context: upstream0.BuildContext): Promise<void>;
}
export declare namespace _FeedbackFactory {
    function wrapForLongPress(callback: (() => void) | null, context: upstream0.BuildContext): (() => void) | null;
}
export declare const Feedback: typeof _FeedbackFactory & _FlaxInstanceType<Feedback> & _FlaxDartType<Feedback, readonly ["class", "flax.core/sdk_widgets#type:Feedback", readonly [], false]>;

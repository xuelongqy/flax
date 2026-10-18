import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface HapticFeedback extends Readonly<{
    "__flaxBound:package:flutter/src/services/haptic_feedback.dart::HapticFeedback": readonly [];
}> {
    readonly __HapticFeedback: unique symbol;
    readonly [_flaxDartTypeValue]: HapticFeedback;
}
export declare namespace _HapticFeedbackFactory {
    function vibrate(): Promise<void>;
}
export declare namespace _HapticFeedbackFactory {
    function lightImpact(): Promise<void>;
}
export declare namespace _HapticFeedbackFactory {
    function mediumImpact(): Promise<void>;
}
export declare namespace _HapticFeedbackFactory {
    function heavyImpact(): Promise<void>;
}
export declare namespace _HapticFeedbackFactory {
    function selectionClick(): Promise<void>;
}
export declare namespace _HapticFeedbackFactory {
    function successNotification(): Promise<void>;
}
export declare namespace _HapticFeedbackFactory {
    function warningNotification(): Promise<void>;
}
export declare namespace _HapticFeedbackFactory {
    function errorNotification(): Promise<void>;
}
export declare const HapticFeedback: typeof _HapticFeedbackFactory & _FlaxInstanceType<HapticFeedback> & _FlaxDartType<HapticFeedback, readonly ["class", "flax.core/sdk_services#type:HapticFeedback", readonly [], false]>;

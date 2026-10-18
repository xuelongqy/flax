import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AccessibilityFeatures extends Readonly<{
    "__flaxBound:dart:ui::AccessibilityFeatures": readonly [];
}> {
    readonly __AccessibilityFeatures: unique symbol;
    readonly [_flaxDartTypeValue]: AccessibilityFeatures;
    readonly accessibleNavigation: boolean;
    readonly invertColors: boolean;
    readonly disableAnimations: boolean;
    readonly boldText: boolean;
    readonly reduceMotion: boolean;
    readonly highContrast: boolean;
    readonly onOffSwitchLabels: boolean;
    readonly supportsAnnounce: boolean;
    readonly autoPlayAnimatedImages: boolean;
    readonly autoPlayVideos: boolean;
    readonly deterministicCursor: boolean;
    toString(): string;
}
export declare const AccessibilityFeatures: object & _FlaxInstanceType<AccessibilityFeatures> & _FlaxDartType<AccessibilityFeatures, readonly ["class", "flax.core/sdk_dart_ui#type:AccessibilityFeatures", readonly [], false]>;

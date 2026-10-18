import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FrameInfo extends Readonly<{
    "__flaxBound:dart:ui::FrameInfo": readonly [];
}> {
    readonly __FrameInfo: unique symbol;
    readonly [_flaxDartTypeValue]: FrameInfo;
    readonly duration: upstream0.Duration;
    readonly image: upstream1.Image;
}
export declare namespace _FrameInfoFactory {
    function implement(args: [], implementation: {
        get duration(): Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
        }>;
        get image(): Readonly<{
            "__flaxBound:dart:ui::Image": readonly [];
        }>;
    }): FrameInfo;
}
export declare const FrameInfo: typeof _FrameInfoFactory & _FlaxInstanceType<FrameInfo> & _FlaxDartType<FrameInfo, readonly ["class", "flax.core/sdk_dart_ui#type:FrameInfo", readonly [], false]>;

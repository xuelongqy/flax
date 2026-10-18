import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ScrollHoldController extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollHoldController": readonly [];
}> {
    readonly __ScrollHoldController: unique symbol;
    readonly [_flaxDartTypeValue]: ScrollHoldController;
    cancel(): void;
}
export declare namespace _ScrollHoldControllerFactory {
    function implement(args: [], implementation: {
        cancel: (() => void);
    }): ScrollHoldController;
}
export declare const ScrollHoldController: typeof _ScrollHoldControllerFactory & _FlaxInstanceType<ScrollHoldController> & _FlaxDartType<ScrollHoldController, readonly ["class", "flax.core/sdk_widgets#type:ScrollHoldController", readonly [], false]>;

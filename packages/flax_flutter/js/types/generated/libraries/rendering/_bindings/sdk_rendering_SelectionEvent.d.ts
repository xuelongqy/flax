import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SelectionEvent extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
}> {
    readonly __SelectionEvent: unique symbol;
    readonly [_flaxDartTypeValue]: SelectionEvent;
    readonly type: upstream0.SelectionEventType;
}
export declare namespace _SelectionEventFactory {
    function implement(args: [], implementation: {
        get type(): upstream0.SelectionEventType;
    }): SelectionEvent;
}
export declare const SelectionEvent: typeof _SelectionEventFactory & _FlaxInstanceType<SelectionEvent> & _FlaxDartType<SelectionEvent, readonly ["class", "flax.core/sdk_rendering#type:SelectionEvent", readonly [], false]>;

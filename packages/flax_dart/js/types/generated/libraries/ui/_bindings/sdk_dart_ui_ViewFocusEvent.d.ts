import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_ViewFocusState';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ViewFocusState';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_ViewFocusDirection';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ViewFocusDirection';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ViewFocusEvent extends Readonly<{
    "__flaxBound:dart:ui::ViewFocusEvent": readonly [];
}> {
    readonly __ViewFocusEvent: unique symbol;
    readonly [_flaxDartTypeValue]: ViewFocusEvent;
    readonly viewId: number;
    readonly state: upstream0.ViewFocusState;
    readonly direction: upstream1.ViewFocusDirection;
    toString(): string;
}
export declare function _ViewFocusEventFactory(options: {
    viewId: number;
    state: upstream0.ViewFocusState;
    direction: upstream1.ViewFocusDirection;
}): ViewFocusEvent;
export declare const ViewFocusEvent: typeof _ViewFocusEventFactory & _FlaxInstanceType<ViewFocusEvent> & _FlaxDartType<ViewFocusEvent, readonly ["class", "flax.core/sdk_dart_ui#type:ViewFocusEvent", readonly [], false]>;

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_TextGranularity';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TextGranularity';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SelectionEdgeUpdateEvent extends Omit<upstream0.SelectionEvent, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEdgeUpdateEvent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
}> {
    readonly __SelectionEdgeUpdateEvent: unique symbol;
    readonly [_flaxDartTypeValue]: SelectionEdgeUpdateEvent;
    readonly type: upstream1.SelectionEventType;
    readonly globalPosition: upstream2.Offset;
    readonly granularity: upstream3.TextGranularity;
}
export declare namespace _SelectionEdgeUpdateEventFactory {
    function implement(args: [], implementation: {
        get globalPosition(): Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        get granularity(): upstream3.TextGranularity;
        get type(): upstream1.SelectionEventType;
    }): SelectionEdgeUpdateEvent;
}
export declare const SelectionEdgeUpdateEvent: typeof _SelectionEdgeUpdateEventFactory & _FlaxInstanceType<SelectionEdgeUpdateEvent> & _FlaxDartType<SelectionEdgeUpdateEvent, readonly ["class", "flax.core/sdk_rendering#type:SelectionEdgeUpdateEvent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "type" | "globalPosition" | "granularity" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEdgeUpdateEvent" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent";
export {};

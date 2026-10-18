import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollIncrementType';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollIncrementType';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ScrollIncrementDetails extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollIncrementDetails": readonly [];
}> {
    readonly __ScrollIncrementDetails: unique symbol;
    readonly [_flaxDartTypeValue]: ScrollIncrementDetails;
}
export interface ScrollIncrementDetails {
    readonly [_flaxDartTypeValue]: ScrollIncrementDetails;
    get type(): upstream0.ScrollIncrementType;
    get metrics(): upstream1.ScrollMetrics;
}
export declare abstract class ScrollIncrementDetails extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScrollIncrementDetails>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ScrollIncrementDetails;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ScrollIncrementDetails", readonly [], false];
    constructor(options: {
        type: upstream0.ScrollIncrementType;
        metrics: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
        }>;
    });
}
export declare namespace ScrollIncrementDetails {
    function implement(args: [options: {
        type: upstream0.ScrollIncrementType;
        metrics: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
        }>;
    }], implementation: {}): ScrollIncrementDetails;
}

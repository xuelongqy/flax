import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollIncrementType';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollIncrementType';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ScrollIncrementDetails extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollIncrementDetails": readonly [];
}> {
    readonly __ScrollIncrementDetails: unique symbol;
    readonly [_flaxDartTypeValue]: ScrollIncrementDetails;
    readonly type: upstream0.ScrollIncrementType;
    readonly metrics: upstream1.ScrollMetrics;
}
export declare function _ScrollIncrementDetailsFactory(options: {
    type: upstream0.ScrollIncrementType;
    metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>;
}): ScrollIncrementDetails;
export interface _ScrollIncrementDetailsNative extends ScrollIncrementDetails {
    readonly [_flaxDartTypeValue]: _ScrollIncrementDetailsNative;
    get type(): upstream0.ScrollIncrementType;
    get metrics(): upstream1.ScrollMetrics;
}
export declare abstract class _ScrollIncrementDetailsNative extends _FlaxProxyBase {
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
export declare namespace _ScrollIncrementDetailsFactory {
    function implement(args: [options: {
        type: upstream0.ScrollIncrementType;
        metrics: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
        }>;
    }], implementation: {}): ScrollIncrementDetails;
}
declare const _ScrollIncrementDetailsBinding: typeof _ScrollIncrementDetailsFactory & (new (options: {
    type: upstream0.ScrollIncrementType;
    metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>;
}) => _ScrollIncrementDetailsNative);
export declare const ScrollIncrementDetails: typeof _ScrollIncrementDetailsBinding & _FlaxInstanceType<ScrollIncrementDetails> & _FlaxDartType<ScrollIncrementDetails, readonly ["class", "flax.core/sdk_widgets#type:ScrollIncrementDetails", readonly [], false]>;
export {};

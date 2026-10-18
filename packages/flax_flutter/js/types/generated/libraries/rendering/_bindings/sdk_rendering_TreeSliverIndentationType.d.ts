import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TreeSliverIndentationType extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver_tree.dart::TreeSliverIndentationType": readonly [];
}> {
    readonly __TreeSliverIndentationType: unique symbol;
    readonly [_flaxDartTypeValue]: TreeSliverIndentationType;
    readonly value: number;
}
export declare namespace _TreeSliverIndentationTypeFactory {
    const standard: TreeSliverIndentationType;
}
export declare namespace _TreeSliverIndentationTypeFactory {
    const none: TreeSliverIndentationType;
}
export declare namespace _TreeSliverIndentationTypeFactory {
    function custom(value: number): TreeSliverIndentationType;
}
export declare const TreeSliverIndentationType: typeof _TreeSliverIndentationTypeFactory & _FlaxInstanceType<TreeSliverIndentationType> & _FlaxDartType<TreeSliverIndentationType, readonly ["class", "flax.core/sdk_rendering#type:TreeSliverIndentationType", readonly [], false]>;

import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_TreeSliverNode';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TreeSliverNode';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TreeSliverStateMixin<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverStateMixin": readonly [T];
}> {
    readonly __TreeSliverStateMixin: unique symbol;
    readonly [_flaxDartTypeValue]: TreeSliverStateMixin<T>;
    isExpanded(node: Readonly<{
        "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [T];
    }>): boolean;
    isActive(node: Readonly<{
        "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [T];
    }>): boolean;
    toggleNode(node: Readonly<{
        "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [T];
    }>): void;
    collapseAll(): void;
    expandAll(): void;
    getNodeFor(content: (T | DartInput<T>)): upstream0.TreeSliverNode<T> | null;
    getActiveIndexFor(node: Readonly<{
        "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [T];
    }>): number | null;
}
export declare const TreeSliverStateMixin: object & _FlaxInstanceType<TreeSliverStateMixin<unknown | null>> & _FlaxDartType<TreeSliverStateMixin<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:TreeSliverStateMixin", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        readonly prototype: TreeSliverStateMixin<_Selected0>;
    } & _FlaxInstanceType<TreeSliverStateMixin<_Selected0>> & _FlaxDartType<TreeSliverStateMixin<_Selected0>> : never : never;
}
export {};

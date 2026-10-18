import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_TreeSliverNode';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TreeSliverNode';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface TreeSliverController extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverController": readonly [];
}> {
    readonly __TreeSliverController: unique symbol;
    readonly [_flaxDartTypeValue]: TreeSliverController;
}
export interface TreeSliverController {
    readonly [_flaxDartTypeValue]: TreeSliverController;
    isExpanded(node: Readonly<{
        "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null];
    }>): boolean;
    isActive(node: Readonly<{
        "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null];
    }>): boolean;
    getNodeFor(content: unknown | null): upstream1.TreeSliverNode<unknown | null> | null;
    toggleNode(node: Readonly<{
        "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null];
    }>): void;
    expandNode(node: Readonly<{
        "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null];
    }>): void;
    expandAll(): void;
    collapseAll(): void;
    collapseNode(node: Readonly<{
        "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null];
    }>): void;
    getActiveIndexFor(node: Readonly<{
        "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null];
    }>): number | null;
}
export declare abstract class TreeSliverController extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TreeSliverController>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TreeSliverController;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TreeSliverController", readonly [], false];
    constructor();
}
export declare namespace TreeSliverController {
    function implement(args: [], implementation: {}): TreeSliverController;
}
export declare namespace TreeSliverController {
    function of(context: upstream0.BuildContext): TreeSliverController;
}
export declare namespace TreeSliverController {
    function maybeOf(context: upstream0.BuildContext): TreeSliverController | null;
}

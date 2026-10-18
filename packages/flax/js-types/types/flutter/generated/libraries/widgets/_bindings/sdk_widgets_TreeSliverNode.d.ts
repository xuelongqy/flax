import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TreeSliverNode<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [T];
}> {
    readonly __TreeSliverNode: unique symbol;
    readonly [_flaxDartTypeValue]: TreeSliverNode<T>;
}
export interface TreeSliverNode<T extends unknown | null = unknown | null> {
    readonly [_flaxDartTypeValue]: TreeSliverNode<T>;
    toString(): string;
    get content(): T;
    get children(): DartList<TreeSliverNode<T>>;
    get isExpanded(): boolean;
    get depth(): number | null;
    get parent(): TreeSliverNode<T> | null;
}
export declare abstract class TreeSliverNode<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TreeSliverNode<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TreeSliverNode<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TreeSliverNode", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(content: unknown | null, options?: {
        children?: DartListInput<TreeSliverNode<unknown | null>, Readonly<{
            "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null];
        }>> | null | undefined;
        expanded?: boolean | undefined;
    });
}
export declare namespace TreeSliverNode {
    function implement<T extends unknown | null = unknown | null>(args: [content: unknown | null, options?: {
        children?: DartListInput<TreeSliverNode<unknown | null>, Readonly<{
            "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null];
        }>> | null | undefined;
        expanded?: boolean | undefined;
    }], implementation: {}): TreeSliverNode<T>;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (content: unknown | null, options?: {
        children?: DartListInput<TreeSliverNode<unknown | null>, Readonly<{
            "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null];
        }>> | null | undefined;
        expanded?: boolean | undefined;
    }) => TreeSliverNode<_Selected0>) & {
        readonly prototype: TreeSliverNode<_Selected0>;
        implement(args: readonly [unknown | null, options?: {
            children?: DartListInput<TreeSliverNode<unknown | null>, Readonly<{
                "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null];
            }>> | null | undefined;
            expanded?: boolean | undefined;
        }], implementation: Partial<TreeSliverNode<_Selected0>>): TreeSliverNode<_Selected0>;
    } & _FlaxInstanceType<TreeSliverNode<_Selected0>> & _FlaxDartType<TreeSliverNode<_Selected0>> : never : never;
}
export {};

import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TreeSliverNode<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [T];
}> {
    readonly __TreeSliverNode: unique symbol;
    readonly [_flaxDartTypeValue]: TreeSliverNode<T>;
    readonly content: T;
    readonly children: DartList<TreeSliverNode<T>>;
    readonly isExpanded: boolean;
    readonly depth: number | null;
    readonly parent: TreeSliverNode<T> | null;
    toString(): string;
}
export declare function _TreeSliverNodeFactory<T extends unknown | null = unknown | null>(content: (T | _FlaxDartOutput<T>), options?: {
    children?: DartListInput<TreeSliverNode<_FlaxDartOutput<T>>, Readonly<{
        "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [_FlaxDartOutput<T>];
    }>> | null | undefined;
    expanded?: boolean | undefined;
}): TreeSliverNode<T>;
export declare function _TreeSliverNodeFactory(content: unknown | null, options?: {
    children?: DartListInput<TreeSliverNode<unknown | null>, Readonly<{
        "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null];
    }>> | null | undefined;
    expanded?: boolean | undefined;
}): TreeSliverNode<unknown | null>;
export interface _TreeSliverNodeNative<T extends unknown | null = unknown | null> extends TreeSliverNode<T> {
    readonly [_flaxDartTypeValue]: _TreeSliverNodeNative<T>;
    toString(): string;
    get content(): T;
    get children(): DartList<TreeSliverNode<T>>;
    get isExpanded(): boolean;
    get depth(): number | null;
    get parent(): TreeSliverNode<T> | null;
}
export declare abstract class _TreeSliverNodeNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
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
export declare namespace _TreeSliverNodeFactory {
    function implement<T extends unknown | null = unknown | null>(args: [content: unknown | null, options?: {
        children?: DartListInput<TreeSliverNode<unknown | null>, Readonly<{
            "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null];
        }>> | null | undefined;
        expanded?: boolean | undefined;
    }], implementation: {}): TreeSliverNode<T>;
}
declare const _TreeSliverNodeBinding: typeof _TreeSliverNodeFactory & (new <T extends unknown | null = unknown | null>(content: unknown | null, options?: {
    children?: DartListInput<TreeSliverNode<unknown | null>, Readonly<{
        "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null];
    }>> | null | undefined;
    expanded?: boolean | undefined;
}) => _TreeSliverNodeNative<T>);
export declare const TreeSliverNode: typeof _TreeSliverNodeBinding & _FlaxInstanceType<TreeSliverNode<unknown | null>> & _FlaxDartType<TreeSliverNode<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:TreeSliverNode", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (content: unknown | null, options?: {
        children?: DartListInput<TreeSliverNode<unknown | null>, Readonly<{
            "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null];
        }>> | null | undefined;
        expanded?: boolean | undefined;
    }) => _TreeSliverNodeNative<_Selected0>) & {
        (content: (_Selected0 | DartInput<_Selected0>), options?: {
            children?: DartListInput<TreeSliverNode<_Selected0>, Readonly<{
                "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [_Selected0];
            }>> | null | undefined;
            expanded?: boolean | undefined;
        }): _TreeSliverNodeNative<_Selected0>;
        readonly prototype: _TreeSliverNodeNative<_Selected0>;
        implement(args: readonly [unknown | null, options?: {
            children?: DartListInput<TreeSliverNode<unknown | null>, Readonly<{
                "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null];
            }>> | null | undefined;
            expanded?: boolean | undefined;
        }], implementation: Partial<_TreeSliverNodeNative<_Selected0>>): _TreeSliverNodeNative<_Selected0>;
    } & _FlaxInstanceType<_TreeSliverNodeNative<_Selected0>> & _FlaxDartType<_TreeSliverNodeNative<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (content: unknown | null, options?: {
        children?: DartListInput<TreeSliverNode<unknown | null>, Readonly<{
            "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null];
        }>> | null | undefined;
        expanded?: boolean | undefined;
    }) => _TreeSliverNodeNative<_Selected0>) & {
        (content: (_Selected0 | DartInput<_Selected0>), options?: {
            children?: DartListInput<TreeSliverNode<_Selected0>, Readonly<{
                "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [_Selected0];
            }>> | null | undefined;
            expanded?: boolean | undefined;
        }): _TreeSliverNodeNative<_Selected0>;
        readonly prototype: _TreeSliverNodeNative<_Selected0>;
        implement(args: readonly [unknown | null, options?: {
            children?: DartListInput<TreeSliverNode<unknown | null>, Readonly<{
                "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null];
            }>> | null | undefined;
            expanded?: boolean | undefined;
        }], implementation: Partial<_TreeSliverNodeNative<_Selected0>>): _TreeSliverNodeNative<_Selected0>;
    } & _FlaxInstanceType<_TreeSliverNodeNative<_Selected0>> & _FlaxDartType<_TreeSliverNodeNative<_Selected0>> : never : never;
}
export {};

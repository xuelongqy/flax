import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AbstractNode extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/node.dart::AbstractNode": readonly [];
}> {
    readonly __AbstractNode: unique symbol;
    readonly [_flaxDartTypeValue]: AbstractNode;
    readonly depth: number;
    readonly owner: unknown | null;
    readonly attached: boolean;
    readonly parent: AbstractNode | null;
    redepthChild(child: Readonly<{
        "__flaxBound:package:flutter/src/foundation/node.dart::AbstractNode": readonly [];
    }>): void;
    redepthChildren(): void;
    attach(owner: {}): void;
    detach(): void;
    adoptChild(child: Readonly<{
        "__flaxBound:package:flutter/src/foundation/node.dart::AbstractNode": readonly [];
    }>): void;
    dropChild(child: Readonly<{
        "__flaxBound:package:flutter/src/foundation/node.dart::AbstractNode": readonly [];
    }>): void;
}
export declare function _AbstractNodeFactory(): AbstractNode;
export interface _AbstractNodeNative extends AbstractNode {
    readonly [_flaxDartTypeValue]: _AbstractNodeNative;
    redepthChild(child: Readonly<{
        "__flaxBound:package:flutter/src/foundation/node.dart::AbstractNode": readonly [];
    }>): void;
    redepthChildren(): void;
    attach(owner: {}): void;
    detach(): void;
    adoptChild(child: Readonly<{
        "__flaxBound:package:flutter/src/foundation/node.dart::AbstractNode": readonly [];
    }>): void;
    dropChild(child: Readonly<{
        "__flaxBound:package:flutter/src/foundation/node.dart::AbstractNode": readonly [];
    }>): void;
    get depth(): number;
    get owner(): unknown | null;
    get attached(): boolean;
    get parent(): AbstractNode | null;
}
export declare abstract class _AbstractNodeNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AbstractNode>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: AbstractNode;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:AbstractNode", readonly [], false];
    constructor();
}
export declare namespace _AbstractNodeFactory {
    function implement(args: [], implementation: {}): AbstractNode;
}
declare const _AbstractNodeBinding: typeof _AbstractNodeFactory & (new () => _AbstractNodeNative);
export declare const AbstractNode: typeof _AbstractNodeBinding & _FlaxInstanceType<AbstractNode> & _FlaxDartType<AbstractNode, readonly ["class", "flax.core/sdk_foundation#type:AbstractNode", readonly [], false]>;
export {};

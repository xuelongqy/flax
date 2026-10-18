import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface AbstractNode extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/node.dart::AbstractNode": readonly [];
}> {
    readonly __AbstractNode: unique symbol;
    readonly [_flaxDartTypeValue]: AbstractNode;
}
export interface AbstractNode {
    readonly [_flaxDartTypeValue]: AbstractNode;
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
export declare abstract class AbstractNode extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AbstractNode>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: AbstractNode;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:AbstractNode", readonly [], false];
    constructor();
}
export declare namespace AbstractNode {
    function implement(args: [], implementation: {}): AbstractNode;
}

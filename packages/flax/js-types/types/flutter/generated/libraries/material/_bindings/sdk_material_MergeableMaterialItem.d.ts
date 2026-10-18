import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface MergeableMaterialItem extends Readonly<{
    "__flaxBound:package:flutter/src/material/mergeable_material.dart::MergeableMaterialItem": readonly [];
}> {
    readonly __MergeableMaterialItem: unique symbol;
    readonly [_flaxDartTypeValue]: MergeableMaterialItem;
}
export interface MergeableMaterialItem {
    readonly [_flaxDartTypeValue]: MergeableMaterialItem;
    get key(): upstream0.LocalKey;
}
export declare abstract class MergeableMaterialItem extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MergeableMaterialItem>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MergeableMaterialItem;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:MergeableMaterialItem", readonly [], false];
    constructor(key: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }>);
}
export declare namespace MergeableMaterialItem {
    function implement(args: [key: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }>], implementation: {}): MergeableMaterialItem;
}

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_MergeableMaterialItem';
import '@flax/flutter/material/_bindings/sdk_material_MergeableMaterialItem';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface MaterialGap extends Omit<upstream0.MergeableMaterialItem, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/material/mergeable_material.dart::MaterialGap": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/material/mergeable_material.dart::MergeableMaterialItem": readonly [];
}> {
    readonly __MaterialGap: unique symbol;
    readonly [_flaxDartTypeValue]: MaterialGap;
}
export interface MaterialGap {
    readonly [_flaxDartTypeValue]: MaterialGap;
    toString(): string;
    get size(): number;
    get key(): upstream1.LocalKey;
}
export declare abstract class MaterialGap extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaterialGap>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MaterialGap;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:MaterialGap", readonly [], false];
    constructor(options: {
        key: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }>;
        size?: number | undefined;
    });
}
export declare namespace MaterialGap {
    function implement(args: [options: {
        key: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }>;
        size?: number | undefined;
    }], implementation: {}): MaterialGap;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "key" | "size" | "toString" | "__flaxBound:package:flutter/src/material/mergeable_material.dart::MaterialGap" | "__flaxBound:package:flutter/src/material/mergeable_material.dart::MergeableMaterialItem";
export {};

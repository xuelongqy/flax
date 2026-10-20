import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_MergeableMaterialItem';
import '@flax/material-ui/_bindings/material_MergeableMaterialItem';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MaterialGap extends Omit<upstream0.MergeableMaterialItem, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:material_ui/src/mergeable_material.dart::MaterialGap": readonly [];
}>, Readonly<{
    "__flaxBound:package:material_ui/src/mergeable_material.dart::MergeableMaterialItem": readonly [];
}> {
    readonly __MaterialGap: unique symbol;
    readonly [_flaxDartTypeValue]: MaterialGap;
    readonly key: upstream1.LocalKey;
    readonly size: number;
    toString(): string;
}
export declare function _MaterialGapFactory(options: {
    key: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }>;
    size?: number | undefined;
}): MaterialGap;
export interface _MaterialGapNative extends MaterialGap {
    readonly [_flaxDartTypeValue]: _MaterialGapNative;
    toString(): string;
    get size(): number;
    get key(): upstream1.LocalKey;
}
export declare abstract class _MaterialGapNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaterialGap>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MaterialGap;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:MaterialGap", readonly [], false];
    constructor(options: {
        key: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }>;
        size?: number | undefined;
    });
}
export declare namespace _MaterialGapFactory {
    function implement(args: [options: {
        key: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }>;
        size?: number | undefined;
    }], implementation: {}): MaterialGap;
}
declare const _MaterialGapBinding: typeof _MaterialGapFactory & (new (options: {
    key: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }>;
    size?: number | undefined;
}) => _MaterialGapNative);
export declare const MaterialGap: typeof _MaterialGapBinding & _FlaxInstanceType<MaterialGap> & _FlaxDartType<MaterialGap, readonly ["class", "flax.material/material#type:MaterialGap", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "key" | "size" | "toString" | "__flaxBound:package:material_ui/src/mergeable_material.dart::MaterialGap" | "__flaxBound:package:material_ui/src/mergeable_material.dart::MergeableMaterialItem";
export {};

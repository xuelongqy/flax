import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_MergeableMaterialItem';
import '@flax/flutter/material/_bindings/sdk_material_MergeableMaterialItem';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface MaterialSlice extends Omit<upstream0.MergeableMaterialItem, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/material/mergeable_material.dart::MaterialSlice": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/material/mergeable_material.dart::MergeableMaterialItem": readonly [];
}> {
    readonly __MaterialSlice: unique symbol;
    readonly [_flaxDartTypeValue]: MaterialSlice;
}
export interface MaterialSlice {
    readonly [_flaxDartTypeValue]: MaterialSlice;
    toString(): string;
    get child(): Widget;
    get color(): upstream2.Color | null;
    get key(): upstream1.LocalKey;
}
export declare abstract class MaterialSlice extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaterialSlice>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MaterialSlice;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:MaterialSlice", readonly [], false];
    constructor(options: {
        key: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }>;
        child: Widget;
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
    });
}
export declare namespace MaterialSlice {
    function implement(args: [options: {
        key: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }>;
        child: Widget;
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
    }], implementation: {}): MaterialSlice;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "key" | "child" | "color" | "toString" | "__flaxBound:package:flutter/src/material/mergeable_material.dart::MaterialSlice" | "__flaxBound:package:flutter/src/material/mergeable_material.dart::MergeableMaterialItem";
export {};

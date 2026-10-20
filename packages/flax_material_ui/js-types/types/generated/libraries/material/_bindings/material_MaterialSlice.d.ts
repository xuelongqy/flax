import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_MergeableMaterialItem';
import '@flax/material-ui/_bindings/material_MergeableMaterialItem';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MaterialSlice extends Omit<upstream0.MergeableMaterialItem, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:material_ui/src/mergeable_material.dart::MaterialSlice": readonly [];
}>, Readonly<{
    "__flaxBound:package:material_ui/src/mergeable_material.dart::MergeableMaterialItem": readonly [];
}> {
    readonly __MaterialSlice: unique symbol;
    readonly [_flaxDartTypeValue]: MaterialSlice;
    readonly key: upstream1.LocalKey;
    readonly child: Widget;
    readonly color: upstream2.Color | null;
    toString(): string;
}
export declare function _MaterialSliceFactory(options: {
    key: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }>;
    child: Widget;
    color?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
}): MaterialSlice;
export interface _MaterialSliceNative extends MaterialSlice {
    readonly [_flaxDartTypeValue]: _MaterialSliceNative;
    toString(): string;
    get child(): Widget;
    get color(): upstream2.Color | null;
    get key(): upstream1.LocalKey;
}
export declare abstract class _MaterialSliceNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaterialSlice>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MaterialSlice;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:MaterialSlice", readonly [], false];
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
export declare namespace _MaterialSliceFactory {
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
declare const _MaterialSliceBinding: typeof _MaterialSliceFactory & (new (options: {
    key: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }>;
    child: Widget;
    color?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
}) => _MaterialSliceNative);
export declare const MaterialSlice: typeof _MaterialSliceBinding & _FlaxInstanceType<MaterialSlice> & _FlaxDartType<MaterialSlice, readonly ["class", "flax.material/material#type:MaterialSlice", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "key" | "child" | "color" | "toString" | "__flaxBound:package:material_ui/src/mergeable_material.dart::MaterialSlice" | "__flaxBound:package:material_ui/src/mergeable_material.dart::MergeableMaterialItem";
export {};

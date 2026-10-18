import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface SingleChildLayoutDelegate extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/shifted_box.dart::SingleChildLayoutDelegate": readonly [];
}> {
    readonly __SingleChildLayoutDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: SingleChildLayoutDelegate;
}
export interface SingleChildLayoutDelegate {
    readonly [_flaxDartTypeValue]: SingleChildLayoutDelegate;
    getSize(constraints: Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>): upstream1.Size;
    getConstraintsForChild(constraints: Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>): upstream2.BoxConstraints;
    getPositionForChild(size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, childSize: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream3.Offset;
}
export declare abstract class SingleChildLayoutDelegate extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SingleChildLayoutDelegate>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SingleChildLayoutDelegate;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SingleChildLayoutDelegate", readonly [], false];
    constructor(options?: {
        relayout?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> | null | undefined;
    });
    abstract shouldRelayout(oldDelegate: Readonly<{
        "__flaxBound:package:flutter/src/rendering/shifted_box.dart::SingleChildLayoutDelegate": readonly [];
    }>): boolean;
}
export declare namespace SingleChildLayoutDelegate {
    function implement(args: [options?: {
        relayout?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> | null | undefined;
    }], implementation: {
        shouldRelayout: ((oldDelegate: SingleChildLayoutDelegate) => boolean);
    }): SingleChildLayoutDelegate;
}

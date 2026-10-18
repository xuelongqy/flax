import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface MultiChildLayoutDelegate extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/custom_layout.dart::MultiChildLayoutDelegate": readonly [];
}> {
    readonly __MultiChildLayoutDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: MultiChildLayoutDelegate;
}
export interface MultiChildLayoutDelegate {
    readonly [_flaxDartTypeValue]: MultiChildLayoutDelegate;
    hasChild(childId: {}): boolean;
    layoutChild(childId: {}, constraints: Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>): upstream1.Size;
    positionChild(childId: {}, offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): void;
    getSize(constraints: Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>): upstream1.Size;
    toString(): string;
}
export declare abstract class MultiChildLayoutDelegate extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MultiChildLayoutDelegate>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MultiChildLayoutDelegate;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:MultiChildLayoutDelegate", readonly [], false];
    constructor(options?: {
        relayout?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> | null | undefined;
    });
    abstract performLayout(size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): void;
    abstract shouldRelayout(oldDelegate: Readonly<{
        "__flaxBound:package:flutter/src/rendering/custom_layout.dart::MultiChildLayoutDelegate": readonly [];
    }>): boolean;
}
export declare namespace MultiChildLayoutDelegate {
    function implement(args: [options?: {
        relayout?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> | null | undefined;
    }], implementation: {
        performLayout: ((size: upstream1.Size) => void);
        shouldRelayout: ((oldDelegate: MultiChildLayoutDelegate) => boolean);
    }): MultiChildLayoutDelegate;
}

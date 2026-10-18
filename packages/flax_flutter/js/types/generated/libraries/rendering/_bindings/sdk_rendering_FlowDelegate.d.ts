import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_FlowPaintingContext';
import '@flax/flutter/rendering/_bindings/sdk_rendering_FlowPaintingContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface FlowDelegate extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/flow.dart::FlowDelegate": readonly [];
}> {
    readonly __FlowDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: FlowDelegate;
}
export interface FlowDelegate {
    readonly [_flaxDartTypeValue]: FlowDelegate;
    getSize(constraints: Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>): upstream1.Size;
    getConstraintsForChild(i: number, constraints: Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>): upstream2.BoxConstraints;
    shouldRelayout(oldDelegate: Readonly<{
        "__flaxBound:package:flutter/src/rendering/flow.dart::FlowDelegate": readonly [];
    }>): boolean;
    toString(): string;
}
export declare abstract class FlowDelegate extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FlowDelegate>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: FlowDelegate;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:FlowDelegate", readonly [], false];
    constructor(options?: {
        repaint?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> | null | undefined;
    });
    abstract paintChildren(context: Readonly<{
        "__flaxBound:package:flutter/src/rendering/flow.dart::FlowPaintingContext": readonly [];
    }>): void;
    abstract shouldRepaint(oldDelegate: Readonly<{
        "__flaxBound:package:flutter/src/rendering/flow.dart::FlowDelegate": readonly [];
    }>): boolean;
}
export declare namespace FlowDelegate {
    function implement(args: [options?: {
        repaint?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> | null | undefined;
    }], implementation: {
        paintChildren: ((context: upstream3.FlowPaintingContext) => void);
        shouldRepaint: ((oldDelegate: FlowDelegate) => boolean);
    }): FlowDelegate;
}

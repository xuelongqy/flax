import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FlowPaintingContext extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/flow.dart::FlowPaintingContext": readonly [];
}> {
    readonly __FlowPaintingContext: unique symbol;
    readonly [_flaxDartTypeValue]: FlowPaintingContext;
    readonly size: upstream0.Size;
    readonly childCount: number;
    getChildSize(i: number): upstream0.Size | null;
    paintChild(i: number, options?: {
        opacity?: number | undefined;
        transform?: Readonly<{
            "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
        }> | undefined;
    }): void;
}
export declare namespace _FlowPaintingContextFactory {
    function implement(args: [], implementation: {
        getChildSize: ((i: number) => (Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null);
        paintChild: ((i: number, options?: {
            transform?: upstream1.Matrix4 | undefined;
            opacity?: number | undefined;
        }) => void);
        get size(): Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        get childCount(): number;
    }): FlowPaintingContext;
}
export declare const FlowPaintingContext: typeof _FlowPaintingContextFactory & _FlaxInstanceType<FlowPaintingContext> & _FlaxDartType<FlowPaintingContext, readonly ["class", "flax.core/sdk_rendering#type:FlowPaintingContext", readonly [], false]>;

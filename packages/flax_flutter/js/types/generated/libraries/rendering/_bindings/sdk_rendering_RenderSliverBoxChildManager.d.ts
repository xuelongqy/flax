import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverConstraints';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverConstraints';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface RenderSliverBoxChildManager extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver_multi_box_adaptor.dart::RenderSliverBoxChildManager": readonly [];
}> {
    readonly __RenderSliverBoxChildManager: unique symbol;
    readonly [_flaxDartTypeValue]: RenderSliverBoxChildManager;
}
export interface RenderSliverBoxChildManager {
    readonly [_flaxDartTypeValue]: RenderSliverBoxChildManager;
    didStartLayout(): void;
    didFinishLayout(): void;
    debugAssertChildListLocked(): boolean;
    get estimatedChildCount(): number | null;
}
export declare abstract class RenderSliverBoxChildManager extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RenderSliverBoxChildManager>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RenderSliverBoxChildManager;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:RenderSliverBoxChildManager", readonly [], false];
    constructor();
    abstract createChild(index: number, options: {
        after: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null;
    }): void;
    abstract removeChild(child: Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    abstract estimateMaxScrollOffset(constraints: Readonly<{
        "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>, options?: {
        firstIndex?: number | null | undefined;
        lastIndex?: number | null | undefined;
        leadingScrollOffset?: number | null | undefined;
        trailingScrollOffset?: number | null | undefined;
    }): number;
    abstract didAdoptChild(child: Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    abstract setDidUnderflow(value: boolean): void;
    abstract get childCount(): number;
}
export declare namespace RenderSliverBoxChildManager {
    function implement(args: [], implementation: {
        createChild: ((index: number, options: {
            after: upstream0.RenderBox | null;
        }) => void);
        removeChild: ((child: upstream0.RenderBox) => void);
        estimateMaxScrollOffset: ((constraints: upstream1.SliverConstraints, options?: {
            firstIndex?: number | null | undefined;
            lastIndex?: number | null | undefined;
            leadingScrollOffset?: number | null | undefined;
            trailingScrollOffset?: number | null | undefined;
        }) => number);
        didAdoptChild: ((child: upstream0.RenderBox) => void);
        setDidUnderflow: ((value: boolean) => void);
        get childCount(): number;
    }): RenderSliverBoxChildManager;
}

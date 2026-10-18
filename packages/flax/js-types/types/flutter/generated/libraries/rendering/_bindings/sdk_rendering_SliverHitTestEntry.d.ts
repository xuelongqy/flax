import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderSliver';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderSliver';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface SliverHitTestEntry extends Omit<upstream0.HitTestEntry<upstream1.RenderSliver>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverHitTestEntry": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [upstream1.RenderSliver];
}> {
    readonly __SliverHitTestEntry: unique symbol;
    readonly [_flaxDartTypeValue]: SliverHitTestEntry;
}
export interface SliverHitTestEntry {
    readonly [_flaxDartTypeValue]: SliverHitTestEntry;
    toString(): string;
    get mainAxisPosition(): number;
    get crossAxisPosition(): number;
    get target(): upstream1.RenderSliver;
    get transform(): upstream2.Matrix4 | null;
}
export declare abstract class SliverHitTestEntry extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverHitTestEntry>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SliverHitTestEntry;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverHitTestEntry", readonly [], false];
    constructor(target: Readonly<{
        "__flaxBound:package:flutter/src/rendering/sliver.dart::RenderSliver": readonly [];
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
    }>, options: {
        mainAxisPosition: number;
        crossAxisPosition: number;
    });
}
export declare namespace SliverHitTestEntry {
    function implement(args: [target: Readonly<{
        "__flaxBound:package:flutter/src/rendering/sliver.dart::RenderSliver": readonly [];
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
    }>, options: {
        mainAxisPosition: number;
        crossAxisPosition: number;
    }], implementation: {}): SliverHitTestEntry;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "target" | "transform" | "mainAxisPosition" | "crossAxisPosition" | "toString" | "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverHitTestEntry" | "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry";
export {};

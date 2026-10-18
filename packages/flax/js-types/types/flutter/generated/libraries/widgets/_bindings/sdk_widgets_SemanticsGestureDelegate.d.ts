import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderSemanticsGestureHandler';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderSemanticsGestureHandler';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface SemanticsGestureDelegate extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/gesture_detector.dart::SemanticsGestureDelegate": readonly [];
}> {
    readonly __SemanticsGestureDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: SemanticsGestureDelegate;
}
export interface SemanticsGestureDelegate {
    readonly [_flaxDartTypeValue]: SemanticsGestureDelegate;
    toString(): string;
}
export declare abstract class SemanticsGestureDelegate extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SemanticsGestureDelegate>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SemanticsGestureDelegate;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:SemanticsGestureDelegate", readonly [], false];
    constructor();
    abstract assignSemantics(renderObject: Readonly<{
        "__flaxBound:package:flutter/src/rendering/proxy_box.dart::RenderSemanticsGestureHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/proxy_box.dart::RenderProxyBoxWithHitTestBehavior": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/proxy_box.dart::RenderProxyBox": readonly [];
    }> & Readonly<{
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
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObjectWithChildMixin": readonly [upstream1.RenderBox];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/proxy_box.dart::RenderProxyBoxMixin": readonly [upstream1.RenderBox];
    }>): void;
}
export declare namespace SemanticsGestureDelegate {
    function implement(args: [], implementation: {
        assignSemantics: ((renderObject: upstream0.RenderSemanticsGestureHandler) => void);
    }): SemanticsGestureDelegate;
}

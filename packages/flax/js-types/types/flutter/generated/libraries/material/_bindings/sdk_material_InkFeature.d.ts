import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_MaterialInkController';
import '@flax/flutter/material/_bindings/sdk_material_MaterialInkController';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface InkFeature extends Readonly<{
    "__flaxBound:package:flutter/src/material/material.dart::InkFeature": readonly [];
}> {
    readonly __InkFeature: unique symbol;
    readonly [_flaxDartTypeValue]: InkFeature;
}
export interface InkFeature {
    readonly [_flaxDartTypeValue]: InkFeature;
    dispose(): void;
    toString(): string;
    get controller(): upstream0.MaterialInkController;
    get referenceBox(): upstream1.RenderBox;
    get onRemoved(): (() => void) | null;
}
export declare abstract class InkFeature extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<InkFeature>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: InkFeature;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:InkFeature", readonly [], false];
    constructor(options: {
        controller: Readonly<{
            "__flaxBound:package:flutter/src/material/material.dart::MaterialInkController": readonly [];
        }>;
        referenceBox: Readonly<{
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
        }>;
        onRemoved?: (() => void) | null | undefined;
    });
    abstract paintFeature(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, transform: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): void;
}
export declare namespace InkFeature {
    function implement(args: [options: {
        controller: Readonly<{
            "__flaxBound:package:flutter/src/material/material.dart::MaterialInkController": readonly [];
        }>;
        referenceBox: Readonly<{
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
        }>;
        onRemoved?: (() => void) | null | undefined;
    }], implementation: {
        paintFeature: ((canvas: upstream2.Canvas, transform: upstream3.Matrix4) => void);
    }): InkFeature;
}

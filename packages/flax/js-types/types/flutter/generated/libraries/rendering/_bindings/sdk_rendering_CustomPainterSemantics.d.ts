import { type FlaxInstanceType as _FlaxInstanceType, type DartSet, type DartSetInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream2 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsProperties';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsProperties';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream4 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsTag';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsTag';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CustomPainterSemantics extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/custom_paint.dart::CustomPainterSemantics": readonly [];
}> {
    readonly __CustomPainterSemantics: unique symbol;
    readonly [_flaxDartTypeValue]: CustomPainterSemantics;
    readonly key: upstream0.Key | null;
    readonly rect: upstream1.Rect;
    readonly transform: upstream3.Matrix4 | null;
    readonly properties: upstream2.SemanticsProperties;
    readonly tags: DartSet<upstream4.SemanticsTag> | null;
}
export declare function _CustomPainterSemanticsFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>;
    properties: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsProperties": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>;
    transform?: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }> | null | undefined;
    tags?: DartSetInput<upstream4.SemanticsTag, Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsTag": readonly [];
    }>> | null | undefined;
}): CustomPainterSemantics;
export interface _CustomPainterSemanticsNative extends CustomPainterSemantics {
    readonly [_flaxDartTypeValue]: _CustomPainterSemanticsNative;
    get key(): upstream0.Key | null;
    get rect(): upstream1.Rect;
    get transform(): upstream3.Matrix4 | null;
    get properties(): upstream2.SemanticsProperties;
    get tags(): DartSet<upstream4.SemanticsTag> | null;
}
export declare abstract class _CustomPainterSemanticsNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CustomPainterSemantics>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: CustomPainterSemantics;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:CustomPainterSemantics", readonly [], false];
    constructor(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        rect: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>;
        properties: Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsProperties": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        transform?: Readonly<{
            "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
        }> | null | undefined;
        tags?: DartSetInput<upstream4.SemanticsTag, Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsTag": readonly [];
        }>> | null | undefined;
    });
}
export declare namespace _CustomPainterSemanticsFactory {
    function implement(args: [options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        rect: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>;
        properties: Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsProperties": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        transform?: Readonly<{
            "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
        }> | null | undefined;
        tags?: DartSetInput<upstream4.SemanticsTag, Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsTag": readonly [];
        }>> | null | undefined;
    }], implementation: {}): CustomPainterSemantics;
}
declare const _CustomPainterSemanticsBinding: typeof _CustomPainterSemanticsFactory & (new (options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>;
    properties: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsProperties": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>;
    transform?: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }> | null | undefined;
    tags?: DartSetInput<upstream4.SemanticsTag, Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsTag": readonly [];
    }>> | null | undefined;
}) => _CustomPainterSemanticsNative);
export declare const CustomPainterSemantics: typeof _CustomPainterSemanticsBinding & _FlaxInstanceType<CustomPainterSemantics> & _FlaxDartType<CustomPainterSemantics, readonly ["class", "flax.core/sdk_rendering#type:CustomPainterSemantics", readonly [], false]>;
export {};

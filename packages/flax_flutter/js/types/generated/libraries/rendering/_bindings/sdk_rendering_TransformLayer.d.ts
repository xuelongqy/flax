import { type FlaxInstanceType as _FlaxInstanceType, type DartList } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_OffsetLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_OffsetLayer';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerLayer';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_Layer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Layer';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream8 from '@flax/flutter/rendering/_bindings/sdk_rendering_AnnotationResult';
import '@flax/flutter/rendering/_bindings/sdk_rendering_AnnotationResult';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SceneBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import type * as upstream12 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream13 from '@flax/dart/ui/_bindings/sdk_dart_ui_Scene';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Scene';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface TransformLayer extends Omit<upstream0.OffsetLayer, _flaxOwnMembers0>, Omit<upstream1.ContainerLayer, _flaxOwnMembers0 | keyof upstream0.OffsetLayer>, Omit<upstream2.Layer, _flaxOwnMembers0 | keyof upstream0.OffsetLayer | keyof upstream1.ContainerLayer>, Omit<upstream3.DiagnosticableTreeMixin, _flaxOwnMembers0 | keyof upstream0.OffsetLayer | keyof upstream1.ContainerLayer | keyof upstream2.Layer>, Omit<upstream4.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.OffsetLayer | keyof upstream1.ContainerLayer | keyof upstream2.Layer | keyof upstream3.DiagnosticableTreeMixin>, Omit<upstream5.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.OffsetLayer | keyof upstream1.ContainerLayer | keyof upstream2.Layer | keyof upstream3.DiagnosticableTreeMixin | keyof upstream4.DiagnosticableTree>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/layer.dart::TransformLayer": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/layer.dart::OffsetLayer": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/layer.dart::ContainerLayer": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __TransformLayer: unique symbol;
    readonly [_flaxDartTypeValue]: TransformLayer;
    readonly [_flaxDartMethodCases]?: {
        findAnnotations: _FlaxSignature0;
        find: _FlaxSignature1;
        findAllAnnotations: _FlaxSignature2;
    };
}
export interface TransformLayer {
    readonly [_flaxDartTypeValue]: TransformLayer;
    readonly [_flaxDartMethodCases]?: {
        findAnnotations: _FlaxSignature3;
        find: _FlaxSignature4;
        findAllAnnotations: _FlaxSignature5;
    };
    findAnnotations<S extends {} = {}>(result: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotationResult": readonly [_FlaxDartOutput<S>];
    }>, localPosition: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, options: {
        onlyFirst: boolean;
    }): boolean;
    applyTransform(child: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, transform: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): void;
    addToScene(builder: Readonly<{
        "__flaxBound:dart:ui::SceneBuilder": readonly [];
    }>): void;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toImage(bounds: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        pixelRatio?: number | undefined;
    }): Promise<upstream11.Image>;
    toImageSync(bounds: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        pixelRatio?: number | undefined;
    }): upstream11.Image;
    supportsRasterization(): boolean;
    buildScene(builder: Readonly<{
        "__flaxBound:dart:ui::SceneBuilder": readonly [];
    }>): upstream13.Scene;
    dispose(): void;
    updateSubtreeNeedsAddToScene(): void;
    attach(owner: {}): void;
    detach(): void;
    append(child: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    redepthChildren(): void;
    redepthChild(child: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    removeAllChildren(): void;
    addChildrenToScene(builder: Readonly<{
        "__flaxBound:dart:ui::SceneBuilder": readonly [];
    }>): void;
    debugDescribeChildren(): DartList<upstream14.DiagnosticsNode>;
    describeClipBounds(): upstream12.Rect | null;
    addCompositionCallback(callback: ((layer: upstream2.Layer) => void)): (() => void);
    remove(): void;
    find<S extends {} = {}>(localPosition: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): _FlaxDartOutput<S> | null;
    findAllAnnotations<S extends {} = {}>(localPosition: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream8.AnnotationResult<_FlaxDartOutput<S>>;
    toStringShort(): string;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream15.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        minLevel?: upstream15.DiagnosticLevel | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream16.DiagnosticsTreeStyle | null | undefined;
    }): upstream14.DiagnosticsNode;
    toString(options?: {
        minLevel?: upstream15.DiagnosticLevel | undefined;
    }): string;
    get transform(): upstream6.Matrix4 | null;
    get offset(): upstream7.Offset;
    get firstChild(): upstream2.Layer | null;
    get lastChild(): upstream2.Layer | null;
    get hasChildren(): boolean;
    get subtreeHasCompositionCallbacks(): boolean;
    get debugDisposed(): boolean;
    get debugHandleCount(): number;
    get parent(): upstream1.ContainerLayer | null;
    get alwaysNeedsAddToScene(): boolean;
    get owner(): unknown | null;
    get attached(): boolean;
    get depth(): number;
    get nextSibling(): upstream2.Layer | null;
    get previousSibling(): upstream2.Layer | null;
    get debugCreator(): unknown | null;
    set transform(value: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }> | null);
    set offset(value: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>);
    set debugCreator(value: unknown | null);
}
export declare abstract class TransformLayer extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TransformLayer>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TransformLayer;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:TransformLayer", readonly [], false];
    constructor(options?: {
        transform?: Readonly<{
            "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
        }> | null | undefined;
        offset?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | undefined;
    });
}
export declare namespace TransformLayer {
    function implement(args: [options?: {
        transform?: Readonly<{
            "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
        }> | null | undefined;
        offset?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | undefined;
    }], implementation: {}): TransformLayer;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "offset" | "firstChild" | "lastChild" | "hasChildren" | "subtreeHasCompositionCallbacks" | "debugDisposed" | "debugHandleCount" | "parent" | "alwaysNeedsAddToScene" | "owner" | "attached" | "depth" | "nextSibling" | "previousSibling" | "debugCreator" | "transform" | "findAnnotations" | "applyTransform" | "addToScene" | "debugFillProperties" | "toImage" | "toImageSync" | "supportsRasterization" | "buildScene" | "dispose" | "updateSubtreeNeedsAddToScene" | "attach" | "detach" | "append" | "redepthChildren" | "redepthChild" | "removeAllChildren" | "addChildrenToScene" | "debugDescribeChildren" | "describeClipBounds" | "addCompositionCallback" | "remove" | "find" | "findAllAnnotations" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "toString" | "__flaxBound:package:flutter/src/rendering/layer.dart::TransformLayer" | "__flaxBound:package:flutter/src/rendering/layer.dart::OffsetLayer" | "__flaxBound:package:flutter/src/rendering/layer.dart::ContainerLayer" | "__flaxBound:package:flutter/src/rendering/layer.dart::Layer" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (result: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotationResult": readonly [_Selected0];
    }>, localPosition: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, options: {
        onlyFirst: boolean;
    }) => boolean : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (localPosition: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) => _Selected0 | null : never : never;
}
interface _FlaxSignature2 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (localPosition: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) => upstream8.AnnotationResult<_Selected0> : never : never;
}
interface _FlaxSignature3 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (result: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotationResult": readonly [_Selected0];
    }>, localPosition: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, options: {
        onlyFirst: boolean;
    }) => boolean : never : never;
}
interface _FlaxSignature4 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (localPosition: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) => _Selected0 | null : never : never;
}
interface _FlaxSignature5 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (localPosition: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) => upstream8.AnnotationResult<_Selected0> : never : never;
}
export {};

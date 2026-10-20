import { type FlaxInstanceType as _FlaxInstanceType, type DartList } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_Layer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Layer';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream5 from '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerLayer';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_Picture';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Picture';
import type * as upstream7 from '@flax/flutter/rendering/_bindings/sdk_rendering_AnnotationResult';
import '@flax/flutter/rendering/_bindings/sdk_rendering_AnnotationResult';
import '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SceneBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PictureLayer extends Omit<upstream0.Layer, _flaxOwnMembers0>, Omit<upstream1.DiagnosticableTreeMixin, _flaxOwnMembers0 | keyof upstream0.Layer>, Omit<upstream2.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.Layer | keyof upstream1.DiagnosticableTreeMixin>, Omit<upstream3.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Layer | keyof upstream1.DiagnosticableTreeMixin | keyof upstream2.DiagnosticableTree>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/layer.dart::PictureLayer": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __PictureLayer: unique symbol;
    readonly [_flaxDartTypeValue]: PictureLayer;
    readonly [_flaxDartMethodCases]?: {
        findAnnotations: _FlaxSignature0;
        find: _FlaxSignature1;
        findAllAnnotations: _FlaxSignature2;
    };
    readonly subtreeHasCompositionCallbacks: boolean;
    readonly debugDisposed: boolean;
    readonly debugHandleCount: number;
    readonly parent: upstream5.ContainerLayer | null;
    readonly alwaysNeedsAddToScene: boolean;
    readonly owner: unknown | null;
    readonly attached: boolean;
    readonly depth: number;
    readonly nextSibling: upstream0.Layer | null;
    readonly previousSibling: upstream0.Layer | null;
    get debugCreator(): unknown | null;
    readonly canvasBounds: upstream4.Rect;
    get picture(): upstream6.Picture | null;
    get isComplexHint(): boolean;
    get willChangeHint(): boolean;
    supportsRasterization(): boolean;
    describeClipBounds(): upstream4.Rect | null;
    addCompositionCallback(callback: ((layer: upstream0.Layer) => void)): (() => void);
    attach(owner: {}): void;
    detach(): void;
    redepthChildren(): void;
    remove(): void;
    findAnnotations<S extends {} = {}>(result: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotationResult": readonly [_FlaxDartOutput<S>];
    }>, localPosition: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, options: {
        onlyFirst: boolean;
    }): boolean;
    find<S extends {} = {}>(localPosition: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): _FlaxDartOutput<S> | null;
    findAllAnnotations<S extends {} = {}>(localPosition: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream7.AnnotationResult<_FlaxDartOutput<S>>;
    addToScene(builder: Readonly<{
        "__flaxBound:dart:ui::SceneBuilder": readonly [];
    }>): void;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream11.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream11.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream13.DiagnosticsTreeStyle | null | undefined;
    }): upstream12.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream12.DiagnosticsNode>;
    toString(options?: {
        minLevel?: upstream11.DiagnosticLevel | undefined;
    }): string;
    dispose(): void;
    set debugCreator(value: unknown | null);
    set picture(value: Readonly<{
        "__flaxBound:dart:ui::Picture": readonly [];
    }> | null);
    set isComplexHint(value: boolean);
    set willChangeHint(value: boolean);
}
export declare function _PictureLayerFactory(canvasBounds: Readonly<{
    "__flaxBound:dart:ui::Rect": readonly [];
}>): PictureLayer;
export interface _PictureLayerNative extends PictureLayer {
    readonly [_flaxDartTypeValue]: _PictureLayerNative;
    readonly [_flaxDartMethodCases]?: {
        findAnnotations: _FlaxSignature3;
        find: _FlaxSignature4;
        findAllAnnotations: _FlaxSignature5;
    };
    supportsRasterization(): boolean;
    describeClipBounds(): upstream4.Rect | null;
    addCompositionCallback(callback: ((layer: upstream0.Layer) => void)): (() => void);
    attach(owner: {}): void;
    detach(): void;
    redepthChildren(): void;
    remove(): void;
    findAnnotations<S extends {} = {}>(result: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotationResult": readonly [_FlaxDartOutput<S>];
    }>, localPosition: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, options: {
        onlyFirst: boolean;
    }): boolean;
    find<S extends {} = {}>(localPosition: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): _FlaxDartOutput<S> | null;
    findAllAnnotations<S extends {} = {}>(localPosition: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream7.AnnotationResult<_FlaxDartOutput<S>>;
    addToScene(builder: Readonly<{
        "__flaxBound:dart:ui::SceneBuilder": readonly [];
    }>): void;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream11.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        minLevel?: upstream11.DiagnosticLevel | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream13.DiagnosticsTreeStyle | null | undefined;
    }): upstream12.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream12.DiagnosticsNode>;
    toString(options?: {
        minLevel?: upstream11.DiagnosticLevel | undefined;
    }): string;
    dispose(): void;
    get canvasBounds(): upstream4.Rect;
    get picture(): upstream6.Picture | null;
    get isComplexHint(): boolean;
    get willChangeHint(): boolean;
    get subtreeHasCompositionCallbacks(): boolean;
    get debugDisposed(): boolean;
    get debugHandleCount(): number;
    get parent(): upstream5.ContainerLayer | null;
    get alwaysNeedsAddToScene(): boolean;
    get owner(): unknown | null;
    get attached(): boolean;
    get depth(): number;
    get nextSibling(): upstream0.Layer | null;
    get previousSibling(): upstream0.Layer | null;
    get debugCreator(): unknown | null;
    set picture(value: Readonly<{
        "__flaxBound:dart:ui::Picture": readonly [];
    }> | null);
    set isComplexHint(value: boolean);
    set willChangeHint(value: boolean);
    set debugCreator(value: unknown | null);
}
export declare abstract class _PictureLayerNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PictureLayer>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PictureLayer;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:PictureLayer", readonly [], false];
    constructor(canvasBounds: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>);
}
export declare namespace _PictureLayerFactory {
    function implement(args: [canvasBounds: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>], implementation: {}): PictureLayer;
}
declare const _PictureLayerBinding: typeof _PictureLayerFactory & (new (canvasBounds: Readonly<{
    "__flaxBound:dart:ui::Rect": readonly [];
}>) => _PictureLayerNative);
export declare const PictureLayer: typeof _PictureLayerBinding & _FlaxInstanceType<PictureLayer> & _FlaxDartType<PictureLayer, readonly ["class", "flax.core/sdk_rendering#type:PictureLayer", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "subtreeHasCompositionCallbacks" | "debugDisposed" | "debugHandleCount" | "parent" | "alwaysNeedsAddToScene" | "owner" | "attached" | "depth" | "nextSibling" | "previousSibling" | "debugCreator" | "canvasBounds" | "picture" | "isComplexHint" | "willChangeHint" | "supportsRasterization" | "describeClipBounds" | "addCompositionCallback" | "attach" | "detach" | "redepthChildren" | "remove" | "findAnnotations" | "find" | "findAllAnnotations" | "addToScene" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "toString" | "dispose" | "__flaxBound:package:flutter/src/rendering/layer.dart::PictureLayer" | "__flaxBound:package:flutter/src/rendering/layer.dart::Layer" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
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
    }>) => upstream7.AnnotationResult<_Selected0> : never : never;
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
    }>) => upstream7.AnnotationResult<_Selected0> : never : never;
}
export {};

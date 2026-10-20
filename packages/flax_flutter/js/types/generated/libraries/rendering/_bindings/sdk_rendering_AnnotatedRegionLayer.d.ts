import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerLayer';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_Layer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Layer';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_Scene';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Scene';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SceneBuilder';
import type * as upstream9 from '@flax/flutter/rendering/_bindings/sdk_rendering_AnnotationResult';
import '@flax/flutter/rendering/_bindings/sdk_rendering_AnnotationResult';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream12 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AnnotatedRegionLayer<T extends {} = {}> extends Omit<upstream0.ContainerLayer, _flaxOwnMembers0>, Omit<upstream1.Layer, _flaxOwnMembers0 | keyof upstream0.ContainerLayer>, Omit<upstream2.DiagnosticableTreeMixin, _flaxOwnMembers0 | keyof upstream0.ContainerLayer | keyof upstream1.Layer>, Omit<upstream3.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.ContainerLayer | keyof upstream1.Layer | keyof upstream2.DiagnosticableTreeMixin>, Omit<upstream4.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.ContainerLayer | keyof upstream1.Layer | keyof upstream2.DiagnosticableTreeMixin | keyof upstream3.DiagnosticableTree>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotatedRegionLayer": readonly [T];
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
    readonly __AnnotatedRegionLayer: unique symbol;
    readonly [_flaxDartTypeValue]: AnnotatedRegionLayer<T>;
    readonly [_flaxDartMethodCases]?: {
        findAnnotations: _FlaxSignature1<T>;
        find: _FlaxSignature2<T>;
        findAllAnnotations: _FlaxSignature3<T>;
    };
    readonly firstChild: upstream1.Layer | null;
    readonly lastChild: upstream1.Layer | null;
    readonly hasChildren: boolean;
    readonly subtreeHasCompositionCallbacks: boolean;
    readonly debugDisposed: boolean;
    readonly debugHandleCount: number;
    readonly parent: upstream0.ContainerLayer | null;
    readonly alwaysNeedsAddToScene: boolean;
    readonly owner: unknown | null;
    readonly attached: boolean;
    readonly depth: number;
    readonly nextSibling: upstream1.Layer | null;
    readonly previousSibling: upstream1.Layer | null;
    get debugCreator(): unknown | null;
    readonly value: T;
    readonly size: upstream5.Size | null;
    readonly offset: upstream6.Offset;
    readonly opaque: boolean;
    supportsRasterization(): boolean;
    buildScene(builder: Readonly<{
        "__flaxBound:dart:ui::SceneBuilder": readonly [];
    }>): upstream7.Scene;
    dispose(): void;
    updateSubtreeNeedsAddToScene(): void;
    findAnnotations<S extends {} = {}>(result: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotationResult": readonly [_FlaxDartOutput<S>];
    }>, localPosition: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, options: {
        onlyFirst: boolean;
    }): boolean;
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
    addToScene(builder: Readonly<{
        "__flaxBound:dart:ui::SceneBuilder": readonly [];
    }>): void;
    addChildrenToScene(builder: Readonly<{
        "__flaxBound:dart:ui::SceneBuilder": readonly [];
    }>): void;
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
    debugDescribeChildren(): DartList<upstream11.DiagnosticsNode>;
    describeClipBounds(): upstream12.Rect | null;
    addCompositionCallback(callback: ((layer: upstream1.Layer) => void)): (() => void);
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
    }>): upstream9.AnnotationResult<_FlaxDartOutput<S>>;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream14.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream14.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream15.DiagnosticsTreeStyle | null | undefined;
    }): upstream11.DiagnosticsNode;
    toString(options?: {
        minLevel?: upstream14.DiagnosticLevel | undefined;
    }): string;
    set debugCreator(value: unknown | null);
}
export declare function _AnnotatedRegionLayerFactory<T extends {} = {}>(value: (T | _FlaxDartOutput<T>), options?: {
    size?: (Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
    offset?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
    opaque?: boolean | undefined;
}): AnnotatedRegionLayer<T>;
export declare function _AnnotatedRegionLayerFactory(value: {}, options?: {
    size?: (Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
    offset?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
    opaque?: boolean | undefined;
}): AnnotatedRegionLayer<{}>;
export interface _AnnotatedRegionLayerNative<T extends {} = {}> extends AnnotatedRegionLayer<T> {
    readonly [_flaxDartTypeValue]: _AnnotatedRegionLayerNative<T>;
    readonly [_flaxDartMethodCases]?: {
        findAnnotations: _FlaxSignature4<T>;
        find: _FlaxSignature5<T>;
        findAllAnnotations: _FlaxSignature6<T>;
    };
    supportsRasterization(): boolean;
    buildScene(builder: Readonly<{
        "__flaxBound:dart:ui::SceneBuilder": readonly [];
    }>): upstream7.Scene;
    dispose(): void;
    updateSubtreeNeedsAddToScene(): void;
    findAnnotations<S extends {} = {}>(result: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotationResult": readonly [_FlaxDartOutput<S>];
    }>, localPosition: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, options: {
        onlyFirst: boolean;
    }): boolean;
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
    addToScene(builder: Readonly<{
        "__flaxBound:dart:ui::SceneBuilder": readonly [];
    }>): void;
    addChildrenToScene(builder: Readonly<{
        "__flaxBound:dart:ui::SceneBuilder": readonly [];
    }>): void;
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
    debugDescribeChildren(): DartList<upstream11.DiagnosticsNode>;
    describeClipBounds(): upstream12.Rect | null;
    addCompositionCallback(callback: ((layer: upstream1.Layer) => void)): (() => void);
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
    }>): upstream9.AnnotationResult<_FlaxDartOutput<S>>;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream14.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        minLevel?: upstream14.DiagnosticLevel | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream15.DiagnosticsTreeStyle | null | undefined;
    }): upstream11.DiagnosticsNode;
    toString(options?: {
        minLevel?: upstream14.DiagnosticLevel | undefined;
    }): string;
    get value(): T;
    get size(): upstream5.Size | null;
    get offset(): upstream6.Offset;
    get opaque(): boolean;
    get firstChild(): upstream1.Layer | null;
    get lastChild(): upstream1.Layer | null;
    get hasChildren(): boolean;
    get subtreeHasCompositionCallbacks(): boolean;
    get debugDisposed(): boolean;
    get debugHandleCount(): number;
    get parent(): upstream0.ContainerLayer | null;
    get alwaysNeedsAddToScene(): boolean;
    get owner(): unknown | null;
    get attached(): boolean;
    get depth(): number;
    get nextSibling(): upstream1.Layer | null;
    get previousSibling(): upstream1.Layer | null;
    get debugCreator(): unknown | null;
    set debugCreator(value: unknown | null);
}
export declare abstract class _AnnotatedRegionLayerNative<T extends {} = {}> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AnnotatedRegionLayer<{}>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: AnnotatedRegionLayer<{}>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:AnnotatedRegionLayer", readonly [readonly ["any", null, readonly [], false]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature7;
    constructor(value: {}, options?: {
        size?: (Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        offset?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        opaque?: boolean | undefined;
    });
}
export declare namespace _AnnotatedRegionLayerFactory {
    function implement<T extends {} = {}>(args: [value: {}, options?: {
        size?: (Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        offset?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        opaque?: boolean | undefined;
    }], implementation: {}): AnnotatedRegionLayer<T>;
}
declare const _AnnotatedRegionLayerBinding: typeof _AnnotatedRegionLayerFactory & (new <T extends {} = {}>(value: {}, options?: {
    size?: (Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
    offset?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
    opaque?: boolean | undefined;
}) => _AnnotatedRegionLayerNative<T>);
export declare const AnnotatedRegionLayer: typeof _AnnotatedRegionLayerBinding & _FlaxInstanceType<AnnotatedRegionLayer<{}>> & _FlaxDartType<AnnotatedRegionLayer<{}>, readonly ["class", "flax.core/sdk_rendering#type:AnnotatedRegionLayer", readonly [readonly ["any", null, readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "firstChild" | "lastChild" | "hasChildren" | "subtreeHasCompositionCallbacks" | "debugDisposed" | "debugHandleCount" | "parent" | "alwaysNeedsAddToScene" | "owner" | "attached" | "depth" | "nextSibling" | "previousSibling" | "debugCreator" | "value" | "size" | "offset" | "opaque" | "supportsRasterization" | "buildScene" | "dispose" | "updateSubtreeNeedsAddToScene" | "findAnnotations" | "attach" | "detach" | "append" | "redepthChildren" | "redepthChild" | "removeAllChildren" | "addToScene" | "addChildrenToScene" | "applyTransform" | "debugDescribeChildren" | "describeClipBounds" | "addCompositionCallback" | "remove" | "find" | "findAllAnnotations" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "toString" | "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotatedRegionLayer" | "__flaxBound:package:flutter/src/rendering/layer.dart::ContainerLayer" | "__flaxBound:package:flutter/src/rendering/layer.dart::Layer" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (new (value: {}, options?: {
        size?: (Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        offset?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        opaque?: boolean | undefined;
    }) => _AnnotatedRegionLayerNative<_Selected0>) & {
        (value: (_Selected0 | DartInput<_Selected0>), options?: {
            size?: (Readonly<{
                "__flaxBound:dart:ui::Size": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::OffsetBase": readonly [];
            }>) | null | undefined;
            offset?: (Readonly<{
                "__flaxBound:dart:ui::Offset": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::OffsetBase": readonly [];
            }>) | null | undefined;
            opaque?: boolean | undefined;
        }): _AnnotatedRegionLayerNative<_Selected0>;
        readonly prototype: _AnnotatedRegionLayerNative<_Selected0>;
        implement(args: readonly [{}, options?: {
            size?: (Readonly<{
                "__flaxBound:dart:ui::Size": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::OffsetBase": readonly [];
            }>) | null | undefined;
            offset?: (Readonly<{
                "__flaxBound:dart:ui::Offset": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::OffsetBase": readonly [];
            }>) | null | undefined;
            opaque?: boolean | undefined;
        }], implementation: Partial<_AnnotatedRegionLayerNative<_Selected0>>): _AnnotatedRegionLayerNative<_Selected0>;
    } & _FlaxInstanceType<_AnnotatedRegionLayerNative<_Selected0>> & _FlaxDartType<_AnnotatedRegionLayerNative<_Selected0>> : never : never;
}
interface _FlaxSignature1<_OwnerType0 extends {}> extends _FlaxDartSignature {
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
interface _FlaxSignature2<_OwnerType0 extends {}> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (localPosition: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) => _Selected0 | null : never : never;
}
interface _FlaxSignature3<_OwnerType0 extends {}> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (localPosition: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) => upstream9.AnnotationResult<_Selected0> : never : never;
}
interface _FlaxSignature4<_OwnerType0 extends {}> extends _FlaxDartSignature {
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
interface _FlaxSignature5<_OwnerType0 extends {}> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (localPosition: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) => _Selected0 | null : never : never;
}
interface _FlaxSignature6<_OwnerType0 extends {}> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (localPosition: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) => upstream9.AnnotationResult<_Selected0> : never : never;
}
interface _FlaxSignature7 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (new (value: {}, options?: {
        size?: (Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        offset?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        opaque?: boolean | undefined;
    }) => _AnnotatedRegionLayerNative<_Selected0>) & {
        (value: (_Selected0 | DartInput<_Selected0>), options?: {
            size?: (Readonly<{
                "__flaxBound:dart:ui::Size": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::OffsetBase": readonly [];
            }>) | null | undefined;
            offset?: (Readonly<{
                "__flaxBound:dart:ui::Offset": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::OffsetBase": readonly [];
            }>) | null | undefined;
            opaque?: boolean | undefined;
        }): _AnnotatedRegionLayerNative<_Selected0>;
        readonly prototype: _AnnotatedRegionLayerNative<_Selected0>;
        implement(args: readonly [{}, options?: {
            size?: (Readonly<{
                "__flaxBound:dart:ui::Size": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::OffsetBase": readonly [];
            }>) | null | undefined;
            offset?: (Readonly<{
                "__flaxBound:dart:ui::Offset": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::OffsetBase": readonly [];
            }>) | null | undefined;
            opaque?: boolean | undefined;
        }], implementation: Partial<_AnnotatedRegionLayerNative<_Selected0>>): _AnnotatedRegionLayerNative<_Selected0>;
    } & _FlaxInstanceType<_AnnotatedRegionLayerNative<_Selected0>> & _FlaxDartType<_AnnotatedRegionLayerNative<_Selected0>> : never : never;
}
export {};

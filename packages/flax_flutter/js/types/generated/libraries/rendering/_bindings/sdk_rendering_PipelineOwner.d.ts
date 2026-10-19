import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartList } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsUpdate';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsUpdate';
import type * as upstream4 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import type * as upstream5 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsOwner';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsOwner';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream10 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsHandle';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsHandle';
import '@flax/flutter/rendering/_bindings/sdk_rendering_PipelineManifold';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface PipelineOwner extends Omit<upstream0.DiagnosticableTreeMixin, _flaxOwnMembers0>, Omit<upstream1.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.DiagnosticableTreeMixin>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.DiagnosticableTreeMixin | keyof upstream1.DiagnosticableTree>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::PipelineOwner": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __PipelineOwner: unique symbol;
    readonly [_flaxDartTypeValue]: PipelineOwner;
}
export interface PipelineOwner {
    readonly [_flaxDartTypeValue]: PipelineOwner;
    get nodesNeedingLayout(): DartIterable<upstream4.RenderObject>;
    get nodesNeedingPaint(): DartIterable<upstream4.RenderObject>;
    toString(options?: {
        minLevel?: upstream6.DiagnosticLevel | undefined;
    }): string;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream6.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        minLevel?: upstream6.DiagnosticLevel | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream8.DiagnosticsTreeStyle | null | undefined;
    }): upstream7.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream7.DiagnosticsNode>;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    requestVisualUpdate(): void;
    flushLayout(): void;
    flushCompositingBits(): void;
    flushPaint(): void;
    ensureSemantics(options?: {
        listener?: (() => void) | null | undefined;
    }): upstream10.SemanticsHandle;
    flushSemantics(): void;
    attach(manifold: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::PipelineManifold": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): void;
    detach(): void;
    adoptChild(child: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::PipelineOwner": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    dropChild(child: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::PipelineOwner": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    visitChildren(visitor: ((child: PipelineOwner) => void)): void;
    dispose(): void;
    get onNeedVisualUpdate(): (() => void) | null;
    get onSemanticsOwnerCreated(): (() => void) | null;
    get onSemanticsUpdate(): ((update: Readonly<{
        "__flaxBound:dart:ui::SemanticsUpdate": readonly [];
    }>) => void) | null;
    get onSemanticsOwnerDisposed(): (() => void) | null;
    get rootNode(): upstream4.RenderObject | null;
    get debugDoingLayout(): boolean;
    get debugDoingPaint(): boolean;
    get semanticsOwner(): upstream5.SemanticsOwner | null;
    get debugOutstandingSemanticsHandles(): number;
    set rootNode(value: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null);
}
export declare abstract class PipelineOwner extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PipelineOwner>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PipelineOwner;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:PipelineOwner", readonly [], false];
    constructor(options?: {
        onNeedVisualUpdate?: (() => void) | null | undefined;
        onSemanticsOwnerCreated?: (() => void) | null | undefined;
        onSemanticsUpdate?: ((update: upstream3.SemanticsUpdate) => void) | null | undefined;
        onSemanticsOwnerDisposed?: (() => void) | null | undefined;
    });
}
export declare namespace PipelineOwner {
    function implement(args: [options?: {
        onNeedVisualUpdate?: (() => void) | null | undefined;
        onSemanticsOwnerCreated?: (() => void) | null | undefined;
        onSemanticsUpdate?: ((update: upstream3.SemanticsUpdate) => void) | null | undefined;
        onSemanticsOwnerDisposed?: (() => void) | null | undefined;
    }], implementation: {}): PipelineOwner;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "onNeedVisualUpdate" | "onSemanticsOwnerCreated" | "onSemanticsUpdate" | "onSemanticsOwnerDisposed" | "rootNode" | "nodesNeedingLayout" | "debugDoingLayout" | "nodesNeedingPaint" | "debugDoingPaint" | "semanticsOwner" | "debugOutstandingSemanticsHandles" | "toString" | "toStringShallow" | "toStringDeep" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "debugFillProperties" | "requestVisualUpdate" | "flushLayout" | "flushCompositingBits" | "flushPaint" | "ensureSemantics" | "flushSemantics" | "attach" | "detach" | "adoptChild" | "dropChild" | "visitChildren" | "dispose" | "__flaxBound:package:flutter/src/rendering/object.dart::PipelineOwner" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

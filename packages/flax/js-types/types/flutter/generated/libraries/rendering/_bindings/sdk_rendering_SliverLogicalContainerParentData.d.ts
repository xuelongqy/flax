import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverLogicalParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverLogicalParentData';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerParentDataMixin';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerParentDataMixin';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderSliver';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderSliver';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SliverLogicalContainerParentData extends Omit<upstream0.SliverLogicalParentData, _flaxOwnMembers0>, Omit<upstream1.ParentData, _flaxOwnMembers0 | keyof upstream0.SliverLogicalParentData>, Omit<upstream2.ContainerParentDataMixin<upstream3.RenderSliver>, _flaxOwnMembers0 | keyof upstream0.SliverLogicalParentData | keyof upstream1.ParentData>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverLogicalContainerParentData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverLogicalParentData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin": readonly [upstream3.RenderSliver];
}> {
    readonly __SliverLogicalContainerParentData: unique symbol;
    readonly [_flaxDartTypeValue]: SliverLogicalContainerParentData;
    get layoutOffset(): number | null;
    get previousSibling(): upstream3.RenderSliver | null;
    get nextSibling(): upstream3.RenderSliver | null;
    toString(): string;
    detach(): void;
    set layoutOffset(value: number | null);
    set previousSibling(value: (Readonly<{
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
    }>) | null);
    set nextSibling(value: (Readonly<{
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
    }>) | null);
}
export declare function _SliverLogicalContainerParentDataFactory(): SliverLogicalContainerParentData;
export interface _SliverLogicalContainerParentDataNative extends SliverLogicalContainerParentData {
    readonly [_flaxDartTypeValue]: _SliverLogicalContainerParentDataNative;
    toString(): string;
    detach(): void;
    get layoutOffset(): number | null;
    get previousSibling(): upstream3.RenderSliver | null;
    get nextSibling(): upstream3.RenderSliver | null;
    set layoutOffset(value: number | null);
    set previousSibling(value: (Readonly<{
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
    }>) | null);
    set nextSibling(value: (Readonly<{
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
    }>) | null);
}
export declare abstract class _SliverLogicalContainerParentDataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverLogicalContainerParentData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SliverLogicalContainerParentData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverLogicalContainerParentData", readonly [], false];
    constructor();
}
export declare namespace _SliverLogicalContainerParentDataFactory {
    function implement(args: [], implementation: {}): SliverLogicalContainerParentData;
}
declare const _SliverLogicalContainerParentDataBinding: typeof _SliverLogicalContainerParentDataFactory & (new () => _SliverLogicalContainerParentDataNative);
export declare const SliverLogicalContainerParentData: typeof _SliverLogicalContainerParentDataBinding & _FlaxInstanceType<SliverLogicalContainerParentData> & _FlaxDartType<SliverLogicalContainerParentData, readonly ["class", "flax.core/sdk_rendering#type:SliverLogicalContainerParentData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "layoutOffset" | "previousSibling" | "nextSibling" | "toString" | "detach" | "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverLogicalContainerParentData" | "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverLogicalParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin";
export {};

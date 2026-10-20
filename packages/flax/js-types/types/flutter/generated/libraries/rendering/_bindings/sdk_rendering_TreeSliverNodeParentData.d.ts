import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverMultiBoxAdaptorParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverMultiBoxAdaptorParentData';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverLogicalParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverLogicalParentData';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerParentDataMixin';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerParentDataMixin';
import type * as upstream4 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream5 from '@flax/flutter/rendering/_bindings/sdk_rendering_KeepAliveParentDataMixin';
import '@flax/flutter/rendering/_bindings/sdk_rendering_KeepAliveParentDataMixin';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TreeSliverNodeParentData extends Omit<upstream0.SliverMultiBoxAdaptorParentData, _flaxOwnMembers0>, Omit<upstream1.SliverLogicalParentData, _flaxOwnMembers0 | keyof upstream0.SliverMultiBoxAdaptorParentData>, Omit<upstream2.ParentData, _flaxOwnMembers0 | keyof upstream0.SliverMultiBoxAdaptorParentData | keyof upstream1.SliverLogicalParentData>, Omit<upstream3.ContainerParentDataMixin<upstream4.RenderBox>, _flaxOwnMembers0 | keyof upstream0.SliverMultiBoxAdaptorParentData | keyof upstream1.SliverLogicalParentData | keyof upstream2.ParentData>, Omit<upstream5.KeepAliveParentDataMixin, _flaxOwnMembers0 | keyof upstream0.SliverMultiBoxAdaptorParentData | keyof upstream1.SliverLogicalParentData | keyof upstream2.ParentData | keyof upstream3.ContainerParentDataMixin<upstream4.RenderBox>>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver_tree.dart::TreeSliverNodeParentData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver_multi_box_adaptor.dart::SliverMultiBoxAdaptorParentData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverLogicalParentData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin": readonly [upstream4.RenderBox];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver_multi_box_adaptor.dart::KeepAliveParentDataMixin": readonly [];
}> {
    readonly __TreeSliverNodeParentData: unique symbol;
    readonly [_flaxDartTypeValue]: TreeSliverNodeParentData;
    get index(): number | null;
    readonly keptAlive: boolean;
    get layoutOffset(): number | null;
    get previousSibling(): upstream4.RenderBox | null;
    get nextSibling(): upstream4.RenderBox | null;
    get keepAlive(): boolean;
    get depth(): number;
    toString(): string;
    detach(): void;
    set index(value: number | null);
    set layoutOffset(value: number | null);
    set previousSibling(value: (Readonly<{
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
    }>) | null);
    set nextSibling(value: (Readonly<{
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
    }>) | null);
    set keepAlive(value: boolean);
    set depth(value: number);
}
export declare function _TreeSliverNodeParentDataFactory(): TreeSliverNodeParentData;
export interface _TreeSliverNodeParentDataNative extends TreeSliverNodeParentData {
    readonly [_flaxDartTypeValue]: _TreeSliverNodeParentDataNative;
    toString(): string;
    detach(): void;
    get depth(): number;
    get index(): number | null;
    get keptAlive(): boolean;
    get layoutOffset(): number | null;
    get previousSibling(): upstream4.RenderBox | null;
    get nextSibling(): upstream4.RenderBox | null;
    get keepAlive(): boolean;
    set depth(value: number);
    set index(value: number | null);
    set layoutOffset(value: number | null);
    set previousSibling(value: (Readonly<{
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
    }>) | null);
    set nextSibling(value: (Readonly<{
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
    }>) | null);
    set keepAlive(value: boolean);
}
export declare abstract class _TreeSliverNodeParentDataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TreeSliverNodeParentData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TreeSliverNodeParentData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:TreeSliverNodeParentData", readonly [], false];
    constructor();
}
export declare namespace _TreeSliverNodeParentDataFactory {
    function implement(args: [], implementation: {}): TreeSliverNodeParentData;
}
declare const _TreeSliverNodeParentDataBinding: typeof _TreeSliverNodeParentDataFactory & (new () => _TreeSliverNodeParentDataNative);
export declare const TreeSliverNodeParentData: typeof _TreeSliverNodeParentDataBinding & _FlaxInstanceType<TreeSliverNodeParentData> & _FlaxDartType<TreeSliverNodeParentData, readonly ["class", "flax.core/sdk_rendering#type:TreeSliverNodeParentData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "index" | "keptAlive" | "layoutOffset" | "previousSibling" | "nextSibling" | "keepAlive" | "depth" | "toString" | "detach" | "__flaxBound:package:flutter/src/rendering/sliver_tree.dart::TreeSliverNodeParentData" | "__flaxBound:package:flutter/src/rendering/sliver_multi_box_adaptor.dart::SliverMultiBoxAdaptorParentData" | "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverLogicalParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin" | "__flaxBound:package:flutter/src/rendering/sliver_multi_box_adaptor.dart::KeepAliveParentDataMixin";
export {};

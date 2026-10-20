import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverLogicalParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverLogicalParentData';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerParentDataMixin';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerParentDataMixin';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream4 from '@flax/flutter/rendering/_bindings/sdk_rendering_KeepAliveParentDataMixin';
import '@flax/flutter/rendering/_bindings/sdk_rendering_KeepAliveParentDataMixin';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SliverMultiBoxAdaptorParentData extends Omit<upstream0.SliverLogicalParentData, _flaxOwnMembers0>, Omit<upstream1.ParentData, _flaxOwnMembers0 | keyof upstream0.SliverLogicalParentData>, Omit<upstream2.ContainerParentDataMixin<upstream3.RenderBox>, _flaxOwnMembers0 | keyof upstream0.SliverLogicalParentData | keyof upstream1.ParentData>, Omit<upstream4.KeepAliveParentDataMixin, _flaxOwnMembers0 | keyof upstream0.SliverLogicalParentData | keyof upstream1.ParentData | keyof upstream2.ContainerParentDataMixin<upstream3.RenderBox>>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver_multi_box_adaptor.dart::SliverMultiBoxAdaptorParentData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverLogicalParentData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin": readonly [upstream3.RenderBox];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver_multi_box_adaptor.dart::KeepAliveParentDataMixin": readonly [];
}> {
    readonly __SliverMultiBoxAdaptorParentData: unique symbol;
    readonly [_flaxDartTypeValue]: SliverMultiBoxAdaptorParentData;
    get layoutOffset(): number | null;
    get previousSibling(): upstream3.RenderBox | null;
    get nextSibling(): upstream3.RenderBox | null;
    get keepAlive(): boolean;
    readonly keptAlive: boolean;
    get index(): number | null;
    toString(): string;
    detach(): void;
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
    set index(value: number | null);
}
export declare function _SliverMultiBoxAdaptorParentDataFactory(): SliverMultiBoxAdaptorParentData;
export interface _SliverMultiBoxAdaptorParentDataNative extends SliverMultiBoxAdaptorParentData {
    readonly [_flaxDartTypeValue]: _SliverMultiBoxAdaptorParentDataNative;
    toString(): string;
    detach(): void;
    get index(): number | null;
    get keptAlive(): boolean;
    get layoutOffset(): number | null;
    get previousSibling(): upstream3.RenderBox | null;
    get nextSibling(): upstream3.RenderBox | null;
    get keepAlive(): boolean;
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
export declare abstract class _SliverMultiBoxAdaptorParentDataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverMultiBoxAdaptorParentData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SliverMultiBoxAdaptorParentData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverMultiBoxAdaptorParentData", readonly [], false];
    constructor();
}
export declare namespace _SliverMultiBoxAdaptorParentDataFactory {
    function implement(args: [], implementation: {}): SliverMultiBoxAdaptorParentData;
}
declare const _SliverMultiBoxAdaptorParentDataBinding: typeof _SliverMultiBoxAdaptorParentDataFactory & (new () => _SliverMultiBoxAdaptorParentDataNative);
export declare const SliverMultiBoxAdaptorParentData: typeof _SliverMultiBoxAdaptorParentDataBinding & _FlaxInstanceType<SliverMultiBoxAdaptorParentData> & _FlaxDartType<SliverMultiBoxAdaptorParentData, readonly ["class", "flax.core/sdk_rendering#type:SliverMultiBoxAdaptorParentData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "layoutOffset" | "previousSibling" | "nextSibling" | "keepAlive" | "keptAlive" | "index" | "toString" | "detach" | "__flaxBound:package:flutter/src/rendering/sliver_multi_box_adaptor.dart::SliverMultiBoxAdaptorParentData" | "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverLogicalParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin" | "__flaxBound:package:flutter/src/rendering/sliver_multi_box_adaptor.dart::KeepAliveParentDataMixin";
export {};

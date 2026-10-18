import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverPhysicalParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverPhysicalParentData';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerParentDataMixin';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerParentDataMixin';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderSliver';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderSliver';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface SliverPhysicalContainerParentData extends Omit<upstream0.SliverPhysicalParentData, _flaxOwnMembers0>, Omit<upstream1.ParentData, _flaxOwnMembers0 | keyof upstream0.SliverPhysicalParentData>, Omit<upstream2.ContainerParentDataMixin<upstream3.RenderSliver>, _flaxOwnMembers0 | keyof upstream0.SliverPhysicalParentData | keyof upstream1.ParentData>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverPhysicalContainerParentData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverPhysicalParentData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin": readonly [upstream3.RenderSliver];
}> {
    readonly __SliverPhysicalContainerParentData: unique symbol;
    readonly [_flaxDartTypeValue]: SliverPhysicalContainerParentData;
}
export interface SliverPhysicalContainerParentData {
    readonly [_flaxDartTypeValue]: SliverPhysicalContainerParentData;
    applyPaintTransform(transform: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): void;
    toString(): string;
    detach(): void;
    get paintOffset(): upstream4.Offset;
    get crossAxisFlex(): number | null;
    get previousSibling(): upstream3.RenderSliver | null;
    get nextSibling(): upstream3.RenderSliver | null;
    set paintOffset(value: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>);
    set crossAxisFlex(value: number | null);
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
export declare abstract class SliverPhysicalContainerParentData extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverPhysicalContainerParentData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SliverPhysicalContainerParentData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverPhysicalContainerParentData", readonly [], false];
    constructor();
}
export declare namespace SliverPhysicalContainerParentData {
    function implement(args: [], implementation: {}): SliverPhysicalContainerParentData;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "paintOffset" | "crossAxisFlex" | "previousSibling" | "nextSibling" | "applyPaintTransform" | "toString" | "detach" | "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverPhysicalContainerParentData" | "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverPhysicalParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin";
export {};

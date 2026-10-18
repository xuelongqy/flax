import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_SliverMultiBoxAdaptorWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_SliverWithKeepAliveWidget';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_RenderObjectWidget';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_SliverChildDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SliverChildDelegate';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderSliverFixedExtentList';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderSliverFixedExtentList';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_SliverMultiBoxAdaptorElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SliverMultiBoxAdaptorElement';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverConstraints';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream14 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream15 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverMultiBoxAdaptorParentData';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SliverFixedExtentList extends _FlaxDartWidget, Omit<upstream0.SliverMultiBoxAdaptorWidget, _flaxOwnMembers0>, Omit<upstream1.SliverWithKeepAliveWidget, _flaxOwnMembers0 | keyof upstream0.SliverMultiBoxAdaptorWidget>, Omit<upstream2.RenderObjectWidget, _flaxOwnMembers0 | keyof upstream0.SliverMultiBoxAdaptorWidget | keyof upstream1.SliverWithKeepAliveWidget>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.SliverMultiBoxAdaptorWidget | keyof upstream1.SliverWithKeepAliveWidget | keyof upstream2.RenderObjectWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/sliver.dart::SliverFixedExtentList": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/sliver.dart::SliverMultiBoxAdaptorWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/sliver.dart::SliverWithKeepAliveWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __SliverFixedExtentList: unique symbol;
    readonly [_flaxDartTypeValue]: SliverFixedExtentList;
    readonly itemExtent: number;
    readonly delegate: upstream4.SliverChildDelegate;
    readonly key: upstream3.Key | null;
    createRenderObject(context: upstream5.BuildContext): upstream6.RenderSliverFixedExtentList;
    updateRenderObject(context: upstream5.BuildContext, renderObject: Readonly<{
        "__flaxBound:package:flutter/src/rendering/sliver_fixed_extent_list.dart::RenderSliverFixedExtentList": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/sliver_fixed_extent_list.dart::RenderSliverFixedExtentBoxAdaptor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/sliver_multi_box_adaptor.dart::RenderSliverMultiBoxAdaptor": readonly [];
    }> & Readonly<{
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
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::ContainerRenderObjectMixin": readonly [upstream14.RenderBox, upstream15.SliverMultiBoxAdaptorParentData];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/sliver.dart::RenderSliverHelpers": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/sliver_multi_box_adaptor.dart::RenderSliverWithKeepAliveMixin": readonly [];
    }>): void;
    createElement(): upstream7.SliverMultiBoxAdaptorElement;
    estimateMaxScrollOffset(constraints: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>) | null, firstIndex: number, lastIndex: number, leadingScrollOffset: number, trailingScrollOffset: number): number | null;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    didUnmountRenderObject(renderObject: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    toStringShort(): string;
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
}
export declare function _SliverFixedExtentListFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    delegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildDelegate": readonly [];
    }>;
    itemExtent: number;
}): SliverFixedExtentList;
export declare namespace _SliverFixedExtentListFactory {
    function builder(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        itemBuilder: ((context: upstream5.BuildContext, index: number) => Widget | null);
        itemExtent: number;
        findChildIndexCallback?: ((key: upstream3.Key) => number | null) | null | undefined;
        itemCount?: number | null | undefined;
        addAutomaticKeepAlives?: boolean | undefined;
        addRepaintBoundaries?: boolean | undefined;
        addSemanticIndexes?: boolean | undefined;
        semanticIndexOffset?: number | undefined;
    }): SliverFixedExtentList;
}
export declare namespace _SliverFixedExtentListFactory {
    function list(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        children: DartListInput<Widget, Widget>;
        itemExtent: number;
        addAutomaticKeepAlives?: boolean | undefined;
        addRepaintBoundaries?: boolean | undefined;
        addSemanticIndexes?: boolean | undefined;
    }): SliverFixedExtentList;
}
export declare const SliverFixedExtentList: typeof _SliverFixedExtentListFactory & _FlaxInstanceType<SliverFixedExtentList> & _FlaxDartType<SliverFixedExtentList, readonly ["class", "flax.core/sdk_widgets#type:SliverFixedExtentList", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "itemExtent" | "delegate" | "key" | "createRenderObject" | "updateRenderObject" | "createElement" | "estimateMaxScrollOffset" | "debugFillProperties" | "didUnmountRenderObject" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/sliver.dart::SliverFixedExtentList" | "__flaxBound:package:flutter/src/widgets/sliver.dart::SliverMultiBoxAdaptorWidget" | "__flaxBound:package:flutter/src/widgets/sliver.dart::SliverWithKeepAliveWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ConstrainedLayoutBuilder';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverConstraints';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverConstraints';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_AbstractLayoutBuilder';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_RenderObjectWidget';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_RenderAbstractLayoutBuilderMixin';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RenderAbstractLayoutBuilderMixin';
import type * as upstream7 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderSliver';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderSliver';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_RenderObjectElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RenderObjectElement';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SliverLayoutBuilder extends _FlaxDartWidget, Omit<upstream0.ConstrainedLayoutBuilder<upstream1.SliverConstraints>, _flaxOwnMembers0>, Omit<upstream2.AbstractLayoutBuilder<upstream1.SliverConstraints>, _flaxOwnMembers0 | keyof upstream0.ConstrainedLayoutBuilder<upstream1.SliverConstraints>>, Omit<upstream3.RenderObjectWidget, _flaxOwnMembers0 | keyof upstream0.ConstrainedLayoutBuilder<upstream1.SliverConstraints> | keyof upstream2.AbstractLayoutBuilder<upstream1.SliverConstraints>>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.ConstrainedLayoutBuilder<upstream1.SliverConstraints> | keyof upstream2.AbstractLayoutBuilder<upstream1.SliverConstraints> | keyof upstream3.RenderObjectWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/sliver_layout_builder.dart::SliverLayoutBuilder": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/layout_builder.dart::ConstrainedLayoutBuilder": readonly [upstream1.SliverConstraints];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/layout_builder.dart::AbstractLayoutBuilder": readonly [upstream1.SliverConstraints];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __SliverLayoutBuilder: unique symbol;
    readonly [_flaxDartTypeValue]: SliverLayoutBuilder;
    readonly builder: ((context: upstream5.BuildContext, constraints: Readonly<{
        "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>) => Widget);
    readonly key: upstream4.Key | null;
    createRenderObject(context: upstream5.BuildContext): upstream6.RenderAbstractLayoutBuilderMixin<upstream1.SliverConstraints, upstream7.RenderSliver>;
    createElement(): upstream8.RenderObjectElement;
    updateShouldRebuild(oldWidget: upstream2.AbstractLayoutBuilder<upstream1.SliverConstraints>): boolean;
    updateRenderObject(context: upstream5.BuildContext, renderObject: Readonly<{
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
}
export declare function _SliverLayoutBuilderFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    builder: ((context: upstream5.BuildContext, constraints: upstream1.SliverConstraints) => Widget);
}): SliverLayoutBuilder;
export declare const SliverLayoutBuilder: typeof _SliverLayoutBuilderFactory & _FlaxInstanceType<SliverLayoutBuilder> & _FlaxDartType<SliverLayoutBuilder, readonly ["class", "flax.core/sdk_widgets#type:SliverLayoutBuilder", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "builder" | "key" | "createRenderObject" | "createElement" | "updateShouldRebuild" | "updateRenderObject" | "didUnmountRenderObject" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/sliver_layout_builder.dart::SliverLayoutBuilder" | "__flaxBound:package:flutter/src/widgets/layout_builder.dart::ConstrainedLayoutBuilder" | "__flaxBound:package:flutter/src/widgets/layout_builder.dart::AbstractLayoutBuilder" | "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

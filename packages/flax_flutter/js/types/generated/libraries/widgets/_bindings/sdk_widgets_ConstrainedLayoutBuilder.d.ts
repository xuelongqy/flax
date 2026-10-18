import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_Constraints';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Constraints';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_AbstractLayoutBuilder';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_RenderObjectWidget';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_RenderObjectElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RenderObjectElement';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_RenderAbstractLayoutBuilderMixin';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RenderAbstractLayoutBuilderMixin';
import type * as upstream7 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ConstrainedLayoutBuilder<ConstraintType extends upstream0.Constraints = upstream0.Constraints> extends _FlaxDartWidget, Omit<upstream1.AbstractLayoutBuilder<ConstraintType>, _flaxOwnMembers0>, Omit<upstream2.RenderObjectWidget, _flaxOwnMembers0 | keyof upstream1.AbstractLayoutBuilder<ConstraintType>>, Omit<Widget, _flaxOwnMembers0 | keyof upstream1.AbstractLayoutBuilder<ConstraintType> | keyof upstream2.RenderObjectWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/layout_builder.dart::ConstrainedLayoutBuilder": readonly [ConstraintType];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/layout_builder.dart::AbstractLayoutBuilder": readonly [ConstraintType];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __ConstrainedLayoutBuilder: unique symbol;
    readonly [_flaxDartTypeValue]: ConstrainedLayoutBuilder<ConstraintType>;
    readonly builder: ((context: upstream3.BuildContext, constraints: (ConstraintType | DartInput<ConstraintType>)) => Widget);
    readonly key: upstream4.Key | null;
    createElement(): upstream5.RenderObjectElement;
    updateShouldRebuild(oldWidget: upstream1.AbstractLayoutBuilder<ConstraintType>): boolean;
    createRenderObject(context: upstream3.BuildContext): upstream6.RenderAbstractLayoutBuilderMixin<ConstraintType, upstream7.RenderObject>;
    updateRenderObject(context: upstream3.BuildContext, renderObject: Readonly<{
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
        minLevel?: upstream9.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream9.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream11.DiagnosticsTreeStyle | null | undefined;
    }): upstream10.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream10.DiagnosticsNode>;
}
export declare const ConstrainedLayoutBuilder: object & _FlaxInstanceType<ConstrainedLayoutBuilder<upstream0.Constraints>> & _FlaxDartType<ConstrainedLayoutBuilder<upstream0.Constraints>, readonly ["class", "flax.core/sdk_widgets#type:ConstrainedLayoutBuilder", readonly [readonly ["class", "flax.core/sdk_rendering#type:Constraints", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "builder" | "key" | "createElement" | "updateShouldRebuild" | "createRenderObject" | "updateRenderObject" | "didUnmountRenderObject" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/layout_builder.dart::ConstrainedLayoutBuilder" | "__flaxBound:package:flutter/src/widgets/layout_builder.dart::AbstractLayoutBuilder" | "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Constraints] ? {
        readonly prototype: ConstrainedLayoutBuilder<_Selected0>;
    } & _FlaxInstanceType<ConstrainedLayoutBuilder<_Selected0>> & _FlaxDartType<ConstrainedLayoutBuilder<_Selected0>> : never : never;
}
export {};

import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartList, type DartInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_RenderObjectWidget';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_SlottedMultiChildRenderObjectWidgetMixin';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SlottedMultiChildRenderObjectWidgetMixin';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_SlottedRenderObjectElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SlottedRenderObjectElement';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_SlottedContainerRenderObjectMixin';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SlottedContainerRenderObjectMixin';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SlottedMultiChildRenderObjectWidget<SlotType extends unknown | null = unknown | null, ChildType extends upstream0.RenderObject = upstream0.RenderObject> extends _FlaxDartWidget, Omit<upstream1.RenderObjectWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream1.RenderObjectWidget>, Omit<upstream2.SlottedMultiChildRenderObjectWidgetMixin<SlotType, ChildType>, _flaxOwnMembers0 | keyof upstream1.RenderObjectWidget | keyof Widget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/slotted_render_object_widget.dart::SlottedMultiChildRenderObjectWidget": readonly [SlotType, ChildType];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/slotted_render_object_widget.dart::SlottedMultiChildRenderObjectWidgetMixin": readonly [SlotType, ChildType];
}> {
    readonly __SlottedMultiChildRenderObjectWidget: unique symbol;
    readonly [_flaxDartTypeValue]: SlottedMultiChildRenderObjectWidget<SlotType, ChildType>;
    readonly key: upstream3.Key | null;
    readonly slots: DartIterable<SlotType>;
    createElement(): upstream4.SlottedRenderObjectElement<SlotType, ChildType>;
    createRenderObject(context: upstream6.BuildContext): upstream5.SlottedContainerRenderObjectMixin<SlotType, ChildType>;
    updateRenderObject(context: upstream6.BuildContext, renderObject: Readonly<{
        "__flaxBound:package:flutter/src/widgets/slotted_render_object_widget.dart::SlottedContainerRenderObjectMixin": readonly [SlotType, ChildType];
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
        minLevel?: upstream8.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream8.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream10.DiagnosticsTreeStyle | null | undefined;
    }): upstream9.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream9.DiagnosticsNode>;
    childForSlot(slot: (SlotType | DartInput<SlotType>)): Widget | null;
}
export declare const SlottedMultiChildRenderObjectWidget: object & _FlaxInstanceType<SlottedMultiChildRenderObjectWidget<unknown | null, upstream0.RenderObject>> & _FlaxDartType<SlottedMultiChildRenderObjectWidget<unknown | null, upstream0.RenderObject>, readonly ["class", "flax.core/sdk_widgets#type:SlottedMultiChildRenderObjectWidget", readonly [readonly ["any", null, readonly [], true], readonly ["class", "flax.core/sdk_rendering#type:RenderObject", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "key" | "slots" | "createElement" | "createRenderObject" | "updateRenderObject" | "didUnmountRenderObject" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "childForSlot" | "__flaxBound:package:flutter/src/widgets/slotted_render_object_widget.dart::SlottedMultiChildRenderObjectWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/widgets/slotted_render_object_widget.dart::SlottedMultiChildRenderObjectWidgetMixin";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [upstream0.RenderObject] ? {
        readonly prototype: SlottedMultiChildRenderObjectWidget<_Selected0, _Selected1>;
    } & _FlaxInstanceType<SlottedMultiChildRenderObjectWidget<_Selected0, _Selected1>> & _FlaxDartType<SlottedMultiChildRenderObjectWidget<_Selected0, _Selected1>> : never : never : never;
}
export {};

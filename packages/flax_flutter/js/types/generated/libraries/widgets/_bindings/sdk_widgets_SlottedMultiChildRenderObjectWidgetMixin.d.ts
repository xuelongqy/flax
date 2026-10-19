import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartList, type DartInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_SlottedContainerRenderObjectMixin';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SlottedContainerRenderObjectMixin';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_SlottedRenderObjectElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SlottedRenderObjectElement';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SlottedMultiChildRenderObjectWidgetMixin<SlotType extends unknown | null = unknown | null, ChildType extends upstream0.RenderObject = upstream0.RenderObject> extends _FlaxDartWidget, Omit<Widget, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/slotted_render_object_widget.dart::SlottedMultiChildRenderObjectWidgetMixin": readonly [SlotType, ChildType];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __SlottedMultiChildRenderObjectWidgetMixin: unique symbol;
    readonly [_flaxDartTypeValue]: SlottedMultiChildRenderObjectWidgetMixin<SlotType, ChildType>;
    readonly slots: DartIterable<SlotType>;
    readonly key: upstream1.Key | null;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream2.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream2.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream4.DiagnosticsTreeStyle | null | undefined;
    }): upstream3.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream3.DiagnosticsNode>;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toString(options?: {
        minLevel?: upstream2.DiagnosticLevel | undefined;
    }): string;
    childForSlot(slot: (SlotType | DartInput<SlotType>)): Widget | null;
    createRenderObject(context: upstream7.BuildContext): upstream6.SlottedContainerRenderObjectMixin<SlotType, ChildType>;
    updateRenderObject(context: upstream7.BuildContext, renderObject: Readonly<{
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
    createElement(): upstream8.SlottedRenderObjectElement<SlotType, ChildType>;
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
}
export declare const SlottedMultiChildRenderObjectWidgetMixin: object & _FlaxInstanceType<SlottedMultiChildRenderObjectWidgetMixin<unknown | null, upstream0.RenderObject>> & _FlaxDartType<SlottedMultiChildRenderObjectWidgetMixin<unknown | null, upstream0.RenderObject>, readonly ["class", "flax.core/sdk_widgets#type:SlottedMultiChildRenderObjectWidgetMixin", readonly [readonly ["any", null, readonly [], true], readonly ["class", "flax.core/sdk_rendering#type:RenderObject", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "slots" | "key" | "toStringShallow" | "toStringDeep" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "debugFillProperties" | "toString" | "childForSlot" | "createRenderObject" | "updateRenderObject" | "createElement" | "didUnmountRenderObject" | "__flaxBound:package:flutter/src/widgets/slotted_render_object_widget.dart::SlottedMultiChildRenderObjectWidgetMixin" | "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [upstream0.RenderObject] ? {
        readonly prototype: SlottedMultiChildRenderObjectWidgetMixin<_Selected0, _Selected1>;
    } & _FlaxInstanceType<SlottedMultiChildRenderObjectWidgetMixin<_Selected0, _Selected1>> & _FlaxDartType<SlottedMultiChildRenderObjectWidgetMixin<_Selected0, _Selected1>> : never : never : never;
}
export {};

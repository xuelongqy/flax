import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_MultiChildRenderObjectWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_MultiChildRenderObjectWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_RenderObjectWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_MultiChildLayoutDelegate';
import '@flax/flutter/rendering/_bindings/sdk_rendering_MultiChildLayoutDelegate';
import type * as upstream4 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderCustomMultiChildLayoutBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderCustomMultiChildLayoutBox';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_MultiChildRenderObjectElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_MultiChildRenderObjectElement';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream12 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream13 from '@flax/flutter/rendering/_bindings/sdk_rendering_MultiChildLayoutParentData';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CustomMultiChildLayout extends _FlaxDartWidget, Omit<upstream0.MultiChildRenderObjectWidget, _flaxOwnMembers0>, Omit<upstream1.RenderObjectWidget, _flaxOwnMembers0 | keyof upstream0.MultiChildRenderObjectWidget>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.MultiChildRenderObjectWidget | keyof upstream1.RenderObjectWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/basic.dart::CustomMultiChildLayout": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::MultiChildRenderObjectWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __CustomMultiChildLayout: unique symbol;
    readonly [_flaxDartTypeValue]: CustomMultiChildLayout;
    readonly delegate: upstream3.MultiChildLayoutDelegate;
    readonly children: DartList<Widget>;
    readonly key: upstream2.Key | null;
    createRenderObject(context: upstream5.BuildContext): upstream4.RenderCustomMultiChildLayoutBox;
    updateRenderObject(context: upstream5.BuildContext, renderObject: Readonly<{
        "__flaxBound:package:flutter/src/rendering/custom_layout.dart::RenderCustomMultiChildLayoutBox": readonly [];
    }> & Readonly<{
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
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::ContainerRenderObjectMixin": readonly [upstream12.RenderBox, upstream13.MultiChildLayoutParentData];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::RenderBoxContainerDefaultsMixin": readonly [upstream12.RenderBox, upstream13.MultiChildLayoutParentData];
    }>): void;
    createElement(): upstream6.MultiChildRenderObjectElement;
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
export declare function _CustomMultiChildLayoutFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    delegate: Readonly<{
        "__flaxBound:package:flutter/src/rendering/custom_layout.dart::MultiChildLayoutDelegate": readonly [];
    }>;
    children?: DartListInput<Widget, Widget> | undefined;
}): CustomMultiChildLayout;
export declare namespace _CustomMultiChildLayoutFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _CustomMultiChildLayoutFactory>[0]>), "children"> & {
            children?: (globalThis.NonNullable<globalThis.Parameters<typeof _CustomMultiChildLayoutFactory>[0]>)["children"] | Widget;
        };
        readonly slot: "children";
        readonly many: true;
    };
}
export declare const CustomMultiChildLayout: typeof _CustomMultiChildLayoutFactory & _FlaxInstanceType<CustomMultiChildLayout> & _FlaxDartType<CustomMultiChildLayout, readonly ["class", "flax.core/sdk_widgets#type:CustomMultiChildLayout", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "delegate" | "children" | "key" | "createRenderObject" | "updateRenderObject" | "createElement" | "didUnmountRenderObject" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/basic.dart::CustomMultiChildLayout" | "__flaxBound:package:flutter/src/widgets/framework.dart::MultiChildRenderObjectWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

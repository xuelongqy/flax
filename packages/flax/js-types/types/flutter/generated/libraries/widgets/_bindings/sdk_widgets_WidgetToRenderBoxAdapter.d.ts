import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_LeafRenderObjectWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LeafRenderObjectWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_RenderObjectWidget';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_LeafRenderObjectElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LeafRenderObjectElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface WidgetToRenderBoxAdapter extends _FlaxDartWidget, Omit<upstream0.LeafRenderObjectWidget, _flaxOwnMembers0>, Omit<upstream1.RenderObjectWidget, _flaxOwnMembers0 | keyof upstream0.LeafRenderObjectWidget>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.LeafRenderObjectWidget | keyof upstream1.RenderObjectWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/basic.dart::WidgetToRenderBoxAdapter": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::LeafRenderObjectWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __WidgetToRenderBoxAdapter: unique symbol;
    readonly [_flaxDartTypeValue]: WidgetToRenderBoxAdapter;
    readonly renderBox: upstream2.RenderBox;
    readonly onBuild: (() => void) | null;
    readonly onUnmount: (() => void) | null;
    readonly key: upstream3.Key | null;
    createRenderObject(context: upstream4.BuildContext): upstream2.RenderBox;
    updateRenderObject(context: upstream4.BuildContext, renderObject: Readonly<{
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
    createElement(): upstream6.LeafRenderObjectElement;
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
}
export declare function _WidgetToRenderBoxAdapterFactory(options: {
    renderBox: Readonly<{
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
    }>;
    onBuild?: (() => void) | null | undefined;
    onUnmount?: (() => void) | null | undefined;
}): WidgetToRenderBoxAdapter;
export declare namespace _WidgetToRenderBoxAdapterFactory {
    const __flaxJsx: {
        readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof _WidgetToRenderBoxAdapterFactory>[0]>);
        readonly slot: null;
        readonly many: false;
    };
}
export declare const WidgetToRenderBoxAdapter: typeof _WidgetToRenderBoxAdapterFactory & _FlaxInstanceType<WidgetToRenderBoxAdapter> & _FlaxDartType<WidgetToRenderBoxAdapter, readonly ["class", "flax.core/sdk_widgets#type:WidgetToRenderBoxAdapter", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "renderBox" | "onBuild" | "onUnmount" | "key" | "createRenderObject" | "updateRenderObject" | "didUnmountRenderObject" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/basic.dart::WidgetToRenderBoxAdapter" | "__flaxBound:package:flutter/src/widgets/framework.dart::LeafRenderObjectWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

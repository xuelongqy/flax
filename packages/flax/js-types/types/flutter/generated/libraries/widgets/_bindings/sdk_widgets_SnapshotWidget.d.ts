import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_SingleChildRenderObjectWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SingleChildRenderObjectWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_RenderObjectWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_SnapshotMode';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SnapshotMode';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_SnapshotPainter';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SnapshotPainter';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_SnapshotController';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SnapshotController';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_SingleChildRenderObjectElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SingleChildRenderObjectElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SnapshotWidget extends _FlaxDartWidget, Omit<upstream0.SingleChildRenderObjectWidget, _flaxOwnMembers0>, Omit<upstream1.RenderObjectWidget, _flaxOwnMembers0 | keyof upstream0.SingleChildRenderObjectWidget>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.SingleChildRenderObjectWidget | keyof upstream1.RenderObjectWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/snapshot_widget.dart::SnapshotWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::SingleChildRenderObjectWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __SnapshotWidget: unique symbol;
    readonly [_flaxDartTypeValue]: SnapshotWidget;
    readonly controller: upstream5.SnapshotController;
    readonly mode: upstream3.SnapshotMode;
    readonly autoresize: boolean;
    readonly painter: upstream4.SnapshotPainter;
    readonly child: Widget | null;
    readonly key: upstream2.Key | null;
    createRenderObject(context: upstream7.BuildContext): upstream6.RenderObject;
    updateRenderObject(context: upstream7.BuildContext, renderObject: Readonly<{
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
    createElement(): upstream8.SingleChildRenderObjectElement;
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
        minLevel?: upstream10.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream10.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream12.DiagnosticsTreeStyle | null | undefined;
    }): upstream11.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream11.DiagnosticsNode>;
}
export declare function _SnapshotWidgetFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    mode?: upstream3.SnapshotMode | undefined;
    painter?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/snapshot_widget.dart::SnapshotPainter": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) | undefined;
    autoresize?: boolean | undefined;
    controller: Readonly<{
        "__flaxBound:package:flutter/src/widgets/snapshot_widget.dart::SnapshotController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>;
    child: Widget | null;
}): SnapshotWidget;
export declare namespace _SnapshotWidgetFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _SnapshotWidgetFactory>[0]>), "child"> & ({
            "child": (globalThis.NonNullable<globalThis.Parameters<typeof _SnapshotWidgetFactory>[0]>)["child"];
            children?: never;
        } | {
            "child"?: never;
            children: (globalThis.NonNullable<globalThis.Parameters<typeof _SnapshotWidgetFactory>[0]>)["child"];
        });
        readonly slot: "child";
        readonly many: false;
    };
}
export declare const SnapshotWidget: typeof _SnapshotWidgetFactory & _FlaxInstanceType<SnapshotWidget> & _FlaxDartType<SnapshotWidget, readonly ["class", "flax.core/sdk_widgets#type:SnapshotWidget", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "controller" | "mode" | "autoresize" | "painter" | "child" | "key" | "createRenderObject" | "updateRenderObject" | "createElement" | "didUnmountRenderObject" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/snapshot_widget.dart::SnapshotWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::SingleChildRenderObjectWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

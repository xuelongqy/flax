import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_LeafRenderObjectWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LeafRenderObjectWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_RenderObjectWidget';
import '@flax/flutter/foundation/_bindings/sdk_foundation_FlutterError';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_FlutterErrorDetails';
import '@flax/flutter/foundation/_bindings/sdk_foundation_FlutterErrorDetails';
import type * as upstream5 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_LeafRenderObjectElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LeafRenderObjectElement';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ErrorWidget extends _FlaxDartWidget, Omit<upstream0.LeafRenderObjectWidget, _flaxOwnMembers0>, Omit<upstream1.RenderObjectWidget, _flaxOwnMembers0 | keyof upstream0.LeafRenderObjectWidget>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.LeafRenderObjectWidget | keyof upstream1.RenderObjectWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::ErrorWidget": readonly [];
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
    readonly __ErrorWidget: unique symbol;
    readonly [_flaxDartTypeValue]: ErrorWidget;
    readonly message: string;
    readonly key: upstream3.Key | null;
    createRenderObject(context: upstream6.BuildContext): upstream5.RenderBox;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    createElement(): upstream8.LeafRenderObjectElement;
    updateRenderObject(context: upstream6.BuildContext, renderObject: Readonly<{
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
export declare function _ErrorWidgetFactory(exception: {}): ErrorWidget;
export declare namespace _ErrorWidgetFactory {
    const __flaxJsx: {
        readonly props: ({
            "exception": globalThis.Parameters<typeof _ErrorWidgetFactory>[0];
        });
        readonly slot: null;
        readonly many: false;
    };
}
export declare namespace _ErrorWidgetFactory {
    function withDetails(options?: {
        message?: string | undefined;
        error?: (Readonly<{
            "__flaxBound:package:flutter/src/foundation/assertions.dart::FlutterError": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Error": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::AssertionError": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): ErrorWidget;
    namespace withDetails {
        const __flaxJsx: {
            readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof withDetails>[0]>);
            readonly slot: null;
            readonly many: false;
        };
    }
}
export declare namespace _ErrorWidgetFactory {
    function setBuilder(value: ((details: upstream4.FlutterErrorDetails) => Widget)): void;
}
export declare namespace _ErrorWidgetFactory {
    const builder: ((details: Readonly<{
        "__flaxBound:package:flutter/src/foundation/assertions.dart::FlutterErrorDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => Widget);
}
export declare const ErrorWidget: typeof _ErrorWidgetFactory & _FlaxInstanceType<ErrorWidget> & _FlaxDartType<ErrorWidget, readonly ["class", "flax.core/sdk_widgets#type:ErrorWidget", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "message" | "key" | "createRenderObject" | "debugFillProperties" | "createElement" | "updateRenderObject" | "didUnmountRenderObject" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/framework.dart::ErrorWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::LeafRenderObjectWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

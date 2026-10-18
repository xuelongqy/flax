import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_RenderObjectWidget';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObjectWithChildMixin';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObjectWithChildMixin';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_RenderObjectToWidgetElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RenderObjectToWidgetElement';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/sdk_widgets_BuildOwner';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RenderObjectToWidgetAdapter<T extends upstream0.RenderObject = upstream0.RenderObject> extends _FlaxDartWidget, Omit<upstream1.RenderObjectWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream1.RenderObjectWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/adapter.dart::RenderObjectToWidgetAdapter": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __RenderObjectToWidgetAdapter: unique symbol;
    readonly [_flaxDartTypeValue]: RenderObjectToWidgetAdapter<T>;
    readonly child: Widget | null;
    readonly container: upstream2.RenderObjectWithChildMixin<T>;
    readonly debugShortDescription: string | null;
    readonly key: upstream3.Key | null;
    createElement(): upstream4.RenderObjectToWidgetElement<T>;
    createRenderObject(context: upstream5.BuildContext): upstream2.RenderObjectWithChildMixin<T>;
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
    attachToRenderTree(owner: Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::BuildOwner": readonly [];
    }>, element?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/adapter.dart::RenderObjectToWidgetElement": readonly [T];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::RenderTreeRootElement": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectElement": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::RootElementMixin": readonly [];
    }>) | null): upstream4.RenderObjectToWidgetElement<T>;
    toStringShort(): string;
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
export declare function _RenderObjectToWidgetAdapterFactory<T extends upstream0.RenderObject = upstream0.RenderObject>(options: {
    child?: Widget | null | undefined;
    container: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObjectWithChildMixin": readonly [T];
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
    debugShortDescription?: string | null | undefined;
}): RenderObjectToWidgetAdapter<T>;
export declare function _RenderObjectToWidgetAdapterFactory(options: {
    child?: Widget | null | undefined;
    container: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObjectWithChildMixin": readonly [upstream0.RenderObject];
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
    debugShortDescription?: string | null | undefined;
}): RenderObjectToWidgetAdapter<upstream0.RenderObject>;
export declare const RenderObjectToWidgetAdapter: typeof _RenderObjectToWidgetAdapterFactory & _FlaxInstanceType<RenderObjectToWidgetAdapter<upstream0.RenderObject>> & _FlaxDartType<RenderObjectToWidgetAdapter<upstream0.RenderObject>, readonly ["class", "flax.core/sdk_widgets#type:RenderObjectToWidgetAdapter", readonly [readonly ["class", "flax.core/sdk_rendering#type:RenderObject", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "child" | "container" | "debugShortDescription" | "key" | "createElement" | "createRenderObject" | "updateRenderObject" | "attachToRenderTree" | "toStringShort" | "didUnmountRenderObject" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/adapter.dart::RenderObjectToWidgetAdapter" | "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.RenderObject] ? {
        (options: {
            child?: Widget | null | undefined;
            container: Readonly<{
                "__flaxBound:package:flutter/src/rendering/object.dart::RenderObjectWithChildMixin": readonly [_Selected0];
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
            debugShortDescription?: string | null | undefined;
        }): RenderObjectToWidgetAdapter<_Selected0>;
        readonly prototype: RenderObjectToWidgetAdapter<_Selected0>;
    } & _FlaxInstanceType<RenderObjectToWidgetAdapter<_Selected0>> & _FlaxDartType<RenderObjectToWidgetAdapter<_Selected0>> : never : never;
}
export {};

import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ParentDataWidget';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_KeepAliveParentDataMixin';
import '@flax/flutter/rendering/_bindings/sdk_rendering_KeepAliveParentDataMixin';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_ProxyWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ProxyWidget';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream4 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_ParentDataElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ParentDataElement';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface KeepAlive extends _FlaxDartWidget, Omit<upstream0.ParentDataWidget<upstream1.KeepAliveParentDataMixin>, _flaxOwnMembers0>, Omit<upstream2.ProxyWidget, _flaxOwnMembers0 | keyof upstream0.ParentDataWidget<upstream1.KeepAliveParentDataMixin>>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.ParentDataWidget<upstream1.KeepAliveParentDataMixin> | keyof upstream2.ProxyWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/sliver.dart::KeepAlive": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::ParentDataWidget": readonly [upstream1.KeepAliveParentDataMixin];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __KeepAlive: unique symbol;
    readonly [_flaxDartTypeValue]: KeepAlive;
    readonly keepAlive: boolean;
    readonly debugTypicalAncestorWidgetClass: upstream4.Type;
    readonly debugTypicalAncestorWidgetDescription: string;
    readonly child: Widget;
    readonly key: upstream3.Key | null;
    applyParentData(renderObject: Readonly<{
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
    debugCanApplyOutOfTurn(): boolean;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    createElement(): upstream7.ParentDataElement<upstream1.KeepAliveParentDataMixin>;
    debugIsValidRenderObject(renderObject: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): boolean;
    toStringShort(): string;
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
export declare function _KeepAliveFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    keepAlive: boolean;
    child: Widget;
}): KeepAlive;
export declare namespace _KeepAliveFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _KeepAliveFactory>[0]>), "child"> & ({
            "child": (globalThis.NonNullable<globalThis.Parameters<typeof _KeepAliveFactory>[0]>)["child"];
            children?: never;
        } | {
            "child"?: never;
            children: (globalThis.NonNullable<globalThis.Parameters<typeof _KeepAliveFactory>[0]>)["child"];
        });
        readonly slot: "child";
        readonly many: false;
    };
}
export declare const KeepAlive: typeof _KeepAliveFactory & _FlaxInstanceType<KeepAlive> & _FlaxDartType<KeepAlive, readonly ["class", "flax.core/sdk_widgets#type:KeepAlive", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "keepAlive" | "debugTypicalAncestorWidgetClass" | "debugTypicalAncestorWidgetDescription" | "child" | "key" | "applyParentData" | "debugCanApplyOutOfTurn" | "debugFillProperties" | "createElement" | "debugIsValidRenderObject" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/sliver.dart::KeepAlive" | "__flaxBound:package:flutter/src/widgets/framework.dart::ParentDataWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

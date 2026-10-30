import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_BoxDecoration';
import '@flax/flutter/painting/_bindings/flutter_BoxDecoration';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CupertinoFormSection extends _FlaxDartWidget, Omit<upstream0.StatelessWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatelessWidget>, Readonly<{
    "__flaxBound:package:cupertino_ui/src/form_section.dart::CupertinoFormSection": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __CupertinoFormSection: unique symbol;
    readonly [_flaxDartTypeValue]: CupertinoFormSection;
    readonly header: Widget | null;
    readonly footer: Widget | null;
    readonly margin: upstream2.EdgeInsetsGeometry;
    readonly children: DartList<Widget>;
    readonly decoration: upstream4.BoxDecoration | null;
    readonly backgroundColor: upstream3.Color;
    readonly clipBehavior: upstream5.Clip;
    readonly key: upstream1.Key | null;
    build(context: upstream6.BuildContext): Widget;
    createElement(): upstream7.StatelessElement;
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
export declare function _CupertinoFormSectionFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    children: DartListInput<Widget, Widget>;
    header?: Widget | null | undefined;
    footer?: Widget | null | undefined;
    margin?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | undefined;
    backgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | undefined;
    decoration?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/box_decoration.dart::BoxDecoration": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    clipBehavior?: upstream5.Clip | undefined;
}): CupertinoFormSection;
export declare namespace _CupertinoFormSectionFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _CupertinoFormSectionFactory>[0]>), "children"> & {
            children: (globalThis.NonNullable<globalThis.Parameters<typeof _CupertinoFormSectionFactory>[0]>)["children"] | Widget;
        };
        readonly slot: "children";
        readonly many: true;
    };
}
export declare namespace _CupertinoFormSectionFactory {
    function insetGrouped(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        children: DartListInput<Widget, Widget>;
        header?: Widget | null | undefined;
        footer?: Widget | null | undefined;
        margin?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | undefined;
        backgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        decoration?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/box_decoration.dart::BoxDecoration": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        clipBehavior?: upstream5.Clip | undefined;
    }): CupertinoFormSection;
    namespace insetGrouped {
        const __flaxJsx: {
            readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof insetGrouped>[0]>), "children"> & {
                children: (globalThis.NonNullable<globalThis.Parameters<typeof insetGrouped>[0]>)["children"] | Widget;
            };
            readonly slot: "children";
            readonly many: true;
        };
    }
}
export declare const CupertinoFormSection: typeof _CupertinoFormSectionFactory & _FlaxInstanceType<CupertinoFormSection> & _FlaxDartType<CupertinoFormSection, readonly ["class", "flax.cupertino/cupertino#type:CupertinoFormSection", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "header" | "footer" | "margin" | "children" | "decoration" | "backgroundColor" | "clipBehavior" | "key" | "build" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:cupertino_ui/src/form_section.dart::CupertinoFormSection" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

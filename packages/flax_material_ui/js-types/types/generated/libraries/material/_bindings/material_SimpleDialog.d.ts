import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream7 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream8 from '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import type * as upstream9 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SimpleDialog extends _FlaxDartWidget, Omit<upstream0.StatelessWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatelessWidget>, Readonly<{
    "__flaxBound:package:material_ui/src/dialog.dart::SimpleDialog": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __SimpleDialog: unique symbol;
    readonly [_flaxDartTypeValue]: SimpleDialog;
    readonly title: Widget | null;
    readonly titlePadding: upstream2.EdgeInsetsGeometry;
    readonly titleTextStyle: upstream3.TextStyle | null;
    readonly children: DartList<Widget> | null;
    readonly contentPadding: upstream2.EdgeInsetsGeometry;
    readonly backgroundColor: upstream4.Color | null;
    readonly elevation: number | null;
    readonly shadowColor: upstream4.Color | null;
    readonly surfaceTintColor: upstream4.Color | null;
    readonly contentTextStyle: upstream3.TextStyle | null;
    readonly semanticLabel: string | null;
    readonly insetPadding: upstream5.EdgeInsets | null;
    readonly clipBehavior: upstream6.Clip | null;
    readonly shape: upstream7.ShapeBorder | null;
    readonly alignment: upstream8.AlignmentGeometry | null;
    readonly constraints: upstream9.BoxConstraints | null;
    readonly key: upstream1.Key | null;
    build(context: upstream10.BuildContext): Widget;
    createElement(): upstream11.StatelessElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream13.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream13.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream15.DiagnosticsTreeStyle | null | undefined;
    }): upstream14.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream14.DiagnosticsNode>;
}
export declare function _SimpleDialogFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    title?: Widget | null | undefined;
    titlePadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | undefined;
    titleTextStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    children?: DartListInput<Widget, Widget> | null | undefined;
    contentPadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | undefined;
    contentTextStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    backgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    elevation?: number | null | undefined;
    shadowColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    surfaceTintColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    semanticLabel?: string | null | undefined;
    insetPadding?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }>) | null | undefined;
    clipBehavior?: upstream6.Clip | null | undefined;
    shape?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null | undefined;
    alignment?: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }> | null | undefined;
    constraints?: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>) | null | undefined;
}): SimpleDialog;
export declare namespace _SimpleDialogFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _SimpleDialogFactory>[0]>), "children"> & {
            children?: (globalThis.NonNullable<globalThis.Parameters<typeof _SimpleDialogFactory>[0]>)["children"] | Widget;
        };
        readonly slot: "children";
        readonly many: true;
    };
}
export declare const SimpleDialog: typeof _SimpleDialogFactory & _FlaxInstanceType<SimpleDialog> & _FlaxDartType<SimpleDialog, readonly ["class", "flax.material/material#type:SimpleDialog", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "title" | "titlePadding" | "titleTextStyle" | "children" | "contentPadding" | "backgroundColor" | "elevation" | "shadowColor" | "surfaceTintColor" | "contentTextStyle" | "semanticLabel" | "insetPadding" | "clipBehavior" | "shape" | "alignment" | "constraints" | "key" | "build" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/dialog.dart::SimpleDialog" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/flutter_MainAxisAlignment';
import '@flax/flutter/rendering/_bindings/flutter_MainAxisAlignment';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/flutter_MainAxisSize';
import '@flax/flutter/rendering/_bindings/flutter_MainAxisSize';
import type * as upstream4 from '@flax/material-ui/_bindings/material_ButtonTextTheme';
import '@flax/material-ui/_bindings/material_ButtonTextTheme';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream6 from '@flax/material-ui/_bindings/material_ButtonBarLayoutBehavior';
import '@flax/material-ui/_bindings/material_ButtonBarLayoutBehavior';
import type * as upstream7 from '@flax/flutter/painting/_bindings/flutter_VerticalDirection';
import '@flax/flutter/painting/_bindings/flutter_VerticalDirection';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ButtonBar extends _FlaxDartWidget, Omit<upstream0.StatelessWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatelessWidget>, Readonly<{
    "__flaxBound:package:material_ui/src/button_bar.dart::ButtonBar": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __ButtonBar: unique symbol;
    readonly [_flaxDartTypeValue]: ButtonBar;
    readonly alignment: upstream2.MainAxisAlignment | null;
    readonly mainAxisSize: upstream3.MainAxisSize | null;
    readonly buttonTextTheme: upstream4.ButtonTextTheme | null;
    readonly buttonMinWidth: number | null;
    readonly buttonHeight: number | null;
    readonly buttonPadding: upstream5.EdgeInsetsGeometry | null;
    readonly buttonAlignedDropdown: boolean | null;
    readonly layoutBehavior: upstream6.ButtonBarLayoutBehavior | null;
    readonly overflowDirection: upstream7.VerticalDirection | null;
    readonly overflowButtonSpacing: number | null;
    readonly children: DartList<Widget>;
    readonly key: upstream1.Key | null;
    build(context: upstream8.BuildContext): Widget;
    createElement(): upstream9.StatelessElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream11.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream11.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream13.DiagnosticsTreeStyle | null | undefined;
    }): upstream12.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream12.DiagnosticsNode>;
}
export declare function _ButtonBarFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    alignment?: upstream2.MainAxisAlignment | null | undefined;
    mainAxisSize?: upstream3.MainAxisSize | null | undefined;
    buttonTextTheme?: upstream4.ButtonTextTheme | null | undefined;
    buttonMinWidth?: number | null | undefined;
    buttonHeight?: number | null | undefined;
    buttonPadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    buttonAlignedDropdown?: boolean | null | undefined;
    layoutBehavior?: upstream6.ButtonBarLayoutBehavior | null | undefined;
    overflowDirection?: upstream7.VerticalDirection | null | undefined;
    overflowButtonSpacing?: number | null | undefined;
    children?: DartListInput<Widget, Widget> | undefined;
}): ButtonBar;
export declare namespace _ButtonBarFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _ButtonBarFactory>[0]>), "children"> & {
            children?: (globalThis.NonNullable<globalThis.Parameters<typeof _ButtonBarFactory>[0]>)["children"] | Widget;
        };
        readonly slot: "children";
        readonly many: true;
    };
}
export declare const ButtonBar: typeof _ButtonBarFactory & _FlaxInstanceType<ButtonBar> & _FlaxDartType<ButtonBar, readonly ["class", "flax.material/material#type:ButtonBar", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "alignment" | "mainAxisSize" | "buttonTextTheme" | "buttonMinWidth" | "buttonHeight" | "buttonPadding" | "buttonAlignedDropdown" | "layoutBehavior" | "overflowDirection" | "overflowButtonSpacing" | "children" | "key" | "build" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/button_bar.dart::ButtonBar" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

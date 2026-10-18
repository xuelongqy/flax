import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream3 from '@flax/flutter/material/_bindings/sdk_material_CollapseMode';
import '@flax/flutter/material/_bindings/sdk_material_CollapseMode';
import type * as upstream4 from '@flax/flutter/material/_bindings/sdk_material_StretchMode';
import '@flax/flutter/material/_bindings/sdk_material_StretchMode';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FlexibleSpaceBar extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/material/flexible_space_bar.dart::FlexibleSpaceBar": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __FlexibleSpaceBar: unique symbol;
    readonly [_flaxDartTypeValue]: FlexibleSpaceBar;
    readonly title: Widget | null;
    readonly background: Widget | null;
    readonly centerTitle: boolean | null;
    readonly collapseMode: upstream3.CollapseMode;
    readonly stretchModes: DartList<upstream4.StretchMode>;
    readonly titlePadding: upstream2.EdgeInsetsGeometry | null;
    readonly expandedTitleScale: number;
    readonly key: upstream1.Key | null;
    createState(): upstream5.State<FlexibleSpaceBar>;
    createElement(): upstream6.StatefulElement;
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
export declare function _FlexibleSpaceBarFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    title?: Widget | null | undefined;
    background?: Widget | null | undefined;
    centerTitle?: boolean | null | undefined;
    titlePadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    collapseMode?: upstream3.CollapseMode | undefined;
    stretchModes?: DartListInput<upstream4.StretchMode, upstream4.StretchMode> | undefined;
    expandedTitleScale?: number | undefined;
}): FlexibleSpaceBar;
export declare namespace _FlexibleSpaceBarFactory {
    function createSettings(options: {
        child: Widget;
        currentExtent: number;
        hasLeading?: boolean | null | undefined;
        isScrolledUnder?: boolean | null | undefined;
        maxExtent?: number | null | undefined;
        minExtent?: number | null | undefined;
        toolbarOpacity?: number | null | undefined;
    }): Widget;
}
export declare const FlexibleSpaceBar: typeof _FlexibleSpaceBarFactory & _FlaxInstanceType<FlexibleSpaceBar> & _FlaxDartType<FlexibleSpaceBar, readonly ["class", "flax.core/sdk_material#type:FlexibleSpaceBar", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "title" | "background" | "centerTitle" | "collapseMode" | "stretchModes" | "titlePadding" | "expandedTitleScale" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/material/flexible_space_bar.dart::FlexibleSpaceBar" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

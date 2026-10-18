import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/material/_bindings/sdk_material_RangeValues';
import '@flax/flutter/material/_bindings/sdk_material_RangeValues';
import type * as upstream3 from '@flax/flutter/material/_bindings/sdk_material_RangeLabels';
import '@flax/flutter/material/_bindings/sdk_material_RangeLabels';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream6 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream7 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RangeSlider extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/material/range_slider.dart::RangeSlider": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __RangeSlider: unique symbol;
    readonly [_flaxDartTypeValue]: RangeSlider;
    readonly values: upstream2.RangeValues;
    readonly onChanged: ((value: Readonly<{
        "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeValues": readonly [];
    }>) => void) | null;
    readonly onChangeStart: ((value: Readonly<{
        "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeValues": readonly [];
    }>) => void) | null;
    readonly onChangeEnd: ((value: Readonly<{
        "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeValues": readonly [];
    }>) => void) | null;
    readonly min: number;
    readonly max: number;
    readonly divisions: number | null;
    readonly labels: upstream3.RangeLabels | null;
    readonly activeColor: upstream4.Color | null;
    readonly inactiveColor: upstream4.Color | null;
    readonly overlayColor: upstream5.WidgetStateProperty<upstream4.Color | null> | null;
    readonly mouseCursor: upstream5.WidgetStateProperty<upstream6.MouseCursor | null> | null;
    readonly semanticFormatterCallback: ((value: number) => string) | null;
    readonly padding: upstream7.EdgeInsetsGeometry | null;
    readonly year2023: boolean | null;
    readonly key: upstream1.Key | null;
    createState(): upstream8.State<RangeSlider>;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    createElement(): upstream10.StatefulElement;
    toStringShort(): string;
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
export declare function _RangeSliderFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    values: Readonly<{
        "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeValues": readonly [];
    }>;
    onChanged: ((value: upstream2.RangeValues) => void) | null;
    onChangeStart?: ((value: upstream2.RangeValues) => void) | null | undefined;
    onChangeEnd?: ((value: upstream2.RangeValues) => void) | null | undefined;
    min?: number | undefined;
    max?: number | undefined;
    divisions?: number | null | undefined;
    labels?: Readonly<{
        "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeLabels": readonly [];
    }> | null | undefined;
    activeColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    inactiveColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    overlayColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream4.Color | null];
    }> | null | undefined;
    mouseCursor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream6.MouseCursor | null];
    }> | null | undefined;
    semanticFormatterCallback?: ((value: number) => string) | null | undefined;
    padding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    year2023?: boolean | null | undefined;
}): RangeSlider;
export declare const RangeSlider: typeof _RangeSliderFactory & _FlaxInstanceType<RangeSlider> & _FlaxDartType<RangeSlider, readonly ["class", "flax.core/sdk_material#type:RangeSlider", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "values" | "onChanged" | "onChangeStart" | "onChangeEnd" | "min" | "max" | "divisions" | "labels" | "activeColor" | "inactiveColor" | "overlayColor" | "mouseCursor" | "semanticFormatterCallback" | "padding" | "year2023" | "key" | "createState" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/material/range_slider.dart::RangeSlider" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

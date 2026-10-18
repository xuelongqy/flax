import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_CircularProgressIndicator';
import type * as upstream1 from '@flax/flutter/material/_bindings/sdk_material_ProgressIndicator';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream5 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_StrokeCap';
import '@flax/dart/ui/_bindings/sdk_dart_ui_StrokeCap';
import type * as upstream7 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream8 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import type * as upstream9 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationController';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationController';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RefreshProgressIndicator extends _FlaxDartWidget, Omit<upstream0.CircularProgressIndicator, _flaxOwnMembers0>, Omit<upstream1.ProgressIndicator, _flaxOwnMembers0 | keyof upstream0.CircularProgressIndicator>, Omit<upstream2.StatefulWidget, _flaxOwnMembers0 | keyof upstream0.CircularProgressIndicator | keyof upstream1.ProgressIndicator>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.CircularProgressIndicator | keyof upstream1.ProgressIndicator | keyof upstream2.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/material/progress_indicator.dart::RefreshProgressIndicator": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/material/progress_indicator.dart::CircularProgressIndicator": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/material/progress_indicator.dart::ProgressIndicator": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __RefreshProgressIndicator: unique symbol;
    readonly [_flaxDartTypeValue]: RefreshProgressIndicator;
    readonly elevation: number;
    readonly indicatorMargin: upstream7.EdgeInsetsGeometry;
    readonly indicatorPadding: upstream7.EdgeInsetsGeometry;
    readonly backgroundColor: upstream4.Color | null;
    readonly strokeWidth: number | null;
    readonly strokeAlign: number | null;
    readonly strokeCap: upstream6.StrokeCap | null;
    readonly constraints: upstream8.BoxConstraints | null;
    readonly trackGap: number | null;
    readonly year2023: boolean | null;
    readonly padding: upstream7.EdgeInsetsGeometry | null;
    readonly controller: upstream9.AnimationController | null;
    readonly value: number | null;
    readonly color: upstream4.Color | null;
    readonly valueColor: upstream5.Animation<upstream4.Color | null> | null;
    readonly semanticsLabel: string | null;
    readonly semanticsValue: string | null;
    readonly key: upstream3.Key | null;
    createState(): upstream10.State<upstream0.CircularProgressIndicator>;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    createElement(): upstream12.StatefulElement;
    toStringShort(): string;
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
export declare function _RefreshProgressIndicatorFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    value?: number | null | undefined;
    backgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    color?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    valueColor?: (Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [upstream4.Color | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream4.Color | null];
    }>) | null | undefined;
    strokeWidth?: number | null | undefined;
    strokeAlign?: number | null | undefined;
    semanticsLabel?: string | null | undefined;
    semanticsValue?: string | null | undefined;
    strokeCap?: upstream6.StrokeCap | null | undefined;
    elevation?: number | undefined;
    indicatorMargin?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | undefined;
    indicatorPadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | undefined;
}): RefreshProgressIndicator;
export declare namespace _RefreshProgressIndicatorFactory {
    const defaultStrokeWidth: number;
}
export declare const RefreshProgressIndicator: typeof _RefreshProgressIndicatorFactory & _FlaxInstanceType<RefreshProgressIndicator> & _FlaxDartType<RefreshProgressIndicator, readonly ["class", "flax.core/sdk_material#type:RefreshProgressIndicator", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "elevation" | "indicatorMargin" | "indicatorPadding" | "backgroundColor" | "strokeWidth" | "strokeAlign" | "strokeCap" | "constraints" | "trackGap" | "year2023" | "padding" | "controller" | "value" | "color" | "valueColor" | "semanticsLabel" | "semanticsValue" | "key" | "createState" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/material/progress_indicator.dart::RefreshProgressIndicator" | "__flaxBound:package:flutter/src/material/progress_indicator.dart::CircularProgressIndicator" | "__flaxBound:package:flutter/src/material/progress_indicator.dart::ProgressIndicator" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

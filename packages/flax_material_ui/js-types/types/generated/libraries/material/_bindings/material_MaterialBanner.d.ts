import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_OverflowBarAlignment';
import '@flax/flutter/widgets/_bindings/sdk_widgets_OverflowBarAlignment';
import type * as upstream6 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream7 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationController';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationController';
import '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MaterialBanner extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:material_ui/src/banner.dart::MaterialBanner": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __MaterialBanner: unique symbol;
    readonly [_flaxDartTypeValue]: MaterialBanner;
    readonly content: Widget;
    readonly contentTextStyle: upstream2.TextStyle | null;
    readonly actions: DartList<Widget>;
    readonly elevation: number | null;
    readonly leading: Widget | null;
    readonly minActionBarHeight: number;
    readonly backgroundColor: upstream3.Color | null;
    readonly surfaceTintColor: upstream3.Color | null;
    readonly shadowColor: upstream3.Color | null;
    readonly dividerColor: upstream3.Color | null;
    readonly padding: upstream4.EdgeInsetsGeometry | null;
    readonly margin: upstream4.EdgeInsetsGeometry | null;
    readonly leadingPadding: upstream4.EdgeInsetsGeometry | null;
    readonly forceActionsBelow: boolean;
    readonly overflowAlignment: upstream5.OverflowBarAlignment;
    readonly animation: upstream6.Animation<number> | null;
    readonly onVisible: (() => void) | null;
    readonly key: upstream1.Key | null;
    withAnimation(newAnimation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>, options?: {
        fallbackKey?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
    }): MaterialBanner;
    createState(): upstream9.State<MaterialBanner>;
    createElement(): upstream10.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream12.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream12.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream14.DiagnosticsTreeStyle | null | undefined;
    }): upstream13.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream13.DiagnosticsNode>;
}
export declare function _MaterialBannerFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    content: Widget;
    contentTextStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    actions: DartListInput<Widget, Widget>;
    elevation?: number | null | undefined;
    leading?: Widget | null | undefined;
    backgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    surfaceTintColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    shadowColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    dividerColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    padding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    margin?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    leadingPadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    forceActionsBelow?: boolean | undefined;
    overflowAlignment?: upstream5.OverflowBarAlignment | undefined;
    animation?: (Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>) | null | undefined;
    onVisible?: (() => void) | null | undefined;
    minActionBarHeight?: number | undefined;
}): MaterialBanner;
export declare namespace _MaterialBannerFactory {
    function createAnimationController(options: {
        vsync: Readonly<{
            "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
        }>;
    }): upstream7.AnimationController;
}
export declare const MaterialBanner: typeof _MaterialBannerFactory & _FlaxInstanceType<MaterialBanner> & _FlaxDartType<MaterialBanner, readonly ["class", "flax.material/material#type:MaterialBanner", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "content" | "contentTextStyle" | "actions" | "elevation" | "leading" | "minActionBarHeight" | "backgroundColor" | "surfaceTintColor" | "shadowColor" | "dividerColor" | "padding" | "margin" | "leadingPadding" | "forceActionsBelow" | "overflowAlignment" | "animation" | "onVisible" | "key" | "withAnimation" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/banner.dart::MaterialBanner" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type DartSet, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/flutter_CrossAxisAlignment';
import '@flax/flutter/rendering/_bindings/flutter_CrossAxisAlignment';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream8 from '@flax/flutter/material/_bindings/sdk_material_ListTileControlAffinity';
import '@flax/flutter/material/_bindings/sdk_material_ListTileControlAffinity';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/sdk_widgets_ExpansibleController';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ExpansibleController';
import type * as upstream10 from '@flax/flutter/material/_bindings/sdk_material_VisualDensity';
import '@flax/flutter/material/_bindings/sdk_material_VisualDensity';
import type * as upstream11 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationStyle';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationStyle';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesController';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesController';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream14 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream17 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream18 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import type * as upstream20 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ExpansionTile extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/material/expansion_tile.dart::ExpansionTile": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __ExpansionTile: unique symbol;
    readonly [_flaxDartTypeValue]: ExpansionTile;
    readonly leading: Widget | null;
    readonly title: Widget;
    readonly subtitle: Widget | null;
    readonly onExpansionChanged: ((value: boolean) => void) | null;
    readonly children: DartList<Widget>;
    readonly backgroundColor: upstream5.Color | null;
    readonly collapsedBackgroundColor: upstream5.Color | null;
    readonly trailing: Widget | null;
    readonly showTrailingIcon: boolean;
    readonly initiallyExpanded: boolean;
    readonly maintainState: boolean;
    readonly tilePadding: upstream2.EdgeInsetsGeometry | null;
    readonly expandedAlignment: upstream4.AlignmentGeometry | null;
    readonly expandedCrossAxisAlignment: upstream3.CrossAxisAlignment | null;
    readonly childrenPadding: upstream2.EdgeInsetsGeometry | null;
    readonly iconColor: upstream5.Color | null;
    readonly collapsedIconColor: upstream5.Color | null;
    readonly textColor: upstream5.Color | null;
    readonly collapsedTextColor: upstream5.Color | null;
    readonly shape: upstream6.ShapeBorder | null;
    readonly collapsedShape: upstream6.ShapeBorder | null;
    readonly clipBehavior: upstream7.Clip | null;
    readonly controlAffinity: upstream8.ListTileControlAffinity | null;
    readonly controller: upstream9.ExpansibleController | null;
    readonly dense: boolean | null;
    readonly splashColor: upstream5.Color | null;
    readonly visualDensity: upstream10.VisualDensity | null;
    readonly minTileHeight: number | null;
    readonly enableFeedback: boolean | null;
    readonly enabled: boolean;
    readonly expansionAnimationStyle: upstream11.AnimationStyle | null;
    readonly internalAddSemanticForOnTap: boolean;
    readonly statesController: upstream12.WidgetStatesController | null;
    readonly key: upstream1.Key | null;
    createState(): upstream13.State<ExpansionTile>;
    createElement(): upstream14.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream16.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream16.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream18.DiagnosticsTreeStyle | null | undefined;
    }): upstream17.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream17.DiagnosticsNode>;
}
export declare function _ExpansionTileFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    leading?: Widget | null | undefined;
    title: Widget;
    subtitle?: Widget | null | undefined;
    onExpansionChanged?: ((value: boolean) => void) | null | undefined;
    children?: DartListInput<Widget, Widget> | undefined;
    trailing?: Widget | null | undefined;
    showTrailingIcon?: boolean | undefined;
    initiallyExpanded?: boolean | undefined;
    maintainState?: boolean | undefined;
    tilePadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    expandedCrossAxisAlignment?: upstream3.CrossAxisAlignment | null | undefined;
    expandedAlignment?: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }> | null | undefined;
    childrenPadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    backgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    collapsedBackgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    textColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    collapsedTextColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    iconColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    collapsedIconColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    shape?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null | undefined;
    collapsedShape?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null | undefined;
    clipBehavior?: upstream7.Clip | null | undefined;
    controlAffinity?: upstream8.ListTileControlAffinity | null | undefined;
    controller?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/expansible.dart::ExpansibleController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) | null | undefined;
    dense?: boolean | null | undefined;
    splashColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    visualDensity?: (Readonly<{
        "__flaxBound:package:flutter/src/material/theme_data.dart::VisualDensity": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    minTileHeight?: number | null | undefined;
    enableFeedback?: boolean | null | undefined;
    enabled?: boolean | undefined;
    expansionAnimationStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    internalAddSemanticForOnTap?: boolean | undefined;
    statesController?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [DartSet<upstream20.WidgetState>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [DartSet<upstream20.WidgetState>];
    }>) | null | undefined;
}): ExpansionTile;
export declare const ExpansionTile: typeof _ExpansionTileFactory & _FlaxInstanceType<ExpansionTile> & _FlaxDartType<ExpansionTile, readonly ["class", "flax.core/sdk_material#type:ExpansionTile", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "leading" | "title" | "subtitle" | "onExpansionChanged" | "children" | "backgroundColor" | "collapsedBackgroundColor" | "trailing" | "showTrailingIcon" | "initiallyExpanded" | "maintainState" | "tilePadding" | "expandedAlignment" | "expandedCrossAxisAlignment" | "childrenPadding" | "iconColor" | "collapsedIconColor" | "textColor" | "collapsedTextColor" | "shape" | "collapsedShape" | "clipBehavior" | "controlAffinity" | "controller" | "dense" | "splashColor" | "visualDensity" | "minTileHeight" | "enableFeedback" | "enabled" | "expansionAnimationStyle" | "internalAddSemanticForOnTap" | "statesController" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/material/expansion_tile.dart::ExpansionTile" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

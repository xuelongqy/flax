import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream7 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream8 from '@flax/flutter/material/_bindings/sdk_material_VisualDensity';
import '@flax/flutter/material/_bindings/sdk_material_VisualDensity';
import type * as upstream9 from '@flax/flutter/material/_bindings/sdk_material_MaterialTapTargetSize';
import '@flax/flutter/material/_bindings/sdk_material_MaterialTapTargetSize';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/sdk_widgets_IconThemeData';
import '@flax/flutter/widgets/_bindings/sdk_widgets_IconThemeData';
import type * as upstream11 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import type * as upstream12 from '@flax/flutter/material/_bindings/sdk_material_ChipAnimationStyle';
import '@flax/flutter/material/_bindings/sdk_material_ChipAnimationStyle';
import type * as upstream13 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ChipAttributes extends Readonly<{
    "__flaxBound:package:flutter/src/material/chip.dart::ChipAttributes": readonly [];
}> {
    readonly __ChipAttributes: unique symbol;
    readonly [_flaxDartTypeValue]: ChipAttributes;
    readonly label: Widget;
    readonly avatar: Widget | null;
    readonly labelStyle: upstream0.TextStyle | null;
    readonly side: upstream1.BorderSide | null;
    readonly shape: upstream2.OutlinedBorder | null;
    readonly clipBehavior: upstream3.Clip;
    readonly focusNode: upstream4.FocusNode | null;
    readonly autofocus: boolean;
    readonly color: upstream5.WidgetStateProperty<upstream6.Color | null> | null;
    readonly backgroundColor: upstream6.Color | null;
    readonly padding: upstream7.EdgeInsetsGeometry | null;
    readonly visualDensity: upstream8.VisualDensity | null;
    readonly labelPadding: upstream7.EdgeInsetsGeometry | null;
    readonly materialTapTargetSize: upstream9.MaterialTapTargetSize | null;
    readonly elevation: number | null;
    readonly shadowColor: upstream6.Color | null;
    readonly surfaceTintColor: upstream6.Color | null;
    readonly iconTheme: upstream10.IconThemeData | null;
    readonly avatarBoxConstraints: upstream11.BoxConstraints | null;
    readonly chipAnimationStyle: upstream12.ChipAnimationStyle | null;
    readonly mouseCursor: upstream13.MouseCursor | null;
}
export declare namespace _ChipAttributesFactory {
    function implement(args: [], implementation: {
        get label(): Widget;
        get avatar(): Widget | null;
        get labelStyle(): (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null;
        get side(): (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null;
        get shape(): (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null;
        get clipBehavior(): upstream3.Clip;
        get focusNode(): (Readonly<{
            "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null;
        get autofocus(): boolean;
        get color(): Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream6.Color | null];
        }> | null;
        get backgroundColor(): Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null;
        get padding(): Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null;
        get visualDensity(): (Readonly<{
            "__flaxBound:package:flutter/src/material/theme_data.dart::VisualDensity": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null;
        get labelPadding(): Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null;
        get materialTapTargetSize(): upstream9.MaterialTapTargetSize | null;
        get elevation(): number | null;
        get shadowColor(): Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null;
        get surfaceTintColor(): Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null;
        get iconTheme(): (Readonly<{
            "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null;
        get avatarBoxConstraints(): (Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
        }>) | null;
        get chipAnimationStyle(): Readonly<{
            "__flaxBound:package:flutter/src/material/chip.dart::ChipAnimationStyle": readonly [];
        }> | null;
        get mouseCursor(): (Readonly<{
            "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null;
    }): ChipAttributes;
}
export declare const ChipAttributes: typeof _ChipAttributesFactory & _FlaxInstanceType<ChipAttributes> & _FlaxDartType<ChipAttributes, readonly ["class", "flax.core/sdk_material#type:ChipAttributes", readonly [], false]>;

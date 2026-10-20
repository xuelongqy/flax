import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type DartSet, type DartSetInput, type DartInput, type Widget } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/material-ui/_bindings/material_ButtonSegment';
import '@flax/material-ui/_bindings/material_ButtonSegment';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import type * as upstream4 from '@flax/material-ui/_bindings/material_ButtonStyle';
import '@flax/material-ui/_bindings/material_ButtonStyle';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_Axis';
import '@flax/flutter/painting/_bindings/flutter_Axis';
import '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import type * as upstream7 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/material-ui/_bindings/material_InteractiveInkFeatureFactory';
import type * as upstream15 from '@flax/material-ui/_bindings/material_MaterialTapTargetSize';
import '@flax/material-ui/_bindings/material_MaterialTapTargetSize';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/material-ui/_bindings/material_VisualDensity';
import type * as upstream18 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream19 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream21 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream22 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream23 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SegmentedButton<T extends unknown | null = unknown | null> extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:material_ui/src/segmented_button.dart::SegmentedButton": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __SegmentedButton: unique symbol;
    readonly [_flaxDartTypeValue]: SegmentedButton<T>;
    readonly segments: DartList<upstream2.ButtonSegment<T>>;
    readonly direction: upstream5.Axis;
    readonly selected: DartSet<T>;
    readonly onSelectionChanged: ((p0: DartSetInput<T, (T | DartInput<T>)>) => void) | null;
    readonly multiSelectionEnabled: boolean;
    readonly emptySelectionAllowed: boolean;
    readonly expandedInsets: upstream3.EdgeInsets | null;
    readonly style: upstream4.ButtonStyle | null;
    readonly showSelectedIcon: boolean;
    readonly selectedIcon: Widget | null;
    readonly key: upstream1.Key | null;
    createState(): upstream18.State<SegmentedButton<T>>;
    createElement(): upstream19.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream21.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream21.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream23.DiagnosticsTreeStyle | null | undefined;
    }): upstream22.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream22.DiagnosticsNode>;
}
export declare function _SegmentedButtonFactory<T extends unknown | null = unknown | null>(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    segments: DartListInput<upstream2.ButtonSegment<_FlaxDartOutput<T>>, Readonly<{
        "__flaxBound:package:material_ui/src/segmented_button.dart::ButtonSegment": readonly [_FlaxDartOutput<T>];
    }>>;
    selected: DartSetInput<_FlaxDartOutput<T>, (T | _FlaxDartOutput<T>)>;
    onSelectionChanged?: ((p0: DartSet<_FlaxDartOutput<T>>) => void) | null | undefined;
    multiSelectionEnabled?: boolean | undefined;
    emptySelectionAllowed?: boolean | undefined;
    expandedInsets?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }>) | null | undefined;
    style?: (Readonly<{
        "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    showSelectedIcon?: boolean | undefined;
    selectedIcon?: Widget | null | undefined;
    direction?: upstream5.Axis | undefined;
}): SegmentedButton<T>;
export declare function _SegmentedButtonFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    segments: DartListInput<upstream2.ButtonSegment<unknown | null>, Readonly<{
        "__flaxBound:package:material_ui/src/segmented_button.dart::ButtonSegment": readonly [unknown | null];
    }>>;
    selected: DartSetInput<unknown | null, unknown | null>;
    onSelectionChanged?: ((p0: DartSet<unknown | null>) => void) | null | undefined;
    multiSelectionEnabled?: boolean | undefined;
    emptySelectionAllowed?: boolean | undefined;
    expandedInsets?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }>) | null | undefined;
    style?: (Readonly<{
        "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    showSelectedIcon?: boolean | undefined;
    selectedIcon?: Widget | null | undefined;
    direction?: upstream5.Axis | undefined;
}): SegmentedButton<unknown | null>;
export declare namespace _SegmentedButtonFactory {
    function styleFrom(options?: {
        alignment?: Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
        }> | null | undefined;
        animationDuration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream7.Duration];
        }>) | null | undefined;
        backgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        disabledBackgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        disabledForegroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        disabledIconColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        disabledMouseCursor?: (Readonly<{
            "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        elevation?: number | null | undefined;
        enableFeedback?: boolean | null | undefined;
        enabledMouseCursor?: (Readonly<{
            "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        fixedSize?: (Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        foregroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        iconColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        iconSize?: number | null | undefined;
        maximumSize?: (Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        minimumSize?: (Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        selectedBackgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        selectedForegroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        shadowColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        shape?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null | undefined;
        side?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        splashFactory?: Readonly<{
            "__flaxBound:package:material_ui/src/ink_well.dart::InteractiveInkFeatureFactory": readonly [];
        }> | null | undefined;
        surfaceTintColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tapTargetSize?: upstream15.MaterialTapTargetSize | null | undefined;
        textStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        visualDensity?: (Readonly<{
            "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): upstream4.ButtonStyle;
}
export declare const SegmentedButton: typeof _SegmentedButtonFactory & _FlaxInstanceType<SegmentedButton<unknown | null>> & _FlaxDartType<SegmentedButton<unknown | null>, readonly ["class", "flax.material/material#type:SegmentedButton", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "segments" | "direction" | "selected" | "onSelectionChanged" | "multiSelectionEnabled" | "emptySelectionAllowed" | "expandedInsets" | "style" | "showSelectedIcon" | "selectedIcon" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/segmented_button.dart::SegmentedButton" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        (options: {
            key?: Readonly<{
                "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
            }> | null | undefined;
            segments: DartListInput<upstream2.ButtonSegment<_Selected0>, Readonly<{
                "__flaxBound:package:material_ui/src/segmented_button.dart::ButtonSegment": readonly [_Selected0];
            }>>;
            selected: DartSetInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>;
            onSelectionChanged?: ((p0: DartSet<_Selected0>) => void) | null | undefined;
            multiSelectionEnabled?: boolean | undefined;
            emptySelectionAllowed?: boolean | undefined;
            expandedInsets?: (Readonly<{
                "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
            }>) | null | undefined;
            style?: (Readonly<{
                "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
            showSelectedIcon?: boolean | undefined;
            selectedIcon?: Widget | null | undefined;
            direction?: upstream5.Axis | undefined;
        }): SegmentedButton<_Selected0>;
        readonly prototype: SegmentedButton<_Selected0>;
    } & _FlaxInstanceType<SegmentedButton<_Selected0>> & _FlaxDartType<SegmentedButton<_Selected0>> : never : never;
}
export {};

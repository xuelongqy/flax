import { type FlaxInstanceType as _FlaxInstanceType, type DartSet, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/material-ui/_bindings/material_ButtonStyle';
import '@flax/material-ui/_bindings/material_ButtonStyle';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesController';
import type * as upstream5 from '@flax/material-ui/_bindings/material_IconAlignment';
import '@flax/material-ui/_bindings/material_IconAlignment';
import '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import type * as upstream7 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/material-ui/_bindings/material_InteractiveInkFeatureFactory';
import type * as upstream17 from '@flax/material-ui/_bindings/material_MaterialTapTargetSize';
import '@flax/material-ui/_bindings/material_MaterialTapTargetSize';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/material-ui/_bindings/material_VisualDensity';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ElevatedButton extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:material_ui/src/elevated_button.dart::ElevatedButton": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:material_ui/src/button_style_button.dart::ButtonStyleButton": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, 'type'> {
    readonly type: "flax.material/material#type:ElevatedButton";
}
export declare function _ElevatedButtonFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    onPressed: Bindable<(() => void) | null>;
    onLongPress?: Bindable<(() => void) | null> | undefined;
    onHover?: Bindable<((value: boolean) => void) | null> | undefined;
    onFocusChange?: Bindable<((value: boolean) => void) | null> | undefined;
    style?: Bindable<(Readonly<{
        "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null> | undefined;
    focusNode?: Bindable<(Readonly<{
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
    }>) | null> | undefined;
    autofocus?: Bindable<boolean> | undefined;
    clipBehavior?: Bindable<upstream3.Clip | null> | undefined;
    statesController?: Bindable<(Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [DartSet<upstream9.WidgetState>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [DartSet<upstream9.WidgetState>];
    }>) | null> | undefined;
    child: Bindable<Widget | null>;
}): ElevatedButton;
export declare namespace _ElevatedButtonFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _ElevatedButtonFactory>[0]>), "child"> & ({
            "child": (globalThis.NonNullable<globalThis.Parameters<typeof _ElevatedButtonFactory>[0]>)["child"];
            children?: never;
        } | {
            "child"?: never;
            children: (globalThis.NonNullable<globalThis.Parameters<typeof _ElevatedButtonFactory>[0]>)["child"];
        });
        readonly slot: "child";
        readonly many: false;
    };
}
export declare namespace _ElevatedButtonFactory {
    function icon(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        onPressed: Bindable<(() => void) | null>;
        onLongPress?: Bindable<(() => void) | null> | undefined;
        onHover?: Bindable<((value: boolean) => void) | null> | undefined;
        onFocusChange?: Bindable<((value: boolean) => void) | null> | undefined;
        style?: Bindable<(Readonly<{
            "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null> | undefined;
        focusNode?: Bindable<(Readonly<{
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
        }>) | null> | undefined;
        autofocus?: Bindable<boolean> | undefined;
        clipBehavior?: Bindable<upstream3.Clip | null> | undefined;
        statesController?: Bindable<(Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesController": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [DartSet<upstream9.WidgetState>];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [DartSet<upstream9.WidgetState>];
        }>) | null> | undefined;
        icon?: Bindable<Widget | null> | undefined;
        label: Bindable<Widget>;
        iconAlignment?: Bindable<upstream5.IconAlignment | null> | undefined;
    }): ElevatedButton;
    namespace icon {
        const __flaxJsx: {
            readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof icon>[0]>);
            readonly slot: null;
            readonly many: false;
        };
    }
}
export declare namespace _ElevatedButtonFactory {
    function styleFrom(options?: {
        alignment?: Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
        }> | null | undefined;
        animationDuration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream7.Duration];
        }>) | null | undefined;
        backgroundBuilder?: ((context: upstream8.BuildContext, states: DartSet<upstream9.WidgetState>, child: Widget | null) => Widget) | null | undefined;
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
        foregroundBuilder?: ((context: upstream8.BuildContext, states: DartSet<upstream9.WidgetState>, child: Widget | null) => Widget) | null | undefined;
        foregroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        iconAlignment?: upstream5.IconAlignment | null | undefined;
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
        tapTargetSize?: upstream17.MaterialTapTargetSize | null | undefined;
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
    }): upstream1.ButtonStyle;
}
export declare const ElevatedButton: typeof _ElevatedButtonFactory & _FlaxInstanceType<ElevatedButton> & _FlaxDartType<ElevatedButton, readonly ["class", "flax.material/material#type:ElevatedButton", readonly [], false]>;

import { type FlaxInstanceType as _FlaxInstanceType, type DartSet, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/material/_bindings/material_ButtonStyle';
import '@flax/flutter/material/_bindings/material_ButtonStyle';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_Clip';
import '@flax/flutter/widgets/_bindings/flutter_Clip';
import '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_Size';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import '@flax/flutter/material/_bindings/material_VisualDensity';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface OutlinedButton extends WidgetDescription {
    readonly type: "flax.material/material#type:OutlinedButton";
}
export declare function _OutlinedButtonFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    onPressed: Bindable<(() => void) | null>;
    onLongPress?: Bindable<(() => void) | null> | undefined;
    onHover?: Bindable<((value: boolean) => void) | null> | undefined;
    onFocusChange?: Bindable<((value: boolean) => void) | null> | undefined;
    style?: Bindable<Readonly<{
        "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
    }> | null> | undefined;
    focusNode?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
    }> | null> | undefined;
    autofocus?: Bindable<boolean> | undefined;
    clipBehavior?: Bindable<upstream3.Clip | null> | undefined;
    child: Bindable<Widget | null>;
}): OutlinedButton;
export declare namespace _OutlinedButtonFactory {
    function icon(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        onPressed: Bindable<(() => void) | null>;
        onLongPress?: Bindable<(() => void) | null> | undefined;
        onHover?: Bindable<((value: boolean) => void) | null> | undefined;
        onFocusChange?: Bindable<((value: boolean) => void) | null> | undefined;
        style?: Bindable<Readonly<{
            "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
        }> | null> | undefined;
        focusNode?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
        }> | null> | undefined;
        autofocus?: Bindable<boolean> | undefined;
        clipBehavior?: Bindable<upstream3.Clip | null> | undefined;
        icon?: Bindable<Widget | null> | undefined;
        label: Bindable<Widget>;
    }): OutlinedButton;
}
export declare namespace _OutlinedButtonFactory {
    function styleFrom(options?: {
        alignment?: Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
        }> | null | undefined;
        animationDuration?: Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> | null | undefined;
        backgroundBuilder?: ((context: upstream6.BuildContext, states: DartSet<upstream7.WidgetState>, child: Widget | null) => Widget) | null | undefined;
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
        disabledMouseCursor?: Readonly<{
            "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
        }> | null | undefined;
        elevation?: number | null | undefined;
        enableFeedback?: boolean | null | undefined;
        enabledMouseCursor?: Readonly<{
            "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
        }> | null | undefined;
        fixedSize?: Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> | null | undefined;
        foregroundBuilder?: ((context: upstream6.BuildContext, states: DartSet<upstream7.WidgetState>, child: Widget | null) => Widget) | null | undefined;
        foregroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        iconColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        iconSize?: number | null | undefined;
        maximumSize?: Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> | null | undefined;
        minimumSize?: Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        shadowColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        shape?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [];
        }> | null | undefined;
        side?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> | null | undefined;
        surfaceTintColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        textStyle?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> | null | undefined;
        visualDensity?: Readonly<{
            "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
        }> | null | undefined;
    }): upstream1.ButtonStyle;
}
export declare const OutlinedButton: typeof _OutlinedButtonFactory & _FlaxInstanceType<OutlinedButton> & _FlaxDartType<OutlinedButton, readonly ["class", "flax.material/material#type:OutlinedButton", readonly [], false]>;

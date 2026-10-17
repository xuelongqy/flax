import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_Clip';
import '@flax/flutter/widgets/_bindings/flutter_Clip';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FloatingActionButton extends WidgetDescription {
    readonly type: "flax.material/material#type:FloatingActionButton";
}
export declare function _FloatingActionButtonFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    child?: Bindable<Widget | null> | undefined;
    tooltip?: Bindable<string | null> | undefined;
    foregroundColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    backgroundColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    focusColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    hoverColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    splashColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    heroTag?: Bindable<unknown | null> | undefined;
    elevation?: Bindable<number | null> | undefined;
    focusElevation?: Bindable<number | null> | undefined;
    hoverElevation?: Bindable<number | null> | undefined;
    highlightElevation?: Bindable<number | null> | undefined;
    disabledElevation?: Bindable<number | null> | undefined;
    onPressed: Bindable<(() => void) | null>;
    mouseCursor?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> | null> | undefined;
    mini?: Bindable<boolean> | undefined;
    shape?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null> | undefined;
    clipBehavior?: Bindable<upstream4.Clip> | undefined;
    focusNode?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
    }> | null> | undefined;
    autofocus?: Bindable<boolean> | undefined;
    isExtended?: Bindable<boolean> | undefined;
    enableFeedback?: Bindable<boolean | null> | undefined;
}): FloatingActionButton;
export declare namespace _FloatingActionButtonFactory {
    function small(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        child?: Bindable<Widget | null> | undefined;
        tooltip?: Bindable<string | null> | undefined;
        foregroundColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        backgroundColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        focusColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        hoverColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        splashColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        heroTag?: Bindable<unknown | null> | undefined;
        elevation?: Bindable<number | null> | undefined;
        focusElevation?: Bindable<number | null> | undefined;
        hoverElevation?: Bindable<number | null> | undefined;
        highlightElevation?: Bindable<number | null> | undefined;
        disabledElevation?: Bindable<number | null> | undefined;
        onPressed: Bindable<(() => void) | null>;
        mouseCursor?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
        }> | null> | undefined;
        shape?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null> | undefined;
        clipBehavior?: Bindable<upstream4.Clip> | undefined;
        focusNode?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
        }> | null> | undefined;
        autofocus?: Bindable<boolean> | undefined;
        enableFeedback?: Bindable<boolean | null> | undefined;
    }): FloatingActionButton;
}
export declare namespace _FloatingActionButtonFactory {
    function large(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        child?: Bindable<Widget | null> | undefined;
        tooltip?: Bindable<string | null> | undefined;
        foregroundColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        backgroundColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        focusColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        hoverColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        splashColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        heroTag?: Bindable<unknown | null> | undefined;
        elevation?: Bindable<number | null> | undefined;
        focusElevation?: Bindable<number | null> | undefined;
        hoverElevation?: Bindable<number | null> | undefined;
        highlightElevation?: Bindable<number | null> | undefined;
        disabledElevation?: Bindable<number | null> | undefined;
        onPressed: Bindable<(() => void) | null>;
        mouseCursor?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
        }> | null> | undefined;
        shape?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null> | undefined;
        clipBehavior?: Bindable<upstream4.Clip> | undefined;
        focusNode?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
        }> | null> | undefined;
        autofocus?: Bindable<boolean> | undefined;
        enableFeedback?: Bindable<boolean | null> | undefined;
    }): FloatingActionButton;
}
export declare namespace _FloatingActionButtonFactory {
    function extended(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        tooltip?: Bindable<string | null> | undefined;
        foregroundColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        backgroundColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        focusColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        hoverColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        heroTag?: Bindable<unknown | null> | undefined;
        elevation?: Bindable<number | null> | undefined;
        focusElevation?: Bindable<number | null> | undefined;
        hoverElevation?: Bindable<number | null> | undefined;
        splashColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        highlightElevation?: Bindable<number | null> | undefined;
        disabledElevation?: Bindable<number | null> | undefined;
        onPressed: Bindable<(() => void) | null>;
        mouseCursor?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
        }> | null> | undefined;
        shape?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null> | undefined;
        isExtended?: Bindable<boolean> | undefined;
        clipBehavior?: Bindable<upstream4.Clip> | undefined;
        focusNode?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
        }> | null> | undefined;
        autofocus?: Bindable<boolean> | undefined;
        extendedIconLabelSpacing?: Bindable<number | null> | undefined;
        extendedPadding?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null> | undefined;
        extendedTextStyle?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> | null> | undefined;
        icon?: Bindable<Widget | null> | undefined;
        label: Bindable<Widget>;
        enableFeedback?: Bindable<boolean | null> | undefined;
    }): FloatingActionButton;
}
export declare const FloatingActionButton: typeof _FloatingActionButtonFactory & _FlaxInstanceType<FloatingActionButton> & _FlaxDartType<FloatingActionButton, readonly ["class", "flax.material/material#type:FloatingActionButton", readonly [], false]>;

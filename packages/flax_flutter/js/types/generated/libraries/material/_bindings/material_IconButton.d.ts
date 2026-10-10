import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/material/_bindings/material_ButtonStyle';
export interface IconButton extends WidgetDescription {
    readonly type: "flax.material/material#type:IconButton";
}
declare function _IconButtonFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    iconSize?: Bindable<number | null> | undefined;
    padding?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null> | undefined;
    alignment?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }> | null> | undefined;
    color?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    disabledColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    onPressed: Bindable<(() => void) | null>;
    focusNode?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
    }> | null> | undefined;
    autofocus?: Bindable<boolean> | undefined;
    tooltip?: Bindable<string | null> | undefined;
    style?: Bindable<Readonly<{
        "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
    }> | null> | undefined;
    isSelected?: Bindable<boolean | null> | undefined;
    selectedIcon?: Bindable<Widget | null> | undefined;
    icon: Bindable<Widget>;
}): IconButton;
declare namespace _IconButtonFactory {
    function filled(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        iconSize?: Bindable<number | null> | undefined;
        padding?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null> | undefined;
        alignment?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
        }> | null> | undefined;
        color?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        disabledColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        onPressed: Bindable<(() => void) | null>;
        focusNode?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
        }> | null> | undefined;
        autofocus?: Bindable<boolean> | undefined;
        tooltip?: Bindable<string | null> | undefined;
        style?: Bindable<Readonly<{
            "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
        }> | null> | undefined;
        isSelected?: Bindable<boolean | null> | undefined;
        selectedIcon?: Bindable<Widget | null> | undefined;
        icon: Bindable<Widget>;
    }): IconButton;
}
declare namespace _IconButtonFactory {
    function filledTonal(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        iconSize?: Bindable<number | null> | undefined;
        padding?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null> | undefined;
        alignment?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
        }> | null> | undefined;
        color?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        disabledColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        onPressed: Bindable<(() => void) | null>;
        focusNode?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
        }> | null> | undefined;
        autofocus?: Bindable<boolean> | undefined;
        tooltip?: Bindable<string | null> | undefined;
        style?: Bindable<Readonly<{
            "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
        }> | null> | undefined;
        isSelected?: Bindable<boolean | null> | undefined;
        selectedIcon?: Bindable<Widget | null> | undefined;
        icon: Bindable<Widget>;
    }): IconButton;
}
declare namespace _IconButtonFactory {
    function outlined(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        iconSize?: Bindable<number | null> | undefined;
        padding?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null> | undefined;
        alignment?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
        }> | null> | undefined;
        color?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        disabledColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        onPressed: Bindable<(() => void) | null>;
        focusNode?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
        }> | null> | undefined;
        autofocus?: Bindable<boolean> | undefined;
        tooltip?: Bindable<string | null> | undefined;
        style?: Bindable<Readonly<{
            "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
        }> | null> | undefined;
        isSelected?: Bindable<boolean | null> | undefined;
        selectedIcon?: Bindable<Widget | null> | undefined;
        icon: Bindable<Widget>;
    }): IconButton;
}
export declare const IconButton: typeof _IconButtonFactory & _FlaxInstanceType<IconButton>;
export {};

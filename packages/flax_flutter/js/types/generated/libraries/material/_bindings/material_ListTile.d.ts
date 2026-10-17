import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartIterableInput, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/material/_bindings/material_VisualDensity';
import '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import type * as upstream3 from '@flax/flutter/material/_bindings/material_ListTileStyle';
import '@flax/flutter/material/_bindings/material_ListTileStyle';
import '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ListTile extends WidgetDescription {
    readonly type: "flax.material/material#type:ListTile";
}
export declare function _ListTileFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    leading?: Bindable<Widget | null> | undefined;
    title?: Bindable<Widget | null> | undefined;
    subtitle?: Bindable<Widget | null> | undefined;
    trailing?: Bindable<Widget | null> | undefined;
    isThreeLine?: Bindable<boolean | null> | undefined;
    dense?: Bindable<boolean | null> | undefined;
    visualDensity?: Bindable<Readonly<{
        "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
    }> | null> | undefined;
    shape?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null> | undefined;
    style?: Bindable<upstream3.ListTileStyle | null> | undefined;
    selectedColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    iconColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    textColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    titleTextStyle?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null> | undefined;
    subtitleTextStyle?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null> | undefined;
    leadingAndTrailingTextStyle?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null> | undefined;
    contentPadding?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null> | undefined;
    enabled?: Bindable<boolean> | undefined;
    onTap?: Bindable<(() => void) | null> | undefined;
    onLongPress?: Bindable<(() => void) | null> | undefined;
    onFocusChange?: Bindable<((value: boolean) => void) | null> | undefined;
    mouseCursor?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> | null> | undefined;
    selected?: Bindable<boolean> | undefined;
    focusColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    hoverColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    splashColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    focusNode?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
    }> | null> | undefined;
    autofocus?: Bindable<boolean> | undefined;
    tileColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    selectedTileColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    enableFeedback?: Bindable<boolean | null> | undefined;
    horizontalTitleGap?: Bindable<number | null> | undefined;
    minVerticalPadding?: Bindable<number | null> | undefined;
    minLeadingWidth?: Bindable<number | null> | undefined;
    minTileHeight?: Bindable<number | null> | undefined;
    internalAddSemanticForOnTap?: Bindable<boolean> | undefined;
}): ListTile;
export declare namespace _ListTileFactory {
    function divideTiles(options: {
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        context?: upstream9.BuildContext | null | undefined;
        tiles: DartIterableInput<Widget, Widget>;
    }): DartIterable<Widget>;
}
export declare const ListTile: typeof _ListTileFactory & _FlaxInstanceType<ListTile> & _FlaxDartType<ListTile, readonly ["class", "flax.material/material#type:ListTile", readonly [], false]>;

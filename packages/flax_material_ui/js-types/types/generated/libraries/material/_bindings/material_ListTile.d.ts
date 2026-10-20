import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartIterableInput, type DartSet, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/material-ui/_bindings/material_VisualDensity';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream3 from '@flax/material-ui/_bindings/material_ListTileStyle';
import '@flax/material-ui/_bindings/material_ListTileStyle';
import '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream9 from '@flax/material-ui/_bindings/material_ListTileTitleAlignment';
import '@flax/material-ui/_bindings/material_ListTileTitleAlignment';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesController';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ListTile extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:material_ui/src/list_tile.dart::ListTile": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, 'type'> {
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
    visualDensity?: Bindable<(Readonly<{
        "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null> | undefined;
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
    titleTextStyle?: Bindable<(Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null> | undefined;
    subtitleTextStyle?: Bindable<(Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null> | undefined;
    leadingAndTrailingTextStyle?: Bindable<(Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null> | undefined;
    contentPadding?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null> | undefined;
    enabled?: Bindable<boolean> | undefined;
    onTap?: Bindable<(() => void) | null> | undefined;
    onLongPress?: Bindable<(() => void) | null> | undefined;
    onFocusChange?: Bindable<((value: boolean) => void) | null> | undefined;
    mouseCursor?: Bindable<(Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null> | undefined;
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
    titleAlignment?: Bindable<upstream9.ListTileTitleAlignment | null> | undefined;
    internalAddSemanticForOnTap?: Bindable<boolean> | undefined;
    statesController?: Bindable<(Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [DartSet<upstream12.WidgetState>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [DartSet<upstream12.WidgetState>];
    }>) | null> | undefined;
}): ListTile;
export declare namespace _ListTileFactory {
    function divideTiles(options: {
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        context?: upstream11.BuildContext | null | undefined;
        tiles: DartIterableInput<Widget, Widget>;
    }): DartIterable<Widget>;
}
export declare const ListTile: typeof _ListTileFactory & _FlaxInstanceType<ListTile> & _FlaxDartType<ListTile, readonly ["class", "flax.material/material#type:ListTile", readonly [], false]>;

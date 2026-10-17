import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_MainAxisAlignment';
import '@flax/flutter/widgets/_bindings/flutter_MainAxisAlignment';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_VerticalDirection';
import '@flax/flutter/widgets/_bindings/flutter_VerticalDirection';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsets';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_Clip';
import '@flax/flutter/widgets/_bindings/flutter_Clip';
import '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/widgets/_bindings/flutter_BoxConstraints';
import '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/flutter/widgets/_bindings/flutter_Curve';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AlertDialog extends WidgetDescription {
    readonly type: "flax.material/material#type:AlertDialog";
}
export declare function _AlertDialogFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    icon?: Bindable<Widget | null> | undefined;
    iconPadding?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null> | undefined;
    iconColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    title?: Bindable<Widget | null> | undefined;
    titlePadding?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null> | undefined;
    titleTextStyle?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null> | undefined;
    content?: Bindable<Widget | null> | undefined;
    contentPadding?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null> | undefined;
    contentTextStyle?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null> | undefined;
    actions?: Bindable<DartListInput<Widget, Widget> | null> | undefined;
    actionsPadding?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null> | undefined;
    actionsAlignment?: Bindable<upstream4.MainAxisAlignment | null> | undefined;
    actionsOverflowDirection?: Bindable<upstream5.VerticalDirection | null> | undefined;
    actionsOverflowButtonSpacing?: Bindable<number | null> | undefined;
    buttonPadding?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null> | undefined;
    backgroundColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    elevation?: Bindable<number | null> | undefined;
    shadowColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    surfaceTintColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    semanticLabel?: Bindable<string | null> | undefined;
    insetPadding?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
    }> | null> | undefined;
    clipBehavior?: Bindable<upstream7.Clip | null> | undefined;
    shape?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null> | undefined;
    alignment?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }> | null> | undefined;
    constraints?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> | null> | undefined;
    scrollable?: Bindable<boolean> | undefined;
}): AlertDialog;
export declare namespace _AlertDialogFactory {
    function adaptive(options?: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        icon?: Bindable<Widget | null> | undefined;
        iconPadding?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null> | undefined;
        iconColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        title?: Bindable<Widget | null> | undefined;
        titlePadding?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null> | undefined;
        titleTextStyle?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> | null> | undefined;
        content?: Bindable<Widget | null> | undefined;
        contentPadding?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null> | undefined;
        contentTextStyle?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> | null> | undefined;
        actions?: Bindable<DartListInput<Widget, Widget> | null> | undefined;
        actionsPadding?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null> | undefined;
        actionsAlignment?: Bindable<upstream4.MainAxisAlignment | null> | undefined;
        actionsOverflowDirection?: Bindable<upstream5.VerticalDirection | null> | undefined;
        actionsOverflowButtonSpacing?: Bindable<number | null> | undefined;
        buttonPadding?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null> | undefined;
        backgroundColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        elevation?: Bindable<number | null> | undefined;
        shadowColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        surfaceTintColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        semanticLabel?: Bindable<string | null> | undefined;
        insetPadding?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
        }>> | undefined;
        clipBehavior?: Bindable<upstream7.Clip | null> | undefined;
        shape?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null> | undefined;
        alignment?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
        }> | null> | undefined;
        constraints?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
        }> | null> | undefined;
        scrollable?: Bindable<boolean> | undefined;
        scrollController?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
        }> | null> | undefined;
        actionScrollController?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
        }> | null> | undefined;
        insetAnimationDuration?: Bindable<Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }>> | undefined;
        insetAnimationCurve?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
        }>> | undefined;
    }): AlertDialog;
}
export declare const AlertDialog: typeof _AlertDialogFactory & _FlaxInstanceType<AlertDialog> & _FlaxDartType<AlertDialog, readonly ["class", "flax.material/material#type:AlertDialog", readonly [], false]>;

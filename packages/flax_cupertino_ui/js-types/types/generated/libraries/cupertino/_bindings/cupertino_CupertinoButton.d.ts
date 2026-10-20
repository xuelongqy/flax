import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/cupertino-ui/_bindings/cupertino_CupertinoButtonSize';
import '@flax/cupertino-ui/_bindings/cupertino_CupertinoButtonSize';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CupertinoButton extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:cupertino_ui/src/button.dart::CupertinoButton": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, 'type'> {
    readonly type: "flax.cupertino/cupertino#type:CupertinoButton";
}
export declare function _CupertinoButtonFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    child: Bindable<Widget>;
    sizeStyle?: Bindable<upstream1.CupertinoButtonSize> | undefined;
    padding?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null> | undefined;
    color?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    foregroundColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    disabledColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>> | undefined;
    minSize?: Bindable<number | null> | undefined;
    minimumSize?: Bindable<(Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null> | undefined;
    pressedOpacity?: Bindable<number | null> | undefined;
    borderRadius?: Bindable<(Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }>) | null> | undefined;
    alignment?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }>> | undefined;
    focusColor?: Bindable<Readonly<{
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
    onFocusChange?: Bindable<((value: boolean) => void) | null> | undefined;
    autofocus?: Bindable<boolean> | undefined;
    mouseCursor?: Bindable<(Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null> | undefined;
    onLongPress?: Bindable<(() => void) | null> | undefined;
    onPressed: Bindable<(() => void) | null>;
}): CupertinoButton;
export declare namespace _CupertinoButtonFactory {
    function tinted(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        child: Bindable<Widget>;
        sizeStyle?: Bindable<upstream1.CupertinoButtonSize> | undefined;
        padding?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null> | undefined;
        color?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        foregroundColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        disabledColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>> | undefined;
        minSize?: Bindable<number | null> | undefined;
        minimumSize?: Bindable<(Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null> | undefined;
        pressedOpacity?: Bindable<number | null> | undefined;
        borderRadius?: Bindable<(Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
        }>) | null> | undefined;
        alignment?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
        }>> | undefined;
        focusColor?: Bindable<Readonly<{
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
        onFocusChange?: Bindable<((value: boolean) => void) | null> | undefined;
        autofocus?: Bindable<boolean> | undefined;
        mouseCursor?: Bindable<(Readonly<{
            "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null> | undefined;
        onLongPress?: Bindable<(() => void) | null> | undefined;
        onPressed: Bindable<(() => void) | null>;
    }): CupertinoButton;
}
export declare namespace _CupertinoButtonFactory {
    function filled(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        child: Bindable<Widget>;
        sizeStyle?: Bindable<upstream1.CupertinoButtonSize> | undefined;
        padding?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null> | undefined;
        color?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        disabledColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>> | undefined;
        foregroundColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        minSize?: Bindable<number | null> | undefined;
        minimumSize?: Bindable<(Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null> | undefined;
        pressedOpacity?: Bindable<number | null> | undefined;
        borderRadius?: Bindable<(Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
        }>) | null> | undefined;
        alignment?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
        }>> | undefined;
        focusColor?: Bindable<Readonly<{
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
        onFocusChange?: Bindable<((value: boolean) => void) | null> | undefined;
        autofocus?: Bindable<boolean> | undefined;
        mouseCursor?: Bindable<(Readonly<{
            "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null> | undefined;
        onLongPress?: Bindable<(() => void) | null> | undefined;
        onPressed: Bindable<(() => void) | null>;
    }): CupertinoButton;
}
export declare namespace _CupertinoButtonFactory {
    function tapMoveSlop(): number;
}
export declare const CupertinoButton: typeof _CupertinoButtonFactory & _FlaxInstanceType<CupertinoButton> & _FlaxDartType<CupertinoButton, readonly ["class", "flax.cupertino/cupertino#type:CupertinoButton", readonly [], false]>;

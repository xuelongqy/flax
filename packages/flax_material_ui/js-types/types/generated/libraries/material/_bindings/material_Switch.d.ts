import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_Icon';
import type * as upstream6 from '@flax/material-ui/_bindings/material_MaterialTapTargetSize';
import '@flax/material-ui/_bindings/material_MaterialTapTargetSize';
import type * as upstream7 from '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Switch extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:material_ui/src/switch.dart::Switch": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, 'type'> {
    readonly type: "flax.material/material#type:Switch";
}
export declare function _SwitchFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    value: Bindable<boolean>;
    onChanged: Bindable<((value: boolean) => void) | null>;
    activeColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    activeThumbColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    activeTrackColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    inactiveThumbColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    inactiveTrackColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    activeThumbImage?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [{}];
    }> | null> | undefined;
    onActiveThumbImageError?: Bindable<((exception: {}, stackTrace: upstream3.StackTrace | null) => void) | null> | undefined;
    inactiveThumbImage?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [{}];
    }> | null> | undefined;
    onInactiveThumbImageError?: Bindable<((exception: {}, stackTrace: upstream3.StackTrace | null) => void) | null> | undefined;
    thumbColor?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream1.Color | null];
    }> | null> | undefined;
    trackColor?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream1.Color | null];
    }> | null> | undefined;
    trackOutlineColor?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream1.Color | null];
    }> | null> | undefined;
    trackOutlineWidth?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
    }> | null> | undefined;
    thumbIcon?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.Icon | null];
    }> | null> | undefined;
    materialTapTargetSize?: Bindable<upstream6.MaterialTapTargetSize | null> | undefined;
    dragStartBehavior?: Bindable<upstream7.DragStartBehavior> | undefined;
    mouseCursor?: Bindable<(Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null> | undefined;
    focusColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    hoverColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    overlayColor?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream1.Color | null];
    }> | null> | undefined;
    splashRadius?: Bindable<number | null> | undefined;
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
    padding?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null> | undefined;
}): Switch;
export declare namespace _SwitchFactory {
    function adaptive(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        value: Bindable<boolean>;
        onChanged: Bindable<((value: boolean) => void) | null>;
        activeColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        activeThumbColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        activeTrackColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        inactiveThumbColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        inactiveTrackColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        activeThumbImage?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [{}];
        }> | null> | undefined;
        onActiveThumbImageError?: Bindable<((exception: {}, stackTrace: upstream3.StackTrace | null) => void) | null> | undefined;
        inactiveThumbImage?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [{}];
        }> | null> | undefined;
        onInactiveThumbImageError?: Bindable<((exception: {}, stackTrace: upstream3.StackTrace | null) => void) | null> | undefined;
        materialTapTargetSize?: Bindable<upstream6.MaterialTapTargetSize | null> | undefined;
        thumbColor?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream1.Color | null];
        }> | null> | undefined;
        trackColor?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream1.Color | null];
        }> | null> | undefined;
        trackOutlineColor?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream1.Color | null];
        }> | null> | undefined;
        trackOutlineWidth?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
        }> | null> | undefined;
        thumbIcon?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.Icon | null];
        }> | null> | undefined;
        dragStartBehavior?: Bindable<upstream7.DragStartBehavior> | undefined;
        mouseCursor?: Bindable<(Readonly<{
            "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null> | undefined;
        focusColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        hoverColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        overlayColor?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream1.Color | null];
        }> | null> | undefined;
        splashRadius?: Bindable<number | null> | undefined;
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
        padding?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null> | undefined;
        applyCupertinoTheme?: Bindable<boolean | null> | undefined;
    }): Switch;
}
export declare const Switch: typeof _SwitchFactory & _FlaxInstanceType<Switch> & _FlaxDartType<Switch, readonly ["class", "flax.material/material#type:Switch", readonly [], false]>;

import { type FlaxInstanceType as _FlaxInstanceType, type DartSet, type DartSetInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream4 from '@flax/flutter/services/_bindings/flutter_Size';
import '@flax/flutter/services/_bindings/flutter_Size';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/widgets/_bindings/flutter_OutlinedBorder';
import type * as upstream7 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream8 from '@flax/flutter/material/_bindings/material_VisualDensity';
import '@flax/flutter/material/_bindings/material_VisualDensity';
import type * as upstream9 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ButtonStyle extends Readonly<{
    "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __ButtonStyle: unique symbol;
    readonly textStyle: upstream0.WidgetStateProperty<upstream1.TextStyle | null> | null;
    readonly backgroundColor: upstream0.WidgetStateProperty<upstream2.Color | null> | null;
    readonly foregroundColor: upstream0.WidgetStateProperty<upstream2.Color | null> | null;
    readonly overlayColor: upstream0.WidgetStateProperty<upstream2.Color | null> | null;
    readonly shadowColor: upstream0.WidgetStateProperty<upstream2.Color | null> | null;
    readonly surfaceTintColor: upstream0.WidgetStateProperty<upstream2.Color | null> | null;
    readonly elevation: upstream0.WidgetStateProperty<number | null> | null;
    readonly padding: upstream0.WidgetStateProperty<upstream3.EdgeInsetsGeometry | null> | null;
    readonly minimumSize: upstream0.WidgetStateProperty<upstream4.Size | null> | null;
    readonly fixedSize: upstream0.WidgetStateProperty<upstream4.Size | null> | null;
    readonly maximumSize: upstream0.WidgetStateProperty<upstream4.Size | null> | null;
    readonly iconColor: upstream0.WidgetStateProperty<upstream2.Color | null> | null;
    readonly iconSize: upstream0.WidgetStateProperty<number | null> | null;
    readonly side: upstream0.WidgetStateProperty<upstream5.BorderSide | null> | null;
    readonly shape: upstream0.WidgetStateProperty<upstream6.OutlinedBorder | null> | null;
    readonly mouseCursor: upstream0.WidgetStateProperty<upstream7.MouseCursor | null> | null;
    readonly visualDensity: upstream8.VisualDensity | null;
    readonly animationDuration: upstream9.Duration | null;
    readonly enableFeedback: boolean | null;
    readonly alignment: upstream10.AlignmentGeometry | null;
    readonly backgroundBuilder: ((context: upstream11.BuildContext, states: DartSetInput<upstream12.WidgetState, upstream12.WidgetState>, child: Widget | null) => Widget) | null;
    readonly foregroundBuilder: ((context: upstream11.BuildContext, states: DartSetInput<upstream12.WidgetState, upstream12.WidgetState>, child: Widget | null) => Widget) | null;
    copyWith(options?: {
        alignment?: Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
        }> | null | undefined;
        animationDuration?: Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> | null | undefined;
        backgroundBuilder?: ((context: upstream11.BuildContext, states: DartSet<upstream12.WidgetState>, child: Widget | null) => Widget) | null | undefined;
        backgroundColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        elevation?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
        }> | null | undefined;
        enableFeedback?: boolean | null | undefined;
        fixedSize?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream4.Size | null];
        }> | null | undefined;
        foregroundBuilder?: ((context: upstream11.BuildContext, states: DartSet<upstream12.WidgetState>, child: Widget | null) => Widget) | null | undefined;
        foregroundColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        iconColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        iconSize?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
        }> | null | undefined;
        maximumSize?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream4.Size | null];
        }> | null | undefined;
        minimumSize?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream4.Size | null];
        }> | null | undefined;
        mouseCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream7.MouseCursor | null];
        }> | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.EdgeInsetsGeometry | null];
        }> | null | undefined;
        shadowColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        shape?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream6.OutlinedBorder | null];
        }> | null | undefined;
        side?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.BorderSide | null];
        }> | null | undefined;
        surfaceTintColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        textStyle?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream1.TextStyle | null];
        }> | null | undefined;
        visualDensity?: Readonly<{
            "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
        }> | null | undefined;
    }): ButtonStyle;
    merge(style: Readonly<{
        "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
    }> | null): ButtonStyle;
    toStringShort(): string;
}
export declare function _ButtonStyleFactory(options?: {
    textStyle?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream1.TextStyle | null];
    }> | null | undefined;
    backgroundColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
    }> | null | undefined;
    foregroundColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
    }> | null | undefined;
    overlayColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
    }> | null | undefined;
    shadowColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
    }> | null | undefined;
    surfaceTintColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
    }> | null | undefined;
    elevation?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
    }> | null | undefined;
    padding?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.EdgeInsetsGeometry | null];
    }> | null | undefined;
    minimumSize?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream4.Size | null];
    }> | null | undefined;
    fixedSize?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream4.Size | null];
    }> | null | undefined;
    maximumSize?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream4.Size | null];
    }> | null | undefined;
    iconColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
    }> | null | undefined;
    iconSize?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
    }> | null | undefined;
    side?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.BorderSide | null];
    }> | null | undefined;
    shape?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream6.OutlinedBorder | null];
    }> | null | undefined;
    mouseCursor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream7.MouseCursor | null];
    }> | null | undefined;
    visualDensity?: Readonly<{
        "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
    }> | null | undefined;
    animationDuration?: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> | null | undefined;
    enableFeedback?: boolean | null | undefined;
    alignment?: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }> | null | undefined;
    backgroundBuilder?: ((context: upstream11.BuildContext, states: DartSet<upstream12.WidgetState>, child: Widget | null) => Widget) | null | undefined;
    foregroundBuilder?: ((context: upstream11.BuildContext, states: DartSet<upstream12.WidgetState>, child: Widget | null) => Widget) | null | undefined;
}): ButtonStyle;
export declare namespace _ButtonStyleFactory {
    function lerp(a: Readonly<{
        "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
    }> | null, t: number): ButtonStyle | null;
}
export declare const ButtonStyle: typeof _ButtonStyleFactory & _FlaxInstanceType<ButtonStyle> & _FlaxDartType<ButtonStyle, readonly ["class", "flax.material/material#type:ButtonStyle", readonly [], false]>;

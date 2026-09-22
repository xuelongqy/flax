import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/widgets/_bindings/flutter_OutlinedBorder';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream4 from '@flax/flutter/material/_bindings/material_VisualDensity';
import '@flax/flutter/material/_bindings/material_VisualDensity';
export interface ButtonStyle extends Readonly<{
    "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __ButtonStyle: unique symbol;
    readonly backgroundColor: upstream0.WidgetStateProperty<upstream1.Color | null> | null;
    readonly foregroundColor: upstream0.WidgetStateProperty<upstream1.Color | null> | null;
    readonly overlayColor: upstream0.WidgetStateProperty<upstream1.Color | null> | null;
    readonly elevation: upstream0.WidgetStateProperty<number | null> | null;
    readonly shape: upstream0.WidgetStateProperty<upstream2.OutlinedBorder | null> | null;
    readonly mouseCursor: upstream0.WidgetStateProperty<upstream3.MouseCursor | null> | null;
    readonly visualDensity: upstream4.VisualDensity | null;
    copyWith(options?: {
        backgroundColor?: upstream0.WidgetStateProperty<upstream1.Color | null> | null | undefined;
        elevation?: upstream0.WidgetStateProperty<number | null> | null | undefined;
        foregroundColor?: upstream0.WidgetStateProperty<upstream1.Color | null> | null | undefined;
        mouseCursor?: upstream0.WidgetStateProperty<upstream3.MouseCursor | null> | null | undefined;
        overlayColor?: upstream0.WidgetStateProperty<upstream1.Color | null> | null | undefined;
        shape?: upstream0.WidgetStateProperty<upstream2.OutlinedBorder | null> | null | undefined;
        visualDensity?: upstream4.VisualDensity | null | undefined;
    }): ButtonStyle;
}
export declare function ButtonStyle(options?: {
    backgroundColor?: upstream0.WidgetStateProperty<upstream1.Color | null> | null | undefined;
    foregroundColor?: upstream0.WidgetStateProperty<upstream1.Color | null> | null | undefined;
    overlayColor?: upstream0.WidgetStateProperty<upstream1.Color | null> | null | undefined;
    elevation?: upstream0.WidgetStateProperty<number | null> | null | undefined;
    shape?: upstream0.WidgetStateProperty<upstream2.OutlinedBorder | null> | null | undefined;
    mouseCursor?: upstream0.WidgetStateProperty<upstream3.MouseCursor | null> | null | undefined;
    visualDensity?: upstream4.VisualDensity | null | undefined;
}): ButtonStyle;

import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_Decoration';
import '@flax/flutter/widgets/_bindings/flutter_Decoration';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BoxBorder';
import '@flax/flutter/widgets/_bindings/flutter_BoxBorder';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BoxShape';
export interface BoxDecoration extends upstream0.Decoration, Readonly<{
    "__flaxBound:package:flutter/src/painting/box_decoration.dart::BoxDecoration": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __BoxDecoration: unique symbol;
    readonly color: upstream1.Color | null;
    readonly border: upstream2.BoxBorder | null;
    readonly borderRadius: upstream3.BorderRadiusGeometry | null;
    readonly shape: upstream4.BoxShape;
    copyWith(options?: {
        border?: upstream2.BoxBorder | null | undefined;
        borderRadius?: upstream3.BorderRadiusGeometry | null | undefined;
        color?: upstream1.Color | null | undefined;
        shape?: upstream4.BoxShape | null | undefined;
    }): BoxDecoration;
}
export declare function BoxDecoration(options?: {
    color?: upstream1.Color | null | undefined;
    border?: upstream2.BoxBorder | null | undefined;
    borderRadius?: upstream3.BorderRadiusGeometry | null | undefined;
    shape?: upstream4.BoxShape | undefined;
}): BoxDecoration;

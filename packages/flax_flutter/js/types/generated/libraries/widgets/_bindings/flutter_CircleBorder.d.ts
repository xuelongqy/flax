import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/widgets/_bindings/flutter_OutlinedBorder';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import '@flax/flutter/widgets/_bindings/flutter_BorderSide';
export interface CircleBorder extends upstream0.OutlinedBorder, upstream1.ShapeBorder, Readonly<{
    "__flaxBound:package:flutter/src/painting/circle_border.dart::CircleBorder": readonly [];
}> {
    readonly __CircleBorder: unique symbol;
    readonly side: upstream2.BorderSide;
    readonly eccentricity: number;
    copyWith(options?: {
        eccentricity?: number | null | undefined;
        side?: upstream2.BorderSide | null | undefined;
    }): CircleBorder;
}
export declare function CircleBorder(options?: {
    side?: upstream2.BorderSide | undefined;
    eccentricity?: number | undefined;
}): CircleBorder;

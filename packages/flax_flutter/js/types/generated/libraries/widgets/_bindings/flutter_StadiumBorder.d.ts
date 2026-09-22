import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/widgets/_bindings/flutter_OutlinedBorder';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import '@flax/flutter/widgets/_bindings/flutter_BorderSide';
export interface StadiumBorder extends upstream0.OutlinedBorder, upstream1.ShapeBorder, Readonly<{
    "__flaxBound:package:flutter/src/painting/stadium_border.dart::StadiumBorder": readonly [];
}> {
    readonly __StadiumBorder: unique symbol;
    readonly side: upstream2.BorderSide;
    copyWith(options?: {
        side?: upstream2.BorderSide | null | undefined;
    }): StadiumBorder;
}
export declare function StadiumBorder(options?: {
    side?: upstream2.BorderSide | undefined;
}): StadiumBorder;

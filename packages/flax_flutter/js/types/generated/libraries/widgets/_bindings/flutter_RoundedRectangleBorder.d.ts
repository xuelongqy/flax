import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/widgets/_bindings/flutter_OutlinedBorder';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
export interface RoundedRectangleBorder extends upstream0.OutlinedBorder, upstream1.ShapeBorder, Readonly<{
    "__flaxBound:package:flutter/src/painting/rounded_rectangle_border.dart::RoundedRectangleBorder": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/rounded_rectangle_border.dart::_RRectLikeBorder": readonly [];
}> {
    readonly __RoundedRectangleBorder: unique symbol;
    readonly side: upstream2.BorderSide;
    readonly borderRadius: upstream3.BorderRadiusGeometry;
    copyWith(options?: {
        borderRadius?: upstream3.BorderRadiusGeometry | null | undefined;
        side?: upstream2.BorderSide | null | undefined;
    }): RoundedRectangleBorder;
}
export declare function RoundedRectangleBorder(options?: {
    side?: upstream2.BorderSide | undefined;
    borderRadius?: upstream3.BorderRadiusGeometry | undefined;
}): RoundedRectangleBorder;

import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BoxBorder';
import '@flax/flutter/widgets/_bindings/flutter_BoxBorder';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BorderStyle';
export interface Border extends upstream0.BoxBorder, upstream1.ShapeBorder, Readonly<{
    "__flaxBound:package:flutter/src/painting/box_border.dart::Border": readonly [];
}> {
    readonly __Border: unique symbol;
    readonly top: upstream2.BorderSide;
    readonly right: upstream2.BorderSide;
    readonly bottom: upstream2.BorderSide;
    readonly left: upstream2.BorderSide;
    readonly isUniform: boolean;
}
export declare function Border(options?: {
    top?: upstream2.BorderSide | undefined;
    right?: upstream2.BorderSide | undefined;
    bottom?: upstream2.BorderSide | undefined;
    left?: upstream2.BorderSide | undefined;
}): Border;
export declare namespace Border {
    function all(options?: {
        color?: upstream3.Color | undefined;
        width?: number | undefined;
        style?: upstream4.BorderStyle | undefined;
        strokeAlign?: number | undefined;
    }): Border;
}

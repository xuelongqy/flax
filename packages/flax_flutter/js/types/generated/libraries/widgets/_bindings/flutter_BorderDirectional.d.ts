import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BoxBorder';
import '@flax/flutter/widgets/_bindings/flutter_BoxBorder';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import '@flax/flutter/widgets/_bindings/flutter_BorderSide';
export interface BorderDirectional extends upstream0.BoxBorder, upstream1.ShapeBorder, Readonly<{
    "__flaxBound:package:flutter/src/painting/box_border.dart::BorderDirectional": readonly [];
}> {
    readonly __BorderDirectional: unique symbol;
    readonly top: upstream2.BorderSide;
    readonly start: upstream2.BorderSide;
    readonly end: upstream2.BorderSide;
    readonly bottom: upstream2.BorderSide;
    readonly isUniform: boolean;
}
export declare function BorderDirectional(options?: {
    top?: upstream2.BorderSide | undefined;
    start?: upstream2.BorderSide | undefined;
    end?: upstream2.BorderSide | undefined;
    bottom?: upstream2.BorderSide | undefined;
}): BorderDirectional;

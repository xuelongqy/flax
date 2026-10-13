import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BoxBorder';
import '@flax/flutter/widgets/_bindings/flutter_BoxBorder';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BorderStyle';
import '@flax/flutter/widgets/_bindings/flutter_BorderStyle';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
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
declare function _BorderFactory(options?: {
    top?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
    }> | undefined;
    right?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
    }> | undefined;
    bottom?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
    }> | undefined;
    left?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
    }> | undefined;
}): Border;
declare namespace _BorderFactory {
    function all(options?: {
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        width?: number | undefined;
        style?: upstream4.BorderStyle | undefined;
        strokeAlign?: number | undefined;
    }): Border;
}
export declare const Border: typeof _BorderFactory & _FlaxInstanceType<Border> & _FlaxDartType<Border, readonly ["class", "flax.core/flutter#type:Border", readonly [], false]>;
export {};

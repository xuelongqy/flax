import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
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
        side?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> | null | undefined;
    }): StadiumBorder;
}
declare function _StadiumBorderFactory(options?: {
    side?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
    }> | undefined;
}): StadiumBorder;
export declare const StadiumBorder: typeof _StadiumBorderFactory & _FlaxInstanceType<StadiumBorder>;
export {};

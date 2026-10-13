import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface OutlinedBorder extends upstream0.ShapeBorder, Readonly<{
    "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [];
}> {
    readonly __OutlinedBorder: unique symbol;
    readonly side: upstream1.BorderSide;
}
export declare const OutlinedBorder: object & _FlaxInstanceType<OutlinedBorder> & _FlaxDartType<OutlinedBorder, readonly ["class", "flax.core/flutter#type:OutlinedBorder", readonly [], false]>;

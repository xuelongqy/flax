import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_Radius';
import '@flax/flutter/widgets/_bindings/flutter_Radius';
export interface BorderRadius extends upstream0.BorderRadiusGeometry, Readonly<{
    "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
}> {
    readonly __BorderRadius: unique symbol;
    readonly topLeft: upstream1.Radius;
    readonly topRight: upstream1.Radius;
    readonly bottomLeft: upstream1.Radius;
    readonly bottomRight: upstream1.Radius;
    copyWith(options?: {
        bottomLeft?: upstream1.Radius | null | undefined;
        bottomRight?: upstream1.Radius | null | undefined;
        topLeft?: upstream1.Radius | null | undefined;
        topRight?: upstream1.Radius | null | undefined;
    }): BorderRadius;
}
export declare namespace BorderRadius {
    function all(radius: upstream1.Radius): BorderRadius;
}
export declare namespace BorderRadius {
    function circular(radius: number): BorderRadius;
}
export declare namespace BorderRadius {
    function only(options?: {
        topLeft?: upstream1.Radius | undefined;
        topRight?: upstream1.Radius | undefined;
        bottomLeft?: upstream1.Radius | undefined;
        bottomRight?: upstream1.Radius | undefined;
    }): BorderRadius;
}
export declare namespace BorderRadius {
    const zero: BorderRadius;
}

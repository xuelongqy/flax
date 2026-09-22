import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_Radius';
import '@flax/flutter/widgets/_bindings/flutter_Radius';
export interface BorderRadiusDirectional extends upstream0.BorderRadiusGeometry, Readonly<{
    "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusDirectional": readonly [];
}> {
    readonly __BorderRadiusDirectional: unique symbol;
    readonly topStart: upstream1.Radius;
    readonly topEnd: upstream1.Radius;
    readonly bottomStart: upstream1.Radius;
    readonly bottomEnd: upstream1.Radius;
}
export declare namespace BorderRadiusDirectional {
    function all(radius: upstream1.Radius): BorderRadiusDirectional;
}
export declare namespace BorderRadiusDirectional {
    function circular(radius: number): BorderRadiusDirectional;
}
export declare namespace BorderRadiusDirectional {
    function only(options?: {
        topStart?: upstream1.Radius | undefined;
        topEnd?: upstream1.Radius | undefined;
        bottomStart?: upstream1.Radius | undefined;
        bottomEnd?: upstream1.Radius | undefined;
    }): BorderRadiusDirectional;
}
export declare namespace BorderRadiusDirectional {
    const zero: BorderRadiusDirectional;
}

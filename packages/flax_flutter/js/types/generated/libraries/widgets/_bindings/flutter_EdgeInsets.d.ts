import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
export interface EdgeInsets extends upstream0.EdgeInsetsGeometry, Readonly<{
    "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
}> {
    readonly __EdgeInsets: unique symbol;
    readonly left: number;
    readonly top: number;
    readonly right: number;
    readonly bottom: number;
}
export declare namespace EdgeInsets {
    function all(value: number): EdgeInsets;
}
export declare namespace EdgeInsets {
    function symmetric(options?: {
        vertical?: number | undefined;
        horizontal?: number | undefined;
    }): EdgeInsets;
}
export declare namespace EdgeInsets {
    function fromLTRB(left: number, top: number, right: number, bottom: number): EdgeInsets;
}
export declare namespace EdgeInsets {
    function only(options?: {
        left?: number | undefined;
        top?: number | undefined;
        right?: number | undefined;
        bottom?: number | undefined;
    }): EdgeInsets;
}
export declare namespace EdgeInsets {
    const zero: EdgeInsets;
}

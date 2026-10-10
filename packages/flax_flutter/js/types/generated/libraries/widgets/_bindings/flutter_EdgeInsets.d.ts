import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
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
declare namespace _EdgeInsetsFactory {
    function all(value: number): EdgeInsets;
}
declare namespace _EdgeInsetsFactory {
    function symmetric(options?: {
        vertical?: number | undefined;
        horizontal?: number | undefined;
    }): EdgeInsets;
}
declare namespace _EdgeInsetsFactory {
    function fromLTRB(left: number, top: number, right: number, bottom: number): EdgeInsets;
}
declare namespace _EdgeInsetsFactory {
    function only(options?: {
        left?: number | undefined;
        top?: number | undefined;
        right?: number | undefined;
        bottom?: number | undefined;
    }): EdgeInsets;
}
declare namespace _EdgeInsetsFactory {
    const zero: EdgeInsets;
}
export declare const EdgeInsets: typeof _EdgeInsetsFactory & _FlaxInstanceType<EdgeInsets>;
export {};

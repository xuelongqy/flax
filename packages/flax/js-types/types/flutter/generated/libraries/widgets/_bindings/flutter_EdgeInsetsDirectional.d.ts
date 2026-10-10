import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
export interface EdgeInsetsDirectional extends upstream0.EdgeInsetsGeometry, Readonly<{
    "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsDirectional": readonly [];
}> {
    readonly __EdgeInsetsDirectional: unique symbol;
    readonly start: number;
    readonly top: number;
    readonly end: number;
    readonly bottom: number;
}
declare namespace _EdgeInsetsDirectionalFactory {
    function fromSTEB(start: number, top: number, end: number, bottom: number): EdgeInsetsDirectional;
}
declare namespace _EdgeInsetsDirectionalFactory {
    function only(options?: {
        start?: number | undefined;
        top?: number | undefined;
        end?: number | undefined;
        bottom?: number | undefined;
    }): EdgeInsetsDirectional;
}
declare namespace _EdgeInsetsDirectionalFactory {
    function all(value: number): EdgeInsetsDirectional;
}
declare namespace _EdgeInsetsDirectionalFactory {
    function symmetric(options?: {
        horizontal?: number | undefined;
        vertical?: number | undefined;
    }): EdgeInsetsDirectional;
}
declare namespace _EdgeInsetsDirectionalFactory {
    const zero: EdgeInsetsDirectional;
}
export declare const EdgeInsetsDirectional: typeof _EdgeInsetsDirectionalFactory & _FlaxInstanceType<EdgeInsetsDirectional>;
export {};

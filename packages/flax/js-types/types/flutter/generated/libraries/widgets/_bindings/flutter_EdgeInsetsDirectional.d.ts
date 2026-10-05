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
export declare namespace EdgeInsetsDirectional {
    function fromSTEB(start: number, top: number, end: number, bottom: number): EdgeInsetsDirectional;
}
export declare namespace EdgeInsetsDirectional {
    function only(options?: {
        start?: number | undefined;
        top?: number | undefined;
        end?: number | undefined;
        bottom?: number | undefined;
    }): EdgeInsetsDirectional;
}
export declare namespace EdgeInsetsDirectional {
    function all(value: number): EdgeInsetsDirectional;
}
export declare namespace EdgeInsetsDirectional {
    function symmetric(options?: {
        horizontal?: number | undefined;
        vertical?: number | undefined;
    }): EdgeInsetsDirectional;
}
export declare namespace EdgeInsetsDirectional {
    const zero: EdgeInsetsDirectional;
}

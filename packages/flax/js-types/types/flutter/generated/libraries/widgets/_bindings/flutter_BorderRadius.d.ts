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
        bottomLeft?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | null | undefined;
        bottomRight?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | null | undefined;
        topLeft?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | null | undefined;
        topRight?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | null | undefined;
    }): BorderRadius;
}
export declare namespace BorderRadius {
    function all(radius: Readonly<{
        "__flaxBound:dart:ui::Radius": readonly [];
    }>): BorderRadius;
}
export declare namespace BorderRadius {
    function circular(radius: number): BorderRadius;
}
export declare namespace BorderRadius {
    function only(options?: {
        topLeft?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
        topRight?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
        bottomLeft?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
        bottomRight?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
    }): BorderRadius;
}
export declare namespace BorderRadius {
    const zero: BorderRadius;
}

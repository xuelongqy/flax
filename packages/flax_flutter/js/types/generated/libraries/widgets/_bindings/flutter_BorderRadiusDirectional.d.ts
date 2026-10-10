import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
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
declare namespace _BorderRadiusDirectionalFactory {
    function all(radius: Readonly<{
        "__flaxBound:dart:ui::Radius": readonly [];
    }>): BorderRadiusDirectional;
}
declare namespace _BorderRadiusDirectionalFactory {
    function circular(radius: number): BorderRadiusDirectional;
}
declare namespace _BorderRadiusDirectionalFactory {
    function only(options?: {
        topStart?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
        topEnd?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
        bottomStart?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
        bottomEnd?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
    }): BorderRadiusDirectional;
}
declare namespace _BorderRadiusDirectionalFactory {
    const zero: BorderRadiusDirectional;
}
export declare const BorderRadiusDirectional: typeof _BorderRadiusDirectionalFactory & _FlaxInstanceType<BorderRadiusDirectional>;
export {};

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_Radius';
import '@flax/flutter/widgets/_bindings/flutter_Radius';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BorderRadius';
import '@flax/flutter/widgets/_bindings/flutter_BorderRadius';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_TextDirection';
import '@flax/flutter/services/_bindings/flutter_TextDirection';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface BorderRadiusDirectional extends Omit<upstream0.BorderRadiusGeometry, typeof _flaxDartTypeValue | "topStart" | "topEnd" | "bottomStart" | "bottomEnd" | "subtract" | "add" | "resolve" | "toString" | "operatorMultiply" | "operatorDivide" | "operatorTruncateDivide" | "operatorModulo" | "operatorNegate" | "operatorAdd" | "operatorSubtract">, Readonly<{
    "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusDirectional": readonly [];
}> {
    readonly __BorderRadiusDirectional: unique symbol;
    readonly topStart: upstream1.Radius;
    readonly topEnd: upstream1.Radius;
    readonly bottomStart: upstream1.Radius;
    readonly bottomEnd: upstream1.Radius;
    subtract(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }>): upstream0.BorderRadiusGeometry;
    add(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }>): upstream0.BorderRadiusGeometry;
    resolve(direction: upstream3.TextDirection | null): upstream2.BorderRadius;
    toString(): string;
    operatorMultiply(other: number): BorderRadiusDirectional;
    operatorDivide(other: number): BorderRadiusDirectional;
    operatorTruncateDivide(other: number): BorderRadiusDirectional;
    operatorModulo(other: number): BorderRadiusDirectional;
    operatorNegate(): BorderRadiusDirectional;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusDirectional": readonly [];
    }>): BorderRadiusDirectional;
    operatorSubtract(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusDirectional": readonly [];
    }>): BorderRadiusDirectional;
}
export declare namespace _BorderRadiusDirectionalFactory {
    function all(radius: Readonly<{
        "__flaxBound:dart:ui::Radius": readonly [];
    }>): BorderRadiusDirectional;
}
export declare namespace _BorderRadiusDirectionalFactory {
    function circular(radius: number): BorderRadiusDirectional;
}
export declare namespace _BorderRadiusDirectionalFactory {
    function vertical(options?: {
        top?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
        bottom?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
    }): BorderRadiusDirectional;
}
export declare namespace _BorderRadiusDirectionalFactory {
    function horizontal(options?: {
        start?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
        end?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
    }): BorderRadiusDirectional;
}
export declare namespace _BorderRadiusDirectionalFactory {
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
export declare namespace _BorderRadiusDirectionalFactory {
    const zero: BorderRadiusDirectional;
}
export declare namespace _BorderRadiusDirectionalFactory {
    function lerp(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusDirectional": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusDirectional": readonly [];
    }> | null, t: number): BorderRadiusDirectional | null;
}
export declare const BorderRadiusDirectional: typeof _BorderRadiusDirectionalFactory & _FlaxInstanceType<BorderRadiusDirectional> & _FlaxDartType<BorderRadiusDirectional, readonly ["class", "flax.core/flutter#type:BorderRadiusDirectional", readonly [], false]>;

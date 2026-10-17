import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_Alignment';
import '@flax/flutter/widgets/_bindings/flutter_Alignment';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_TextDirection';
import '@flax/flutter/services/_bindings/flutter_TextDirection';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AlignmentDirectional extends Omit<upstream0.AlignmentGeometry, typeof _flaxDartTypeValue | "start" | "y" | "add" | "resolve" | "toString" | "operatorMultiply" | "operatorDivide" | "operatorTruncateDivide" | "operatorModulo" | "operatorNegate" | "operatorAdd" | "operatorSubtract">, Readonly<{
    "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentDirectional": readonly [];
}> {
    readonly __AlignmentDirectional: unique symbol;
    readonly start: number;
    readonly y: number;
    add(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }>): upstream0.AlignmentGeometry;
    resolve(direction: upstream2.TextDirection | null): upstream1.Alignment;
    toString(): string;
    operatorMultiply(other: number): AlignmentDirectional;
    operatorDivide(other: number): AlignmentDirectional;
    operatorTruncateDivide(other: number): AlignmentDirectional;
    operatorModulo(other: number): AlignmentDirectional;
    operatorNegate(): AlignmentDirectional;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentDirectional": readonly [];
    }>): AlignmentDirectional;
    operatorSubtract(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentDirectional": readonly [];
    }>): AlignmentDirectional;
}
export declare function _AlignmentDirectionalFactory(start: number, y: number): AlignmentDirectional;
export declare namespace _AlignmentDirectionalFactory {
    const topStart: AlignmentDirectional;
}
export declare namespace _AlignmentDirectionalFactory {
    const topCenter: AlignmentDirectional;
}
export declare namespace _AlignmentDirectionalFactory {
    const topEnd: AlignmentDirectional;
}
export declare namespace _AlignmentDirectionalFactory {
    const centerStart: AlignmentDirectional;
}
export declare namespace _AlignmentDirectionalFactory {
    const center: AlignmentDirectional;
}
export declare namespace _AlignmentDirectionalFactory {
    const centerEnd: AlignmentDirectional;
}
export declare namespace _AlignmentDirectionalFactory {
    const bottomStart: AlignmentDirectional;
}
export declare namespace _AlignmentDirectionalFactory {
    const bottomCenter: AlignmentDirectional;
}
export declare namespace _AlignmentDirectionalFactory {
    const bottomEnd: AlignmentDirectional;
}
export declare namespace _AlignmentDirectionalFactory {
    function lerp(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentDirectional": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentDirectional": readonly [];
    }> | null, t: number): AlignmentDirectional | null;
}
export declare const AlignmentDirectional: typeof _AlignmentDirectionalFactory & _FlaxInstanceType<AlignmentDirectional> & _FlaxDartType<AlignmentDirectional, readonly ["class", "flax.core/flutter#type:AlignmentDirectional", readonly [], false]>;

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_TextDirection';
import '@flax/flutter/services/_bindings/flutter_TextDirection';
import type * as upstream2 from '@flax/flutter/gestures/_bindings/flutter_Offset';
import '@flax/flutter/services/_bindings/flutter_Size';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Alignment extends Omit<upstream0.AlignmentGeometry, typeof _flaxDartTypeValue | "x" | "y" | "add" | "resolve" | "toString" | "alongOffset" | "alongSize" | "operatorMultiply" | "operatorDivide" | "operatorTruncateDivide" | "operatorModulo" | "operatorNegate" | "operatorAdd" | "operatorSubtract">, Readonly<{
    "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [];
}> {
    readonly __Alignment: unique symbol;
    readonly x: number;
    readonly y: number;
    add(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }>): upstream0.AlignmentGeometry;
    resolve(direction: upstream1.TextDirection | null): Alignment;
    toString(): string;
    alongOffset(other: upstream2.Offset): upstream2.Offset;
    alongSize(other: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }>): upstream2.Offset;
    operatorMultiply(other: number): Alignment;
    operatorDivide(other: number): Alignment;
    operatorTruncateDivide(other: number): Alignment;
    operatorModulo(other: number): Alignment;
    operatorNegate(): Alignment;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [];
    }>): Alignment;
    operatorSubtract(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [];
    }>): Alignment;
}
export declare function _AlignmentFactory(x: number, y: number): Alignment;
export declare namespace _AlignmentFactory {
    const topLeft: Alignment;
}
export declare namespace _AlignmentFactory {
    const topCenter: Alignment;
}
export declare namespace _AlignmentFactory {
    const topRight: Alignment;
}
export declare namespace _AlignmentFactory {
    const centerLeft: Alignment;
}
export declare namespace _AlignmentFactory {
    const center: Alignment;
}
export declare namespace _AlignmentFactory {
    const centerRight: Alignment;
}
export declare namespace _AlignmentFactory {
    const bottomLeft: Alignment;
}
export declare namespace _AlignmentFactory {
    const bottomCenter: Alignment;
}
export declare namespace _AlignmentFactory {
    const bottomRight: Alignment;
}
export declare namespace _AlignmentFactory {
    function lerp(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [];
    }> | null, t: number): Alignment | null;
}
export declare const Alignment: typeof _AlignmentFactory & _FlaxInstanceType<Alignment> & _FlaxDartType<Alignment, readonly ["class", "flax.core/flutter#type:Alignment", readonly [], false]>;

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_Alignment';
import '@flax/flutter/widgets/_bindings/flutter_Alignment';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_TextDirection';
import '@flax/flutter/services/_bindings/flutter_TextDirection';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AlignmentGeometry extends Readonly<{
    "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
}> {
    readonly __AlignmentGeometry: unique symbol;
    add(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }>): AlignmentGeometry;
    resolve(direction: upstream1.TextDirection | null): upstream0.Alignment;
    toString(): string;
    operatorMultiply(other: number): AlignmentGeometry;
    operatorDivide(other: number): AlignmentGeometry;
    operatorTruncateDivide(other: number): AlignmentGeometry;
    operatorModulo(other: number): AlignmentGeometry;
    operatorNegate(): AlignmentGeometry;
}
export declare namespace _AlignmentGeometryFactory {
    function xy(x: number, y: number): AlignmentGeometry;
}
export declare namespace _AlignmentGeometryFactory {
    function directional(start: number, y: number): AlignmentGeometry;
}
export declare namespace _AlignmentGeometryFactory {
    const topLeft: AlignmentGeometry;
}
export declare namespace _AlignmentGeometryFactory {
    const topCenter: AlignmentGeometry;
}
export declare namespace _AlignmentGeometryFactory {
    const topRight: AlignmentGeometry;
}
export declare namespace _AlignmentGeometryFactory {
    const topStart: AlignmentGeometry;
}
export declare namespace _AlignmentGeometryFactory {
    const topEnd: AlignmentGeometry;
}
export declare namespace _AlignmentGeometryFactory {
    const centerLeft: AlignmentGeometry;
}
export declare namespace _AlignmentGeometryFactory {
    const center: AlignmentGeometry;
}
export declare namespace _AlignmentGeometryFactory {
    const centerRight: AlignmentGeometry;
}
export declare namespace _AlignmentGeometryFactory {
    const centerStart: AlignmentGeometry;
}
export declare namespace _AlignmentGeometryFactory {
    const centerEnd: AlignmentGeometry;
}
export declare namespace _AlignmentGeometryFactory {
    const bottomLeft: AlignmentGeometry;
}
export declare namespace _AlignmentGeometryFactory {
    const bottomCenter: AlignmentGeometry;
}
export declare namespace _AlignmentGeometryFactory {
    const bottomRight: AlignmentGeometry;
}
export declare namespace _AlignmentGeometryFactory {
    const bottomStart: AlignmentGeometry;
}
export declare namespace _AlignmentGeometryFactory {
    const bottomEnd: AlignmentGeometry;
}
export declare namespace _AlignmentGeometryFactory {
    function lerp(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }> | null, t: number): AlignmentGeometry | null;
}
export declare const AlignmentGeometry: typeof _AlignmentGeometryFactory & _FlaxInstanceType<AlignmentGeometry> & _FlaxDartType<AlignmentGeometry, readonly ["class", "flax.core/flutter#type:AlignmentGeometry", readonly [], false]>;

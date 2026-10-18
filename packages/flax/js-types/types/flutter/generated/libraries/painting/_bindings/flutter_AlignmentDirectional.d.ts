import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_Alignment';
import '@flax/flutter/painting/_bindings/flutter_Alignment';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AlignmentDirectional extends Omit<upstream0.AlignmentGeometry, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentDirectional": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
}> {
    readonly __AlignmentDirectional: unique symbol;
    readonly [_flaxDartTypeValue]: AlignmentDirectional;
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
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }>): AlignmentDirectional;
    operatorSubtract(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentDirectional": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
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
    function lerp(a: (Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentDirectional": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentDirectional": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }>) | null, t: number): AlignmentDirectional | null;
}
export declare const AlignmentDirectional: typeof _AlignmentDirectionalFactory & _FlaxInstanceType<AlignmentDirectional> & _FlaxDartType<AlignmentDirectional, readonly ["class", "flax.core/flutter#type:AlignmentDirectional", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "start" | "y" | "add" | "resolve" | "toString" | "operatorMultiply" | "operatorDivide" | "operatorTruncateDivide" | "operatorModulo" | "operatorNegate" | "operatorAdd" | "operatorSubtract" | "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentDirectional" | "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry";
export {};

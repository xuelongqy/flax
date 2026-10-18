import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Alignment extends Omit<upstream0.AlignmentGeometry, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
}> {
    readonly __Alignment: unique symbol;
    readonly [_flaxDartTypeValue]: Alignment;
    readonly x: number;
    readonly y: number;
    add(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }>): upstream0.AlignmentGeometry;
    resolve(direction: upstream1.TextDirection | null): Alignment;
    toString(): string;
    alongOffset(other: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream2.Offset;
    alongSize(other: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream2.Offset;
    withinRect(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>): upstream2.Offset;
    inscribe(size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>): upstream4.Rect;
    operatorMultiply(other: number): Alignment;
    operatorDivide(other: number): Alignment;
    operatorTruncateDivide(other: number): Alignment;
    operatorModulo(other: number): Alignment;
    operatorNegate(): Alignment;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }>): Alignment;
    operatorSubtract(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
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
    function lerp(a: (Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }>) | null, t: number): Alignment | null;
}
export declare const Alignment: typeof _AlignmentFactory & _FlaxInstanceType<Alignment> & _FlaxDartType<Alignment, readonly ["class", "flax.core/flutter#type:Alignment", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "x" | "y" | "add" | "resolve" | "toString" | "alongOffset" | "alongSize" | "withinRect" | "inscribe" | "operatorMultiply" | "operatorDivide" | "operatorTruncateDivide" | "operatorModulo" | "operatorNegate" | "operatorAdd" | "operatorSubtract" | "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment" | "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry";
export {};

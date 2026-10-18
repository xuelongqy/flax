import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_Alignment';
import '@flax/flutter/painting/_bindings/flutter_Alignment';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FractionalOffset extends Omit<upstream0.Alignment, _flaxOwnMembers0>, Omit<upstream1.AlignmentGeometry, _flaxOwnMembers0 | keyof upstream0.Alignment>, Readonly<{
    "__flaxBound:package:flutter/src/painting/fractional_offset.dart::FractionalOffset": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
}> {
    readonly __FractionalOffset: unique symbol;
    readonly [_flaxDartTypeValue]: FractionalOffset;
    readonly x: number;
    readonly y: number;
    readonly dx: number;
    readonly dy: number;
    add(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }>): upstream1.AlignmentGeometry;
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
    resolve(direction: upstream5.TextDirection | null): upstream0.Alignment;
    toString(): string;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }>): upstream0.Alignment;
    operatorSubtract(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }>): upstream0.Alignment;
    operatorMultiply(other: number): FractionalOffset;
    operatorDivide(other: number): FractionalOffset;
    operatorTruncateDivide(other: number): FractionalOffset;
    operatorModulo(other: number): FractionalOffset;
    operatorNegate(): FractionalOffset;
}
export declare function _FractionalOffsetFactory(dx: number, dy: number): FractionalOffset;
export declare namespace _FractionalOffsetFactory {
    function fromOffsetAndSize(offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): FractionalOffset;
}
export declare namespace _FractionalOffsetFactory {
    function fromOffsetAndRect(offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>): FractionalOffset;
}
export declare namespace _FractionalOffsetFactory {
    const topLeft: FractionalOffset;
}
export declare namespace _FractionalOffsetFactory {
    const topCenter: FractionalOffset;
}
export declare namespace _FractionalOffsetFactory {
    const topRight: FractionalOffset;
}
export declare namespace _FractionalOffsetFactory {
    const centerLeft: FractionalOffset;
}
export declare namespace _FractionalOffsetFactory {
    const center: FractionalOffset;
}
export declare namespace _FractionalOffsetFactory {
    const centerRight: FractionalOffset;
}
export declare namespace _FractionalOffsetFactory {
    const bottomLeft: FractionalOffset;
}
export declare namespace _FractionalOffsetFactory {
    const bottomCenter: FractionalOffset;
}
export declare namespace _FractionalOffsetFactory {
    const bottomRight: FractionalOffset;
}
export declare namespace _FractionalOffsetFactory {
    function lerp(a: (Readonly<{
        "__flaxBound:package:flutter/src/painting/fractional_offset.dart::FractionalOffset": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:package:flutter/src/painting/fractional_offset.dart::FractionalOffset": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }>) | null, t: number): FractionalOffset | null;
}
export declare const FractionalOffset: typeof _FractionalOffsetFactory & _FlaxInstanceType<FractionalOffset> & _FlaxDartType<FractionalOffset, readonly ["class", "flax.core/sdk_painting#type:FractionalOffset", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "x" | "y" | "dx" | "dy" | "add" | "alongOffset" | "alongSize" | "withinRect" | "inscribe" | "resolve" | "toString" | "operatorAdd" | "operatorSubtract" | "operatorMultiply" | "operatorDivide" | "operatorTruncateDivide" | "operatorModulo" | "operatorNegate" | "__flaxBound:package:flutter/src/painting/fractional_offset.dart::FractionalOffset" | "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment" | "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry";
export {};

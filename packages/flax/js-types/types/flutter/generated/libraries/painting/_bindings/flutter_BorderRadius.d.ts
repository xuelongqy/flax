import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_BorderRadiusGeometry';
import '@flax/flutter/painting/_bindings/flutter_BorderRadiusGeometry';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Radius';
import '@flax/dart/ui/_bindings/flutter_Radius';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_RRect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_RRect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_RSuperellipse';
import '@flax/dart/ui/_bindings/sdk_dart_ui_RSuperellipse';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface BorderRadius extends Omit<upstream0.BorderRadiusGeometry, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
}> {
    readonly __BorderRadius: unique symbol;
    readonly [_flaxDartTypeValue]: BorderRadius;
    readonly topLeft: upstream1.Radius;
    readonly topRight: upstream1.Radius;
    readonly bottomLeft: upstream1.Radius;
    readonly bottomRight: upstream1.Radius;
    subtract(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }>): upstream0.BorderRadiusGeometry;
    add(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }>): upstream0.BorderRadiusGeometry;
    resolve(direction: upstream2.TextDirection | null): BorderRadius;
    toString(): string;
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
    toRRect(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>): upstream3.RRect;
    toRSuperellipse(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>): upstream5.RSuperellipse;
    operatorMultiply(other: number): BorderRadius;
    operatorDivide(other: number): BorderRadius;
    operatorTruncateDivide(other: number): BorderRadius;
    operatorModulo(other: number): BorderRadius;
    operatorNegate(): BorderRadius;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }>): BorderRadius;
    operatorSubtract(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }>): BorderRadius;
}
export declare namespace _BorderRadiusFactory {
    function all(radius: Readonly<{
        "__flaxBound:dart:ui::Radius": readonly [];
    }>): BorderRadius;
}
export declare namespace _BorderRadiusFactory {
    function circular(radius: number): BorderRadius;
}
export declare namespace _BorderRadiusFactory {
    function vertical(options?: {
        top?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
        bottom?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
    }): BorderRadius;
}
export declare namespace _BorderRadiusFactory {
    function horizontal(options?: {
        left?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
        right?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
    }): BorderRadius;
}
export declare namespace _BorderRadiusFactory {
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
export declare namespace _BorderRadiusFactory {
    const zero: BorderRadius;
}
export declare namespace _BorderRadiusFactory {
    function lerp(a: (Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }>) | null, t: number): BorderRadius | null;
}
export declare const BorderRadius: typeof _BorderRadiusFactory & _FlaxInstanceType<BorderRadius> & _FlaxDartType<BorderRadius, readonly ["class", "flax.core/flutter#type:BorderRadius", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "subtract" | "add" | "resolve" | "toString" | "copyWith" | "toRRect" | "toRSuperellipse" | "operatorMultiply" | "operatorDivide" | "operatorTruncateDivide" | "operatorModulo" | "operatorNegate" | "operatorAdd" | "operatorSubtract" | "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius" | "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry";
export {};

import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Shadow';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Shadow';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_BlurStyle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_BlurStyle';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface BoxShadow extends Omit<upstream0.Shadow, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [];
}>, Readonly<{
    "__flaxBound:dart:ui::Shadow": readonly [];
}> {
    readonly __BoxShadow: unique symbol;
    readonly [_flaxDartTypeValue]: BoxShadow;
}
export interface BoxShadow {
    readonly [_flaxDartTypeValue]: BoxShadow;
    toPaint(): upstream4.Paint;
    scale(factor: number): BoxShadow;
    toString(): string;
    copyWith(options?: {
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        offset?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        blurRadius?: number | null | undefined;
        spreadRadius?: number | null | undefined;
        blurStyle?: upstream3.BlurStyle | null | undefined;
    }): BoxShadow;
    get spreadRadius(): number;
    get blurStyle(): upstream3.BlurStyle;
    get color(): upstream1.Color;
    get offset(): upstream2.Offset;
    get blurRadius(): number;
    get blurSigma(): number;
}
export declare abstract class BoxShadow extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BoxShadow>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: BoxShadow;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:BoxShadow", readonly [], false];
    constructor(options?: {
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        offset?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | undefined;
        blurRadius?: number | undefined;
        spreadRadius?: number | undefined;
        blurStyle?: upstream3.BlurStyle | undefined;
    });
}
export declare namespace BoxShadow {
    function implement(args: [options?: {
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        offset?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | undefined;
        blurRadius?: number | undefined;
        spreadRadius?: number | undefined;
        blurStyle?: upstream3.BlurStyle | undefined;
    }], implementation: {}): BoxShadow;
}
export declare namespace BoxShadow {
    function lerp(a: (Readonly<{
        "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::Shadow": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::Shadow": readonly [];
    }>) | null, t: number): BoxShadow | null;
}
export declare namespace BoxShadow {
    function lerpList(a: DartListInput<BoxShadow, Readonly<{
        "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::Shadow": readonly [];
    }>> | null, b: DartListInput<BoxShadow, Readonly<{
        "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::Shadow": readonly [];
    }>> | null, t: number): DartList<BoxShadow> | null;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "color" | "offset" | "blurRadius" | "blurSigma" | "spreadRadius" | "blurStyle" | "toPaint" | "scale" | "toString" | "copyWith" | "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow" | "__flaxBound:dart:ui::Shadow";
export {};

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
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface BoxShadow extends Omit<upstream0.Shadow, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [];
}>, Readonly<{
    "__flaxBound:dart:ui::Shadow": readonly [];
}> {
    readonly __BoxShadow: unique symbol;
    readonly [_flaxDartTypeValue]: BoxShadow;
    readonly color: upstream1.Color;
    readonly offset: upstream2.Offset;
    readonly blurRadius: number;
    readonly blurSigma: number;
    readonly spreadRadius: number;
    readonly blurStyle: upstream3.BlurStyle;
    toPaint(): upstream4.Paint;
    scale(factor: number): BoxShadow;
    toString(): string;
    copyWith(options?: {
        blurRadius?: number | null | undefined;
        blurStyle?: upstream3.BlurStyle | null | undefined;
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        offset?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        spreadRadius?: number | null | undefined;
    }): BoxShadow;
}
export declare function _BoxShadowFactory(options?: {
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
}): BoxShadow;
export interface _BoxShadowNative extends BoxShadow {
    readonly [_flaxDartTypeValue]: _BoxShadowNative;
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
export declare abstract class _BoxShadowNative extends _FlaxProxyBase {
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
export declare namespace _BoxShadowFactory {
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
declare const _BoxShadowBinding: typeof _BoxShadowFactory & (new (options?: {
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
}) => _BoxShadowNative);
export declare namespace _BoxShadowFactory {
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
export declare namespace _BoxShadowFactory {
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
export declare const BoxShadow: typeof _BoxShadowBinding & _FlaxInstanceType<BoxShadow> & _FlaxDartType<BoxShadow, readonly ["class", "flax.core/sdk_painting#type:BoxShadow", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "color" | "offset" | "blurRadius" | "blurSigma" | "spreadRadius" | "blurStyle" | "toPaint" | "scale" | "toString" | "copyWith" | "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow" | "__flaxBound:dart:ui::Shadow";
export {};

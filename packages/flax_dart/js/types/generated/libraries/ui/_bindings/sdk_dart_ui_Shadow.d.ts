import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Shadow extends Readonly<{
    "__flaxBound:dart:ui::Shadow": readonly [];
}> {
    readonly __Shadow: unique symbol;
    readonly [_flaxDartTypeValue]: Shadow;
    readonly color: upstream0.Color;
    readonly offset: upstream1.Offset;
    readonly blurRadius: number;
    readonly blurSigma: number;
    toPaint(): upstream2.Paint;
    scale(factor: number): Shadow;
    toString(): string;
}
export declare function _ShadowFactory(options?: {
    color?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | undefined;
    offset?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | undefined;
    blurRadius?: number | undefined;
}): Shadow;
export interface _ShadowNative extends Shadow {
    readonly [_flaxDartTypeValue]: _ShadowNative;
    toPaint(): upstream2.Paint;
    scale(factor: number): Shadow;
    toString(): string;
    get color(): upstream0.Color;
    get offset(): upstream1.Offset;
    get blurRadius(): number;
    get blurSigma(): number;
}
export declare abstract class _ShadowNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Shadow>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Shadow;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:Shadow", readonly [], false];
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
    });
}
export declare namespace _ShadowFactory {
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
    }], implementation: {}): Shadow;
}
declare const _ShadowBinding: typeof _ShadowFactory & (new (options?: {
    color?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | undefined;
    offset?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | undefined;
    blurRadius?: number | undefined;
}) => _ShadowNative);
export declare namespace _ShadowFactory {
    function convertRadiusToSigma(radius: number): number;
}
export declare namespace _ShadowFactory {
    function lerp(a: Readonly<{
        "__flaxBound:dart:ui::Shadow": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:dart:ui::Shadow": readonly [];
    }> | null, t: number): Shadow | null;
}
export declare namespace _ShadowFactory {
    function lerpList(a: DartListInput<Shadow, Readonly<{
        "__flaxBound:dart:ui::Shadow": readonly [];
    }>> | null, b: DartListInput<Shadow, Readonly<{
        "__flaxBound:dart:ui::Shadow": readonly [];
    }>> | null, t: number): DartList<Shadow> | null;
}
export declare const Shadow: typeof _ShadowBinding & _FlaxInstanceType<Shadow> & _FlaxDartType<Shadow, readonly ["class", "flax.core/sdk_dart_ui#type:Shadow", readonly [], false]>;
export {};

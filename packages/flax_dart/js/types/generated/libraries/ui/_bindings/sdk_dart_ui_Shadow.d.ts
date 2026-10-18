import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface Shadow extends Readonly<{
    "__flaxBound:dart:ui::Shadow": readonly [];
}> {
    readonly __Shadow: unique symbol;
    readonly [_flaxDartTypeValue]: Shadow;
}
export interface Shadow {
    readonly [_flaxDartTypeValue]: Shadow;
    toPaint(): upstream2.Paint;
    scale(factor: number): Shadow;
    toString(): string;
    get color(): upstream0.Color;
    get offset(): upstream1.Offset;
    get blurRadius(): number;
    get blurSigma(): number;
}
export declare abstract class Shadow extends _FlaxProxyBase {
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
export declare namespace Shadow {
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
export declare namespace Shadow {
    function convertRadiusToSigma(radius: number): number;
}
export declare namespace Shadow {
    function lerp(a: Readonly<{
        "__flaxBound:dart:ui::Shadow": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:dart:ui::Shadow": readonly [];
    }> | null, t: number): Shadow | null;
}
export declare namespace Shadow {
    function lerpList(a: DartListInput<Shadow, Readonly<{
        "__flaxBound:dart:ui::Shadow": readonly [];
    }>> | null, b: DartListInput<Shadow, Readonly<{
        "__flaxBound:dart:ui::Shadow": readonly [];
    }>> | null, t: number): DartList<Shadow> | null;
}

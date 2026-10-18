import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface Tangent extends Readonly<{
    "__flaxBound:dart:ui::Tangent": readonly [];
}> {
    readonly __Tangent: unique symbol;
    readonly [_flaxDartTypeValue]: Tangent;
}
export interface Tangent {
    readonly [_flaxDartTypeValue]: Tangent;
    get position(): upstream0.Offset;
    get vector(): upstream0.Offset;
    get angle(): number;
}
export declare abstract class Tangent extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Tangent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Tangent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:Tangent", readonly [], false];
    constructor(position: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, vector: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>);
}
export declare namespace Tangent {
    function implement(args: [position: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, vector: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>], implementation: {}): Tangent;
}

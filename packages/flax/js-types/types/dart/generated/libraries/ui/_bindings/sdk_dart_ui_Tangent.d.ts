import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Tangent extends Readonly<{
    "__flaxBound:dart:ui::Tangent": readonly [];
}> {
    readonly __Tangent: unique symbol;
    readonly [_flaxDartTypeValue]: Tangent;
    readonly position: upstream0.Offset;
    readonly vector: upstream0.Offset;
    readonly angle: number;
}
export declare function _TangentFactory(position: Readonly<{
    "__flaxBound:dart:ui::Offset": readonly [];
}> & Readonly<{
    "__flaxBound:dart:ui::OffsetBase": readonly [];
}>, vector: Readonly<{
    "__flaxBound:dart:ui::Offset": readonly [];
}> & Readonly<{
    "__flaxBound:dart:ui::OffsetBase": readonly [];
}>): Tangent;
export declare namespace _TangentFactory {
    function fromAngle(position: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, angle: number): Tangent;
}
export interface _TangentNative extends Tangent {
    readonly [_flaxDartTypeValue]: _TangentNative;
    get position(): upstream0.Offset;
    get vector(): upstream0.Offset;
    get angle(): number;
}
export declare abstract class _TangentNative extends _FlaxProxyBase {
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
export declare namespace _TangentFactory {
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
declare const _TangentBinding: typeof _TangentFactory & (new (position: Readonly<{
    "__flaxBound:dart:ui::Offset": readonly [];
}> & Readonly<{
    "__flaxBound:dart:ui::OffsetBase": readonly [];
}>, vector: Readonly<{
    "__flaxBound:dart:ui::Offset": readonly [];
}> & Readonly<{
    "__flaxBound:dart:ui::OffsetBase": readonly [];
}>) => _TangentNative);
export declare const Tangent: typeof _TangentBinding & _FlaxInstanceType<Tangent> & _FlaxDartType<Tangent, readonly ["class", "flax.core/sdk_dart_ui#type:Tangent", readonly [], false]>;
export {};

import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_VertexMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_VertexMode';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface Vertices extends Readonly<{
    "__flaxBound:dart:ui::Vertices": readonly [];
}> {
    readonly __Vertices: unique symbol;
    readonly [_flaxDartTypeValue]: Vertices;
}
export interface Vertices {
    readonly [_flaxDartTypeValue]: Vertices;
    dispose(): void;
    get debugDisposed(): boolean;
}
export declare abstract class Vertices extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Vertices>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Vertices;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:Vertices", readonly [], false];
    constructor(mode: upstream0.VertexMode, positions: DartListInput<upstream1.Offset, Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>>, options?: {
        colors?: DartListInput<upstream2.Color, Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>> | null | undefined;
        textureCoordinates?: DartListInput<upstream1.Offset, Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>> | null | undefined;
        indices?: DartListInput<number, number> | null | undefined;
    });
}
export declare namespace Vertices {
    function implement(args: [mode: upstream0.VertexMode, positions: DartListInput<upstream1.Offset, Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>>, options?: {
        colors?: DartListInput<upstream2.Color, Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>> | null | undefined;
        textureCoordinates?: DartListInput<upstream1.Offset, Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>> | null | undefined;
        indices?: DartListInput<number, number> | null | undefined;
    }], implementation: {}): Vertices;
}

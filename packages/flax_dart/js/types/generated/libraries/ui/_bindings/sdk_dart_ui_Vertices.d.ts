import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_VertexMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_VertexMode';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Vertices extends Readonly<{
    "__flaxBound:dart:ui::Vertices": readonly [];
}> {
    readonly __Vertices: unique symbol;
    readonly [_flaxDartTypeValue]: Vertices;
    readonly debugDisposed: boolean;
    dispose(): void;
}
export declare function _VerticesFactory(mode: upstream0.VertexMode, positions: DartListInput<upstream1.Offset, Readonly<{
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
}): Vertices;
export declare namespace _VerticesFactory {
    function raw(mode: upstream0.VertexMode, positions: globalThis.Float32Array, options?: {
        colors?: globalThis.Int32Array | null | undefined;
        textureCoordinates?: globalThis.Float32Array | null | undefined;
        indices?: globalThis.Uint16Array | null | undefined;
    }): Vertices;
}
export interface _VerticesNative extends Vertices {
    readonly [_flaxDartTypeValue]: _VerticesNative;
    readonly [_flaxDartConstructors]?: {
        "": (mode: upstream0.VertexMode, positions: DartListInput<upstream1.Offset, Readonly<{
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
        }) => void;
        "raw": (mode: upstream0.VertexMode, positions: globalThis.Float32Array, options?: {
            colors?: globalThis.Int32Array | null | undefined;
            textureCoordinates?: globalThis.Float32Array | null | undefined;
            indices?: globalThis.Uint16Array | null | undefined;
        }) => void;
    };
    dispose(): void;
    get debugDisposed(): boolean;
}
export declare abstract class _VerticesNative extends _FlaxProxyBase {
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
    constructor(call: _FlaxProxySuper<_VerticesNative>);
}
export declare namespace _VerticesFactory {
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
declare const _VerticesBinding: typeof _VerticesFactory & (new (mode: upstream0.VertexMode, positions: DartListInput<upstream1.Offset, Readonly<{
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
}) => _VerticesNative) & (new (call: _FlaxProxySuper<_VerticesNative>) => _VerticesNative);
export declare const Vertices: typeof _VerticesBinding & _FlaxInstanceType<Vertices> & _FlaxDartType<Vertices, readonly ["class", "flax.core/sdk_dart_ui#type:Vertices", readonly [], false]>;
export {};

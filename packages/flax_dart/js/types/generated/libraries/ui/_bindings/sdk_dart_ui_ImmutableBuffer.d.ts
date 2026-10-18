import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ImmutableBuffer extends Readonly<{
    "__flaxBound:dart:ui::ImmutableBuffer": readonly [];
}> {
    readonly __ImmutableBuffer: unique symbol;
    readonly [_flaxDartTypeValue]: ImmutableBuffer;
    readonly length: number;
    readonly debugDisposed: boolean;
    dispose(): void;
}
export declare namespace _ImmutableBufferFactory {
    function fromUint8List(list: globalThis.Uint8Array): Promise<ImmutableBuffer>;
}
export declare namespace _ImmutableBufferFactory {
    function fromAsset(assetKey: string): Promise<ImmutableBuffer>;
}
export declare namespace _ImmutableBufferFactory {
    function fromFilePath(path: string): Promise<ImmutableBuffer>;
}
export declare const ImmutableBuffer: typeof _ImmutableBufferFactory & _FlaxInstanceType<ImmutableBuffer> & _FlaxDartType<ImmutableBuffer, readonly ["class", "flax.core/sdk_dart_ui#type:ImmutableBuffer", readonly [], false]>;

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_FrameInfo';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FrameInfo';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Codec extends Readonly<{
    "__flaxBound:dart:ui::Codec": readonly [];
}> {
    readonly __Codec: unique symbol;
    readonly [_flaxDartTypeValue]: Codec;
    readonly frameCount: number;
    readonly repetitionCount: number;
    getNextFrame(): Promise<upstream0.FrameInfo>;
    dispose(): void;
}
export declare namespace _CodecFactory {
    function implement(args: [], implementation: {
        getNextFrame: (() => Promise<Readonly<{
            "__flaxBound:dart:ui::FrameInfo": readonly [];
        }>>);
        dispose: (() => void);
        get frameCount(): number;
        get repetitionCount(): number;
    }): Codec;
}
export declare const Codec: typeof _CodecFactory & _FlaxInstanceType<Codec> & _FlaxDartType<Codec, readonly ["class", "flax.core/sdk_dart_ui#type:Codec", readonly [], false]>;

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_FragmentShader';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FragmentShader';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FragmentProgram extends Readonly<{
    "__flaxBound:dart:ui::FragmentProgram": readonly [];
}> {
    readonly __FragmentProgram: unique symbol;
    readonly [_flaxDartTypeValue]: FragmentProgram;
    fragmentShader(): upstream0.FragmentShader;
}
export declare namespace _FragmentProgramFactory {
    function fromAsset(assetKey: string): Promise<FragmentProgram>;
}
export declare const FragmentProgram: typeof _FragmentProgramFactory & _FlaxInstanceType<FragmentProgram> & _FlaxDartType<FragmentProgram, readonly ["class", "flax.core/sdk_dart_ui#type:FragmentProgram", readonly [], false]>;

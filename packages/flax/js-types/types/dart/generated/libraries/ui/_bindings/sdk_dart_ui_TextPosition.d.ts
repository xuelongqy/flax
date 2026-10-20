import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_TextAffinity';
import '@flax/dart/ui/_bindings/flutter_TextAffinity';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextPosition extends Readonly<{
    "__flaxBound:dart:ui::TextPosition": readonly [];
}> {
    readonly __TextPosition: unique symbol;
    readonly [_flaxDartTypeValue]: TextPosition;
    readonly offset: number;
    readonly affinity: upstream0.TextAffinity;
    toString(): string;
}
export declare function _TextPositionFactory(options: {
    offset: number;
    affinity?: upstream0.TextAffinity | undefined;
}): TextPosition;
export interface _TextPositionNative extends TextPosition {
    readonly [_flaxDartTypeValue]: _TextPositionNative;
    toString(): string;
    get offset(): number;
    get affinity(): upstream0.TextAffinity;
}
export declare abstract class _TextPositionNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextPosition>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TextPosition;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:TextPosition", readonly [], false];
    constructor(options: {
        offset: number;
        affinity?: upstream0.TextAffinity | undefined;
    });
}
export declare namespace _TextPositionFactory {
    function implement(args: [options: {
        offset: number;
        affinity?: upstream0.TextAffinity | undefined;
    }], implementation: {}): TextPosition;
}
declare const _TextPositionBinding: typeof _TextPositionFactory & (new (options: {
    offset: number;
    affinity?: upstream0.TextAffinity | undefined;
}) => _TextPositionNative);
export declare const TextPosition: typeof _TextPositionBinding & _FlaxInstanceType<TextPosition> & _FlaxDartType<TextPosition, readonly ["class", "flax.core/sdk_dart_ui#type:TextPosition", readonly [], false]>;
export {};

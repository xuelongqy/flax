import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ParagraphConstraints extends Readonly<{
    "__flaxBound:dart:ui::ParagraphConstraints": readonly [];
}> {
    readonly __ParagraphConstraints: unique symbol;
    readonly [_flaxDartTypeValue]: ParagraphConstraints;
    readonly width: number;
    toString(): string;
}
export declare function _ParagraphConstraintsFactory(options: {
    width: number;
}): ParagraphConstraints;
export interface _ParagraphConstraintsNative extends ParagraphConstraints {
    readonly [_flaxDartTypeValue]: _ParagraphConstraintsNative;
    toString(): string;
    get width(): number;
}
export declare abstract class _ParagraphConstraintsNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ParagraphConstraints>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ParagraphConstraints;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:ParagraphConstraints", readonly [], false];
    constructor(options: {
        width: number;
    });
}
export declare namespace _ParagraphConstraintsFactory {
    function implement(args: [options: {
        width: number;
    }], implementation: {}): ParagraphConstraints;
}
declare const _ParagraphConstraintsBinding: typeof _ParagraphConstraintsFactory & (new (options: {
    width: number;
}) => _ParagraphConstraintsNative);
export declare const ParagraphConstraints: typeof _ParagraphConstraintsBinding & _FlaxInstanceType<ParagraphConstraints> & _FlaxDartType<ParagraphConstraints, readonly ["class", "flax.core/sdk_dart_ui#type:ParagraphConstraints", readonly [], false]>;
export {};

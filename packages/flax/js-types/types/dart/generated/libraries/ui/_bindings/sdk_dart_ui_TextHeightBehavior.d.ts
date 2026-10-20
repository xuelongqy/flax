import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextLeadingDistribution';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextLeadingDistribution';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextHeightBehavior extends Readonly<{
    "__flaxBound:dart:ui::TextHeightBehavior": readonly [];
}> {
    readonly __TextHeightBehavior: unique symbol;
    readonly [_flaxDartTypeValue]: TextHeightBehavior;
    readonly applyHeightToFirstAscent: boolean;
    readonly applyHeightToLastDescent: boolean;
    readonly leadingDistribution: upstream0.TextLeadingDistribution;
    toString(): string;
}
export declare function _TextHeightBehaviorFactory(options?: {
    applyHeightToFirstAscent?: boolean | undefined;
    applyHeightToLastDescent?: boolean | undefined;
    leadingDistribution?: upstream0.TextLeadingDistribution | undefined;
}): TextHeightBehavior;
export interface _TextHeightBehaviorNative extends TextHeightBehavior {
    readonly [_flaxDartTypeValue]: _TextHeightBehaviorNative;
    toString(): string;
    get applyHeightToFirstAscent(): boolean;
    get applyHeightToLastDescent(): boolean;
    get leadingDistribution(): upstream0.TextLeadingDistribution;
}
export declare abstract class _TextHeightBehaviorNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextHeightBehavior>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TextHeightBehavior;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:TextHeightBehavior", readonly [], false];
    constructor(options?: {
        applyHeightToFirstAscent?: boolean | undefined;
        applyHeightToLastDescent?: boolean | undefined;
        leadingDistribution?: upstream0.TextLeadingDistribution | undefined;
    });
}
export declare namespace _TextHeightBehaviorFactory {
    function implement(args: [options?: {
        applyHeightToFirstAscent?: boolean | undefined;
        applyHeightToLastDescent?: boolean | undefined;
        leadingDistribution?: upstream0.TextLeadingDistribution | undefined;
    }], implementation: {}): TextHeightBehavior;
}
declare const _TextHeightBehaviorBinding: typeof _TextHeightBehaviorFactory & (new (options?: {
    applyHeightToFirstAscent?: boolean | undefined;
    applyHeightToLastDescent?: boolean | undefined;
    leadingDistribution?: upstream0.TextLeadingDistribution | undefined;
}) => _TextHeightBehaviorNative);
export declare const TextHeightBehavior: typeof _TextHeightBehaviorBinding & _FlaxInstanceType<TextHeightBehavior> & _FlaxDartType<TextHeightBehavior, readonly ["class", "flax.core/sdk_dart_ui#type:TextHeightBehavior", readonly [], false]>;
export {};

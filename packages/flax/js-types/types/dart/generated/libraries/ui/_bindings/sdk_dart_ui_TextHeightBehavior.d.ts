import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextLeadingDistribution';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextLeadingDistribution';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface TextHeightBehavior extends Readonly<{
    "__flaxBound:dart:ui::TextHeightBehavior": readonly [];
}> {
    readonly __TextHeightBehavior: unique symbol;
    readonly [_flaxDartTypeValue]: TextHeightBehavior;
}
export interface TextHeightBehavior {
    readonly [_flaxDartTypeValue]: TextHeightBehavior;
    toString(): string;
    get applyHeightToFirstAscent(): boolean;
    get applyHeightToLastDescent(): boolean;
    get leadingDistribution(): upstream0.TextLeadingDistribution;
}
export declare abstract class TextHeightBehavior extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextHeightBehavior>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TextHeightBehavior;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:TextHeightBehavior", readonly [], false];
    constructor(options?: {
        applyHeightToFirstAscent?: boolean | undefined;
        applyHeightToLastDescent?: boolean | undefined;
        leadingDistribution?: upstream0.TextLeadingDistribution | undefined;
    });
}
export declare namespace TextHeightBehavior {
    function implement(args: [options?: {
        applyHeightToFirstAscent?: boolean | undefined;
        applyHeightToLastDescent?: boolean | undefined;
        leadingDistribution?: upstream0.TextLeadingDistribution | undefined;
    }], implementation: {}): TextHeightBehavior;
}

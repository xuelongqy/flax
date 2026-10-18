import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SemanticsLabelBuilder extends Readonly<{
    "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsLabelBuilder": readonly [];
}> {
    readonly __SemanticsLabelBuilder: unique symbol;
    readonly [_flaxDartTypeValue]: SemanticsLabelBuilder;
    readonly separator: string;
    readonly textDirection: upstream0.TextDirection | null;
    readonly isEmpty: boolean;
    readonly length: number;
    addPart(label: string, options?: {
        textDirection?: upstream0.TextDirection | null | undefined;
    }): void;
    build(): string;
    clear(): void;
}
export declare function _SemanticsLabelBuilderFactory(options?: {
    separator?: string | undefined;
    textDirection?: upstream0.TextDirection | null | undefined;
}): SemanticsLabelBuilder;
export declare const SemanticsLabelBuilder: typeof _SemanticsLabelBuilderFactory & _FlaxInstanceType<SemanticsLabelBuilder> & _FlaxDartType<SemanticsLabelBuilder, readonly ["class", "flax.core/sdk_semantics#type:SemanticsLabelBuilder", readonly [], false]>;

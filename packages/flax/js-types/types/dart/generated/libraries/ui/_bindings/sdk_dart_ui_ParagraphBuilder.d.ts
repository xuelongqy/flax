import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ParagraphStyle';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextStyle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextStyle';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_PlaceholderAlignment';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PlaceholderAlignment';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_TextBaseline';
import '@flax/dart/ui/_bindings/flutter_TextBaseline';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Paragraph';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paragraph';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ParagraphBuilder extends Readonly<{
    "__flaxBound:dart:ui::ParagraphBuilder": readonly [];
}> {
    readonly __ParagraphBuilder: unique symbol;
    readonly [_flaxDartTypeValue]: ParagraphBuilder;
    readonly placeholderCount: number;
    readonly placeholderScales: DartList<number>;
    pushStyle(style: Readonly<{
        "__flaxBound:dart:ui::TextStyle": readonly [];
    }>): void;
    pop(): void;
    addText(text: string): void;
    addPlaceholder(width: number, height: number, alignment: upstream2.PlaceholderAlignment, options?: {
        baseline?: upstream3.TextBaseline | null | undefined;
        baselineOffset?: number | null | undefined;
        scale?: number | undefined;
    }): void;
    build(): upstream4.Paragraph;
}
export declare function _ParagraphBuilderFactory(style: Readonly<{
    "__flaxBound:dart:ui::ParagraphStyle": readonly [];
}>): ParagraphBuilder;
export declare namespace _ParagraphBuilderFactory {
    function implement(args: [], implementation: {
        pushStyle: ((style: upstream1.TextStyle) => void);
        pop: (() => void);
        addText: ((text: string) => void);
        addPlaceholder: ((width: number, height: number, alignment: upstream2.PlaceholderAlignment, options?: {
            scale?: number | undefined;
            baselineOffset?: number | null | undefined;
            baseline?: upstream3.TextBaseline | null | undefined;
        }) => void);
        build: (() => Readonly<{
            "__flaxBound:dart:ui::Paragraph": readonly [];
        }>);
        get placeholderCount(): number;
        get placeholderScales(): DartListInput<number, number>;
    }): ParagraphBuilder;
}
export declare const ParagraphBuilder: typeof _ParagraphBuilderFactory & _FlaxInstanceType<ParagraphBuilder> & _FlaxDartType<ParagraphBuilder, readonly ["class", "flax.core/sdk_dart_ui#type:ParagraphBuilder", readonly [], false]>;

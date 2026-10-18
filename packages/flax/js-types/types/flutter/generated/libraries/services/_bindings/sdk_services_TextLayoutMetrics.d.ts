import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_TextSelection';
import '@flax/flutter/services/_bindings/flutter_TextSelection';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextLayoutMetrics extends Readonly<{
    "__flaxBound:package:flutter/src/services/text_layout_metrics.dart::TextLayoutMetrics": readonly [];
}> {
    readonly __TextLayoutMetrics: unique symbol;
    readonly [_flaxDartTypeValue]: TextLayoutMetrics;
    getLineAtOffset(position: Readonly<{
        "__flaxBound:dart:ui::TextPosition": readonly [];
    }>): upstream0.TextSelection;
    getWordBoundary(position: Readonly<{
        "__flaxBound:dart:ui::TextPosition": readonly [];
    }>): upstream2.TextRange;
    getTextPositionAbove(position: Readonly<{
        "__flaxBound:dart:ui::TextPosition": readonly [];
    }>): upstream1.TextPosition;
    getTextPositionBelow(position: Readonly<{
        "__flaxBound:dart:ui::TextPosition": readonly [];
    }>): upstream1.TextPosition;
}
export declare namespace _TextLayoutMetricsFactory {
    function implement(args: [], implementation: {
        getLineAtOffset: ((position: upstream1.TextPosition) => Readonly<{
            "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::TextRange": readonly [];
        }>);
        getWordBoundary: ((position: upstream1.TextPosition) => Readonly<{
            "__flaxBound:dart:ui::TextRange": readonly [];
        }>);
        getTextPositionAbove: ((position: upstream1.TextPosition) => Readonly<{
            "__flaxBound:dart:ui::TextPosition": readonly [];
        }>);
        getTextPositionBelow: ((position: upstream1.TextPosition) => Readonly<{
            "__flaxBound:dart:ui::TextPosition": readonly [];
        }>);
    }): TextLayoutMetrics;
}
export declare namespace _TextLayoutMetricsFactory {
    function isWhitespace(codeUnit: number): boolean;
}
export declare namespace _TextLayoutMetricsFactory {
    function isLineTerminator(codeUnit: number): boolean;
}
export declare const TextLayoutMetrics: typeof _TextLayoutMetricsFactory & _FlaxInstanceType<TextLayoutMetrics> & _FlaxDartType<TextLayoutMetrics, readonly ["class", "flax.core/sdk_services#type:TextLayoutMetrics", readonly [], false]>;

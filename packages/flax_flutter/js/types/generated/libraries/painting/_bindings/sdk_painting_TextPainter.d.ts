import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_InlineSpan';
import '@flax/flutter/painting/_bindings/sdk_painting_InlineSpan';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextAlign';
import '@flax/dart/ui/_bindings/flutter_TextAlign';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream3 from '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import type * as upstream5 from '@flax/flutter/painting/_bindings/sdk_painting_StrutStyle';
import '@flax/flutter/painting/_bindings/sdk_painting_StrutStyle';
import type * as upstream6 from '@flax/flutter/painting/_bindings/sdk_painting_TextWidthBasis';
import '@flax/flutter/painting/_bindings/sdk_painting_TextWidthBasis';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextHeightBehavior';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextHeightBehavior';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextBox';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextBox';
import type * as upstream9 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream10 from '@flax/flutter/painting/_bindings/sdk_painting_WordBoundary';
import '@flax/flutter/painting/_bindings/sdk_painting_WordBoundary';
import type * as upstream11 from '@flax/flutter/painting/_bindings/sdk_painting_PlaceholderDimensions';
import '@flax/flutter/painting/_bindings/sdk_painting_PlaceholderDimensions';
import type * as upstream12 from '@flax/dart/ui/_bindings/flutter_TextBaseline';
import '@flax/dart/ui/_bindings/flutter_TextBaseline';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream14 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream15 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/flutter/services/_bindings/flutter_TextSelection';
import type * as upstream18 from '@flax/dart/ui/_bindings/sdk_dart_ui_BoxHeightStyle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_BoxHeightStyle';
import type * as upstream19 from '@flax/dart/ui/_bindings/sdk_dart_ui_BoxWidthStyle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_BoxWidthStyle';
import type * as upstream20 from '@flax/dart/ui/_bindings/sdk_dart_ui_GlyphInfo';
import '@flax/dart/ui/_bindings/sdk_dart_ui_GlyphInfo';
import type * as upstream21 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
import type * as upstream22 from '@flax/dart/ui/_bindings/sdk_dart_ui_LineMetrics';
import '@flax/dart/ui/_bindings/sdk_dart_ui_LineMetrics';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface TextPainter extends Readonly<{
    "__flaxBound:package:flutter/src/painting/text_painter.dart::TextPainter": readonly [];
}> {
    readonly __TextPainter: unique symbol;
    readonly [_flaxDartTypeValue]: TextPainter;
}
export interface TextPainter {
    readonly [_flaxDartTypeValue]: TextPainter;
    markNeedsLayout(): void;
    setPlaceholderDimensions(value: DartListInput<upstream11.PlaceholderDimensions, Readonly<{
        "__flaxBound:package:flutter/src/painting/text_painter.dart::PlaceholderDimensions": readonly [];
    }>> | null): void;
    computeDistanceToActualBaseline(baseline: upstream12.TextBaseline): number;
    layout(options?: {
        minWidth?: number | undefined;
        maxWidth?: number | undefined;
    }): void;
    paint(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): void;
    getOffsetAfter(offset: number): number | null;
    getOffsetBefore(offset: number): number | null;
    getOffsetForCaret(position: Readonly<{
        "__flaxBound:dart:ui::TextPosition": readonly [];
    }>, caretPrototype: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>): upstream14.Offset;
    getFullHeightForCaret(position: Readonly<{
        "__flaxBound:dart:ui::TextPosition": readonly [];
    }>, caretPrototype: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>): number;
    getBoxesForSelection(selection: Readonly<{
        "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::TextRange": readonly [];
    }>, options?: {
        boxHeightStyle?: upstream18.BoxHeightStyle | undefined;
        boxWidthStyle?: upstream19.BoxWidthStyle | undefined;
    }): DartList<upstream8.TextBox>;
    getClosestGlyphForOffset(offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream20.GlyphInfo | null;
    getPositionForOffset(offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream15.TextPosition;
    getWordBoundary(position: Readonly<{
        "__flaxBound:dart:ui::TextPosition": readonly [];
    }>): upstream21.TextRange;
    getLineBoundary(position: Readonly<{
        "__flaxBound:dart:ui::TextPosition": readonly [];
    }>): upstream21.TextRange;
    computeLineMetrics(): DartList<upstream22.LineMetrics>;
    dispose(): void;
    get text(): upstream0.InlineSpan | null;
    get plainText(): string;
    get textAlign(): upstream1.TextAlign;
    get textDirection(): upstream2.TextDirection | null;
    get textScaleFactor(): number;
    get textScaler(): upstream3.TextScaler;
    get ellipsis(): string | null;
    get locale(): upstream4.Locale | null;
    get maxLines(): number | null;
    get strutStyle(): upstream5.StrutStyle | null;
    get textWidthBasis(): upstream6.TextWidthBasis;
    get textHeightBehavior(): upstream7.TextHeightBehavior | null;
    get inlinePlaceholderBoxes(): DartList<upstream8.TextBox> | null;
    get preferredLineHeight(): number;
    get minIntrinsicWidth(): number;
    get maxIntrinsicWidth(): number;
    get width(): number;
    get height(): number;
    get size(): upstream9.Size;
    get didExceedMaxLines(): boolean;
    get debugPaintTextLayoutBoxes(): boolean;
    get wordBoundaries(): upstream10.WordBoundary;
    get debugDisposed(): boolean;
    set text(value: (Readonly<{
        "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null);
    set textAlign(value: upstream1.TextAlign);
    set textDirection(value: upstream2.TextDirection | null);
    set textScaleFactor(value: number);
    set textScaler(value: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
    }>);
    set ellipsis(value: string | null);
    set locale(value: Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }> | null);
    set maxLines(value: number | null);
    set strutStyle(value: (Readonly<{
        "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null);
    set textWidthBasis(value: upstream6.TextWidthBasis);
    set textHeightBehavior(value: Readonly<{
        "__flaxBound:dart:ui::TextHeightBehavior": readonly [];
    }> | null);
    set debugPaintTextLayoutBoxes(value: boolean);
}
export declare abstract class TextPainter extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextPainter>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TextPainter;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:TextPainter", readonly [], false];
    constructor(options?: {
        text?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        textAlign?: upstream1.TextAlign | undefined;
        textDirection?: upstream2.TextDirection | null | undefined;
        textScaleFactor?: number | undefined;
        textScaler?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
        }> | undefined;
        maxLines?: number | null | undefined;
        ellipsis?: string | null | undefined;
        locale?: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null | undefined;
        strutStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        textWidthBasis?: upstream6.TextWidthBasis | undefined;
        textHeightBehavior?: Readonly<{
            "__flaxBound:dart:ui::TextHeightBehavior": readonly [];
        }> | null | undefined;
    });
}
export declare namespace TextPainter {
    function implement(args: [options?: {
        text?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        textAlign?: upstream1.TextAlign | undefined;
        textDirection?: upstream2.TextDirection | null | undefined;
        textScaleFactor?: number | undefined;
        textScaler?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
        }> | undefined;
        maxLines?: number | null | undefined;
        ellipsis?: string | null | undefined;
        locale?: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null | undefined;
        strutStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        textWidthBasis?: upstream6.TextWidthBasis | undefined;
        textHeightBehavior?: Readonly<{
            "__flaxBound:dart:ui::TextHeightBehavior": readonly [];
        }> | null | undefined;
    }], implementation: {}): TextPainter;
}
export declare namespace TextPainter {
    function computeWidth(options: {
        ellipsis?: string | null | undefined;
        locale?: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null | undefined;
        maxLines?: number | null | undefined;
        maxWidth?: number | undefined;
        minWidth?: number | undefined;
        strutStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        text: Readonly<{
            "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        textAlign?: upstream1.TextAlign | undefined;
        textDirection: upstream2.TextDirection;
        textHeightBehavior?: Readonly<{
            "__flaxBound:dart:ui::TextHeightBehavior": readonly [];
        }> | null | undefined;
        textScaleFactor?: number | undefined;
        textScaler?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
        }> | undefined;
        textWidthBasis?: upstream6.TextWidthBasis | undefined;
    }): number;
}
export declare namespace TextPainter {
    function computeMaxIntrinsicWidth(options: {
        ellipsis?: string | null | undefined;
        locale?: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null | undefined;
        maxLines?: number | null | undefined;
        maxWidth?: number | undefined;
        minWidth?: number | undefined;
        strutStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        text: Readonly<{
            "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        textAlign?: upstream1.TextAlign | undefined;
        textDirection: upstream2.TextDirection;
        textHeightBehavior?: Readonly<{
            "__flaxBound:dart:ui::TextHeightBehavior": readonly [];
        }> | null | undefined;
        textScaleFactor?: number | undefined;
        textScaler?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
        }> | undefined;
        textWidthBasis?: upstream6.TextWidthBasis | undefined;
    }): number;
}
export declare namespace TextPainter {
    function isHighSurrogate(value: number): boolean;
}
export declare namespace TextPainter {
    function isLowSurrogate(value: number): boolean;
}

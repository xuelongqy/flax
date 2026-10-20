import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_InlineSpan';
import '@flax/flutter/painting/_bindings/sdk_painting_InlineSpan';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import type * as upstream4 from '@flax/flutter/services/_bindings/sdk_services_MouseTrackerAnnotation';
import '@flax/flutter/services/_bindings/sdk_services_MouseTrackerAnnotation';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream6 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureRecognizer';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureRecognizer';
import type * as upstream7 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream8 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerEnterEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerEnterEvent';
import type * as upstream9 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerExitEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerExitEvent';
import type * as upstream10 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ParagraphBuilder';
import type * as upstream12 from '@flax/flutter/painting/_bindings/sdk_painting_PlaceholderDimensions';
import '@flax/flutter/painting/_bindings/sdk_painting_PlaceholderDimensions';
import '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import '@flax/flutter/painting/_bindings/sdk_painting_Accumulator';
import type * as upstream16 from '@flax/flutter/painting/_bindings/sdk_painting_InlineSpanSemanticsInformation';
import '@flax/flutter/painting/_bindings/sdk_painting_InlineSpanSemanticsInformation';
import '@flax/dart/core/_bindings/flutter_StringBuffer';
import type * as upstream18 from '@flax/flutter/painting/_bindings/sdk_painting_RenderComparison';
import '@flax/flutter/painting/_bindings/sdk_painting_RenderComparison';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream20 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream21 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream22 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextSpan extends Omit<upstream0.InlineSpan, _flaxOwnMembers0>, Omit<upstream1.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.InlineSpan>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.InlineSpan | keyof upstream1.DiagnosticableTree>, Omit<upstream3.HitTestTarget, _flaxOwnMembers0 | keyof upstream0.InlineSpan | keyof upstream1.DiagnosticableTree | keyof upstream2.Diagnosticable>, Omit<upstream4.MouseTrackerAnnotation, _flaxOwnMembers0 | keyof upstream0.InlineSpan | keyof upstream1.DiagnosticableTree | keyof upstream2.Diagnosticable | keyof upstream3.HitTestTarget>, Readonly<{
    "__flaxBound:package:flutter/src/painting/text_span.dart::TextSpan": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/mouse_tracking.dart::MouseTrackerAnnotation": readonly [];
}> {
    readonly __TextSpan: unique symbol;
    readonly [_flaxDartTypeValue]: TextSpan;
    readonly style: upstream5.TextStyle | null;
    readonly onEnter: ((event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEnterEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerEnterEvent": readonly [];
    }>) => void) | null;
    readonly onExit: ((event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerExitEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerExitEvent": readonly [];
    }>) => void) | null;
    readonly cursor: upstream7.MouseCursor;
    readonly validForMouseTracker: boolean;
    readonly text: string | null;
    readonly children: DartList<upstream0.InlineSpan> | null;
    readonly recognizer: upstream6.GestureRecognizer | null;
    readonly mouseCursor: upstream7.MouseCursor;
    readonly semanticsLabel: string | null;
    readonly semanticsIdentifier: string | null;
    readonly locale: upstream10.Locale | null;
    readonly spellOut: boolean | null;
    build(builder: Readonly<{
        "__flaxBound:dart:ui::ParagraphBuilder": readonly [];
    }>, options?: {
        dimensions?: DartListInput<upstream12.PlaceholderDimensions, Readonly<{
            "__flaxBound:package:flutter/src/painting/text_painter.dart::PlaceholderDimensions": readonly [];
        }>> | null | undefined;
        textScaler?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
        }> | undefined;
    }): void;
    visitChildren(visitor: ((span: upstream0.InlineSpan) => boolean)): boolean;
    visitDirectChildren(visitor: ((span: upstream0.InlineSpan) => boolean)): boolean;
    getSpanForPosition(position: Readonly<{
        "__flaxBound:dart:ui::TextPosition": readonly [];
    }>): upstream0.InlineSpan | null;
    getSpanForPositionVisitor(position: Readonly<{
        "__flaxBound:dart:ui::TextPosition": readonly [];
    }>, offset: Readonly<{
        "__flaxBound:package:flutter/src/painting/inline_span.dart::Accumulator": readonly [];
    }>): upstream0.InlineSpan | null;
    toPlainText(options?: {
        includePlaceholders?: boolean | undefined;
        includeSemanticsLabels?: boolean | undefined;
    }): string;
    getSemanticsInformation(): DartList<upstream16.InlineSpanSemanticsInformation>;
    computeSemanticsInformation(collector: DartListInput<upstream16.InlineSpanSemanticsInformation, Readonly<{
        "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpanSemanticsInformation": readonly [];
    }>>, options?: {
        inheritedLocale?: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null | undefined;
        inheritedSpellOut?: boolean | undefined;
    }): void;
    computeToPlainText(buffer: Readonly<{
        "__flaxBound:dart:core::StringBuffer": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::StringSink": readonly [];
    }>, options?: {
        includePlaceholders?: boolean | undefined;
        includeSemanticsLabels?: boolean | undefined;
    }): void;
    codeUnitAt(index: number): number | null;
    codeUnitAtVisitor(index: number, offset: Readonly<{
        "__flaxBound:package:flutter/src/painting/inline_span.dart::Accumulator": readonly [];
    }>): number | null;
    debugAssertIsValid(): boolean;
    compareTo(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): upstream18.RenderComparison;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream20.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream20.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream22.DiagnosticsTreeStyle | null | undefined;
    }): upstream21.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream21.DiagnosticsNode>;
    toString(options?: {
        minLevel?: upstream20.DiagnosticLevel | undefined;
    }): string;
    handleEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, entry: Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [upstream3.HitTestTarget];
    }>): void;
}
export declare function _TextSpanFactory(options?: {
    text?: string | null | undefined;
    children?: DartListInput<upstream0.InlineSpan, Readonly<{
        "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>> | null | undefined;
    style?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    recognizer?: (Readonly<{
        "__flaxBound:package:flutter/src/gestures/recognizer.dart::GestureRecognizer": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    mouseCursor?: (Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    onEnter?: ((event: upstream8.PointerEnterEvent) => void) | null | undefined;
    onExit?: ((event: upstream9.PointerExitEvent) => void) | null | undefined;
    semanticsLabel?: string | null | undefined;
    semanticsIdentifier?: string | null | undefined;
    locale?: Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }> | null | undefined;
    spellOut?: boolean | null | undefined;
}): TextSpan;
export interface _TextSpanNative extends TextSpan {
    readonly [_flaxDartTypeValue]: _TextSpanNative;
    build(builder: Readonly<{
        "__flaxBound:dart:ui::ParagraphBuilder": readonly [];
    }>, options?: {
        textScaler?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
        }> | undefined;
        dimensions?: DartListInput<upstream12.PlaceholderDimensions, Readonly<{
            "__flaxBound:package:flutter/src/painting/text_painter.dart::PlaceholderDimensions": readonly [];
        }>> | null | undefined;
    }): void;
    visitChildren(visitor: ((span: upstream0.InlineSpan) => boolean)): boolean;
    visitDirectChildren(visitor: ((span: upstream0.InlineSpan) => boolean)): boolean;
    getSpanForPosition(position: Readonly<{
        "__flaxBound:dart:ui::TextPosition": readonly [];
    }>): upstream0.InlineSpan | null;
    getSpanForPositionVisitor(position: Readonly<{
        "__flaxBound:dart:ui::TextPosition": readonly [];
    }>, offset: Readonly<{
        "__flaxBound:package:flutter/src/painting/inline_span.dart::Accumulator": readonly [];
    }>): upstream0.InlineSpan | null;
    toPlainText(options?: {
        includeSemanticsLabels?: boolean | undefined;
        includePlaceholders?: boolean | undefined;
    }): string;
    getSemanticsInformation(): DartList<upstream16.InlineSpanSemanticsInformation>;
    computeSemanticsInformation(collector: DartListInput<upstream16.InlineSpanSemanticsInformation, Readonly<{
        "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpanSemanticsInformation": readonly [];
    }>>, options?: {
        inheritedLocale?: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null | undefined;
        inheritedSpellOut?: boolean | undefined;
    }): void;
    computeToPlainText(buffer: Readonly<{
        "__flaxBound:dart:core::StringBuffer": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::StringSink": readonly [];
    }>, options?: {
        includeSemanticsLabels?: boolean | undefined;
        includePlaceholders?: boolean | undefined;
    }): void;
    codeUnitAt(index: number): number | null;
    codeUnitAtVisitor(index: number, offset: Readonly<{
        "__flaxBound:package:flutter/src/painting/inline_span.dart::Accumulator": readonly [];
    }>): number | null;
    debugAssertIsValid(): boolean;
    compareTo(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): upstream18.RenderComparison;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream20.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        minLevel?: upstream20.DiagnosticLevel | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream22.DiagnosticsTreeStyle | null | undefined;
    }): upstream21.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream21.DiagnosticsNode>;
    toString(options?: {
        minLevel?: upstream20.DiagnosticLevel | undefined;
    }): string;
    handleEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, entry: Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [upstream3.HitTestTarget];
    }>): void;
    get text(): string | null;
    get children(): DartList<upstream0.InlineSpan> | null;
    get recognizer(): upstream6.GestureRecognizer | null;
    get mouseCursor(): upstream7.MouseCursor;
    get onEnter(): ((event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEnterEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerEnterEvent": readonly [];
    }>) => void) | null;
    get onExit(): ((event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerExitEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerExitEvent": readonly [];
    }>) => void) | null;
    get cursor(): upstream7.MouseCursor;
    get semanticsLabel(): string | null;
    get semanticsIdentifier(): string | null;
    get locale(): upstream10.Locale | null;
    get spellOut(): boolean | null;
    get validForMouseTracker(): boolean;
    get style(): upstream5.TextStyle | null;
}
export declare abstract class _TextSpanNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextSpan>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TextSpan;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:TextSpan", readonly [], false];
    constructor(options?: {
        text?: string | null | undefined;
        children?: DartListInput<upstream0.InlineSpan, Readonly<{
            "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>> | null | undefined;
        style?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        recognizer?: (Readonly<{
            "__flaxBound:package:flutter/src/gestures/recognizer.dart::GestureRecognizer": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        mouseCursor?: (Readonly<{
            "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        onEnter?: ((event: upstream8.PointerEnterEvent) => void) | null | undefined;
        onExit?: ((event: upstream9.PointerExitEvent) => void) | null | undefined;
        semanticsLabel?: string | null | undefined;
        semanticsIdentifier?: string | null | undefined;
        locale?: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null | undefined;
        spellOut?: boolean | null | undefined;
    });
}
export declare namespace _TextSpanFactory {
    function implement(args: [options?: {
        text?: string | null | undefined;
        children?: DartListInput<upstream0.InlineSpan, Readonly<{
            "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>> | null | undefined;
        style?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        recognizer?: (Readonly<{
            "__flaxBound:package:flutter/src/gestures/recognizer.dart::GestureRecognizer": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        mouseCursor?: (Readonly<{
            "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        onEnter?: ((event: upstream8.PointerEnterEvent) => void) | null | undefined;
        onExit?: ((event: upstream9.PointerExitEvent) => void) | null | undefined;
        semanticsLabel?: string | null | undefined;
        semanticsIdentifier?: string | null | undefined;
        locale?: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null | undefined;
        spellOut?: boolean | null | undefined;
    }], implementation: {}): TextSpan;
}
declare const _TextSpanBinding: typeof _TextSpanFactory & (new (options?: {
    text?: string | null | undefined;
    children?: DartListInput<upstream0.InlineSpan, Readonly<{
        "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>> | null | undefined;
    style?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    recognizer?: (Readonly<{
        "__flaxBound:package:flutter/src/gestures/recognizer.dart::GestureRecognizer": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    mouseCursor?: (Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    onEnter?: ((event: upstream8.PointerEnterEvent) => void) | null | undefined;
    onExit?: ((event: upstream9.PointerExitEvent) => void) | null | undefined;
    semanticsLabel?: string | null | undefined;
    semanticsIdentifier?: string | null | undefined;
    locale?: Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }> | null | undefined;
    spellOut?: boolean | null | undefined;
}) => _TextSpanNative);
export declare const TextSpan: typeof _TextSpanBinding & _FlaxInstanceType<TextSpan> & _FlaxDartType<TextSpan, readonly ["class", "flax.core/sdk_painting#type:TextSpan", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "style" | "onEnter" | "onExit" | "cursor" | "validForMouseTracker" | "text" | "children" | "recognizer" | "mouseCursor" | "semanticsLabel" | "semanticsIdentifier" | "locale" | "spellOut" | "build" | "visitChildren" | "visitDirectChildren" | "getSpanForPosition" | "getSpanForPositionVisitor" | "toPlainText" | "getSemanticsInformation" | "computeSemanticsInformation" | "computeToPlainText" | "codeUnitAt" | "codeUnitAtVisitor" | "debugAssertIsValid" | "compareTo" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "toString" | "handleEvent" | "__flaxBound:package:flutter/src/painting/text_span.dart::TextSpan" | "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget" | "__flaxBound:package:flutter/src/services/mouse_tracking.dart::MouseTrackerAnnotation";
export {};

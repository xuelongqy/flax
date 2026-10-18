import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_PlaceholderSpan';
import '@flax/flutter/painting/_bindings/sdk_painting_PlaceholderSpan';
import type * as upstream1 from '@flax/flutter/painting/_bindings/sdk_painting_InlineSpan';
import '@flax/flutter/painting/_bindings/sdk_painting_InlineSpan';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_PlaceholderAlignment';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PlaceholderAlignment';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_TextBaseline';
import '@flax/dart/ui/_bindings/flutter_TextBaseline';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import '@flax/dart/core/_bindings/flutter_StringBuffer';
import type * as upstream9 from '@flax/flutter/painting/_bindings/sdk_painting_InlineSpanSemanticsInformation';
import '@flax/flutter/painting/_bindings/sdk_painting_InlineSpanSemanticsInformation';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ParagraphBuilder';
import type * as upstream12 from '@flax/flutter/painting/_bindings/sdk_painting_PlaceholderDimensions';
import '@flax/flutter/painting/_bindings/sdk_painting_PlaceholderDimensions';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import '@flax/flutter/painting/_bindings/sdk_painting_Accumulator';
import type * as upstream15 from '@flax/flutter/painting/_bindings/sdk_painting_RenderComparison';
import '@flax/flutter/painting/_bindings/sdk_painting_RenderComparison';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream17 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream18 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface WidgetSpan extends Omit<upstream0.PlaceholderSpan, _flaxOwnMembers0>, Omit<upstream1.InlineSpan, _flaxOwnMembers0 | keyof upstream0.PlaceholderSpan>, Omit<upstream2.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.PlaceholderSpan | keyof upstream1.InlineSpan>, Omit<upstream3.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.PlaceholderSpan | keyof upstream1.InlineSpan | keyof upstream2.DiagnosticableTree>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/widget_span.dart::WidgetSpan": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/placeholder_span.dart::PlaceholderSpan": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __WidgetSpan: unique symbol;
    readonly [_flaxDartTypeValue]: WidgetSpan;
}
export interface WidgetSpan {
    readonly [_flaxDartTypeValue]: WidgetSpan;
    computeToPlainText(buffer: Readonly<{
        "__flaxBound:dart:core::StringBuffer": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::StringSink": readonly [];
    }>, options?: {
        includeSemanticsLabels?: boolean | undefined;
        includePlaceholders?: boolean | undefined;
    }): void;
    computeSemanticsInformation(collector: DartListInput<upstream9.InlineSpanSemanticsInformation, Readonly<{
        "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpanSemanticsInformation": readonly [];
    }>>): void;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    debugAssertIsValid(): boolean;
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
    visitChildren(visitor: ((span: upstream1.InlineSpan) => boolean)): boolean;
    visitDirectChildren(visitor: ((span: upstream1.InlineSpan) => boolean)): boolean;
    getSpanForPosition(position: Readonly<{
        "__flaxBound:dart:ui::TextPosition": readonly [];
    }>): upstream1.InlineSpan | null;
    getSpanForPositionVisitor(position: Readonly<{
        "__flaxBound:dart:ui::TextPosition": readonly [];
    }>, offset: Readonly<{
        "__flaxBound:package:flutter/src/painting/inline_span.dart::Accumulator": readonly [];
    }>): upstream1.InlineSpan | null;
    toPlainText(options?: {
        includeSemanticsLabels?: boolean | undefined;
        includePlaceholders?: boolean | undefined;
    }): string;
    getSemanticsInformation(): DartList<upstream9.InlineSpanSemanticsInformation>;
    codeUnitAt(index: number): number | null;
    codeUnitAtVisitor(index: number, offset: Readonly<{
        "__flaxBound:package:flutter/src/painting/inline_span.dart::Accumulator": readonly [];
    }>): number | null;
    compareTo(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): upstream15.RenderComparison;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream16.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        minLevel?: upstream16.DiagnosticLevel | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream18.DiagnosticsTreeStyle | null | undefined;
    }): upstream17.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream17.DiagnosticsNode>;
    toString(options?: {
        minLevel?: upstream16.DiagnosticLevel | undefined;
    }): string;
    get child(): Widget;
    get alignment(): upstream4.PlaceholderAlignment;
    get baseline(): upstream5.TextBaseline | null;
    get style(): upstream6.TextStyle | null;
}
export declare abstract class WidgetSpan extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<WidgetSpan>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: WidgetSpan;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:WidgetSpan", readonly [], false];
    constructor(options: {
        child: Widget;
        alignment?: upstream4.PlaceholderAlignment | undefined;
        baseline?: upstream5.TextBaseline | null | undefined;
        style?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    });
}
export declare namespace WidgetSpan {
    function implement(args: [options: {
        child: Widget;
        alignment?: upstream4.PlaceholderAlignment | undefined;
        baseline?: upstream5.TextBaseline | null | undefined;
        style?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }], implementation: {}): WidgetSpan;
}
export declare namespace WidgetSpan {
    function extractFromInlineSpan(span: Readonly<{
        "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, textScaler: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
    }>): DartList<Widget>;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "alignment" | "baseline" | "style" | "child" | "computeToPlainText" | "computeSemanticsInformation" | "debugFillProperties" | "debugAssertIsValid" | "build" | "visitChildren" | "visitDirectChildren" | "getSpanForPosition" | "getSpanForPositionVisitor" | "toPlainText" | "getSemanticsInformation" | "codeUnitAt" | "codeUnitAtVisitor" | "compareTo" | "toStringShallow" | "toStringDeep" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "toString" | "__flaxBound:package:flutter/src/widgets/widget_span.dart::WidgetSpan" | "__flaxBound:package:flutter/src/painting/placeholder_span.dart::PlaceholderSpan" | "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

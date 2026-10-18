import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_ParagraphBuilder';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ParagraphBuilder';
import type * as upstream8 from '@flax/flutter/painting/_bindings/sdk_painting_PlaceholderDimensions';
import '@flax/flutter/painting/_bindings/sdk_painting_PlaceholderDimensions';
import type * as upstream9 from '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import type * as upstream10 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import type * as upstream11 from '@flax/flutter/painting/_bindings/sdk_painting_Accumulator';
import '@flax/flutter/painting/_bindings/sdk_painting_Accumulator';
import type * as upstream12 from '@flax/flutter/painting/_bindings/sdk_painting_InlineSpanSemanticsInformation';
import '@flax/flutter/painting/_bindings/sdk_painting_InlineSpanSemanticsInformation';
import type * as upstream13 from '@flax/dart/core/_bindings/flutter_StringBuffer';
import '@flax/dart/core/_bindings/flutter_StringBuffer';
import type * as upstream14 from '@flax/flutter/painting/_bindings/sdk_painting_RenderComparison';
import '@flax/flutter/painting/_bindings/sdk_painting_RenderComparison';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface InlineSpan extends Omit<upstream0.DiagnosticableTree, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.DiagnosticableTree>, Readonly<{
    "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __InlineSpan: unique symbol;
    readonly [_flaxDartTypeValue]: InlineSpan;
}
export interface InlineSpan {
    readonly [_flaxDartTypeValue]: InlineSpan;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream3.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        minLevel?: upstream3.DiagnosticLevel | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream5.DiagnosticsTreeStyle | null | undefined;
    }): upstream4.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream4.DiagnosticsNode>;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toString(options?: {
        minLevel?: upstream3.DiagnosticLevel | undefined;
    }): string;
    getSpanForPosition(position: Readonly<{
        "__flaxBound:dart:ui::TextPosition": readonly [];
    }>): InlineSpan | null;
    toPlainText(options?: {
        includeSemanticsLabels?: boolean | undefined;
        includePlaceholders?: boolean | undefined;
    }): string;
    getSemanticsInformation(): DartList<upstream12.InlineSpanSemanticsInformation>;
    codeUnitAt(index: number): number | null;
    debugAssertIsValid(): boolean;
    get style(): upstream2.TextStyle | null;
}
export declare abstract class InlineSpan extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<InlineSpan>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: InlineSpan;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:InlineSpan", readonly [], false];
    constructor(options?: {
        style?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    });
    abstract build(builder: Readonly<{
        "__flaxBound:dart:ui::ParagraphBuilder": readonly [];
    }>, options?: {
        textScaler?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
        }> | undefined;
        dimensions?: DartListInput<upstream8.PlaceholderDimensions, Readonly<{
            "__flaxBound:package:flutter/src/painting/text_painter.dart::PlaceholderDimensions": readonly [];
        }>> | null | undefined;
    }): void;
    abstract visitChildren(visitor: ((span: InlineSpan) => boolean)): boolean;
    abstract visitDirectChildren(visitor: ((span: InlineSpan) => boolean)): boolean;
    abstract getSpanForPositionVisitor(position: Readonly<{
        "__flaxBound:dart:ui::TextPosition": readonly [];
    }>, offset: Readonly<{
        "__flaxBound:package:flutter/src/painting/inline_span.dart::Accumulator": readonly [];
    }>): InlineSpan | null;
    abstract computeSemanticsInformation(collector: DartListInput<upstream12.InlineSpanSemanticsInformation, Readonly<{
        "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpanSemanticsInformation": readonly [];
    }>>): void;
    abstract computeToPlainText(buffer: Readonly<{
        "__flaxBound:dart:core::StringBuffer": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::StringSink": readonly [];
    }>, options?: {
        includeSemanticsLabels?: boolean | undefined;
        includePlaceholders?: boolean | undefined;
    }): void;
    abstract codeUnitAtVisitor(index: number, offset: Readonly<{
        "__flaxBound:package:flutter/src/painting/inline_span.dart::Accumulator": readonly [];
    }>): number | null;
    abstract compareTo(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): upstream14.RenderComparison;
}
export declare namespace InlineSpan {
    function implement(args: [options?: {
        style?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }], implementation: {
        build: ((builder: upstream7.ParagraphBuilder, options?: {
            textScaler?: upstream9.TextScaler | undefined;
            dimensions?: DartList<upstream8.PlaceholderDimensions> | null | undefined;
        }) => void);
        visitChildren: ((visitor: ((span: Readonly<{
            "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) => boolean)) => boolean);
        visitDirectChildren: ((visitor: ((span: Readonly<{
            "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) => boolean)) => boolean);
        getSpanForPositionVisitor: ((position: upstream10.TextPosition, offset: upstream11.Accumulator) => (Readonly<{
            "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null);
        computeSemanticsInformation: ((collector: DartList<upstream12.InlineSpanSemanticsInformation>) => void);
        computeToPlainText: ((buffer: upstream13.StringBuffer, options?: {
            includeSemanticsLabels?: boolean | undefined;
            includePlaceholders?: boolean | undefined;
        }) => void);
        codeUnitAtVisitor: ((index: number, offset: upstream11.Accumulator) => number | null);
        compareTo: ((other: InlineSpan) => upstream14.RenderComparison);
    }): InlineSpan;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "style" | "toStringShallow" | "toStringDeep" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "debugFillProperties" | "toString" | "build" | "visitChildren" | "visitDirectChildren" | "getSpanForPosition" | "getSpanForPositionVisitor" | "toPlainText" | "getSemanticsInformation" | "computeSemanticsInformation" | "computeToPlainText" | "codeUnitAt" | "codeUnitAtVisitor" | "debugAssertIsValid" | "compareTo" | "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

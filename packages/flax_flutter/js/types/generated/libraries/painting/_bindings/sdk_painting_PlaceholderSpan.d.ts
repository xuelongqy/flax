import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_InlineSpan';
import '@flax/flutter/painting/_bindings/sdk_painting_InlineSpan';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_PlaceholderAlignment';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PlaceholderAlignment';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_TextBaseline';
import '@flax/dart/ui/_bindings/flutter_TextBaseline';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_ParagraphBuilder';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ParagraphBuilder';
import type * as upstream7 from '@flax/flutter/painting/_bindings/sdk_painting_PlaceholderDimensions';
import '@flax/flutter/painting/_bindings/sdk_painting_PlaceholderDimensions';
import type * as upstream8 from '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import type * as upstream10 from '@flax/flutter/painting/_bindings/sdk_painting_Accumulator';
import '@flax/flutter/painting/_bindings/sdk_painting_Accumulator';
import type * as upstream11 from '@flax/flutter/painting/_bindings/sdk_painting_InlineSpanSemanticsInformation';
import '@flax/flutter/painting/_bindings/sdk_painting_InlineSpanSemanticsInformation';
import '@flax/dart/core/_bindings/flutter_StringBuffer';
import type * as upstream13 from '@flax/flutter/painting/_bindings/sdk_painting_RenderComparison';
import '@flax/flutter/painting/_bindings/sdk_painting_RenderComparison';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream17 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface PlaceholderSpan extends Omit<upstream0.InlineSpan, _flaxOwnMembers0>, Omit<upstream1.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.InlineSpan>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.InlineSpan | keyof upstream1.DiagnosticableTree>, Readonly<{
    "__flaxBound:package:flutter/src/painting/placeholder_span.dart::PlaceholderSpan": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __PlaceholderSpan: unique symbol;
    readonly [_flaxDartTypeValue]: PlaceholderSpan;
}
export interface PlaceholderSpan {
    readonly [_flaxDartTypeValue]: PlaceholderSpan;
    getSpanForPosition(position: Readonly<{
        "__flaxBound:dart:ui::TextPosition": readonly [];
    }>): upstream0.InlineSpan | null;
    toPlainText(options?: {
        includeSemanticsLabels?: boolean | undefined;
        includePlaceholders?: boolean | undefined;
    }): string;
    getSemanticsInformation(): DartList<upstream11.InlineSpanSemanticsInformation>;
    computeSemanticsInformation(collector: DartListInput<upstream11.InlineSpanSemanticsInformation, Readonly<{
        "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpanSemanticsInformation": readonly [];
    }>>): void;
    computeToPlainText(buffer: Readonly<{
        "__flaxBound:dart:core::StringBuffer": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::StringSink": readonly [];
    }>, options?: {
        includeSemanticsLabels?: boolean | undefined;
        includePlaceholders?: boolean | undefined;
    }): void;
    codeUnitAt(index: number): number | null;
    debugAssertIsValid(): boolean;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream15.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        minLevel?: upstream15.DiagnosticLevel | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream17.DiagnosticsTreeStyle | null | undefined;
    }): upstream16.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream16.DiagnosticsNode>;
    toString(options?: {
        minLevel?: upstream15.DiagnosticLevel | undefined;
    }): string;
    get alignment(): upstream3.PlaceholderAlignment;
    get baseline(): upstream4.TextBaseline | null;
    get style(): upstream5.TextStyle | null;
}
export declare abstract class PlaceholderSpan extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PlaceholderSpan>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PlaceholderSpan;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:PlaceholderSpan", readonly [], false];
    constructor(options?: {
        alignment?: upstream3.PlaceholderAlignment | undefined;
        baseline?: upstream4.TextBaseline | null | undefined;
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
        dimensions?: DartListInput<upstream7.PlaceholderDimensions, Readonly<{
            "__flaxBound:package:flutter/src/painting/text_painter.dart::PlaceholderDimensions": readonly [];
        }>> | null | undefined;
    }): void;
    abstract visitChildren(visitor: ((span: upstream0.InlineSpan) => boolean)): boolean;
    abstract visitDirectChildren(visitor: ((span: upstream0.InlineSpan) => boolean)): boolean;
    abstract getSpanForPositionVisitor(position: Readonly<{
        "__flaxBound:dart:ui::TextPosition": readonly [];
    }>, offset: Readonly<{
        "__flaxBound:package:flutter/src/painting/inline_span.dart::Accumulator": readonly [];
    }>): upstream0.InlineSpan | null;
    abstract codeUnitAtVisitor(index: number, offset: Readonly<{
        "__flaxBound:package:flutter/src/painting/inline_span.dart::Accumulator": readonly [];
    }>): number | null;
    abstract compareTo(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): upstream13.RenderComparison;
}
export declare namespace PlaceholderSpan {
    function implement(args: [options?: {
        alignment?: upstream3.PlaceholderAlignment | undefined;
        baseline?: upstream4.TextBaseline | null | undefined;
        style?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }], implementation: {
        build: ((builder: upstream6.ParagraphBuilder, options?: {
            textScaler?: upstream8.TextScaler | undefined;
            dimensions?: DartList<upstream7.PlaceholderDimensions> | null | undefined;
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
        getSpanForPositionVisitor: ((position: upstream9.TextPosition, offset: upstream10.Accumulator) => (Readonly<{
            "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null);
        codeUnitAtVisitor: ((index: number, offset: upstream10.Accumulator) => number | null);
        compareTo: ((other: upstream0.InlineSpan) => upstream13.RenderComparison);
    }): PlaceholderSpan;
}
export declare namespace PlaceholderSpan {
    const placeholderCodeUnit: number;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "style" | "alignment" | "baseline" | "build" | "visitChildren" | "visitDirectChildren" | "getSpanForPosition" | "getSpanForPositionVisitor" | "toPlainText" | "getSemanticsInformation" | "computeSemanticsInformation" | "computeToPlainText" | "codeUnitAt" | "codeUnitAtVisitor" | "debugAssertIsValid" | "compareTo" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "toString" | "__flaxBound:package:flutter/src/painting/placeholder_span.dart::PlaceholderSpan" | "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

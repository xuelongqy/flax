import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_StringAttribute';
import '@flax/dart/ui/_bindings/sdk_dart_ui_StringAttribute';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureRecognizer';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureRecognizer';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface InlineSpanSemanticsInformation extends Readonly<{
    "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpanSemanticsInformation": readonly [];
}> {
    readonly __InlineSpanSemanticsInformation: unique symbol;
    readonly [_flaxDartTypeValue]: InlineSpanSemanticsInformation;
}
export interface InlineSpanSemanticsInformation {
    readonly [_flaxDartTypeValue]: InlineSpanSemanticsInformation;
    toString(): string;
    get text(): string;
    get semanticsLabel(): string | null;
    get semanticsIdentifier(): string | null;
    get recognizer(): upstream1.GestureRecognizer | null;
    get isPlaceholder(): boolean;
    get requiresOwnNode(): boolean;
    get stringAttributes(): DartList<upstream0.StringAttribute>;
}
export declare abstract class InlineSpanSemanticsInformation extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<InlineSpanSemanticsInformation>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: InlineSpanSemanticsInformation;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:InlineSpanSemanticsInformation", readonly [], false];
    constructor(text: string, options?: {
        isPlaceholder?: boolean | undefined;
        semanticsLabel?: string | null | undefined;
        semanticsIdentifier?: string | null | undefined;
        stringAttributes?: DartListInput<upstream0.StringAttribute, Readonly<{
            "__flaxBound:dart:ui::StringAttribute": readonly [];
        }>> | undefined;
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
    });
}
export declare namespace InlineSpanSemanticsInformation {
    function implement(args: [text: string, options?: {
        isPlaceholder?: boolean | undefined;
        semanticsLabel?: string | null | undefined;
        semanticsIdentifier?: string | null | undefined;
        stringAttributes?: DartListInput<upstream0.StringAttribute, Readonly<{
            "__flaxBound:dart:ui::StringAttribute": readonly [];
        }>> | undefined;
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
    }], implementation: {}): InlineSpanSemanticsInformation;
}
export declare namespace InlineSpanSemanticsInformation {
    const placeholder: InlineSpanSemanticsInformation;
}

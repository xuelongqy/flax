import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_TextEditingDelta';
import '@flax/flutter/services/_bindings/sdk_services_TextEditingDelta';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_TextSelection';
import '@flax/flutter/services/_bindings/flutter_TextSelection';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
import type * as upstream4 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface TextEditingDeltaInsertion extends Omit<upstream0.TextEditingDelta, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.TextEditingDelta>, Readonly<{
    "__flaxBound:package:flutter/src/services/text_editing_delta.dart::TextEditingDeltaInsertion": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/text_editing_delta.dart::TextEditingDelta": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __TextEditingDeltaInsertion: unique symbol;
    readonly [_flaxDartTypeValue]: TextEditingDeltaInsertion;
}
export interface TextEditingDeltaInsertion {
    readonly [_flaxDartTypeValue]: TextEditingDeltaInsertion;
    apply(value: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }>): upstream4.TextEditingValue;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream6.DiagnosticsTreeStyle | null | undefined;
    }): upstream5.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toString(options?: {
        minLevel?: upstream8.DiagnosticLevel | undefined;
    }): string;
    get textInserted(): string;
    get insertionOffset(): number;
    get oldText(): string;
    get selection(): upstream2.TextSelection;
    get composing(): upstream3.TextRange;
}
export declare abstract class TextEditingDeltaInsertion extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextEditingDeltaInsertion>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TextEditingDeltaInsertion;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:TextEditingDeltaInsertion", readonly [], false];
    constructor(options: {
        oldText: string;
        textInserted: string;
        insertionOffset: number;
        selection: Readonly<{
            "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::TextRange": readonly [];
        }>;
        composing: Readonly<{
            "__flaxBound:dart:ui::TextRange": readonly [];
        }>;
    });
}
export declare namespace TextEditingDeltaInsertion {
    function implement(args: [options: {
        oldText: string;
        textInserted: string;
        insertionOffset: number;
        selection: Readonly<{
            "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::TextRange": readonly [];
        }>;
        composing: Readonly<{
            "__flaxBound:dart:ui::TextRange": readonly [];
        }>;
    }], implementation: {}): TextEditingDeltaInsertion;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "oldText" | "selection" | "composing" | "textInserted" | "insertionOffset" | "apply" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/services/text_editing_delta.dart::TextEditingDeltaInsertion" | "__flaxBound:package:flutter/src/services/text_editing_delta.dart::TextEditingDelta" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

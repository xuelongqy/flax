import { type FlaxInstanceType as _FlaxInstanceType, type DartMapInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_TextSelection';
import '@flax/flutter/services/_bindings/flutter_TextSelection';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream7 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextEditingDelta extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/text_editing_delta.dart::TextEditingDelta": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __TextEditingDelta: unique symbol;
    readonly [_flaxDartTypeValue]: TextEditingDelta;
    readonly oldText: string;
    readonly selection: upstream1.TextSelection;
    readonly composing: upstream2.TextRange;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream3.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream5.DiagnosticsTreeStyle | null | undefined;
    }): upstream4.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    apply(value: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }>): upstream7.TextEditingValue;
}
export declare namespace _TextEditingDeltaFactory {
    function fromJSON(encoded: DartMapInput<string, unknown | null, string, unknown | null>): TextEditingDelta;
}
export interface _TextEditingDeltaNative extends TextEditingDelta {
    readonly [_flaxDartTypeValue]: _TextEditingDeltaNative;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream3.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream5.DiagnosticsTreeStyle | null | undefined;
    }): upstream4.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    get oldText(): string;
    get selection(): upstream1.TextSelection;
    get composing(): upstream2.TextRange;
}
export declare abstract class _TextEditingDeltaNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextEditingDelta>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TextEditingDelta;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:TextEditingDelta", readonly [], false];
    constructor(options: {
        oldText: string;
        selection: Readonly<{
            "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::TextRange": readonly [];
        }>;
        composing: Readonly<{
            "__flaxBound:dart:ui::TextRange": readonly [];
        }>;
    });
    abstract apply(value: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }>): upstream7.TextEditingValue;
}
export declare namespace _TextEditingDeltaFactory {
    function implement(args: [options: {
        oldText: string;
        selection: Readonly<{
            "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::TextRange": readonly [];
        }>;
        composing: Readonly<{
            "__flaxBound:dart:ui::TextRange": readonly [];
        }>;
    }], implementation: {
        apply: ((value: upstream7.TextEditingValue) => Readonly<{
            "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
        }>);
    }): TextEditingDelta;
}
declare const _TextEditingDeltaBinding: typeof _TextEditingDeltaFactory & (abstract new (options: {
    oldText: string;
    selection: Readonly<{
        "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::TextRange": readonly [];
    }>;
    composing: Readonly<{
        "__flaxBound:dart:ui::TextRange": readonly [];
    }>;
}) => _TextEditingDeltaNative);
export declare const TextEditingDelta: typeof _TextEditingDeltaBinding & _FlaxInstanceType<TextEditingDelta> & _FlaxDartType<TextEditingDelta, readonly ["class", "flax.core/sdk_services#type:TextEditingDelta", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "oldText" | "selection" | "composing" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "apply" | "__flaxBound:package:flutter/src/services/text_editing_delta.dart::TextEditingDelta" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

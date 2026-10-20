import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_TextEditingDelta';
import '@flax/flutter/services/_bindings/sdk_services_TextEditingDelta';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_TextSelection';
import '@flax/flutter/services/_bindings/flutter_TextSelection';
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
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextEditingDeltaDeletion extends Omit<upstream0.TextEditingDelta, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.TextEditingDelta>, Readonly<{
    "__flaxBound:package:flutter/src/services/text_editing_delta.dart::TextEditingDeltaDeletion": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/text_editing_delta.dart::TextEditingDelta": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __TextEditingDeltaDeletion: unique symbol;
    readonly [_flaxDartTypeValue]: TextEditingDeltaDeletion;
    readonly oldText: string;
    readonly selection: upstream3.TextSelection;
    readonly composing: upstream2.TextRange;
    readonly deletedRange: upstream2.TextRange;
    readonly textDeleted: string;
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
}
export declare function _TextEditingDeltaDeletionFactory(options: {
    oldText: string;
    deletedRange: Readonly<{
        "__flaxBound:dart:ui::TextRange": readonly [];
    }>;
    selection: Readonly<{
        "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::TextRange": readonly [];
    }>;
    composing: Readonly<{
        "__flaxBound:dart:ui::TextRange": readonly [];
    }>;
}): TextEditingDeltaDeletion;
export interface _TextEditingDeltaDeletionNative extends TextEditingDeltaDeletion {
    readonly [_flaxDartTypeValue]: _TextEditingDeltaDeletionNative;
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
    get deletedRange(): upstream2.TextRange;
    get textDeleted(): string;
    get oldText(): string;
    get selection(): upstream3.TextSelection;
    get composing(): upstream2.TextRange;
}
export declare abstract class _TextEditingDeltaDeletionNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextEditingDeltaDeletion>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TextEditingDeltaDeletion;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:TextEditingDeltaDeletion", readonly [], false];
    constructor(options: {
        oldText: string;
        deletedRange: Readonly<{
            "__flaxBound:dart:ui::TextRange": readonly [];
        }>;
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
export declare namespace _TextEditingDeltaDeletionFactory {
    function implement(args: [options: {
        oldText: string;
        deletedRange: Readonly<{
            "__flaxBound:dart:ui::TextRange": readonly [];
        }>;
        selection: Readonly<{
            "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::TextRange": readonly [];
        }>;
        composing: Readonly<{
            "__flaxBound:dart:ui::TextRange": readonly [];
        }>;
    }], implementation: {}): TextEditingDeltaDeletion;
}
declare const _TextEditingDeltaDeletionBinding: typeof _TextEditingDeltaDeletionFactory & (new (options: {
    oldText: string;
    deletedRange: Readonly<{
        "__flaxBound:dart:ui::TextRange": readonly [];
    }>;
    selection: Readonly<{
        "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::TextRange": readonly [];
    }>;
    composing: Readonly<{
        "__flaxBound:dart:ui::TextRange": readonly [];
    }>;
}) => _TextEditingDeltaDeletionNative);
export declare const TextEditingDeltaDeletion: typeof _TextEditingDeltaDeletionBinding & _FlaxInstanceType<TextEditingDeltaDeletion> & _FlaxDartType<TextEditingDeltaDeletion, readonly ["class", "flax.core/sdk_services#type:TextEditingDeltaDeletion", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "oldText" | "selection" | "composing" | "deletedRange" | "textDeleted" | "apply" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/services/text_editing_delta.dart::TextEditingDeltaDeletion" | "__flaxBound:package:flutter/src/services/text_editing_delta.dart::TextEditingDelta" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

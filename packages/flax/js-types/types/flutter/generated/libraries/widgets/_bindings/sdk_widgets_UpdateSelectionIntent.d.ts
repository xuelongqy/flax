import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_TextSelection';
import '@flax/flutter/services/_bindings/flutter_TextSelection';
import type * as upstream4 from '@flax/flutter/services/_bindings/sdk_services_SelectionChangedCause';
import '@flax/flutter/services/_bindings/sdk_services_SelectionChangedCause';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface UpdateSelectionIntent extends Omit<upstream0.Intent, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Intent>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::UpdateSelectionIntent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __UpdateSelectionIntent: unique symbol;
    readonly [_flaxDartTypeValue]: UpdateSelectionIntent;
    readonly currentTextEditingValue: upstream2.TextEditingValue;
    readonly newSelection: upstream3.TextSelection;
    readonly cause: upstream4.SelectionChangedCause;
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
export declare function _UpdateSelectionIntentFactory(currentTextEditingValue: Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
}>, newSelection: Readonly<{
    "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [];
}> & Readonly<{
    "__flaxBound:dart:ui::TextRange": readonly [];
}>, cause: upstream4.SelectionChangedCause): UpdateSelectionIntent;
export interface _UpdateSelectionIntentNative extends UpdateSelectionIntent {
    readonly [_flaxDartTypeValue]: _UpdateSelectionIntentNative;
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
    get currentTextEditingValue(): upstream2.TextEditingValue;
    get newSelection(): upstream3.TextSelection;
    get cause(): upstream4.SelectionChangedCause;
}
export declare abstract class _UpdateSelectionIntentNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<UpdateSelectionIntent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: UpdateSelectionIntent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:UpdateSelectionIntent", readonly [], false];
    constructor(currentTextEditingValue: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }>, newSelection: Readonly<{
        "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::TextRange": readonly [];
    }>, cause: upstream4.SelectionChangedCause);
}
export declare namespace _UpdateSelectionIntentFactory {
    function implement(args: [currentTextEditingValue: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }>, newSelection: Readonly<{
        "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::TextRange": readonly [];
    }>, cause: upstream4.SelectionChangedCause], implementation: {}): UpdateSelectionIntent;
}
declare const _UpdateSelectionIntentBinding: typeof _UpdateSelectionIntentFactory & (new (currentTextEditingValue: Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
}>, newSelection: Readonly<{
    "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [];
}> & Readonly<{
    "__flaxBound:dart:ui::TextRange": readonly [];
}>, cause: upstream4.SelectionChangedCause) => _UpdateSelectionIntentNative);
export declare const UpdateSelectionIntent: typeof _UpdateSelectionIntentBinding & _FlaxInstanceType<UpdateSelectionIntent> & _FlaxDartType<UpdateSelectionIntent, readonly ["class", "flax.core/sdk_widgets#type:UpdateSelectionIntent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "currentTextEditingValue" | "newSelection" | "cause" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::UpdateSelectionIntent" | "__flaxBound:package:flutter/src/widgets/actions.dart::Intent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_SelectionChangedCause';
import '@flax/flutter/services/_bindings/sdk_services_SelectionChangedCause';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CopySelectionTextIntent extends Omit<upstream0.Intent, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Intent>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::CopySelectionTextIntent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __CopySelectionTextIntent: unique symbol;
    readonly [_flaxDartTypeValue]: CopySelectionTextIntent;
    readonly cause: upstream2.SelectionChangedCause;
    readonly collapseSelection: boolean;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream4.DiagnosticsTreeStyle | null | undefined;
    }): upstream3.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toString(options?: {
        minLevel?: upstream6.DiagnosticLevel | undefined;
    }): string;
}
export declare namespace _CopySelectionTextIntentFactory {
    function cut(cause: upstream2.SelectionChangedCause): CopySelectionTextIntent;
}
export interface _CopySelectionTextIntentNative extends CopySelectionTextIntent {
    readonly [_flaxDartTypeValue]: _CopySelectionTextIntentNative;
    readonly [_flaxDartConstructors]?: {
        "cut": (cause: upstream2.SelectionChangedCause) => void;
    };
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream4.DiagnosticsTreeStyle | null | undefined;
    }): upstream3.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toString(options?: {
        minLevel?: upstream6.DiagnosticLevel | undefined;
    }): string;
    get cause(): upstream2.SelectionChangedCause;
    get collapseSelection(): boolean;
}
export declare abstract class _CopySelectionTextIntentNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CopySelectionTextIntent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: CopySelectionTextIntent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:CopySelectionTextIntent", readonly [], false];
    constructor(cause: upstream2.SelectionChangedCause);
    constructor(call: _FlaxProxySuper<_CopySelectionTextIntentNative>);
}
export declare namespace _CopySelectionTextIntentFactory {
    function implement(args: [cause: upstream2.SelectionChangedCause], implementation: {}): CopySelectionTextIntent;
}
declare const _CopySelectionTextIntentBinding: typeof _CopySelectionTextIntentFactory & (new (cause: upstream2.SelectionChangedCause) => _CopySelectionTextIntentNative) & (new (call: _FlaxProxySuper<_CopySelectionTextIntentNative>) => _CopySelectionTextIntentNative);
export declare namespace _CopySelectionTextIntentFactory {
    const copy: CopySelectionTextIntent;
}
export declare const CopySelectionTextIntent: typeof _CopySelectionTextIntentBinding & _FlaxInstanceType<CopySelectionTextIntent> & _FlaxDartType<CopySelectionTextIntent, readonly ["class", "flax.core/sdk_widgets#type:CopySelectionTextIntent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "cause" | "collapseSelection" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::CopySelectionTextIntent" | "__flaxBound:package:flutter/src/widgets/actions.dart::Intent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

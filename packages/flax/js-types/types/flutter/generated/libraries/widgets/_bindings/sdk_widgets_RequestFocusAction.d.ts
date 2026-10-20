import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Action';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Action';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_RequestFocusIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RequestFocusIntent';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RequestFocusAction extends Omit<upstream0.Action<upstream1.RequestFocusIntent>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Action<upstream1.RequestFocusIntent>>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::RequestFocusAction": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/actions.dart::Action": readonly [upstream1.RequestFocusIntent];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __RequestFocusAction: unique symbol;
    readonly [_flaxDartTypeValue]: RequestFocusAction;
    readonly callingAction: upstream0.Action<upstream1.RequestFocusIntent> | null;
    readonly intentType: upstream3.Type;
    readonly isActionEnabled: boolean;
    isEnabled(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::RequestFocusIntent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): boolean;
    consumesKey(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::RequestFocusIntent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): boolean;
    toKeyEventResult(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::RequestFocusIntent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, invokeResult: unknown | null): upstream4.KeyEventResult;
    invoke(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::RequestFocusIntent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    addActionListener(listener: ((action: upstream0.Action<upstream5.Intent>) => void)): void;
    removeActionListener(listener: ((action: upstream0.Action<upstream5.Intent>) => void)): void;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream7.DiagnosticsTreeStyle | null | undefined;
    }): upstream6.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toString(options?: {
        minLevel?: upstream9.DiagnosticLevel | undefined;
    }): string;
}
export declare function _RequestFocusActionFactory(): RequestFocusAction;
export interface _RequestFocusActionNative extends RequestFocusAction {
    readonly [_flaxDartTypeValue]: _RequestFocusActionNative;
    isEnabled(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::RequestFocusIntent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): boolean;
    consumesKey(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::RequestFocusIntent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): boolean;
    toKeyEventResult(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::RequestFocusIntent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, invokeResult: unknown | null): upstream4.KeyEventResult;
    invoke(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::RequestFocusIntent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    addActionListener(listener: ((action: upstream0.Action<upstream5.Intent>) => void)): void;
    removeActionListener(listener: ((action: upstream0.Action<upstream5.Intent>) => void)): void;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream7.DiagnosticsTreeStyle | null | undefined;
    }): upstream6.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toString(options?: {
        minLevel?: upstream9.DiagnosticLevel | undefined;
    }): string;
    get callingAction(): upstream0.Action<upstream1.RequestFocusIntent> | null;
    get intentType(): upstream3.Type;
    get isActionEnabled(): boolean;
}
export declare abstract class _RequestFocusActionNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RequestFocusAction>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RequestFocusAction;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RequestFocusAction", readonly [], false];
    constructor();
}
export declare namespace _RequestFocusActionFactory {
    function implement(args: [], implementation: {}): RequestFocusAction;
}
declare const _RequestFocusActionBinding: typeof _RequestFocusActionFactory & (new () => _RequestFocusActionNative);
export declare const RequestFocusAction: typeof _RequestFocusActionBinding & _FlaxInstanceType<RequestFocusAction> & _FlaxDartType<RequestFocusAction, readonly ["class", "flax.core/sdk_widgets#type:RequestFocusAction", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "callingAction" | "intentType" | "isActionEnabled" | "isEnabled" | "consumesKey" | "toKeyEventResult" | "invoke" | "addActionListener" | "removeActionListener" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::RequestFocusAction" | "__flaxBound:package:flutter/src/widgets/actions.dart::Action" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

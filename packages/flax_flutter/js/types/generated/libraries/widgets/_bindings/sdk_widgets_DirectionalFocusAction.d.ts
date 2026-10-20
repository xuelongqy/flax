import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Action';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Action';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_DirectionalFocusIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_DirectionalFocusIntent';
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
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DirectionalFocusAction extends Omit<upstream0.Action<upstream1.DirectionalFocusIntent>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Action<upstream1.DirectionalFocusIntent>>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::DirectionalFocusAction": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/actions.dart::Action": readonly [upstream1.DirectionalFocusIntent];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __DirectionalFocusAction: unique symbol;
    readonly [_flaxDartTypeValue]: DirectionalFocusAction;
    readonly callingAction: upstream0.Action<upstream1.DirectionalFocusIntent> | null;
    readonly intentType: upstream3.Type;
    readonly isActionEnabled: boolean;
    isEnabled(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::DirectionalFocusIntent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): boolean;
    consumesKey(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::DirectionalFocusIntent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): boolean;
    toKeyEventResult(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::DirectionalFocusIntent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, invokeResult: unknown | null): upstream4.KeyEventResult;
    invoke(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::DirectionalFocusIntent": readonly [];
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
export declare function _DirectionalFocusActionFactory(): DirectionalFocusAction;
export declare namespace _DirectionalFocusActionFactory {
    function forTextField(): DirectionalFocusAction;
}
export interface _DirectionalFocusActionNative extends DirectionalFocusAction {
    readonly [_flaxDartTypeValue]: _DirectionalFocusActionNative;
    readonly [_flaxDartConstructors]?: {
        "": () => void;
        "forTextField": () => void;
    };
    isEnabled(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::DirectionalFocusIntent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): boolean;
    consumesKey(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::DirectionalFocusIntent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): boolean;
    toKeyEventResult(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::DirectionalFocusIntent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, invokeResult: unknown | null): upstream4.KeyEventResult;
    invoke(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::DirectionalFocusIntent": readonly [];
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
    get callingAction(): upstream0.Action<upstream1.DirectionalFocusIntent> | null;
    get intentType(): upstream3.Type;
    get isActionEnabled(): boolean;
}
export declare abstract class _DirectionalFocusActionNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DirectionalFocusAction>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DirectionalFocusAction;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DirectionalFocusAction", readonly [], false];
    constructor();
    constructor(call: _FlaxProxySuper<_DirectionalFocusActionNative>);
}
export declare namespace _DirectionalFocusActionFactory {
    function implement(args: [], implementation: {}): DirectionalFocusAction;
}
declare const _DirectionalFocusActionBinding: typeof _DirectionalFocusActionFactory & (new () => _DirectionalFocusActionNative) & (new (call: _FlaxProxySuper<_DirectionalFocusActionNative>) => _DirectionalFocusActionNative);
export declare const DirectionalFocusAction: typeof _DirectionalFocusActionBinding & _FlaxInstanceType<DirectionalFocusAction> & _FlaxDartType<DirectionalFocusAction, readonly ["class", "flax.core/sdk_widgets#type:DirectionalFocusAction", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "callingAction" | "intentType" | "isActionEnabled" | "isEnabled" | "consumesKey" | "toKeyEventResult" | "invoke" | "addActionListener" | "removeActionListener" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::DirectionalFocusAction" | "__flaxBound:package:flutter/src/widgets/actions.dart::Action" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

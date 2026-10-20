import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ContextAction';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ContextAction';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_PrioritizedIntents';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PrioritizedIntents';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_Action';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Action';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream4 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PrioritizedAction extends Omit<upstream0.ContextAction<upstream1.PrioritizedIntents>, _flaxOwnMembers0>, Omit<upstream2.Action<upstream1.PrioritizedIntents>, _flaxOwnMembers0 | keyof upstream0.ContextAction<upstream1.PrioritizedIntents>>, Omit<upstream3.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.ContextAction<upstream1.PrioritizedIntents> | keyof upstream2.Action<upstream1.PrioritizedIntents>>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/actions.dart::PrioritizedAction": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/actions.dart::ContextAction": readonly [upstream1.PrioritizedIntents];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/actions.dart::Action": readonly [upstream1.PrioritizedIntents];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __PrioritizedAction: unique symbol;
    readonly [_flaxDartTypeValue]: PrioritizedAction;
    readonly callingAction: upstream2.Action<upstream1.PrioritizedIntents> | null;
    readonly intentType: upstream4.Type;
    readonly isActionEnabled: boolean;
    isEnabled(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::PrioritizedIntents": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, context?: upstream5.BuildContext | null): boolean;
    invoke(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::PrioritizedIntents": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, context?: upstream5.BuildContext | null): void;
    consumesKey(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::PrioritizedIntents": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): boolean;
    toKeyEventResult(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::PrioritizedIntents": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, invokeResult: unknown | null): upstream6.KeyEventResult;
    addActionListener(listener: ((action: upstream2.Action<upstream7.Intent>) => void)): void;
    removeActionListener(listener: ((action: upstream2.Action<upstream7.Intent>) => void)): void;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream9.DiagnosticsTreeStyle | null | undefined;
    }): upstream8.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toString(options?: {
        minLevel?: upstream11.DiagnosticLevel | undefined;
    }): string;
}
export declare function _PrioritizedActionFactory(): PrioritizedAction;
export interface _PrioritizedActionNative extends PrioritizedAction {
    readonly [_flaxDartTypeValue]: _PrioritizedActionNative;
    isEnabled(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::PrioritizedIntents": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, context?: upstream5.BuildContext | null): boolean;
    invoke(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::PrioritizedIntents": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, context?: upstream5.BuildContext | null): void;
    consumesKey(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::PrioritizedIntents": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): boolean;
    toKeyEventResult(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::PrioritizedIntents": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, invokeResult: unknown | null): upstream6.KeyEventResult;
    addActionListener(listener: ((action: upstream2.Action<upstream7.Intent>) => void)): void;
    removeActionListener(listener: ((action: upstream2.Action<upstream7.Intent>) => void)): void;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream9.DiagnosticsTreeStyle | null | undefined;
    }): upstream8.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toString(options?: {
        minLevel?: upstream11.DiagnosticLevel | undefined;
    }): string;
    get callingAction(): upstream2.Action<upstream1.PrioritizedIntents> | null;
    get intentType(): upstream4.Type;
    get isActionEnabled(): boolean;
}
export declare abstract class _PrioritizedActionNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PrioritizedAction>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PrioritizedAction;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:PrioritizedAction", readonly [], false];
    constructor();
}
export declare namespace _PrioritizedActionFactory {
    function implement(args: [], implementation: {}): PrioritizedAction;
}
declare const _PrioritizedActionBinding: typeof _PrioritizedActionFactory & (new () => _PrioritizedActionNative);
export declare const PrioritizedAction: typeof _PrioritizedActionBinding & _FlaxInstanceType<PrioritizedAction> & _FlaxDartType<PrioritizedAction, readonly ["class", "flax.core/sdk_widgets#type:PrioritizedAction", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "callingAction" | "intentType" | "isActionEnabled" | "isEnabled" | "invoke" | "consumesKey" | "toKeyEventResult" | "addActionListener" | "removeActionListener" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/actions.dart::PrioritizedAction" | "__flaxBound:package:flutter/src/widgets/actions.dart::ContextAction" | "__flaxBound:package:flutter/src/widgets/actions.dart::Action" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

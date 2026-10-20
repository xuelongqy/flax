import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ContextAction';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ContextAction';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollIntent';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_Action';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Action';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream4 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollableState';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/sdk_widgets_Scrollable';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ScrollAction extends Omit<upstream0.ContextAction<upstream1.ScrollIntent>, _flaxOwnMembers0>, Omit<upstream2.Action<upstream1.ScrollIntent>, _flaxOwnMembers0 | keyof upstream0.ContextAction<upstream1.ScrollIntent>>, Omit<upstream3.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.ContextAction<upstream1.ScrollIntent> | keyof upstream2.Action<upstream1.ScrollIntent>>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollAction": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/actions.dart::ContextAction": readonly [upstream1.ScrollIntent];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/actions.dart::Action": readonly [upstream1.ScrollIntent];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __ScrollAction: unique symbol;
    readonly [_flaxDartTypeValue]: ScrollAction;
    readonly callingAction: upstream2.Action<upstream1.ScrollIntent> | null;
    readonly intentType: upstream4.Type;
    readonly isActionEnabled: boolean;
    isEnabled(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollIntent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, context?: upstream6.BuildContext | null): boolean;
    invoke(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollIntent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, context?: upstream6.BuildContext | null): void;
    consumesKey(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollIntent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): boolean;
    toKeyEventResult(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollIntent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, invokeResult: unknown | null): upstream7.KeyEventResult;
    addActionListener(listener: ((action: upstream2.Action<upstream8.Intent>) => void)): void;
    removeActionListener(listener: ((action: upstream2.Action<upstream8.Intent>) => void)): void;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream10.DiagnosticsTreeStyle | null | undefined;
    }): upstream9.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toString(options?: {
        minLevel?: upstream12.DiagnosticLevel | undefined;
    }): string;
}
export declare function _ScrollActionFactory(): ScrollAction;
export interface _ScrollActionNative extends ScrollAction {
    readonly [_flaxDartTypeValue]: _ScrollActionNative;
    isEnabled(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollIntent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, context?: upstream6.BuildContext | null): boolean;
    invoke(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollIntent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, context?: upstream6.BuildContext | null): void;
    consumesKey(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollIntent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): boolean;
    toKeyEventResult(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollIntent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, invokeResult: unknown | null): upstream7.KeyEventResult;
    addActionListener(listener: ((action: upstream2.Action<upstream8.Intent>) => void)): void;
    removeActionListener(listener: ((action: upstream2.Action<upstream8.Intent>) => void)): void;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream10.DiagnosticsTreeStyle | null | undefined;
    }): upstream9.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toString(options?: {
        minLevel?: upstream12.DiagnosticLevel | undefined;
    }): string;
    get callingAction(): upstream2.Action<upstream1.ScrollIntent> | null;
    get intentType(): upstream4.Type;
    get isActionEnabled(): boolean;
}
export declare abstract class _ScrollActionNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScrollAction>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ScrollAction;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ScrollAction", readonly [], false];
    constructor();
}
export declare namespace _ScrollActionFactory {
    function implement(args: [], implementation: {}): ScrollAction;
}
declare const _ScrollActionBinding: typeof _ScrollActionFactory & (new () => _ScrollActionNative);
export declare namespace _ScrollActionFactory {
    function getDirectionalIncrement(state: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scrollable.dart::ScrollableState": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream13.Scrollable];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_context.dart::ScrollContext": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin": readonly [upstream13.Scrollable];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorationMixin": readonly [upstream13.Scrollable];
    }>, intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollIntent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): number;
}
export declare const ScrollAction: typeof _ScrollActionBinding & _FlaxInstanceType<ScrollAction> & _FlaxDartType<ScrollAction, readonly ["class", "flax.core/sdk_widgets#type:ScrollAction", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "callingAction" | "intentType" | "isActionEnabled" | "isEnabled" | "invoke" | "consumesKey" | "toKeyEventResult" | "addActionListener" | "removeActionListener" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollAction" | "__flaxBound:package:flutter/src/widgets/actions.dart::ContextAction" | "__flaxBound:package:flutter/src/widgets/actions.dart::Action" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type { DartRecord as _FlaxDartRecord } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Action';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ActionDispatcher extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/actions.dart::ActionDispatcher": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __ActionDispatcher: unique symbol;
    readonly [_flaxDartTypeValue]: ActionDispatcher;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream1.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream3.DiagnosticsTreeStyle | null | undefined;
    }): upstream2.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    invokeAction(action: Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Action": readonly [upstream6.Intent];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, context?: upstream7.BuildContext | null): unknown | null;
    invokeActionIfEnabled(action: Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Action": readonly [upstream6.Intent];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, context?: upstream7.BuildContext | null): _FlaxDartRecord<{
        readonly $1: boolean;
        readonly $2: unknown | null;
    }>;
}
export declare function _ActionDispatcherFactory(): ActionDispatcher;
export interface _ActionDispatcherNative extends ActionDispatcher {
    readonly [_flaxDartTypeValue]: _ActionDispatcherNative;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream1.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream3.DiagnosticsTreeStyle | null | undefined;
    }): upstream2.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    invokeAction(action: Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Action": readonly [upstream6.Intent];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, context?: upstream7.BuildContext | null): unknown | null;
    invokeActionIfEnabled(action: Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Action": readonly [upstream6.Intent];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, context?: upstream7.BuildContext | null): _FlaxDartRecord<{
        readonly $1: boolean;
        readonly $2: unknown | null;
    }>;
}
export declare abstract class _ActionDispatcherNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ActionDispatcher>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ActionDispatcher;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ActionDispatcher", readonly [], false];
    constructor();
}
export declare namespace _ActionDispatcherFactory {
    function implement(args: [], implementation: {}): ActionDispatcher;
}
declare const _ActionDispatcherBinding: typeof _ActionDispatcherFactory & (new () => _ActionDispatcherNative);
export declare const ActionDispatcher: typeof _ActionDispatcherBinding & _FlaxInstanceType<ActionDispatcher> & _FlaxDartType<ActionDispatcher, readonly ["class", "flax.core/sdk_widgets#type:ActionDispatcher", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "invokeAction" | "invokeActionIfEnabled" | "__flaxBound:package:flutter/src/widgets/actions.dart::ActionDispatcher" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_Action';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Action';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CallbackAction<T extends upstream0.Intent = upstream0.Intent> extends Omit<upstream1.Action<T>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream1.Action<T>>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/actions.dart::CallbackAction": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/actions.dart::Action": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __CallbackAction: unique symbol;
    readonly [_flaxDartTypeValue]: CallbackAction<T>;
}
export interface CallbackAction<T extends upstream0.Intent = upstream0.Intent> {
    readonly [_flaxDartTypeValue]: CallbackAction<T>;
    isEnabled(intent: (T | DartInput<T>)): boolean;
    consumesKey(intent: (T | DartInput<T>)): boolean;
    toKeyEventResult(intent: (T | DartInput<T>), invokeResult: unknown | null): upstream4.KeyEventResult;
    invoke(intent: (T | DartInput<T>)): unknown | null;
    addActionListener(listener: ((action: upstream1.Action<upstream0.Intent>) => void)): void;
    removeActionListener(listener: ((action: upstream1.Action<upstream0.Intent>) => void)): void;
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
    get onInvoke(): ((intent: (T | DartInput<T>)) => unknown | null);
    get callingAction(): upstream1.Action<T> | null;
    get intentType(): upstream3.Type;
    get isActionEnabled(): boolean;
}
export declare abstract class CallbackAction<T extends upstream0.Intent = upstream0.Intent> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CallbackAction<upstream0.Intent>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: CallbackAction<upstream0.Intent>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:CallbackAction", readonly [readonly ["class", "flax.core/sdk_widgets#type:Intent", readonly [], false]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(options: {
        onInvoke: ((intent: upstream0.Intent) => unknown | null);
    });
}
export declare namespace CallbackAction {
    function implement<T extends upstream0.Intent = upstream0.Intent>(args: [options: {
        onInvoke: ((intent: upstream0.Intent) => unknown | null);
    }], implementation: {}): CallbackAction<T>;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "callingAction" | "intentType" | "isActionEnabled" | "onInvoke" | "isEnabled" | "consumesKey" | "toKeyEventResult" | "invoke" | "addActionListener" | "removeActionListener" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/actions.dart::CallbackAction" | "__flaxBound:package:flutter/src/widgets/actions.dart::Action" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Intent] ? (abstract new (options: {
        onInvoke: ((intent: upstream0.Intent) => unknown | null);
    }) => CallbackAction<_Selected0>) & {
        readonly prototype: CallbackAction<_Selected0>;
        implement(args: readonly [options: {
            onInvoke: ((intent: upstream0.Intent) => unknown | null);
        }], implementation: Partial<CallbackAction<_Selected0>>): CallbackAction<_Selected0>;
    } & _FlaxInstanceType<CallbackAction<_Selected0>> & _FlaxDartType<CallbackAction<_Selected0>> : never : never;
}
export {};

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
    readonly callingAction: upstream1.Action<T> | null;
    readonly intentType: upstream3.Type;
    readonly isActionEnabled: boolean;
    readonly onInvoke: ((intent: (T | DartInput<T>)) => unknown | null);
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
}
export declare function _CallbackActionFactory<T extends upstream0.Intent = upstream0.Intent>(options: {
    onInvoke: ((intent: T) => unknown | null);
}): CallbackAction<T>;
export declare function _CallbackActionFactory(options: {
    onInvoke: ((intent: upstream0.Intent) => unknown | null);
}): CallbackAction<upstream0.Intent>;
export interface _CallbackActionNative<T extends upstream0.Intent = upstream0.Intent> extends CallbackAction<T> {
    readonly [_flaxDartTypeValue]: _CallbackActionNative<T>;
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
export declare abstract class _CallbackActionNative<T extends upstream0.Intent = upstream0.Intent> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CallbackAction<upstream0.Intent>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: CallbackAction<upstream0.Intent>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:CallbackAction", readonly [readonly ["class", "flax.core/sdk_widgets#type:Intent", readonly [], false]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(options: {
        onInvoke: ((intent: upstream0.Intent) => unknown | null);
    });
}
export declare namespace _CallbackActionFactory {
    function implement<T extends upstream0.Intent = upstream0.Intent>(args: [options: {
        onInvoke: ((intent: upstream0.Intent) => unknown | null);
    }], implementation: {}): CallbackAction<T>;
}
declare const _CallbackActionBinding: typeof _CallbackActionFactory & (new <T extends upstream0.Intent = upstream0.Intent>(options: {
    onInvoke: ((intent: upstream0.Intent) => unknown | null);
}) => _CallbackActionNative<T>);
export declare const CallbackAction: typeof _CallbackActionBinding & _FlaxInstanceType<CallbackAction<upstream0.Intent>> & _FlaxDartType<CallbackAction<upstream0.Intent>, readonly ["class", "flax.core/sdk_widgets#type:CallbackAction", readonly [readonly ["class", "flax.core/sdk_widgets#type:Intent", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "callingAction" | "intentType" | "isActionEnabled" | "onInvoke" | "isEnabled" | "consumesKey" | "toKeyEventResult" | "invoke" | "addActionListener" | "removeActionListener" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/actions.dart::CallbackAction" | "__flaxBound:package:flutter/src/widgets/actions.dart::Action" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Intent] ? (new (options: {
        onInvoke: ((intent: upstream0.Intent) => unknown | null);
    }) => _CallbackActionNative<_Selected0>) & {
        (options: {
            onInvoke: ((intent: _Selected0) => unknown | null);
        }): _CallbackActionNative<_Selected0>;
        readonly prototype: _CallbackActionNative<_Selected0>;
        implement(args: readonly [options: {
            onInvoke: ((intent: upstream0.Intent) => unknown | null);
        }], implementation: Partial<_CallbackActionNative<_Selected0>>): _CallbackActionNative<_Selected0>;
    } & _FlaxInstanceType<_CallbackActionNative<_Selected0>> & _FlaxDartType<_CallbackActionNative<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Intent] ? (new (options: {
        onInvoke: ((intent: upstream0.Intent) => unknown | null);
    }) => _CallbackActionNative<_Selected0>) & {
        (options: {
            onInvoke: ((intent: _Selected0) => unknown | null);
        }): _CallbackActionNative<_Selected0>;
        readonly prototype: _CallbackActionNative<_Selected0>;
        implement(args: readonly [options: {
            onInvoke: ((intent: upstream0.Intent) => unknown | null);
        }], implementation: Partial<_CallbackActionNative<_Selected0>>): _CallbackActionNative<_Selected0>;
    } & _FlaxInstanceType<_CallbackActionNative<_Selected0>> & _FlaxDartType<_CallbackActionNative<_Selected0>> : never : never;
}
export {};

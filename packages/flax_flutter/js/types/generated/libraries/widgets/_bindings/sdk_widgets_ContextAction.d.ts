import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_Action';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Action';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PrioritizedIntents';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollIntent';
import type * as upstream5 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ContextAction<T extends upstream0.Intent = upstream0.Intent> extends Omit<upstream1.Action<T>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream1.Action<T>>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/actions.dart::ContextAction": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/actions.dart::Action": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __ContextAction: unique symbol;
    readonly [_flaxDartTypeValue]: ContextAction<T>;
}
export interface ContextAction<T extends upstream0.Intent = upstream0.Intent> {
    readonly [_flaxDartTypeValue]: ContextAction<T>;
    isEnabled(intent: (T | DartInput<T>), context?: upstream6.BuildContext | null): boolean;
    consumesKey(intent: (T | DartInput<T>)): boolean;
    toKeyEventResult(intent: (T | DartInput<T>), invokeResult: unknown | null): upstream7.KeyEventResult;
    addActionListener(listener: ((action: upstream1.Action<upstream0.Intent>) => void)): void;
    removeActionListener(listener: ((action: upstream1.Action<upstream0.Intent>) => void)): void;
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
    get callingAction(): upstream1.Action<T> | null;
    get intentType(): upstream5.Type;
    get isActionEnabled(): boolean;
}
export declare abstract class ContextAction<T extends upstream0.Intent = upstream0.Intent> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ContextAction<upstream0.Intent>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ContextAction<upstream0.Intent>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ContextAction", readonly [readonly ["class", "flax.core/sdk_widgets#type:Intent", readonly [], false]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor();
    abstract invoke(intent: (T | DartInput<T>), context?: upstream6.BuildContext | null): unknown | null;
}
export declare namespace ContextAction {
    function implement<T extends upstream0.Intent = upstream0.Intent>(args: [], implementation: {
        invoke: ((intent: T, context?: upstream6.BuildContext | null) => unknown | null);
    }): ContextAction<T>;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "callingAction" | "intentType" | "isActionEnabled" | "isEnabled" | "consumesKey" | "toKeyEventResult" | "invoke" | "addActionListener" | "removeActionListener" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/actions.dart::ContextAction" | "__flaxBound:package:flutter/src/widgets/actions.dart::Action" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Intent] ? (abstract new () => ContextAction<_Selected0>) & {
        readonly prototype: ContextAction<_Selected0>;
        implement(args: readonly [], implementation: Partial<ContextAction<_Selected0>>): ContextAction<_Selected0>;
    } & _FlaxInstanceType<ContextAction<_Selected0>> & _FlaxDartType<ContextAction<_Selected0>> : never : never;
}
export {};

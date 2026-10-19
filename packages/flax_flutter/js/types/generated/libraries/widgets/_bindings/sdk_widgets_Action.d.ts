import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/widgets/_bindings/sdk_widgets_VoidCallbackIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ActivateIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SelectIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_DismissIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PrioritizedIntents';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TransposeCharactersIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ReplaceTextIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_UpdateSelectionIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RequestFocusIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_NextFocusIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PreviousFocusIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_DirectionalFocusIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollIntent';
import type * as upstream15 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream17 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream18 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream20 from '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Action<T extends upstream0.Intent = upstream0.Intent> extends Omit<upstream1.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/actions.dart::Action": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __Action: unique symbol;
    readonly [_flaxDartTypeValue]: Action<T>;
}
export interface Action<T extends upstream0.Intent = upstream0.Intent> {
    readonly [_flaxDartTypeValue]: Action<T>;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream16.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream18.DiagnosticsTreeStyle | null | undefined;
    }): upstream17.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    isEnabled(intent: (T | DartInput<T>)): boolean;
    consumesKey(intent: (T | DartInput<T>)): boolean;
    toKeyEventResult(intent: (T | DartInput<T>), invokeResult: unknown | null): upstream20.KeyEventResult;
    addActionListener(listener: ((action: Action<upstream0.Intent>) => void)): void;
    removeActionListener(listener: ((action: Action<upstream0.Intent>) => void)): void;
    get callingAction(): Action<T> | null;
    get intentType(): upstream15.Type;
    get isActionEnabled(): boolean;
}
export declare abstract class Action<T extends upstream0.Intent = upstream0.Intent> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Action<upstream0.Intent>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Action<upstream0.Intent>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:Action", readonly [readonly ["class", "flax.core/sdk_widgets#type:Intent", readonly [], false]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor();
    abstract invoke(intent: (T | DartInput<T>)): unknown | null;
}
export declare namespace Action {
    function implement<T extends upstream0.Intent = upstream0.Intent>(args: [], implementation: {
        invoke: ((intent: T) => unknown | null);
    }): Action<T>;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "callingAction" | "intentType" | "isActionEnabled" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "isEnabled" | "consumesKey" | "toKeyEventResult" | "invoke" | "addActionListener" | "removeActionListener" | "__flaxBound:package:flutter/src/widgets/actions.dart::Action" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Intent] ? (abstract new () => Action<_Selected0>) & {
        readonly prototype: Action<_Selected0>;
        implement(args: readonly [], implementation: Partial<Action<_Selected0>>): Action<_Selected0>;
    } & _FlaxInstanceType<Action<_Selected0>> & _FlaxDartType<Action<_Selected0>> : never : never;
}
export {};

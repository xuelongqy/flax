import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartMap, type DartMapInput, type DartInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_ActionDispatcher';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ActionDispatcher';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_Action';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Action';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream5 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Actions extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/actions.dart::Actions": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __Actions: unique symbol;
    readonly [_flaxDartTypeValue]: Actions;
    readonly dispatcher: upstream2.ActionDispatcher | null;
    readonly actions: DartMap<upstream5.Type, upstream3.Action<upstream4.Intent>>;
    readonly child: Widget;
    readonly key: upstream1.Key | null;
    createState(): upstream7.State<Actions>;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    createElement(): upstream9.StatefulElement;
    toStringShort(): string;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream10.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream10.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream12.DiagnosticsTreeStyle | null | undefined;
    }): upstream11.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream11.DiagnosticsNode>;
}
export declare function _ActionsFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    dispatcher?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::ActionDispatcher": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    actions: DartMapInput<upstream5.Type, upstream3.Action<upstream4.Intent>, Readonly<{
        "__flaxBound:dart:core::Type": readonly [];
    }>, Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Action": readonly [upstream4.Intent];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>;
    child: Widget;
}): Actions;
export declare namespace _ActionsFactory {
    function _flaxDefault_handler<T extends upstream4.Intent = upstream4.Intent>(context: upstream6.BuildContext, intent: (T | DartInput<T>)): (() => void) | null;
    export const handler: _FlaxDartCallable<typeof _flaxDefault_handler, _FlaxSignature0>;
    export {};
}
export declare namespace _ActionsFactory {
    function _flaxDefault_find<T extends upstream4.Intent = upstream4.Intent>(context: upstream6.BuildContext, options?: {
        intent?: (T | DartInput<T>) | null | undefined;
    }): upstream3.Action<T>;
    export const find: _FlaxDartCallable<typeof _flaxDefault_find, _FlaxSignature1>;
    export {};
}
export declare namespace _ActionsFactory {
    function _flaxDefault_maybeFind<T extends upstream4.Intent = upstream4.Intent>(context: upstream6.BuildContext, options?: {
        intent?: (T | DartInput<T>) | null | undefined;
    }): upstream3.Action<T> | null;
    export const maybeFind: _FlaxDartCallable<typeof _flaxDefault_maybeFind, _FlaxSignature2>;
    export {};
}
export declare namespace _ActionsFactory {
    function of(context: upstream6.BuildContext): upstream2.ActionDispatcher;
}
export declare namespace _ActionsFactory {
    function _flaxDefault_invoke<T extends upstream4.Intent = upstream4.Intent>(context: upstream6.BuildContext, intent: (T | DartInput<T>)): unknown | null;
    export const invoke: _FlaxDartCallable<typeof _flaxDefault_invoke, _FlaxSignature3>;
    export {};
}
export declare namespace _ActionsFactory {
    function _flaxDefault_maybeInvoke<T extends upstream4.Intent = upstream4.Intent>(context: upstream6.BuildContext, intent: (T | DartInput<T>)): unknown | null;
    export const maybeInvoke: _FlaxDartCallable<typeof _flaxDefault_maybeInvoke, _FlaxSignature4>;
    export {};
}
export declare const Actions: typeof _ActionsFactory & _FlaxInstanceType<Actions> & _FlaxDartType<Actions, readonly ["class", "flax.core/sdk_widgets#type:Actions", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "dispatcher" | "actions" | "child" | "key" | "createState" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/actions.dart::Actions" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream4.Intent] ? (context: upstream6.BuildContext, intent: (_Selected0 | DartInput<_Selected0>)) => (() => void) | null : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream4.Intent] ? (context: upstream6.BuildContext, options?: {
        intent?: (_Selected0 | DartInput<_Selected0>) | null | undefined;
    }) => upstream3.Action<_Selected0> : never : never;
}
interface _FlaxSignature2 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream4.Intent] ? (context: upstream6.BuildContext, options?: {
        intent?: (_Selected0 | DartInput<_Selected0>) | null | undefined;
    }) => upstream3.Action<_Selected0> | null : never : never;
}
interface _FlaxSignature3 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream4.Intent] ? (context: upstream6.BuildContext, intent: (_Selected0 | DartInput<_Selected0>)) => unknown | null : never : never;
}
interface _FlaxSignature4 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream4.Intent] ? (context: upstream6.BuildContext, intent: (_Selected0 | DartInput<_Selected0>)) => unknown | null : never : never;
}
export {};

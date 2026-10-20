// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_Action';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Action';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_PrioritizedIntents';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PrioritizedIntents';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollIntent';
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
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { _flaxMemberParameters62, _flaxMemberParameters10, _flaxMemberParameters11, _flaxMemberParameters12, _flaxMemberParameters2, _flaxMemberParameters8, _flaxMemberParameters5, _flaxMemberParameters9 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ContextAction<T extends upstream0.Intent = upstream0.Intent> extends Omit<upstream1.Action<T>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream1.Action<T>>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::ContextAction": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Action": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __ContextAction: unique symbol;
readonly [_flaxDartTypeValue]: ContextAction<T>;

}
defineObject("flax.core/sdk_widgets#type:ContextAction", ["callingAction","intentType","isActionEnabled"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ContextAction", "object", {"isEnabled":_flaxMemberParameters62,"consumesKey":_flaxMemberParameters10,"toKeyEventResult":_flaxMemberParameters11,"invoke":_flaxMemberParameters62,"addActionListener":_flaxMemberParameters12,"removeActionListener":_flaxMemberParameters12,"toStringShort":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters8,"debugFillProperties":_flaxMemberParameters5,"toString":_flaxMemberParameters9}, {}), []);
const _ContextActionProxy = {type: "flax.core/sdk_widgets#type:ContextAction", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"isEnabled":_flaxMemberParameters62,"consumesKey":_flaxMemberParameters10,"toKeyEventResult":_flaxMemberParameters11,"invoke":_flaxMemberParameters62,"addActionListener":_flaxMemberParameters12,"removeActionListener":_flaxMemberParameters12,"toStringShort":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters8,"debugFillProperties":_flaxMemberParameters5,"toString":_flaxMemberParameters9}, getters: ["callingAction","intentType","isActionEnabled"], setters: [], contextMembers: [], superMembers: ["get:callingAction","get:intentType","get:isActionEnabled","isEnabled","consumesKey","toKeyEventResult","addActionListener","removeActionListener","toStringShort","toDiagnosticsNode","debugFillProperties","toString"]} as const;
export interface ContextAction<T extends upstream0.Intent = upstream0.Intent> {
readonly [_flaxDartTypeValue]: ContextAction<T>;

isEnabled(intent: (T | DartInput<T>), context?: upstream6.BuildContext | null): boolean;
consumesKey(intent: (T | DartInput<T>)): boolean;
toKeyEventResult(intent: (T | DartInput<T>), invokeResult: unknown | null): upstream7.KeyEventResult;
addActionListener(listener: ((action: upstream1.Action<upstream0.Intent>) => void)): void;
removeActionListener(listener: ((action: upstream1.Action<upstream0.Intent>) => void)): void;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream9.DiagnosticsTreeStyle | null | undefined}): upstream8.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream11.DiagnosticLevel | undefined}): string;
get callingAction(): upstream1.Action<T> | null;
get intentType(): upstream5.Type;
get isActionEnabled(): boolean;
}
export abstract class ContextAction<T extends upstream0.Intent = upstream0.Intent> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ContextAction<upstream0.Intent>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ContextAction<upstream0.Intent>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ContextAction", readonly [readonly ["class", "flax.core/sdk_widgets#type:Intent", readonly [], false]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor() { super(_ContextActionProxy, Array.from(arguments)); }
abstract invoke(intent: (T | DartInput<T>), context?: upstream6.BuildContext | null): unknown | null;
}
_flaxDefineProxyBase(ContextAction.prototype, _ContextActionProxy);
export namespace ContextAction { export function implement<T extends upstream0.Intent = upstream0.Intent>(args: [], implementation: {invoke: ((intent: T, context?: upstream6.BuildContext | null) => unknown | null)}): ContextAction<T> {
return constructProxy(_ContextActionProxy, args, implementation) as ContextAction<T>; } }
_flaxBindInstanceType<ContextAction<upstream0.Intent>, typeof ContextAction>(ContextAction, "flax.core/sdk_widgets#type:ContextAction", ["flax.core/sdk_widgets#type:Action","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
_flaxDefineDartTypes(ContextAction, "flax.core/sdk_widgets#type:ContextAction", {...{"category":"object","constructors":{}}, proxy: _ContextActionProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "callingAction" | "intentType" | "isActionEnabled" | "isEnabled" | "consumesKey" | "toKeyEventResult" | "invoke" | "addActionListener" | "removeActionListener" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/actions.dart::ContextAction" | "__flaxBound:package:flutter/src/widgets/actions.dart::Action" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Intent] ? (abstract new () => ContextAction<_Selected0>) & {readonly prototype: ContextAction<_Selected0>;implement(args: readonly [], implementation: Partial<ContextAction<_Selected0>>): ContextAction<_Selected0>;} & _FlaxInstanceType<ContextAction<_Selected0>> & _FlaxDartType<ContextAction<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Intent] ? (abstract new () => ContextAction<_Selected0>) & {readonly prototype: ContextAction<_Selected0>;implement(args: readonly [], implementation: Partial<ContextAction<_Selected0>>): ContextAction<_Selected0>;} & _FlaxInstanceType<ContextAction<_Selected0>> & _FlaxDartType<ContextAction<_Selected0>> : never : never; }

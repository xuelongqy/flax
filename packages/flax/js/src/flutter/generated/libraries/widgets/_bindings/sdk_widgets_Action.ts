// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_VoidCallbackIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_VoidCallbackIntent';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_ActivateIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ActivateIntent';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_SelectIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SelectIntent';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_DismissIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_DismissIntent';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_PrioritizedIntents';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PrioritizedIntents';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_TransposeCharactersIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TransposeCharactersIntent';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_ReplaceTextIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ReplaceTextIntent';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/sdk_widgets_UpdateSelectionIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_UpdateSelectionIntent';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/sdk_widgets_RequestFocusIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RequestFocusIntent';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/sdk_widgets_NextFocusIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_NextFocusIntent';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/sdk_widgets_PreviousFocusIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PreviousFocusIntent';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/sdk_widgets_DirectionalFocusIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_DirectionalFocusIntent';
import type * as upstream14 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollIntent';
import type * as upstream15 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream17 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream18 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream19 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream20 from '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"minLevel"}] as const;
const _flaxMemberParameters2 = [{"name":"name"},{"name":"style"}] as const;
const _flaxMemberParameters3 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"intent","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"intent","required":true,"positional":true},{"name":"invokeResult","required":true,"positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"listener","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Action<T extends upstream0.Intent = upstream0.Intent> extends Omit<upstream1.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Action": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __Action: unique symbol;
readonly [_flaxDartTypeValue]: Action<T>;

}
defineObject("flax.core/sdk_widgets#type:Action", ["callingAction","intentType","isActionEnabled"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:Action", "object", {"toStringShort":_flaxMemberParameters0,"toString":_flaxMemberParameters1,"toDiagnosticsNode":_flaxMemberParameters2,"debugFillProperties":_flaxMemberParameters3,"isEnabled":_flaxMemberParameters4,"consumesKey":_flaxMemberParameters4,"toKeyEventResult":_flaxMemberParameters5,"invoke":_flaxMemberParameters4,"addActionListener":_flaxMemberParameters6,"removeActionListener":_flaxMemberParameters6}, {}), []);
const _ActionProxy = {type: "flax.core/sdk_widgets#type:Action", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"toStringShort":_flaxMemberParameters0,"toString":_flaxMemberParameters1,"toDiagnosticsNode":_flaxMemberParameters2,"debugFillProperties":_flaxMemberParameters3,"isEnabled":_flaxMemberParameters4,"consumesKey":_flaxMemberParameters4,"toKeyEventResult":_flaxMemberParameters5,"invoke":_flaxMemberParameters4,"addActionListener":_flaxMemberParameters6,"removeActionListener":_flaxMemberParameters6}, getters: ["callingAction","intentType","isActionEnabled"], setters: [], contextMembers: [], superMembers: ["get:callingAction","get:intentType","get:isActionEnabled","toStringShort","toString","toDiagnosticsNode","debugFillProperties","isEnabled","consumesKey","toKeyEventResult","addActionListener","removeActionListener"]} as const;
export interface Action<T extends upstream0.Intent = upstream0.Intent> {
readonly [_flaxDartTypeValue]: Action<T>;

toStringShort(): string;
toString(options?: {minLevel?: upstream16.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream18.DiagnosticsTreeStyle | null | undefined}): upstream17.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
isEnabled(intent: (T | DartInput<T>)): boolean;
consumesKey(intent: (T | DartInput<T>)): boolean;
toKeyEventResult(intent: (T | DartInput<T>), invokeResult: unknown | null): upstream20.KeyEventResult;
addActionListener(listener: ((action: Action<upstream0.Intent>) => void)): void;
removeActionListener(listener: ((action: Action<upstream0.Intent>) => void)): void;
get callingAction(): Action<T> | null;
get intentType(): upstream15.Type;
get isActionEnabled(): boolean;
}
export abstract class Action<T extends upstream0.Intent = upstream0.Intent> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Action<upstream0.Intent>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Action<upstream0.Intent>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:Action", readonly [readonly ["class", "flax.core/sdk_widgets#type:Intent", readonly [], false]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor() { super(_ActionProxy, Array.from(arguments)); }
abstract invoke(intent: (T | DartInput<T>)): unknown | null;
}
_flaxDefineProxyBase(Action.prototype, _ActionProxy);
export namespace Action { export function implement<T extends upstream0.Intent = upstream0.Intent>(args: [], implementation: {invoke: ((intent: T) => unknown | null)}): Action<T> {
return constructProxy(_ActionProxy, args, implementation) as Action<T>; } }
_flaxBindInstanceType<Action<upstream0.Intent>, typeof Action>(Action, "flax.core/sdk_widgets#type:Action", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
_flaxDefineDartTypes(Action, "flax.core/sdk_widgets#type:Action", {...{"category":"object","constructors":{}}, proxy: _ActionProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "callingAction" | "intentType" | "isActionEnabled" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "isEnabled" | "consumesKey" | "toKeyEventResult" | "invoke" | "addActionListener" | "removeActionListener" | "__flaxBound:package:flutter/src/widgets/actions.dart::Action" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Intent] ? (abstract new () => Action<_Selected0>) & {readonly prototype: Action<_Selected0>;implement(args: readonly [], implementation: Partial<Action<_Selected0>>): Action<_Selected0>;} & _FlaxInstanceType<Action<_Selected0>> & _FlaxDartType<Action<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Intent] ? (abstract new () => Action<_Selected0>) & {readonly prototype: Action<_Selected0>;implement(args: readonly [], implementation: Partial<Action<_Selected0>>): Action<_Selected0>;} & _FlaxInstanceType<Action<_Selected0>> & _FlaxDartType<Action<_Selected0>> : never : never; }

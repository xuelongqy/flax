// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
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
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { _flaxMemberParameters10, _flaxMemberParameters11, _flaxMemberParameters12, _flaxMemberParameters2, _flaxMemberParameters8, _flaxMemberParameters5, _flaxMemberParameters9, _flaxMemberParameters53 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CallbackAction<T extends upstream0.Intent = upstream0.Intent> extends Omit<upstream1.Action<T>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream1.Action<T>>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::CallbackAction": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Action": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __CallbackAction: unique symbol;
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
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream8.DiagnosticLevel | undefined}): string;
}
defineObject("flax.core/sdk_widgets#type:CallbackAction", ["callingAction","intentType","isActionEnabled","onInvoke"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:CallbackAction", "object", {"isEnabled":_flaxMemberParameters10,"consumesKey":_flaxMemberParameters10,"toKeyEventResult":_flaxMemberParameters11,"invoke":_flaxMemberParameters10,"addActionListener":_flaxMemberParameters12,"removeActionListener":_flaxMemberParameters12,"toStringShort":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters8,"debugFillProperties":_flaxMemberParameters5,"toString":_flaxMemberParameters9}, {}), []);
export function _CallbackActionFactory<T extends upstream0.Intent = upstream0.Intent>(options: { onInvoke: ((intent: T) => unknown | null) }): CallbackAction<T>;
export function _CallbackActionFactory(options: { onInvoke: ((intent: upstream0.Intent) => unknown | null) }): CallbackAction<upstream0.Intent>;
export function _CallbackActionFactory(options: Record<string, unknown>): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:CallbackAction", "", [{"name":"onInvoke","required":true}], [], options) as CallbackAction<upstream0.Intent>;
}
const _CallbackActionProxy = {type: "flax.core/sdk_widgets#type:CallbackAction", parameters: _flaxMemberParameters53, constructors: {"": _flaxMemberParameters53}, methods: {"isEnabled":_flaxMemberParameters10,"consumesKey":_flaxMemberParameters10,"toKeyEventResult":_flaxMemberParameters11,"invoke":_flaxMemberParameters10,"addActionListener":_flaxMemberParameters12,"removeActionListener":_flaxMemberParameters12,"toStringShort":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters8,"debugFillProperties":_flaxMemberParameters5,"toString":_flaxMemberParameters9}, getters: ["onInvoke","callingAction","intentType","isActionEnabled"], setters: [], contextMembers: [], superMembers: ["get:onInvoke","get:callingAction","get:intentType","get:isActionEnabled","isEnabled","consumesKey","toKeyEventResult","invoke","addActionListener","removeActionListener","toStringShort","toDiagnosticsNode","debugFillProperties","toString"]} as const;
export interface _CallbackActionNative<T extends upstream0.Intent = upstream0.Intent> extends CallbackAction<T> {
readonly [_flaxDartTypeValue]: _CallbackActionNative<T>;

isEnabled(intent: (T | DartInput<T>)): boolean;
consumesKey(intent: (T | DartInput<T>)): boolean;
toKeyEventResult(intent: (T | DartInput<T>), invokeResult: unknown | null): upstream4.KeyEventResult;
invoke(intent: (T | DartInput<T>)): unknown | null;
addActionListener(listener: ((action: upstream1.Action<upstream0.Intent>) => void)): void;
removeActionListener(listener: ((action: upstream1.Action<upstream0.Intent>) => void)): void;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream8.DiagnosticLevel | undefined}): string;
get onInvoke(): ((intent: (T | DartInput<T>)) => unknown | null);
get callingAction(): upstream1.Action<T> | null;
get intentType(): upstream3.Type;
get isActionEnabled(): boolean;
}
export abstract class _CallbackActionNative<T extends upstream0.Intent = upstream0.Intent> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CallbackAction<upstream0.Intent>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CallbackAction<upstream0.Intent>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:CallbackAction", readonly [readonly ["class", "flax.core/sdk_widgets#type:Intent", readonly [], false]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(options: {onInvoke: ((intent: upstream0.Intent) => unknown | null)}) { super(_CallbackActionProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_CallbackActionNative.prototype, _CallbackActionProxy);
export namespace _CallbackActionFactory { export function implement<T extends upstream0.Intent = upstream0.Intent>(args: [options: {onInvoke: ((intent: upstream0.Intent) => unknown | null)}], implementation: {}): CallbackAction<T> {
return constructProxy(_CallbackActionProxy, args, implementation) as CallbackAction<T>; } }
const _CallbackActionBinding = _flaxProxyFactory(_CallbackActionFactory, _CallbackActionNative) as unknown as typeof _CallbackActionFactory & (new<T extends upstream0.Intent = upstream0.Intent>(options: {onInvoke: ((intent: upstream0.Intent) => unknown | null)}) => _CallbackActionNative<T>);
export const CallbackAction: typeof _CallbackActionBinding & _FlaxInstanceType<CallbackAction<upstream0.Intent>> & _FlaxDartType<CallbackAction<upstream0.Intent>, readonly ["class", "flax.core/sdk_widgets#type:CallbackAction", readonly [readonly ["class", "flax.core/sdk_widgets#type:Intent", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<CallbackAction<upstream0.Intent>, typeof _CallbackActionBinding>(_CallbackActionBinding, "flax.core/sdk_widgets#type:CallbackAction", ["flax.core/sdk_widgets#type:Action","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _CallbackActionBinding & _FlaxInstanceType<CallbackAction<upstream0.Intent>> & _FlaxDartType<CallbackAction<upstream0.Intent>, readonly ["class", "flax.core/sdk_widgets#type:CallbackAction", readonly [readonly ["class", "flax.core/sdk_widgets#type:Intent", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(CallbackAction, "flax.core/sdk_widgets#type:CallbackAction", {...{"category":"object","constructors":{"":[{"name":"onInvoke","required":true,"positional":false}]}}, proxy: _CallbackActionProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "callingAction" | "intentType" | "isActionEnabled" | "onInvoke" | "isEnabled" | "consumesKey" | "toKeyEventResult" | "invoke" | "addActionListener" | "removeActionListener" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/actions.dart::CallbackAction" | "__flaxBound:package:flutter/src/widgets/actions.dart::Action" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Intent] ? (new (options: {onInvoke: ((intent: upstream0.Intent) => unknown | null)}) => _CallbackActionNative<_Selected0>) & {(options: {onInvoke: ((intent: _Selected0) => unknown | null)}): _CallbackActionNative<_Selected0>;readonly prototype: _CallbackActionNative<_Selected0>;implement(args: readonly [options: {onInvoke: ((intent: upstream0.Intent) => unknown | null)}], implementation: Partial<_CallbackActionNative<_Selected0>>): _CallbackActionNative<_Selected0>;} & _FlaxInstanceType<_CallbackActionNative<_Selected0>> & _FlaxDartType<_CallbackActionNative<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Intent] ? (new (options: {onInvoke: ((intent: upstream0.Intent) => unknown | null)}) => _CallbackActionNative<_Selected0>) & {(options: {onInvoke: ((intent: _Selected0) => unknown | null)}): _CallbackActionNative<_Selected0>;readonly prototype: _CallbackActionNative<_Selected0>;implement(args: readonly [options: {onInvoke: ((intent: upstream0.Intent) => unknown | null)}], implementation: Partial<_CallbackActionNative<_Selected0>>): _CallbackActionNative<_Selected0>;} & _FlaxInstanceType<_CallbackActionNative<_Selected0>> & _FlaxDartType<_CallbackActionNative<_Selected0>> : never : never; }

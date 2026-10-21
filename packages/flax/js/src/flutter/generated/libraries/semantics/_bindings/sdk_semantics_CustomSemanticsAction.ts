// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsAction';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsAction';
import { _flaxMemberParameters13, _flaxMemberParameters14, _flaxMemberParameters2, _flaxMemberParameters15, _flaxMemberParameters16 } from "@flax/flutter/semantics/_bindings/sdk_semantics.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/semantics/_bindings/sdk_semantics.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CustomSemanticsAction extends Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics.dart::CustomSemanticsAction": readonly [] }> { readonly __CustomSemanticsAction: unique symbol;
readonly [_flaxDartTypeValue]: CustomSemanticsAction;

readonly label: string | null;
readonly hint: string | null;
readonly action: upstream0.SemanticsAction | null;
toString(): string;
}
defineObject("flax.core/sdk_semantics#type:CustomSemanticsAction", ["label","hint","action"], [], _flaxBindingMethods("flax.core/sdk_semantics#type:CustomSemanticsAction", "object", {"toString":_flaxMemberParameters2}, {}), []);
export function _CustomSemanticsActionFactory(options: { label: string }): CustomSemanticsAction {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_semantics#type:CustomSemanticsAction", "", [{"name":"label","required":true}], [], options) as CustomSemanticsAction;
}
export namespace _CustomSemanticsActionFactory {
export function overridingAction(options: { hint: string; action: Readonly<{ "__flaxBound:dart:ui::SemanticsAction": readonly [] }> }): CustomSemanticsAction {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_semantics#type:CustomSemanticsAction", "overridingAction", [{"name":"hint","required":true},{"name":"action","required":true}], [], options) as CustomSemanticsAction;
}
}
const _CustomSemanticsActionProxy = {type: "flax.core/sdk_semantics#type:CustomSemanticsAction", parameters: _flaxMemberParameters15, constructors: {"": _flaxMemberParameters15,"overridingAction": _flaxMemberParameters16}, methods: {"toString":_flaxMemberParameters2}, getters: ["label","hint","action"], setters: [], contextMembers: [], superMembers: ["get:label","get:hint","get:action","toString"]} as const;
export interface _CustomSemanticsActionNative extends CustomSemanticsAction {
readonly [_flaxDartTypeValue]: _CustomSemanticsActionNative;
readonly [_flaxDartConstructors]?: {"": (options: {label: string}) => void;"overridingAction": (options: {hint: string; action: Readonly<{ "__flaxBound:dart:ui::SemanticsAction": readonly [] }>}) => void;};

toString(): string;
get label(): string | null;
get hint(): string | null;
get action(): upstream0.SemanticsAction | null;
}
export abstract class _CustomSemanticsActionNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CustomSemanticsAction>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CustomSemanticsAction;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_semantics#type:CustomSemanticsAction", readonly [], false];
constructor(options: {label: string}); constructor(call: _FlaxProxySuper<_CustomSemanticsActionNative>); constructor(...args: unknown[]) { super(_CustomSemanticsActionProxy, args); }
}
_flaxDefineProxyBase(_CustomSemanticsActionNative.prototype, _CustomSemanticsActionProxy);
export namespace _CustomSemanticsActionFactory { export function implement(args: [options: {label: string}], implementation: {}): CustomSemanticsAction {
return constructProxy(_CustomSemanticsActionProxy, args, implementation) as CustomSemanticsAction; } }
const _CustomSemanticsActionBinding = _flaxProxyFactory(_CustomSemanticsActionFactory, _CustomSemanticsActionNative) as unknown as typeof _CustomSemanticsActionFactory & (new(options: {label: string}) => _CustomSemanticsActionNative) & (new(call: _FlaxProxySuper<_CustomSemanticsActionNative>) => _CustomSemanticsActionNative);
export namespace _CustomSemanticsActionFactory { export function getIdentifier(action: Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics.dart::CustomSemanticsAction": readonly [] }>): number {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_semantics#function:CustomSemanticsAction.getIdentifier", [action], _flaxMemberParameters13);
return _flaxResult as number;
} }
export namespace _CustomSemanticsActionFactory { export function getAction(id: number): CustomSemanticsAction | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_semantics#function:CustomSemanticsAction.getAction", [id], _flaxMemberParameters14);
return _flaxResult as CustomSemanticsAction | null;
} }
export const CustomSemanticsAction: typeof _CustomSemanticsActionBinding & _FlaxInstanceType<CustomSemanticsAction> & _FlaxDartType<CustomSemanticsAction, readonly ["class", "flax.core/sdk_semantics#type:CustomSemanticsAction", readonly [], false]> = _flaxBindInstanceType<CustomSemanticsAction, typeof _CustomSemanticsActionBinding>(_CustomSemanticsActionBinding, "flax.core/sdk_semantics#type:CustomSemanticsAction", ["dart:core::Object"]) as typeof _CustomSemanticsActionBinding & _FlaxInstanceType<CustomSemanticsAction> & _FlaxDartType<CustomSemanticsAction, readonly ["class", "flax.core/sdk_semantics#type:CustomSemanticsAction", readonly [], false]>;

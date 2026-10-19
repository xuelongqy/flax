// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsAction';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsAction';
import { _flaxMemberParameters2, _flaxMemberParameters13 } from "@flax/flutter/semantics/_bindings/sdk_semantics.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/semantics/_bindings/sdk_semantics.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CustomSemanticsAction extends Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics.dart::CustomSemanticsAction": readonly [] }> { readonly __CustomSemanticsAction: unique symbol;
readonly [_flaxDartTypeValue]: CustomSemanticsAction;

}
defineObject("flax.core/sdk_semantics#type:CustomSemanticsAction", ["label","hint","action"], [], _flaxBindingMethods("flax.core/sdk_semantics#type:CustomSemanticsAction", "object", {"toString":_flaxMemberParameters2}, {}), []);
const _CustomSemanticsActionProxy = {type: "flax.core/sdk_semantics#type:CustomSemanticsAction", parameters: _flaxMemberParameters13, constructors: {"": _flaxMemberParameters13}, methods: {"toString":_flaxMemberParameters2}, getters: ["label","hint","action"], setters: [], contextMembers: [], superMembers: ["get:label","get:hint","get:action","toString"]} as const;
export interface CustomSemanticsAction {
readonly [_flaxDartTypeValue]: CustomSemanticsAction;

toString(): string;
get label(): string | null;
get hint(): string | null;
get action(): upstream0.SemanticsAction | null;
}
export abstract class CustomSemanticsAction extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CustomSemanticsAction>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CustomSemanticsAction;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_semantics#type:CustomSemanticsAction", readonly [], false];
constructor(options: {label: string}) { super(_CustomSemanticsActionProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(CustomSemanticsAction.prototype, _CustomSemanticsActionProxy);
export namespace CustomSemanticsAction { export function implement(args: [options: {label: string}], implementation: {}): CustomSemanticsAction {
return constructProxy(_CustomSemanticsActionProxy, args, implementation) as CustomSemanticsAction; } }
export namespace CustomSemanticsAction { export function getIdentifier(action: Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics.dart::CustomSemanticsAction": readonly [] }>): number {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_semantics#function:CustomSemanticsAction.getIdentifier", [action]);
return _flaxResult as number;
} }
export namespace CustomSemanticsAction { export function getAction(id: number): CustomSemanticsAction | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_semantics#function:CustomSemanticsAction.getAction", [id]);
return _flaxResult as CustomSemanticsAction | null;
} }
_flaxBindInstanceType<CustomSemanticsAction, typeof CustomSemanticsAction>(CustomSemanticsAction, "flax.core/sdk_semantics#type:CustomSemanticsAction", ["dart:core::Object"]);

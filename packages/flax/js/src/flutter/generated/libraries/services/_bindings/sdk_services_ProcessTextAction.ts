// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters66 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ProcessTextAction extends Readonly<{ "__flaxBound:package:flutter/src/services/process_text.dart::ProcessTextAction": readonly [] }> { readonly __ProcessTextAction: unique symbol;
readonly [_flaxDartTypeValue]: ProcessTextAction;

readonly id: string;
readonly label: string;
}
defineObject("flax.core/sdk_services#type:ProcessTextAction", ["id","label"], [], _flaxBindingMethods("flax.core/sdk_services#type:ProcessTextAction", "object", {}, {}), []);
export function _ProcessTextActionFactory(id: string, label: string): ProcessTextAction {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:ProcessTextAction", "", [{"name":"id","required":true,"positional":true},{"name":"label","required":true,"positional":true}], [id, label], {}) as ProcessTextAction;
}
const _ProcessTextActionProxy = {type: "flax.core/sdk_services#type:ProcessTextAction", parameters: _flaxMemberParameters66, constructors: {"": _flaxMemberParameters66}, methods: {}, getters: ["id","label"], setters: [], contextMembers: [], superMembers: ["get:id","get:label"]} as const;
export interface _ProcessTextActionNative extends ProcessTextAction {
readonly [_flaxDartTypeValue]: _ProcessTextActionNative;

get id(): string;
get label(): string;
}
export abstract class _ProcessTextActionNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ProcessTextAction>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ProcessTextAction;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:ProcessTextAction", readonly [], false];
constructor(id: string, label: string) { super(_ProcessTextActionProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ProcessTextActionNative.prototype, _ProcessTextActionProxy);
export namespace _ProcessTextActionFactory { export function implement(args: [id: string, label: string], implementation: {}): ProcessTextAction {
return constructProxy(_ProcessTextActionProxy, args, implementation) as ProcessTextAction; } }
const _ProcessTextActionBinding = _flaxProxyFactory(_ProcessTextActionFactory, _ProcessTextActionNative) as unknown as typeof _ProcessTextActionFactory & (new(id: string, label: string) => _ProcessTextActionNative);
export const ProcessTextAction: typeof _ProcessTextActionBinding & _FlaxInstanceType<ProcessTextAction> & _FlaxDartType<ProcessTextAction, readonly ["class", "flax.core/sdk_services#type:ProcessTextAction", readonly [], false]> = _flaxBindInstanceType<ProcessTextAction, typeof _ProcessTextActionBinding>(_ProcessTextActionBinding, "flax.core/sdk_services#type:ProcessTextAction", ["dart:core::Object"]) as typeof _ProcessTextActionBinding & _FlaxInstanceType<ProcessTextAction> & _FlaxDartType<ProcessTextAction, readonly ["class", "flax.core/sdk_services#type:ProcessTextAction", readonly [], false]>;

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"copy"},{"name":"cut"},{"name":"paste"},{"name":"selectAll"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ToolbarOptions extends Readonly<{ "__flaxBound:package:flutter/src/widgets/editable_text.dart::ToolbarOptions": readonly [] }> { readonly __ToolbarOptions: unique symbol;
readonly [_flaxDartTypeValue]: ToolbarOptions;

}
defineObject("flax.core/sdk_widgets#type:ToolbarOptions", ["copy","cut","paste","selectAll"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ToolbarOptions", "object", {}, {}), []);
const _ToolbarOptionsProxy = {type: "flax.core/sdk_widgets#type:ToolbarOptions", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {}, getters: ["copy","cut","paste","selectAll"], setters: [], contextMembers: [], superMembers: ["get:copy","get:cut","get:paste","get:selectAll"]} as const;
export interface ToolbarOptions {
readonly [_flaxDartTypeValue]: ToolbarOptions;

get copy(): boolean;
get cut(): boolean;
get paste(): boolean;
get selectAll(): boolean;
}
export abstract class ToolbarOptions extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ToolbarOptions>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ToolbarOptions;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ToolbarOptions", readonly [], false];
constructor(options?: {copy?: boolean | undefined; cut?: boolean | undefined; paste?: boolean | undefined; selectAll?: boolean | undefined}) { super(_ToolbarOptionsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ToolbarOptions.prototype, _ToolbarOptionsProxy);
export namespace ToolbarOptions { export function implement(args: [options?: {copy?: boolean | undefined; cut?: boolean | undefined; paste?: boolean | undefined; selectAll?: boolean | undefined}], implementation: {}): ToolbarOptions {
return constructProxy(_ToolbarOptionsProxy, args, implementation) as ToolbarOptions; } }
export namespace ToolbarOptions { export declare const empty: ToolbarOptions; }
_flaxDefineStaticGetters(ToolbarOptions, "flax.core/sdk_widgets#read:ToolbarOptions.", ["empty"]);
_flaxBindInstanceType<ToolbarOptions, typeof ToolbarOptions>(ToolbarOptions, "flax.core/sdk_widgets#type:ToolbarOptions", ["dart:core::Object"]);

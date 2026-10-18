// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_DismissDirection';
import '@flax/flutter/widgets/_bindings/sdk_widgets_DismissDirection';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DismissUpdateDetails extends Readonly<{ "__flaxBound:package:flutter/src/widgets/dismissible.dart::DismissUpdateDetails": readonly [] }> { readonly __DismissUpdateDetails: unique symbol;
readonly [_flaxDartTypeValue]: DismissUpdateDetails;

}
defineObject("flax.core/sdk_widgets#type:DismissUpdateDetails", ["direction","reached","previousReached","progress"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:DismissUpdateDetails", "object", {}, {}), []);
const _DismissUpdateDetailsProxy = {type: "flax.core/sdk_widgets#type:DismissUpdateDetails", parameters: [{"name":"direction","required":false,"positional":false},{"name":"reached","required":false,"positional":false},{"name":"previousReached","required":false,"positional":false},{"name":"progress","required":false,"positional":false}], constructors: {"":[{"name":"direction","required":false,"positional":false},{"name":"reached","required":false,"positional":false},{"name":"previousReached","required":false,"positional":false},{"name":"progress","required":false,"positional":false}]}, methods: {}, getters: ["direction","reached","previousReached","progress"], setters: [], contextMembers: [], superMembers: ["get:direction","get:reached","get:previousReached","get:progress"]} as const;
export interface DismissUpdateDetails {
readonly [_flaxDartTypeValue]: DismissUpdateDetails;

get direction(): upstream0.DismissDirection;
get reached(): boolean;
get previousReached(): boolean;
get progress(): number;
}
export abstract class DismissUpdateDetails extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DismissUpdateDetails>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DismissUpdateDetails;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DismissUpdateDetails", readonly [], false];
constructor(options?: {direction?: upstream0.DismissDirection | undefined; reached?: boolean | undefined; previousReached?: boolean | undefined; progress?: number | undefined}) { super(_DismissUpdateDetailsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(DismissUpdateDetails.prototype, _DismissUpdateDetailsProxy);
export namespace DismissUpdateDetails { export function implement(args: [options?: {direction?: upstream0.DismissDirection | undefined; reached?: boolean | undefined; previousReached?: boolean | undefined; progress?: number | undefined}], implementation: {}): DismissUpdateDetails {
return constructProxy(_DismissUpdateDetailsProxy, args, implementation) as DismissUpdateDetails; } }
_flaxBindInstanceType<DismissUpdateDetails, typeof DismissUpdateDetails>(DismissUpdateDetails, "flax.core/sdk_widgets#type:DismissUpdateDetails", ["dart:core::Object"]);

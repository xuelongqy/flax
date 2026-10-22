// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_DismissDirection';
import '@flax/flutter/widgets/_bindings/sdk_widgets_DismissDirection';
import { _flaxMemberParameters94 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DismissUpdateDetails extends Readonly<{ "__flaxBound:package:flutter/src/widgets/dismissible.dart::DismissUpdateDetails": readonly [] }> { readonly __DismissUpdateDetails: unique symbol;
readonly [_flaxDartTypeValue]: DismissUpdateDetails;

readonly direction: upstream0.DismissDirection;
readonly reached: boolean;
readonly previousReached: boolean;
readonly progress: number;
}
defineObject("flax.core/sdk_widgets#type:DismissUpdateDetails", ["direction","reached","previousReached","progress"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:DismissUpdateDetails", "object", {}, {}), []);
export function _DismissUpdateDetailsFactory(options: { direction?: upstream0.DismissDirection | undefined; reached?: boolean | undefined; previousReached?: boolean | undefined; progress?: number | undefined } = {}): DismissUpdateDetails {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:DismissUpdateDetails", "", [{"name":"direction"},{"name":"reached"},{"name":"previousReached"},{"name":"progress"}], [], options) as DismissUpdateDetails;
}
const _DismissUpdateDetailsProxy = {type: "flax.core/sdk_widgets#type:DismissUpdateDetails", parameters: _flaxMemberParameters94, constructors: {"": _flaxMemberParameters94}, methods: {}, getters: ["direction","reached","previousReached","progress"], setters: [], contextMembers: [], superMembers: ["get:direction","get:reached","get:previousReached","get:progress"]} as const;
export interface _DismissUpdateDetailsNative extends DismissUpdateDetails {
readonly [_flaxDartTypeValue]: _DismissUpdateDetailsNative;

get direction(): upstream0.DismissDirection;
get reached(): boolean;
get previousReached(): boolean;
get progress(): number;
}
export abstract class _DismissUpdateDetailsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DismissUpdateDetails>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DismissUpdateDetails;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DismissUpdateDetails", readonly [], false];
constructor(options?: {direction?: upstream0.DismissDirection | undefined; reached?: boolean | undefined; previousReached?: boolean | undefined; progress?: number | undefined}) { super(_DismissUpdateDetailsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_DismissUpdateDetailsNative.prototype, _DismissUpdateDetailsProxy);
export namespace _DismissUpdateDetailsFactory { export function implement(args: [options?: {direction?: upstream0.DismissDirection | undefined; reached?: boolean | undefined; previousReached?: boolean | undefined; progress?: number | undefined}], implementation: {}): DismissUpdateDetails {
return constructProxy(_DismissUpdateDetailsProxy, args, implementation) as DismissUpdateDetails; } }
const _DismissUpdateDetailsBinding = _flaxProxyFactory(_DismissUpdateDetailsFactory, _DismissUpdateDetailsNative) as unknown as typeof _DismissUpdateDetailsFactory & (new(options?: {direction?: upstream0.DismissDirection | undefined; reached?: boolean | undefined; previousReached?: boolean | undefined; progress?: number | undefined}) => _DismissUpdateDetailsNative);
export const DismissUpdateDetails: typeof _DismissUpdateDetailsBinding & _FlaxInstanceType<DismissUpdateDetails> & _FlaxDartType<DismissUpdateDetails, readonly ["class", "flax.core/sdk_widgets#type:DismissUpdateDetails", readonly [], false]> = _flaxBindInstanceType<DismissUpdateDetails, typeof _DismissUpdateDetailsBinding>(_DismissUpdateDetailsBinding, "flax.core/sdk_widgets#type:DismissUpdateDetails", ["dart:core::Object"]) as typeof _DismissUpdateDetailsBinding & _FlaxInstanceType<DismissUpdateDetails> & _FlaxDartType<DismissUpdateDetails, readonly ["class", "flax.core/sdk_widgets#type:DismissUpdateDetails", readonly [], false]>;

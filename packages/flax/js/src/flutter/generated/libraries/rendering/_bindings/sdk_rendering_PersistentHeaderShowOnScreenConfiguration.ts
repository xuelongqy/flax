// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters146 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PersistentHeaderShowOnScreenConfiguration extends Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_persistent_header.dart::PersistentHeaderShowOnScreenConfiguration": readonly [] }> { readonly __PersistentHeaderShowOnScreenConfiguration: unique symbol;
readonly [_flaxDartTypeValue]: PersistentHeaderShowOnScreenConfiguration;

readonly minShowOnScreenExtent: number;
readonly maxShowOnScreenExtent: number;
}
defineObject("flax.core/sdk_rendering#type:PersistentHeaderShowOnScreenConfiguration", ["minShowOnScreenExtent","maxShowOnScreenExtent"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:PersistentHeaderShowOnScreenConfiguration", "object", {}, {}), []);
export function _PersistentHeaderShowOnScreenConfigurationFactory(options: { minShowOnScreenExtent?: number | undefined; maxShowOnScreenExtent?: number | undefined } = {}): PersistentHeaderShowOnScreenConfiguration {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:PersistentHeaderShowOnScreenConfiguration", "", [{"name":"minShowOnScreenExtent"},{"name":"maxShowOnScreenExtent"}], [], options) as PersistentHeaderShowOnScreenConfiguration;
}
const _PersistentHeaderShowOnScreenConfigurationProxy = {type: "flax.core/sdk_rendering#type:PersistentHeaderShowOnScreenConfiguration", parameters: _flaxMemberParameters146, constructors: {"": _flaxMemberParameters146}, methods: {}, getters: ["minShowOnScreenExtent","maxShowOnScreenExtent"], setters: [], contextMembers: [], superMembers: ["get:minShowOnScreenExtent","get:maxShowOnScreenExtent"]} as const;
export interface _PersistentHeaderShowOnScreenConfigurationNative extends PersistentHeaderShowOnScreenConfiguration {
readonly [_flaxDartTypeValue]: _PersistentHeaderShowOnScreenConfigurationNative;

get minShowOnScreenExtent(): number;
get maxShowOnScreenExtent(): number;
}
export abstract class _PersistentHeaderShowOnScreenConfigurationNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PersistentHeaderShowOnScreenConfiguration>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PersistentHeaderShowOnScreenConfiguration;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:PersistentHeaderShowOnScreenConfiguration", readonly [], false];
constructor(options?: {minShowOnScreenExtent?: number | undefined; maxShowOnScreenExtent?: number | undefined}) { super(_PersistentHeaderShowOnScreenConfigurationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_PersistentHeaderShowOnScreenConfigurationNative.prototype, _PersistentHeaderShowOnScreenConfigurationProxy);
export namespace _PersistentHeaderShowOnScreenConfigurationFactory { export function implement(args: [options?: {minShowOnScreenExtent?: number | undefined; maxShowOnScreenExtent?: number | undefined}], implementation: {}): PersistentHeaderShowOnScreenConfiguration {
return constructProxy(_PersistentHeaderShowOnScreenConfigurationProxy, args, implementation) as PersistentHeaderShowOnScreenConfiguration; } }
const _PersistentHeaderShowOnScreenConfigurationBinding = _flaxProxyFactory(_PersistentHeaderShowOnScreenConfigurationFactory, _PersistentHeaderShowOnScreenConfigurationNative) as unknown as typeof _PersistentHeaderShowOnScreenConfigurationFactory & (new(options?: {minShowOnScreenExtent?: number | undefined; maxShowOnScreenExtent?: number | undefined}) => _PersistentHeaderShowOnScreenConfigurationNative);
export const PersistentHeaderShowOnScreenConfiguration: typeof _PersistentHeaderShowOnScreenConfigurationBinding & _FlaxInstanceType<PersistentHeaderShowOnScreenConfiguration> & _FlaxDartType<PersistentHeaderShowOnScreenConfiguration, readonly ["class", "flax.core/sdk_rendering#type:PersistentHeaderShowOnScreenConfiguration", readonly [], false]> = _flaxBindInstanceType<PersistentHeaderShowOnScreenConfiguration, typeof _PersistentHeaderShowOnScreenConfigurationBinding>(_PersistentHeaderShowOnScreenConfigurationBinding, "flax.core/sdk_rendering#type:PersistentHeaderShowOnScreenConfiguration", ["dart:core::Object"]) as typeof _PersistentHeaderShowOnScreenConfigurationBinding & _FlaxInstanceType<PersistentHeaderShowOnScreenConfiguration> & _FlaxDartType<PersistentHeaderShowOnScreenConfiguration, readonly ["class", "flax.core/sdk_rendering#type:PersistentHeaderShowOnScreenConfiguration", readonly [], false]>;

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters148 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PersistentHeaderShowOnScreenConfiguration extends Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_persistent_header.dart::PersistentHeaderShowOnScreenConfiguration": readonly [] }> { readonly __PersistentHeaderShowOnScreenConfiguration: unique symbol;
readonly [_flaxDartTypeValue]: PersistentHeaderShowOnScreenConfiguration;

}
defineObject("flax.core/sdk_rendering#type:PersistentHeaderShowOnScreenConfiguration", ["minShowOnScreenExtent","maxShowOnScreenExtent"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:PersistentHeaderShowOnScreenConfiguration", "object", {}, {}), []);
const _PersistentHeaderShowOnScreenConfigurationProxy = {type: "flax.core/sdk_rendering#type:PersistentHeaderShowOnScreenConfiguration", parameters: _flaxMemberParameters148, constructors: {"": _flaxMemberParameters148}, methods: {}, getters: ["minShowOnScreenExtent","maxShowOnScreenExtent"], setters: [], contextMembers: [], superMembers: ["get:minShowOnScreenExtent","get:maxShowOnScreenExtent"]} as const;
export interface PersistentHeaderShowOnScreenConfiguration {
readonly [_flaxDartTypeValue]: PersistentHeaderShowOnScreenConfiguration;

get minShowOnScreenExtent(): number;
get maxShowOnScreenExtent(): number;
}
export abstract class PersistentHeaderShowOnScreenConfiguration extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PersistentHeaderShowOnScreenConfiguration>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PersistentHeaderShowOnScreenConfiguration;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:PersistentHeaderShowOnScreenConfiguration", readonly [], false];
constructor(options?: {minShowOnScreenExtent?: number | undefined; maxShowOnScreenExtent?: number | undefined}) { super(_PersistentHeaderShowOnScreenConfigurationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(PersistentHeaderShowOnScreenConfiguration.prototype, _PersistentHeaderShowOnScreenConfigurationProxy);
export namespace PersistentHeaderShowOnScreenConfiguration { export function implement(args: [options?: {minShowOnScreenExtent?: number | undefined; maxShowOnScreenExtent?: number | undefined}], implementation: {}): PersistentHeaderShowOnScreenConfiguration {
return constructProxy(_PersistentHeaderShowOnScreenConfigurationProxy, args, implementation) as PersistentHeaderShowOnScreenConfiguration; } }
_flaxBindInstanceType<PersistentHeaderShowOnScreenConfiguration, typeof PersistentHeaderShowOnScreenConfiguration>(PersistentHeaderShowOnScreenConfiguration, "flax.core/sdk_rendering#type:PersistentHeaderShowOnScreenConfiguration", ["dart:core::Object"]);

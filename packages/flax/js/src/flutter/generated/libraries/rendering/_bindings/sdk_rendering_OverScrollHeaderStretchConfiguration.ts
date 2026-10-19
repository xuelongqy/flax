// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters130 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface OverScrollHeaderStretchConfiguration extends Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_persistent_header.dart::OverScrollHeaderStretchConfiguration": readonly [] }> { readonly __OverScrollHeaderStretchConfiguration: unique symbol;
readonly [_flaxDartTypeValue]: OverScrollHeaderStretchConfiguration;

}
defineObject("flax.core/sdk_rendering#type:OverScrollHeaderStretchConfiguration", ["stretchTriggerOffset","onStretchTrigger"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:OverScrollHeaderStretchConfiguration", "object", {}, {}), []);
const _OverScrollHeaderStretchConfigurationProxy = {type: "flax.core/sdk_rendering#type:OverScrollHeaderStretchConfiguration", parameters: _flaxMemberParameters130, constructors: {"": _flaxMemberParameters130}, methods: {}, getters: ["stretchTriggerOffset","onStretchTrigger"], setters: [], contextMembers: [], superMembers: ["get:stretchTriggerOffset","get:onStretchTrigger"]} as const;
export interface OverScrollHeaderStretchConfiguration {
readonly [_flaxDartTypeValue]: OverScrollHeaderStretchConfiguration;

get stretchTriggerOffset(): number;
get onStretchTrigger(): (() => Promise<void>) | null;
}
export abstract class OverScrollHeaderStretchConfiguration extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<OverScrollHeaderStretchConfiguration>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: OverScrollHeaderStretchConfiguration;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:OverScrollHeaderStretchConfiguration", readonly [], false];
constructor(options?: {stretchTriggerOffset?: number | undefined; onStretchTrigger?: (() => Promise<void>) | null | undefined}) { super(_OverScrollHeaderStretchConfigurationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(OverScrollHeaderStretchConfiguration.prototype, _OverScrollHeaderStretchConfigurationProxy);
export namespace OverScrollHeaderStretchConfiguration { export function implement(args: [options?: {stretchTriggerOffset?: number | undefined; onStretchTrigger?: (() => Promise<void>) | null | undefined}], implementation: {}): OverScrollHeaderStretchConfiguration {
return constructProxy(_OverScrollHeaderStretchConfigurationProxy, args, implementation) as OverScrollHeaderStretchConfiguration; } }
_flaxBindInstanceType<OverScrollHeaderStretchConfiguration, typeof OverScrollHeaderStretchConfiguration>(OverScrollHeaderStretchConfiguration, "flax.core/sdk_rendering#type:OverScrollHeaderStretchConfiguration", ["dart:core::Object"]);

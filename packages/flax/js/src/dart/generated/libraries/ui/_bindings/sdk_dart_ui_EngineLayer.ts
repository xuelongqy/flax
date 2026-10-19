// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface EngineLayer extends Readonly<{ "__flaxBound:dart:ui::EngineLayer": readonly [] }> { readonly __EngineLayer: unique symbol;
readonly [_flaxDartTypeValue]: EngineLayer;

dispose(): void;
}
defineObject("flax.core/sdk_dart_ui#type:EngineLayer", [], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:EngineLayer", "object", {"dispose":_flaxMemberParameters0}, {}), []);
const _EngineLayerProxy = {type: "flax.core/sdk_dart_ui#type:EngineLayer", parameters: _flaxMemberParameters0, constructors: {}, methods: {"dispose":_flaxMemberParameters0}, getters: [], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _EngineLayerFactory { export function implement(args: [], implementation: {dispose: (() => void)}): EngineLayer {
return constructProxy(_EngineLayerProxy, args, implementation) as EngineLayer; } }
export const EngineLayer: typeof _EngineLayerFactory & _FlaxInstanceType<EngineLayer> & _FlaxDartType<EngineLayer, readonly ["class", "flax.core/sdk_dart_ui#type:EngineLayer", readonly [], false]> = _flaxBindInstanceType<EngineLayer, typeof _EngineLayerFactory>(_EngineLayerFactory, "flax.core/sdk_dart_ui#type:EngineLayer", ["dart:core::Object"]) as typeof _EngineLayerFactory & _FlaxInstanceType<EngineLayer> & _FlaxDartType<EngineLayer, readonly ["class", "flax.core/sdk_dart_ui#type:EngineLayer", readonly [], false]>;

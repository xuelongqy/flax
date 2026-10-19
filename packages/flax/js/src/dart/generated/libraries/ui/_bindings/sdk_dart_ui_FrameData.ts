// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters0 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FrameData extends Readonly<{ "__flaxBound:dart:ui::FrameData": readonly [] }> { readonly __FrameData: unique symbol;
readonly [_flaxDartTypeValue]: FrameData;

readonly frameNumber: number;
}
defineObject("flax.core/sdk_dart_ui#type:FrameData", ["frameNumber"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:FrameData", "object", {}, {}), []);
const _FrameDataProxy = {type: "flax.core/sdk_dart_ui#type:FrameData", parameters: _flaxMemberParameters0, constructors: {}, methods: {}, getters: ["frameNumber"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _FrameDataFactory { export function implement(args: [], implementation: {get frameNumber(): number}): FrameData {
return constructProxy(_FrameDataProxy, args, implementation) as FrameData; } }
export const FrameData: typeof _FrameDataFactory & _FlaxInstanceType<FrameData> & _FlaxDartType<FrameData, readonly ["class", "flax.core/sdk_dart_ui#type:FrameData", readonly [], false]> = _flaxBindInstanceType<FrameData, typeof _FrameDataFactory>(_FrameDataFactory, "flax.core/sdk_dart_ui#type:FrameData", ["dart:core::Object"]) as typeof _FrameDataFactory & _FlaxInstanceType<FrameData> & _FlaxDartType<FrameData, readonly ["class", "flax.core/sdk_dart_ui#type:FrameData", readonly [], false]>;

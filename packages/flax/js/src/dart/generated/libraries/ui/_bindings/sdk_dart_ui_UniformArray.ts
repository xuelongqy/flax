// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_UniformType';
import '@flax/dart/ui/_bindings/sdk_dart_ui_UniformType';
const _flaxMemberParameters0 = [{"name":"index","required":true,"positional":true}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface UniformArray<T extends upstream0.UniformType = upstream0.UniformType> extends Readonly<{ "__flaxBound:dart:ui::UniformArray": readonly [T] }> { readonly __UniformArray: unique symbol;
readonly [_flaxDartTypeValue]: UniformArray<T>;

readonly length: number;
operatorGetIndex(index: number): T;
}
defineObject("flax.core/sdk_dart_ui#type:UniformArray", ["length"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:UniformArray", "object", {"operatorGetIndex":_flaxMemberParameters0}, {}), []);
export const UniformArray: object & _FlaxInstanceType<UniformArray<upstream0.UniformType>> & _FlaxDartType<UniformArray<upstream0.UniformType>, readonly ["class", "flax.core/sdk_dart_ui#type:UniformArray", readonly [readonly ["class", "flax.core/sdk_dart_ui#type:UniformType", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<UniformArray<upstream0.UniformType>, object>({}, "flax.core/sdk_dart_ui#type:UniformArray", ["dart:core::Object"]) as object & _FlaxInstanceType<UniformArray<upstream0.UniformType>> & _FlaxDartType<UniformArray<upstream0.UniformType>, readonly ["class", "flax.core/sdk_dart_ui#type:UniformArray", readonly [readonly ["class", "flax.core/sdk_dart_ui#type:UniformType", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(UniformArray, "flax.core/sdk_dart_ui#type:UniformArray", {"category":"object","constructors":{}});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.UniformType] ? {readonly prototype: UniformArray<_Selected0>;} & _FlaxInstanceType<UniformArray<_Selected0>> & _FlaxDartType<UniformArray<_Selected0>> : never : never; }

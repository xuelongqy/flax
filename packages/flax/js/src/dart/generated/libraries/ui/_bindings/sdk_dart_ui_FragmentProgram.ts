// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_FragmentShader';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FragmentShader';
import { _flaxMemberParameters0 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FragmentProgram extends Readonly<{ "__flaxBound:dart:ui::FragmentProgram": readonly [] }> { readonly __FragmentProgram: unique symbol;
readonly [_flaxDartTypeValue]: FragmentProgram;

fragmentShader(): upstream0.FragmentShader;
}
defineObject("flax.core/sdk_dart_ui#type:FragmentProgram", [], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:FragmentProgram", "object", {"fragmentShader":_flaxMemberParameters0}, {}), []);
export namespace _FragmentProgramFactory { export function fromAsset(assetKey: string): Promise<FragmentProgram> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dart_ui#function:FragmentProgram.fromAsset", [assetKey]);
return _flaxResult as Promise<FragmentProgram>;
} }
export const FragmentProgram: typeof _FragmentProgramFactory & _FlaxInstanceType<FragmentProgram> & _FlaxDartType<FragmentProgram, readonly ["class", "flax.core/sdk_dart_ui#type:FragmentProgram", readonly [], false]> = _flaxBindInstanceType<FragmentProgram, typeof _FragmentProgramFactory>(_FragmentProgramFactory, "flax.core/sdk_dart_ui#type:FragmentProgram", ["dart:core::Object"]) as typeof _FragmentProgramFactory & _FlaxInstanceType<FragmentProgram> & _FlaxDartType<FragmentProgram, readonly ["class", "flax.core/sdk_dart_ui#type:FragmentProgram", readonly [], false]>;

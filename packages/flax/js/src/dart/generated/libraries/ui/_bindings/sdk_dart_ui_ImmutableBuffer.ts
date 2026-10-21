// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters68, _flaxMemberParameters53, _flaxMemberParameters69, _flaxMemberParameters0 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ImmutableBuffer extends Readonly<{ "__flaxBound:dart:ui::ImmutableBuffer": readonly [] }> { readonly __ImmutableBuffer: unique symbol;
readonly [_flaxDartTypeValue]: ImmutableBuffer;

readonly length: number;
readonly debugDisposed: boolean;
dispose(): void;
}
defineObject("flax.core/sdk_dart_ui#type:ImmutableBuffer", ["length","debugDisposed"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:ImmutableBuffer", "object", {"dispose":_flaxMemberParameters0}, {}), []);
export namespace _ImmutableBufferFactory { export function fromUint8List(list: globalThis.Uint8Array): Promise<ImmutableBuffer> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dart_ui#function:ImmutableBuffer.fromUint8List", [list], _flaxMemberParameters68);
return _flaxResult as Promise<ImmutableBuffer>;
} }
export namespace _ImmutableBufferFactory { export function fromAsset(assetKey: string): Promise<ImmutableBuffer> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dart_ui#function:ImmutableBuffer.fromAsset", [assetKey], _flaxMemberParameters53);
return _flaxResult as Promise<ImmutableBuffer>;
} }
export namespace _ImmutableBufferFactory { export function fromFilePath(path: string): Promise<ImmutableBuffer> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dart_ui#function:ImmutableBuffer.fromFilePath", [path], _flaxMemberParameters69);
return _flaxResult as Promise<ImmutableBuffer>;
} }
export const ImmutableBuffer: typeof _ImmutableBufferFactory & _FlaxInstanceType<ImmutableBuffer> & _FlaxDartType<ImmutableBuffer, readonly ["class", "flax.core/sdk_dart_ui#type:ImmutableBuffer", readonly [], false]> = _flaxBindInstanceType<ImmutableBuffer, typeof _ImmutableBufferFactory>(_ImmutableBufferFactory, "flax.core/sdk_dart_ui#type:ImmutableBuffer", ["dart:core::Object"]) as typeof _ImmutableBufferFactory & _FlaxInstanceType<ImmutableBuffer> & _FlaxDartType<ImmutableBuffer, readonly ["class", "flax.core/sdk_dart_ui#type:ImmutableBuffer", readonly [], false]>;

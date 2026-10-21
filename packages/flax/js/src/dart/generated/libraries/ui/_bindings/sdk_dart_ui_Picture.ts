// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_TargetPixelFormat';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TargetPixelFormat';
import { _flaxMemberParameters48, _flaxMemberParameters123, _flaxMemberParameters124, _flaxMemberParameters0 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Picture extends Readonly<{ "__flaxBound:dart:ui::Picture": readonly [] }> { readonly __Picture: unique symbol;
readonly [_flaxDartTypeValue]: Picture;

readonly debugDisposed: boolean;
readonly approximateBytesUsed: number;
toImage(width: number, height: number): Promise<upstream0.Image>;
toImageSync(width: number, height: number, options?: {targetFormat?: upstream1.TargetPixelFormat | undefined}): upstream0.Image;
dispose(): void;
}
defineObject("flax.core/sdk_dart_ui#type:Picture", ["debugDisposed","approximateBytesUsed"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:Picture", "object", {"toImage":_flaxMemberParameters123,"toImageSync":_flaxMemberParameters124,"dispose":_flaxMemberParameters0}, {}), []);
const _PictureProxy = {type: "flax.core/sdk_dart_ui#type:Picture", parameters: _flaxMemberParameters0, constructors: {}, methods: {"toImage":_flaxMemberParameters123,"toImageSync":_flaxMemberParameters124,"dispose":_flaxMemberParameters0}, getters: ["debugDisposed","approximateBytesUsed"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _PictureFactory { export function implement(args: [], implementation: {toImage: ((width: number, height: number) => Promise<Readonly<{ "__flaxBound:dart:ui::Image": readonly [] }>>); toImageSync: ((width: number, height: number, options?: { targetFormat?: upstream1.TargetPixelFormat | undefined }) => Readonly<{ "__flaxBound:dart:ui::Image": readonly [] }>); dispose: (() => void); get debugDisposed(): boolean; get approximateBytesUsed(): number}): Picture {
return constructProxy(_PictureProxy, args, implementation) as Picture; } }
export namespace _PictureFactory { export function setOnCreate(value: ((picture: Picture) => void) | null): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dart_ui#function:Picture.onCreate%3D", [value], _flaxMemberParameters48);
} }
export namespace _PictureFactory { export function setOnDispose(value: ((picture: Picture) => void) | null): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dart_ui#function:Picture.onDispose%3D", [value], _flaxMemberParameters48);
} }
export namespace _PictureFactory { export declare const onCreate: ((picture: Readonly<{ "__flaxBound:dart:ui::Picture": readonly [] }>) => void) | null; }
export namespace _PictureFactory { export declare const onDispose: ((picture: Readonly<{ "__flaxBound:dart:ui::Picture": readonly [] }>) => void) | null; }
_flaxDefineStaticGetters(_PictureFactory, "flax.core/sdk_dart_ui#read:Picture.", ["onCreate","onDispose"]);
export const Picture: typeof _PictureFactory & _FlaxInstanceType<Picture> & _FlaxDartType<Picture, readonly ["class", "flax.core/sdk_dart_ui#type:Picture", readonly [], false]> = _flaxBindInstanceType<Picture, typeof _PictureFactory>(_PictureFactory, "flax.core/sdk_dart_ui#type:Picture", ["dart:core::Object"]) as typeof _PictureFactory & _FlaxInstanceType<Picture> & _FlaxDartType<Picture, readonly ["class", "flax.core/sdk_dart_ui#type:Picture", readonly [], false]>;

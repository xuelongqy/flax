// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_ColorSpace';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ColorSpace';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_ImageByteFormat';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ImageByteFormat';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import { _flaxMemberParameters0, _flaxMemberParameters58, _flaxMemberParameters59 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Image extends Readonly<{ "__flaxBound:dart:ui::Image": readonly [] }> { readonly __Image: unique symbol;
readonly [_flaxDartTypeValue]: Image;

readonly width: number;
readonly height: number;
readonly debugDisposed: boolean;
readonly colorSpace: upstream0.ColorSpace;
dispose(): void;
toByteData(options?: {format?: upstream1.ImageByteFormat | undefined}): Promise<globalThis.DataView | null>;
debugGetOpenHandleStackTraces(): DartList<upstream2.StackTrace> | null;
clone(): Image;
isCloneOf(other: Readonly<{ "__flaxBound:dart:ui::Image": readonly [] }>): boolean;
toString(): string;
}
defineObject("flax.core/sdk_dart_ui#type:Image", ["width","height","debugDisposed","colorSpace"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:Image", "object", {"dispose":_flaxMemberParameters0,"toByteData":_flaxMemberParameters58,"debugGetOpenHandleStackTraces":_flaxMemberParameters0,"clone":_flaxMemberParameters0,"isCloneOf":_flaxMemberParameters59,"toString":_flaxMemberParameters0}, {}), []);
export namespace _ImageFactory { export function setOnCreate(value: ((image: Image) => void) | null): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dart_ui#function:Image.onCreate%3D", [value]);
} }
export namespace _ImageFactory { export function setOnDispose(value: ((image: Image) => void) | null): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dart_ui#function:Image.onDispose%3D", [value]);
} }
export namespace _ImageFactory { export declare const onCreate: ((image: Readonly<{ "__flaxBound:dart:ui::Image": readonly [] }>) => void) | null; }
export namespace _ImageFactory { export declare const onDispose: ((image: Readonly<{ "__flaxBound:dart:ui::Image": readonly [] }>) => void) | null; }
_flaxDefineStaticGetters(_ImageFactory, "flax.core/sdk_dart_ui#read:Image.", ["onCreate","onDispose"]);
export const Image: typeof _ImageFactory & _FlaxInstanceType<Image> & _FlaxDartType<Image, readonly ["class", "flax.core/sdk_dart_ui#type:Image", readonly [], false]> = _flaxBindInstanceType<Image, typeof _ImageFactory>(_ImageFactory, "flax.core/sdk_dart_ui#type:Image", ["dart:core::Object"]) as typeof _ImageFactory & _FlaxInstanceType<Image> & _FlaxDartType<Image, readonly ["class", "flax.core/sdk_dart_ui#type:Image", readonly [], false]>;

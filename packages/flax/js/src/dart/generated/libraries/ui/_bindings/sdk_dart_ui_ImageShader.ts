// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Shader';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Shader';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_TileMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TileMode';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_FilterQuality';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FilterQuality';
const _flaxMemberParameters0 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ImageShader extends Omit<upstream0.Shader, typeof _flaxDartTypeValue | "debugDisposed" | "dispose" | "__flaxBound:dart:ui::ImageShader" | "__flaxBound:dart:ui::Shader">, Readonly<{ "__flaxBound:dart:ui::ImageShader": readonly [] }>, Readonly<{ "__flaxBound:dart:ui::Shader": readonly [] }> { readonly __ImageShader: unique symbol;
readonly [_flaxDartTypeValue]: ImageShader;

}
defineObject("flax.core/sdk_dart_ui#type:ImageShader", ["debugDisposed"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:ImageShader", "object", {}, {}), [], undefined, "flax.core/sdk_dart_ui#type:Shader");
const _ImageShaderProxy = {type: "flax.core/sdk_dart_ui#type:ImageShader", parameters: [{"name":"image","required":true,"positional":true},{"name":"tmx","required":true,"positional":true},{"name":"tmy","required":true,"positional":true},{"name":"matrix4","required":true,"positional":true},{"name":"filterQuality","required":false,"positional":false}], constructors: {"":[{"name":"image","required":true,"positional":true},{"name":"tmx","required":true,"positional":true},{"name":"tmy","required":true,"positional":true},{"name":"matrix4","required":true,"positional":true},{"name":"filterQuality","required":false,"positional":false}]}, methods: {"dispose":_flaxMemberParameters0}, getters: ["debugDisposed"], setters: [], contextMembers: [], superMembers: ["get:debugDisposed","dispose"]} as const;
export interface ImageShader {
readonly [_flaxDartTypeValue]: ImageShader;

dispose(): void;
get debugDisposed(): boolean;
}
export abstract class ImageShader extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ImageShader>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ImageShader;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:ImageShader", readonly [], false];
constructor(image: Readonly<{ "__flaxBound:dart:ui::Image": readonly [] }>, tmx: upstream2.TileMode, tmy: upstream2.TileMode, matrix4: globalThis.Float64Array, options?: {filterQuality?: upstream3.FilterQuality | null | undefined}) { super(_ImageShaderProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ImageShader.prototype, _ImageShaderProxy);
export namespace ImageShader { export function implement(args: [image: Readonly<{ "__flaxBound:dart:ui::Image": readonly [] }>, tmx: upstream2.TileMode, tmy: upstream2.TileMode, matrix4: globalThis.Float64Array, options?: {filterQuality?: upstream3.FilterQuality | null | undefined}], implementation: {}): ImageShader {
return constructProxy(_ImageShaderProxy, args, implementation) as ImageShader; } }
_flaxBindInstanceType<ImageShader, typeof ImageShader>(ImageShader, "flax.core/sdk_dart_ui#type:ImageShader", ["flax.core/sdk_dart_ui#type:Shader","dart:core::Object"]);

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
const _flaxMemberParameters0 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PictureRasterizationException extends Readonly<{ "__flaxBound:dart:ui::PictureRasterizationException": readonly [] }>, Readonly<{ "__flaxBound:dart:core::Exception": readonly [] }> { readonly __PictureRasterizationException: unique symbol;
readonly [_flaxDartTypeValue]: PictureRasterizationException;

readonly message: string;
readonly stack: upstream0.StackTrace | null;
toString(): string;
}
defineObject("flax.core/sdk_dart_ui#type:PictureRasterizationException", ["message","stack"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:PictureRasterizationException", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _PictureRasterizationExceptionProxy = {type: "flax.core/sdk_dart_ui#type:PictureRasterizationException", parameters: [], constructors: {}, methods: {"toString":_flaxMemberParameters0}, getters: ["message","stack"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _PictureRasterizationExceptionFactory { export function implement(args: [], implementation: {toString: (() => string); get message(): string; get stack(): Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }> | null}): PictureRasterizationException {
return constructProxy(_PictureRasterizationExceptionProxy, args, implementation) as PictureRasterizationException; } }
export const PictureRasterizationException: typeof _PictureRasterizationExceptionFactory & _FlaxInstanceType<PictureRasterizationException> & _FlaxDartType<PictureRasterizationException, readonly ["class", "flax.core/sdk_dart_ui#type:PictureRasterizationException", readonly [], false]> = _flaxBindInstanceType<PictureRasterizationException, typeof _PictureRasterizationExceptionFactory>(_PictureRasterizationExceptionFactory, "flax.core/sdk_dart_ui#type:PictureRasterizationException", ["dart:core::Object","dart:core::Exception"]) as typeof _PictureRasterizationExceptionFactory & _FlaxInstanceType<PictureRasterizationException> & _FlaxDartType<PictureRasterizationException, readonly ["class", "flax.core/sdk_dart_ui#type:PictureRasterizationException", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "message" | "stack" | "toString" | "__flaxBound:dart:ui::PictureRasterizationException" | "__flaxBound:dart:core::Exception";

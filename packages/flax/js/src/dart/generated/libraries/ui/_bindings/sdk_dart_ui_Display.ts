// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
const _flaxMemberParameters0 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Display extends Readonly<{ "__flaxBound:dart:ui::Display": readonly [] }> { readonly __Display: unique symbol;
readonly [_flaxDartTypeValue]: Display;

readonly id: number;
readonly devicePixelRatio: number;
readonly size: upstream0.Size;
readonly refreshRate: number;
toString(): string;
}
defineObject("flax.core/sdk_dart_ui#type:Display", ["id","devicePixelRatio","size","refreshRate"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:Display", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _DisplayProxy = {type: "flax.core/sdk_dart_ui#type:Display", parameters: [], constructors: {}, methods: {"toString":_flaxMemberParameters0}, getters: ["id","devicePixelRatio","size","refreshRate"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _DisplayFactory { export function implement(args: [], implementation: {toString: (() => string); get id(): number; get devicePixelRatio(): number; get size(): Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; get refreshRate(): number}): Display {
return constructProxy(_DisplayProxy, args, implementation) as Display; } }
export const Display: typeof _DisplayFactory & _FlaxInstanceType<Display> & _FlaxDartType<Display, readonly ["class", "flax.core/sdk_dart_ui#type:Display", readonly [], false]> = _flaxBindInstanceType<Display, typeof _DisplayFactory>(_DisplayFactory, "flax.core/sdk_dart_ui#type:Display", ["dart:core::Object"]) as typeof _DisplayFactory & _FlaxInstanceType<Display> & _FlaxDartType<Display, readonly ["class", "flax.core/sdk_dart_ui#type:Display", readonly [], false]>;

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
const _flaxMemberParameters0 = [{"name":"host","required":true,"positional":true},{"name":"guest","required":true,"positional":true}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface NotchedShape extends Readonly<{ "__flaxBound:package:flutter/src/painting/notched_shapes.dart::NotchedShape": readonly [] }> { readonly __NotchedShape: unique symbol;
readonly [_flaxDartTypeValue]: NotchedShape;

getOuterPath(host: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, guest: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null): upstream0.Path;
}
defineObject("flax.core/sdk_painting#type:NotchedShape", [], [], _flaxBindingMethods("flax.core/sdk_painting#type:NotchedShape", "object", {"getOuterPath":_flaxMemberParameters0}, {}), []);
const _NotchedShapeProxy = {type: "flax.core/sdk_painting#type:NotchedShape", parameters: [], constructors: {}, methods: {"getOuterPath":_flaxMemberParameters0}, getters: [], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _NotchedShapeFactory { export function implement(args: [], implementation: {getOuterPath: ((host: upstream1.Rect, guest: upstream1.Rect | null) => Readonly<{ "__flaxBound:dart:ui::Path": readonly [] }>)}): NotchedShape {
return constructProxy(_NotchedShapeProxy, args, implementation) as NotchedShape; } }
export const NotchedShape: typeof _NotchedShapeFactory & _FlaxInstanceType<NotchedShape> & _FlaxDartType<NotchedShape, readonly ["class", "flax.core/sdk_painting#type:NotchedShape", readonly [], false]> = _flaxBindInstanceType<NotchedShape, typeof _NotchedShapeFactory>(_NotchedShapeFactory, "flax.core/sdk_painting#type:NotchedShape", ["dart:core::Object"]) as typeof _NotchedShapeFactory & _FlaxInstanceType<NotchedShape> & _FlaxDartType<NotchedShape, readonly ["class", "flax.core/sdk_painting#type:NotchedShape", readonly [], false]>;

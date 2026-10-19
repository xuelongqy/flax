// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_NotchedShape';
import '@flax/flutter/painting/_bindings/sdk_painting_NotchedShape';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
const _flaxMemberParameters0 = [{"name":"inverted"}] as const;
const _flaxMemberParameters1 = [{"name":"host","required":true,"positional":true},{"name":"guest","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CircularNotchedRectangle extends Omit<upstream0.NotchedShape, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/painting/notched_shapes.dart::CircularNotchedRectangle": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/notched_shapes.dart::NotchedShape": readonly [] }> { readonly __CircularNotchedRectangle: unique symbol;
readonly [_flaxDartTypeValue]: CircularNotchedRectangle;

}
defineObject("flax.core/sdk_painting#type:CircularNotchedRectangle", ["inverted"], [], _flaxBindingMethods("flax.core/sdk_painting#type:CircularNotchedRectangle", "object", {}, {}), [], undefined, "flax.core/sdk_painting#type:NotchedShape");
const _CircularNotchedRectangleProxy = {type: "flax.core/sdk_painting#type:CircularNotchedRectangle", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"getOuterPath":_flaxMemberParameters1}, getters: ["inverted"], setters: [], contextMembers: [], superMembers: ["get:inverted","getOuterPath"]} as const;
export interface CircularNotchedRectangle {
readonly [_flaxDartTypeValue]: CircularNotchedRectangle;

getOuterPath(host: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, guest: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null): upstream1.Path;
get inverted(): boolean;
}
export abstract class CircularNotchedRectangle extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CircularNotchedRectangle>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CircularNotchedRectangle;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:CircularNotchedRectangle", readonly [], false];
constructor(options?: {inverted?: boolean | undefined}) { super(_CircularNotchedRectangleProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(CircularNotchedRectangle.prototype, _CircularNotchedRectangleProxy);
export namespace CircularNotchedRectangle { export function implement(args: [options?: {inverted?: boolean | undefined}], implementation: {}): CircularNotchedRectangle {
return constructProxy(_CircularNotchedRectangleProxy, args, implementation) as CircularNotchedRectangle; } }
_flaxBindInstanceType<CircularNotchedRectangle, typeof CircularNotchedRectangle>(CircularNotchedRectangle, "flax.core/sdk_painting#type:CircularNotchedRectangle", ["flax.core/sdk_painting#type:NotchedShape","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "inverted" | "getOuterPath" | "__flaxBound:package:flutter/src/painting/notched_shapes.dart::CircularNotchedRectangle" | "__flaxBound:package:flutter/src/painting/notched_shapes.dart::NotchedShape";

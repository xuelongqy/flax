// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_NotchedShape';
import '@flax/flutter/painting/_bindings/sdk_painting_NotchedShape';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import { _flaxMemberParameters10, _flaxMemberParameters11 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AutomaticNotchedShape extends Omit<upstream0.NotchedShape, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/painting/notched_shapes.dart::AutomaticNotchedShape": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/notched_shapes.dart::NotchedShape": readonly [] }> { readonly __AutomaticNotchedShape: unique symbol;
readonly [_flaxDartTypeValue]: AutomaticNotchedShape;

readonly host: upstream1.ShapeBorder;
readonly guest: upstream1.ShapeBorder | null;
getOuterPath(hostRect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, guestRect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null): upstream2.Path;
}
defineObject("flax.core/sdk_painting#type:AutomaticNotchedShape", ["host","guest"], [], _flaxBindingMethods("flax.core/sdk_painting#type:AutomaticNotchedShape", "object", {"getOuterPath":_flaxMemberParameters10}, {}), [], undefined, "flax.core/sdk_painting#type:NotchedShape");
export function _AutomaticNotchedShapeFactory(host: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, guest?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null): AutomaticNotchedShape {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:AutomaticNotchedShape", "", [{"name":"host","required":true,"positional":true},{"name":"guest","positional":true}], [host, guest], {}) as AutomaticNotchedShape;
}
const _AutomaticNotchedShapeProxy = {type: "flax.core/sdk_painting#type:AutomaticNotchedShape", parameters: _flaxMemberParameters11, constructors: {"": _flaxMemberParameters11}, methods: {"getOuterPath":_flaxMemberParameters10}, getters: ["host","guest"], setters: [], contextMembers: [], superMembers: ["get:host","get:guest","getOuterPath"]} as const;
export interface _AutomaticNotchedShapeNative extends AutomaticNotchedShape {
readonly [_flaxDartTypeValue]: _AutomaticNotchedShapeNative;

getOuterPath(hostRect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, guestRect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null): upstream2.Path;
get host(): upstream1.ShapeBorder;
get guest(): upstream1.ShapeBorder | null;
}
export abstract class _AutomaticNotchedShapeNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AutomaticNotchedShape>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AutomaticNotchedShape;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:AutomaticNotchedShape", readonly [], false];
constructor(host: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, guest?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null) { super(_AutomaticNotchedShapeProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_AutomaticNotchedShapeNative.prototype, _AutomaticNotchedShapeProxy);
export namespace _AutomaticNotchedShapeFactory { export function implement(args: [host: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, guest?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null], implementation: {}): AutomaticNotchedShape {
return constructProxy(_AutomaticNotchedShapeProxy, args, implementation) as AutomaticNotchedShape; } }
const _AutomaticNotchedShapeBinding = _flaxProxyFactory(_AutomaticNotchedShapeFactory, _AutomaticNotchedShapeNative) as unknown as typeof _AutomaticNotchedShapeFactory & (new(host: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>, guest?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null) => _AutomaticNotchedShapeNative);
export const AutomaticNotchedShape: typeof _AutomaticNotchedShapeBinding & _FlaxInstanceType<AutomaticNotchedShape> & _FlaxDartType<AutomaticNotchedShape, readonly ["class", "flax.core/sdk_painting#type:AutomaticNotchedShape", readonly [], false]> = _flaxBindInstanceType<AutomaticNotchedShape, typeof _AutomaticNotchedShapeBinding>(_AutomaticNotchedShapeBinding, "flax.core/sdk_painting#type:AutomaticNotchedShape", ["flax.core/sdk_painting#type:NotchedShape","dart:core::Object"]) as typeof _AutomaticNotchedShapeBinding & _FlaxInstanceType<AutomaticNotchedShape> & _FlaxDartType<AutomaticNotchedShape, readonly ["class", "flax.core/sdk_painting#type:AutomaticNotchedShape", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "host" | "guest" | "getOuterPath" | "__flaxBound:package:flutter/src/painting/notched_shapes.dart::AutomaticNotchedShape" | "__flaxBound:package:flutter/src/painting/notched_shapes.dart::NotchedShape";

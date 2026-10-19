// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/flutter/painting/_bindings/sdk_painting_ImageConfiguration';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageConfiguration';
const _flaxMemberParameters0 = [{"name":"canvas","required":true,"positional":true},{"name":"offset","required":true,"positional":true},{"name":"configuration","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"onChanged","positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BoxPainter extends Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::BoxPainter": readonly [] }> { readonly __BoxPainter: unique symbol;
readonly [_flaxDartTypeValue]: BoxPainter;

}
defineObject("flax.core/sdk_painting#type:BoxPainter", ["onChanged"], [], _flaxBindingMethods("flax.core/sdk_painting#type:BoxPainter", "object", {"paint":_flaxMemberParameters0,"dispose":_flaxMemberParameters1}, {}), []);
const _BoxPainterProxy = {type: "flax.core/sdk_painting#type:BoxPainter", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"paint":_flaxMemberParameters0,"dispose":_flaxMemberParameters1}, getters: ["onChanged"], setters: [], contextMembers: [], superMembers: ["get:onChanged","dispose"]} as const;
export interface BoxPainter {
readonly [_flaxDartTypeValue]: BoxPainter;

dispose(): void;
get onChanged(): (() => void) | null;
}
export abstract class BoxPainter extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BoxPainter>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: BoxPainter;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:BoxPainter", readonly [], false];
constructor(onChanged?: (() => void) | null) { super(_BoxPainterProxy, Array.from(arguments)); }
abstract paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>): void;
}
_flaxDefineProxyBase(BoxPainter.prototype, _BoxPainterProxy);
export namespace BoxPainter { export function implement(args: [onChanged?: (() => void) | null], implementation: {paint: ((canvas: upstream0.Canvas, offset: upstream1.Offset, configuration: upstream2.ImageConfiguration) => void)}): BoxPainter {
return constructProxy(_BoxPainterProxy, args, implementation) as BoxPainter; } }
_flaxBindInstanceType<BoxPainter, typeof BoxPainter>(BoxPainter, "flax.core/sdk_painting#type:BoxPainter", ["dart:core::Object"]);

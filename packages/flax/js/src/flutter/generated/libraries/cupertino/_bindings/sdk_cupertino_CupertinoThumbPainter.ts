// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/painting/_bindings/sdk_painting_BoxShadow';
import '@flax/flutter/painting/_bindings/sdk_painting_BoxShadow';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
const _flaxMemberParameters0 = [{"name":"canvas","required":true,"positional":true},{"name":"rect","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/cupertino/_bindings/sdk_cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CupertinoThumbPainter extends Readonly<{ "__flaxBound:package:flutter/src/cupertino/thumb_painter.dart::CupertinoThumbPainter": readonly [] }> { readonly __CupertinoThumbPainter: unique symbol;
readonly [_flaxDartTypeValue]: CupertinoThumbPainter;

}
defineObject("flax.core/sdk_cupertino#type:CupertinoThumbPainter", ["color","shadows"], [], _flaxBindingMethods("flax.core/sdk_cupertino#type:CupertinoThumbPainter", "object", {"paint":_flaxMemberParameters0}, {}), []);
const _CupertinoThumbPainterProxy = {type: "flax.core/sdk_cupertino#type:CupertinoThumbPainter", parameters: [{"name":"color","required":false,"positional":false},{"name":"shadows","required":false,"positional":false}], constructors: {"":[{"name":"color","required":false,"positional":false},{"name":"shadows","required":false,"positional":false}]}, methods: {"paint":_flaxMemberParameters0}, getters: ["color","shadows"], setters: [], contextMembers: [], superMembers: ["get:color","get:shadows","paint"]} as const;
export interface CupertinoThumbPainter {
readonly [_flaxDartTypeValue]: CupertinoThumbPainter;

paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>): void;
get color(): upstream0.Color;
get shadows(): DartList<upstream1.BoxShadow>;
}
export abstract class CupertinoThumbPainter extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CupertinoThumbPainter>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CupertinoThumbPainter;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_cupertino#type:CupertinoThumbPainter", readonly [], false];
constructor(options?: {color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; shadows?: DartListInput<upstream1.BoxShadow, Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | undefined}) { super(_CupertinoThumbPainterProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(CupertinoThumbPainter.prototype, _CupertinoThumbPainterProxy);
export namespace CupertinoThumbPainter { export function implement(args: [options?: {color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; shadows?: DartListInput<upstream1.BoxShadow, Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | undefined}], implementation: {}): CupertinoThumbPainter {
return constructProxy(_CupertinoThumbPainterProxy, args, implementation) as CupertinoThumbPainter; } }
export namespace CupertinoThumbPainter { export declare const radius: number; }
export namespace CupertinoThumbPainter { export declare const extension: number; }
_flaxDefineStaticGetters(CupertinoThumbPainter, "flax.core/sdk_cupertino#read:CupertinoThumbPainter.", ["radius","extension"]);
_flaxBindInstanceType<CupertinoThumbPainter, typeof CupertinoThumbPainter>(CupertinoThumbPainter, "flax.core/sdk_cupertino#type:CupertinoThumbPainter", ["dart:core::Object"]);

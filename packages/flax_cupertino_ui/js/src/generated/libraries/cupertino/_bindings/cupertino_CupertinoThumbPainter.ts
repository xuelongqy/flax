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
import { _flaxMemberParameters62, _flaxMemberParameters63 } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CupertinoThumbPainter extends Readonly<{ "__flaxBound:package:cupertino_ui/src/thumb_painter.dart::CupertinoThumbPainter": readonly [] }> { readonly __CupertinoThumbPainter: unique symbol;
readonly [_flaxDartTypeValue]: CupertinoThumbPainter;

readonly color: upstream0.Color;
readonly shadows: DartList<upstream1.BoxShadow>;
paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>): void;
}
defineObject("flax.cupertino/cupertino#type:CupertinoThumbPainter", ["color","shadows"], [], _flaxBindingMethods("flax.cupertino/cupertino#type:CupertinoThumbPainter", "object", {"paint":_flaxMemberParameters62}, {}), []);
export function _CupertinoThumbPainterFactory(options: { color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; shadows?: DartListInput<upstream1.BoxShadow, Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | undefined } = {}): CupertinoThumbPainter {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/cupertino#type:CupertinoThumbPainter", "", [{"name":"color"},{"name":"shadows"}], [], options) as CupertinoThumbPainter;
}
export namespace _CupertinoThumbPainterFactory {
export function switchThumb(options: { color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; shadows?: DartListInput<upstream1.BoxShadow, Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | undefined } = {}): CupertinoThumbPainter {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/cupertino#type:CupertinoThumbPainter", "switchThumb", [{"name":"color"},{"name":"shadows"}], [], options) as CupertinoThumbPainter;
}
}
const _CupertinoThumbPainterProxy = {type: "flax.cupertino/cupertino#type:CupertinoThumbPainter", parameters: _flaxMemberParameters63, constructors: {"": _flaxMemberParameters63,"switchThumb": _flaxMemberParameters63}, methods: {"paint":_flaxMemberParameters62}, getters: ["color","shadows"], setters: [], contextMembers: [], superMembers: ["get:color","get:shadows","paint"]} as const;
export interface _CupertinoThumbPainterNative extends CupertinoThumbPainter {
readonly [_flaxDartTypeValue]: _CupertinoThumbPainterNative;
readonly [_flaxDartConstructors]?: {"": (options?: {color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; shadows?: DartListInput<upstream1.BoxShadow, Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | undefined}) => void;"switchThumb": (options?: {color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; shadows?: DartListInput<upstream1.BoxShadow, Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | undefined}) => void;};

paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>): void;
get color(): upstream0.Color;
get shadows(): DartList<upstream1.BoxShadow>;
}
export abstract class _CupertinoThumbPainterNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CupertinoThumbPainter>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CupertinoThumbPainter;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.cupertino/cupertino#type:CupertinoThumbPainter", readonly [], false];
constructor(options?: {color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; shadows?: DartListInput<upstream1.BoxShadow, Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | undefined}); constructor(call: _FlaxProxySuper<_CupertinoThumbPainterNative>); constructor(...args: unknown[]) { super(_CupertinoThumbPainterProxy, args); }
}
_flaxDefineProxyBase(_CupertinoThumbPainterNative.prototype, _CupertinoThumbPainterProxy);
export namespace _CupertinoThumbPainterFactory { export function implement(args: [options?: {color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; shadows?: DartListInput<upstream1.BoxShadow, Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | undefined}], implementation: {}): CupertinoThumbPainter {
return constructProxy(_CupertinoThumbPainterProxy, args, implementation) as CupertinoThumbPainter; } }
const _CupertinoThumbPainterBinding = _flaxProxyFactory(_CupertinoThumbPainterFactory, _CupertinoThumbPainterNative) as unknown as typeof _CupertinoThumbPainterFactory & (new(options?: {color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; shadows?: DartListInput<upstream1.BoxShadow, Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | undefined}) => _CupertinoThumbPainterNative) & (new(call: _FlaxProxySuper<_CupertinoThumbPainterNative>) => _CupertinoThumbPainterNative);
export namespace _CupertinoThumbPainterFactory { export declare const radius: number; }
export namespace _CupertinoThumbPainterFactory { export declare const extension: number; }
_flaxDefineStaticGetters(_CupertinoThumbPainterFactory, "flax.cupertino/cupertino#read:CupertinoThumbPainter.", ["radius","extension"]);
export const CupertinoThumbPainter: typeof _CupertinoThumbPainterBinding & _FlaxInstanceType<CupertinoThumbPainter> & _FlaxDartType<CupertinoThumbPainter, readonly ["class", "flax.cupertino/cupertino#type:CupertinoThumbPainter", readonly [], false]> = _flaxBindInstanceType<CupertinoThumbPainter, typeof _CupertinoThumbPainterBinding>(_CupertinoThumbPainterBinding, "flax.cupertino/cupertino#type:CupertinoThumbPainter", ["dart:core::Object"]) as typeof _CupertinoThumbPainterBinding & _FlaxInstanceType<CupertinoThumbPainter> & _FlaxDartType<CupertinoThumbPainter, readonly ["class", "flax.cupertino/cupertino#type:CupertinoThumbPainter", readonly [], false]>;

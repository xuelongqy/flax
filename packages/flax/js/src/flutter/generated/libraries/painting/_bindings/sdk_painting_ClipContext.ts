// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_RRect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_RRect';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_RSuperellipse';
import '@flax/dart/ui/_bindings/sdk_dart_ui_RSuperellipse';
const _flaxMemberParameters0 = [{"name":"path","required":true,"positional":true},{"name":"clipBehavior","required":true,"positional":true},{"name":"bounds","required":true,"positional":true},{"name":"painter","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"rrect","required":true,"positional":true},{"name":"clipBehavior","required":true,"positional":true},{"name":"bounds","required":true,"positional":true},{"name":"painter","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"rse","required":true,"positional":true},{"name":"clipBehavior","required":true,"positional":true},{"name":"bounds","required":true,"positional":true},{"name":"painter","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"rect","required":true,"positional":true},{"name":"clipBehavior","required":true,"positional":true},{"name":"bounds","required":true,"positional":true},{"name":"painter","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ClipContext extends Readonly<{ "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext": readonly [] }> { readonly __ClipContext: unique symbol;
readonly [_flaxDartTypeValue]: ClipContext;

}
defineObject("flax.core/sdk_painting#type:ClipContext", ["canvas"], [], _flaxBindingMethods("flax.core/sdk_painting#type:ClipContext", "object", {"clipPathAndPaint":_flaxMemberParameters0,"clipRRectAndPaint":_flaxMemberParameters1,"clipRSuperellipseAndPaint":_flaxMemberParameters2,"clipRectAndPaint":_flaxMemberParameters3}, {}), []);
const _ClipContextProxy = {type: "flax.core/sdk_painting#type:ClipContext", parameters: [], constructors: {"":[]}, methods: {"clipPathAndPaint":_flaxMemberParameters0,"clipRRectAndPaint":_flaxMemberParameters1,"clipRSuperellipseAndPaint":_flaxMemberParameters2,"clipRectAndPaint":_flaxMemberParameters3}, getters: ["canvas"], setters: [], contextMembers: [], superMembers: ["clipPathAndPaint","clipRRectAndPaint","clipRSuperellipseAndPaint","clipRectAndPaint"]} as const;
export interface ClipContext {
readonly [_flaxDartTypeValue]: ClipContext;

clipPathAndPaint(path: Readonly<{ "__flaxBound:dart:ui::Path": readonly [] }>, clipBehavior: upstream2.Clip, bounds: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, painter: (() => void)): void;
clipRRectAndPaint(rrect: Readonly<{ "__flaxBound:dart:ui::RRect": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::_RRectLike": readonly [upstream4.RRect] }>, clipBehavior: upstream2.Clip, bounds: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, painter: (() => void)): void;
clipRSuperellipseAndPaint(rse: Readonly<{ "__flaxBound:dart:ui::RSuperellipse": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::_RRectLike": readonly [upstream5.RSuperellipse] }>, clipBehavior: upstream2.Clip, bounds: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, painter: (() => void)): void;
clipRectAndPaint(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, clipBehavior: upstream2.Clip, bounds: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, painter: (() => void)): void;
}
export abstract class ClipContext extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ClipContext>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ClipContext;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:ClipContext", readonly [], false];
constructor() { super(_ClipContextProxy, Array.from(arguments)); }
abstract get canvas(): upstream0.Canvas;
}
_flaxDefineProxyBase(ClipContext.prototype, _ClipContextProxy);
export namespace ClipContext { export function implement(args: [], implementation: {get canvas(): Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>}): ClipContext {
return constructProxy(_ClipContextProxy, args, implementation) as ClipContext; } }
_flaxBindInstanceType<ClipContext, typeof ClipContext>(ClipContext, "flax.core/sdk_painting#type:ClipContext", ["dart:core::Object"]);

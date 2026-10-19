// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartRecord as _FlaxDartRecord } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_FloatingCursorDragState';
import '@flax/flutter/services/_bindings/sdk_services_FloatingCursorDragState';
const _flaxMemberParameters0 = [{"name":"offset"},{"name":"startLocation"},{"name":"state","required":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RawFloatingCursorPoint extends Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::RawFloatingCursorPoint": readonly [] }> { readonly __RawFloatingCursorPoint: unique symbol;
readonly [_flaxDartTypeValue]: RawFloatingCursorPoint;

}
defineObject("flax.core/sdk_services#type:RawFloatingCursorPoint", ["offset","startLocation","state"], [], _flaxBindingMethods("flax.core/sdk_services#type:RawFloatingCursorPoint", "object", {}, {}), []);
const _RawFloatingCursorPointProxy = {type: "flax.core/sdk_services#type:RawFloatingCursorPoint", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {}, getters: ["offset","startLocation","state"], setters: [], contextMembers: [], superMembers: ["get:offset","get:startLocation","get:state"]} as const;
export interface RawFloatingCursorPoint {
readonly [_flaxDartTypeValue]: RawFloatingCursorPoint;

get offset(): upstream0.Offset | null;
get startLocation(): _FlaxDartRecord<{ readonly $1: upstream0.Offset; readonly $2: upstream1.TextPosition }> | null;
get state(): upstream2.FloatingCursorDragState;
}
export abstract class RawFloatingCursorPoint extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RawFloatingCursorPoint>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RawFloatingCursorPoint;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:RawFloatingCursorPoint", readonly [], false];
constructor(options: {offset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; startLocation?: { readonly $1: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; readonly $2: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }> } | null | undefined; state: upstream2.FloatingCursorDragState}) { super(_RawFloatingCursorPointProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(RawFloatingCursorPoint.prototype, _RawFloatingCursorPointProxy);
export namespace RawFloatingCursorPoint { export function implement(args: [options: {offset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; startLocation?: { readonly $1: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; readonly $2: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }> } | null | undefined; state: upstream2.FloatingCursorDragState}], implementation: {}): RawFloatingCursorPoint {
return constructProxy(_RawFloatingCursorPointProxy, args, implementation) as RawFloatingCursorPoint; } }
_flaxBindInstanceType<RawFloatingCursorPoint, typeof RawFloatingCursorPoint>(RawFloatingCursorPoint, "flax.core/sdk_services#type:RawFloatingCursorPoint", ["dart:core::Object"]);

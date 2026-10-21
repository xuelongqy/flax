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
import { _flaxMemberParameters76 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RawFloatingCursorPoint extends Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::RawFloatingCursorPoint": readonly [] }> { readonly __RawFloatingCursorPoint: unique symbol;
readonly [_flaxDartTypeValue]: RawFloatingCursorPoint;

readonly offset: upstream0.Offset | null;
readonly startLocation: _FlaxDartRecord<{ readonly $1: upstream0.Offset; readonly $2: upstream1.TextPosition }> | null;
readonly state: upstream2.FloatingCursorDragState;
}
defineObject("flax.core/sdk_services#type:RawFloatingCursorPoint", ["offset","startLocation","state"], [], _flaxBindingMethods("flax.core/sdk_services#type:RawFloatingCursorPoint", "object", {}, {}), []);
export function _RawFloatingCursorPointFactory(options: { offset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; startLocation?: { readonly $1: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; readonly $2: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }> } | null | undefined; state: upstream2.FloatingCursorDragState }): RawFloatingCursorPoint {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:RawFloatingCursorPoint", "", [{"name":"offset"},{"name":"startLocation"},{"name":"state","required":true}], [], options) as RawFloatingCursorPoint;
}
const _RawFloatingCursorPointProxy = {type: "flax.core/sdk_services#type:RawFloatingCursorPoint", parameters: _flaxMemberParameters76, constructors: {"": _flaxMemberParameters76}, methods: {}, getters: ["offset","startLocation","state"], setters: [], contextMembers: [], superMembers: ["get:offset","get:startLocation","get:state"]} as const;
export interface _RawFloatingCursorPointNative extends RawFloatingCursorPoint {
readonly [_flaxDartTypeValue]: _RawFloatingCursorPointNative;

get offset(): upstream0.Offset | null;
get startLocation(): _FlaxDartRecord<{ readonly $1: upstream0.Offset; readonly $2: upstream1.TextPosition }> | null;
get state(): upstream2.FloatingCursorDragState;
}
export abstract class _RawFloatingCursorPointNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RawFloatingCursorPoint>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RawFloatingCursorPoint;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:RawFloatingCursorPoint", readonly [], false];
constructor(options: {offset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; startLocation?: { readonly $1: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; readonly $2: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }> } | null | undefined; state: upstream2.FloatingCursorDragState}) { super(_RawFloatingCursorPointProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_RawFloatingCursorPointNative.prototype, _RawFloatingCursorPointProxy);
export namespace _RawFloatingCursorPointFactory { export function implement(args: [options: {offset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; startLocation?: { readonly $1: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; readonly $2: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }> } | null | undefined; state: upstream2.FloatingCursorDragState}], implementation: {}): RawFloatingCursorPoint {
return constructProxy(_RawFloatingCursorPointProxy, args, implementation) as RawFloatingCursorPoint; } }
const _RawFloatingCursorPointBinding = _flaxProxyFactory(_RawFloatingCursorPointFactory, _RawFloatingCursorPointNative) as unknown as typeof _RawFloatingCursorPointFactory & (new(options: {offset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; startLocation?: { readonly $1: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; readonly $2: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }> } | null | undefined; state: upstream2.FloatingCursorDragState}) => _RawFloatingCursorPointNative);
export const RawFloatingCursorPoint: typeof _RawFloatingCursorPointBinding & _FlaxInstanceType<RawFloatingCursorPoint> & _FlaxDartType<RawFloatingCursorPoint, readonly ["class", "flax.core/sdk_services#type:RawFloatingCursorPoint", readonly [], false]> = _flaxBindInstanceType<RawFloatingCursorPoint, typeof _RawFloatingCursorPointBinding>(_RawFloatingCursorPointBinding, "flax.core/sdk_services#type:RawFloatingCursorPoint", ["dart:core::Object"]) as typeof _RawFloatingCursorPointBinding & _FlaxInstanceType<RawFloatingCursorPoint> & _FlaxDartType<RawFloatingCursorPoint, readonly ["class", "flax.core/sdk_services#type:RawFloatingCursorPoint", readonly [], false]>;

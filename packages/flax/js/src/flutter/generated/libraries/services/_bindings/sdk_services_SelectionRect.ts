// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { _flaxMemberParameters0, _flaxMemberParameters87 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SelectionRect extends Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::SelectionRect": readonly [] }> { readonly __SelectionRect: unique symbol;
readonly [_flaxDartTypeValue]: SelectionRect;

readonly position: number;
readonly bounds: upstream0.Rect;
readonly direction: upstream1.TextDirection;
toString(): string;
}
defineObject("flax.core/sdk_services#type:SelectionRect", ["position","bounds","direction"], [], _flaxBindingMethods("flax.core/sdk_services#type:SelectionRect", "object", {"toString":_flaxMemberParameters0}, {}), []);
export function _SelectionRectFactory(options: { position: number; bounds: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>; direction?: upstream1.TextDirection | undefined }): SelectionRect {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:SelectionRect", "", [{"name":"position","required":true},{"name":"bounds","required":true},{"name":"direction"}], [], options) as SelectionRect;
}
const _SelectionRectProxy = {type: "flax.core/sdk_services#type:SelectionRect", parameters: _flaxMemberParameters87, constructors: {"": _flaxMemberParameters87}, methods: {"toString":_flaxMemberParameters0}, getters: ["position","bounds","direction"], setters: [], contextMembers: [], superMembers: ["get:position","get:bounds","get:direction","toString"]} as const;
export interface _SelectionRectNative extends SelectionRect {
readonly [_flaxDartTypeValue]: _SelectionRectNative;

toString(): string;
get position(): number;
get bounds(): upstream0.Rect;
get direction(): upstream1.TextDirection;
}
export abstract class _SelectionRectNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SelectionRect>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SelectionRect;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:SelectionRect", readonly [], false];
constructor(options: {position: number; bounds: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>; direction?: upstream1.TextDirection | undefined}) { super(_SelectionRectProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SelectionRectNative.prototype, _SelectionRectProxy);
export namespace _SelectionRectFactory { export function implement(args: [options: {position: number; bounds: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>; direction?: upstream1.TextDirection | undefined}], implementation: {}): SelectionRect {
return constructProxy(_SelectionRectProxy, args, implementation) as SelectionRect; } }
const _SelectionRectBinding = _flaxProxyFactory(_SelectionRectFactory, _SelectionRectNative) as unknown as typeof _SelectionRectFactory & (new(options: {position: number; bounds: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>; direction?: upstream1.TextDirection | undefined}) => _SelectionRectNative);
export const SelectionRect: typeof _SelectionRectBinding & _FlaxInstanceType<SelectionRect> & _FlaxDartType<SelectionRect, readonly ["class", "flax.core/sdk_services#type:SelectionRect", readonly [], false]> = _flaxBindInstanceType<SelectionRect, typeof _SelectionRectBinding>(_SelectionRectBinding, "flax.core/sdk_services#type:SelectionRect", ["dart:core::Object"]) as typeof _SelectionRectBinding & _FlaxInstanceType<SelectionRect> & _FlaxDartType<SelectionRect, readonly ["class", "flax.core/sdk_services#type:SelectionRect", readonly [], false]>;

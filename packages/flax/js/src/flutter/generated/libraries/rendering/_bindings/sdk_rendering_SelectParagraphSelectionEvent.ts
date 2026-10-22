// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import { _flaxMemberParameters335 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SelectParagraphSelectionEvent extends Omit<upstream0.SelectionEvent, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectParagraphSelectionEvent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [] }> { readonly __SelectParagraphSelectionEvent: unique symbol;
readonly [_flaxDartTypeValue]: SelectParagraphSelectionEvent;

readonly type: upstream2.SelectionEventType;
readonly globalPosition: upstream1.Offset;
readonly absorb: boolean;
}
defineObject("flax.core/sdk_rendering#type:SelectParagraphSelectionEvent", ["type","globalPosition","absorb"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:SelectParagraphSelectionEvent", "object", {}, {}), [], undefined, "flax.core/sdk_rendering#type:SelectionEvent");
export function _SelectParagraphSelectionEventFactory(options: { globalPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; absorb?: boolean | undefined }): SelectParagraphSelectionEvent {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:SelectParagraphSelectionEvent", "", [{"name":"globalPosition","required":true},{"name":"absorb"}], [], options) as SelectParagraphSelectionEvent;
}
const _SelectParagraphSelectionEventProxy = {type: "flax.core/sdk_rendering#type:SelectParagraphSelectionEvent", parameters: _flaxMemberParameters335, constructors: {"": _flaxMemberParameters335}, methods: {}, getters: ["globalPosition","absorb","type"], setters: [], contextMembers: [], superMembers: ["get:globalPosition","get:absorb","get:type"]} as const;
export interface _SelectParagraphSelectionEventNative extends SelectParagraphSelectionEvent {
readonly [_flaxDartTypeValue]: _SelectParagraphSelectionEventNative;

get globalPosition(): upstream1.Offset;
get absorb(): boolean;
get type(): upstream2.SelectionEventType;
}
export abstract class _SelectParagraphSelectionEventNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SelectParagraphSelectionEvent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SelectParagraphSelectionEvent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SelectParagraphSelectionEvent", readonly [], false];
constructor(options: {globalPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; absorb?: boolean | undefined}) { super(_SelectParagraphSelectionEventProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SelectParagraphSelectionEventNative.prototype, _SelectParagraphSelectionEventProxy);
export namespace _SelectParagraphSelectionEventFactory { export function implement(args: [options: {globalPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; absorb?: boolean | undefined}], implementation: {}): SelectParagraphSelectionEvent {
return constructProxy(_SelectParagraphSelectionEventProxy, args, implementation) as SelectParagraphSelectionEvent; } }
const _SelectParagraphSelectionEventBinding = _flaxProxyFactory(_SelectParagraphSelectionEventFactory, _SelectParagraphSelectionEventNative) as unknown as typeof _SelectParagraphSelectionEventFactory & (new(options: {globalPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; absorb?: boolean | undefined}) => _SelectParagraphSelectionEventNative);
export const SelectParagraphSelectionEvent: typeof _SelectParagraphSelectionEventBinding & _FlaxInstanceType<SelectParagraphSelectionEvent> & _FlaxDartType<SelectParagraphSelectionEvent, readonly ["class", "flax.core/sdk_rendering#type:SelectParagraphSelectionEvent", readonly [], false]> = _flaxBindInstanceType<SelectParagraphSelectionEvent, typeof _SelectParagraphSelectionEventBinding>(_SelectParagraphSelectionEventBinding, "flax.core/sdk_rendering#type:SelectParagraphSelectionEvent", ["flax.core/sdk_rendering#type:SelectionEvent","dart:core::Object"]) as typeof _SelectParagraphSelectionEventBinding & _FlaxInstanceType<SelectParagraphSelectionEvent> & _FlaxDartType<SelectParagraphSelectionEvent, readonly ["class", "flax.core/sdk_rendering#type:SelectParagraphSelectionEvent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "type" | "globalPosition" | "absorb" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectParagraphSelectionEvent" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent";

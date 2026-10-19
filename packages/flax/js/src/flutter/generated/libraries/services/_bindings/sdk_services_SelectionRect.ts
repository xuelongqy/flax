// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"position","required":true},{"name":"bounds","required":true},{"name":"direction"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SelectionRect extends Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::SelectionRect": readonly [] }> { readonly __SelectionRect: unique symbol;
readonly [_flaxDartTypeValue]: SelectionRect;

}
defineObject("flax.core/sdk_services#type:SelectionRect", ["position","bounds","direction"], [], _flaxBindingMethods("flax.core/sdk_services#type:SelectionRect", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _SelectionRectProxy = {type: "flax.core/sdk_services#type:SelectionRect", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toString":_flaxMemberParameters0}, getters: ["position","bounds","direction"], setters: [], contextMembers: [], superMembers: ["get:position","get:bounds","get:direction","toString"]} as const;
export interface SelectionRect {
readonly [_flaxDartTypeValue]: SelectionRect;

toString(): string;
get position(): number;
get bounds(): upstream0.Rect;
get direction(): upstream1.TextDirection;
}
export abstract class SelectionRect extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SelectionRect>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SelectionRect;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:SelectionRect", readonly [], false];
constructor(options: {position: number; bounds: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>; direction?: upstream1.TextDirection | undefined}) { super(_SelectionRectProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(SelectionRect.prototype, _SelectionRectProxy);
export namespace SelectionRect { export function implement(args: [options: {position: number; bounds: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>; direction?: upstream1.TextDirection | undefined}], implementation: {}): SelectionRect {
return constructProxy(_SelectionRectProxy, args, implementation) as SelectionRect; } }
_flaxBindInstanceType<SelectionRect, typeof SelectionRect>(SelectionRect, "flax.core/sdk_services#type:SelectionRect", ["dart:core::Object"]);

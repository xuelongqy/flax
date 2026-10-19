// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"point","required":true,"positional":true},{"name":"direction","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextSelectionPoint extends Readonly<{ "__flaxBound:package:flutter/src/rendering/editable.dart::TextSelectionPoint": readonly [] }> { readonly __TextSelectionPoint: unique symbol;
readonly [_flaxDartTypeValue]: TextSelectionPoint;

}
defineObject("flax.core/sdk_rendering#type:TextSelectionPoint", ["point","direction"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:TextSelectionPoint", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _TextSelectionPointProxy = {type: "flax.core/sdk_rendering#type:TextSelectionPoint", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toString":_flaxMemberParameters0}, getters: ["point","direction"], setters: [], contextMembers: [], superMembers: ["get:point","get:direction","toString"]} as const;
export interface TextSelectionPoint {
readonly [_flaxDartTypeValue]: TextSelectionPoint;

toString(): string;
get point(): upstream0.Offset;
get direction(): upstream1.TextDirection | null;
}
export abstract class TextSelectionPoint extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextSelectionPoint>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextSelectionPoint;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:TextSelectionPoint", readonly [], false];
constructor(point: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, direction: upstream1.TextDirection | null) { super(_TextSelectionPointProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TextSelectionPoint.prototype, _TextSelectionPointProxy);
export namespace TextSelectionPoint { export function implement(args: [point: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, direction: upstream1.TextDirection | null], implementation: {}): TextSelectionPoint {
return constructProxy(_TextSelectionPointProxy, args, implementation) as TextSelectionPoint; } }
_flaxBindInstanceType<TextSelectionPoint, typeof TextSelectionPoint>(TextSelectionPoint, "flax.core/sdk_rendering#type:TextSelectionPoint", ["dart:core::Object"]);

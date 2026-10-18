// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_TextAffinity';
import '@flax/dart/ui/_bindings/flutter_TextAffinity';
const _flaxMemberParameters0 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextPosition extends Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }> { readonly __TextPosition: unique symbol;
readonly [_flaxDartTypeValue]: TextPosition;

}
defineObject("flax.core/sdk_dart_ui#type:TextPosition", ["offset","affinity"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:TextPosition", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _TextPositionProxy = {type: "flax.core/sdk_dart_ui#type:TextPosition", parameters: [{"name":"offset","required":true,"positional":false},{"name":"affinity","required":false,"positional":false}], constructors: {"":[{"name":"offset","required":true,"positional":false},{"name":"affinity","required":false,"positional":false}]}, methods: {"toString":_flaxMemberParameters0}, getters: ["offset","affinity"], setters: [], contextMembers: [], superMembers: ["get:offset","get:affinity","toString"]} as const;
export interface TextPosition {
readonly [_flaxDartTypeValue]: TextPosition;

toString(): string;
get offset(): number;
get affinity(): upstream0.TextAffinity;
}
export abstract class TextPosition extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextPosition>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextPosition;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:TextPosition", readonly [], false];
constructor(options: {offset: number; affinity?: upstream0.TextAffinity | undefined}) { super(_TextPositionProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TextPosition.prototype, _TextPositionProxy);
export namespace TextPosition { export function implement(args: [options: {offset: number; affinity?: upstream0.TextAffinity | undefined}], implementation: {}): TextPosition {
return constructProxy(_TextPositionProxy, args, implementation) as TextPosition; } }
_flaxBindInstanceType<TextPosition, typeof TextPosition>(TextPosition, "flax.core/sdk_dart_ui#type:TextPosition", ["dart:core::Object"]);

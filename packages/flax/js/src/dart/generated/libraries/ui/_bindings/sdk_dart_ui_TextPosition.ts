// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_TextAffinity';
import '@flax/dart/ui/_bindings/flutter_TextAffinity';
import { _flaxMemberParameters0, _flaxMemberParameters167 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextPosition extends Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }> { readonly __TextPosition: unique symbol;
readonly [_flaxDartTypeValue]: TextPosition;

readonly offset: number;
readonly affinity: upstream0.TextAffinity;
toString(): string;
}
defineObject("flax.core/sdk_dart_ui#type:TextPosition", ["offset","affinity"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:TextPosition", "object", {"toString":_flaxMemberParameters0}, {}), []);
export function _TextPositionFactory(options: { offset: number; affinity?: upstream0.TextAffinity | undefined }): TextPosition {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:TextPosition", "", [{"name":"offset","required":true},{"name":"affinity"}], [], options) as TextPosition;
}
const _TextPositionProxy = {type: "flax.core/sdk_dart_ui#type:TextPosition", parameters: _flaxMemberParameters167, constructors: {"": _flaxMemberParameters167}, methods: {"toString":_flaxMemberParameters0}, getters: ["offset","affinity"], setters: [], contextMembers: [], superMembers: ["get:offset","get:affinity","toString"]} as const;
export interface _TextPositionNative extends TextPosition {
readonly [_flaxDartTypeValue]: _TextPositionNative;

toString(): string;
get offset(): number;
get affinity(): upstream0.TextAffinity;
}
export abstract class _TextPositionNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextPosition>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextPosition;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:TextPosition", readonly [], false];
constructor(options: {offset: number; affinity?: upstream0.TextAffinity | undefined}) { super(_TextPositionProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_TextPositionNative.prototype, _TextPositionProxy);
export namespace _TextPositionFactory { export function implement(args: [options: {offset: number; affinity?: upstream0.TextAffinity | undefined}], implementation: {}): TextPosition {
return constructProxy(_TextPositionProxy, args, implementation) as TextPosition; } }
const _TextPositionBinding = _flaxProxyFactory(_TextPositionFactory, _TextPositionNative) as unknown as typeof _TextPositionFactory & (new(options: {offset: number; affinity?: upstream0.TextAffinity | undefined}) => _TextPositionNative);
export const TextPosition: typeof _TextPositionBinding & _FlaxInstanceType<TextPosition> & _FlaxDartType<TextPosition, readonly ["class", "flax.core/sdk_dart_ui#type:TextPosition", readonly [], false]> = _flaxBindInstanceType<TextPosition, typeof _TextPositionBinding>(_TextPositionBinding, "flax.core/sdk_dart_ui#type:TextPosition", ["dart:core::Object"]) as typeof _TextPositionBinding & _FlaxInstanceType<TextPosition> & _FlaxDartType<TextPosition, readonly ["class", "flax.core/sdk_dart_ui#type:TextPosition", readonly [], false]>;

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters0, _flaxMemberParameters52, _flaxMemberParameters53 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface KeyboardInsertedContent extends Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_inserted_content.dart::KeyboardInsertedContent": readonly [] }> { readonly __KeyboardInsertedContent: unique symbol;
readonly [_flaxDartTypeValue]: KeyboardInsertedContent;

readonly mimeType: string;
readonly uri: string;
readonly data: globalThis.Uint8Array | null;
readonly hasData: boolean;
toString(): string;
}
defineObject("flax.core/sdk_services#type:KeyboardInsertedContent", ["mimeType","uri","data","hasData"], [], _flaxBindingMethods("flax.core/sdk_services#type:KeyboardInsertedContent", "object", {"toString":_flaxMemberParameters0}, {}), []);
export function _KeyboardInsertedContentFactory(options: { mimeType: string; uri: string; data?: globalThis.Uint8Array | null | undefined }): KeyboardInsertedContent {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:KeyboardInsertedContent", "", [{"name":"mimeType","required":true},{"name":"uri","required":true},{"name":"data"}], [], options) as KeyboardInsertedContent;
}
export namespace _KeyboardInsertedContentFactory {
export function fromJson(metadata: DartMapInput<string, unknown | null, string, unknown | null>): KeyboardInsertedContent {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:KeyboardInsertedContent", "fromJson", [{"name":"metadata","required":true,"positional":true}], [metadata], {}) as KeyboardInsertedContent;
}
}
const _KeyboardInsertedContentProxy = {type: "flax.core/sdk_services#type:KeyboardInsertedContent", parameters: _flaxMemberParameters52, constructors: {"": _flaxMemberParameters52,"fromJson": _flaxMemberParameters53}, methods: {"toString":_flaxMemberParameters0}, getters: ["mimeType","uri","data","hasData"], setters: [], contextMembers: [], superMembers: ["get:mimeType","get:uri","get:data","get:hasData","toString"]} as const;
export interface _KeyboardInsertedContentNative extends KeyboardInsertedContent {
readonly [_flaxDartTypeValue]: _KeyboardInsertedContentNative;
readonly [_flaxDartConstructors]?: {"": (options: {mimeType: string; uri: string; data?: globalThis.Uint8Array | null | undefined}) => void;"fromJson": (metadata: DartMapInput<string, unknown | null, string, unknown | null>) => void;};

toString(): string;
get mimeType(): string;
get uri(): string;
get data(): globalThis.Uint8Array | null;
get hasData(): boolean;
}
export abstract class _KeyboardInsertedContentNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<KeyboardInsertedContent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: KeyboardInsertedContent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:KeyboardInsertedContent", readonly [], false];
constructor(options: {mimeType: string; uri: string; data?: globalThis.Uint8Array | null | undefined}); constructor(call: _FlaxProxySuper<_KeyboardInsertedContentNative>); constructor(...args: unknown[]) { super(_KeyboardInsertedContentProxy, args); }
}
_flaxDefineProxyBase(_KeyboardInsertedContentNative.prototype, _KeyboardInsertedContentProxy);
export namespace _KeyboardInsertedContentFactory { export function implement(args: [options: {mimeType: string; uri: string; data?: globalThis.Uint8Array | null | undefined}], implementation: {}): KeyboardInsertedContent {
return constructProxy(_KeyboardInsertedContentProxy, args, implementation) as KeyboardInsertedContent; } }
const _KeyboardInsertedContentBinding = _flaxProxyFactory(_KeyboardInsertedContentFactory, _KeyboardInsertedContentNative) as unknown as typeof _KeyboardInsertedContentFactory & (new(options: {mimeType: string; uri: string; data?: globalThis.Uint8Array | null | undefined}) => _KeyboardInsertedContentNative) & (new(call: _FlaxProxySuper<_KeyboardInsertedContentNative>) => _KeyboardInsertedContentNative);
export const KeyboardInsertedContent: typeof _KeyboardInsertedContentBinding & _FlaxInstanceType<KeyboardInsertedContent> & _FlaxDartType<KeyboardInsertedContent, readonly ["class", "flax.core/sdk_services#type:KeyboardInsertedContent", readonly [], false]> = _flaxBindInstanceType<KeyboardInsertedContent, typeof _KeyboardInsertedContentBinding>(_KeyboardInsertedContentBinding, "flax.core/sdk_services#type:KeyboardInsertedContent", ["dart:core::Object"]) as typeof _KeyboardInsertedContentBinding & _FlaxInstanceType<KeyboardInsertedContent> & _FlaxDartType<KeyboardInsertedContent, readonly ["class", "flax.core/sdk_services#type:KeyboardInsertedContent", readonly [], false]>;

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/audioplayers/_bindings/audio_Source';
import '@flax/audioplayers/_bindings/audio_Source';
import type * as upstream1 from '@flax/audioplayers/_bindings/audio_AudioPlayer';
import '@flax/audioplayers/_bindings/audio_AudioPlayer';
import { _flaxMemberParameters1, _flaxMemberParameters2, _flaxMemberParameters3 } from "@flax/audioplayers/_bindings/audio.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/audioplayers/_bindings/audio.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DeviceFileSource extends Omit<upstream0.Source, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:audioplayers/src/source.dart::DeviceFileSource": readonly [] }>, Readonly<{ "__flaxBound:package:audioplayers/src/source.dart::Source": readonly [] }> { readonly __DeviceFileSource: unique symbol;
readonly [_flaxDartTypeValue]: DeviceFileSource;

readonly mimeType: string | null;
readonly path: string;
setOnPlayer(player: Readonly<{ "__flaxBound:package:audioplayers/src/audioplayer.dart::AudioPlayer": readonly [] }>): Promise<void>;
toString(): string;
}
defineObject("flax.audio/audio#type:DeviceFileSource", ["mimeType","path"], [], _flaxBindingMethods("flax.audio/audio#type:DeviceFileSource", "object", {"toString":_flaxMemberParameters1}, {}), [], undefined, "flax.audio/audio#type:Source");
export function _DeviceFileSourceFactory(path: string, options: { mimeType?: string | null | undefined } = {}): DeviceFileSource {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.audio/audio#type:DeviceFileSource", "", [{"name":"path","required":true,"positional":true},{"name":"mimeType"}], [path], options) as DeviceFileSource;
}
const _DeviceFileSourceProxy = {type: "flax.audio/audio#type:DeviceFileSource", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"setOnPlayer":_flaxMemberParameters3,"toString":_flaxMemberParameters1}, getters: ["path","mimeType"], setters: [], contextMembers: [], superMembers: ["get:path","get:mimeType","setOnPlayer","toString"]} as const;
export interface _DeviceFileSourceNative extends DeviceFileSource {
readonly [_flaxDartTypeValue]: _DeviceFileSourceNative;

setOnPlayer(player: Readonly<{ "__flaxBound:package:audioplayers/src/audioplayer.dart::AudioPlayer": readonly [] }>): Promise<void>;
toString(): string;
get path(): string;
get mimeType(): string | null;
}
export abstract class _DeviceFileSourceNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DeviceFileSource>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DeviceFileSource;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.audio/audio#type:DeviceFileSource", readonly [], false];
constructor(path: string, options?: {mimeType?: string | null | undefined}) { super(_DeviceFileSourceProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_DeviceFileSourceNative.prototype, _DeviceFileSourceProxy);
export namespace _DeviceFileSourceFactory { export function implement(args: [path: string, options?: {mimeType?: string | null | undefined}], implementation: {}): DeviceFileSource {
return constructProxy(_DeviceFileSourceProxy, args, implementation) as DeviceFileSource; } }
const _DeviceFileSourceBinding = _flaxProxyFactory(_DeviceFileSourceFactory, _DeviceFileSourceNative) as unknown as typeof _DeviceFileSourceFactory & (new(path: string, options?: {mimeType?: string | null | undefined}) => _DeviceFileSourceNative);
export const DeviceFileSource: typeof _DeviceFileSourceBinding & _FlaxInstanceType<DeviceFileSource> & _FlaxDartType<DeviceFileSource, readonly ["class", "flax.audio/audio#type:DeviceFileSource", readonly [], false]> = _flaxBindInstanceType<DeviceFileSource, typeof _DeviceFileSourceBinding>(_DeviceFileSourceBinding, "flax.audio/audio#type:DeviceFileSource", ["flax.audio/audio#type:Source","dart:core::Object"]) as typeof _DeviceFileSourceBinding & _FlaxInstanceType<DeviceFileSource> & _FlaxDartType<DeviceFileSource, readonly ["class", "flax.audio/audio#type:DeviceFileSource", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "mimeType" | "path" | "setOnPlayer" | "toString" | "__flaxBound:package:audioplayers/src/source.dart::DeviceFileSource" | "__flaxBound:package:audioplayers/src/source.dart::Source";

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { _flaxMemberParameters0, _flaxMemberParameters1 } from "@flax/video-player/_bindings/video.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/video-player/_bindings/video.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Caption extends Readonly<{ "__flaxBound:package:video_player/src/closed_caption_file.dart::Caption": readonly [] }> { readonly __Caption: unique symbol;
readonly [_flaxDartTypeValue]: Caption;

readonly number: number;
readonly start: upstream0.Duration;
readonly end: upstream0.Duration;
readonly text: string;
toString(): string;
}
defineObject("flax.video/video#type:Caption", ["number","start","end","text"], [], _flaxBindingMethods("flax.video/video#type:Caption", "object", {"toString":_flaxMemberParameters0}, {}), []);
export function _CaptionFactory(options: { number: number; start: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }>; end: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }>; text: string }): Caption {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.video/video#type:Caption", "", [{"name":"number","required":true},{"name":"start","required":true},{"name":"end","required":true},{"name":"text","required":true}], [], options) as Caption;
}
const _CaptionProxy = {type: "flax.video/video#type:Caption", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toString":_flaxMemberParameters0}, getters: ["number","start","end","text"], setters: [], contextMembers: [], superMembers: ["get:number","get:start","get:end","get:text","toString"]} as const;
export interface _CaptionNative extends Caption {
readonly [_flaxDartTypeValue]: _CaptionNative;

toString(): string;
get number(): number;
get start(): upstream0.Duration;
get end(): upstream0.Duration;
get text(): string;
}
export abstract class _CaptionNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Caption>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Caption;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.video/video#type:Caption", readonly [], false];
constructor(options: {number: number; start: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }>; end: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }>; text: string}) { super(_CaptionProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_CaptionNative.prototype, _CaptionProxy);
export namespace _CaptionFactory { export function implement(args: [options: {number: number; start: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }>; end: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }>; text: string}], implementation: {}): Caption {
return constructProxy(_CaptionProxy, args, implementation) as Caption; } }
const _CaptionBinding = _flaxProxyFactory(_CaptionFactory, _CaptionNative) as unknown as typeof _CaptionFactory & (new(options: {number: number; start: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }>; end: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }>; text: string}) => _CaptionNative);
export namespace _CaptionFactory { export declare const none: Caption; }
_flaxDefineStaticGetters(_CaptionFactory, "flax.video/video#read:Caption.", ["none"]);
export const Caption: typeof _CaptionBinding & _FlaxInstanceType<Caption> & _FlaxDartType<Caption, readonly ["class", "flax.video/video#type:Caption", readonly [], false]> = _flaxBindInstanceType<Caption, typeof _CaptionBinding>(_CaptionBinding, "flax.video/video#type:Caption", ["dart:core::Object"]) as typeof _CaptionBinding & _FlaxInstanceType<Caption> & _FlaxDartType<Caption, readonly ["class", "flax.video/video#type:Caption", readonly [], false]>;

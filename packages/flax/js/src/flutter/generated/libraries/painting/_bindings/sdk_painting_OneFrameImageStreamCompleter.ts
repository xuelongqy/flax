// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleter';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleter';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/painting/_bindings/sdk_painting_ImageInfo';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageInfo';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream4 from '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamListener';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamListener';
import type * as upstream5 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream6 from '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleterHandle';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleterHandle';
import type * as upstream7 from '@flax/flutter/painting/_bindings/sdk_painting_ImageChunkEvent';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageChunkEvent';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { _flaxMemberParameters106, _flaxMemberParameters76, _flaxMemberParameters2, _flaxMemberParameters78, _flaxMemberParameters79, _flaxMemberParameters80, _flaxMemberParameters81, _flaxMemberParameters77, _flaxMemberParameters55, _flaxMemberParameters57 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface OneFrameImageStreamCompleter extends Omit<upstream0.ImageStreamCompleter, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.ImageStreamCompleter>, Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::OneFrameImageStreamCompleter": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamCompleter": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __OneFrameImageStreamCompleter: unique symbol;
readonly [_flaxDartTypeValue]: OneFrameImageStreamCompleter;

get debugLabel(): string | null;
addListener(listener: Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamListener": readonly [] }>): void;
addEphemeralErrorListener(listener: ((exception: {}, stackTrace: upstream5.StackTrace | null) => void)): void;
keepAlive(): upstream6.ImageStreamCompleterHandle;
removeListener(listener: Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamListener": readonly [] }>): void;
onDisposed(): void;
maybeDispose(): void;
addOnLastListenerRemovedCallback(callback: (() => void)): void;
removeOnLastListenerRemovedCallback(callback: (() => void)): void;
setImage(image: Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageInfo": readonly [] }>): void;
reportError(options: {context?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }> | null | undefined; exception: {}; informationCollector?: (() => DartIterableInput<upstream3.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>>) | null | undefined; silent?: boolean | undefined; stack?: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }> | null | undefined}): void;
reportImageChunkEvent(event: Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageChunkEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
debugFillProperties(description: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream9.DiagnosticsTreeStyle | null | undefined}): upstream3.DiagnosticsNode;
toString(options?: {minLevel?: upstream10.DiagnosticLevel | undefined}): string;
set debugLabel(value: string | null);
}
defineObject("flax.core/sdk_painting#type:OneFrameImageStreamCompleter", ["debugLabel"], ["debugLabel"], _flaxBindingMethods("flax.core/sdk_painting#type:OneFrameImageStreamCompleter", "object", {}, {}), [], undefined, "flax.core/sdk_painting#type:ImageStreamCompleter");
export function _OneFrameImageStreamCompleterFactory(image: Promise<Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageInfo": readonly [] }>>, options: { informationCollector?: (() => DartIterableInput<upstream3.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>>) | null | undefined } = {}): OneFrameImageStreamCompleter {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:OneFrameImageStreamCompleter", "", [{"name":"image","required":true,"positional":true},{"name":"informationCollector"}], [image], options) as OneFrameImageStreamCompleter;
}
const _OneFrameImageStreamCompleterProxy = {type: "flax.core/sdk_painting#type:OneFrameImageStreamCompleter", parameters: _flaxMemberParameters106, constructors: {"": _flaxMemberParameters106}, methods: {"addListener":_flaxMemberParameters76,"addEphemeralErrorListener":_flaxMemberParameters76,"keepAlive":_flaxMemberParameters2,"removeListener":_flaxMemberParameters76,"onDisposed":_flaxMemberParameters2,"addOnLastListenerRemovedCallback":_flaxMemberParameters78,"removeOnLastListenerRemovedCallback":_flaxMemberParameters78,"setImage":_flaxMemberParameters79,"reportError":_flaxMemberParameters80,"reportImageChunkEvent":_flaxMemberParameters81,"debugFillProperties":_flaxMemberParameters77,"toStringShort":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters55,"toString":_flaxMemberParameters57}, getters: ["debugLabel"], setters: ["debugLabel"], contextMembers: [], superMembers: ["get:debugLabel","set:debugLabel","addListener","addEphemeralErrorListener","keepAlive","removeListener","onDisposed","addOnLastListenerRemovedCallback","removeOnLastListenerRemovedCallback","setImage","reportError","reportImageChunkEvent","debugFillProperties","toStringShort","toDiagnosticsNode","toString"]} as const;
export interface _OneFrameImageStreamCompleterNative extends OneFrameImageStreamCompleter {
readonly [_flaxDartTypeValue]: _OneFrameImageStreamCompleterNative;
maybeDispose(): void;

addListener(listener: Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamListener": readonly [] }>): void;
addEphemeralErrorListener(listener: ((exception: {}, stackTrace: upstream5.StackTrace | null) => void)): void;
keepAlive(): upstream6.ImageStreamCompleterHandle;
removeListener(listener: Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamListener": readonly [] }>): void;
onDisposed(): void;
addOnLastListenerRemovedCallback(callback: (() => void)): void;
removeOnLastListenerRemovedCallback(callback: (() => void)): void;
setImage(image: Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageInfo": readonly [] }>): void;
reportError(options: {context?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }> | null | undefined; exception: {}; stack?: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }> | null | undefined; informationCollector?: (() => DartIterableInput<upstream3.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>>) | null | undefined; silent?: boolean | undefined}): void;
reportImageChunkEvent(event: Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageChunkEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
debugFillProperties(description: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream9.DiagnosticsTreeStyle | null | undefined}): upstream3.DiagnosticsNode;
toString(options?: {minLevel?: upstream10.DiagnosticLevel | undefined}): string;
get debugLabel(): string | null;
set debugLabel(value: string | null);
}
export abstract class _OneFrameImageStreamCompleterNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<OneFrameImageStreamCompleter>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: OneFrameImageStreamCompleter;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:OneFrameImageStreamCompleter", readonly [], false];
constructor(image: Promise<Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageInfo": readonly [] }>>, options?: {informationCollector?: (() => DartIterableInput<upstream3.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>>) | null | undefined}) { super(_OneFrameImageStreamCompleterProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_OneFrameImageStreamCompleterNative.prototype, _OneFrameImageStreamCompleterProxy);
export namespace _OneFrameImageStreamCompleterFactory { export function implement(args: [image: Promise<Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageInfo": readonly [] }>>, options?: {informationCollector?: (() => DartIterableInput<upstream3.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>>) | null | undefined}], implementation: {}): OneFrameImageStreamCompleter {
return constructProxy(_OneFrameImageStreamCompleterProxy, args, implementation) as OneFrameImageStreamCompleter; } }
const _OneFrameImageStreamCompleterBinding = _flaxProxyFactory(_OneFrameImageStreamCompleterFactory, _OneFrameImageStreamCompleterNative) as unknown as typeof _OneFrameImageStreamCompleterFactory & (new(image: Promise<Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageInfo": readonly [] }>>, options?: {informationCollector?: (() => DartIterableInput<upstream3.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>>) | null | undefined}) => _OneFrameImageStreamCompleterNative);
export const OneFrameImageStreamCompleter: typeof _OneFrameImageStreamCompleterBinding & _FlaxInstanceType<OneFrameImageStreamCompleter> & _FlaxDartType<OneFrameImageStreamCompleter, readonly ["class", "flax.core/sdk_painting#type:OneFrameImageStreamCompleter", readonly [], false]> = _flaxBindInstanceType<OneFrameImageStreamCompleter, typeof _OneFrameImageStreamCompleterBinding>(_OneFrameImageStreamCompleterBinding, "flax.core/sdk_painting#type:OneFrameImageStreamCompleter", ["flax.core/sdk_painting#type:ImageStreamCompleter","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _OneFrameImageStreamCompleterBinding & _FlaxInstanceType<OneFrameImageStreamCompleter> & _FlaxDartType<OneFrameImageStreamCompleter, readonly ["class", "flax.core/sdk_painting#type:OneFrameImageStreamCompleter", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "debugLabel" | "addListener" | "addEphemeralErrorListener" | "keepAlive" | "removeListener" | "onDisposed" | "maybeDispose" | "addOnLastListenerRemovedCallback" | "removeOnLastListenerRemovedCallback" | "setImage" | "reportError" | "reportImageChunkEvent" | "debugFillProperties" | "toStringShort" | "toDiagnosticsNode" | "toString" | "__flaxBound:package:flutter/src/painting/image_stream.dart::OneFrameImageStreamCompleter" | "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamCompleter" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream5 from '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamListener';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamListener';
import type * as upstream6 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream7 from '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleterHandle';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleterHandle';
import type * as upstream8 from '@flax/flutter/painting/_bindings/sdk_painting_ImageInfo';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageInfo';
import type * as upstream9 from '@flax/flutter/painting/_bindings/sdk_painting_ImageChunkEvent';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageChunkEvent';
import { _flaxMemberParameters77, _flaxMemberParameters76, _flaxMemberParameters2, _flaxMemberParameters78, _flaxMemberParameters79, _flaxMemberParameters80, _flaxMemberParameters81, _flaxMemberParameters57, _flaxMemberParameters55 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ImageStreamCompleter extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamCompleter": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __ImageStreamCompleter: unique symbol;
readonly [_flaxDartTypeValue]: ImageStreamCompleter;

}
defineObject("flax.core/sdk_painting#type:ImageStreamCompleter", ["debugLabel"], ["debugLabel"], _flaxBindingMethods("flax.core/sdk_painting#type:ImageStreamCompleter", "object", {"debugFillProperties":_flaxMemberParameters77,"addListener":_flaxMemberParameters76,"addEphemeralErrorListener":_flaxMemberParameters76,"keepAlive":_flaxMemberParameters2,"removeListener":_flaxMemberParameters76,"onDisposed":_flaxMemberParameters2,"maybeDispose":_flaxMemberParameters2,"addOnLastListenerRemovedCallback":_flaxMemberParameters78,"removeOnLastListenerRemovedCallback":_flaxMemberParameters78,"setImage":_flaxMemberParameters79,"reportError":_flaxMemberParameters80,"reportImageChunkEvent":_flaxMemberParameters81}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
const _ImageStreamCompleterProxy = {type: "flax.core/sdk_painting#type:ImageStreamCompleter", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters57,"toDiagnosticsNode":_flaxMemberParameters55,"debugFillProperties":_flaxMemberParameters77,"addListener":_flaxMemberParameters76,"addEphemeralErrorListener":_flaxMemberParameters76,"keepAlive":_flaxMemberParameters2,"removeListener":_flaxMemberParameters76,"onDisposed":_flaxMemberParameters2,"addOnLastListenerRemovedCallback":_flaxMemberParameters78,"removeOnLastListenerRemovedCallback":_flaxMemberParameters78,"setImage":_flaxMemberParameters79,"reportError":_flaxMemberParameters80,"reportImageChunkEvent":_flaxMemberParameters81}, getters: ["debugLabel"], setters: ["debugLabel"], contextMembers: [], superMembers: ["get:debugLabel","set:debugLabel","toStringShort","toString","toDiagnosticsNode","debugFillProperties","addListener","addEphemeralErrorListener","keepAlive","removeListener","onDisposed","addOnLastListenerRemovedCallback","removeOnLastListenerRemovedCallback","setImage","reportError","reportImageChunkEvent"]} as const;
export interface ImageStreamCompleter {
readonly [_flaxDartTypeValue]: ImageStreamCompleter;
maybeDispose(): void;

toStringShort(): string;
toString(options?: {minLevel?: upstream1.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream3.DiagnosticsTreeStyle | null | undefined}): upstream2.DiagnosticsNode;
debugFillProperties(description: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
addListener(listener: Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamListener": readonly [] }>): void;
addEphemeralErrorListener(listener: ((exception: {}, stackTrace: upstream6.StackTrace | null) => void)): void;
keepAlive(): upstream7.ImageStreamCompleterHandle;
removeListener(listener: Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamListener": readonly [] }>): void;
onDisposed(): void;
addOnLastListenerRemovedCallback(callback: (() => void)): void;
removeOnLastListenerRemovedCallback(callback: (() => void)): void;
setImage(image: Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageInfo": readonly [] }>): void;
reportError(options: {context?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }> | null | undefined; exception: {}; stack?: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }> | null | undefined; informationCollector?: (() => DartIterableInput<upstream2.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>>) | null | undefined; silent?: boolean | undefined}): void;
reportImageChunkEvent(event: Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageChunkEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
get debugLabel(): string | null;
set debugLabel(value: string | null);
}
export abstract class ImageStreamCompleter extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ImageStreamCompleter>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ImageStreamCompleter;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:ImageStreamCompleter", readonly [], false];
constructor() { super(_ImageStreamCompleterProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ImageStreamCompleter.prototype, _ImageStreamCompleterProxy);
export namespace ImageStreamCompleter { export function implement(args: [], implementation: {}): ImageStreamCompleter {
return constructProxy(_ImageStreamCompleterProxy, args, implementation) as ImageStreamCompleter; } }
_flaxBindInstanceType<ImageStreamCompleter, typeof ImageStreamCompleter>(ImageStreamCompleter, "flax.core/sdk_painting#type:ImageStreamCompleter", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "debugLabel" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "addListener" | "addEphemeralErrorListener" | "keepAlive" | "removeListener" | "onDisposed" | "maybeDispose" | "addOnLastListenerRemovedCallback" | "removeOnLastListenerRemovedCallback" | "setImage" | "reportError" | "reportImageChunkEvent" | "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamCompleter" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

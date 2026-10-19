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
const _flaxMemberParameters0 = [{"name":"image","required":true,"positional":true},{"name":"informationCollector"}] as const;
const _flaxMemberParameters1 = [{"name":"listener","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
const _flaxMemberParameters3 = [{"name":"callback","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"image","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"context"},{"name":"exception","required":true},{"name":"informationCollector"},{"name":"silent"},{"name":"stack"}] as const;
const _flaxMemberParameters6 = [{"name":"event","required":true,"positional":true}] as const;
const _flaxMemberParameters7 = [{"name":"description","required":true,"positional":true}] as const;
const _flaxMemberParameters8 = [{"name":"name"},{"name":"style"}] as const;
const _flaxMemberParameters9 = [{"name":"minLevel"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface OneFrameImageStreamCompleter extends Omit<upstream0.ImageStreamCompleter, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.ImageStreamCompleter>, Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::OneFrameImageStreamCompleter": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamCompleter": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __OneFrameImageStreamCompleter: unique symbol;
readonly [_flaxDartTypeValue]: OneFrameImageStreamCompleter;

}
defineObject("flax.core/sdk_painting#type:OneFrameImageStreamCompleter", ["debugLabel"], ["debugLabel"], _flaxBindingMethods("flax.core/sdk_painting#type:OneFrameImageStreamCompleter", "object", {}, {}), [], undefined, "flax.core/sdk_painting#type:ImageStreamCompleter");
const _OneFrameImageStreamCompleterProxy = {type: "flax.core/sdk_painting#type:OneFrameImageStreamCompleter", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"addListener":_flaxMemberParameters1,"addEphemeralErrorListener":_flaxMemberParameters1,"keepAlive":_flaxMemberParameters2,"removeListener":_flaxMemberParameters1,"onDisposed":_flaxMemberParameters2,"addOnLastListenerRemovedCallback":_flaxMemberParameters3,"removeOnLastListenerRemovedCallback":_flaxMemberParameters3,"setImage":_flaxMemberParameters4,"reportError":_flaxMemberParameters5,"reportImageChunkEvent":_flaxMemberParameters6,"debugFillProperties":_flaxMemberParameters7,"toStringShort":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters8,"toString":_flaxMemberParameters9}, getters: ["debugLabel"], setters: ["debugLabel"], contextMembers: [], superMembers: ["get:debugLabel","set:debugLabel","addListener","addEphemeralErrorListener","keepAlive","removeListener","onDisposed","addOnLastListenerRemovedCallback","removeOnLastListenerRemovedCallback","setImage","reportError","reportImageChunkEvent","debugFillProperties","toStringShort","toDiagnosticsNode","toString"]} as const;
export interface OneFrameImageStreamCompleter {
readonly [_flaxDartTypeValue]: OneFrameImageStreamCompleter;
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
export abstract class OneFrameImageStreamCompleter extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<OneFrameImageStreamCompleter>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: OneFrameImageStreamCompleter;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:OneFrameImageStreamCompleter", readonly [], false];
constructor(image: Promise<Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageInfo": readonly [] }>>, options?: {informationCollector?: (() => DartIterableInput<upstream3.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>>) | null | undefined}) { super(_OneFrameImageStreamCompleterProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(OneFrameImageStreamCompleter.prototype, _OneFrameImageStreamCompleterProxy);
export namespace OneFrameImageStreamCompleter { export function implement(args: [image: Promise<Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageInfo": readonly [] }>>, options?: {informationCollector?: (() => DartIterableInput<upstream3.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>>) | null | undefined}], implementation: {}): OneFrameImageStreamCompleter {
return constructProxy(_OneFrameImageStreamCompleterProxy, args, implementation) as OneFrameImageStreamCompleter; } }
_flaxBindInstanceType<OneFrameImageStreamCompleter, typeof OneFrameImageStreamCompleter>(OneFrameImageStreamCompleter, "flax.core/sdk_painting#type:OneFrameImageStreamCompleter", ["flax.core/sdk_painting#type:ImageStreamCompleter","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "debugLabel" | "addListener" | "addEphemeralErrorListener" | "keepAlive" | "removeListener" | "onDisposed" | "maybeDispose" | "addOnLastListenerRemovedCallback" | "removeOnLastListenerRemovedCallback" | "setImage" | "reportError" | "reportImageChunkEvent" | "debugFillProperties" | "toStringShort" | "toDiagnosticsNode" | "toString" | "__flaxBound:package:flutter/src/painting/image_stream.dart::OneFrameImageStreamCompleter" | "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamCompleter" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

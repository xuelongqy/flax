// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleter';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleter';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Codec';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Codec';
import type * as upstream3 from '@flax/dart/async/_bindings/flutter_Stream';
import type * as upstream4 from '@flax/flutter/painting/_bindings/sdk_painting_ImageChunkEvent';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageChunkEvent';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamListener';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamListener';
import type * as upstream7 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream8 from '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleterHandle';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleterHandle';
import type * as upstream9 from '@flax/flutter/painting/_bindings/sdk_painting_ImageInfo';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageInfo';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
const _flaxMemberParameters0 = [{"name":"listener","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"callback","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"image","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"context","required":false,"positional":false},{"name":"exception","required":true,"positional":false},{"name":"informationCollector","required":false,"positional":false},{"name":"silent","required":false,"positional":false},{"name":"stack","required":false,"positional":false}] as const;
const _flaxMemberParameters5 = [{"name":"event","required":true,"positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"description","required":true,"positional":true}] as const;
const _flaxMemberParameters7 = [{"name":"name","required":false,"positional":false},{"name":"style","required":false,"positional":false}] as const;
const _flaxMemberParameters8 = [{"name":"minLevel","required":false,"positional":false}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MultiFrameImageStreamCompleter extends Omit<upstream0.ImageStreamCompleter, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.ImageStreamCompleter>, Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::MultiFrameImageStreamCompleter": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamCompleter": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __MultiFrameImageStreamCompleter: unique symbol;
readonly [_flaxDartTypeValue]: MultiFrameImageStreamCompleter;

}
defineObject("flax.core/sdk_painting#type:MultiFrameImageStreamCompleter", ["debugLabel"], ["debugLabel"], _flaxBindingMethods("flax.core/sdk_painting#type:MultiFrameImageStreamCompleter", "object", {}, {}), [], undefined, "flax.core/sdk_painting#type:ImageStreamCompleter");
const _MultiFrameImageStreamCompleterProxy = {type: "flax.core/sdk_painting#type:MultiFrameImageStreamCompleter", parameters: [{"name":"codec","required":true,"positional":false},{"name":"scale","required":true,"positional":false},{"name":"debugLabel","required":false,"positional":false},{"name":"chunkEvents","required":false,"positional":false},{"name":"informationCollector","required":false,"positional":false}], constructors: {"":[{"name":"codec","required":true,"positional":false},{"name":"scale","required":true,"positional":false},{"name":"debugLabel","required":false,"positional":false},{"name":"chunkEvents","required":false,"positional":false},{"name":"informationCollector","required":false,"positional":false}]}, methods: {"addListener":_flaxMemberParameters0,"addEphemeralErrorListener":_flaxMemberParameters0,"keepAlive":_flaxMemberParameters1,"removeListener":_flaxMemberParameters0,"onDisposed":_flaxMemberParameters1,"addOnLastListenerRemovedCallback":_flaxMemberParameters2,"removeOnLastListenerRemovedCallback":_flaxMemberParameters2,"setImage":_flaxMemberParameters3,"reportError":_flaxMemberParameters4,"reportImageChunkEvent":_flaxMemberParameters5,"debugFillProperties":_flaxMemberParameters6,"toStringShort":_flaxMemberParameters1,"toDiagnosticsNode":_flaxMemberParameters7,"toString":_flaxMemberParameters8}, getters: ["debugLabel"], setters: ["debugLabel"], contextMembers: [], superMembers: ["get:debugLabel","set:debugLabel","addListener","addEphemeralErrorListener","keepAlive","removeListener","onDisposed","addOnLastListenerRemovedCallback","removeOnLastListenerRemovedCallback","setImage","reportError","reportImageChunkEvent","debugFillProperties","toStringShort","toDiagnosticsNode","toString"]} as const;
export interface MultiFrameImageStreamCompleter {
readonly [_flaxDartTypeValue]: MultiFrameImageStreamCompleter;

addListener(listener: Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamListener": readonly [] }>): void;
addEphemeralErrorListener(listener: ((exception: {}, stackTrace: upstream7.StackTrace | null) => void)): void;
keepAlive(): upstream8.ImageStreamCompleterHandle;
removeListener(listener: Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamListener": readonly [] }>): void;
onDisposed(): void;
addOnLastListenerRemovedCallback(callback: (() => void)): void;
removeOnLastListenerRemovedCallback(callback: (() => void)): void;
setImage(image: Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageInfo": readonly [] }>): void;
reportError(options: {context?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }> | null | undefined; exception: {}; stack?: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }> | null | undefined; informationCollector?: (() => DartIterableInput<upstream5.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>>) | null | undefined; silent?: boolean | undefined}): void;
reportImageChunkEvent(event: Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageChunkEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
debugFillProperties(description: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream11.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
toString(options?: {minLevel?: upstream12.DiagnosticLevel | undefined}): string;
get debugLabel(): string | null;
set debugLabel(value: string | null);
}
export abstract class MultiFrameImageStreamCompleter extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MultiFrameImageStreamCompleter>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MultiFrameImageStreamCompleter;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:MultiFrameImageStreamCompleter", readonly [], false];
constructor(options: {codec: Promise<Readonly<{ "__flaxBound:dart:ui::Codec": readonly [] }>>; scale: number; debugLabel?: string | null | undefined; chunkEvents?: (upstream3.Stream<upstream4.ImageChunkEvent> | upstream3.Stream<Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageChunkEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>) | null | undefined; informationCollector?: (() => DartIterableInput<upstream5.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>>) | null | undefined}) { super(_MultiFrameImageStreamCompleterProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(MultiFrameImageStreamCompleter.prototype, _MultiFrameImageStreamCompleterProxy);
export namespace MultiFrameImageStreamCompleter { export function implement(args: [options: {codec: Promise<Readonly<{ "__flaxBound:dart:ui::Codec": readonly [] }>>; scale: number; debugLabel?: string | null | undefined; chunkEvents?: (upstream3.Stream<upstream4.ImageChunkEvent> | upstream3.Stream<Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageChunkEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>) | null | undefined; informationCollector?: (() => DartIterableInput<upstream5.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>>) | null | undefined}], implementation: {}): MultiFrameImageStreamCompleter {
return constructProxy(_MultiFrameImageStreamCompleterProxy, args, implementation) as MultiFrameImageStreamCompleter; } }
_flaxBindInstanceType<MultiFrameImageStreamCompleter, typeof MultiFrameImageStreamCompleter>(MultiFrameImageStreamCompleter, "flax.core/sdk_painting#type:MultiFrameImageStreamCompleter", ["flax.core/sdk_painting#type:ImageStreamCompleter","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "debugLabel" | "addListener" | "addEphemeralErrorListener" | "keepAlive" | "removeListener" | "onDisposed" | "addOnLastListenerRemovedCallback" | "removeOnLastListenerRemovedCallback" | "setImage" | "reportError" | "reportImageChunkEvent" | "debugFillProperties" | "toStringShort" | "toDiagnosticsNode" | "toString" | "__flaxBound:package:flutter/src/painting/image_stream.dart::MultiFrameImageStreamCompleter" | "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamCompleter" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

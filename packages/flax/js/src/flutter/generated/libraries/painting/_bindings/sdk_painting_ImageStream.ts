// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleter';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleter';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream6 from '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamListener';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamListener';
import { _flaxMemberParameters68, _flaxMemberParameters77, _flaxMemberParameters2, _flaxMemberParameters58, _flaxMemberParameters56, _flaxMemberParameters57 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ImageStream extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStream": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __ImageStream: unique symbol;
readonly [_flaxDartTypeValue]: ImageStream;

readonly completer: upstream1.ImageStreamCompleter | null;
readonly key: {};
toStringShort(): string;
toString(options?: {minLevel?: upstream2.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream4.DiagnosticsTreeStyle | null | undefined}): upstream3.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
setCompleter(value: Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamCompleter": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
addListener(listener: Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamListener": readonly [] }>): void;
removeListener(listener: Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamListener": readonly [] }>): void;
}
defineObject("flax.core/sdk_painting#type:ImageStream", ["completer","key"], [], _flaxBindingMethods("flax.core/sdk_painting#type:ImageStream", "object", {"setCompleter":_flaxMemberParameters68,"addListener":_flaxMemberParameters77,"removeListener":_flaxMemberParameters77}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _ImageStreamFactory(): ImageStream {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:ImageStream", "", [], [], {}) as ImageStream;
}
const _ImageStreamProxy = {type: "flax.core/sdk_painting#type:ImageStream", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters58,"toDiagnosticsNode":_flaxMemberParameters56,"debugFillProperties":_flaxMemberParameters57,"setCompleter":_flaxMemberParameters68,"addListener":_flaxMemberParameters77,"removeListener":_flaxMemberParameters77}, getters: ["completer","key"], setters: [], contextMembers: [], superMembers: ["get:completer","get:key","toStringShort","toString","toDiagnosticsNode","debugFillProperties","setCompleter","addListener","removeListener"]} as const;
export interface _ImageStreamNative extends ImageStream {
readonly [_flaxDartTypeValue]: _ImageStreamNative;

toStringShort(): string;
toString(options?: {minLevel?: upstream2.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream4.DiagnosticsTreeStyle | null | undefined}): upstream3.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
setCompleter(value: Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamCompleter": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
addListener(listener: Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamListener": readonly [] }>): void;
removeListener(listener: Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamListener": readonly [] }>): void;
get completer(): upstream1.ImageStreamCompleter | null;
get key(): {};
}
export abstract class _ImageStreamNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ImageStream>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ImageStream;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:ImageStream", readonly [], false];
constructor() { super(_ImageStreamProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ImageStreamNative.prototype, _ImageStreamProxy);
export namespace _ImageStreamFactory { export function implement(args: [], implementation: {}): ImageStream {
return constructProxy(_ImageStreamProxy, args, implementation) as ImageStream; } }
const _ImageStreamBinding = _flaxProxyFactory(_ImageStreamFactory, _ImageStreamNative) as unknown as typeof _ImageStreamFactory & (new() => _ImageStreamNative);
export const ImageStream: typeof _ImageStreamBinding & _FlaxInstanceType<ImageStream> & _FlaxDartType<ImageStream, readonly ["class", "flax.core/sdk_painting#type:ImageStream", readonly [], false]> = _flaxBindInstanceType<ImageStream, typeof _ImageStreamBinding>(_ImageStreamBinding, "flax.core/sdk_painting#type:ImageStream", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _ImageStreamBinding & _FlaxInstanceType<ImageStream> & _FlaxDartType<ImageStream, readonly ["class", "flax.core/sdk_painting#type:ImageStream", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "completer" | "key" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "setCompleter" | "addListener" | "removeListener" | "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStream" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

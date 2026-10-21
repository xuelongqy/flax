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
import { _flaxMemberParameters72, _flaxMemberParameters2, _flaxMemberParameters58, _flaxMemberParameters56, _flaxMemberParameters57 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ImageChunkEvent extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageChunkEvent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __ImageChunkEvent: unique symbol;
readonly [_flaxDartTypeValue]: ImageChunkEvent;

readonly cumulativeBytesLoaded: number;
readonly expectedTotalBytes: number | null;
toStringShort(): string;
toString(options?: {minLevel?: upstream1.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream3.DiagnosticsTreeStyle | null | undefined}): upstream2.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
}
defineObject("flax.core/sdk_painting#type:ImageChunkEvent", ["cumulativeBytesLoaded","expectedTotalBytes"], [], _flaxBindingMethods("flax.core/sdk_painting#type:ImageChunkEvent", "object", {}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _ImageChunkEventFactory(options: { cumulativeBytesLoaded: number; expectedTotalBytes: number | null }): ImageChunkEvent {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:ImageChunkEvent", "", [{"name":"cumulativeBytesLoaded","required":true},{"name":"expectedTotalBytes","required":true}], [], options) as ImageChunkEvent;
}
const _ImageChunkEventProxy = {type: "flax.core/sdk_painting#type:ImageChunkEvent", parameters: _flaxMemberParameters72, constructors: {"": _flaxMemberParameters72}, methods: {"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters58,"toDiagnosticsNode":_flaxMemberParameters56,"debugFillProperties":_flaxMemberParameters57}, getters: ["cumulativeBytesLoaded","expectedTotalBytes"], setters: [], contextMembers: [], superMembers: ["get:cumulativeBytesLoaded","get:expectedTotalBytes","toStringShort","toString","toDiagnosticsNode","debugFillProperties"]} as const;
export interface _ImageChunkEventNative extends ImageChunkEvent {
readonly [_flaxDartTypeValue]: _ImageChunkEventNative;

toStringShort(): string;
toString(options?: {minLevel?: upstream1.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream3.DiagnosticsTreeStyle | null | undefined}): upstream2.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
get cumulativeBytesLoaded(): number;
get expectedTotalBytes(): number | null;
}
export abstract class _ImageChunkEventNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ImageChunkEvent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ImageChunkEvent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:ImageChunkEvent", readonly [], false];
constructor(options: {cumulativeBytesLoaded: number; expectedTotalBytes: number | null}) { super(_ImageChunkEventProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ImageChunkEventNative.prototype, _ImageChunkEventProxy);
export namespace _ImageChunkEventFactory { export function implement(args: [options: {cumulativeBytesLoaded: number; expectedTotalBytes: number | null}], implementation: {}): ImageChunkEvent {
return constructProxy(_ImageChunkEventProxy, args, implementation) as ImageChunkEvent; } }
const _ImageChunkEventBinding = _flaxProxyFactory(_ImageChunkEventFactory, _ImageChunkEventNative) as unknown as typeof _ImageChunkEventFactory & (new(options: {cumulativeBytesLoaded: number; expectedTotalBytes: number | null}) => _ImageChunkEventNative);
export const ImageChunkEvent: typeof _ImageChunkEventBinding & _FlaxInstanceType<ImageChunkEvent> & _FlaxDartType<ImageChunkEvent, readonly ["class", "flax.core/sdk_painting#type:ImageChunkEvent", readonly [], false]> = _flaxBindInstanceType<ImageChunkEvent, typeof _ImageChunkEventBinding>(_ImageChunkEventBinding, "flax.core/sdk_painting#type:ImageChunkEvent", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _ImageChunkEventBinding & _FlaxInstanceType<ImageChunkEvent> & _FlaxDartType<ImageChunkEvent, readonly ["class", "flax.core/sdk_painting#type:ImageChunkEvent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "cumulativeBytesLoaded" | "expectedTotalBytes" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageChunkEvent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

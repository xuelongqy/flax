// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters89, _flaxMemberParameters7, _flaxMemberParameters16, _flaxMemberParameters15, _flaxMemberParameters9 } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ScaleStartDetails extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/gestures/scale.dart::ScaleStartDetails": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __ScaleStartDetails: unique symbol;
readonly [_flaxDartTypeValue]: ScaleStartDetails;

readonly focalPoint: upstream1.Offset;
readonly localFocalPoint: upstream1.Offset;
readonly pointerCount: number;
readonly sourceTimeStamp: upstream2.Duration | null;
readonly kind: upstream3.PointerDeviceKind | null;
toStringShort(): string;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
}
defineObject("flax.core/sdk_gestures#type:ScaleStartDetails", ["focalPoint","localFocalPoint","pointerCount","sourceTimeStamp","kind"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:ScaleStartDetails", "object", {}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _ScaleStartDetailsFactory(options: { focalPoint?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; localFocalPoint?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; pointerCount?: number | undefined; sourceTimeStamp?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration] }> | null | undefined; kind?: upstream3.PointerDeviceKind | null | undefined } = {}): ScaleStartDetails {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_gestures#type:ScaleStartDetails", "", [{"name":"focalPoint"},{"name":"localFocalPoint"},{"name":"pointerCount"},{"name":"sourceTimeStamp"},{"name":"kind"}], [], options) as ScaleStartDetails;
}
const _ScaleStartDetailsProxy = {type: "flax.core/sdk_gestures#type:ScaleStartDetails", parameters: _flaxMemberParameters89, constructors: {"": _flaxMemberParameters89}, methods: {"toStringShort":_flaxMemberParameters7,"toString":_flaxMemberParameters16,"toDiagnosticsNode":_flaxMemberParameters15,"debugFillProperties":_flaxMemberParameters9}, getters: ["focalPoint","localFocalPoint","pointerCount","sourceTimeStamp","kind"], setters: [], contextMembers: [], superMembers: ["get:focalPoint","get:localFocalPoint","get:pointerCount","get:sourceTimeStamp","get:kind","toStringShort","toString","toDiagnosticsNode","debugFillProperties"]} as const;
export interface _ScaleStartDetailsNative extends ScaleStartDetails {
readonly [_flaxDartTypeValue]: _ScaleStartDetailsNative;

toStringShort(): string;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
get focalPoint(): upstream1.Offset;
get localFocalPoint(): upstream1.Offset;
get pointerCount(): number;
get sourceTimeStamp(): upstream2.Duration | null;
get kind(): upstream3.PointerDeviceKind | null;
}
export abstract class _ScaleStartDetailsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScaleStartDetails>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ScaleStartDetails;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:ScaleStartDetails", readonly [], false];
constructor(options?: {focalPoint?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; localFocalPoint?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; pointerCount?: number | undefined; sourceTimeStamp?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration] }> | null | undefined; kind?: upstream3.PointerDeviceKind | null | undefined}) { super(_ScaleStartDetailsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ScaleStartDetailsNative.prototype, _ScaleStartDetailsProxy);
export namespace _ScaleStartDetailsFactory { export function implement(args: [options?: {focalPoint?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; localFocalPoint?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; pointerCount?: number | undefined; sourceTimeStamp?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration] }> | null | undefined; kind?: upstream3.PointerDeviceKind | null | undefined}], implementation: {}): ScaleStartDetails {
return constructProxy(_ScaleStartDetailsProxy, args, implementation) as ScaleStartDetails; } }
const _ScaleStartDetailsBinding = _flaxProxyFactory(_ScaleStartDetailsFactory, _ScaleStartDetailsNative) as unknown as typeof _ScaleStartDetailsFactory & (new(options?: {focalPoint?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; localFocalPoint?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; pointerCount?: number | undefined; sourceTimeStamp?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration] }> | null | undefined; kind?: upstream3.PointerDeviceKind | null | undefined}) => _ScaleStartDetailsNative);
export const ScaleStartDetails: typeof _ScaleStartDetailsBinding & _FlaxInstanceType<ScaleStartDetails> & _FlaxDartType<ScaleStartDetails, readonly ["class", "flax.core/sdk_gestures#type:ScaleStartDetails", readonly [], false]> = _flaxBindInstanceType<ScaleStartDetails, typeof _ScaleStartDetailsBinding>(_ScaleStartDetailsBinding, "flax.core/sdk_gestures#type:ScaleStartDetails", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _ScaleStartDetailsBinding & _FlaxInstanceType<ScaleStartDetails> & _FlaxDartType<ScaleStartDetails, readonly ["class", "flax.core/sdk_gestures#type:ScaleStartDetails", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "focalPoint" | "localFocalPoint" | "pointerCount" | "sourceTimeStamp" | "kind" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/gestures/scale.dart::ScaleStartDetails" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

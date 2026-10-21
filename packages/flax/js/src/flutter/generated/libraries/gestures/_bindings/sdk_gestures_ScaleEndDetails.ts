// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/sdk_gestures_Velocity';
import '@flax/flutter/gestures/_bindings/sdk_gestures_Velocity';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters87, _flaxMemberParameters7, _flaxMemberParameters16, _flaxMemberParameters15, _flaxMemberParameters9 } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ScaleEndDetails extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/gestures/scale.dart::ScaleEndDetails": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __ScaleEndDetails: unique symbol;
readonly [_flaxDartTypeValue]: ScaleEndDetails;

readonly velocity: upstream1.Velocity;
readonly scaleVelocity: number;
readonly pointerCount: number;
toStringShort(): string;
toString(options?: {minLevel?: upstream2.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream4.DiagnosticsTreeStyle | null | undefined}): upstream3.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
}
defineObject("flax.core/sdk_gestures#type:ScaleEndDetails", ["velocity","scaleVelocity","pointerCount"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:ScaleEndDetails", "object", {}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _ScaleEndDetailsFactory(options: { velocity?: Readonly<{ "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [] }> | undefined; scaleVelocity?: number | undefined; pointerCount?: number | undefined } = {}): ScaleEndDetails {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_gestures#type:ScaleEndDetails", "", [{"name":"velocity"},{"name":"scaleVelocity"},{"name":"pointerCount"}], [], options) as ScaleEndDetails;
}
const _ScaleEndDetailsProxy = {type: "flax.core/sdk_gestures#type:ScaleEndDetails", parameters: _flaxMemberParameters87, constructors: {"": _flaxMemberParameters87}, methods: {"toStringShort":_flaxMemberParameters7,"toString":_flaxMemberParameters16,"toDiagnosticsNode":_flaxMemberParameters15,"debugFillProperties":_flaxMemberParameters9}, getters: ["velocity","scaleVelocity","pointerCount"], setters: [], contextMembers: [], superMembers: ["get:velocity","get:scaleVelocity","get:pointerCount","toStringShort","toString","toDiagnosticsNode","debugFillProperties"]} as const;
export interface _ScaleEndDetailsNative extends ScaleEndDetails {
readonly [_flaxDartTypeValue]: _ScaleEndDetailsNative;

toStringShort(): string;
toString(options?: {minLevel?: upstream2.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream4.DiagnosticsTreeStyle | null | undefined}): upstream3.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
get velocity(): upstream1.Velocity;
get scaleVelocity(): number;
get pointerCount(): number;
}
export abstract class _ScaleEndDetailsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScaleEndDetails>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ScaleEndDetails;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:ScaleEndDetails", readonly [], false];
constructor(options?: {velocity?: Readonly<{ "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [] }> | undefined; scaleVelocity?: number | undefined; pointerCount?: number | undefined}) { super(_ScaleEndDetailsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ScaleEndDetailsNative.prototype, _ScaleEndDetailsProxy);
export namespace _ScaleEndDetailsFactory { export function implement(args: [options?: {velocity?: Readonly<{ "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [] }> | undefined; scaleVelocity?: number | undefined; pointerCount?: number | undefined}], implementation: {}): ScaleEndDetails {
return constructProxy(_ScaleEndDetailsProxy, args, implementation) as ScaleEndDetails; } }
const _ScaleEndDetailsBinding = _flaxProxyFactory(_ScaleEndDetailsFactory, _ScaleEndDetailsNative) as unknown as typeof _ScaleEndDetailsFactory & (new(options?: {velocity?: Readonly<{ "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [] }> | undefined; scaleVelocity?: number | undefined; pointerCount?: number | undefined}) => _ScaleEndDetailsNative);
export const ScaleEndDetails: typeof _ScaleEndDetailsBinding & _FlaxInstanceType<ScaleEndDetails> & _FlaxDartType<ScaleEndDetails, readonly ["class", "flax.core/sdk_gestures#type:ScaleEndDetails", readonly [], false]> = _flaxBindInstanceType<ScaleEndDetails, typeof _ScaleEndDetailsBinding>(_ScaleEndDetailsBinding, "flax.core/sdk_gestures#type:ScaleEndDetails", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _ScaleEndDetailsBinding & _FlaxInstanceType<ScaleEndDetails> & _FlaxDartType<ScaleEndDetails, readonly ["class", "flax.core/sdk_gestures#type:ScaleEndDetails", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "velocity" | "scaleVelocity" | "pointerCount" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/gestures/scale.dart::ScaleEndDetails" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

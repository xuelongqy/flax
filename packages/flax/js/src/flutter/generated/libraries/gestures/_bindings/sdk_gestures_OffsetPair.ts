// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import { _flaxMemberParameters7, _flaxMemberParameters56, _flaxMemberParameters57, _flaxMemberParameters0 } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface OffsetPair extends Readonly<{ "__flaxBound:package:flutter/src/gestures/recognizer.dart::OffsetPair": readonly [] }> { readonly __OffsetPair: unique symbol;
readonly [_flaxDartTypeValue]: OffsetPair;

readonly local: upstream0.Offset;
readonly global: upstream0.Offset;
toString(): string;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/gestures/recognizer.dart::OffsetPair": readonly [] }>): OffsetPair;
operatorSubtract(other: Readonly<{ "__flaxBound:package:flutter/src/gestures/recognizer.dart::OffsetPair": readonly [] }>): OffsetPair;
}
defineObject("flax.core/sdk_gestures#type:OffsetPair", ["local","global"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:OffsetPair", "object", {"toString":_flaxMemberParameters7,"operatorAdd":_flaxMemberParameters56,"operatorSubtract":_flaxMemberParameters56}, {}), []);
export function _OffsetPairFactory(options: { local: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; global: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> }): OffsetPair {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_gestures#type:OffsetPair", "", [{"name":"local","required":true},{"name":"global","required":true}], [], options) as OffsetPair;
}
export namespace _OffsetPairFactory {
export function fromEventPosition(event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): OffsetPair {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_gestures#type:OffsetPair", "fromEventPosition", [{"name":"event","required":true,"positional":true}], [event], {}) as OffsetPair;
}
}
export namespace _OffsetPairFactory {
export function fromEventDelta(event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): OffsetPair {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_gestures#type:OffsetPair", "fromEventDelta", [{"name":"event","required":true,"positional":true}], [event], {}) as OffsetPair;
}
}
const _OffsetPairProxy = {type: "flax.core/sdk_gestures#type:OffsetPair", parameters: _flaxMemberParameters57, constructors: {"": _flaxMemberParameters57,"fromEventPosition": _flaxMemberParameters0,"fromEventDelta": _flaxMemberParameters0}, methods: {"toString":_flaxMemberParameters7,"operatorAdd":_flaxMemberParameters56,"operatorSubtract":_flaxMemberParameters56}, getters: ["local","global"], setters: [], contextMembers: [], superMembers: ["get:local","get:global","toString","operatorAdd","operatorSubtract"]} as const;
export interface _OffsetPairNative extends OffsetPair {
readonly [_flaxDartTypeValue]: _OffsetPairNative;
readonly [_flaxDartConstructors]?: {"": (options: {local: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; global: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}) => void;"fromEventPosition": (event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>) => void;"fromEventDelta": (event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>) => void;};

toString(): string;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/gestures/recognizer.dart::OffsetPair": readonly [] }>): OffsetPair;
operatorSubtract(other: Readonly<{ "__flaxBound:package:flutter/src/gestures/recognizer.dart::OffsetPair": readonly [] }>): OffsetPair;
get local(): upstream0.Offset;
get global(): upstream0.Offset;
}
export abstract class _OffsetPairNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<OffsetPair>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: OffsetPair;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:OffsetPair", readonly [], false];
constructor(options: {local: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; global: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}); constructor(call: _FlaxProxySuper<_OffsetPairNative>); constructor(...args: unknown[]) { super(_OffsetPairProxy, args); }
}
_flaxDefineProxyBase(_OffsetPairNative.prototype, _OffsetPairProxy);
export namespace _OffsetPairFactory { export function implement(args: [options: {local: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; global: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}], implementation: {}): OffsetPair {
return constructProxy(_OffsetPairProxy, args, implementation) as OffsetPair; } }
const _OffsetPairBinding = _flaxProxyFactory(_OffsetPairFactory, _OffsetPairNative) as unknown as typeof _OffsetPairFactory & (new(options: {local: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; global: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}) => _OffsetPairNative) & (new(call: _FlaxProxySuper<_OffsetPairNative>) => _OffsetPairNative);
export namespace _OffsetPairFactory { export declare const zero: OffsetPair; }
_flaxDefineStaticGetters(_OffsetPairFactory, "flax.core/sdk_gestures#read:OffsetPair.", ["zero"]);
export const OffsetPair: typeof _OffsetPairBinding & _FlaxInstanceType<OffsetPair> & _FlaxDartType<OffsetPair, readonly ["class", "flax.core/sdk_gestures#type:OffsetPair", readonly [], false]> = _flaxBindInstanceType<OffsetPair, typeof _OffsetPairBinding>(_OffsetPairBinding, "flax.core/sdk_gestures#type:OffsetPair", ["dart:core::Object"]) as typeof _OffsetPairBinding & _FlaxInstanceType<OffsetPair> & _FlaxDartType<OffsetPair, readonly ["class", "flax.core/sdk_gestures#type:OffsetPair", readonly [], false]>;
